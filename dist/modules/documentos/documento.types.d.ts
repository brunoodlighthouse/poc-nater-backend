import type { SessaoContext } from '../sessoes/sessao.types.js';
export type DocumentoFormato = 'qrcode' | 'barcode';
export type DocumentoConsultaInput = {
    codigoLido: string;
    formato: DocumentoFormato;
    correlationId: string;
    sessao: SessaoContext;
};
export type DocumentoConsultado = {
    documento: string;
    tipo: 'NFE' | 'NFCE';
    chaveAcesso: string;
    cliente: {
        codigo: string;
        nome: string;
        documento: string;
    };
    statusAtual: 'pendente' | 'parcial';
    itens: Array<{
        id: string;
        codigoProduto: string;
        descricao: string;
        qtdTotal: number;
        qtdEntregue: number;
        unidade: string;
    }>;
    consultadoEm: string;
};
//# sourceMappingURL=documento.types.d.ts.map