export type FilaDocumento = {
  id: string;
  documentoNumero: string;
  documentoChave: string;
  clienteNome: string;
  qtdItens: number;
  status: 'pendente' | 'em_andamento' | 'parcial' | 'finalizado' | 'cancelado';
  consultadoEm: string;
  tipoDocumento: 'NFE' | 'NFCE';
  qtdItensEntregues: number;
};
