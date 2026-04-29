import { config } from '../../config.js';
import { ProtheusIndisponivelError } from '../../errors.js';
import { logger } from '../../logger.js';
import { applyMockDelivery } from './mock-store.js';
function buildProtheusUrl(path) {
    const normalizedBaseUrl = config.PROTHEUS_BASE_URL.endsWith('/')
        ? config.PROTHEUS_BASE_URL
        : `${config.PROTHEUS_BASE_URL}/`;
    return new URL(path, normalizedBaseUrl);
}
export function createDeliveryGateway() {
    if (config.PROTHEUS_MOCK_ENABLED) {
        return {
            async updateDelivery(input) {
                applyMockDelivery({
                    chaveAcesso: input.chaveAcesso,
                    entregadorCodigo: input.entregadorCodigo,
                    entregadorNome: input.entregadorNome,
                    tipoEntrega: input.tipoEntrega,
                    idempotencyKey: input.idempotencyKey,
                    itens: input.itens,
                });
            },
        };
    }
    return {
        async updateDelivery(input) {
            const url = buildProtheusUrl('entregas/v1/entrega/atualizar');
            const startedAt = Date.now();
            let response;
            try {
                response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Correlation-Id': input.correlationId,
                    },
                    body: JSON.stringify({
                        documento: input.documento,
                        filial: input.filial,
                        entregador: input.entregadorCodigo,
                        tipoEntrega: input.tipoEntrega,
                        motivoPendencia: input.motivoPendencia,
                        idempotencyKey: input.idempotencyKey,
                        itens: input.itens,
                    }),
                    signal: AbortSignal.timeout(config.PROTHEUS_TIMEOUT_MS),
                });
            }
            catch (error) {
                logger.error({
                    err: error,
                    correlationId: input.correlationId,
                    protheusEndpoint: url.pathname,
                    documento: input.documento,
                    entregaId: input.idempotencyKey,
                }, 'Falha ao atualizar entrega no Protheus');
                throw new ProtheusIndisponivelError();
            }
            if (response.status === 409) {
                return;
            }
            if (!response.ok) {
                logger.error({
                    correlationId: input.correlationId,
                    protheusEndpoint: url.pathname,
                    documento: input.documento,
                    entregaId: input.idempotencyKey,
                    statusHttp: response.status,
                    durationMs: Date.now() - startedAt,
                }, 'Resposta invalida ao atualizar entrega no Protheus');
                throw new ProtheusIndisponivelError();
            }
        },
    };
}
//# sourceMappingURL=entregas.js.map