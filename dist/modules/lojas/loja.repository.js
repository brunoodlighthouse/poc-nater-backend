import { prisma } from '../../db/connection.js';
import { LojaNaoEncontradaError } from '../../errors.js';
function mapLoja(entry) {
    return { id: entry.id, codigo: entry.codigo, nome: entry.nome, ativa: entry.ativa };
}
export function createLojaRepository() {
    return {
        async listActive() {
            const rows = await prisma.loja.findMany({
                where: { ativa: true },
                orderBy: { nome: 'asc' },
            });
            return rows.map(mapLoja);
        },
        async findByCode(codigo) {
            const row = await prisma.loja.findFirst({
                where: { codigo: codigo.toUpperCase(), ativa: true },
            });
            if (!row)
                throw new LojaNaoEncontradaError();
            return mapLoja(row);
        },
    };
}
//# sourceMappingURL=loja.repository.js.map