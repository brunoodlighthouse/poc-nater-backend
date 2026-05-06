import type { AdminRepository } from './admin.repository.js';
import type { AdminCriarEntregadorInput, AdminCriarLojaInput, AdminDocumentoDetalhe, AdminDocumentoListQuery, AdminDocumentoListResponse, AdminEditarEntregaInput, AdminEditarEntregadorInput, AdminEditarLojaInput, AdminEntrega, AdminEntregadorItem, AdminLojaItem, AdminLoginInput, AdminLoginResponse, AdminSessaoContext } from './admin.types.js';
export declare function hashPassword(password: string): string;
type AdminServiceDependencies = {
    adminRepository: AdminRepository;
};
export declare function createAdminService({ adminRepository }: AdminServiceDependencies): {
    login(input: AdminLoginInput): Promise<AdminLoginResponse>;
    requireSession(token: string): Promise<AdminSessaoContext>;
    logout(token: string): Promise<void>;
    listDocumentos(lojaCodigo: string, query: AdminDocumentoListQuery): Promise<AdminDocumentoListResponse>;
    getDocumentoDetalhe(lojaCodigo: string, documentoNumero: string): Promise<AdminDocumentoDetalhe>;
    editarEntrega(input: AdminEditarEntregaInput): Promise<AdminEntrega>;
    listLojas(): Promise<AdminLojaItem[]>;
    criarLoja(input: AdminCriarLojaInput): Promise<AdminLojaItem>;
    editarLoja(input: AdminEditarLojaInput): Promise<AdminLojaItem>;
    listEntregadores(lojaCodigo: string): Promise<AdminEntregadorItem[]>;
    criarEntregador(input: AdminCriarEntregadorInput): Promise<AdminEntregadorItem>;
    editarEntregador(input: AdminEditarEntregadorInput): Promise<AdminEntregadorItem>;
};
export type AdminService = ReturnType<typeof createAdminService>;
export {};
//# sourceMappingURL=admin.service.d.ts.map