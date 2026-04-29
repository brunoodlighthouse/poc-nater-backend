import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model TentativaLoginAdmin
 *
 */
export type TentativaLoginAdminModel = runtime.Types.Result.DefaultSelection<Prisma.$TentativaLoginAdminPayload>;
export type AggregateTentativaLoginAdmin = {
    _count: TentativaLoginAdminCountAggregateOutputType | null;
    _min: TentativaLoginAdminMinAggregateOutputType | null;
    _max: TentativaLoginAdminMaxAggregateOutputType | null;
};
export type TentativaLoginAdminMinAggregateOutputType = {
    id: string | null;
    usuario: string | null;
    ip: string | null;
    sucesso: boolean | null;
    tentativaEm: Date | null;
};
export type TentativaLoginAdminMaxAggregateOutputType = {
    id: string | null;
    usuario: string | null;
    ip: string | null;
    sucesso: boolean | null;
    tentativaEm: Date | null;
};
export type TentativaLoginAdminCountAggregateOutputType = {
    id: number;
    usuario: number;
    ip: number;
    sucesso: number;
    tentativaEm: number;
    _all: number;
};
export type TentativaLoginAdminMinAggregateInputType = {
    id?: true;
    usuario?: true;
    ip?: true;
    sucesso?: true;
    tentativaEm?: true;
};
export type TentativaLoginAdminMaxAggregateInputType = {
    id?: true;
    usuario?: true;
    ip?: true;
    sucesso?: true;
    tentativaEm?: true;
};
export type TentativaLoginAdminCountAggregateInputType = {
    id?: true;
    usuario?: true;
    ip?: true;
    sucesso?: true;
    tentativaEm?: true;
    _all?: true;
};
export type TentativaLoginAdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TentativaLoginAdmin to aggregate.
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TentativaLoginAdmins to fetch.
     */
    orderBy?: Prisma.TentativaLoginAdminOrderByWithRelationInput | Prisma.TentativaLoginAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TentativaLoginAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TentativaLoginAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TentativaLoginAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TentativaLoginAdmins
    **/
    _count?: true | TentativaLoginAdminCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TentativaLoginAdminMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TentativaLoginAdminMaxAggregateInputType;
};
export type GetTentativaLoginAdminAggregateType<T extends TentativaLoginAdminAggregateArgs> = {
    [P in keyof T & keyof AggregateTentativaLoginAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTentativaLoginAdmin[P]> : Prisma.GetScalarType<T[P], AggregateTentativaLoginAdmin[P]>;
};
export type TentativaLoginAdminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TentativaLoginAdminWhereInput;
    orderBy?: Prisma.TentativaLoginAdminOrderByWithAggregationInput | Prisma.TentativaLoginAdminOrderByWithAggregationInput[];
    by: Prisma.TentativaLoginAdminScalarFieldEnum[] | Prisma.TentativaLoginAdminScalarFieldEnum;
    having?: Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TentativaLoginAdminCountAggregateInputType | true;
    _min?: TentativaLoginAdminMinAggregateInputType;
    _max?: TentativaLoginAdminMaxAggregateInputType;
};
export type TentativaLoginAdminGroupByOutputType = {
    id: string;
    usuario: string;
    ip: string;
    sucesso: boolean;
    tentativaEm: Date;
    _count: TentativaLoginAdminCountAggregateOutputType | null;
    _min: TentativaLoginAdminMinAggregateOutputType | null;
    _max: TentativaLoginAdminMaxAggregateOutputType | null;
};
export type GetTentativaLoginAdminGroupByPayload<T extends TentativaLoginAdminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TentativaLoginAdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TentativaLoginAdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TentativaLoginAdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TentativaLoginAdminGroupByOutputType[P]>;
}>>;
export type TentativaLoginAdminWhereInput = {
    AND?: Prisma.TentativaLoginAdminWhereInput | Prisma.TentativaLoginAdminWhereInput[];
    OR?: Prisma.TentativaLoginAdminWhereInput[];
    NOT?: Prisma.TentativaLoginAdminWhereInput | Prisma.TentativaLoginAdminWhereInput[];
    id?: Prisma.UuidFilter<"TentativaLoginAdmin"> | string;
    usuario?: Prisma.StringFilter<"TentativaLoginAdmin"> | string;
    ip?: Prisma.StringFilter<"TentativaLoginAdmin"> | string;
    sucesso?: Prisma.BoolFilter<"TentativaLoginAdmin"> | boolean;
    tentativaEm?: Prisma.DateTimeFilter<"TentativaLoginAdmin"> | Date | string;
};
export type TentativaLoginAdminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    sucesso?: Prisma.SortOrder;
    tentativaEm?: Prisma.SortOrder;
};
export type TentativaLoginAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TentativaLoginAdminWhereInput | Prisma.TentativaLoginAdminWhereInput[];
    OR?: Prisma.TentativaLoginAdminWhereInput[];
    NOT?: Prisma.TentativaLoginAdminWhereInput | Prisma.TentativaLoginAdminWhereInput[];
    usuario?: Prisma.StringFilter<"TentativaLoginAdmin"> | string;
    ip?: Prisma.StringFilter<"TentativaLoginAdmin"> | string;
    sucesso?: Prisma.BoolFilter<"TentativaLoginAdmin"> | boolean;
    tentativaEm?: Prisma.DateTimeFilter<"TentativaLoginAdmin"> | Date | string;
}, "id">;
export type TentativaLoginAdminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    sucesso?: Prisma.SortOrder;
    tentativaEm?: Prisma.SortOrder;
    _count?: Prisma.TentativaLoginAdminCountOrderByAggregateInput;
    _max?: Prisma.TentativaLoginAdminMaxOrderByAggregateInput;
    _min?: Prisma.TentativaLoginAdminMinOrderByAggregateInput;
};
export type TentativaLoginAdminScalarWhereWithAggregatesInput = {
    AND?: Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput | Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput[];
    OR?: Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput | Prisma.TentativaLoginAdminScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TentativaLoginAdmin"> | string;
    usuario?: Prisma.StringWithAggregatesFilter<"TentativaLoginAdmin"> | string;
    ip?: Prisma.StringWithAggregatesFilter<"TentativaLoginAdmin"> | string;
    sucesso?: Prisma.BoolWithAggregatesFilter<"TentativaLoginAdmin"> | boolean;
    tentativaEm?: Prisma.DateTimeWithAggregatesFilter<"TentativaLoginAdmin"> | Date | string;
};
export type TentativaLoginAdminCreateInput = {
    id?: string;
    usuario: string;
    ip: string;
    sucesso: boolean;
    tentativaEm?: Date | string;
};
export type TentativaLoginAdminUncheckedCreateInput = {
    id?: string;
    usuario: string;
    ip: string;
    sucesso: boolean;
    tentativaEm?: Date | string;
};
export type TentativaLoginAdminUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    sucesso?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentativaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TentativaLoginAdminUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    sucesso?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentativaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TentativaLoginAdminCreateManyInput = {
    id?: string;
    usuario: string;
    ip: string;
    sucesso: boolean;
    tentativaEm?: Date | string;
};
export type TentativaLoginAdminUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    sucesso?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentativaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TentativaLoginAdminUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    sucesso?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    tentativaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TentativaLoginAdminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    sucesso?: Prisma.SortOrder;
    tentativaEm?: Prisma.SortOrder;
};
export type TentativaLoginAdminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    sucesso?: Prisma.SortOrder;
    tentativaEm?: Prisma.SortOrder;
};
export type TentativaLoginAdminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    sucesso?: Prisma.SortOrder;
    tentativaEm?: Prisma.SortOrder;
};
export type TentativaLoginAdminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    ip?: boolean;
    sucesso?: boolean;
    tentativaEm?: boolean;
}, ExtArgs["result"]["tentativaLoginAdmin"]>;
export type TentativaLoginAdminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    ip?: boolean;
    sucesso?: boolean;
    tentativaEm?: boolean;
}, ExtArgs["result"]["tentativaLoginAdmin"]>;
export type TentativaLoginAdminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean;
    ip?: boolean;
    sucesso?: boolean;
    tentativaEm?: boolean;
}, ExtArgs["result"]["tentativaLoginAdmin"]>;
export type TentativaLoginAdminSelectScalar = {
    id?: boolean;
    usuario?: boolean;
    ip?: boolean;
    sucesso?: boolean;
    tentativaEm?: boolean;
};
export type TentativaLoginAdminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario" | "ip" | "sucesso" | "tentativaEm", ExtArgs["result"]["tentativaLoginAdmin"]>;
export type $TentativaLoginAdminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TentativaLoginAdmin";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuario: string;
        ip: string;
        sucesso: boolean;
        tentativaEm: Date;
    }, ExtArgs["result"]["tentativaLoginAdmin"]>;
    composites: {};
};
export type TentativaLoginAdminGetPayload<S extends boolean | null | undefined | TentativaLoginAdminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload, S>;
export type TentativaLoginAdminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TentativaLoginAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TentativaLoginAdminCountAggregateInputType | true;
};
export interface TentativaLoginAdminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TentativaLoginAdmin'];
        meta: {
            name: 'TentativaLoginAdmin';
        };
    };
    /**
     * Find zero or one TentativaLoginAdmin that matches the filter.
     * @param {TentativaLoginAdminFindUniqueArgs} args - Arguments to find a TentativaLoginAdmin
     * @example
     * // Get one TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TentativaLoginAdminFindUniqueArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TentativaLoginAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TentativaLoginAdminFindUniqueOrThrowArgs} args - Arguments to find a TentativaLoginAdmin
     * @example
     * // Get one TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TentativaLoginAdminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TentativaLoginAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminFindFirstArgs} args - Arguments to find a TentativaLoginAdmin
     * @example
     * // Get one TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TentativaLoginAdminFindFirstArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminFindFirstArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TentativaLoginAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminFindFirstOrThrowArgs} args - Arguments to find a TentativaLoginAdmin
     * @example
     * // Get one TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TentativaLoginAdminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TentativaLoginAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TentativaLoginAdmins
     * const tentativaLoginAdmins = await prisma.tentativaLoginAdmin.findMany()
     *
     * // Get first 10 TentativaLoginAdmins
     * const tentativaLoginAdmins = await prisma.tentativaLoginAdmin.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tentativaLoginAdminWithIdOnly = await prisma.tentativaLoginAdmin.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TentativaLoginAdminFindManyArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TentativaLoginAdmin.
     * @param {TentativaLoginAdminCreateArgs} args - Arguments to create a TentativaLoginAdmin.
     * @example
     * // Create one TentativaLoginAdmin
     * const TentativaLoginAdmin = await prisma.tentativaLoginAdmin.create({
     *   data: {
     *     // ... data to create a TentativaLoginAdmin
     *   }
     * })
     *
     */
    create<T extends TentativaLoginAdminCreateArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminCreateArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TentativaLoginAdmins.
     * @param {TentativaLoginAdminCreateManyArgs} args - Arguments to create many TentativaLoginAdmins.
     * @example
     * // Create many TentativaLoginAdmins
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TentativaLoginAdminCreateManyArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TentativaLoginAdmins and returns the data saved in the database.
     * @param {TentativaLoginAdminCreateManyAndReturnArgs} args - Arguments to create many TentativaLoginAdmins.
     * @example
     * // Create many TentativaLoginAdmins
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TentativaLoginAdmins and only return the `id`
     * const tentativaLoginAdminWithIdOnly = await prisma.tentativaLoginAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TentativaLoginAdminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TentativaLoginAdmin.
     * @param {TentativaLoginAdminDeleteArgs} args - Arguments to delete one TentativaLoginAdmin.
     * @example
     * // Delete one TentativaLoginAdmin
     * const TentativaLoginAdmin = await prisma.tentativaLoginAdmin.delete({
     *   where: {
     *     // ... filter to delete one TentativaLoginAdmin
     *   }
     * })
     *
     */
    delete<T extends TentativaLoginAdminDeleteArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminDeleteArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TentativaLoginAdmin.
     * @param {TentativaLoginAdminUpdateArgs} args - Arguments to update one TentativaLoginAdmin.
     * @example
     * // Update one TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TentativaLoginAdminUpdateArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminUpdateArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TentativaLoginAdmins.
     * @param {TentativaLoginAdminDeleteManyArgs} args - Arguments to filter TentativaLoginAdmins to delete.
     * @example
     * // Delete a few TentativaLoginAdmins
     * const { count } = await prisma.tentativaLoginAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TentativaLoginAdminDeleteManyArgs>(args?: Prisma.SelectSubset<T, TentativaLoginAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TentativaLoginAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TentativaLoginAdmins
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TentativaLoginAdminUpdateManyArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TentativaLoginAdmins and returns the data updated in the database.
     * @param {TentativaLoginAdminUpdateManyAndReturnArgs} args - Arguments to update many TentativaLoginAdmins.
     * @example
     * // Update many TentativaLoginAdmins
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TentativaLoginAdmins and only return the `id`
     * const tentativaLoginAdminWithIdOnly = await prisma.tentativaLoginAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends TentativaLoginAdminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TentativaLoginAdmin.
     * @param {TentativaLoginAdminUpsertArgs} args - Arguments to update or create a TentativaLoginAdmin.
     * @example
     * // Update or create a TentativaLoginAdmin
     * const tentativaLoginAdmin = await prisma.tentativaLoginAdmin.upsert({
     *   create: {
     *     // ... data to create a TentativaLoginAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TentativaLoginAdmin we want to update
     *   }
     * })
     */
    upsert<T extends TentativaLoginAdminUpsertArgs>(args: Prisma.SelectSubset<T, TentativaLoginAdminUpsertArgs<ExtArgs>>): Prisma.Prisma__TentativaLoginAdminClient<runtime.Types.Result.GetResult<Prisma.$TentativaLoginAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TentativaLoginAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminCountArgs} args - Arguments to filter TentativaLoginAdmins to count.
     * @example
     * // Count the number of TentativaLoginAdmins
     * const count = await prisma.tentativaLoginAdmin.count({
     *   where: {
     *     // ... the filter for the TentativaLoginAdmins we want to count
     *   }
     * })
    **/
    count<T extends TentativaLoginAdminCountArgs>(args?: Prisma.Subset<T, TentativaLoginAdminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TentativaLoginAdminCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TentativaLoginAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TentativaLoginAdminAggregateArgs>(args: Prisma.Subset<T, TentativaLoginAdminAggregateArgs>): Prisma.PrismaPromise<GetTentativaLoginAdminAggregateType<T>>;
    /**
     * Group by TentativaLoginAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TentativaLoginAdminGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TentativaLoginAdminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TentativaLoginAdminGroupByArgs['orderBy'];
    } : {
        orderBy?: TentativaLoginAdminGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TentativaLoginAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTentativaLoginAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TentativaLoginAdmin model
     */
    readonly fields: TentativaLoginAdminFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TentativaLoginAdmin.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TentativaLoginAdminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the TentativaLoginAdmin model
 */
export interface TentativaLoginAdminFieldRefs {
    readonly id: Prisma.FieldRef<"TentativaLoginAdmin", 'String'>;
    readonly usuario: Prisma.FieldRef<"TentativaLoginAdmin", 'String'>;
    readonly ip: Prisma.FieldRef<"TentativaLoginAdmin", 'String'>;
    readonly sucesso: Prisma.FieldRef<"TentativaLoginAdmin", 'Boolean'>;
    readonly tentativaEm: Prisma.FieldRef<"TentativaLoginAdmin", 'DateTime'>;
}
/**
 * TentativaLoginAdmin findUnique
 */
export type TentativaLoginAdminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter, which TentativaLoginAdmin to fetch.
     */
    where: Prisma.TentativaLoginAdminWhereUniqueInput;
};
/**
 * TentativaLoginAdmin findUniqueOrThrow
 */
