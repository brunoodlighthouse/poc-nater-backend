import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly Sessao: "Sessao";
    readonly FilaDocumento: "FilaDocumento";
    readonly Entrega: "Entrega";
    readonly EntregaItem: "EntregaItem";
    readonly UsuarioAdmin: "UsuarioAdmin";
    readonly TentativaLoginAdmin: "TentativaLoginAdmin";
    readonly LogAlteracao: "LogAlteracao";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const SessaoScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly lojaCodigo: "lojaCodigo";
    readonly lojaNome: "lojaNome";
    readonly dispositivoId: "dispositivoId";
    readonly criadaEm: "criadaEm";
    readonly ultimaAtividadeEm: "ultimaAtividadeEm";
    readonly revogadaEm: "revogadaEm";
};
export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum];
export declare const FilaDocumentoScalarFieldEnum: {
    readonly id: "id";
    readonly sessaoId: "sessaoId";
    readonly documentoNumero: "documentoNumero";
    readonly documentoChave: "documentoChave";
    readonly clienteNome: "clienteNome";
    readonly qtdItens: "qtdItens";
    readonly status: "status";
    readonly payloadProtheus: "payloadProtheus";
    readonly consultadoEm: "consultadoEm";
    readonly removidoEm: "removidoEm";
};
export type FilaDocumentoScalarFieldEnum = (typeof FilaDocumentoScalarFieldEnum)[keyof typeof FilaDocumentoScalarFieldEnum];
export declare const EntregaScalarFieldEnum: {
    readonly id: "id";
    readonly sessaoId: "sessaoId";
    readonly documentoNumero: "documentoNumero";
    readonly entregadorCodigo: "entregadorCodigo";
    readonly entregadorNome: "entregadorNome";
    readonly status: "status";
    readonly motivoPendencia: "motivoPendencia";
    readonly entregaAnteriorId: "entregaAnteriorId";
    readonly iniciadaEm: "iniciadaEm";
    readonly finalizadaEm: "finalizadaEm";
};
export type EntregaScalarFieldEnum = (typeof EntregaScalarFieldEnum)[keyof typeof EntregaScalarFieldEnum];
export declare const EntregaItemScalarFieldEnum: {
    readonly id: "id";
    readonly entregaId: "entregaId";
    readonly itemIdProtheus: "itemIdProtheus";
    readonly descricao: "descricao";
    readonly qtdTotal: "qtdTotal";
    readonly qtdEntregue: "qtdEntregue";
    readonly unidade: "unidade";
    readonly observacao: "observacao";
};
export type EntregaItemScalarFieldEnum = (typeof EntregaItemScalarFieldEnum)[keyof typeof EntregaItemScalarFieldEnum];
export declare const UsuarioAdminScalarFieldEnum: {
    readonly id: "id";
    readonly usuario: "usuario";
    readonly senhaHash: "senhaHash";
    readonly nome: "nome";
    readonly ativo: "ativo";
    readonly criadoEm: "criadoEm";
    readonly ultimoAcessoEm: "ultimoAcessoEm";
};
export type UsuarioAdminScalarFieldEnum = (typeof UsuarioAdminScalarFieldEnum)[keyof typeof UsuarioAdminScalarFieldEnum];
export declare const TentativaLoginAdminScalarFieldEnum: {
    readonly id: "id";
    readonly usuario: "usuario";
    readonly ip: "ip";
    readonly sucesso: "sucesso";
    readonly tentativaEm: "tentativaEm";
};
export type TentativaLoginAdminScalarFieldEnum = (typeof TentativaLoginAdminScalarFieldEnum)[keyof typeof TentativaLoginAdminScalarFieldEnum];
export declare const LogAlteracaoScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioAdmin: "usuarioAdmin";
    readonly ipOrigem: "ipOrigem";
    readonly userAgent: "userAgent";
    readonly acao: "acao";
    readonly recursoTipo: "recursoTipo";
    readonly recursoId: "recursoId";
    readonly dadosAntes: "dadosAntes";
    readonly dadosDepois: "dadosDepois";
    readonly motivo: "motivo";
    readonly realizadaEm: "realizadaEm";
};
export type LogAlteracaoScalarFieldEnum = (typeof LogAlteracaoScalarFieldEnum)[keyof typeof LogAlteracaoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: any;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: any;
    readonly JsonNull: any;
    readonly AnyNull: any;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map