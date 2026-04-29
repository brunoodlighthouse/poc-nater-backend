import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "sessao" | "filaDocumento" | "entrega" | "entregaItem" | "usuarioAdmin" | "tentativaLoginAdmin" | "logAlteracao";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Sessao: {
            payload: Prisma.$SessaoPayload<ExtArgs>;
            fields: Prisma.SessaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                findFirst: {
                    args: Prisma.SessaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                findMany: {
                    args: Prisma.SessaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>[];
                };
                create: {
                    args: Prisma.SessaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                createMany: {
                    args: Prisma.SessaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>[];
                };
                delete: {
                    args: Prisma.SessaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                update: {
                    args: Prisma.SessaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                deleteMany: {
                    args: Prisma.SessaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>[];
                };
                upsert: {
                    args: Prisma.SessaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessaoPayload>;
                };
                aggregate: {
                    args: Prisma.SessaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessao>;
                };
                groupBy: {
                    args: Prisma.SessaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessaoCountAggregateOutputType> | number;
                };
            };
        };
        FilaDocumento: {
            payload: Prisma.$FilaDocumentoPayload<ExtArgs>;
            fields: Prisma.FilaDocumentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FilaDocumentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FilaDocumentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                findFirst: {
                    args: Prisma.FilaDocumentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FilaDocumentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                findMany: {
                    args: Prisma.FilaDocumentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>[];
                };
                create: {
                    args: Prisma.FilaDocumentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                createMany: {
                    args: Prisma.FilaDocumentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FilaDocumentoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>[];
                };
                delete: {
                    args: Prisma.FilaDocumentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                update: {
                    args: Prisma.FilaDocumentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                deleteMany: {
                    args: Prisma.FilaDocumentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FilaDocumentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FilaDocumentoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>[];
                };
                upsert: {
                    args: Prisma.FilaDocumentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilaDocumentoPayload>;
                };
                aggregate: {
                    args: Prisma.FilaDocumentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFilaDocumento>;
                };
                groupBy: {
                    args: Prisma.FilaDocumentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilaDocumentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FilaDocumentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilaDocumentoCountAggregateOutputType> | number;
                };
            };
        };
        Entrega: {
            payload: Prisma.$EntregaPayload<ExtArgs>;
            fields: Prisma.EntregaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EntregaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EntregaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                findFirst: {
                    args: Prisma.EntregaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EntregaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                findMany: {
                    args: Prisma.EntregaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>[];
                };
                create: {
                    args: Prisma.EntregaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                createMany: {
                    args: Prisma.EntregaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EntregaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>[];
                };
                delete: {
                    args: Prisma.EntregaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                update: {
                    args: Prisma.EntregaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                deleteMany: {
                    args: Prisma.EntregaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EntregaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EntregaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>[];
                };
                upsert: {
                    args: Prisma.EntregaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaPayload>;
                };
                aggregate: {
                    args: Prisma.EntregaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEntrega>;
                };
                groupBy: {
                    args: Prisma.EntregaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntregaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EntregaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntregaCountAggregateOutputType> | number;
                };
            };
        };
        EntregaItem: {
            payload: Prisma.$EntregaItemPayload<ExtArgs>;
            fields: Prisma.EntregaItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EntregaItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EntregaItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                findFirst: {
                    args: Prisma.EntregaItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EntregaItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                findMany: {
                    args: Prisma.EntregaItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>[];
                };
                create: {
                    args: Prisma.EntregaItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                createMany: {
                    args: Prisma.EntregaItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EntregaItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>[];
                };
                delete: {
                    args: Prisma.EntregaItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                update: {
                    args: Prisma.EntregaItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                deleteMany: {
                    args: Prisma.EntregaItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EntregaItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EntregaItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>[];
                };
                upsert: {
                    args: Prisma.EntregaItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntregaItemPayload>;
                };
                aggregate: {
                    args: Prisma.EntregaItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEntregaItem>;
                };
                groupBy: {
                    args: Prisma.EntregaItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntregaItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EntregaItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntregaItemCountAggregateOutputType> | number;
                };
            };
        };
        UsuarioAdmin: {
            payload: Prisma.$UsuarioAdminPayload<ExtArgs>;
            fields: Prisma.UsuarioAdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioAdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioAdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioAdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioAdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                create: {
                    args: Prisma.UsuarioAdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioAdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioAdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioAdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                update: {
                    args: Prisma.UsuarioAdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioAdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioAdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioAdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarioAdmin>;
                };
                groupBy: {
                    args: Prisma.UsuarioAdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioAdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioAdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioAdminCountAggregateOutputType> | number;
                };
            };
        };
        TentativaLoginAdmin: {
            payload: Prisma.$TentativaLoginAdminPayload<ExtArgs>;
            fields: Prisma.TentativaLoginAdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TentativaLoginAdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TentativaLoginAdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                findFirst: {
                    args: Prisma.TentativaLoginAdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TentativaLoginAdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                findMany: {
                    args: Prisma.TentativaLoginAdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>[];
                };
                create: {
                    args: Prisma.TentativaLoginAdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                createMany: {
                    args: Prisma.TentativaLoginAdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TentativaLoginAdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>[];
                };
                delete: {
                    args: Prisma.TentativaLoginAdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                update: {
                    args: Prisma.TentativaLoginAdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                deleteMany: {
                    args: Prisma.TentativaLoginAdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TentativaLoginAdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TentativaLoginAdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>[];
                };
                upsert: {
                    args: Prisma.TentativaLoginAdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TentativaLoginAdminPayload>;
                };
                aggregate: {
                    args: Prisma.TentativaLoginAdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTentativaLoginAdmin>;
                };
                groupBy: {
                    args: Prisma.TentativaLoginAdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TentativaLoginAdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TentativaLoginAdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TentativaLoginAdminCountAggregateOutputType> | number;
                };
            };
        };
        LogAlteracao: {
            payload: Prisma.$LogAlteracaoPayload<ExtArgs>;
            fields: Prisma.LogAlteracaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LogAlteracaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LogAlteracaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                findFirst: {
                    args: Prisma.LogAlteracaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LogAlteracaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                findMany: {
                    args: Prisma.LogAlteracaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>[];
                };
                create: {
                    args: Prisma.LogAlteracaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                createMany: {
                    args: Prisma.LogAlteracaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LogAlteracaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>[];
                };
                delete: {
                    args: Prisma.LogAlteracaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                update: {
                    args: Prisma.LogAlteracaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                deleteMany: {
                    args: Prisma.LogAlteracaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LogAlteracaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LogAlteracaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>[];
                };
                upsert: {
                    args: Prisma.LogAlteracaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LogAlteracaoPayload>;
                };
                aggregate: {
                    args: Prisma.LogAlteracaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLogAlteracao>;
                };
                groupBy: {
                    args: Prisma.LogAlteracaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogAlteracaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LogAlteracaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LogAlteracaoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    sessao?: Prisma.SessaoOmit;
    filaDocumento?: Prisma.FilaDocumentoOmit;
    entrega?: Prisma.EntregaOmit;
    entregaItem?: Prisma.EntregaItemOmit;
    usuarioAdmin?: Prisma.UsuarioAdminOmit;
    tentativaLoginAdmin?: Prisma.TentativaLoginAdminOmit;
    logAlteracao?: Prisma.LogAlteracaoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map