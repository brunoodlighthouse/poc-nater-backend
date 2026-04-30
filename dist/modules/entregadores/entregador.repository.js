import { prisma } from '../../db/connection.js';
import { EntregadorNaoEncontradoError } from '../../errors.js';
function mapEntregador(entry) {
    return { id: entry.id, codigo: entry.codigo, nome: entry.nome, ativo: entry.ativo };
}
export function createEntregadorRepository() {
    return {
        async listActive() {
            const rows = await prisma.entregador.findMany({
                where: { ativo: true },
                orderBy: { nome: 'asc' },
            });
            return rows.map(mapEntregador);
        },
        async findByCode(codigo) {
            const row = await prisma.entregador.findFirst({
                where: { codigo, ativo: true },
            });
            if (!row)
                throw new EntregadorNaoEncontradoError();
            return mapEntregador(row);
        },
    };
}
//# sourceMappingURL=entregador.repository.js.map