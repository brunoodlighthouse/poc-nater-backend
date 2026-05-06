export function createFilaService({ filaRepository }) {
    return {
        async listQueue(lojaCodigo) {
            return filaRepository.listRecentByLoja(lojaCodigo);
        },
    };
}
//# sourceMappingURL=fila.service.js.map