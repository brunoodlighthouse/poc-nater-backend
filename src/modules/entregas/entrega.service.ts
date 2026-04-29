import {
  DocumentoNaoNaFilaError,
  EntregaJaEmAndamentoError,
  EntregaNaoPodeSerCanceladaError,
  EntregaNaoEncontradaError,
  EntregaSemPendenciasError,
  NenhumItemEntregueError,
  QuantidadeExcedeTotalError,
  QuantidadeInvalidaError,
} from '../../errors.js';
import type { DeliveryGateway } from '../../integrations/protheus/entregas.js';
import type { EntregadorRepository } from '../entregadores/entregador.repository.js';
import type { EntregaRepository } from './entrega.repository.js';
import type {
  EntregaDetalheResponse,
  FinalizarEntregaInput,
  FinalizarEntregaResponse,
  IniciarEntregaInput,
} from './entrega.types.js';

type EntregaServiceDependencies = {
  entregadorRepository: EntregadorRepository;
  deliveryGateway: DeliveryGateway;
  entregaRepository: EntregaRepository;
};

function isIntegerOnlyUnit(unidade: string): boolean {
  return unidade !== 'KG';
}

function isValidQuantityForUnit(quantity: number, unidade: string): boolean {
  if (quantity === 0) {
    return true;
  }

  if (isIntegerOnlyUnit(unidade)) {
    return Number.isInteger(quantity);
  }

  return Number.isInteger(quantity * 2);
}

function normalizeQuantity(quantity: number): number {
  return Math.round(quantity * 1000) / 1000;
}

