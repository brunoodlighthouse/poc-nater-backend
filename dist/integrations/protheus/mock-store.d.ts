type MockDocumentoItem = {
    id: string;
    codigoProduto: string;
    descricao: string;
    qtdTotal: number;
    qtdEntregue: number;
    unidade: string;
};
type MockDocumento = {
    documento: string;
    tipo: 'NFE' | 'NFCE';
    chaveAcesso: string;
    cliente: {
        codigo: string;
        nome: string;
        documento: string;
    };
    isVendaFutura: boolean;
    statusAtual: 'pendente' | 'parcial' | 'finalizado';
    entregadorNome?: string;
    entregueEm?: string;
    itens: MockDocumentoItem[];
};
type MockEntregador = {
    codigo: string;
    nome: string;
    ativo: boolean;
};
type ApplyDeliveryInput = {
    chaveAcesso: string;
    entregadorCodigo: string;
    entregadorNome: string;
    tipoEntrega: 'total' | 'parcial';
    idempotencyKey: string;
    itens: Array<{
        id: string;
        qtdEntregue: number;
    }>;
};
export declare function getMockDocumentByAccessKey(chaveAcesso: string): MockDocumento | null;
export declare function getMockDocumentByNumber(documento: string): MockDocumento | null;
export declare function getMockEntregadorByCodigo(codigo: string): MockEntregador | null;
export declare function listMockEntregadores(): MockEntregador[];
export declare function applyMockDelivery(input: ApplyDeliveryInput): void;
export {};
//# sourceMappingURL=mock-store.d.ts.map