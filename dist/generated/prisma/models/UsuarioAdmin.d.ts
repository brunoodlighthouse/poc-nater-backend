import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model UsuarioAdmin
 *
 */
export type UsuarioAdminModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioAdminPayload>;
export type AggregateUsuarioAdmin = {
    _count: UsuarioAdminCountAggregateOutputType | null;
    _min: UsuarioAdminMinAggregateOutputType | null;
    _max: UsuarioAdminMaxAggregateOutputType | null;
};
export type UsuarioAdminMinAggregateOutputType = {
    id: string | null;
    usuario: string | null;
    senhaHash: string | null;
    nome: string | null;
    ativo: boolean | null;
    criadoEm: Date | null;
    ultimoAcessoEm: Date | null;
};
export type UsuarioAdminMaxAggregateOutputType = {
    id: string | null;
    usuario: string | null;
    senhaHash: string | null;
    nome: string | null;
    ativo: boolean | null;
    criadoEm: Date | null;
    ultimoAcessoEm: Date | null;
};
export type UsuarioAdminCountAggregateOutputType = {
    id: number;
    usuario: number;
    senhaHash: number;
    nome: number;
    ativo: number;
    criadoEm: number;
    ultimoAcessoEm: number;
    _all: number;
};
export type UsuarioAdminMinAggregateInputType = {
    id?: true;
    usuario?: true;
    senhaHash?: true;
    nome?: true;
    ativo?: true;
    criadoEm?: true;
    ultimoAcessoEm?: true;
};
export type UsuarioAdminMaxAggregateInputType = {
    id?: true;
    usuario?: true;
    senhaHash?: true;
    nome?: true;
    ativo?: true;
    criadoEm?: true;
    ultimoAcessoEm?: true;
};
export type UsuarioAdminCountAggregateInputType = {
    id?: true;
    usuario?: true;
    senhaHash?: true;
    nome?: true;
    ativo?: true;
    criadoEm?: true;
    ultimoAcessoEm?: true;
    _all?: true;
};
export type UsuarioAdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioAdmin to aggregate.
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UsuarioAdmins
    **/
    _count?: true | UsuarioAdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioAdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioAdminMaxAggregateInputType;
};
export type GetUsuarioAdminAggregateType<T extends UsuarioAdminAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarioAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarioAdmin[P]> : Prisma.GetScalarType<T[P], AggregateUsuarioAdmin[P]>;
};
export type UsuarioAdminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithAggregationInput | Prisma.UsuarioAdminOrderByWithAggregationInput[];
    by: Prisma.UsuarioAdminScalarFieldEnum[] | Prisma.UsuarioAdminScalarFieldEnum;
    having?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioAdminCountAggregateInputType | true;
    _min?: UsuarioAdminMinAggregateInputType;
    _max?: UsuarioAdminMaxAggregateInputType;
};
export type UsuarioAdminGroupByOutputType = {
    id: string;
    usuario: string;
    senhaHash: string;
    nome: string;
    ativo: boolean;
    criadoEm: Date;
    ultimoAcessoEm: Date | null;
    _count: UsuarioAdminCountAggregateOutputType | null;
    _min: UsuarioAdminMinAggregateOutputType | null;
    _max: UsuarioAdminMaxAggregateOutputType | null;
};
export type GetUsuarioAdminGroupByPayload<T extends UsuarioAdminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioAdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioAdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]>;
}>>;
export type UsuarioAdminWhereInput = {
    AND?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    OR?: Prisma.UsuarioAdminWhereInput[];
    NOT?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    id?: Prisma.UuidFilter<"UsuarioAdmin"> | string;
    usuario?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    senhaHash?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    nome?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolFilter<"UsuarioAdmin"> | boolean;
    criadoEm?: Prisma.DateTimeFilter<"UsuarioAdmin"> | Date | string;
    ultimoAcessoEm?: Prisma.DateTimeNullableFilter<"UsuarioAdmin"> | Date | string | null;
};
export type UsuarioAdminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    ultimoAcessoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type UsuarioAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    usuario?: string;
    AND?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    OR?: Prisma.UsuarioAdminWhereInput[];
    NOT?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    senhaHash?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    nome?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolFilter<"UsuarioAdmin"> | boolean;
    criadoEm?: Prisma.DateTimeFilter<"UsuarioAdmin"> | Date | string;
    ultimoAcessoEm?: Prisma.DateTimeNullableFilter<"UsuarioAdmin"> | Date | string | null;
}, "id" | "usuario">;
export type UsuarioAdminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    ultimoAcessoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UsuarioAdminCountOrderByAggregateInput;
    _max?: Prisma.UsuarioAdminMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioAdminMinOrderByAggregateInput;
};
export type UsuarioAdminScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput | Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput | Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"UsuarioAdmin"> | string;
    usuario?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    senhaHash?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"UsuarioAdmin"> | boolean;
    criadoEm?: Prisma.DateTimeWithAggregatesFilter<"UsuarioAdmin"> | Date | string;
    ultimoAcessoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"UsuarioAdmin"> | Date | string | null;
};
export type UsuarioAdminCreateInput = {
    id?: string;
    usuario: string;
    senhaHash: string;
    nome: string;
    ativo?: boolean;
    criadoEm?: Date | string;
    ultimoAcessoEm?: Date | string | null;
};
export type UsuarioAdminUncheckedCreateInput = {
    id?: string;
    usuario: string;
    senhaHash: string;
    nome: string;
    ativo?: boolean;
    criadoEm?: Date | string;
    ultimoAcessoEm?: Date | string | null;
};
export type UsuarioAdminUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoAcessoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsuarioAdminUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoAcessoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsuarioAdminCreateManyInput = {
    id?: string;
    usuario: string;
    senhaHash: string;
    nome: string;
    ativo?: boolean;
    criadoEm?: Date | string;
    ultimoAcessoEm?: Date | string | null;
};
export type UsuarioAdminUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoAcessoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsuarioAdminUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimoAcessoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsuarioAdminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    ultimoAcessoEm?: Prisma.SortOrder;
};
export type UsuarioAdminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    ultimoAcessoEm?: Prisma.SortOrder;
};
export type UsuarioAdminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criadoEm?: Prisma.SortOrder;
    ultimoAcessoEm?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UsuarioAdminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    senhaHash?: boolean;
    nome?: boolean;
    ativo?: boolean;
    criadoEm?: boolean;
    ultimoAcessoEm?: boolean;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    senhaHash?: boolean;
    nome?: boolean;
    ativo?: boolean;
    criadoEm?: boolean;
    ultimoAcessoEm?: boolean;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    senhaHash?: boolean;
    nome?: boolean;
    ativo?: boolean;
    criadoEm?: boolean;
    ultimoAcessoEm?: boolean;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectScalar = {
    id?: boolean;
    usuario?: boolean;
    senhaHash?: boolean;
    nome?: boolean;
    ativo?: boolean;
    criadoEm?: boolean;
    ultimoAcessoEm?: boolean;
};
export type UsuarioAdminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario" | "senhaHash" | "nome" | "ativo" | "criadoEm" | "ultimoAcessoEm", ExtArgs["result"]["usuarioAdmin"]>;
export type $UsuarioAdminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsuarioAdmin";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuario: string;
        senhaHash: string;
        nome: string;
        ativo: boolean;
        criadoEm: Date;
        ultimoAcessoEm: Date | null;
    }, ExtArgs["result"]["usuarioAdmin"]>;
    composites: {};
};
export type UsuarioAdminGetPayload<S extends boolean | null | undefined | UsuarioAdminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload, S>;
export type UsuarioAdminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioAdminCountAggregateInputType | true;
};
export interface UsuarioAdminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsuarioAdmin'];
        meta: {
            name: 'UsuarioAdmin';
        };
    };
    /**
     * Find zero or one UsuarioAdmin that matches the filter.
     * @param {UsuarioAdminFindUniqueArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioAdminFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioAdminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one UsuarioAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioAdminFindUniqueOrThrowArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioAdminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UsuarioAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindFirstArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioAdminFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first UsuarioAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindFirstOrThrowArgs} args - Arguments to find a UsuarioAdmin
     * @example
     * // Get one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioAdminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more UsuarioAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioAdmins
     * const usuarioAdmins = await prisma.usuarioAdmin.findMany()
     *
     * // Get first 10 UsuarioAdmins
     * const usuarioAdmins = await prisma.usuarioAdmin.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UsuarioAdminFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a UsuarioAdmin.
     * @param {UsuarioAdminCreateArgs} args - Arguments to create a UsuarioAdmin.
     * @example
     * // Create one UsuarioAdmin
     * const UsuarioAdmin = await prisma.usuarioAdmin.create({
     *   data: {
     *     // ... data to create a UsuarioAdmin
     *   }
     * })
     *
     */
    create<T extends UsuarioAdminCreateArgs>(args: Prisma.SelectSubset<T, UsuarioAdminCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many UsuarioAdmins.
     * @param {UsuarioAdminCreateManyArgs} args - Arguments to create many UsuarioAdmins.
     * @example
     * // Create many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UsuarioAdminCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many UsuarioAdmins and returns the data saved in the database.
     * @param {UsuarioAdminCreateManyAndReturnArgs} args - Arguments to create many UsuarioAdmins.
     * @example
     * // Create many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UsuarioAdmins and only return the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UsuarioAdminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a UsuarioAdmin.
     * @param {UsuarioAdminDeleteArgs} args - Arguments to delete one UsuarioAdmin.
     * @example
     * // Delete one UsuarioAdmin
     * const UsuarioAdmin = await prisma.usuarioAdmin.delete({
     *   where: {
     *     // ... filter to delete one UsuarioAdmin
     *   }
     * })
     *
     */
    delete<T extends UsuarioAdminDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioAdminDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one UsuarioAdmin.
     * @param {UsuarioAdminUpdateArgs} args - Arguments to update one UsuarioAdmin.
     * @example
     * // Update one UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UsuarioAdminUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more UsuarioAdmins.
     * @param {UsuarioAdminDeleteManyArgs} args - Arguments to filter UsuarioAdmins to delete.
     * @example
     * // Delete a few UsuarioAdmins
     * const { count } = await prisma.usuarioAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UsuarioAdminDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UsuarioAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UsuarioAdminUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more UsuarioAdmins and returns the data updated in the database.
     * @param {UsuarioAdminUpdateManyAndReturnArgs} args - Arguments to update many UsuarioAdmins.
     * @example
     * // Update many UsuarioAdmins
     * const usuarioAdmin = await prisma.usuarioAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UsuarioAdmins and only return the `id`
     * const usuarioAdminWithIdOnly = await prisma.usuarioAdmin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UsuarioAdminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one UsuarioAdmin.
     * @param {UsuarioAdminUpsertArgs} args - Arguments to update or create a UsuarioAdmin.
     * @example
     * // Update or create a UsuarioAdmin
     * const usuarioAdmin = await prisma.usuarioAdmin.upsert({
     *   create: {
     *     // ... data to create a UsuarioAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioAdmin we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioAdminUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of UsuarioAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminCountArgs} args - Arguments to filter UsuarioAdmins to count.
     * @example
     * // Count the number of UsuarioAdmins
     * const count = await prisma.usuarioAdmin.count({
     *   where: {
     *     // ... the filter for the UsuarioAdmins we want to count
     *   }
     * })
    **/
    count<T extends UsuarioAdminCountArgs>(args?: Prisma.Subset<T, UsuarioAdminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioAdminCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a UsuarioAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAdminAggregateArgs>(args: Prisma.Subset<T, UsuarioAdminAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAdminAggregateType<T>>;
    /**
     * Group by UsuarioAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UsuarioAdminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioAdminGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioAdminGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UsuarioAdmin model
     */
    readonly fields: UsuarioAdminFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for UsuarioAdmin.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UsuarioAdminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the UsuarioAdmin model
 */
export interface UsuarioAdminFieldRefs {
    readonly id: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly usuario: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly senhaHash: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly nome: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly ativo: Prisma.FieldRef<"UsuarioAdmin", 'Boolean'>;
    readonly criadoEm: Prisma.FieldRef<"UsuarioAdmin", 'DateTime'>;
    readonly ultimoAcessoEm: Prisma.FieldRef<"UsuarioAdmin", 'DateTime'>;
}
/**
 * UsuarioAdmin findUnique
 */
export type UsuarioAdminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
/**
 * UsuarioAdmin findUniqueOrThrow
 */
export type UsuarioAdminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
/**
 * UsuarioAdmin findFirst
 */
export type UsuarioAdminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsuarioAdmins.
     */
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsuarioAdmins.
     */
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
/**
 * UsuarioAdmin findFirstOrThrow
 */
export type UsuarioAdminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter, which UsuarioAdmin to fetch.
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UsuarioAdmins.
     */
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsuarioAdmins.
     */
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
/**
 * UsuarioAdmin findMany
 */
export type UsuarioAdminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter, which UsuarioAdmins to fetch.
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UsuarioAdmins to fetch.
     */
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UsuarioAdmins.
     */
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UsuarioAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UsuarioAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UsuarioAdmins.
     */
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
/**
 * UsuarioAdmin create
 */
export type UsuarioAdminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * The data needed to create a UsuarioAdmin.
     */
    data: Prisma.XOR<Prisma.UsuarioAdminCreateInput, Prisma.UsuarioAdminUncheckedCreateInput>;
};
/**
 * UsuarioAdmin createMany
 */
export type UsuarioAdminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioAdmins.
     */
    data: Prisma.UsuarioAdminCreateManyInput | Prisma.UsuarioAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UsuarioAdmin createManyAndReturn
 */
export type UsuarioAdminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * The data used to create many UsuarioAdmins.
     */
    data: Prisma.UsuarioAdminCreateManyInput | Prisma.UsuarioAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * UsuarioAdmin update
 */
export type UsuarioAdminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * The data needed to update a UsuarioAdmin.
     */
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateInput, Prisma.UsuarioAdminUncheckedUpdateInput>;
    /**
     * Choose, which UsuarioAdmin to update.
     */
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
/**
 * UsuarioAdmin updateMany
 */
export type UsuarioAdminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioAdmins.
     */
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateManyMutationInput, Prisma.UsuarioAdminUncheckedUpdateManyInput>;
    /**
     * Filter which UsuarioAdmins to update
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * Limit how many UsuarioAdmins to update.
     */
    limit?: number;
};
/**
 * UsuarioAdmin updateManyAndReturn
 */
export type UsuarioAdminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * The data used to update UsuarioAdmins.
     */
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateManyMutationInput, Prisma.UsuarioAdminUncheckedUpdateManyInput>;
    /**
     * Filter which UsuarioAdmins to update
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * Limit how many UsuarioAdmins to update.
     */
    limit?: number;
};
/**
 * UsuarioAdmin upsert
 */
export type UsuarioAdminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * The filter to search for the UsuarioAdmin to update in case it exists.
     */
    where: Prisma.UsuarioAdminWhereUniqueInput;
    /**
     * In case the UsuarioAdmin found by the `where` argument doesn't exist, create a new UsuarioAdmin with this data.
     */
    create: Prisma.XOR<Prisma.UsuarioAdminCreateInput, Prisma.UsuarioAdminUncheckedCreateInput>;
    /**
     * In case the UsuarioAdmin was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateInput, Prisma.UsuarioAdminUncheckedUpdateInput>;
};
/**
 * UsuarioAdmin delete
 */
export type UsuarioAdminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    /**
     * Filter which UsuarioAdmin to delete.
     */
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
/**
 * UsuarioAdmin deleteMany
 */
export type UsuarioAdminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioAdmins to delete
     */
    where?: Prisma.UsuarioAdminWhereInput;
    /**
     * Limit how many UsuarioAdmins to delete.
     */
    limit?: number;
};
/**
 * UsuarioAdmin without action
 */
export type UsuarioAdminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioAdmin
     */
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UsuarioAdmin
     */
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
};
//# sourceMappingURL=UsuarioAdmin.d.ts.map