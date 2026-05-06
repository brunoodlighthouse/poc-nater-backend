import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { AdminCredenciaisInvalidasError, AdminSessaoInvalidaError, DocumentoNaoNaFilaError, EntregadorJaExisteError, EntregadorNaoEncontradoError, EntregaNaoEncontradaError, LojaJaExisteError, LojaNaoEncontradaError, } from '../../errors.js';
const SCRYPT_KEY_LENGTH = 64;
export function hashPassword(password) {
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(password, salt, SCRYPT_KEY_LENGTH).toString('hex');
    return `${salt}:${hash}`;
}
function verifyPassword(password, stored) {
    const [salt, hash] = stored.split(':');
    if (!salt || !hash)
        return false;
    const derived = scryptSync(password, salt, SCRYPT_KEY_LENGTH);
    return timingSafeEqual(Buffer.from(hash, 'hex'), derived);
}
export function createAdminService({ adminRepository }) {
    return {
        async login(input) {
            const loja = await adminRepository.findLojaWithPassword(input.lojaCodigo);
            if (!loja?.adminSenhaHash) {
                throw new AdminCredenciaisInvalidasError();
            }
            if (!verifyPassword(input.senha, loja.adminSenhaHash)) {
                throw new AdminCredenciaisInvalidasError();
            }
            const token = randomBytes(32).toString('base64url');
            await adminRepository.createSession({ token, lojaCodigo: loja.codigo });
            return {
                token,
                loja: { codigo: loja.codigo, nome: loja.nome },
            };
        },
        async requireSession(token) {
            const sessao = await adminRepository.findActiveSession(token);
            if (!sessao)
                throw new AdminSessaoInvalidaError();
            return sessao;
        },
        async logout(token) {
            await adminRepository.revokeSession(token);
        },
        async listDocumentos(lojaCodigo, query) {
            return adminRepository.listDocumentos(lojaCodigo, query);
        },
        async getDocumentoDetalhe(lojaCodigo, documentoNumero) {
            const detalhe = await adminRepository.getDocumentoDetalhe(lojaCodigo, documentoNumero);
            if (!detalhe)
                throw new DocumentoNaoNaFilaError();
            return detalhe;
        },
        async editarEntrega(input) {
            const result = await adminRepository.editarEntrega(input);
            if (!result)
                throw new EntregaNaoEncontradaError();
            return result;
        },
        // --- Lojas ---
        async listLojas() {
            return adminRepository.listLojas();
        },
        async criarLoja(input) {
            const existing = await adminRepository.findLojaByCodigo(input.codigo);
            if (existing)
                throw new LojaJaExisteError();
            const senhaHash = hashPassword(input.adminSenha);
            return adminRepository.criarLoja({
                codigo: input.codigo,
                nome: input.nome,
                adminSenha: input.adminSenha,
                adminSenhaHash: senhaHash,
            });
        },
        async editarLoja(input) {
            const existing = await adminRepository.findLojaById(input.id);
            if (!existing)
                throw new LojaNaoEncontradaError();
            const adminSenhaHash = input.adminSenha ? hashPassword(input.adminSenha) : undefined;
            return adminRepository.editarLoja({ ...input, adminSenhaHash });
        },
        // --- Entregadores ---
        async listEntregadores(lojaCodigo) {
            return adminRepository.listEntregadores(lojaCodigo);
        },
        async criarEntregador(input) {
            const existing = await adminRepository.findEntregadorByCodigo(input.codigo);
            if (existing)
                throw new EntregadorJaExisteError();
            return adminRepository.criarEntregador(input);
        },
        async editarEntregador(input) {
            const existing = await adminRepository.findEntregadorById(input.id);
            if (!existing)
                throw new EntregadorNaoEncontradoError();
            return adminRepository.editarEntregador(input);
        },
    };
}
//# sourceMappingURL=admin.service.js.map