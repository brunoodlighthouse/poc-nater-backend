export type AdminLoginInput = {
  lojaCodigo: string;
  senha: string;
};

export type AdminLoginResponse = {
  token: string;
  loja: {
    codigo: string;
    nome: string;
  };
};

export type AdminSessaoContext = {
  id: string;
  token: string;
  lojaCodigo: string;
};

export type AdminDocumentoListItem = {
  id: string;
  documentoNumero: string;
  documentoChave: string;
  clienteNome: string;
  qtdItens: number;
  status: string;
  consultadoEm: string;
  ultimaEntrega: {
    id: string;
    status: string;
    entregadorNome: string;
    finalizadaEm: string | null;
  } | null;
};

export type AdminDocumentoListQuery = {
  page: number;
  perPage: number;
  status?: string;
  search?: string;
  sortBy: 'recebidoEm' | 'documentoNumero' | 'clienteNome' | 'status';
  sortOrder: 'asc' | 'desc';
};

export type AdminDocumentoListResponse = {
  items: AdminDocumentoListItem[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};

export type AdminEntregaItem = {
  id: string;
  itemIdProtheus: string;
  descricao: string;
  unidade: string;
  qtdTotal: number;
  qtdEntregue: number;
};

export type AdminEntrega = {
  id: string;
  documentoNumero: string;
  entregadorCodigo: string;
  entregadorNome: string;
  status: string;
  motivoPendencia: string | null;
  iniciadaEm: string;
  finalizadaEm: string | null;
  itens: AdminEntregaItem[];
  logsAlteracao: AdminLogAlteracao[];
};

export type AdminLogAlteracao = {
  id: string;
  usuarioAdmin: string;
  acao: string;
  motivo: string;
  dadosAntes: unknown;
  dadosDepois: unknown;
  realizadaEm: string;
};

export type AdminDocumentoDetalhe = {
  documentoNumero: string;
  documentoChave: string;
  clienteNome: string;
  qtdItens: number;
  status: string;
  consultadoEm: string;
  entregas: AdminEntrega[];
  logsAlteracao: AdminLogAlteracao[];
};

export type AdminEditarEntregaInput = {
  entregaId: string;
  status?: 'finalizada_total' | 'finalizada_parcial' | 'cancelada';
  itens?: Array<{
    itemIdProtheus: string;
    qtdEntregue: number;
  }>;
  motivo: string;
  lojaCodigo: string;
};

// --- Lojas ---

export type AdminLojaItem = {
  id: string;
  codigo: string;
  nome: string;
  ativa: boolean;
  temSenhaAdmin: boolean;
};

export type AdminCriarLojaInput = {
  codigo: string;
  nome: string;
  adminSenha: string;
};

export type AdminEditarLojaInput = {
  id: string;
  nome?: string;
  ativa?: boolean;
  adminSenha?: string;
};

// --- Entregadores ---

export type AdminEntregadorItem = {
  id: string;
  codigo: string;
  nome: string;
  lojaCodigo: string;
  ativo: boolean;
};

export type AdminCriarEntregadorInput = {
  codigo: string;
  nome: string;
  lojaCodigo: string;
};

export type AdminEditarEntregadorInput = {
  id: string;
  nome?: string;
  ativo?: boolean;
};
