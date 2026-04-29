import { SessaoInvalidaError } from '../../errors.js';
import { createSessaoSchema } from './sessao.schemas.js';
function getBearerToken(authorizationHeader) {
    if (!authorizationHeader) {
        throw new SessaoInvalidaError();
    }
    if (Array.isArray(authorizationHeader)) {
        throw new SessaoInvalidaError();
    }
    const [scheme, token] = authorizationHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
        throw new SessaoInvalidaError();
    }
    return token;
}
export function createSessaoController({ sessaoService }) {
    return {
        async createSession(request, reply) {
            const input = createSessaoSchema.parse(request.body);
            const data = await sessaoService.createSession({
                ...input,
                correlationId: request.id,
            });
            return reply.status(201).send({
                ok: true,
                data,
            });
        },
        async requireSession(request) {
            const token = getBearerToken(request.headers.authorization);
            request.session = await sessaoService.requireSession(token);
        },
        async getCurrentSession(request, reply) {
            const data = {
                loja: request.session.loja,
            };
            return reply.send({
                ok: true,
                data,
            });
        },
    };
}
//# sourceMappingURL=sessao.controller.js.map