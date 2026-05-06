import { documentoParamSchema, entregaIdParamSchema, finalizarEntregaSchema, iniciarEntregaSchema, } from './entrega.schemas.js';
export function createEntregaController({ entregaService }) {
    return {
        async listCouriers(request, reply) {
            const data = await entregaService.listCouriers(request.session.loja.codigo);
            return reply.send({
                ok: true,
                data,
            });
        },
        async getDetail(request, reply) {
            const params = documentoParamSchema.parse(request.params);
            const data = await entregaService.getDetail(request.session.loja.codigo, params.documento);
            return reply.send({
                ok: true,
                data,
            });
        },
        async getPendingDeliveries(request, reply) {
            const params = documentoParamSchema.parse(request.params);
            const data = await entregaService.getPendingDeliveries(request.session.loja.codigo, params.documento);
            return reply.send({
                ok: true,
                data,
            });
        },
        async startDelivery(request, reply) {
            const input = iniciarEntregaSchema.parse(request.body);
            const data = await entregaService.startDelivery({
                ...input,
                correlationId: request.id,
                sessao: request.session,
            });
            return reply.status(201).send({
                ok: true,
                data,
            });
        },
        async cancelDelivery(request, reply) {
            const params = entregaIdParamSchema.parse(request.params);
            await entregaService.cancelDelivery(params.id, request.session.id);
            return reply.send({ ok: true, data: null });
        },
        async finalizeDelivery(request, reply) {
            const params = entregaIdParamSchema.parse(request.params);
            const body = finalizarEntregaSchema.parse(request.body);
            const data = await entregaService.finalizeDelivery({
                ...body,
                entregaId: params.id,
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
//# sourceMappingURL=entrega.controller.js.map