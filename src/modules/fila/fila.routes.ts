import type { FastifyInstance } from 'fastify';
import type { FilaController } from './fila.controller.js';
import type { SessaoController } from '../sessoes/sessao.controller.js';

type FilaRoutesOptions = {
  controller: FilaController;
  sessaoController: SessaoController;
};

export async function registerFilaRoutes(app: FastifyInstance, options: FilaRoutesOptions) {
  const { controller, sessaoController } = options;

  app.get(
    '/',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.listQueue,
  );
}