export function createEntregaService({
  entregadorRepository,
  deliveryGateway,
  entregaRepository,
}: EntregaServiceDependencies) {
  async function loadDetail(sessaoId: string, documento: string): Promise<EntregaDetalheResponse> {
    const queueDocument = await entregaRepository.findQueueDocumentByNumber(sessaoId, documento);

    if (!queueDocument) {
      throw new DocumentoNaoNaFilaError();
    }

    const [history, openDelivery] = await Promise.all([
      entregaRepository.listDeliveryHistory(documento),
      entregaRepository.findOpenDeliveryByDocument(documento),
    ]);

    return entregaRepository.mapDetailResponse({
      queueDocument,
      history,
      openDelivery,
    });
  }

  return {
    async listCouriers() {
      return entregadorRepository.listActive();
    },

    async getDetail(sessaoId: string, documento: string): Promise<EntregaDetalheResponse> {
      return loadDetail(sessaoId, documento);
    },

    async getPendingDeliveries(sessaoId: string, documento: string) {
      const detail = await loadDetail(sessaoId, documento);
      const itensPendentes = detail.itens.filter((item) => item.qtdPendente > 0);

      if (itensPendentes.length === 0) {
        throw new EntregaSemPendenciasError();
      }

      return {
        documento: detail.documento.numero,
        modo: 'reentrega' as const,
        itensPendentes,
        historico: detail.historico,
      };
    },

    async startDelivery(input: IniciarEntregaInput) {
      const queueDocument = await entregaRepository.findQueueDocumentByNumber(
        input.sessao.id,
        input.documento,
      );

      if (!queueDocument) {
        throw new DocumentoNaoNaFilaError();
      }

      const openDelivery = await entregaRepository.findOpenDeliveryByDocument(input.documento);

      if (openDelivery) {
        throw new EntregaJaEmAndamentoError(openDelivery.entregadorNome);
      }

      const [courier, history] = await Promise.all([
        entregadorRepository.findByCode(input.entregadorCodigo),
        entregaRepository.listDeliveryHistory(input.documento),
      ]);

      // Calcula quantidade já entregue por item a partir do histórico local
      const deliveredByItem = new Map<string, number>();
      for (const delivery of history) {
        if (delivery.status !== 'finalizada_total' && delivery.status !== 'finalizada_parcial') {
          continue;
        }
        for (const item of delivery.itens) {
          deliveredByItem.set(
            item.itemIdProtheus,
            (deliveredByItem.get(item.itemIdProtheus) ?? 0) + item.qtdEntregue,
          );
        }
      }

      const hasAnyDelivered = [...deliveredByItem.values()].some((q) => q > 0);
      const mode = hasAnyDelivered ? 'reentrega' : 'entrega';

      const pendingItems = queueDocument.payloadProtheus.itens
        .map((item) => ({
          itemIdProtheus: item.id,
          descricao: item.descricao,
          unidade: item.unidade,
          qtdTotal: normalizeQuantity(item.qtdTotal - (deliveredByItem.get(item.id) ?? 0)),
        }))
        .filter((item) => item.qtdTotal > 0);

      if (pendingItems.length === 0) {
        throw new EntregaSemPendenciasError();
      }

      const latestDelivery = history[0] ?? null;

      return entregaRepository.createDelivery({
        sessaoId: input.sessao.id,
        documentoNumero: input.documento,
        entregadorCodigo: courier.codigo,
        entregadorNome: courier.nome,
        entregaAnteriorId: latestDelivery?.id ?? null,
        mode,
        itens: pendingItems,
      });
    },

    async cancelDelivery(entregaId: string, sessaoId: string): Promise<void> {
      const delivery = await entregaRepository.findDeliveryById(entregaId, sessaoId);

      if (!delivery) {
        throw new EntregaNaoEncontradaError();
      }

      if (delivery.status !== 'em_andamento') {
        throw new EntregaNaoPodeSerCanceladaError();
      }

      await entregaRepository.cancelDelivery(entregaId);
    },

    async finalizeDelivery(input: FinalizarEntregaInput): Promise<FinalizarEntregaResponse> {
      const delivery = await entregaRepository.findDeliveryById(input.entregaId, input.sessao.id);

      if (!delivery) {
        throw new EntregaNaoEncontradaError();
      }

      const queueDocument = await entregaRepository.findQueueDocumentByNumber(
        input.sessao.id,
        delivery.documentoNumero,
      );

      if (!queueDocument) {
        throw new DocumentoNaoNaFilaError();
      }

      if (delivery.status !== 'em_andamento') {
        return {
          entregaId: delivery.id,
          documento: delivery.documentoNumero,
          status: delivery.status as FinalizarEntregaResponse['status'],
          motivoPendencia:
            (delivery.motivoPendencia as FinalizarEntregaResponse['motivoPendencia']) ?? null,
          filaStatus: queueDocument.status === 'finalizado' ? 'finalizado' : 'parcial',
          finalizadaEm: delivery.finalizadaEm?.toISOString() ?? new Date().toISOString(),
          itens: delivery.itens.map((item) => ({
            itemIdProtheus: item.itemIdProtheus,
            descricao: item.descricao,
            unidade: item.unidade,
            qtdTotal: item.qtdTotal,
            qtdEntregue: item.qtdEntregue,
          })),
        };
      }

      const deliveredItems = delivery.itens.map((item) => {
        const requestedQuantity =
          input.tipo === 'total'
            ? item.qtdTotal
            : (input.itens?.find((entry) => entry.itemIdProtheus === item.itemIdProtheus)
                ?.qtdEntregue ?? 0);
        const normalizedQuantity = normalizeQuantity(requestedQuantity);

        if (!isValidQuantityForUnit(normalizedQuantity, item.unidade)) {
          throw new QuantidadeInvalidaError();
        }

        if (normalizedQuantity > item.qtdTotal) {
          throw new QuantidadeExcedeTotalError();
        }

        return {
          itemIdProtheus: item.itemIdProtheus,
          qtdEntregue: normalizedQuantity,
        };
      });

      if (!deliveredItems.some((item) => item.qtdEntregue > 0)) {
        throw new NenhumItemEntregueError();
      }

      const hasPendingItems = deliveredItems.some((item) => {
        const originalItem = delivery.itens.find(
          (deliveryItem) => deliveryItem.itemIdProtheus === item.itemIdProtheus,
        );

        return (originalItem?.qtdTotal ?? 0) > item.qtdEntregue;
      });
      const finalStatus = hasPendingItems ? 'finalizada_parcial' : 'finalizada_total';
      const tipoEntrega = finalStatus === 'finalizada_total' ? 'total' : 'parcial';
      const motivoPendencia =
        finalStatus === 'finalizada_parcial' ? (input.motivoPendencia ?? null) : null;

      await deliveryGateway.updateDelivery({
        documento: delivery.documentoNumero,
        chaveAcesso: queueDocument.documentoChave,
        filial: input.sessao.loja.codigo,
        entregadorCodigo: delivery.entregadorCodigo,
        entregadorNome: delivery.entregadorNome,
        tipoEntrega,
        motivoPendencia: motivoPendencia ?? undefined,
        idempotencyKey: delivery.id,
        correlationId: input.correlationId,
        itens: deliveredItems.map((item) => ({
          id: item.itemIdProtheus,
          qtdEntregue: item.qtdEntregue,
        })),
      });

      return entregaRepository.finalizeDelivery({
        entregaId: delivery.id,
        documentoNumero: delivery.documentoNumero,
        status: finalStatus,
        motivoPendencia,
        deliveredItems,
        queueDocument,
      });
    },
  };
}

export type EntregaService = ReturnType<typeof createEntregaService>;
