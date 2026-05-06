import type { FastifyReply, FastifyRequest } from 'fastify';
import { AdminSessaoInvalidaError } from '../../errors.js';
import {
  adminCriarEntregadorSchema,
  adminCriarLojaSchema,
  adminDocumentoListSchema,
  adminDocumentoNumeroParamSchema,
  adminEditarEntregaSchema,
  adminEditarEntregadorSchema,
  adminEditarLojaSchema,
  adminEntregaIdParamSchema,
  adminEntregadorIdParamSchema,
  adminLojaIdParamSchema,
  adminLoginSchema,
} from './admin.schemas.js';
import type { AdminService } from './admin.service.js';
import type { AdminSessaoContext } from './admin.types.js';

declare module 'fastify' {
  interface FastifyRequest {
    adminSession: AdminSessaoContext;
  }
}

type AdminControllerDependencies = {
  adminService: AdminService;
};

function getBearerToken(authorizationHeader: string | string[] | undefined): string {
  if (!authorizationHeader || Array.isArray(authorizationHeader)) {
    throw new AdminSessaoInvalidaError();
  }
  const [scheme, token] = authorizationHeader.split(' ');
  if (scheme !== 'Bearer' || !token) throw new AdminSessaoInvalidaError();
  return token;
}

export function createAdminController({ adminService }: AdminControllerDependencies) {
  return {
    async login(request: FastifyRequest, reply: FastifyReply) {
      const input = adminLoginSchema.parse(request.body);
      const data = await adminService.login(input);
      return reply.status(201).send({ ok: true, data });
    },

    async requireAdminSession(request: FastifyRequest) {
      const token = getBearerToken(request.headers.authorization);
      request.adminSession = await adminService.requireSession(token);
    },

    async logout(request: FastifyRequest, reply: FastifyReply) {
      const token = getBearerToken(request.headers.authorization);
      await adminService.logout(token);
      return reply.send({ ok: true, data: null });
    },

    async listDocumentos(request: FastifyRequest, reply: FastifyReply) {
      const query = adminDocumentoListSchema.parse(request.query);
      const data = await adminService.listDocumentos(
        request.adminSession.lojaCodigo,
        query,
      );
      return reply.send({ ok: true, data });
    },

    async getDocumentoDetalhe(request: FastifyRequest, reply: FastifyReply) {
      const params = adminDocumentoNumeroParamSchema.parse(request.params);
      const data = await adminService.getDocumentoDetalhe(
        request.adminSession.lojaCodigo,
        params.documentoNumero,
      );
      return reply.send({ ok: true, data });
    },

    async editarEntrega(request: FastifyRequest, reply: FastifyReply) {
      const params = adminEntregaIdParamSchema.parse(request.params);
      const body = adminEditarEntregaSchema.parse(request.body);
      const data = await adminService.editarEntrega({
        entregaId: params.id,
        status: body.status,
        itens: body.itens,
        motivo: body.motivo,
        lojaCodigo: request.adminSession.lojaCodigo,
      });
      return reply.send({ ok: true, data });
    },

    // --- Lojas ---

    async listLojas(_request: FastifyRequest, reply: FastifyReply) {
      const data = await adminService.listLojas();
      return reply.send({ ok: true, data });
    },

    async criarLoja(request: FastifyRequest, reply: FastifyReply) {
      const body = adminCriarLojaSchema.parse(request.body);
      const data = await adminService.criarLoja(body);
      return reply.status(201).send({ ok: true, data });
    },

    async editarLoja(request: FastifyRequest, reply: FastifyReply) {
      const params = adminLojaIdParamSchema.parse(request.params);
      const body = adminEditarLojaSchema.parse(request.body);
      const data = await adminService.editarLoja({ id: params.id, ...body });
      return reply.send({ ok: true, data });
    },

    // --- Entregadores ---

    async listEntregadores(request: FastifyRequest, reply: FastifyReply) {
      const data = await adminService.listEntregadores(request.adminSession.lojaCodigo);
      return reply.send({ ok: true, data });
    },

    async criarEntregador(request: FastifyRequest, reply: FastifyReply) {
      const body = adminCriarEntregadorSchema.parse(request.body);
      const data = await adminService.criarEntregador({
        ...body,
        lojaCodigo: request.adminSession.lojaCodigo,
      });
      return reply.status(201).send({ ok: true, data });
    },

    async editarEntregador(request: FastifyRequest, reply: FastifyReply) {
      const params = adminEntregadorIdParamSchema.parse(request.params);
      const body = adminEditarEntregadorSchema.parse(request.body);
      const data = await adminService.editarEntregador({ id: params.id, ...body });
      return reply.send({ ok: true, data });
    },
  };
}

export type AdminController = ReturnType<typeof createAdminController>;
