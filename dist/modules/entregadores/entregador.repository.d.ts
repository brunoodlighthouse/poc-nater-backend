export type EntregadorRecord = {
    id: string;
    codigo: string;
    nome: string;
    ativo: boolean;
};
export declare function createEntregadorRepository(): {
    listActive(): Promise<EntregadorRecord[]>;
    findByCode(codigo: string): Promise<EntregadorRecord>;
};
export type EntregadorRepository = ReturnType<typeof createEntregadorRepository>;
//# sourceMappingURL=entregador.repository.d.ts.map