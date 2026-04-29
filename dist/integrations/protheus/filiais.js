import { config } from '../../config.js';
import { LojaNaoEncontradaError, ProtheusIndisponivelError } from '../../errors.js';
import { logger } from '../../logger.js';
const mockStores = {
    '001': { codigo: '001', nome: 'Filial Centro', ativa: true },
    '002': { codigo: '002', nome: 'Filial Norte', ativa: true },
};
function buildProtheusUrl(path) {
    const normalizedBaseUrl = config.PROTHEUS_BASE_URL.endsWith('/')
        ? config.PROTHEUS_BASE_URL
        : `${config.PROTHEUS_BASE_URL}/`;
    return new URL(path, normalizedBaseUrl);
}
export function createStoreGateway() {
    if (config.PROTHEUS_MOCK_ENABLED) {
        return {
            async findStoreByCode({ codigo }) {
                const store = mockStores[codigo];
                if (!store || !store.ativa) {
                    throw new LojaNaoEncontradaError();
                }
                return store;
            },
        };
    }
    return {
        async findStoreByCode({ codigo, correlationId }) {
            const url = buildProtheusUrl(`entregas/v1/filial/${codigo}`);
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
                logger.error({ err: error, correlationId, protheusEndpoint: url.pathname }, 'Falha ao consultar filial no Protheus');
                throw new ProtheusIndisponivelError();
            }
            if (response.status === 404) {
                throw new LojaNaoEncontradaError();
            }
            if (!response.ok) {
                logger.error({
                    correlationId,
                    protheusEndpoint: url.pathname,
                    statusHttp: response.status,
                    durationMs: Date.now() - startedAt,
                }, 'Resposta invalida ao consultar filial no Protheus');
                throw new ProtheusIndisponivelError();
            }
            const payload = (await response.json());
            if (!payload.ativa) {
                throw new LojaNaoEncontradaError();
            }
            logger.info({
                correlationId,
                protheusEndpoint: url.pathname,
                durationMs: Date.now() - startedAt,
            }, 'Consulta de filial concluida');
            return payload;
        },
    };
}
//# sourceMappingURL=filiais.js.map