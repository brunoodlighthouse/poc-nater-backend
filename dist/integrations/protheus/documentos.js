import { DocumentoInvalidoError, DocumentoVendaFuturaError, EntregaJaRealizadaError, ProtheusIndisponivelError, } from '../../errors.js';
import { config } from '../../config.js';
import { prisma } from '../../db/connection.js';
import { protheusRequest } from './client.js';
function validateDocument(document) {
    if (document.isVendaFutura) {
        throw new DocumentoVendaFuturaError();
    }
    if (document.statusAtual === 'finalizado') {
        throw new EntregaJaRealizadaError(document.entregueEm, document.entregadorNome);
    }
    return document;
}
export function createDocumentGateway() {
    if (config.PROTHEUS_MOCK_ENABLED) {
        return {
            async findDocumentByAccessKey({ chaveAcesso }) {
                const row = await prisma.documentoProtheus.findUnique({
                    where: { chaveAcesso },
                });
                if (!row) {
                    throw new DocumentoInvalidoError();
                }
                return validateDocument(row.payload);
            },
        };
    }
    return {
        async findDocumentByAccessKey({ chaveAcesso, filial, correlationId }) {
            const response = await protheusRequest({
                method: 'POST',
                path: 'entregas/v1/documento/consulta',
                body: { chaveAcesso, filial },
                correlationId,
            });
            if (response.status === 404) {
                throw new DocumentoInvalidoError();
            }
            if (!response.ok) {
                throw new ProtheusIndisponivelError();
            }
            const payload = await response.json();
            return validateDocument({ ...payload, chaveAcesso });
        },
    };
}
//# sourceMappingURL=documentos.js.map