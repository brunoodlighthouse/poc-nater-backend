import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EntregaItem
 *
 */
export type EntregaItemModel = runtime.Types.Result.DefaultSelection<Prisma.$EntregaItemPayload>;
export type AggregateEntregaItem = {
    _count: EntregaItemCountAggregateOutputType | null;
    _avg: EntregaItemAvgAggregateOutputType | null;
    _sum: EntregaItemSumAggregateOutputType | null;
    _min: EntregaItemMinAggregateOutputType | null;
    _max: EntregaItemMaxAggregateOutputType | null;
};
export type EntregaItemAvgAggregateOutputType = {
    qtdTotal: runtime.Decimal | null;
    qtdEntregue: runtime.Decimal | null;
};
export type EntregaItemSumAggregateOutputType = {
    qtdTotal: runtime.Decimal | null;
    qtdEntregue: runtime.Decimal | null;
};
export type EntregaItemMinAggregateOutputType = {
    id: string | null;
    entregaId: string | null;
    itemIdProtheus: string | null;
    descricao: string | null;
    qtdTotal: runtime.Decimal | null;
    qtdEntregue: runtime.Decimal | null;
    unidade: string | null;
    observacao: string | null;
};
export type EntregaItemMaxAggregateOutputType = {
    id: string | null;
    entregaId: string | null;
    itemIdProtheus: string | null;
    descricao: string | null;
    qtdTotal: runtime.Decimal | null;
    qtdEntregue: runtime.Decimal | null;
    unidade: string | null;
    observacao: string | null;
};
export type EntregaItemCountAggregateOutputType = {
    id: number;
    entregaId: number;
    itemIdProtheus: number;
    descricao: number;
    qtdTotal: number;
    qtdEntregue: number;
    unidade: number;
    observacao: number;
    _all: number;
};
export type EntregaItemAvgAggregateInputType = {
    qtdTotal?: true;
    qtdEntregue?: true;
};
export type EntregaItemSumAggregateInputType = {
    qtdTotal?: true;
    qtdEntregue?: true;
};
export type EntregaItemMinAggregateInputType = {
    id?: true;
    entregaId?: true;
    itemIdProtheus?: true;
    descricao?: true;
    qtdTotal?: true;
    qtdEntregue?: true;
    unidade?: true;
    observacao?: true;
};
export type EntregaItemMaxAggregateInputType = {
    id?: true;
    entregaId?: true;
    itemIdProtheus?: true;
    descricao?: true;
    qtdTotal?: true;
    qtdEntregue?: true;
    unidade?: true;
    observacao?: true;
};
export type EntregaItemCountAggregateInputType = {
    id?: true;
    entregaId?: true;
    itemIdProtheus?: true;
    descricao?: true;
    qtdTotal?: true;
    qtdEntregue?: true;
    unidade?: true;
    observacao?: true;
    _all?: true;
};
export type EntregaItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EntregaItem to aggregate.
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EntregaItems to fetch.
     */
    orderBy?: Prisma.EntregaItemOrderByWithRelationInput | Prisma.EntregaItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EntregaItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EntregaItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EntregaItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EntregaItems
    **/
    _count?: true | EntregaItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EntregaItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EntregaItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EntregaItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EntregaItemMaxAggregateInputType;
};
export type GetEntregaItemAggregateType<T extends EntregaItemAggregateArgs> = {
    [P in keyof T & keyof AggregateEntregaItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEntregaItem[P]> : Prisma.GetScalarType<T[P], AggregateEntregaItem[P]>;
};
export type EntregaItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntregaItemWhereInput;
    orderBy?: Prisma.EntregaItemOrderByWithAggregationInput | Prisma.EntregaItemOrderByWithAggregationInput[];
    by: Prisma.EntregaItemScalarFieldEnum[] | Prisma.EntregaItemScalarFieldEnum;
    having?: Prisma.EntregaItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EntregaItemCountAggregateInputType | true;
    _avg?: EntregaItemAvgAggregateInputType;
    _sum?: EntregaItemSumAggregateInputType;
    _min?: EntregaItemMinAggregateInputType;
    _max?: EntregaItemMaxAggregateInputType;
};
export type EntregaItemGroupByOutputType = {
    id: string;
    entregaId: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal;
    qtdEntregue: runtime.Decimal;
    unidade: string;
    observacao: string | null;
    _count: EntregaItemCountAggregateOutputType | null;
    _avg: EntregaItemAvgAggregateOutputType | null;
    _sum: EntregaItemSumAggregateOutputType | null;
    _min: EntregaItemMinAggregateOutputType | null;
    _max: EntregaItemMaxAggregateOutputType | null;
};
export type GetEntregaItemGroupByPayload<T extends EntregaItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EntregaItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EntregaItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EntregaItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EntregaItemGroupByOutputType[P]>;
}>>;
export type EntregaItemWhereInput = {
    AND?: Prisma.EntregaItemWhereInput | Prisma.EntregaItemWhereInput[];
    OR?: Prisma.EntregaItemWhereInput[];
    NOT?: Prisma.EntregaItemWhereInput | Prisma.EntregaItemWhereInput[];
    id?: Prisma.UuidFilter<"EntregaItem"> | string;
    entregaId?: Prisma.UuidFilter<"EntregaItem"> | string;
    itemIdProtheus?: Prisma.StringFilter<"EntregaItem"> | string;
    descricao?: Prisma.StringFilter<"EntregaItem"> | string;
    qtdTotal?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFilter<"EntregaItem"> | string;
    observacao?: Prisma.StringNullableFilter<"EntregaItem"> | string | null;
    entrega?: Prisma.XOR<Prisma.EntregaScalarRelationFilter, Prisma.EntregaWhereInput>;
};
export type EntregaItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entregaId?: Prisma.SortOrder;
    itemIdProtheus?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    observacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    entrega?: Prisma.EntregaOrderByWithRelationInput;
};
export type EntregaItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EntregaItemWhereInput | Prisma.EntregaItemWhereInput[];
    OR?: Prisma.EntregaItemWhereInput[];
    NOT?: Prisma.EntregaItemWhereInput | Prisma.EntregaItemWhereInput[];
    entregaId?: Prisma.UuidFilter<"EntregaItem"> | string;
    itemIdProtheus?: Prisma.StringFilter<"EntregaItem"> | string;
    descricao?: Prisma.StringFilter<"EntregaItem"> | string;
    qtdTotal?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFilter<"EntregaItem"> | string;
    observacao?: Prisma.StringNullableFilter<"EntregaItem"> | string | null;
    entrega?: Prisma.XOR<Prisma.EntregaScalarRelationFilter, Prisma.EntregaWhereInput>;
}, "id">;
export type EntregaItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entregaId?: Prisma.SortOrder;
    itemIdProtheus?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    observacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EntregaItemCountOrderByAggregateInput;
    _avg?: Prisma.EntregaItemAvgOrderByAggregateInput;
    _max?: Prisma.EntregaItemMaxOrderByAggregateInput;
    _min?: Prisma.EntregaItemMinOrderByAggregateInput;
    _sum?: Prisma.EntregaItemSumOrderByAggregateInput;
};
export type EntregaItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.EntregaItemScalarWhereWithAggregatesInput | Prisma.EntregaItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.EntregaItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EntregaItemScalarWhereWithAggregatesInput | Prisma.EntregaItemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EntregaItem"> | string;
    entregaId?: Prisma.UuidWithAggregatesFilter<"EntregaItem"> | string;
    itemIdProtheus?: Prisma.StringWithAggregatesFilter<"EntregaItem"> | string;
    descricao?: Prisma.StringWithAggregatesFilter<"EntregaItem"> | string;
    qtdTotal?: Prisma.DecimalWithAggregatesFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalWithAggregatesFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringWithAggregatesFilter<"EntregaItem"> | string;
    observacao?: Prisma.StringNullableWithAggregatesFilter<"EntregaItem"> | string | null;
};
export type EntregaItemCreateInput = {
    id?: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
    entrega: Prisma.EntregaCreateNestedOneWithoutItensInput;
};
export type EntregaItemUncheckedCreateInput = {
    id?: string;
    entregaId: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
};
export type EntregaItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entrega?: Prisma.EntregaUpdateOneRequiredWithoutItensNestedInput;
};
export type EntregaItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entregaId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemCreateManyInput = {
    id?: string;
    entregaId: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
};
export type EntregaItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entregaId?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemListRelationFilter = {
    every?: Prisma.EntregaItemWhereInput;
    some?: Prisma.EntregaItemWhereInput;
    none?: Prisma.EntregaItemWhereInput;
};
export type EntregaItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EntregaItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entregaId?: Prisma.SortOrder;
    itemIdProtheus?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
};
export type EntregaItemAvgOrderByAggregateInput = {
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
};
export type EntregaItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entregaId?: Prisma.SortOrder;
    itemIdProtheus?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
};
export type EntregaItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entregaId?: Prisma.SortOrder;
    itemIdProtheus?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
    unidade?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
};
export type EntregaItemSumOrderByAggregateInput = {
    qtdTotal?: Prisma.SortOrder;
    qtdEntregue?: Prisma.SortOrder;
};
export type EntregaItemCreateNestedManyWithoutEntregaInput = {
    create?: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput> | Prisma.EntregaItemCreateWithoutEntregaInput[] | Prisma.EntregaItemUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.EntregaItemCreateOrConnectWithoutEntregaInput | Prisma.EntregaItemCreateOrConnectWithoutEntregaInput[];
    createMany?: Prisma.EntregaItemCreateManyEntregaInputEnvelope;
    connect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
};
export type EntregaItemUncheckedCreateNestedManyWithoutEntregaInput = {
    create?: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput> | Prisma.EntregaItemCreateWithoutEntregaInput[] | Prisma.EntregaItemUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.EntregaItemCreateOrConnectWithoutEntregaInput | Prisma.EntregaItemCreateOrConnectWithoutEntregaInput[];
    createMany?: Prisma.EntregaItemCreateManyEntregaInputEnvelope;
    connect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
};
export type EntregaItemUpdateManyWithoutEntregaNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput> | Prisma.EntregaItemCreateWithoutEntregaInput[] | Prisma.EntregaItemUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.EntregaItemCreateOrConnectWithoutEntregaInput | Prisma.EntregaItemCreateOrConnectWithoutEntregaInput[];
    upsert?: Prisma.EntregaItemUpsertWithWhereUniqueWithoutEntregaInput | Prisma.EntregaItemUpsertWithWhereUniqueWithoutEntregaInput[];
    createMany?: Prisma.EntregaItemCreateManyEntregaInputEnvelope;
    set?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    disconnect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    delete?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    connect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    update?: Prisma.EntregaItemUpdateWithWhereUniqueWithoutEntregaInput | Prisma.EntregaItemUpdateWithWhereUniqueWithoutEntregaInput[];
    updateMany?: Prisma.EntregaItemUpdateManyWithWhereWithoutEntregaInput | Prisma.EntregaItemUpdateManyWithWhereWithoutEntregaInput[];
    deleteMany?: Prisma.EntregaItemScalarWhereInput | Prisma.EntregaItemScalarWhereInput[];
};
export type EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput> | Prisma.EntregaItemCreateWithoutEntregaInput[] | Prisma.EntregaItemUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.EntregaItemCreateOrConnectWithoutEntregaInput | Prisma.EntregaItemCreateOrConnectWithoutEntregaInput[];
    upsert?: Prisma.EntregaItemUpsertWithWhereUniqueWithoutEntregaInput | Prisma.EntregaItemUpsertWithWhereUniqueWithoutEntregaInput[];
    createMany?: Prisma.EntregaItemCreateManyEntregaInputEnvelope;
    set?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    disconnect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    delete?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    connect?: Prisma.EntregaItemWhereUniqueInput | Prisma.EntregaItemWhereUniqueInput[];
    update?: Prisma.EntregaItemUpdateWithWhereUniqueWithoutEntregaInput | Prisma.EntregaItemUpdateWithWhereUniqueWithoutEntregaInput[];
    updateMany?: Prisma.EntregaItemUpdateManyWithWhereWithoutEntregaInput | Prisma.EntregaItemUpdateManyWithWhereWithoutEntregaInput[];
    deleteMany?: Prisma.EntregaItemScalarWhereInput | Prisma.EntregaItemScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type EntregaItemCreateWithoutEntregaInput = {
    id?: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
};
export type EntregaItemUncheckedCreateWithoutEntregaInput = {
    id?: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
};
export type EntregaItemCreateOrConnectWithoutEntregaInput = {
    where: Prisma.EntregaItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput>;
};
export type EntregaItemCreateManyEntregaInputEnvelope = {
    data: Prisma.EntregaItemCreateManyEntregaInput | Prisma.EntregaItemCreateManyEntregaInput[];
    skipDuplicates?: boolean;
};
export type EntregaItemUpsertWithWhereUniqueWithoutEntregaInput = {
    where: Prisma.EntregaItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.EntregaItemUpdateWithoutEntregaInput, Prisma.EntregaItemUncheckedUpdateWithoutEntregaInput>;
    create: Prisma.XOR<Prisma.EntregaItemCreateWithoutEntregaInput, Prisma.EntregaItemUncheckedCreateWithoutEntregaInput>;
};
export type EntregaItemUpdateWithWhereUniqueWithoutEntregaInput = {
    where: Prisma.EntregaItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.EntregaItemUpdateWithoutEntregaInput, Prisma.EntregaItemUncheckedUpdateWithoutEntregaInput>;
};
export type EntregaItemUpdateManyWithWhereWithoutEntregaInput = {
    where: Prisma.EntregaItemScalarWhereInput;
    data: Prisma.XOR<Prisma.EntregaItemUpdateManyMutationInput, Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaInput>;
};
export type EntregaItemScalarWhereInput = {
    AND?: Prisma.EntregaItemScalarWhereInput | Prisma.EntregaItemScalarWhereInput[];
    OR?: Prisma.EntregaItemScalarWhereInput[];
    NOT?: Prisma.EntregaItemScalarWhereInput | Prisma.EntregaItemScalarWhereInput[];
    id?: Prisma.UuidFilter<"EntregaItem"> | string;
    entregaId?: Prisma.UuidFilter<"EntregaItem"> | string;
    itemIdProtheus?: Prisma.StringFilter<"EntregaItem"> | string;
    descricao?: Prisma.StringFilter<"EntregaItem"> | string;
    qtdTotal?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFilter<"EntregaItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFilter<"EntregaItem"> | string;
    observacao?: Prisma.StringNullableFilter<"EntregaItem"> | string | null;
};
export type EntregaItemCreateManyEntregaInput = {
    id?: string;
    itemIdProtheus: string;
    descricao: string;
    qtdTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: string;
    observacao?: string | null;
};
export type EntregaItemUpdateWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemUncheckedUpdateWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemUncheckedUpdateManyWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    itemIdProtheus?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    qtdEntregue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unidade?: Prisma.StringFieldUpdateOperationsInput | string;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EntregaItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entregaId?: boolean;
    itemIdProtheus?: boolean;
    descricao?: boolean;
    qtdTotal?: boolean;
    qtdEntregue?: boolean;
    unidade?: boolean;
    observacao?: boolean;
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entregaItem"]>;
export type EntregaItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entregaId?: boolean;
    itemIdProtheus?: boolean;
    descricao?: boolean;
    qtdTotal?: boolean;
    qtdEntregue?: boolean;
    unidade?: boolean;
    observacao?: boolean;
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entregaItem"]>;
export type EntregaItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entregaId?: boolean;
    itemIdProtheus?: boolean;
    descricao?: boolean;
    qtdTotal?: boolean;
    qtdEntregue?: boolean;
    unidade?: boolean;
    observacao?: boolean;
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entregaItem"]>;
export type EntregaItemSelectScalar = {
    id?: boolean;
    entregaId?: boolean;
    itemIdProtheus?: boolean;
    descricao?: boolean;
    qtdTotal?: boolean;
    qtdEntregue?: boolean;
    unidade?: boolean;
    observacao?: boolean;
};
export type EntregaItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entregaId" | "itemIdProtheus" | "descricao" | "qtdTotal" | "qtdEntregue" | "unidade" | "observacao", ExtArgs["result"]["entregaItem"]>;
export type EntregaItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
};
export type EntregaItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
};
export type EntregaItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.EntregaDefaultArgs<ExtArgs>;
};
export type $EntregaItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EntregaItem";
    objects: {
        entrega: Prisma.$EntregaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        entregaId: string;
        itemIdProtheus: string;
        descricao: string;
        qtdTotal: runtime.Decimal;
        qtdEntregue: runtime.Decimal;
        unidade: string;
        observacao: string | null;
    }, ExtArgs["result"]["entregaItem"]>;
    composites: {};
};
export type EntregaItemGetPayload<S extends boolean | null | undefined | EntregaItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload, S>;
export type EntregaItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EntregaItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EntregaItemCountAggregateInputType | true;
};
export interface EntregaItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EntregaItem'];
        meta: {
            name: 'EntregaItem';
        };
    };
    /**
     * Find zero or one EntregaItem that matches the filter.
     * @param {EntregaItemFindUniqueArgs} args - Arguments to find a EntregaItem
     * @example
     * // Get one EntregaItem
     * const entregaItem = await prisma.entregaItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntregaItemFindUniqueArgs>(args: Prisma.SelectSubset<T, EntregaItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EntregaItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntregaItemFindUniqueOrThrowArgs} args - Arguments to find a EntregaItem
     * @example
     * // Get one EntregaItem
     * const entregaItem = await prisma.entregaItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntregaItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EntregaItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EntregaItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemFindFirstArgs} args - Arguments to find a EntregaItem
     * @example
     * // Get one EntregaItem
     * const entregaItem = await prisma.entregaItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntregaItemFindFirstArgs>(args?: Prisma.SelectSubset<T, EntregaItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EntregaItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemFindFirstOrThrowArgs} args - Arguments to find a EntregaItem
     * @example
     * // Get one EntregaItem
     * const entregaItem = await prisma.entregaItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntregaItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EntregaItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EntregaItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntregaItems
     * const entregaItems = await prisma.entregaItem.findMany()
     *
     * // Get first 10 EntregaItems
     * const entregaItems = await prisma.entregaItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const entregaItemWithIdOnly = await prisma.entregaItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EntregaItemFindManyArgs>(args?: Prisma.SelectSubset<T, EntregaItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EntregaItem.
     * @param {EntregaItemCreateArgs} args - Arguments to create a EntregaItem.
     * @example
     * // Create one EntregaItem
     * const EntregaItem = await prisma.entregaItem.create({
     *   data: {
     *     // ... data to create a EntregaItem
     *   }
     * })
     *
     */
    create<T extends EntregaItemCreateArgs>(args: Prisma.SelectSubset<T, EntregaItemCreateArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EntregaItems.
     * @param {EntregaItemCreateManyArgs} args - Arguments to create many EntregaItems.
     * @example
     * // Create many EntregaItems
     * const entregaItem = await prisma.entregaItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EntregaItemCreateManyArgs>(args?: Prisma.SelectSubset<T, EntregaItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EntregaItems and returns the data saved in the database.
     * @param {EntregaItemCreateManyAndReturnArgs} args - Arguments to create many EntregaItems.
     * @example
     * // Create many EntregaItems
     * const entregaItem = await prisma.entregaItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EntregaItems and only return the `id`
     * const entregaItemWithIdOnly = await prisma.entregaItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EntregaItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EntregaItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EntregaItem.
     * @param {EntregaItemDeleteArgs} args - Arguments to delete one EntregaItem.
     * @example
     * // Delete one EntregaItem
     * const EntregaItem = await prisma.entregaItem.delete({
     *   where: {
     *     // ... filter to delete one EntregaItem
     *   }
     * })
     *
     */
    delete<T extends EntregaItemDeleteArgs>(args: Prisma.SelectSubset<T, EntregaItemDeleteArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EntregaItem.
     * @param {EntregaItemUpdateArgs} args - Arguments to update one EntregaItem.
     * @example
     * // Update one EntregaItem
     * const entregaItem = await prisma.entregaItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EntregaItemUpdateArgs>(args: Prisma.SelectSubset<T, EntregaItemUpdateArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EntregaItems.
     * @param {EntregaItemDeleteManyArgs} args - Arguments to filter EntregaItems to delete.
     * @example
     * // Delete a few EntregaItems
     * const { count } = await prisma.entregaItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EntregaItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, EntregaItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EntregaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntregaItems
     * const entregaItem = await prisma.entregaItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EntregaItemUpdateManyArgs>(args: Prisma.SelectSubset<T, EntregaItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EntregaItems and returns the data updated in the database.
     * @param {EntregaItemUpdateManyAndReturnArgs} args - Arguments to update many EntregaItems.
     * @example
     * // Update many EntregaItems
     * const entregaItem = await prisma.entregaItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EntregaItems and only return the `id`
     * const entregaItemWithIdOnly = await prisma.entregaItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntregaItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EntregaItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EntregaItem.
     * @param {EntregaItemUpsertArgs} args - Arguments to update or create a EntregaItem.
     * @example
     * // Update or create a EntregaItem
     * const entregaItem = await prisma.entregaItem.upsert({
     *   create: {
     *     // ... data to create a EntregaItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntregaItem we want to update
     *   }
     * })
     */
    upsert<T extends EntregaItemUpsertArgs>(args: Prisma.SelectSubset<T, EntregaItemUpsertArgs<ExtArgs>>): Prisma.Prisma__EntregaItemClient<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EntregaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemCountArgs} args - Arguments to filter EntregaItems to count.
     * @example
     * // Count the number of EntregaItems
     * const count = await prisma.entregaItem.count({
     *   where: {
     *     // ... the filter for the EntregaItems we want to count
     *   }
     * })
    **/
    count<T extends EntregaItemCountArgs>(args?: Prisma.Subset<T, EntregaItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EntregaItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EntregaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntregaItemAggregateArgs>(args: Prisma.Subset<T, EntregaItemAggregateArgs>): Prisma.PrismaPromise<GetEntregaItemAggregateType<T>>;
    /**
     * Group by EntregaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EntregaItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EntregaItemGroupByArgs['orderBy'];
    } : {
        orderBy?: EntregaItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EntregaItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntregaItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EntregaItem model
     */
    readonly fields: EntregaItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EntregaItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EntregaItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    entrega<T extends Prisma.EntregaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EntregaDefaultArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EntregaItem model
 */
export interface EntregaItemFieldRefs {
    readonly id: Prisma.FieldRef<"EntregaItem", 'String'>;
    readonly entregaId: Prisma.FieldRef<"EntregaItem", 'String'>;
    readonly itemIdProtheus: Prisma.FieldRef<"EntregaItem", 'String'>;
    readonly descricao: Prisma.FieldRef<"EntregaItem", 'String'>;
    readonly qtdTotal: Prisma.FieldRef<"EntregaItem", 'Decimal'>;
    readonly qtdEntregue: Prisma.FieldRef<"EntregaItem", 'Decimal'>;
    readonly unidade: Prisma.FieldRef<"EntregaItem", 'String'>;
    readonly observacao: Prisma.FieldRef<"EntregaItem", 'String'>;
}
/**
 * EntregaItem findUnique
 */
export type EntregaItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter, which EntregaItem to fetch.
     */
    where: Prisma.EntregaItemWhereUniqueInput;
};
/**
 * EntregaItem findUniqueOrThrow
 */
export type EntregaItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter, which EntregaItem to fetch.
     */
    where: Prisma.EntregaItemWhereUniqueInput;
};
/**
 * EntregaItem findFirst
 */
export type EntregaItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter, which EntregaItem to fetch.
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EntregaItems to fetch.
     */
    orderBy?: Prisma.EntregaItemOrderByWithRelationInput | Prisma.EntregaItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EntregaItems.
     */
    cursor?: Prisma.EntregaItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EntregaItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EntregaItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EntregaItems.
     */
    distinct?: Prisma.EntregaItemScalarFieldEnum | Prisma.EntregaItemScalarFieldEnum[];
};
/**
 * EntregaItem findFirstOrThrow
 */
export type EntregaItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter, which EntregaItem to fetch.
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EntregaItems to fetch.
     */
    orderBy?: Prisma.EntregaItemOrderByWithRelationInput | Prisma.EntregaItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EntregaItems.
     */
    cursor?: Prisma.EntregaItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EntregaItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EntregaItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EntregaItems.
     */
    distinct?: Prisma.EntregaItemScalarFieldEnum | Prisma.EntregaItemScalarFieldEnum[];
};
/**
 * EntregaItem findMany
 */
export type EntregaItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter, which EntregaItems to fetch.
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EntregaItems to fetch.
     */
    orderBy?: Prisma.EntregaItemOrderByWithRelationInput | Prisma.EntregaItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EntregaItems.
     */
    cursor?: Prisma.EntregaItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EntregaItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EntregaItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EntregaItems.
     */
    distinct?: Prisma.EntregaItemScalarFieldEnum | Prisma.EntregaItemScalarFieldEnum[];
};
/**
 * EntregaItem create
 */
