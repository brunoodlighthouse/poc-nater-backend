import { buildErrorResponses, okResponseSchema } from '../../swagger.js';
export async function registerFilaRoutes(app, options) {
    const { controller, sessaoController } = options;
    app.get('/', {
        schema: {
            tags: ['Fila'],
            operationId: 'listQueue',
            summary: 'Listar fila de documentos',
            description: 'Retorna documentos consultados na sessao atual (ultimas 12h)',
            security: [{ bearerAuth: [] }],
            response: {
                200: okResponseSchema({
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [
                            'id',
                            'documentoNumero',
                            'documentoChave',
                            'clienteNome',
                            'qtdItens',
                            'status',
                            'consultadoEm',
                            'tipoDocumento',
                            'qtdItensEntregues',
                        ],
                        properties: {
                            id: { type: 'string', format: 'uuid' },
                            documentoNumero: { type: 'string' },
                            documentoChave: { type: 'string' },
                            clienteNome: { type: 'string' },
                            qtdItens: { type: 'integer' },
                            status: {
                                type: 'string',
                                enum: ['pendente', 'parcial', 'finalizado', 'cancelado'],
                            },
                            consultadoEm: { type: 'string', format: 'date-time' },
                            tipoDocumento: { type: 'string', enum: ['NFE', 'NFCE'] },
                            qtdItensEntregues: { type: 'integer' },
                        },
                    },
                }),
                ...buildErrorResponses([401, 500]),
            },
        },
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.listQueue);
}
//# sourceMappingURL=fila.routes.js.map