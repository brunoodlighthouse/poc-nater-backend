import { prisma } from '../../db/connection.js';
import type { ProtheusDocumento } from '../../integrations/protheus/documentos.js';
import type {
  EntregaDetalheResponse,
  EntregaEmAndamento,
  EntregaHistorico,
  EntregaHistoricoLog,
  EntregaModo,
  FinalizarEntregaResponse,
  IniciarEntregaResponse,
} from './entrega.types.js';

type QueueDocumentRecord = {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  documentoChave: string;
  status: string;
  consultadoEm: Date;
  payloadProtheus: ProtheusDocumento;
};

type DeliveryLogRecord = {
  id: string;
  acao: string;
  motivo: string;
  dadosAntes: unknown;
  dadosDepois: unknown;
  realizadaEm: Date;
};

type DeliveryRecord = {
  id: string;
  sessaoId: string;
  documentoNumero: string;
  entregadorCodigo: string;
  entregadorNome: string;
  status: string;
  motivoPendencia: string | null;
  iniciadaEm: Date;
  finalizadaEm: Date | null;
  itens: Array<{
    itemIdProtheus: string;
    descricao: string;
    unidade: string;
    qtdTotal: number;
    qtdEntregue: number;
  }>;
  logsAlteracao: DeliveryLogRecord[];
};

function toJsonValue(document: ProtheusDocumento) {
  return JSON.parse(JSON.stringify(document)) as ProtheusDocumento;
}

function computeDeliveredByItem(
  history: DeliveryRecord[],
): Map<string, number> {
  const map = new Map<string, number>();
  for (const delivery of history) {
    if (delivery.status !== 'finalizada_total' && delivery.status !== 'finalizada_parcial') {
      continue;
    }
    for (const item of delivery.itens) {
      map.set(item.itemIdProtheus, (map.get(item.itemIdProtheus) ?? 0) + item.qtdEntregue);
    }
  }
  return map;
}

function mapDeliveryRecord(entry: {
  id: string;
  sessaoId: string;
  documentoNumero: string;
  entregadorCodigo: string;
  entregadorNome: string;
  status: string;
  motivoPendencia: string | null;
  iniciadaEm: Date;
  finalizadaEm: Date | null;
  itens: Array<{
    itemIdProtheus: string;
    descricao: string;
    unidade: string;
    qtdTotal: unknown;
    qtdEntregue: unknown;
  }>;
  logsAlteracao?: Array<{
    id: string;
    acao: string;
    motivo: string;
    dadosAntes: unknown;
    dadosDepois: unknown;
    realizadaEm: Date;
  }>;
}): DeliveryRecord {
  return {
    id: entry.id,
    sessaoId: entry.sessaoId,
    documentoNumero: entry.documentoNumero,
    entregadorCodigo: entry.entregadorCodigo,
    entregadorNome: entry.entregadorNome,
    status: entry.status,
    motivoPendencia: entry.motivoPendencia,
    iniciadaEm: entry.iniciadaEm,
    finalizadaEm: entry.finalizadaEm,
    itens: entry.itens.map((item) => ({
      itemIdProtheus: item.itemIdProtheus,
      descricao: item.descricao,
      unidade: item.unidade,
      qtdTotal: Number(item.qtdTotal),
      qtdEntregue: Number(item.qtdEntregue),
    })),
    logsAlteracao: (entry.logsAlteracao ?? []).map((l) => ({
      id: l.id,
      acao: l.acao,
      motivo: l.motivo,
      dadosAntes: l.dadosAntes,
      dadosDepois: l.dadosDepois,
      realizadaEm: l.realizadaEm,
    })),
  };
}

function mapQueueRecord(entry: {
  id: string;
  lojaCodigo: string;
  documentoNumero: string;
  documentoChave: string;
  status: string;
  consultadoEm: Date;
  payloadProtheus: unknown;
}): QueueDocumentRecord {
  return {
    id: entry.id,
    lojaCodigo: entry.lojaCodigo,
    documentoNumero: entry.documentoNumero,
    documentoChave: entry.documentoChave,
    status: entry.status,
    consultadoEm: entry.consultadoEm,
    payloadProtheus: entry.payloadProtheus as ProtheusDocumento,
  };
}

function mapHistorico(entry: DeliveryRecord): EntregaHistorico {
  const alteracoesAdmin: EntregaHistoricoLog[] = entry.logsAlteracao.map((l) => ({
    id: l.id,
    acao: l.acao,
    motivo: l.motivo,
    dadosAntes: l.dadosAntes,
    dadosDepois: l.dadosDepois,
    realizadaEm: l.realizadaEm.toISOString(),
  }));

  return {
    id: entry.id,
    status: entry.status as EntregaHistorico['status'],
    entregadorCodigo: entry.entregadorCodigo,
    entregadorNome: entry.entregadorNome,
    motivoPendencia: (entry.motivoPendencia as EntregaHistorico['motivoPendencia']) ?? null,
    iniciadaEm: entry.iniciadaEm.toISOString(),
    finalizadaEm: entry.finalizadaEm?.toISOString() ?? null,
    itens: entry.itens.map((item) => ({
      itemIdProtheus: item.itemIdProtheus,
      descricao: item.descricao,
      unidade: item.unidade,
      qtdTotal: item.qtdTotal,
      qtdEntregue: item.qtdEntregue,
    })),
    alteracoesAdmin,
  };
}

