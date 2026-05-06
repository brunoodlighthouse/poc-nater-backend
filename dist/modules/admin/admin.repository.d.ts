import type { AdminCriarEntregadorInput, AdminCriarLojaInput, AdminDocumentoDetalhe, AdminDocumentoListQuery, AdminDocumentoListResponse, AdminEditarEntregaInput, AdminEditarEntregadorInput, AdminEditarLojaInput, AdminEntregadorItem, AdminLojaItem, AdminSessaoContext } from './admin.types.js';
export declare function createAdminRepository(): {
    findLojaWithPassword(lojaCodigo: string): Promise<{
        codigo: string;
        nome: string;
        adminSenhaHash: string | null;
    } | null>;
    createSession(input: {
        token: string;
        lojaCodigo: string;
    }): Promise<{
        id: string;
        lojaCodigo: string;
        token: string;
        criadaEm: Date;
        revogadaEm: Date | null;
    }>;
    findActiveSession(token: string): Promise<AdminSessaoContext | null>;
    revokeSession(token: string): Promise<void>;
    listDocumentos(lojaCodigo: string, query: AdminDocumentoListQuery): Promise<AdminDocumentoListResponse>;
    getDocumentoDetalhe(lojaCodigo: string, documentoNumero: string): Promise<AdminDocumentoDetalhe | null>;
    findEntregaById(entregaId: string): Promise<({
        itens: {
            id: string;
            descricao: string;
            qtdTotal: import("@prisma/client/runtime/library").Decimal;
            qtdEntregue: import("@prisma/client/runtime/library").Decimal;
            unidade: string;
            itemIdProtheus: string;
            entregaId: string;
            observacao: string | null;
        }[];
    } & {
        status: string;
        entregadorNome: string;
        id: string;
        documentoNumero: string;
        entregadorCodigo: string;
        motivoPendencia: string | null;
        iniciadaEm: Date;
        finalizadaEm: Date | null;
        sessaoId: string;
        entregaAnteriorId: string | null;
    }) | null>;
    editarEntrega(input: AdminEditarEntregaInput): Promise<{
        id: string;
        documentoNumero: string;
        entregadorCodigo: string;
        entregadorNome: string;
        status: string;
        motivoPendencia: string | null;
        iniciadaEm: string;
        finalizadaEm: string | null;
        itens: {
            id: string;
            itemIdProtheus: string;
            descricao: string;
            unidade: string;
            qtdTotal: number;
            qtdEntregue: number;
        }[];
        logsAlteracao: never[];
    } | null>;
    listLojas(): Promise<AdminLojaItem[]>;
    findLojaById(id: string): Promise<{
        id: string;
        codigo: string;
        nome: string;
        ativa: boolean;
        adminSenhaHash: string | null;
    } | null>;
    findLojaByCodigo(codigo: string): Promise<{
        id: string;
        codigo: string;
        nome: string;
        ativa: boolean;
        adminSenhaHash: string | null;
    } | null>;
    criarLoja(input: AdminCriarLojaInput & {
        adminSenhaHash: string;
    }): Promise<AdminLojaItem>;
    editarLoja(input: AdminEditarLojaInput & {
        adminSenhaHash?: string;
    }): Promise<AdminLojaItem>;
    listEntregadores(lojaCodigo: string): Promise<AdminEntregadorItem[]>;
    findEntregadorByCodigo(codigo: string): Promise<{
        id: string;
        codigo: string;
        nome: string;
        lojaCodigo: string;
        ativo: boolean;
    } | null>;
    findEntregadorById(id: string): Promise<{
        id: string;
        codigo: string;
        nome: string;
        lojaCodigo: string;
        ativo: boolean;
    } | null>;
    criarEntregador(input: AdminCriarEntregadorInput): Promise<AdminEntregadorItem>;
    editarEntregador(input: AdminEditarEntregadorInput): Promise<AdminEntregadorItem>;
};
export type AdminRepository = ReturnType<typeof createAdminRepository>;
//# sourceMappingURL=admin.repository.d.ts.map