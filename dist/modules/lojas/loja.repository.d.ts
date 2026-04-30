export type LojaRecord = {
    id: string;
    codigo: string;
    nome: string;
    ativa: boolean;
};
export declare function createLojaRepository(): {
    listActive(): Promise<LojaRecord[]>;
    findByCode(codigo: string): Promise<LojaRecord>;
};
export type LojaRepository = ReturnType<typeof createLojaRepository>;
//# sourceMappingURL=loja.repository.d.ts.map