function mapOpenDelivery(entry: DeliveryRecord, mode: EntregaModo): EntregaEmAndamento {
  return {
    id: entry.id,
    documento: entry.documentoNumero,
    modo: mode,
    iniciadaEm: entry.iniciadaEm.toISOString(),
    entregador: {
      codigo: entry.entregadorCodigo,
      nome: entry.entregadorNome,
    },
    itens: entry.itens.map((item) => ({
      itemIdProtheus: item.itemIdProtheus,
      descricao: item.descricao,
      unidade: item.unidade,
      qtdTotal: item.qtdTotal,
      qtdEntregue: item.qtdEntregue,
    })),
  };
}

export function createEntregaRepository() {
  return {
    async findQueueDocumentByNumber(lojaCodigo: string, documentoNumero: string) {
      const item = await prisma.filaDocumento.findFirst({
        where: {
          lojaCodigo,
          documentoNumero,
          removidoEm: null,
        },
        orderBy: {
          consultadoEm: 'desc',
        },
      });

      return item ? mapQueueRecord(item) : null;
    },

    async syncQueueDocument(
      lojaCodigo: string,
      document: ProtheusDocumento,
    ): Promise<QueueDocumentRecord> {
      const consultadoEm = new Date();
      const existingItem = await prisma.filaDocumento.findFirst({
        where: { lojaCodigo, documentoNumero: document.documento, removidoEm: null },
      });

      if (existingItem) {
        const updated = await prisma.filaDocumento.update({
          where: { id: existingItem.id },
          data: {
            documentoChave: document.chaveAcesso,
            clienteNome: document.cliente.nome,
            qtdItens: document.itens.length,
            // status preservado: gerenciado pelas operações de entrega
            payloadProtheus: toJsonValue(document),
            consultadoEm,
          },
        });
        return mapQueueRecord(updated);
      }

      const created = await prisma.filaDocumento.create({
        data: {
          lojaCodigo,
          documentoNumero: document.documento,
          documentoChave: document.chaveAcesso,
          clienteNome: document.cliente.nome,
          qtdItens: document.itens.length,
          status: document.statusAtual === 'finalizado' ? 'finalizado' : document.statusAtual,
          payloadProtheus: toJsonValue(document),
          consultadoEm,
        },
      });
      return mapQueueRecord(created);
    },

    async listDeliveryHistory(documentoNumero: string): Promise<DeliveryRecord[]> {
      const deliveries = await prisma.entrega.findMany({
        where: {
          documentoNumero,
        },
        include: {
          itens: {
            orderBy: {
              itemIdProtheus: 'asc',
            },
          },
          logsAlteracao: {
            orderBy: {
              realizadaEm: 'desc',
            },
          },
        },
        orderBy: {
          iniciadaEm: 'desc',
        },
      });

      return deliveries.map(mapDeliveryRecord);
    },

    async findOpenDeliveryByDocument(documentoNumero: string): Promise<DeliveryRecord | null> {
      const delivery = await prisma.entrega.findFirst({
        where: {
          documentoNumero,
          status: 'em_andamento',
        },
        include: {
          itens: {
            orderBy: {
              itemIdProtheus: 'asc',
            },
          },
        },
      });

      return delivery ? mapDeliveryRecord(delivery) : null;
    },

    async findDeliveryById(entregaId: string, sessaoId: string): Promise<DeliveryRecord | null> {
      const delivery = await prisma.entrega.findFirst({
        where: {
          id: entregaId,
          sessaoId,
        },
        include: {
          itens: {
            orderBy: {
              itemIdProtheus: 'asc',
            },
          },
        },
      });

      return delivery ? mapDeliveryRecord(delivery) : null;
    },

    async createDelivery(input: {
      sessaoId: string;
      documentoNumero: string;
      entregadorCodigo: string;
      entregadorNome: string;
      entregaAnteriorId: string | null;
      mode: EntregaModo;
      itens: Array<{
        itemIdProtheus: string;
        descricao: string;
        unidade: string;
        qtdTotal: number;
      }>;
    }): Promise<IniciarEntregaResponse> {
      const created = await prisma.$transaction(async (tx) => {
        const entrega = await tx.entrega.create({
          data: {
            sessaoId: input.sessaoId,
            documentoNumero: input.documentoNumero,
            entregadorCodigo: input.entregadorCodigo,
            entregadorNome: input.entregadorNome,
            entregaAnteriorId: input.entregaAnteriorId,
            itens: {
              create: input.itens.map((item) => ({
                itemIdProtheus: item.itemIdProtheus,
                descricao: item.descricao,
                unidade: item.unidade,
                qtdTotal: item.qtdTotal,
                qtdEntregue: 0,
              })),
            },
          },
          include: {
            itens: {
              orderBy: {
                itemIdProtheus: 'asc',
              },
            },
          },
        });

        await tx.filaDocumento.updateMany({
          where: {
            documentoNumero: input.documentoNumero,
            removidoEm: null,
          },
          data: {
            status: 'em_andamento',
          },
        });

        return entrega;
      });

      return mapOpenDelivery(mapDeliveryRecord(created), input.mode);
    },

    async cancelDelivery(entregaId: string): Promise<void> {
      const delivery = await prisma.entrega.update({
        where: { id: entregaId },
        data: {
          status: 'cancelada',
          finalizadaEm: new Date(),
        },
      });

      await prisma.filaDocumento.updateMany({
        where: {
          documentoNumero: delivery.documentoNumero,
          removidoEm: null,
          status: 'em_andamento',
        },
        data: {
          status: 'pendente',
        },
      });
    },

    async finalizeDelivery(input: {
      entregaId: string;
      documentoNumero: string;
      status: 'finalizada_total' | 'finalizada_parcial';
      motivoPendencia: 'retirada_futura' | 'entrega_futura' | null;
      deliveredItems: Array<{
        itemIdProtheus: string;
        qtdEntregue: number;
      }>;
      queueDocument: QueueDocumentRecord;
    }): Promise<FinalizarEntregaResponse> {
      const finalizedAt = new Date();
      const filaStatus = input.status === 'finalizada_total' ? 'finalizado' : 'parcial';

      const result = await prisma.$transaction(async (tx) => {
        const entrega = await tx.entrega.update({
          where: { id: input.entregaId },
          data: {
            status: input.status,
            motivoPendencia: input.motivoPendencia,
            finalizadaEm: finalizedAt,
            itens: {
              updateMany: input.deliveredItems.map((item) => ({
                where: { itemIdProtheus: item.itemIdProtheus },
                data: { qtdEntregue: item.qtdEntregue },
              })),
            },
          },
          include: { itens: { orderBy: { itemIdProtheus: 'asc' } } },
        });

        await tx.filaDocumento.update({
          where: { id: input.queueDocument.id },
          data: {
            status: filaStatus,
            // payloadProtheus não é alterado: mantém os dados originais do Protheus
            consultadoEm: finalizedAt,
          },
        });

        return mapDeliveryRecord(entrega);
      });

      return {
        entregaId: result.id,
        documento: result.documentoNumero,
        status: result.status as FinalizarEntregaResponse['status'],
        motivoPendencia:
          (result.motivoPendencia as FinalizarEntregaResponse['motivoPendencia']) ?? null,
        filaStatus,
        finalizadaEm: finalizedAt.toISOString(),
        itens: result.itens.map((item) => ({
          itemIdProtheus: item.itemIdProtheus,
          descricao: item.descricao,
          unidade: item.unidade,
          qtdTotal: item.qtdTotal,
          qtdEntregue: item.qtdEntregue,
        })),
      };
    },

    mapDetailResponse(input: {
      queueDocument: QueueDocumentRecord;
      history: DeliveryRecord[];
      openDelivery: DeliveryRecord | null;
    }): EntregaDetalheResponse {
      const payload = input.queueDocument.payloadProtheus;
      const deliveredByItem = computeDeliveredByItem(input.history);
      const hasAnyDelivered = [...deliveredByItem.values()].some((q) => q > 0);
      const mode: EntregaModo = hasAnyDelivered ? 'reentrega' : 'entrega';

      return {
        documento: {
          numero: payload.documento,
          tipo: payload.tipo,
          chaveAcesso: payload.chaveAcesso,
          cliente: payload.cliente,
          statusAtual: input.queueDocument.status as EntregaDetalheResponse['documento']['statusAtual'],
          consultadoEm: input.queueDocument.consultadoEm.toISOString(),
        },
        modo: mode,
        itens: payload.itens.map((item) => {
          const qtdJaEntregue = Math.min(item.qtdTotal, deliveredByItem.get(item.id) ?? 0);
          return {
            id: item.id,
            codigoProduto: item.codigoProduto,
            descricao: item.descricao,
            unidade: item.unidade,
            qtdTotal: item.qtdTotal,
            qtdJaEntregue,
            qtdPendente: Math.max(0, item.qtdTotal - qtdJaEntregue),
          };
        }),
        entregaEmAndamento: input.openDelivery ? mapOpenDelivery(input.openDelivery, mode) : null,
        historico: input.history.map(mapHistorico),
      };
    },
  };
}

export type EntregaRepository = ReturnType<typeof createEntregaRepository>;
