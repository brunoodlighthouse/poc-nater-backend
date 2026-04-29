type CircuitBreakerState = 'closed' | 'open' | 'half_open';

type CircuitBreakerOptions = {
  threshold: number;
  windowMs: number;
  halfOpenAfterMs: number;
};

export function createCircuitBreaker(options: CircuitBreakerOptions) {
  let state: CircuitBreakerState = 'closed';
  let failureCount = 0;
  let lastFailureAt = 0;
  let windowStart = Date.now();

  function resetWindow() {
    failureCount = 0;
    windowStart = Date.now();
  }

  return {
    isOpen(): boolean {
      if (state === 'closed') return false;

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

    getState(): CircuitBreakerState {
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

export type CircuitBreaker = ReturnType<typeof createCircuitBreaker>;
