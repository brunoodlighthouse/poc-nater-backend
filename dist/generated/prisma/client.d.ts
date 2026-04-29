import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Sessaos
 * const sessaos = await prisma.sessao.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Sessao
 *
 */
export type Sessao = Prisma.SessaoModel;
/**
 * Model FilaDocumento
 *
 */
export type FilaDocumento = Prisma.FilaDocumentoModel;
/**
 * Model Entrega
 *
 */
export type Entrega = Prisma.EntregaModel;
/**
 * Model EntregaItem
 *
 */
export type EntregaItem = Prisma.EntregaItemModel;
/**
 * Model UsuarioAdmin
 *
 */
export type UsuarioAdmin = Prisma.UsuarioAdminModel;
/**
 * Model TentativaLoginAdmin
 *
 */
export type TentativaLoginAdmin = Prisma.TentativaLoginAdminModel;
/**
 * Model LogAlteracao
 *
 */
export type LogAlteracao = Prisma.LogAlteracaoModel;
//# sourceMappingURL=client.d.ts.map