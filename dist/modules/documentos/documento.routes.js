import { buildErrorResponses, clienteSchema, itemDocumentoSchema, okResponseSchema } from '../../swagger.js';
export async function registerDocumentoRoutes(app, options) {
    const { controller, sessaoController } = options;
    app.post('/consulta', {
        schema: {
            tags: ['Documentos'],
            operationId: 'consultDocument',
            summary: 'Consultar documento',
            description: 'Consulta NF-e/NFC-e no Protheus a partir do codigo lido pela camera',
            security: [{ bearerAuth: [] }],
            body: {
                type: 'object',
                required: ['codigoLido', 'formato'],
                properties: {
                    codigoLido: { type: 'string', minLength: 1, maxLength: 500, description: 'Conteudo lido pelo scanner' },
                    formato: { type: 'string', enum: ['qrcode', 'barcode', 'numero'], description: 'Formato da leitura' },
                },
            },
            response: {
                200: okResponseSchema({
                    type: 'object',
                    required: ['documento', 'tipo', 'chaveAcesso', 'cliente', 'statusAtual', 'itens', 'consultadoEm'],
                    properties: {
                        documento: { type: 'string' },
                        tipo: { type: 'string', enum: ['NFE', 'NFCE'] },
                        chaveAcesso: { type: 'string' },
                        cliente: clienteSchema,
                        statusAtual: { type: 'string', enum: ['pendente', 'parcial'] },
                        itens: {
                            type: 'array',
                            items: itemDocumentoSchema,
                        },
                        consultadoEm: { type: 'string', format: 'date-time' },
                    },
                }),
                ...buildErrorResponses([400, 401, 409, 422, 503]),
            },
        },
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.consultDocument);
}
//# sourceMappingURL=documento.routes.js.map