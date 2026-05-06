import type { FastifyInstance } from 'fastify';
import type { NotaRecebidaController } from './nota-recebida.controller.js';
import { buildErrorResponses, okResponseSchema } from '../../swagger.js';

type NotaRecebidaRoutesOptions = {
  controller: NotaRecebidaController;
};

const notaRecebidaSchema = {
  type: 'object',
  required: [
    'id',
    'lojaCodigo',
    'documentoNumero',
    'chaveAcesso',
    'clienteNome',
    'clienteDocumento',
    'tipoDocumento',
    'qtdItens',
    'valorTotal',
    'recebidaEm',
  ],
  properties: {
    id: { type: 'string', format: 'uuid' },
    lojaCodigo: { type: 'string' },
    documentoNumero: { type: 'string' },
    chaveAcesso: { type: 'string' },
    clienteNome: { type: 'string' },
    clienteDocumento: { type: 'string' },
    tipoDocumento: { type: 'string', enum: ['NFE', 'NFCE'] },
    qtdItens: { type: 'integer' },
    valorTotal: { type: 'number' },
    recebidaEm: { type: 'string', format: 'date-time' },
  },
};

export async function registerNotaRecebidaRoutes(app: FastifyInstance, options: NotaRecebidaRoutesOptions) {
  const { controller } = options;

  app.post(
    '/webhook',
    {
      schema: {
        tags: ['Webhooks'],
        operationId: 'receiveWebhookNota',
        summary: 'Webhook para receber notas do Protheus',
        description: 'Endpoint chamado pelo Protheus ao gerar uma nota fiscal de venda',
        body: {
          type: 'object',
          required: [
            'lojaCodigo',
            'documentoNumero',
            'chaveAcesso',
            'clienteNome',
            'clienteDocumento',
            'tipoDocumento',
            'qtdItens',
            'valorTotal',
          ],
          properties: {
            lojaCodigo: { type: 'string' },
            documentoNumero: { type: 'string' },
            chaveAcesso: { type: 'string' },
            clienteNome: { type: 'string' },
            clienteDocumento: { type: 'string' },
            tipoDocumento: { type: 'string', enum: ['NFE', 'NFCE'] },
            qtdItens: { type: 'integer' },
            valorTotal: { type: 'number' },
            payload: { type: 'object', additionalProperties: true },
          },
        },
        response: {
          201: okResponseSchema(notaRecebidaSchema),
          ...buildErrorResponses([400, 500]),
        },
      },
      config: {
        rateLimit: {
          max: 120,
          timeWindow: '1 minute',
        },
      },
    },
    controller.receiveWebhook,
  );
}
