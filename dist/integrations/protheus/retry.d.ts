type RetryOptions = {
    maxAttempts: number;
    baseDelayMs: number;
    jitterFactor: number;
};
export declare function isTransientError(error: unknown): boolean;
export declare function isTransientStatusCode(status: number): boolean;
export declare function withRetry<T>(fn: (attempt: number) => Promise<T>, options: RetryOptions): Promise<T>;
export {};
//# sourceMappingURL=retry.d.ts.map