export async function registerDocumentoRoutes(app, options) {
    const { controller, sessaoController } = options;
    app.post('/consulta', {
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