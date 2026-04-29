import { DocumentoNaoNaFilaError, EntregaJaEmAndamentoError, EntregaNaoEncontradaError, EntregaSemPendenciasError, NenhumItemEntregueError, QuantidadeExcedeTotalError, QuantidadeInvalidaError, } from '../../errors.js';
function isIntegerOnlyUnit(unidade) {
    return unidade !== 'KG';
}
function isValidQuantityForUnit(quantity, unidade) {
    if (quantity === 0) {
        return true;
    }
    if (isIntegerOnlyUnit(unidade)) {
        return Number.isInteger(quantity);
    }
    return Number.isInteger(quantity * 2);
}
function normalizeQuantity(quantity) {
    return Math.round(quantity * 1000) / 1000;
}
export function createEntregaService({ courierGateway, deliveryGateway, documentGateway, entregaRepository, }) {
    async function loadDetail(sessaoId, documento) {
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
        async listCouriers(correlationId) {
            return courierGateway.listActiveCouriers({ correlationId });
        },
        async getDetail(sessaoId, documento) {
            return loadDetail(sessaoId, documento);
        },
        async getPendingDeliveries(sessaoId, documento) {
            const detail = await loadDetail(sessaoId, documento);
            const itensPendentes = detail.itens.filter((item) => item.qtdPendente > 0);
            if (itensPendentes.length === 0) {
                throw new EntregaSemPendenciasError();
            }
            return {
                documento: detail.documento.numero,
                modo: 'reentrega',
                itensPendentes,
                historico: detail.historico,
            };
        },
        async startDelivery(input) {
            const queueDocument = await entregaRepository.findQueueDocumentByNumber(input.sessao.id, input.documento);
            if (!queueDocument) {
                throw new DocumentoNaoNaFilaError();
            }
            const openDelivery = await entregaRepository.findOpenDeliveryByDocument(input.documento);
            if (openDelivery) {
                throw new EntregaJaEmAndamentoError(openDelivery.entregadorNome);
            }
            const [courier, liveDocument, history] = await Promise.all([
                courierGateway.findCourierByCode({
                    codigo: input.entregadorCodigo,
                    correlationId: input.correlationId,
                }),
                documentGateway.findDocumentByAccessKey({
                    chaveAcesso: queueDocument.documentoChave,
                    filial: input.sessao.loja.codigo,
                    correlationId: input.correlationId,
                }),
                entregaRepository.listDeliveryHistory(input.documento),
            ]);
            const syncedQueue = await entregaRepository.syncQueueDocument(input.sessao.id, liveDocument);
            const mode = liveDocument.statusAtual === 'parcial' ||
                liveDocument.itens.some((item) => item.qtdEntregue > 0)
                ? 'reentrega'
                : 'entrega';
            const pendingItems = syncedQueue.payloadProtheus.itens
                .filter((item) => item.qtdEntregue < item.qtdTotal)
                .map((item) => ({
                itemIdProtheus: item.id,
                descricao: item.descricao,
                unidade: item.unidade,
                qtdTotal: normalizeQuantity(item.qtdTotal - item.qtdEntregue),
            }));
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
        async finalizeDelivery(input) {
            const delivery = await entregaRepository.findDeliveryById(input.entregaId, input.sessao.id);
            if (!delivery) {
                throw new EntregaNaoEncontradaError();
            }
            const queueDocument = await entregaRepository.findQueueDocumentByNumber(input.sessao.id, delivery.documentoNumero);
            if (!queueDocument) {
                throw new DocumentoNaoNaFilaError();
            }
            if (delivery.status !== 'em_andamento') {
                return {
                    entregaId: delivery.id,
                    documento: delivery.documentoNumero,
                    status: delivery.status,
                    motivoPendencia: delivery.motivoPendencia ?? null,
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
            const liveDocument = await documentGateway.findDocumentByAccessKey({
                chaveAcesso: queueDocument.documentoChave,
                filial: input.sessao.loja.codigo,
                correlationId: input.correlationId,
            });
            const syncedQueue = await entregaRepository.syncQueueDocument(input.sessao.id, liveDocument);
            const availableByItem = new Map(syncedQueue.payloadProtheus.itens.map((item) => [
                item.id,
                item.qtdTotal - item.qtdEntregue,
            ]));
            const deliveredItems = delivery.itens.map((item) => {
                const requestedQuantity = input.tipo === 'total'
                    ? item.qtdTotal
                    : (input.itens?.find((entry) => entry.itemIdProtheus === item.itemIdProtheus)
                        ?.qtdEntregue ?? 0);
                const normalizedQuantity = normalizeQuantity(requestedQuantity);
                const availableQuantity = normalizeQuantity(availableByItem.get(item.itemIdProtheus) ?? 0);
                if (!isValidQuantityForUnit(normalizedQuantity, item.unidade)) {
                    throw new QuantidadeInvalidaError();
                }
                if (normalizedQuantity > item.qtdTotal || normalizedQuantity > availableQuantity) {
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
                const originalItem = delivery.itens.find((deliveryItem) => deliveryItem.itemIdProtheus === item.itemIdProtheus);
                return (originalItem?.qtdTotal ?? 0) > item.qtdEntregue;
            });
            const finalStatus = hasPendingItems ? 'finalizada_parcial' : 'finalizada_total';
            const tipoEntrega = finalStatus === 'finalizada_total' ? 'total' : 'parcial';
            const motivoPendencia = finalStatus === 'finalizada_parcial' ? (input.motivoPendencia ?? null) : null;
            await deliveryGateway.updateDelivery({
                documento: delivery.documentoNumero,
                chaveAcesso: syncedQueue.documentoChave,
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
                queueDocument: syncedQueue,
            });
        },
    };
}
//# sourceMappingURL=entrega.service.js.map