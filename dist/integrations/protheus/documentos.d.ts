export type ProtheusDocumentoItem = {
    id: string;
    codigoProduto: string;
    descricao: string;
    qtdTotal: number;
    qtdEntregue: number;
    unidade: string;
};
export type ProtheusDocumento = {
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
    itens: ProtheusDocumentoItem[];
};
export type DocumentGateway = {
    findDocumentByAccessKey(input: {
        chaveAcesso: string;
        filial: string;
        correlationId: string;
    }): Promise<ProtheusDocumento>;
};
export declare function createDocumentGateway(): DocumentGateway;
//# sourceMappingURL=documentos.d.ts.map