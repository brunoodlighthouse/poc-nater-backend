import type { FastifyInstance } from 'fastify';
import type { DocumentoController } from './documento.controller.js';
import type { SessaoController } from '../sessoes/sessao.controller.js';
import { buildErrorResponses, clienteSchema, itemDocumentoSchema, okResponseSchema } from '../../swagger.js';

type DocumentoRoutesOptions = {
  controller: DocumentoController;
  sessaoController: SessaoController;
};

const documentoListItemSchema = {
  type: 'object',
  required: [
    'id',
    'documentoNumero',
    'documentoChave',
    'clienteNome',
    'qtdItens',
    'status',
    'consultadoEm',
    'tipoDocumento',
    'qtdItensEntregues',
  ],
  properties: {
    id: { type: 'string', format: 'uuid' },
    documentoNumero: { type: 'string' },
    documentoChave: { type: 'string' },
    clienteNome: { type: 'string' },
    qtdItens: { type: 'integer' },
    status: {
      type: 'string',
      enum: ['pendente', 'em_andamento', 'parcial', 'finalizado', 'cancelado'],
    },
    consultadoEm: { type: 'string', format: 'date-time' },
    tipoDocumento: { type: 'string', enum: ['NFE', 'NFCE'] },
    qtdItensEntregues: { type: 'integer' },
  },
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
    'status',
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
    status: {
      type: 'string',
      enum: ['pendente', 'em_andamento', 'parcial', 'finalizado', 'cancelado'],
    },
    recebidaEm: { type: 'string', format: 'date-time' },
  },
};

export async function registerDocumentoRoutes(
  app: FastifyInstance,
  options: DocumentoRoutesOptions,
) {
  const { controller, sessaoController } = options;

  app.get(
    '/',
    {
      schema: {
        tags: ['Documentos'],
        operationId: 'listDocumentos',
        summary: 'Listar documentos da loja',
        description: 'Retorna todos os documentos da loja (fila unificada)',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'array',
            items: documentoListItemSchema,
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: { max: 60, timeWindow: '1 minute' },
      },
    },
    controller.listDocumentos,
  );

  app.get(
    '/notas-hoje',
    {
      schema: {
        tags: ['Documentos'],
        operationId: 'listNotasHoje',
        summary: 'Listar notas recebidas hoje',
        description: 'Retorna documentos recebidos via webhook no dia atual',
        security: [{ bearerAuth: [] }],
        response: {
          200: okResponseSchema({
            type: 'array',
            items: notaRecebidaSchema,
          }),
          ...buildErrorResponses([401, 500]),
        },
      },
      preHandler: sessaoController.requireSession,
      config: {
        rateLimit: { max: 60, timeWindow: '1 minute' },
      },
    },
    controller.listNotasHoje,
  );

  app.post(
    '/consulta',
    {
      schema: {
        tags: ['Documentos'],
        operationId: 'consultDocument',
        summary: 'Consultar documento',
        description: 'Consulta NF-e/NFC-e no Protheus a partir do codigo lido pela camera',
        security: [{ bearerAuth: [] }],
        body: {
          type: 'object',
          required: ['codigoLido', 'formato'],
          properties: {
            codigoLido: { type: 'string', minLength: 1, maxLength: 500, description: 'Conteudo lido pelo scanner' },
            formato: { type: 'string', enum: ['qrcode', 'barcode', 'numero'], description: 'Formato da leitura' },
          },
        },
        response: {
          200: okResponseSchema({
            type: 'object',
            required: ['documento', 'tipo', 'chaveAcesso', 'cliente', 'statusAtual', 'itens', 'consultadoEm'],
            properties: {
              documento: { type: 'string' },
              tipo: { type: 'string', enum: ['NFE', 'NFCE'] },
              chaveAcesso: { type: 'string' },
              cliente: clienteSchema,
              statusAtual: { type: 'string', enum: ['pendente', 'parcial'] },
              itens: {
                type: 'array',
                items: itemDocumentoSchema,
              },
              consultadoEm: { type: 'string', format: 'date-time' },
            },
          }),
          ...buildErrorResponses([400, 401, 409, 422, 503]),
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
    controller.consultDocument,
  );
}
