import { AdminSessaoInvalidaError } from '../../errors.js';
import { adminCriarEntregadorSchema, adminCriarLojaSchema, adminDocumentoListSchema, adminDocumentoNumeroParamSchema, adminEditarEntregaSchema, adminEditarEntregadorSchema, adminEditarLojaSchema, adminEntregaIdParamSchema, adminEntregadorIdParamSchema, adminLojaIdParamSchema, adminLoginSchema, } from './admin.schemas.js';
function getBearerToken(authorizationHeader) {
    if (!authorizationHeader || Array.isArray(authorizationHeader)) {
        throw new AdminSessaoInvalidaError();
    }
    const [scheme, token] = authorizationHeader.split(' ');
    if (scheme !== 'Bearer' || !token)
        throw new AdminSessaoInvalidaError();
    return token;
}
export function createAdminController({ adminService }) {
    return {
        async login(request, reply) {
            const input = adminLoginSchema.parse(request.body);
            const data = await adminService.login(input);
            return reply.status(201).send({ ok: true, data });
        },
        async requireAdminSession(request) {
            const token = getBearerToken(request.headers.authorization);
            request.adminSession = await adminService.requireSession(token);
        },
        async logout(request, reply) {
            const token = getBearerToken(request.headers.authorization);
            await adminService.logout(token);
            return reply.send({ ok: true, data: null });
        },
        async listDocumentos(request, reply) {
            const query = adminDocumentoListSchema.parse(request.query);
            const data = await adminService.listDocumentos(request.adminSession.lojaCodigo, query);
            return reply.send({ ok: true, data });
        },
        async getDocumentoDetalhe(request, reply) {
            const params = adminDocumentoNumeroParamSchema.parse(request.params);
            const data = await adminService.getDocumentoDetalhe(request.adminSession.lojaCodigo, params.documentoNumero);
            return reply.send({ ok: true, data });
        },
        async editarEntrega(request, reply) {
            const params = adminEntregaIdParamSchema.parse(request.params);
            const body = adminEditarEntregaSchema.parse(request.body);
            const data = await adminService.editarEntrega({
                entregaId: params.id,
                status: body.status,
                itens: body.itens,
                motivo: body.motivo,
                lojaCodigo: request.adminSession.lojaCodigo,
            });
            return reply.send({ ok: true, data });
        },
        // --- Lojas ---
        async listLojas(_request, reply) {
            const data = await adminService.listLojas();
            return reply.send({ ok: true, data });
        },
        async criarLoja(request, reply) {
            const body = adminCriarLojaSchema.parse(request.body);
            const data = await adminService.criarLoja(body);
            return reply.status(201).send({ ok: true, data });
        },
        async editarLoja(request, reply) {
            const params = adminLojaIdParamSchema.parse(request.params);
            const body = adminEditarLojaSchema.parse(request.body);
            const data = await adminService.editarLoja({ id: params.id, ...body });
            return reply.send({ ok: true, data });
        },
        // --- Entregadores ---
        async listEntregadores(request, reply) {
            const data = await adminService.listEntregadores(request.adminSession.lojaCodigo);
            return reply.send({ ok: true, data });
        },
        async criarEntregador(request, reply) {
            const body = adminCriarEntregadorSchema.parse(request.body);
            const data = await adminService.criarEntregador({
                ...body,
                lojaCodigo: request.adminSession.lojaCodigo,
            });
            return reply.status(201).send({ ok: true, data });
        },
        async editarEntregador(request, reply) {
            const params = adminEntregadorIdParamSchema.parse(request.params);
            const body = adminEditarEntregadorSchema.parse(request.body);
            const data = await adminService.editarEntregador({ id: params.id, ...body });
            return reply.send({ ok: true, data });
        },
    };
}
//# sourceMappingURL=admin.controller.js.map