import { config } from '../../config.js';
import { EntregadorNaoEncontradoError, ProtheusIndisponivelError } from '../../errors.js';
import { logger } from '../../logger.js';
import { getMockEntregadorByCodigo, listMockEntregadores } from './mock-store.js';
function buildProtheusUrl(path) {
    const normalizedBaseUrl = config.PROTHEUS_BASE_URL.endsWith('/')
        ? config.PROTHEUS_BASE_URL
        : `${config.PROTHEUS_BASE_URL}/`;
    return new URL(path, normalizedBaseUrl);
}
export function createCourierGateway() {
    if (config.PROTHEUS_MOCK_ENABLED) {
        return {
            async findCourierByCode({ codigo }) {
                const courier = getMockEntregadorByCodigo(codigo);
                if (!courier || !courier.ativo) {
                    throw new EntregadorNaoEncontradoError();
                }
                return courier;
            },
            async listActiveCouriers() {
                return listMockEntregadores().filter((courier) => courier.ativo);
            },
        };
    }
    return {
        async findCourierByCode({ codigo, correlationId }) {
            const url = buildProtheusUrl(`entregas/v1/entregador/${codigo}`);
            const startedAt = Date.now();
            let response;
            try {
                response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-Correlation-Id': correlationId,
                    },
                    signal: AbortSignal.timeout(config.PROTHEUS_TIMEOUT_MS),
                });
            }
            catch (error) {
                logger.error({ err: error, correlationId, protheusEndpoint: url.pathname }, 'Falha ao consultar entregador no Protheus');
                throw new ProtheusIndisponivelError();
            }
            if (response.status === 404) {
                throw new EntregadorNaoEncontradoError();
            }
            if (!response.ok) {
                logger.error({
                    correlationId,
                    protheusEndpoint: url.pathname,
                    statusHttp: response.status,
                    durationMs: Date.now() - startedAt,
                }, 'Resposta invalida ao consultar entregador no Protheus');
                throw new ProtheusIndisponivelError();
            }
            const courier = (await response.json());
            if (!courier.ativo) {
                throw new EntregadorNaoEncontradoError();
            }
            return courier;
        },
        async listActiveCouriers({ correlationId }) {
            const url = buildProtheusUrl('entregas/v1/entregadores');
            const startedAt = Date.now();
            let response;
            try {
                response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-Correlation-Id': correlationId,
                    },
                    signal: AbortSignal.timeout(config.PROTHEUS_TIMEOUT_MS),
                });
            }
            catch (error) {
                logger.error({ err: error, correlationId, protheusEndpoint: url.pathname }, 'Falha ao listar entregadores no Protheus');
                throw new ProtheusIndisponivelError();
            }
            if (!response.ok) {
                logger.error({
                    correlationId,
                    protheusEndpoint: url.pathname,
                    statusHttp: response.status,
                    durationMs: Date.now() - startedAt,
                }, 'Resposta invalida ao listar entregadores no Protheus');
                throw new ProtheusIndisponivelError();
            }
            const couriers = (await response.json());
            return couriers.filter((courier) => courier.ativo);
        },
    };
}
//# sourceMappingURL=entregadores.js.map