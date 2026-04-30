export function createCircuitBreaker(options) {
    let state = 'closed';
    let failureCount = 0;
    let lastFailureAt = 0;
    let windowStart = Date.now();
    function resetWindow() {
        failureCount = 0;
        windowStart = Date.now();
    }
    return {
        isOpen() {
            if (state === 'closed')
                return false;
            if (state === 'open') {
                const elapsed = Date.now() - lastFailureAt;
                if (elapsed >= options.halfOpenAfterMs) {
                    state = 'half_open';
                    return false;
                }
                return true;
            }
            // half_open — allow one request through
            return false;
        },
        getState() {
            return state;
        },
        recordSuccess() {
            if (state === 'half_open') {
                state = 'closed';
                resetWindow();
            }
            failureCount = 0;
        },
        recordFailure() {
            lastFailureAt = Date.now();
            if (state === 'half_open') {
                state = 'open';
                return;
            }
            // Reset window if it expired
            if (Date.now() - windowStart > options.windowMs) {
                resetWindow();
            }
            failureCount++;
            if (failureCount >= options.threshold) {
                state = 'open';
            }
        },
        reset() {
            state = 'closed';
            resetWindow();
            lastFailureAt = 0;
        },
    };
}
//# sourceMappingURL=circuit-breaker.js.map