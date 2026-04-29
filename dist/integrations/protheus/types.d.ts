export type LojaRecord = {
    codigo: string;
    nome: string;
    ativa: boolean;
};
export type StoreGateway = {
    findStoreByCode(input: {
        codigo: string;
        correlationId: string;
    }): Promise<LojaRecord>;
};
//# sourceMappingURL=types.d.ts.map