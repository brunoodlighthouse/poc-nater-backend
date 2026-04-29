export type ProtheusEntregador = {
    codigo: string;
    nome: string;
    ativo: boolean;
};
export type CourierGateway = {
    findCourierByCode(input: {
        codigo: string;
        correlationId: string;
    }): Promise<ProtheusEntregador>;
    listActiveCouriers(input: {
        correlationId: string;
    }): Promise<ProtheusEntregador[]>;
};
export declare function createCourierGateway(): CourierGateway;
//# sourceMappingURL=entregadores.d.ts.map