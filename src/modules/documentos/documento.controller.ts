import type { FastifyReply, FastifyRequest } from 'fastify';
import { consultaDocumentoSchema } from './documento.schemas.js';
import type { DocumentoService } from './documento.service.js';

type DocumentoControllerDependencies = {
  documentoService: DocumentoService;
};

export function createDocumentoController({ documentoService }: DocumentoControllerDependencies) {
  return {
    async consultDocument(request: FastifyRequest, reply: FastifyReply) {
      const input = consultaDocumentoSchema.parse(request.body);
      const data = await documentoService.consultDocument({
        ...input,
        correlationId: request.id,
        sessao: request.session,
      });

      return reply.send({
        ok: true,
        data,
      });
    },
  };
}

export type DocumentoController = ReturnType<typeof createDocumentoController>;
