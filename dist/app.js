import fastify from 'fastify';
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
import { createFilaController } from './modules/fila/fila.controller.js';
import { createFilaRepository } from './modules/fila/fila.repository.js';
import { registerFilaRoutes } from './modules/fila/fila.routes.js';
import { createFilaService } from './modules/fila/fila.service.js';
import { createEntregaController } from './modules/entregas/entrega.controller.js';
import { createEntregaRepository } from './modules/entregas/entrega.repository.js';
import { registerEntregaRoutes } from './modules/entregas/entrega.routes.js';
import { createEntregaService } from './modules/entregas/entrega.service.js';
import { createSessaoController } from './modules/sessoes/sessao.controller.js';
import { createSessaoRepository } from './modules/sessoes/sessao.repository.js';
import { registerSessaoRoutes } from './modules/sessoes/sessao.routes.js';
import { createSessaoService } from './modules/sessoes/sessao.service.js';
import { config } from './config.js';
import { buildErrorResponses, lojaAtivaSchema, okResponseSchema, registerSwaggerSchemas, swaggerOptions, swaggerUiOptions, } from './swagger.js';
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
    const filaRepository = createFilaRepository();
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
    const filaService = createFilaService({
        filaRepository,
    });
    const entregaService = createEntregaService({
        entregadorRepository,
        deliveryGateway,
        entregaRepository,
    });
    const sessaoController = createSessaoController({ sessaoService });
    const documentoController = createDocumentoController({ documentoService });
    const filaController = createFilaController({ filaService });
    const entregaController = createEntregaController({ entregaService });
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
    app.addHook('onRequest', async (request, reply) => {
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
        }, async (_request, reply) => {
            const dbOk = await healthCheckDb();
            if (!dbOk) {
                return reply.status(503).send({ ok: false, db: 'down' });
            }
            const cbState = config.PROTHEUS_MOCK_ENABLED ? 'mock' : getCircuitBreaker().getState();
            return { ok: true, db: 'up', protheus: cbState };
        });
        rootRoutes.get('/api/v1/lojas', {
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
        }, async () => {
            const stores = await lojaRepository.listActive();
            return { ok: true, data: stores };
        });
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
    app.register(registerFilaRoutes, {
        prefix: '/api/v1/fila',
        controller: filaController,
        sessaoController,
    });
    app.register(registerEntregaRoutes, {
        prefix: '/api/v1/entregas',
        controller: entregaController,
        sessaoController,
    });
    app.setErrorHandler((error, request, reply) => {
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
//# sourceMappingURL=app.js.map