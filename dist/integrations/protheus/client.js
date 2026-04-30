import { config } from '../../config.js';
import { ProtheusIndisponivelError } from '../../errors.js';
import { logger } from '../../logger.js';
import { createCircuitBreaker } from './circuit-breaker.js';
import { isTransientError, isTransientStatusCode, withRetry } from './retry.js';
const circuitBreaker = createCircuitBreaker({
    threshold: config.PROTHEUS_CB_THRESHOLD,
    windowMs: config.PROTHEUS_CB_WINDOW_MS,
    halfOpenAfterMs: 60_000,
});
function buildUrl(path) {
    const base = config.PROTHEUS_BASE_URL.endsWith('/')
        ? config.PROTHEUS_BASE_URL
        : `${config.PROTHEUS_BASE_URL}/`;
    return new URL(path, base).toString();
}
export async function protheusRequest(opts) {
    if (circuitBreaker.isOpen()) {
        logger.warn({ correlationId: opts.correlationId, path: opts.path, cbState: circuitBreaker.getState() }, 'Circuit breaker aberto - requisicao ao Protheus bloqueada');
        throw new ProtheusIndisponivelError('Circuit breaker aberto');
    }
    const url = buildUrl(opts.path);
    const timeoutMs = opts.timeoutMs ?? config.PROTHEUS_TIMEOUT_MS;
    const startedAt = Date.now();
    const response = await withRetry(async (attempt) => {
        const headers = {
            'X-Correlation-Id': opts.correlationId,
        };
        if (opts.method === 'POST') {
            headers['Content-Type'] = 'application/json';
        }
        // Auth token if configured
        if (config.PROTHEUS_USER && config.PROTHEUS_PASSWORD) {
            const credentials = Buffer.from(`${config.PROTHEUS_USER}:${config.PROTHEUS_PASSWORD}`).toString('base64');
            headers['Authorization'] = `Basic ${credentials}`;
        }
        let res;
        try {
            res = await fetch(url, {
                method: opts.method,
                headers,
                body: opts.body ? JSON.stringify(opts.body) : undefined,
                signal: AbortSignal.timeout(timeoutMs),
            });
        }
        catch (error) {
            logger.error({
                err: error,
                correlationId: opts.correlationId,
                protheusEndpoint: opts.path,
                tentativa: attempt + 1,
                durationMs: Date.now() - startedAt,
            }, 'Falha na conexao com Protheus');
            circuitBreaker.recordFailure();
            throw error;
        }
        // Transient HTTP errors should trigger retry
        if (isTransientStatusCode(res.status)) {
            logger.warn({
                correlationId: opts.correlationId,
                protheusEndpoint: opts.path,
                statusHttp: res.status,
                tentativa: attempt + 1,
                durationMs: Date.now() - startedAt,
            }, 'Resposta transitoria do Protheus - sera retentada');
            circuitBreaker.recordFailure();
            // Wrap as transient error to trigger retry
            const transientError = new Error(`Protheus retornou ${res.status}`);
            transientError.name = 'AbortError';
            throw transientError;
        }
        return res;
    }, {
        maxAttempts: config.PROTHEUS_MAX_RETRIES,
        baseDelayMs: 200,
        jitterFactor: 0.2,
    }).catch((error) => {
        if (isTransientError(error)) {
            throw new ProtheusIndisponivelError();
        }
        throw error;
    });
    // Non-transient response received
    if (response.ok || response.status === 409) {
        circuitBreaker.recordSuccess();
    }
    else if (response.status >= 500) {
        circuitBreaker.recordFailure();
    }
    const durationMs = Date.now() - startedAt;
    logger.info({
        correlationId: opts.correlationId,
        protheusEndpoint: opts.path,
        statusHttp: response.status,
        durationMs,
    }, 'Chamada Protheus concluida');
    return {
        status: response.status,
        ok: response.ok,
        json: () => response.json(),
    };
}
export function getCircuitBreaker() {
    return circuitBreaker;
}
//# sourceMappingURL=client.js.map