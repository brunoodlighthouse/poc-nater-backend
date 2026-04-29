import type { FastifyInstance } from 'fastify';
import type { DocumentoController } from './documento.controller.js';
import type { SessaoController } from '../sessoes/sessao.controller.js';
type DocumentoRoutesOptions = {
    controller: DocumentoController;
    sessaoController: SessaoController;
};
export declare function registerDocumentoRoutes(app: FastifyInstance, options: DocumentoRoutesOptions): Promise<void>;
export {};
//# sourceMappingURL=documento.routes.d.ts.map