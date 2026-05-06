import type { FastifyInstance } from 'fastify';
import type { AdminController } from './admin.controller.js';
import {
  buildErrorResponses,
  entregaHistoricoItemSchema,
  okResponseSchema,
} from '../../swagger.js';

type AdminRoutesOptions = {
  controller: AdminController;
};

export async function registerAdminRoutes(app: FastifyInstance, options: AdminRoutesOptions) {
  const { controller } = options;

  app.post(
    '/login',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminLogin',
        summary: 'Login administrativo',
        description: 'Autentica com credenciais fixas da loja',
        body: {
          type: 'object',
          required: ['lojaCodigo', 'senha'],
          properties: {
            lojaCodigo: { type: 'string' },
            senha: { type: 'string' },
          },
        },
        response: {
          201: okResponseSchema({
            type: 'object',
            required: ['token', 'loja'],
            properties: {
              token: { type: 'string' },
              loja: {
                type: 'object',
                required: ['codigo', 'nome'],
                properties: {
                  codigo: { type: 'string' },
                  nome: { type: 'string' },
                },
              },
            },
          }),
          ...buildErrorResponses([400, 401, 500]),
        },
      },
      config: {
        rateLimit: { max: 10, timeWindow: '1 minute' },
      },
    },
    controller.login,
  );

  app.post(
    '/logout',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminLogout',
        summary: 'Logout administrativo',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({ type: 'null' }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
    },
    controller.logout,
  );

  app.get(
    '/documentos',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminListDocumentos',
        summary: 'Listar documentos da loja',
        description: 'Lista paginada de documentos com filtros e ordenacao',
        security: [{ bearerAuth: [] }],
        querystring: {
          type: 'object',
          properties: {
            page: { type: 'integer', minimum: 1, default: 1 },
            perPage: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
            status: {
              type: 'string',
              enum: ['pendente', 'parcial', 'finalizado', 'cancelado'],
            },
            search: { type: 'string', maxLength: 200 },
            sortBy: {
              type: 'string',
              enum: ['consultadoEm', 'documentoNumero', 'clienteNome', 'status'],
              default: 'consultadoEm',
            },
            sortOrder: { type: 'string', enum: ['asc', 'desc'], default: 'desc' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['items', 'total', 'page', 'perPage', 'totalPages'],
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  required: [
                    'id',
                    'documentoNumero',
                    'documentoChave',
                    'clienteNome',
                    'qtdItens',
                    'status',
                    'consultadoEm',
                    'ultimaEntrega',
                  ],
                  properties: {
                    id: { type: 'string', format: 'uuid' },
                    documentoNumero: { type: 'string' },
                    documentoChave: { type: 'string' },
                    clienteNome: { type: 'string' },
                    qtdItens: { type: 'integer' },
                    status: {
                      type: 'string',
                      enum: ['pendente', 'parcial', 'finalizado', 'cancelado'],
                    },
                    consultadoEm: { type: 'string', format: 'date-time' },
                    ultimaEntrega: {
                      anyOf: [
                        {
                          type: 'object',
                          required: ['id', 'status', 'entregadorNome', 'finalizadaEm'],
                          properties: {
                            id: { type: 'string', format: 'uuid' },
                            status: { type: 'string' },
                            entregadorNome: { type: 'string' },
                            finalizadaEm: {
                              anyOf: [
                                { type: 'string', format: 'date-time' },
                                { type: 'null' },
                              ],
                            },
                          },
                        },
                        { type: 'null' },
                      ],
                    },
                  },
                },
              },
              total: { type: 'integer' },
              page: { type: 'integer' },
              perPage: { type: 'integer' },
              totalPages: { type: 'integer' },
            },
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: {
        rateLimit: { max: 60, timeWindow: '1 minute' },
      },
    },
    controller.listDocumentos,
  );

  app.get(
    '/documentos/:documentoNumero',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminGetDocumentoDetalhe',
        summary: 'Detalhe do documento',
        description: 'Retorna documento com entregas e historico de alteracoes administrativas',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['documentoNumero'],
          properties: {
            documentoNumero: { type: 'string' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: [
              'documentoNumero', 'documentoChave', 'clienteNome',
              'qtdItens', 'status', 'consultadoEm', 'entregas', 'logsAlteracao',
            ],
            properties: {
              documentoNumero: { type: 'string' },
              documentoChave: { type: 'string' },
              clienteNome: { type: 'string' },
              qtdItens: { type: 'integer' },
              status: { type: 'string' },
              consultadoEm: { type: 'string', format: 'date-time' },
              entregas: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['id', 'documentoNumero', 'entregadorNome', 'status', 'iniciadaEm', 'itens', 'logsAlteracao'],
                  properties: {
                    id: { type: 'string', format: 'uuid' },
                    documentoNumero: { type: 'string' },
                    entregadorCodigo: { type: 'string' },
                    entregadorNome: { type: 'string' },
                    status: { type: 'string' },
                    motivoPendencia: { anyOf: [{ type: 'string' }, { type: 'null' }] },
                    iniciadaEm: { type: 'string', format: 'date-time' },
                    finalizadaEm: { anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }] },
                    itens: { type: 'array', items: entregaHistoricoItemSchema },
                    logsAlteracao: {
                      type: 'array',
                      items: {
                        type: 'object',
                        required: ['id', 'usuarioAdmin', 'acao', 'motivo', 'realizadaEm'],
                        properties: {
                          id: { type: 'string', format: 'uuid' },
                          usuarioAdmin: { type: 'string' },
                          acao: { type: 'string' },
                          motivo: { type: 'string' },
                          dadosAntes: {},
                          dadosDepois: {},
                          realizadaEm: { type: 'string', format: 'date-time' },
                        },
                      },
                    },
                  },
                },
              },
              logsAlteracao: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['id', 'usuarioAdmin', 'acao', 'motivo', 'realizadaEm'],
                  properties: {
                    id: { type: 'string', format: 'uuid' },
                    usuarioAdmin: { type: 'string' },
                    acao: { type: 'string' },
                    motivo: { type: 'string' },
                    dadosAntes: {},
                    dadosDepois: {},
                    realizadaEm: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          }),
          ...buildErrorResponses([401, 404, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 60, timeWindow: '1 minute' } },
    },
    controller.getDocumentoDetalhe,
  );

  app.patch(
    '/entregas/:id',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminEditarEntrega',
        summary: 'Editar entrega',
        description: 'Altera status ou quantidades de uma entrega. Motivo obrigatorio (min 10 chars). Gera log de auditoria.',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', format: 'uuid' },
          },
        },
        body: {
          type: 'object',
          required: ['motivo'],
          properties: {
            status: { type: 'string', enum: ['finalizada_total', 'finalizada_parcial', 'cancelada'] },
            itens: {
              type: 'array',
              minItems: 1,
              items: {
                type: 'object',
                required: ['itemIdProtheus', 'qtdEntregue'],
                properties: {
                  itemIdProtheus: { type: 'string' },
                  qtdEntregue: { type: 'number', minimum: 0 },
                },
              },
            },
            motivo: { type: 'string', minLength: 10, maxLength: 500 },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['id', 'documentoNumero', 'status', 'itens'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              documentoNumero: { type: 'string' },
              entregadorCodigo: { type: 'string' },
              entregadorNome: { type: 'string' },
              status: { type: 'string' },
              motivoPendencia: { anyOf: [{ type: 'string' }, { type: 'null' }] },
              iniciadaEm: { type: 'string', format: 'date-time' },
              finalizadaEm: { anyOf: [{ type: 'string', format: 'date-time' }, { type: 'null' }] },
              itens: { type: 'array', items: entregaHistoricoItemSchema },
            },
          }),
          ...buildErrorResponses([400, 401, 404, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    controller.editarEntrega,
  );

  // --- Lojas ---

  app.get(
    '/lojas',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminListLojas',
        summary: 'Listar lojas',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'array',
            items: {
              type: 'object',
              required: ['id', 'codigo', 'nome', 'ativa', 'temSenhaAdmin'],
              properties: {
                id: { type: 'string', format: 'uuid' },
                codigo: { type: 'string' },
                nome: { type: 'string' },
                ativa: { type: 'boolean' },
                temSenhaAdmin: { type: 'boolean' },
              },
            },
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 60, timeWindow: '1 minute' } },
    },
    controller.listLojas,
  );

  app.post(
    '/lojas',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminCriarLoja',
        summary: 'Cadastrar nova loja',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['codigo', 'nome', 'adminSenha'],
          properties: {
            codigo: { type: 'string', minLength: 1, maxLength: 20 },
            nome: { type: 'string', minLength: 2, maxLength: 200 },
            adminSenha: { type: 'string', minLength: 6, maxLength: 100 },
          },
        },
        response: {
          201: okResponseSchema({
            type: 'object',
            required: ['id', 'codigo', 'nome', 'ativa', 'temSenhaAdmin'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              codigo: { type: 'string' },
              nome: { type: 'string' },
              ativa: { type: 'boolean' },
              temSenhaAdmin: { type: 'boolean' },
            },
          }),
          ...buildErrorResponses([400, 401, 409, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    controller.criarLoja,
  );

  app.patch(
    '/lojas/:id',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminEditarLoja',
        summary: 'Editar loja',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['id'],
          properties: { id: { type: 'string', format: 'uuid' } },
        },
        body: {
          type: 'object',
          properties: {
            nome: { type: 'string', minLength: 2, maxLength: 200 },
            ativa: { type: 'boolean' },
            adminSenha: { type: 'string', minLength: 6, maxLength: 100 },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['id', 'codigo', 'nome', 'ativa', 'temSenhaAdmin'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              codigo: { type: 'string' },
              nome: { type: 'string' },
              ativa: { type: 'boolean' },
              temSenhaAdmin: { type: 'boolean' },
            },
          }),
          ...buildErrorResponses([400, 401, 404, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    controller.editarLoja,
  );

  // --- Entregadores ---

  app.get(
    '/entregadores',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminListEntregadores',
        summary: 'Listar entregadores da loja',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'array',
            items: {
              type: 'object',
              required: ['id', 'codigo', 'nome', 'lojaCodigo', 'ativo'],
              properties: {
                id: { type: 'string', format: 'uuid' },
                codigo: { type: 'string' },
                nome: { type: 'string' },
                lojaCodigo: { type: 'string' },
                ativo: { type: 'boolean' },
              },
            },
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 60, timeWindow: '1 minute' } },
    },
    controller.listEntregadores,
  );

  app.post(
    '/entregadores',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminCriarEntregador',
        summary: 'Cadastrar novo entregador',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['codigo', 'nome'],
          properties: {
            codigo: { type: 'string', minLength: 1, maxLength: 50 },
            nome: { type: 'string', minLength: 2, maxLength: 200 },
          },
        },
        response: {
          201: okResponseSchema({
            type: 'object',
            required: ['id', 'codigo', 'nome', 'lojaCodigo', 'ativo'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              codigo: { type: 'string' },
              nome: { type: 'string' },
              lojaCodigo: { type: 'string' },
              ativo: { type: 'boolean' },
            },
          }),
          ...buildErrorResponses([400, 401, 409, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    controller.criarEntregador,
  );

  app.patch(
    '/entregadores/:id',
    {
      schema: {
        tags: ['Admin'],
        operationId: 'adminEditarEntregador',
        summary: 'Editar entregador',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['id'],
          properties: { id: { type: 'string', format: 'uuid' } },
        },
        body: {
          type: 'object',
          properties: {
            nome: { type: 'string', minLength: 2, maxLength: 200 },
            ativo: { type: 'boolean' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['id', 'codigo', 'nome', 'lojaCodigo', 'ativo'],
            properties: {
              id: { type: 'string', format: 'uuid' },
              codigo: { type: 'string' },
              nome: { type: 'string' },
              lojaCodigo: { type: 'string' },
              ativo: { type: 'boolean' },
            },
          }),
          ...buildErrorResponses([400, 401, 404, 500]),
        },
      },
      preHandler: controller.requireAdminSession,
      config: { rateLimit: { max: 30, timeWindow: '1 minute' } },
    },
    controller.editarEntregador,
  );
}
