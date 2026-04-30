const TRANSIENT_STATUS_CODES = new Set([502, 503, 504]);
export function isTransientError(error) {
    if (error instanceof Error) {
        const name = error.name;
        // Network errors and timeouts
        if (name === 'AbortError' || name === 'TimeoutError')
            return true;
        if ('code' in error) {
            const code = error.code;
            if (code === 'ECONNRESET' || code === 'ECONNREFUSED' || code === 'UND_ERR_CONNECT_TIMEOUT') {
                return true;
            }
        }
    }
    return false;
}
export function isTransientStatusCode(status) {
    return TRANSIENT_STATUS_CODES.has(status);
}
function computeDelay(attempt, baseDelayMs, jitterFactor) {
    // Exponential backoff: 200ms, 600ms, 1500ms (roughly)
    const exponential = baseDelayMs * Math.pow(3, attempt);
    const jitter = 1 + (Math.random() * 2 - 1) * jitterFactor;
    return Math.round(exponential * jitter);
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function withRetry(fn, options) {
    let lastError;
    for (let attempt = 0; attempt < options.maxAttempts; attempt++) {
        try {
            return await fn(attempt);
        }
        catch (error) {
            lastError = error;
            if (!isTransientError(error)) {
                throw error;
            }
            if (attempt < options.maxAttempts - 1) {
                const delay = computeDelay(attempt, options.baseDelayMs, options.jitterFactor);
                await sleep(delay);
            }
        }
    }
    throw lastError;
}
//# sourceMappingURL=retry.js.map