import type { SessaoContext } from '../sessoes/sessao.types.js';
export type EntregaPendenciaMotivo = 'retirada_futura' | 'entrega_futura';
export type EntregaModo = 'entrega' | 'reentrega';
export type EntregaDetalheItem = {
    id: string;
    codigoProduto: string;
    descricao: string;
    unidade: string;
    qtdTotal: number;
    qtdJaEntregue: number;
    qtdPendente: number;
};
export type EntregaHistoricoItem = {
    itemIdProtheus: string;
    descricao: string;
    unidade: string;
    qtdTotal: number;
    qtdEntregue: number;
};
export type EntregaHistoricoLog = {
    id: string;
    acao: string;
    motivo: string;
    dadosAntes: unknown;
    dadosDepois: unknown;
    realizadaEm: string;
};
export type EntregaHistorico = {
    id: string;
    status: 'em_andamento' | 'finalizada_total' | 'finalizada_parcial' | 'cancelada';
    entregadorCodigo: string;
    entregadorNome: string;
    motivoPendencia: EntregaPendenciaMotivo | null;
    iniciadaEm: string;
    finalizadaEm: string | null;
    itens: EntregaHistoricoItem[];
    alteracoesAdmin: EntregaHistoricoLog[];
};
export type EntregaEmAndamento = {
    id: string;
    documento: string;
    modo: EntregaModo;
    iniciadaEm: string;
    entregador: {
        codigo: string;
        nome: string;
    };
    itens: Array<{
        itemIdProtheus: string;
        descricao: string;
        unidade: string;
        qtdTotal: number;
        qtdEntregue: number;
    }>;
};
export type EntregaDetalheResponse = {
    documento: {
        numero: string;
        tipo: 'NFE' | 'NFCE';
        chaveAcesso: string;
        cliente: {
            codigo: string;
            nome: string;
            documento: string;
        };
        statusAtual: 'pendente' | 'parcial' | 'finalizado' | 'cancelado';
        consultadoEm: string;
    };
    modo: EntregaModo;
    itens: EntregaDetalheItem[];
    entregaEmAndamento: EntregaEmAndamento | null;
    historico: EntregaHistorico[];
};
export type EntregaPendenciasResponse = {
    documento: string;
    modo: 'reentrega';
    itensPendentes: EntregaDetalheItem[];
    historico: EntregaHistorico[];
};
export type EntregadorOption = {
    codigo: string;
    nome: string;
};
export type IniciarEntregaInput = {
    documento: string;
    entregadorCodigo: string;
    correlationId: string;
    sessao: SessaoContext;
};
export type IniciarEntregaResponse = EntregaEmAndamento;
export type FinalizarEntregaInput = {
    entregaId: string;
    tipo: 'total' | 'parcial';
    motivoPendencia?: EntregaPendenciaMotivo;
    itens?: Array<{
        itemIdProtheus: string;
        qtdEntregue: number;
    }>;
    correlationId: string;
    sessao: SessaoContext;
};
export type FinalizarEntregaResponse = {
    entregaId: string;
    documento: string;
    status: 'finalizada_total' | 'finalizada_parcial';
    motivoPendencia: EntregaPendenciaMotivo | null;
    filaStatus: 'parcial' | 'finalizado';
    finalizadaEm: string;
    itens: Array<{
        itemIdProtheus: string;
        descricao: string;
        unidade: string;
        qtdTotal: number;
        qtdEntregue: number;
    }>;
};
//# sourceMappingURL=entrega.types.d.ts.map