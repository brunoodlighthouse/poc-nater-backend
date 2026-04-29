import type { FastifyInstance } from 'fastify';
import type { SessaoController } from '../sessoes/sessao.controller.js';
import type { EntregaController } from './entrega.controller.js';

type EntregaRoutesOptions = {
  controller: EntregaController;
  sessaoController: SessaoController;
};

export async function registerEntregaRoutes(app: FastifyInstance, options: EntregaRoutesOptions) {
  const { controller, sessaoController } = options;

  app.get(
    '/entregadores',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.listCouriers,
  );

  app.get(
    '/detalhe/:documento',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.getDetail,
  );

  app.get(
    '/pendencias/:documento',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.getPendingDeliveries,
  );

  app.post(
    '/iniciar',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.startDelivery,
  );

  app.post(
    '/:id/cancelar',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.cancelDelivery,
  );

  app.post(
    '/:id/finalizar',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.finalizeDelivery,
  );
}