export type TentativaLoginAdminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter, which TentativaLoginAdmin to fetch.
     */
    where: Prisma.TentativaLoginAdminWhereUniqueInput;
};
/**
 * TentativaLoginAdmin findFirst
 */
export type TentativaLoginAdminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter, which TentativaLoginAdmin to fetch.
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TentativaLoginAdmins to fetch.
     */
    orderBy?: Prisma.TentativaLoginAdminOrderByWithRelationInput | Prisma.TentativaLoginAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TentativaLoginAdmins.
     */
    cursor?: Prisma.TentativaLoginAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TentativaLoginAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TentativaLoginAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TentativaLoginAdmins.
     */
    distinct?: Prisma.TentativaLoginAdminScalarFieldEnum | Prisma.TentativaLoginAdminScalarFieldEnum[];
};
/**
 * TentativaLoginAdmin findFirstOrThrow
 */
export type TentativaLoginAdminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter, which TentativaLoginAdmin to fetch.
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TentativaLoginAdmins to fetch.
     */
    orderBy?: Prisma.TentativaLoginAdminOrderByWithRelationInput | Prisma.TentativaLoginAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TentativaLoginAdmins.
     */
    cursor?: Prisma.TentativaLoginAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TentativaLoginAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TentativaLoginAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TentativaLoginAdmins.
     */
    distinct?: Prisma.TentativaLoginAdminScalarFieldEnum | Prisma.TentativaLoginAdminScalarFieldEnum[];
};
/**
 * TentativaLoginAdmin findMany
 */
