export type ProtheusDeliveryUpdateItem = {
    id: string;
    qtdEntregue: number;
};
export type ProtheusDeliveryUpdateInput = {
    documento: string;
    chaveAcesso: string;
    filial: string;
    entregadorCodigo: string;
    entregadorNome: string;
    tipoEntrega: 'total' | 'parcial';
    motivoPendencia?: 'retirada_futura' | 'entrega_futura';
    idempotencyKey: string;
    correlationId: string;
    itens: ProtheusDeliveryUpdateItem[];
};
export type DeliveryGateway = {
    updateDelivery(input: ProtheusDeliveryUpdateInput): Promise<void>;
};
export declare function createDeliveryGateway(): DeliveryGateway;
//# sourceMappingURL=entregas.d.ts.map