import { prisma } from '../../db/connection.js';
function mapFilaItem(input) {
    const payload = input.payloadProtheus ?? null;
    const qtdItensEntregues = payload?.itens?.reduce((total, item) => {
        const delivered = typeof item.qtdEntregue === 'number' && item.qtdEntregue > 0 ? 1 : 0;
        return total + delivered;
    }, 0) ?? 0;
    return {
        id: input.id,
        documentoNumero: input.documentoNumero,
        documentoChave: input.documentoChave,
        clienteNome: input.clienteNome,
        qtdItens: input.qtdItens,
        status: input.status,
        consultadoEm: input.consultadoEm.toISOString(),
        tipoDocumento: payload?.tipo === 'NFCE' ? 'NFCE' : 'NFE',
        qtdItensEntregues,
    };
}
export function createFilaRepository() {
    return {
        async listRecentByLoja(lojaCodigo) {
            const ttlStart = new Date(Date.now() - 12 * 60 * 60 * 1000);
            const items = await prisma.filaDocumento.findMany({
                where: {
                    lojaCodigo,
                    removidoEm: null,
                    consultadoEm: {
                        gte: ttlStart,
                    },
                },
                orderBy: {
                    consultadoEm: 'desc',
                },
            });
            return items.map(mapFilaItem);
        },
    };
}
//# sourceMappingURL=fila.repository.js.map