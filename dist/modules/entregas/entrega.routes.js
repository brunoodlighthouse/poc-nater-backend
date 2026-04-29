export async function registerEntregaRoutes(app, options) {
    const { controller, sessaoController } = options;
    app.get('/entregadores', {
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.listCouriers);
    app.get('/detalhe/:documento', {
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.getDetail);
    app.get('/pendencias/:documento', {
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.getPendingDeliveries);
    app.post('/iniciar', {
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.startDelivery);
    app.post('/:id/finalizar', {
        preHandler: sessaoController.requireSession,
        config: {
            rateLimit: {
                max: 60,
                timeWindow: '1 minute',
            },
        },
    }, controller.finalizeDelivery);
}
//# sourceMappingURL=entrega.routes.js.map