import type { FastifyInstance } from 'fastify';
import type { DocumentoController } from './documento.controller.js';
import type { SessaoController } from '../sessoes/sessao.controller.js';

type DocumentoRoutesOptions = {
  controller: DocumentoController;
  sessaoController: SessaoController;
};

export async function registerDocumentoRoutes(
  app: FastifyInstance,
  options: DocumentoRoutesOptions,
) {
  const { controller, sessaoController } = options;

  app.post(
    '/consulta',
    {
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: {
          max: 60,
          timeWindow: '1 minute',
        },
      },
    },
    controller.consultDocument,
  );
}
