export class DomainError extends Error {
    code;
    httpStatus;
    constructor(code, message, httpStatus = 400) {
        super(message);
        this.code = code;
        this.httpStatus = httpStatus;
        this.name = 'DomainError';
    }
}
export class DocumentoInvalidoError extends DomainError {
    constructor(message = 'Documento nao encontrado') {
        super('DOCUMENTO_INVALIDO', message, 400);
    }
}
export class DocumentoVendaFuturaError extends DomainError {
    constructor() {
        super('DOCUMENTO_VENDA_FUTURA', 'Documento de Venda Futura - nao pode ser entregue', 422);
    }
}
export class EntregaJaRealizadaError extends DomainError {
    constructor(data, entregador) {
        const msg = data && entregador
            ? `Documento ja entregue em ${data} por ${entregador}`
            : 'Documento ja totalmente entregue';
        super('ENTREGA_JA_REALIZADA', msg, 409);
    }
}
export class EntregaJaEmAndamentoError extends DomainError {
    constructor(entregador) {
        const msg = entregador
            ? `Entrega em andamento por ${entregador}`
            : 'Entrega ja em andamento para este documento';
        super('ENTREGA_JA_EM_ANDAMENTO', msg, 409);
    }
}
export class DocumentoNaoNaFilaError extends DomainError {
    constructor() {
        super('DOCUMENTO_NAO_NA_FILA', 'Documento nao encontrado na fila atual', 404);
    }
}
export class EntregadorNaoEncontradoError extends DomainError {
    constructor() {
        super('ENTREGADOR_NAO_ENCONTRADO', 'Entregador nao encontrado ou inativo', 404);
    }
}
export class EntregaNaoEncontradaError extends DomainError {
    constructor() {
        super('ENTREGA_NAO_ENCONTRADA', 'Entrega nao encontrada', 404);
    }
}
export class EntregaSemPendenciasError extends DomainError {
    constructor() {
        super('ENTREGA_SEM_PENDENCIAS', 'Documento sem saldo pendente para entrega', 409);
    }
}
export class QuantidadeExcedeTotalError extends DomainError {
    constructor() {
        super('QTD_EXCEDE_TOTAL', 'Quantidade entregue maior que o disponivel', 422);
    }
}
export class QuantidadeInvalidaError extends DomainError {
    constructor() {
        super('QTD_INVALIDA', 'Quantidade entregue invalida para o item selecionado', 422);
    }
}
export class NenhumItemEntregueError extends DomainError {
    constructor() {
        super('NENHUM_ITEM_ENTREGUE', 'Informe ao menos um item entregue', 422);
    }
}
export class SessaoInvalidaError extends DomainError {
    constructor() {
        super('SESSAO_INVALIDA', 'Sessao expirada ou invalida', 401);
    }
}
export class LojaNaoEncontradaError extends DomainError {
    constructor() {
        super('LOJA_NAO_ENCONTRADA', 'Loja nao encontrada ou inativa', 404);
    }
}
export class ProtheusIndisponivelError extends DomainError {
    constructor(message = 'ERP indisponivel. Tente novamente em alguns instantes') {
        super('PROTHEUS_INDISPONIVEL', message, 503);
    }
}
export class EntregaNaoPodeSerCanceladaError extends DomainError {
    constructor() {
        super('ENTREGA_NAO_PODE_SER_CANCELADA', 'Apenas entregas em andamento podem ser canceladas', 409);
    }
}
export class MotivoObrigatorioError extends DomainError {
    constructor() {
        super('MOTIVO_OBRIGATORIO', 'Motivo e obrigatorio (minimo 10 caracteres)', 400);
    }
}
export class AdminCredenciaisInvalidasError extends DomainError {
    constructor() {
        super('ADMIN_CREDENCIAIS_INVALIDAS', 'Usuario ou senha invalidos', 401);
    }
}
export class AdminSessaoInvalidaError extends DomainError {
    constructor() {
        super('ADMIN_SESSAO_INVALIDA', 'Sessao administrativa expirada ou invalida', 401);
    }
}
export class LojaJaExisteError extends DomainError {
    constructor() {
        super('LOJA_JA_EXISTE', 'Ja existe uma loja com este codigo', 409);
    }
}
export class EntregadorJaExisteError extends DomainError {
    constructor() {
        super('ENTREGADOR_JA_EXISTE', 'Ja existe um entregador com este codigo', 409);
    }
}
//# sourceMappingURL=errors.js.map