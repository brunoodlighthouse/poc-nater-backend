import type { FastifyInstance } from 'fastify';
import type { SessaoController } from './sessao.controller.js';

type SessaoRoutesOptions = {
  controller: SessaoController;
  prefix?: string;
};

export async function registerSessaoRoutes(app: FastifyInstance, options: SessaoRoutesOptions) {
  const { controller } = options;

  app.post(
    '/',
    {
      config: {
        rateLimit: {
          max: 10,
          timeWindow: '1 minute',
        },
      },
    },
    controller.createSession,
  );

  app.get(
    '/atual',
    {
      preHandler: controller.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.getCurrentSession,
  );
}
