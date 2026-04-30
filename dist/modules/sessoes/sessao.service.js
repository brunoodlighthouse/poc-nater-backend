import { randomBytes } from 'node:crypto';
import { LojaNaoEncontradaError, SessaoInvalidaError } from '../../errors.js';
function extractStoreCode(qrLoja) {
    const normalized = qrLoja.trim();
    const match = /^LOJA:(?<codigo>[A-Z0-9_-]+)$/i.exec(normalized);
    if (match?.groups?.['codigo']) {
        return match.groups['codigo'].toUpperCase();
    }
    if (/^[A-Z0-9_-]+$/i.test(normalized)) {
        return normalized.toUpperCase();
    }
    throw new LojaNaoEncontradaError();
}
export function createSessaoService({ logger, sessaoRepository, lojaRepository, }) {
    async function requireSession(token) {
        const sessao = await sessaoRepository.findActiveByToken(token);
        if (!sessao) {
            throw new SessaoInvalidaError();
        }
        await sessaoRepository.touchActivity(sessao.id);
        return sessao;
    }
    return {
        async createSession(input) {
            const lojaCodigo = extractStoreCode(input.qrLoja);
            const store = await lojaRepository.findByCode(lojaCodigo);
            const token = randomBytes(32).toString('base64url');
            const sessao = await sessaoRepository.upsertByDevice({
                token,
                dispositivoId: input.dispositivoId,
                lojaCodigo: store.codigo,
                lojaNome: store.nome,
            });
            logger.info({
                evento: 'sessao.criada',
                correlationId: input.correlationId,
                loja: store.codigo,
                dispositivoId: input.dispositivoId,
            }, 'Sessao criada com sucesso');
            return {
                token: sessao.token,
                loja: sessao.loja,
            };
        },
        async getCurrentSession(token) {
            const session = await requireSession(token);
            return { loja: session.loja };
        },
        requireSession,
    };
}
//# sourceMappingURL=sessao.service.js.map