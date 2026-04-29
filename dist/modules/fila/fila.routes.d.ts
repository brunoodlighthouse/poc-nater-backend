import type { FastifyInstance } from 'fastify';
import type { FilaController } from './fila.controller.js';
import type { SessaoController } from '../sessoes/sessao.controller.js';
type FilaRoutesOptions = {
    controller: FilaController;
    sessaoController: SessaoController;
};
export declare function registerFilaRoutes(app: FastifyInstance, options: FilaRoutesOptions): Promise<void>;
export {};
//# sourceMappingURL=fila.routes.d.ts.map