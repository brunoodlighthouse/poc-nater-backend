export async function registerFilaRoutes(app, options) {
    const { controller, sessaoController } = options;
    app.get('/', {
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