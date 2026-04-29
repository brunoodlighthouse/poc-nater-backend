export type Loja = {
  id: string;
  codigo: string;
  nome: string;
};

export type SessaoResponse = {
  token: string;
  loja: Loja;
};

export type SessaoAtualResponse = {
  loja: Loja;
};

export type CreateSessaoInput = {
  qrLoja: string;
  dispositivoId: string;
  correlationId: string;
};

export type SessaoContext = {
  id: string;
  token: string;
  dispositivoId: string;
  loja: Loja;
};