export type TentativaLoginAdminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter, which TentativaLoginAdmins to fetch.
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TentativaLoginAdmins to fetch.
     */
    orderBy?: Prisma.TentativaLoginAdminOrderByWithRelationInput | Prisma.TentativaLoginAdminOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TentativaLoginAdmins.
     */
    cursor?: Prisma.TentativaLoginAdminWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TentativaLoginAdmins from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TentativaLoginAdmins.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TentativaLoginAdmins.
     */
    distinct?: Prisma.TentativaLoginAdminScalarFieldEnum | Prisma.TentativaLoginAdminScalarFieldEnum[];
};
/**
 * TentativaLoginAdmin create
 */
export type TentativaLoginAdminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * The data needed to create a TentativaLoginAdmin.
     */
    data: Prisma.XOR<Prisma.TentativaLoginAdminCreateInput, Prisma.TentativaLoginAdminUncheckedCreateInput>;
};
/**
 * TentativaLoginAdmin createMany
 */
export type TentativaLoginAdminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TentativaLoginAdmins.
     */
    data: Prisma.TentativaLoginAdminCreateManyInput | Prisma.TentativaLoginAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TentativaLoginAdmin createManyAndReturn
 */
export type TentativaLoginAdminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * The data used to create many TentativaLoginAdmins.
     */
    data: Prisma.TentativaLoginAdminCreateManyInput | Prisma.TentativaLoginAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TentativaLoginAdmin update
 */
