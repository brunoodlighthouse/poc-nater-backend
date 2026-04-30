import type { FastifyInstance } from 'fastify';
import type { SessaoController } from '../sessoes/sessao.controller.js';
import type { EntregaController } from './entrega.controller.js';
import {
  buildErrorResponses,
  clienteSchema,
  entregaDetalheItemSchema,
  entregaEmAndamentoSchema,
  entregaHistoricoSchema,
  okResponseSchema,
} from '../../swagger.js';

type EntregaRoutesOptions = {
  controller: EntregaController;
  sessaoController: SessaoController;
};

export async function registerEntregaRoutes(app: FastifyInstance, options: EntregaRoutesOptions) {
  const { controller, sessaoController } = options;

  app.get(
    '/entregadores',
    {
      schema: {
        tags: ['Entregas'],
        operationId: 'listCouriers',
        summary: 'Listar entregadores',
        description: 'Retorna lista de entregadores ativos cadastrados no Protheus',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'array',
            items: {
              type: 'object',
              required: ['id', 'codigo', 'nome', 'ativo'],
              properties: {
                id: { type: 'string' },
                codigo: { type: 'string' },
                nome: { type: 'string' },
                ativo: { type: 'boolean' },
              },
            },
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
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
      schema: {
        tags: ['Entregas'],
        operationId: 'getDeliveryDetail',
        summary: 'Detalhe do documento para entrega',
        description: 'Retorna itens e dados do documento para iniciar entrega',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['documento'],
          properties: {
            documento: { type: 'string', description: 'Numero do documento' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['documento', 'modo', 'itens', 'entregaEmAndamento', 'historico'],
            properties: {
              documento: {
                type: 'object',
                required: ['numero', 'tipo', 'chaveAcesso', 'cliente', 'statusAtual', 'consultadoEm'],
                properties: {
                  numero: { type: 'string' },
                  tipo: { type: 'string', enum: ['NFE', 'NFCE'] },
                  chaveAcesso: { type: 'string' },
                  cliente: clienteSchema,
                  statusAtual: {
                    type: 'string',
                    enum: ['pendente', 'parcial', 'finalizado', 'cancelado'],
                  },
                  consultadoEm: { type: 'string', format: 'date-time' },
                },
              },
              modo: { type: 'string', enum: ['entrega', 'reentrega'] },
              itens: {
                type: 'array',
                items: entregaDetalheItemSchema,
              },
              entregaEmAndamento: {
                anyOf: [entregaEmAndamentoSchema, { type: 'null' }],
              },
              historico: {
                type: 'array',
                items: entregaHistoricoSchema,
              },
            },
          }),
          ...buildErrorResponses([401, 404, 500]),
        },
      },
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
      schema: {
        tags: ['Entregas'],
        operationId: 'getPendingDeliveries',
        summary: 'Pendencias de entrega parcial',
        description: 'Retorna saldo pendente de itens de entregas parciais anteriores',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['documento'],
          properties: {
            documento: { type: 'string', description: 'Numero do documento' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['documento', 'modo', 'itensPendentes', 'historico'],
            properties: {
              documento: { type: 'string' },
              modo: { type: 'string', enum: ['reentrega'] },
              itensPendentes: {
                type: 'array',
                items: entregaDetalheItemSchema,
              },
              historico: {
                type: 'array',
                items: entregaHistoricoSchema,
              },
            },
          }),
          ...buildErrorResponses([401, 404, 409, 500]),
        },
      },
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
      schema: {
        tags: ['Entregas'],
        operationId: 'startDelivery',
        summary: 'Iniciar entrega',
        description: 'Inicia o fluxo de entrega para um documento, identificando o entregador',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['documento', 'entregadorCodigo'],
          properties: {
            documento: { type: 'string', description: 'Numero do documento' },
            entregadorCodigo: { type: 'string', description: 'Codigo do entregador' },
          },
        },
        response: {
          201: okResponseSchema(entregaEmAndamentoSchema),
          ...buildErrorResponses([400, 401, 404, 409, 500]),
        },
      },
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
      schema: {
        tags: ['Entregas'],
        operationId: 'cancelDelivery',
        summary: 'Cancelar entrega em andamento',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', format: 'uuid', description: 'ID da entrega' },
          },
        },
        response: {
          200: {
            type: 'object',
            required: ['ok', 'data'],
            properties: {
              ok: { type: 'boolean', enum: [true] },
              data: {
                anyOf: [{ type: 'null' }, { type: 'object', properties: {} }],
              },
            },
          },
          ...buildErrorResponses([401, 404, 409, 500]),
        },
      },
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
      schema: {
        tags: ['Entregas'],
        operationId: 'finalizeDelivery',
        summary: 'Finalizar entrega',
        description: 'Finaliza a entrega como total ou parcial, atualizando o Protheus',
        security: [{ bearerAuth: [] }],
        params: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string', format: 'uuid', description: 'ID da entrega' },
          },
        },
        body: {
          oneOf: [
            {
              type: 'object',
              required: ['tipo'],
              properties: {
                tipo: { type: 'string', enum: ['total'] },
              },
            },
            {
              type: 'object',
              required: ['tipo', 'motivoPendencia', 'itens'],
              properties: {
                tipo: { type: 'string', enum: ['parcial'] },
                motivoPendencia: { type: 'string', enum: ['retirada_futura', 'entrega_futura'] },
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
              },
            },
          ],
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['entregaId', 'documento', 'status', 'motivoPendencia', 'filaStatus', 'finalizadaEm', 'itens'],
            properties: {
              entregaId: { type: 'string', format: 'uuid' },
              documento: { type: 'string' },
              status: {
                type: 'string',
                enum: ['finalizada_total', 'finalizada_parcial'],
              },
              motivoPendencia: {
                anyOf: [
                  { type: 'string', enum: ['retirada_futura', 'entrega_futura'] },
                  { type: 'null' },
                ],
              },
              filaStatus: {
                type: 'string',
                enum: ['parcial', 'finalizado'],
              },
              finalizadaEm: { type: 'string', format: 'date-time' },
              itens: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['itemIdProtheus', 'descricao', 'unidade', 'qtdTotal', 'qtdEntregue'],
                  properties: {
                    itemIdProtheus: { type: 'string' },
                    descricao: { type: 'string' },
                    unidade: { type: 'string' },
                    qtdTotal: { type: 'number' },
                    qtdEntregue: { type: 'number' },
                  },
                },
              },
            },
          }),
          ...buildErrorResponses([400, 401, 404, 422, 500, 503]),
        },
      },
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
