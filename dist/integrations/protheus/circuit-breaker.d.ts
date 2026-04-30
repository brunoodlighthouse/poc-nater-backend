type CircuitBreakerState = 'closed' | 'open' | 'half_open';
type CircuitBreakerOptions = {
    threshold: number;
    windowMs: number;
    halfOpenAfterMs: number;
};
export declare function createCircuitBreaker(options: CircuitBreakerOptions): {
    isOpen(): boolean;
    getState(): CircuitBreakerState;
    recordSuccess(): void;
    recordFailure(): void;
    reset(): void;
};
export type CircuitBreaker = ReturnType<typeof createCircuitBreaker>;
export {};
//# sourceMappingURL=circuit-breaker.d.ts.map