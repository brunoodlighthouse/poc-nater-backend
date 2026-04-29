export function createFilaService({ filaRepository }) {
    return {
        async listQueue(sessaoId) {
            return filaRepository.listRecentBySession(sessaoId);
        },
    };
}
//# sourceMappingURL=fila.service.js.map