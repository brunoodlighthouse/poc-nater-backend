export type ProtheusRequestOptions = {
    method: 'GET' | 'POST';
    path: string;
    body?: unknown;
    correlationId: string;
    timeoutMs?: number;
};
type ProtheusResponse = {
    status: number;
    ok: boolean;
    json: <T>() => Promise<T>;
};
export declare function protheusRequest(opts: ProtheusRequestOptions): Promise<ProtheusResponse>;
export declare function getCircuitBreaker(): {
    isOpen(): boolean;
    getState(): "closed" | "open" | "half_open";
    recordSuccess(): void;
    recordFailure(): void;
    reset(): void;
};
export {};
//# sourceMappingURL=client.d.ts.map