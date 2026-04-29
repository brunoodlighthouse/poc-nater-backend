import type { FastifyReply, FastifyRequest } from 'fastify';
import type { SessaoService } from './sessao.service.js';
import type { SessaoContext } from './sessao.types.js';
declare module 'fastify' {
    interface FastifyRequest {
        session: SessaoContext;
    }
}
type SessaoControllerDependencies = {
    sessaoService: SessaoService;
};
export declare function createSessaoController({ sessaoService }: SessaoControllerDependencies): {
    createSession(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    requireSession(request: FastifyRequest): Promise<void>;
    getCurrentSession(request: FastifyRequest, reply: FastifyReply): Promise<never>;
};
export type SessaoController = ReturnType<typeof createSessaoController>;
export {};
//# sourceMappingURL=sessao.controller.d.ts.map