export type EntregaItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a EntregaItem.
     */
    data: Prisma.XOR<Prisma.EntregaItemCreateInput, Prisma.EntregaItemUncheckedCreateInput>;
};
/**
 * EntregaItem createMany
 */
export type EntregaItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntregaItems.
     */
    data: Prisma.EntregaItemCreateManyInput | Prisma.EntregaItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EntregaItem createManyAndReturn
 */
export type EntregaItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * The data used to create many EntregaItems.
     */
    data: Prisma.EntregaItemCreateManyInput | Prisma.EntregaItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EntregaItem update
 */
export type EntregaItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a EntregaItem.
     */
    data: Prisma.XOR<Prisma.EntregaItemUpdateInput, Prisma.EntregaItemUncheckedUpdateInput>;
    /**
     * Choose, which EntregaItem to update.
     */
    where: Prisma.EntregaItemWhereUniqueInput;
};
/**
 * EntregaItem updateMany
 */
export type EntregaItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EntregaItems.
     */
    data: Prisma.XOR<Prisma.EntregaItemUpdateManyMutationInput, Prisma.EntregaItemUncheckedUpdateManyInput>;
    /**
     * Filter which EntregaItems to update
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * Limit how many EntregaItems to update.
     */
    limit?: number;
};
/**
 * EntregaItem updateManyAndReturn
 */
