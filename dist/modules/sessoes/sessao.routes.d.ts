import type { FastifyInstance } from 'fastify';
import type { SessaoController } from './sessao.controller.js';
type SessaoRoutesOptions = {
    controller: SessaoController;
    prefix?: string;
};
export declare function registerSessaoRoutes(app: FastifyInstance, options: SessaoRoutesOptions): Promise<void>;
export {};
//# sourceMappingURL=sessao.routes.d.ts.map