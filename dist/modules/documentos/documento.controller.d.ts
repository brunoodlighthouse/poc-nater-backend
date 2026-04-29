import type { FastifyReply, FastifyRequest } from 'fastify';
import type { DocumentoService } from './documento.service.js';
type DocumentoControllerDependencies = {
    documentoService: DocumentoService;
};
export declare function createDocumentoController({ documentoService }: DocumentoControllerDependencies): {
    consultDocument(request: FastifyRequest, reply: FastifyReply): Promise<never>;
};
export type DocumentoController = ReturnType<typeof createDocumentoController>;
export {};
//# sourceMappingURL=documento.controller.d.ts.map