export type EntregaItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * The data used to update EntregaItems.
     */
    data: Prisma.XOR<Prisma.EntregaItemUpdateManyMutationInput, Prisma.EntregaItemUncheckedUpdateManyInput>;
    /**
     * Filter which EntregaItems to update
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * Limit how many EntregaItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EntregaItem upsert
 */
export type EntregaItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the EntregaItem to update in case it exists.
     */
    where: Prisma.EntregaItemWhereUniqueInput;
    /**
     * In case the EntregaItem found by the `where` argument doesn't exist, create a new EntregaItem with this data.
     */
    create: Prisma.XOR<Prisma.EntregaItemCreateInput, Prisma.EntregaItemUncheckedCreateInput>;
    /**
     * In case the EntregaItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EntregaItemUpdateInput, Prisma.EntregaItemUncheckedUpdateInput>;
};
/**
 * EntregaItem delete
 */
export type EntregaItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
    /**
     * Filter which EntregaItem to delete.
     */
    where: Prisma.EntregaItemWhereUniqueInput;
};
/**
 * EntregaItem deleteMany
 */
export type EntregaItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EntregaItems to delete
     */
    where?: Prisma.EntregaItemWhereInput;
    /**
     * Limit how many EntregaItems to delete.
     */
    limit?: number;
};
/**
 * EntregaItem without action
 */
export type EntregaItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaItem
     */
    select?: Prisma.EntregaItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EntregaItem
     */
    omit?: Prisma.EntregaItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaItemInclude<ExtArgs> | null;
};
//# sourceMappingURL=EntregaItem.d.ts.map