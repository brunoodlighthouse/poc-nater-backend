export function createFilaController({ filaService }) {
    return {
        async listQueue(request, reply) {
            const data = await filaService.listQueue(request.session.loja.codigo);
            return reply.send({
                ok: true,
                data,
            });
        },
    };
}
//# sourceMappingURL=fila.controller.js.map