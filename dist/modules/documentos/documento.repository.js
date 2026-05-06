import { prisma } from '../../db/connection.js';
function mapDocumentStatus(statusAtual) {
    return statusAtual === 'parcial' ? 'parcial' : 'pendente';
}
function mapDocumentToResponse(document, consultadoEm) {
    return {
        documento: document.documento,
        tipo: document.tipo,
        chaveAcesso: document.chaveAcesso,
        cliente: document.cliente,
        statusAtual: mapDocumentStatus(document.statusAtual),
        itens: document.itens,
        consultadoEm: consultadoEm.toISOString(),
    };
}
export function createDocumentoRepository({ documentGateway }) {
    function toJsonValue(document) {
        return JSON.parse(JSON.stringify(document));
    }
    return {
        async findDocumentByAccessKey(input) {
            return documentGateway.findDocumentByAccessKey(input);
        },
        async findInQueueByChave(chaveAcesso) {
            const item = await prisma.filaDocumento.findFirst({
                where: { documentoChave: chaveAcesso, removidoEm: null },
                orderBy: { consultadoEm: 'desc' },
            });
            if (!item)
                return null;
            return item.payloadProtheus;
        },
        async saveToQueue(input) {
            const consultadoEm = new Date();
            const existingItem = await prisma.filaDocumento.findFirst({
                where: {
                    lojaCodigo: input.lojaCodigo,
                    documentoNumero: input.document.documento,
                    removidoEm: null,
                },
            });
            if (existingItem) {
                const updatedItem = await prisma.filaDocumento.update({
                    where: {
                        id: existingItem.id,
                    },
                    data: {
                        documentoChave: input.document.chaveAcesso,
                        clienteNome: input.document.cliente.nome,
                        qtdItens: input.document.itens.length,
                        // status preservado: gerenciado pelas operações de entrega, não pelo Protheus
                        payloadProtheus: toJsonValue(input.document),
                        consultadoEm,
                    },
                });
                return mapDocumentToResponse(input.document, updatedItem.consultadoEm);
            }
            const createdItem = await prisma.filaDocumento.create({
                data: {
                    lojaCodigo: input.lojaCodigo,
                    documentoNumero: input.document.documento,
                    documentoChave: input.document.chaveAcesso,
                    clienteNome: input.document.cliente.nome,
                    qtdItens: input.document.itens.length,
                    status: mapDocumentStatus(input.document.statusAtual),
                    payloadProtheus: toJsonValue(input.document),
                    consultadoEm,
                },
            });
            return mapDocumentToResponse(input.document, createdItem.consultadoEm);
        },
    };
}
//# sourceMappingURL=documento.repository.js.map