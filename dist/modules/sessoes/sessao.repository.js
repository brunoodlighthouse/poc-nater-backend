import { prisma } from '../../db/connection.js';
function mapSessaoRecord(record) {
    return {
        id: record.id,
        token: record.token,
        dispositivoId: record.dispositivoId,
        loja: {
            id: record.lojaCodigo,
            codigo: record.lojaCodigo,
            nome: record.lojaNome,
        },
    };
}
export function createSessaoRepository() {
    return {
        async upsertByDevice(input) {
            const sessao = await prisma.sessao.upsert({
                where: {
                    dispositivoId: input.dispositivoId,
                },
                create: {
                    token: input.token,
                    dispositivoId: input.dispositivoId,
                    lojaCodigo: input.lojaCodigo,
                    lojaNome: input.lojaNome,
                },
                update: {
                    token: input.token,
                    lojaCodigo: input.lojaCodigo,
                    lojaNome: input.lojaNome,
                    revogadaEm: null,
                    criadaEm: new Date(),
                    ultimaAtividadeEm: new Date(),
                },
            });
            return mapSessaoRecord(sessao);
        },
        async findActiveByToken(token) {
            const sessao = await prisma.sessao.findFirst({
                where: {
                    token,
                    revogadaEm: null,
                },
            });
            return sessao ? mapSessaoRecord(sessao) : null;
        },
        async touchActivity(id) {
            await prisma.sessao.update({
                where: { id },
                data: { ultimaAtividadeEm: new Date() },
            });
        },
    };
}
//# sourceMappingURL=sessao.repository.js.map