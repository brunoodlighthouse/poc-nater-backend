function getForwardedHeader(value) {
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}
function buildServerUrl(request) {
    const protocol = getForwardedHeader(request.headers['x-forwarded-proto']) ?? request.protocol;
    const host = getForwardedHeader(request.headers['x-forwarded-host']) ??
        getForwardedHeader(request.headers.host) ??
        'localhost:3000';
    return `${protocol}://${host}`;
}
export const errorResponseRef = { $ref: 'ErrorResponse#' };
export function buildErrorResponses(statuses) {
    return Object.fromEntries(statuses.map((status) => [status, errorResponseRef]));
}
export function okResponseSchema(data) {
    return {
        type: 'object',
        required: ['ok', 'data'],
        properties: {
            ok: { type: 'boolean', enum: [true] },
            data,
        },
    };
}
export const lojaSchema = {
    type: 'object',
    required: ['id', 'codigo', 'nome'],
    properties: {
        id: { type: 'string', description: 'ID interno da loja' },
        codigo: { type: 'string', description: 'Codigo da loja' },
        nome: { type: 'string', description: 'Nome exibido da loja' },
    },
};
export const lojaAtivaSchema = {
    ...lojaSchema,
    required: ['id', 'codigo', 'nome', 'ativa'],
    properties: {
        ...lojaSchema.properties,
        ativa: { type: 'boolean', description: 'Indica se a loja esta ativa' },
    },
};
export const clienteSchema = {
    type: 'object',
    required: ['codigo', 'nome', 'documento'],
    properties: {
        codigo: { type: 'string' },
        nome: { type: 'string' },
        documento: { type: 'string' },
    },
};
export const itemDocumentoSchema = {
    type: 'object',
    required: ['id', 'codigoProduto', 'descricao', 'qtdTotal', 'qtdEntregue', 'unidade'],
    properties: {
        id: { type: 'string' },
        codigoProduto: { type: 'string' },
        descricao: { type: 'string' },
        qtdTotal: { type: 'number' },
        qtdEntregue: { type: 'number' },
        unidade: { type: 'string' },
    },
};
export const entregaDetalheItemSchema = {
    type: 'object',
    required: ['id', 'codigoProduto', 'descricao', 'unidade', 'qtdTotal', 'qtdJaEntregue', 'qtdPendente'],
    properties: {
        id: { type: 'string' },
        codigoProduto: { type: 'string' },
        descricao: { type: 'string' },
        unidade: { type: 'string' },
        qtdTotal: { type: 'number' },
        qtdJaEntregue: { type: 'number' },
        qtdPendente: { type: 'number' },
    },
};
export const entregaHistoricoItemSchema = {
    type: 'object',
    required: ['itemIdProtheus', 'descricao', 'unidade', 'qtdTotal', 'qtdEntregue'],
    properties: {
        itemIdProtheus: { type: 'string' },
        descricao: { type: 'string' },
        unidade: { type: 'string' },
        qtdTotal: { type: 'number' },
        qtdEntregue: { type: 'number' },
    },
};
export const entregaHistoricoSchema = {
    type: 'object',
    required: [
        'id',
        'status',
        'entregadorCodigo',
        'entregadorNome',
        'motivoPendencia',
        'iniciadaEm',
        'finalizadaEm',
        'itens',
    ],
    properties: {
        id: { type: 'string', format: 'uuid' },
        status: {
            type: 'string',
            enum: ['em_andamento', 'finalizada_total', 'finalizada_parcial', 'cancelada'],
        },
        entregadorCodigo: { type: 'string' },
        entregadorNome: { type: 'string' },
        motivoPendencia: {
            anyOf: [
                { type: 'string', enum: ['retirada_futura', 'entrega_futura'] },
                { type: 'null' },
            ],
        },
        iniciadaEm: { type: 'string', format: 'date-time' },
        finalizadaEm: {
            anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }],
        },
        itens: {
            type: 'array',
            items: entregaHistoricoItemSchema,
        },
    },
};
export const entregaEmAndamentoItemSchema = {
    type: 'object',
    required: ['itemIdProtheus', 'descricao', 'unidade', 'qtdTotal', 'qtdEntregue'],
    properties: {
        itemIdProtheus: { type: 'string' },
        descricao: { type: 'string' },
        unidade: { type: 'string' },
        qtdTotal: { type: 'number' },
        qtdEntregue: { type: 'number' },
    },
};
export const entregaEmAndamentoSchema = {
    type: 'object',
    required: ['id', 'documento', 'modo', 'iniciadaEm', 'entregador', 'itens'],
    properties: {
        id: { type: 'string', format: 'uuid' },
        documento: { type: 'string' },
        modo: { type: 'string', enum: ['entrega', 'reentrega'] },
        iniciadaEm: { type: 'string', format: 'date-time' },
        entregador: {
            type: 'object',
            required: ['codigo', 'nome'],
            properties: {
                codigo: { type: 'string' },
                nome: { type: 'string' },
            },
        },
        itens: {
            type: 'array',
            items: entregaEmAndamentoItemSchema,
        },
    },
};
export const swaggerOptions = {
    openapi: {
        openapi: '3.0.3',
        info: {
            title: 'Entrega Loja - API',
            description: 'API do sistema de controle de entregas em lojas fisicas',
            version: '1.0.0',
        },
        servers: [{ url: 'http://localhost:3000', description: 'Desenvolvimento local' }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'opaque',
                    description: 'Token de sessao da loja',
                },
            },
        },
        tags: [
            { name: 'Health', description: 'Health checks' },
            { name: 'Lojas', description: 'Consulta de lojas ativas' },
            { name: 'Sessoes', description: 'Autenticacao e sessao da loja' },
            { name: 'Documentos', description: 'Consulta de NF-e/NFC-e' },
            { name: 'Fila', description: 'Fila de documentos da sessao' },
            { name: 'Entregas', description: 'Execucao e finalizacao de entregas' },
        ],
    },
};
export const swaggerUiOptions = {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: true,
        displayRequestDuration: true,
        persistAuthorization: true,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecificationClone: true,
    transformSpecification: (swaggerObject, request) => {
        const currentServer = buildServerUrl(request);
        const existingServers = Array.isArray(swaggerObject['servers']) ? swaggerObject['servers'] : [];
        const remainingServers = existingServers.filter((server) => server?.url !== currentServer);
        return {
            ...swaggerObject,
            servers: [{ url: currentServer, description: 'Servidor atual' }, ...remainingServers],
        };
    },
};
export function registerSwaggerSchemas(app) {
    app.addSchema({
        $id: 'ErrorResponse',
        type: 'object',
        required: ['ok', 'error'],
        properties: {
            ok: { type: 'boolean', enum: [false] },
            error: {
                type: 'object',
                required: ['code', 'message'],
                properties: {
                    code: { type: 'string' },
                    message: { type: 'string' },
                },
            },
        },
    });
}
//# sourceMappingURL=swagger.js.map