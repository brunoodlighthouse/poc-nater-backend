export async function registerSessaoRoutes(app, options) {
    const { controller } = options;
    app.post('/', {
        config: {
            rateLimit: {
                max: 10,
                timeWindow: '1 minute',
            },
        },
    }, controller.createSession);
    app.get('/atual', {
        preHandler: controller.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.getCurrentSession);
}
//# sourceMappingURL=sessao.routes.js.map