export declare class DomainError extends Error {
    readonly code: string;
    readonly httpStatus: number;
    constructor(code: string, message: string, httpStatus?: number);
}
export declare class DocumentoInvalidoError extends DomainError {
    constructor(message?: string);
}
export declare class DocumentoVendaFuturaError extends DomainError {
    constructor();
}
export declare class EntregaJaRealizadaError extends DomainError {
    constructor(data?: string, entregador?: string);
}
export declare class EntregaJaEmAndamentoError extends DomainError {
    constructor(entregador?: string);
}
export declare class DocumentoNaoNaFilaError extends DomainError {
    constructor();
}
export declare class EntregadorNaoEncontradoError extends DomainError {
    constructor();
}
export declare class EntregaNaoEncontradaError extends DomainError {
    constructor();
}
export declare class EntregaSemPendenciasError extends DomainError {
    constructor();
}
export declare class QuantidadeExcedeTotalError extends DomainError {
    constructor();
}
export declare class QuantidadeInvalidaError extends DomainError {
    constructor();
}
export declare class NenhumItemEntregueError extends DomainError {
    constructor();
}
export declare class SessaoInvalidaError extends DomainError {
    constructor();
}
export declare class LojaNaoEncontradaError extends DomainError {
    constructor();
}
export declare class ProtheusIndisponivelError extends DomainError {
    constructor(message?: string);
}
export declare class EntregaNaoPodeSerCanceladaError extends DomainError {
    constructor();
}
export declare class MotivoObrigatorioError extends DomainError {
    constructor();
}
//# sourceMappingURL=errors.d.ts.map