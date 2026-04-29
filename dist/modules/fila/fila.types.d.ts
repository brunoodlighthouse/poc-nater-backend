export type FilaDocumento = {
    id: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: 'pendente' | 'parcial' | 'finalizado' | 'cancelado';
    consultadoEm: string;
    tipoDocumento: 'NFE' | 'NFCE';
    qtdItensEntregues: number;
};
//# sourceMappingURL=fila.types.d.ts.map