export type TentativaLoginAdminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * The data needed to update a TentativaLoginAdmin.
     */
    data: Prisma.XOR<Prisma.TentativaLoginAdminUpdateInput, Prisma.TentativaLoginAdminUncheckedUpdateInput>;
    /**
     * Choose, which TentativaLoginAdmin to update.
     */
    where: Prisma.TentativaLoginAdminWhereUniqueInput;
};
/**
 * TentativaLoginAdmin updateMany
 */
export type TentativaLoginAdminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TentativaLoginAdmins.
     */
    data: Prisma.XOR<Prisma.TentativaLoginAdminUpdateManyMutationInput, Prisma.TentativaLoginAdminUncheckedUpdateManyInput>;
    /**
     * Filter which TentativaLoginAdmins to update
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * Limit how many TentativaLoginAdmins to update.
     */
    limit?: number;
};
/**
 * TentativaLoginAdmin updateManyAndReturn
 */
export type TentativaLoginAdminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * The data used to update TentativaLoginAdmins.
     */
    data: Prisma.XOR<Prisma.TentativaLoginAdminUpdateManyMutationInput, Prisma.TentativaLoginAdminUncheckedUpdateManyInput>;
    /**
     * Filter which TentativaLoginAdmins to update
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * Limit how many TentativaLoginAdmins to update.
     */
    limit?: number;
};
/**
 * TentativaLoginAdmin upsert
 */
