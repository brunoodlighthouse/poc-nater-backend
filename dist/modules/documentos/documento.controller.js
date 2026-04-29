import { consultaDocumentoSchema } from './documento.schemas.js';
export function createDocumentoController({ documentoService }) {
    return {
        async consultDocument(request, reply) {
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
//# sourceMappingURL=documento.controller.js.map