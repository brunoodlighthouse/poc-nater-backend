import type { FastifyInstance } from 'fastify';
import type { SessaoController } from './sessao.controller.js';
import { buildErrorResponses, lojaSchema, okResponseSchema } from '../../swagger.js';

type SessaoRoutesOptions = {
  controller: SessaoController;
  prefix?: string;
};

export async function registerSessaoRoutes(app: FastifyInstance, options: SessaoRoutesOptions) {
  const { controller } = options;

  app.post(
    '/',
    {
      schema: {
        tags: ['Sessoes'],
        operationId: 'createSession',
        summary: 'Criar sessao da loja',
        description: 'Autentica um dispositivo via QR Code da loja e retorna token de sessao',
        body: {
          type: 'object',
          required: ['qrLoja', 'dispositivoId'],
          properties: {
            qrLoja: { type: 'string', minLength: 1, maxLength: 200, description: 'Conteudo do QR Code da loja' },
            dispositivoId: { type: 'string', format: 'uuid', description: 'ID unico do dispositivo' },
          },
        },
        response: {
          201: okResponseSchema({
            type: 'object',
            required: ['token', 'loja'],
            properties: {
              token: { type: 'string' },
              loja: lojaSchema,
            },
          }),
          ...buildErrorResponses([400, 404, 500]),
        },
      },
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
      schema: {
        tags: ['Sessoes'],
        operationId: 'getCurrentSession',
        summary: 'Obter sessao atual',
        description: 'Retorna dados da sessao e loja associada ao token',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['loja'],
            properties: {
              loja: lojaSchema,
            },
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
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
