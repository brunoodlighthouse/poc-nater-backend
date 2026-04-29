export function createFilaController({ filaService }) {
    return {
        async listQueue(request, reply) {
            const data = await filaService.listQueue(request.session.id);
            return reply.send({
                ok: true,
                data,
            });
        },
    };
}
//# sourceMappingURL=fila.controller.js.map