export type TentativaLoginAdminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * The filter to search for the TentativaLoginAdmin to update in case it exists.
     */
    where: Prisma.TentativaLoginAdminWhereUniqueInput;
    /**
     * In case the TentativaLoginAdmin found by the `where` argument doesn't exist, create a new TentativaLoginAdmin with this data.
     */
    create: Prisma.XOR<Prisma.TentativaLoginAdminCreateInput, Prisma.TentativaLoginAdminUncheckedCreateInput>;
    /**
     * In case the TentativaLoginAdmin was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TentativaLoginAdminUpdateInput, Prisma.TentativaLoginAdminUncheckedUpdateInput>;
};
/**
 * TentativaLoginAdmin delete
 */
export type TentativaLoginAdminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
    /**
     * Filter which TentativaLoginAdmin to delete.
     */
    where: Prisma.TentativaLoginAdminWhereUniqueInput;
};
/**
 * TentativaLoginAdmin deleteMany
 */
export type TentativaLoginAdminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TentativaLoginAdmins to delete
     */
    where?: Prisma.TentativaLoginAdminWhereInput;
    /**
     * Limit how many TentativaLoginAdmins to delete.
     */
    limit?: number;
};
/**
 * TentativaLoginAdmin without action
 */
export type TentativaLoginAdminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TentativaLoginAdmin
     */
    select?: Prisma.TentativaLoginAdminSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TentativaLoginAdmin
     */
    omit?: Prisma.TentativaLoginAdminOmit<ExtArgs> | null;
};
//# sourceMappingURL=TentativaLoginAdmin.d.ts.map