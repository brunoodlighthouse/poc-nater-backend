import { DocumentoInvalidoError, DocumentoVendaFuturaError, EntregaJaRealizadaError, ProtheusIndisponivelError, } from '../../errors.js';
import { config } from '../../config.js';
import { logger } from '../../logger.js';
import { getMockDocumentByAccessKey } from './mock-store.js';
function buildProtheusUrl(path) {
    const normalizedBaseUrl = config.PROTHEUS_BASE_URL.endsWith('/')
        ? config.PROTHEUS_BASE_URL
        : `${config.PROTHEUS_BASE_URL}/`;
    return new URL(path, normalizedBaseUrl);
}
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
                const document = getMockDocumentByAccessKey(chaveAcesso);
                if (!document) {
                    throw new DocumentoInvalidoError();
                }
                return validateDocument(document);
            },
        };
    }
    return {
        async findDocumentByAccessKey({ chaveAcesso, filial, correlationId }) {
            const url = buildProtheusUrl('entregas/v1/documento/consulta');
            const startedAt = Date.now();
            let response;
            try {
                response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Correlation-Id': correlationId,
                    },
                    body: JSON.stringify({ chaveAcesso, filial }),
                    signal: AbortSignal.timeout(config.PROTHEUS_TIMEOUT_MS),
                });
            }
            catch (error) {
                logger.error({ err: error, correlationId, protheusEndpoint: url.pathname }, 'Falha ao consultar documento no Protheus');
                throw new ProtheusIndisponivelError();
            }
            if (response.status === 404) {
                throw new DocumentoInvalidoError();
            }
            if (!response.ok) {
                logger.error({
                    correlationId,
                    protheusEndpoint: url.pathname,
                    statusHttp: response.status,
                    durationMs: Date.now() - startedAt,
                }, 'Resposta invalida ao consultar documento no Protheus');
                throw new ProtheusIndisponivelError();
            }
            const payload = (await response.json());
            const document = validateDocument({
                ...payload,
                chaveAcesso,
            });
            logger.info({
                correlationId,
                protheusEndpoint: url.pathname,
                documento: document.documento,
                durationMs: Date.now() - startedAt,
            }, 'Consulta de documento concluida');
            return document;
        },
    };
}
//# sourceMappingURL=documentos.js.map