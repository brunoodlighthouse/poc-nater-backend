import fastify, { type FastifyError, type FastifyReply, type FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { ZodError } from 'zod';
import { healthCheckDb } from './db/connection.js';
import { DomainError } from './errors.js';
import { createDocumentGateway } from './integrations/protheus/documentos.js';
import { createEntregadorRepository } from './modules/entregadores/entregador.repository.js';
import { createDeliveryGateway } from './integrations/protheus/entregas.js';
import { getCircuitBreaker } from './integrations/protheus/client.js';
import { createLojaRepository } from './modules/lojas/loja.repository.js';
import { logger } from './logger.js';
import { createDocumentoController } from './modules/documentos/documento.controller.js';
import { createDocumentoRepository } from './modules/documentos/documento.repository.js';
import { registerDocumentoRoutes } from './modules/documentos/documento.routes.js';
import { createDocumentoService } from './modules/documentos/documento.service.js';
import { createEntregaController } from './modules/entregas/entrega.controller.js';
import { createEntregaRepository } from './modules/entregas/entrega.repository.js';
import { registerEntregaRoutes } from './modules/entregas/entrega.routes.js';
import { createEntregaService } from './modules/entregas/entrega.service.js';
import { createAdminController } from './modules/admin/admin.controller.js';
import { createAdminRepository } from './modules/admin/admin.repository.js';
import { registerAdminRoutes } from './modules/admin/admin.routes.js';
import { createAdminService } from './modules/admin/admin.service.js';
import { createNotaRecebidaController } from './modules/notas-recebidas/nota-recebida.controller.js';
import { createNotaRecebidaRepository } from './modules/notas-recebidas/nota-recebida.repository.js';
import { registerNotaRecebidaRoutes } from './modules/notas-recebidas/nota-recebida.routes.js';
import { createNotaRecebidaService } from './modules/notas-recebidas/nota-recebida.service.js';
import { createSessaoController } from './modules/sessoes/sessao.controller.js';
import { createSessaoRepository } from './modules/sessoes/sessao.repository.js';
import { registerSessaoRoutes } from './modules/sessoes/sessao.routes.js';
import { createSessaoService } from './modules/sessoes/sessao.service.js';
import { config } from './config.js';
import {
  buildErrorResponses,
  lojaAtivaSchema,
  okResponseSchema,
  registerSwaggerSchemas,
  swaggerOptions,
  swaggerUiOptions,
} from './swagger.js';

export function buildApp() {
  const app = fastify({
    loggerInstance: logger,
    disableRequestLogging: true,
    requestIdHeader: 'x-correlation-id',
  });

  const documentGateway = createDocumentGateway();
  const entregadorRepository = createEntregadorRepository();
  const deliveryGateway = createDeliveryGateway();
  const sessaoRepository = createSessaoRepository();
  const documentoRepository = createDocumentoRepository({
    documentGateway,
  });
  const entregaRepository = createEntregaRepository();
  const lojaRepository = createLojaRepository();
  const sessaoService = createSessaoService({
    logger,
    sessaoRepository,
    lojaRepository,
  });
  const documentoService = createDocumentoService({
    documentoRepository,
  });
  const entregaService = createEntregaService({
    entregadorRepository,
    deliveryGateway,
    entregaRepository,
  });
  const notaRecebidaRepository = createNotaRecebidaRepository();
  const notaRecebidaService = createNotaRecebidaService({ notaRecebidaRepository });
  const adminRepository = createAdminRepository();
  const adminService = createAdminService({ adminRepository });
  const sessaoController = createSessaoController({ sessaoService });
  const documentoController = createDocumentoController({ documentoService });
  const entregaController = createEntregaController({ entregaService });
  const notaRecebidaController = createNotaRecebidaController({ notaRecebidaService });
  const adminController = createAdminController({ adminService });

  app.register(swagger, swaggerOptions);
  app.register(swaggerUi, swaggerUiOptions);

  app.register(cors, {
    origin: config.ALLOWED_ORIGIN,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Correlation-Id'],
    exposedHeaders: ['X-Correlation-Id'],
  });

  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'"],
      },
    },
    hsts: { maxAge: 31536000, includeSubDomains: true },
  });

  app.register(rateLimit, {
    global: false,
    max: 60,
    timeWindow: '1 minute',
  });

  app.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.header('X-Correlation-Id', request.id);
  });

  registerSwaggerSchemas(app);

  app.register(async (rootRoutes) => {
    rootRoutes.get('/health/live', {
      schema: {
        tags: ['Health'],
        operationId: 'getLiveness',
        summary: 'Liveness check',
        response: {
          200: {
            type: 'object',
            required: ['ok'],
            properties: {
              ok: { type: 'boolean', enum: [true] },
            },
          },
        },
      },
    }, async () => {
      return { ok: true };
    });

    rootRoutes.get('/health/ready', {
      schema: {
        tags: ['Health'],
        operationId: 'getReadiness',
        summary: 'Readiness check',
        response: {
          200: {
            type: 'object',
            required: ['ok', 'db', 'protheus'],
            properties: {
              ok: { type: 'boolean', enum: [true] },
              db: { type: 'string', enum: ['up'] },
              protheus: { type: 'string' },
            },
          },
          503: {
            type: 'object',
            required: ['ok', 'db'],
            properties: {
              ok: { type: 'boolean', enum: [false] },
              db: { type: 'string', enum: ['down'] },
            },
          },
        },
      },
    }, async (_request: FastifyRequest, reply: FastifyReply) => {
      const dbOk = await healthCheckDb();

      if (!dbOk) {
        return reply.status(503).send({ ok: false, db: 'down' });
      }

      const cbState = config.PROTHEUS_MOCK_ENABLED ? 'mock' : getCircuitBreaker().getState();
      return { ok: true, db: 'up', protheus: cbState };
    });

    rootRoutes.get(
      '/api/v1/lojas',
      {
        schema: {
          tags: ['Lojas'],
          operationId: 'listStores',
          summary: 'Listar lojas ativas',
          description: 'Retorna todas as lojas ativas cadastradas',
          response: {
            200: okResponseSchema({
              type: 'array',
              items: lojaAtivaSchema,
            }),
            ...buildErrorResponses([500]),
          },
        },
        config: {
          rateLimit: { max: 30, timeWindow: '1 minute' },
        },
      },
      async () => {
        const stores = await lojaRepository.listActive();
        return { ok: true, data: stores };
      },
    );
  });

  app.register(registerSessaoRoutes, {
    prefix: '/api/v1/sessoes',
    controller: sessaoController,
  });

  app.register(registerDocumentoRoutes, {
    prefix: '/api/v1/documentos',
    controller: documentoController,
    sessaoController,
  });

  app.register(registerEntregaRoutes, {
    prefix: '/api/v1/entregas',
    controller: entregaController,
    sessaoController,
  });

  app.register(registerNotaRecebidaRoutes, {
    prefix: '/api/v1/notas-recebidas',
    controller: notaRecebidaController,
  });

  app.register(registerAdminRoutes, {
    prefix: '/api/v1/admin',
    controller: adminController,
  });

  app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    request.log.error({ err: error }, 'Erro nao tratado');

    if (error instanceof DomainError) {
      return reply.status(error.httpStatus).send({
        ok: false,
        error: {
          code: error.code,
          message: error.message,
        },
      });
    }

    if (error instanceof ZodError) {
      return reply.status(400).send({
        ok: false,
        error: {
          code: 'REQUISICAO_INVALIDA',
          message: 'Dados de entrada invalidos',
        },
      });
    }

    return reply.status(500).send({
      ok: false,
      error: {
        code: 'ERRO_INTERNO',
        message: 'Erro ao processar requisicao',
      },
    });
  });

  return app;
}
