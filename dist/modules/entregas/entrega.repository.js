import { prisma } from '../../db/connection.js';
function toJsonValue(document) {
    return JSON.parse(JSON.stringify(document));
}
function mapDeliveryMode(payload) {
    return payload.statusAtual === 'parcial' || payload.itens.some((item) => item.qtdEntregue > 0)
        ? 'reentrega'
        : 'entrega';
}
function mapDeliveryRecord(entry) {
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
    };
}
function mapQueueRecord(entry) {
    return {
        id: entry.id,
        sessaoId: entry.sessaoId,
        documentoNumero: entry.documentoNumero,
        documentoChave: entry.documentoChave,
        status: entry.status,
        consultadoEm: entry.consultadoEm,
        payloadProtheus: entry.payloadProtheus,
    };
}
function mapHistorico(entry) {
    return {
        id: entry.id,
        status: entry.status,
        entregadorCodigo: entry.entregadorCodigo,
        entregadorNome: entry.entregadorNome,
        motivoPendencia: entry.motivoPendencia ?? null,
        iniciadaEm: entry.iniciadaEm.toISOString(),
        finalizadaEm: entry.finalizadaEm?.toISOString() ?? null,
        itens: entry.itens.map((item) => ({
            itemIdProtheus: item.itemIdProtheus,
            descricao: item.descricao,
            unidade: item.unidade,
            qtdTotal: item.qtdTotal,
            qtdEntregue: item.qtdEntregue,
        })),
    };
}
function mapOpenDelivery(entry, mode) {
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
        async findQueueDocumentByNumber(sessaoId, documentoNumero) {
            const item = await prisma.filaDocumento.findFirst({
                where: {
                    sessaoId,
                    documentoNumero,
                    removidoEm: null,
                },
                orderBy: {
                    consultadoEm: 'desc',
                },
            });
            return item ? mapQueueRecord(item) : null;
        },
        async syncQueueDocument(sessaoId, document) {
            const consultadoEm = new Date();
            const status = document.statusAtual === 'finalizado' ? 'finalizado' : document.statusAtual;
            const existingItem = await prisma.filaDocumento.findFirst({
                where: {
                    sessaoId,
                    documentoNumero: document.documento,
                    removidoEm: null,
                },
            });
            if (existingItem) {
                const updated = await prisma.filaDocumento.update({
                    where: {
                        id: existingItem.id,
                    },
                    data: {
                        documentoChave: document.chaveAcesso,
                        clienteNome: document.cliente.nome,
                        qtdItens: document.itens.length,
                        status,
                        payloadProtheus: toJsonValue(document),
                        consultadoEm,
                    },
                });
                return mapQueueRecord(updated);
            }
            const created = await prisma.filaDocumento.create({
                data: {
                    sessaoId,
                    documentoNumero: document.documento,
                    documentoChave: document.chaveAcesso,
                    clienteNome: document.cliente.nome,
                    qtdItens: document.itens.length,
                    status,
                    payloadProtheus: toJsonValue(document),
                    consultadoEm,
                },
            });
            return mapQueueRecord(created);
        },
        async listDeliveryHistory(documentoNumero) {
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
                },
                orderBy: {
                    iniciadaEm: 'desc',
                },
            });
            return deliveries.map(mapDeliveryRecord);
        },
        async findOpenDeliveryByDocument(documentoNumero) {
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
        async findDeliveryById(entregaId, sessaoId) {
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
        async createDelivery(input) {
            const created = await prisma.entrega.create({
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
            return mapOpenDelivery(mapDeliveryRecord(created), input.mode);
        },
        async finalizeDelivery(input) {
            const finalizedAt = new Date();
            const payload = toJsonValue(input.queueDocument.payloadProtheus);
            const deliveredByItem = new Map(input.deliveredItems.map((item) => [item.itemIdProtheus, item.qtdEntregue]));
            for (const item of payload.itens) {
                const deliveredNow = deliveredByItem.get(item.id) ?? 0;
                item.qtdEntregue = Math.min(item.qtdTotal, item.qtdEntregue + deliveredNow);
            }
            const filaStatus = payload.itens.some((item) => item.qtdEntregue < item.qtdTotal)
                ? 'parcial'
                : 'finalizado';
            payload.statusAtual = filaStatus;
            const result = await prisma.$transaction(async (tx) => {
                const entrega = await tx.entrega.update({
                    where: {
                        id: input.entregaId,
                    },
                    data: {
                        status: input.status,
                        motivoPendencia: input.motivoPendencia,
                        finalizadaEm: finalizedAt,
                        itens: {
                            updateMany: input.deliveredItems.map((item) => ({
                                where: {
                                    itemIdProtheus: item.itemIdProtheus,
                                },
                                data: {
                                    qtdEntregue: item.qtdEntregue,
                                },
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
                await tx.filaDocumento.update({
                    where: {
                        id: input.queueDocument.id,
                    },
                    data: {
                        status: filaStatus,
                        payloadProtheus: payload,
                        consultadoEm: finalizedAt,
                    },
                });
                return mapDeliveryRecord(entrega);
            });
            return {
                entregaId: result.id,
                documento: result.documentoNumero,
                status: result.status,
                motivoPendencia: result.motivoPendencia ?? null,
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
        mapDetailResponse(input) {
            const payload = input.queueDocument.payloadProtheus;
            const mode = mapDeliveryMode(payload);
            return {
                documento: {
                    numero: payload.documento,
                    tipo: payload.tipo,
                    chaveAcesso: payload.chaveAcesso,
                    cliente: payload.cliente,
                    statusAtual: input.queueDocument
                        .status,
                    consultadoEm: input.queueDocument.consultadoEm.toISOString(),
                },
                modo: mode,
                itens: payload.itens.map((item) => ({
                    id: item.id,
                    codigoProduto: item.codigoProduto,
                    descricao: item.descricao,
                    unidade: item.unidade,
                    qtdTotal: item.qtdTotal,
                    qtdJaEntregue: item.qtdEntregue,
                    qtdPendente: Math.max(0, item.qtdTotal - item.qtdEntregue),
                })),
                entregaEmAndamento: input.openDelivery ? mapOpenDelivery(input.openDelivery, mode) : null,
                historico: input.history.map(mapHistorico),
            };
        },
    };
}
//# sourceMappingURL=entrega.repository.js.map