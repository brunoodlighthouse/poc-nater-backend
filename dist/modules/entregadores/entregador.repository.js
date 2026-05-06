import { prisma } from '../../db/connection.js';
import { EntregadorNaoEncontradoError } from '../../errors.js';
function mapEntregador(entry) {
    return { id: entry.id, codigo: entry.codigo, nome: entry.nome, ativo: entry.ativo };
}
export function createEntregadorRepository() {
    return {
        async listActive(lojaCodigo) {
            const rows = await prisma.entregador.findMany({
                where: { lojaCodigo, ativo: true },
                orderBy: { nome: 'asc' },
            });
            return rows.map(mapEntregador);
        },
        async findByCode(codigo, lojaCodigo) {
            const row = await prisma.entregador.findFirst({
                where: { codigo, lojaCodigo, ativo: true },
            });
            if (!row)
                throw new EntregadorNaoEncontradoError();
            return mapEntregador(row);
        },
    };
}
//# sourceMappingURL=entregador.repository.js.map