import type { FastifyInstance } from 'fastify';
import type { SessaoController } from '../sessoes/sessao.controller.js';
import type { EntregaController } from './entrega.controller.js';
type EntregaRoutesOptions = {
    controller: EntregaController;
    sessaoController: SessaoController;
};
export declare function registerEntregaRoutes(app: FastifyInstance, options: EntregaRoutesOptions): Promise<void>;
export {};
//# sourceMappingURL=entrega.routes.d.ts.map