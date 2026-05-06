import type { FastifyReply, FastifyRequest } from 'fastify';
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
export declare function createAdminController({ adminService }: AdminControllerDependencies): {
    login(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    requireAdminSession(request: FastifyRequest): Promise<void>;
    logout(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    listDocumentos(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getDocumentoDetalhe(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    editarEntrega(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    listLojas(_request: FastifyRequest, reply: FastifyReply): Promise<never>;
    criarLoja(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    editarLoja(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    listEntregadores(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    criarEntregador(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    editarEntregador(request: FastifyRequest, reply: FastifyReply): Promise<never>;
};
export type AdminController = ReturnType<typeof createAdminController>;
export {};
//# sourceMappingURL=admin.controller.d.ts.map