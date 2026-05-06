import { z } from 'zod';
export declare const adminLoginSchema: z.ZodObject<{
    lojaCodigo: z.ZodString;
    senha: z.ZodString;
}, z.core.$strip>;
export declare const adminDocumentoNumeroParamSchema: z.ZodObject<{
    documentoNumero: z.ZodString;
}, z.core.$strip>;
export declare const adminEntregaIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const adminEditarEntregaSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        finalizada_total: "finalizada_total";
        finalizada_parcial: "finalizada_parcial";
        cancelada: "cancelada";
    }>>;
    itens: z.ZodOptional<z.ZodArray<z.ZodObject<{
        itemIdProtheus: z.ZodString;
        qtdEntregue: z.ZodNumber;
    }, z.core.$strip>>>;
    motivo: z.ZodString;
}, z.core.$strip>;
export declare const adminCriarLojaSchema: z.ZodObject<{
    codigo: z.ZodString;
    nome: z.ZodString;
    adminSenha: z.ZodString;
}, z.core.$strip>;
export declare const adminEditarLojaSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodString>;
    ativa: z.ZodOptional<z.ZodBoolean>;
    adminSenha: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const adminLojaIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const adminCriarEntregadorSchema: z.ZodObject<{
    codigo: z.ZodString;
    nome: z.ZodString;
}, z.core.$strip>;
export declare const adminEditarEntregadorSchema: z.ZodObject<{
    nome: z.ZodOptional<z.ZodString>;
    ativo: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const adminEntregadorIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const adminDocumentoListSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    perPage: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        pendente: "pendente";
        parcial: "parcial";
        finalizado: "finalizado";
        cancelado: "cancelado";
    }>>;
    search: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodEnum<{
        status: "status";
        documentoNumero: "documentoNumero";
        clienteNome: "clienteNome";
        consultadoEm: "consultadoEm";
    }>>;
    sortOrder: z.ZodDefault<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=admin.schemas.d.ts.map