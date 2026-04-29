import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Entrega
 *
 */
export type EntregaModel = runtime.Types.Result.DefaultSelection<Prisma.$EntregaPayload>;
export type AggregateEntrega = {
    _count: EntregaCountAggregateOutputType | null;
    _min: EntregaMinAggregateOutputType | null;
    _max: EntregaMaxAggregateOutputType | null;
};
export type EntregaMinAggregateOutputType = {
    id: string | null;
    sessaoId: string | null;
    documentoNumero: string | null;
    entregadorCodigo: string | null;
    entregadorNome: string | null;
    status: string | null;
    motivoPendencia: string | null;
    entregaAnteriorId: string | null;
    iniciadaEm: Date | null;
    finalizadaEm: Date | null;
};
export type EntregaMaxAggregateOutputType = {
    id: string | null;
    sessaoId: string | null;
    documentoNumero: string | null;
    entregadorCodigo: string | null;
    entregadorNome: string | null;
    status: string | null;
    motivoPendencia: string | null;
    entregaAnteriorId: string | null;
    iniciadaEm: Date | null;
    finalizadaEm: Date | null;
};
export type EntregaCountAggregateOutputType = {
    id: number;
    sessaoId: number;
    documentoNumero: number;
    entregadorCodigo: number;
    entregadorNome: number;
    status: number;
    motivoPendencia: number;
    entregaAnteriorId: number;
    iniciadaEm: number;
    finalizadaEm: number;
    _all: number;
};
export type EntregaMinAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    entregadorCodigo?: true;
    entregadorNome?: true;
    status?: true;
    motivoPendencia?: true;
    entregaAnteriorId?: true;
    iniciadaEm?: true;
    finalizadaEm?: true;
};
export type EntregaMaxAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    entregadorCodigo?: true;
    entregadorNome?: true;
    status?: true;
    motivoPendencia?: true;
    entregaAnteriorId?: true;
    iniciadaEm?: true;
    finalizadaEm?: true;
};
export type EntregaCountAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    entregadorCodigo?: true;
    entregadorNome?: true;
    status?: true;
    motivoPendencia?: true;
    entregaAnteriorId?: true;
    iniciadaEm?: true;
    finalizadaEm?: true;
    _all?: true;
};
export type EntregaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Entrega to aggregate.
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Entregas to fetch.
     */
    orderBy?: Prisma.EntregaOrderByWithRelationInput | Prisma.EntregaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EntregaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Entregas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Entregas
    **/
    _count?: true | EntregaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EntregaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EntregaMaxAggregateInputType;
};
export type GetEntregaAggregateType<T extends EntregaAggregateArgs> = {
    [P in keyof T & keyof AggregateEntrega]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEntrega[P]> : Prisma.GetScalarType<T[P], AggregateEntrega[P]>;
};
export type EntregaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntregaWhereInput;
    orderBy?: Prisma.EntregaOrderByWithAggregationInput | Prisma.EntregaOrderByWithAggregationInput[];
    by: Prisma.EntregaScalarFieldEnum[] | Prisma.EntregaScalarFieldEnum;
    having?: Prisma.EntregaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EntregaCountAggregateInputType | true;
    _min?: EntregaMinAggregateInputType;
    _max?: EntregaMaxAggregateInputType;
};
export type EntregaGroupByOutputType = {
    id: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status: string;
    motivoPendencia: string | null;
    entregaAnteriorId: string | null;
    iniciadaEm: Date;
    finalizadaEm: Date | null;
    _count: EntregaCountAggregateOutputType | null;
    _min: EntregaMinAggregateOutputType | null;
    _max: EntregaMaxAggregateOutputType | null;
};
export type GetEntregaGroupByPayload<T extends EntregaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EntregaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EntregaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EntregaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EntregaGroupByOutputType[P]>;
}>>;
export type EntregaWhereInput = {
    AND?: Prisma.EntregaWhereInput | Prisma.EntregaWhereInput[];
    OR?: Prisma.EntregaWhereInput[];
    NOT?: Prisma.EntregaWhereInput | Prisma.EntregaWhereInput[];
    id?: Prisma.UuidFilter<"Entrega"> | string;
    sessaoId?: Prisma.UuidFilter<"Entrega"> | string;
    documentoNumero?: Prisma.StringFilter<"Entrega"> | string;
    entregadorCodigo?: Prisma.StringFilter<"Entrega"> | string;
    entregadorNome?: Prisma.StringFilter<"Entrega"> | string;
    status?: Prisma.StringFilter<"Entrega"> | string;
    motivoPendencia?: Prisma.StringNullableFilter<"Entrega"> | string | null;
    entregaAnteriorId?: Prisma.UuidNullableFilter<"Entrega"> | string | null;
    iniciadaEm?: Prisma.DateTimeFilter<"Entrega"> | Date | string;
    finalizadaEm?: Prisma.DateTimeNullableFilter<"Entrega"> | Date | string | null;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
    entregaAnterior?: Prisma.XOR<Prisma.EntregaNullableScalarRelationFilter, Prisma.EntregaWhereInput> | null;
    reentregas?: Prisma.EntregaListRelationFilter;
    itens?: Prisma.EntregaItemListRelationFilter;
    logsAlteracao?: Prisma.LogAlteracaoListRelationFilter;
};
export type EntregaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    entregadorCodigo?: Prisma.SortOrder;
    entregadorNome?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motivoPendencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    entregaAnteriorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    iniciadaEm?: Prisma.SortOrder;
    finalizadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessao?: Prisma.SessaoOrderByWithRelationInput;
    entregaAnterior?: Prisma.EntregaOrderByWithRelationInput;
    reentregas?: Prisma.EntregaOrderByRelationAggregateInput;
    itens?: Prisma.EntregaItemOrderByRelationAggregateInput;
    logsAlteracao?: Prisma.LogAlteracaoOrderByRelationAggregateInput;
};
export type EntregaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    documentoNumero?: string;
    AND?: Prisma.EntregaWhereInput | Prisma.EntregaWhereInput[];
    OR?: Prisma.EntregaWhereInput[];
    NOT?: Prisma.EntregaWhereInput | Prisma.EntregaWhereInput[];
    sessaoId?: Prisma.UuidFilter<"Entrega"> | string;
    entregadorCodigo?: Prisma.StringFilter<"Entrega"> | string;
    entregadorNome?: Prisma.StringFilter<"Entrega"> | string;
    status?: Prisma.StringFilter<"Entrega"> | string;
    motivoPendencia?: Prisma.StringNullableFilter<"Entrega"> | string | null;
    entregaAnteriorId?: Prisma.UuidNullableFilter<"Entrega"> | string | null;
    iniciadaEm?: Prisma.DateTimeFilter<"Entrega"> | Date | string;
    finalizadaEm?: Prisma.DateTimeNullableFilter<"Entrega"> | Date | string | null;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
    entregaAnterior?: Prisma.XOR<Prisma.EntregaNullableScalarRelationFilter, Prisma.EntregaWhereInput> | null;
    reentregas?: Prisma.EntregaListRelationFilter;
    itens?: Prisma.EntregaItemListRelationFilter;
    logsAlteracao?: Prisma.LogAlteracaoListRelationFilter;
}, "id" | "documentoNumero">;
export type EntregaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    entregadorCodigo?: Prisma.SortOrder;
    entregadorNome?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motivoPendencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    entregaAnteriorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    iniciadaEm?: Prisma.SortOrder;
    finalizadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EntregaCountOrderByAggregateInput;
    _max?: Prisma.EntregaMaxOrderByAggregateInput;
    _min?: Prisma.EntregaMinOrderByAggregateInput;
};
export type EntregaScalarWhereWithAggregatesInput = {
    AND?: Prisma.EntregaScalarWhereWithAggregatesInput | Prisma.EntregaScalarWhereWithAggregatesInput[];
    OR?: Prisma.EntregaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EntregaScalarWhereWithAggregatesInput | Prisma.EntregaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Entrega"> | string;
    sessaoId?: Prisma.UuidWithAggregatesFilter<"Entrega"> | string;
    documentoNumero?: Prisma.StringWithAggregatesFilter<"Entrega"> | string;
    entregadorCodigo?: Prisma.StringWithAggregatesFilter<"Entrega"> | string;
    entregadorNome?: Prisma.StringWithAggregatesFilter<"Entrega"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Entrega"> | string;
    motivoPendencia?: Prisma.StringNullableWithAggregatesFilter<"Entrega"> | string | null;
    entregaAnteriorId?: Prisma.UuidNullableWithAggregatesFilter<"Entrega"> | string | null;
    iniciadaEm?: Prisma.DateTimeWithAggregatesFilter<"Entrega"> | Date | string;
    finalizadaEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Entrega"> | Date | string | null;
};
export type EntregaCreateInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutEntregasInput;
    entregaAnterior?: Prisma.EntregaCreateNestedOneWithoutReentregasInput;
    reentregas?: Prisma.EntregaCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    reentregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemUncheckedCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutEntregasNestedInput;
    entregaAnterior?: Prisma.EntregaUpdateOneWithoutReentregasNestedInput;
    reentregas?: Prisma.EntregaUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reentregas?: Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaCreateManyInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
};
export type EntregaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EntregaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EntregaListRelationFilter = {
    every?: Prisma.EntregaWhereInput;
    some?: Prisma.EntregaWhereInput;
    none?: Prisma.EntregaWhereInput;
};
export type EntregaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EntregaNullableScalarRelationFilter = {
    is?: Prisma.EntregaWhereInput | null;
    isNot?: Prisma.EntregaWhereInput | null;
};
export type EntregaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    entregadorCodigo?: Prisma.SortOrder;
    entregadorNome?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motivoPendencia?: Prisma.SortOrder;
    entregaAnteriorId?: Prisma.SortOrder;
    iniciadaEm?: Prisma.SortOrder;
    finalizadaEm?: Prisma.SortOrder;
};
export type EntregaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    entregadorCodigo?: Prisma.SortOrder;
    entregadorNome?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motivoPendencia?: Prisma.SortOrder;
    entregaAnteriorId?: Prisma.SortOrder;
    iniciadaEm?: Prisma.SortOrder;
    finalizadaEm?: Prisma.SortOrder;
};
export type EntregaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    entregadorCodigo?: Prisma.SortOrder;
    entregadorNome?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    motivoPendencia?: Prisma.SortOrder;
    entregaAnteriorId?: Prisma.SortOrder;
    iniciadaEm?: Prisma.SortOrder;
    finalizadaEm?: Prisma.SortOrder;
};
export type EntregaScalarRelationFilter = {
    is?: Prisma.EntregaWhereInput;
    isNot?: Prisma.EntregaWhereInput;
};
export type EntregaCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput> | Prisma.EntregaCreateWithoutSessaoInput[] | Prisma.EntregaUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutSessaoInput | Prisma.EntregaCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.EntregaCreateManySessaoInputEnvelope;
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
};
export type EntregaUncheckedCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput> | Prisma.EntregaCreateWithoutSessaoInput[] | Prisma.EntregaUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutSessaoInput | Prisma.EntregaCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.EntregaCreateManySessaoInputEnvelope;
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
};
export type EntregaUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput> | Prisma.EntregaCreateWithoutSessaoInput[] | Prisma.EntregaUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutSessaoInput | Prisma.EntregaCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.EntregaUpsertWithWhereUniqueWithoutSessaoInput | Prisma.EntregaUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.EntregaCreateManySessaoInputEnvelope;
    set?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    disconnect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    delete?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    update?: Prisma.EntregaUpdateWithWhereUniqueWithoutSessaoInput | Prisma.EntregaUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.EntregaUpdateManyWithWhereWithoutSessaoInput | Prisma.EntregaUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
};
export type EntregaUncheckedUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput> | Prisma.EntregaCreateWithoutSessaoInput[] | Prisma.EntregaUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutSessaoInput | Prisma.EntregaCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.EntregaUpsertWithWhereUniqueWithoutSessaoInput | Prisma.EntregaUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.EntregaCreateManySessaoInputEnvelope;
    set?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    disconnect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    delete?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    update?: Prisma.EntregaUpdateWithWhereUniqueWithoutSessaoInput | Prisma.EntregaUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.EntregaUpdateManyWithWhereWithoutSessaoInput | Prisma.EntregaUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
};
export type EntregaCreateNestedOneWithoutReentregasInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutReentregasInput, Prisma.EntregaUncheckedCreateWithoutReentregasInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutReentregasInput;
    connect?: Prisma.EntregaWhereUniqueInput;
};
export type EntregaCreateNestedManyWithoutEntregaAnteriorInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput> | Prisma.EntregaCreateWithoutEntregaAnteriorInput[] | Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput | Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput[];
    createMany?: Prisma.EntregaCreateManyEntregaAnteriorInputEnvelope;
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
};
export type EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput> | Prisma.EntregaCreateWithoutEntregaAnteriorInput[] | Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput | Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput[];
    createMany?: Prisma.EntregaCreateManyEntregaAnteriorInputEnvelope;
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EntregaUpdateOneWithoutReentregasNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutReentregasInput, Prisma.EntregaUncheckedCreateWithoutReentregasInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutReentregasInput;
    upsert?: Prisma.EntregaUpsertWithoutReentregasInput;
    disconnect?: Prisma.EntregaWhereInput | boolean;
    delete?: Prisma.EntregaWhereInput | boolean;
    connect?: Prisma.EntregaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EntregaUpdateToOneWithWhereWithoutReentregasInput, Prisma.EntregaUpdateWithoutReentregasInput>, Prisma.EntregaUncheckedUpdateWithoutReentregasInput>;
};
export type EntregaUpdateManyWithoutEntregaAnteriorNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput> | Prisma.EntregaCreateWithoutEntregaAnteriorInput[] | Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput | Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput[];
    upsert?: Prisma.EntregaUpsertWithWhereUniqueWithoutEntregaAnteriorInput | Prisma.EntregaUpsertWithWhereUniqueWithoutEntregaAnteriorInput[];
    createMany?: Prisma.EntregaCreateManyEntregaAnteriorInputEnvelope;
    set?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    disconnect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    delete?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    update?: Prisma.EntregaUpdateWithWhereUniqueWithoutEntregaAnteriorInput | Prisma.EntregaUpdateWithWhereUniqueWithoutEntregaAnteriorInput[];
    updateMany?: Prisma.EntregaUpdateManyWithWhereWithoutEntregaAnteriorInput | Prisma.EntregaUpdateManyWithWhereWithoutEntregaAnteriorInput[];
    deleteMany?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
};
export type EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput> | Prisma.EntregaCreateWithoutEntregaAnteriorInput[] | Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput[];
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput | Prisma.EntregaCreateOrConnectWithoutEntregaAnteriorInput[];
    upsert?: Prisma.EntregaUpsertWithWhereUniqueWithoutEntregaAnteriorInput | Prisma.EntregaUpsertWithWhereUniqueWithoutEntregaAnteriorInput[];
    createMany?: Prisma.EntregaCreateManyEntregaAnteriorInputEnvelope;
    set?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    disconnect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    delete?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    connect?: Prisma.EntregaWhereUniqueInput | Prisma.EntregaWhereUniqueInput[];
    update?: Prisma.EntregaUpdateWithWhereUniqueWithoutEntregaAnteriorInput | Prisma.EntregaUpdateWithWhereUniqueWithoutEntregaAnteriorInput[];
    updateMany?: Prisma.EntregaUpdateManyWithWhereWithoutEntregaAnteriorInput | Prisma.EntregaUpdateManyWithWhereWithoutEntregaAnteriorInput[];
    deleteMany?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
};
export type EntregaCreateNestedOneWithoutItensInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutItensInput, Prisma.EntregaUncheckedCreateWithoutItensInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutItensInput;
    connect?: Prisma.EntregaWhereUniqueInput;
};
export type EntregaUpdateOneRequiredWithoutItensNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutItensInput, Prisma.EntregaUncheckedCreateWithoutItensInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutItensInput;
    upsert?: Prisma.EntregaUpsertWithoutItensInput;
    connect?: Prisma.EntregaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EntregaUpdateToOneWithWhereWithoutItensInput, Prisma.EntregaUpdateWithoutItensInput>, Prisma.EntregaUncheckedUpdateWithoutItensInput>;
};
export type EntregaCreateNestedOneWithoutLogsAlteracaoInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedCreateWithoutLogsAlteracaoInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutLogsAlteracaoInput;
    connect?: Prisma.EntregaWhereUniqueInput;
};
export type EntregaUpdateOneWithoutLogsAlteracaoNestedInput = {
    create?: Prisma.XOR<Prisma.EntregaCreateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedCreateWithoutLogsAlteracaoInput>;
    connectOrCreate?: Prisma.EntregaCreateOrConnectWithoutLogsAlteracaoInput;
    upsert?: Prisma.EntregaUpsertWithoutLogsAlteracaoInput;
    disconnect?: Prisma.EntregaWhereInput | boolean;
    delete?: Prisma.EntregaWhereInput | boolean;
    connect?: Prisma.EntregaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EntregaUpdateToOneWithWhereWithoutLogsAlteracaoInput, Prisma.EntregaUpdateWithoutLogsAlteracaoInput>, Prisma.EntregaUncheckedUpdateWithoutLogsAlteracaoInput>;
};
export type EntregaCreateWithoutSessaoInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    entregaAnterior?: Prisma.EntregaCreateNestedOneWithoutReentregasInput;
    reentregas?: Prisma.EntregaCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateWithoutSessaoInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    reentregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemUncheckedCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaCreateOrConnectWithoutSessaoInput = {
    where: Prisma.EntregaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput>;
};
export type EntregaCreateManySessaoInputEnvelope = {
    data: Prisma.EntregaCreateManySessaoInput | Prisma.EntregaCreateManySessaoInput[];
    skipDuplicates?: boolean;
};
export type EntregaUpsertWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.EntregaWhereUniqueInput;
    update: Prisma.XOR<Prisma.EntregaUpdateWithoutSessaoInput, Prisma.EntregaUncheckedUpdateWithoutSessaoInput>;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutSessaoInput, Prisma.EntregaUncheckedCreateWithoutSessaoInput>;
};
export type EntregaUpdateWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.EntregaWhereUniqueInput;
    data: Prisma.XOR<Prisma.EntregaUpdateWithoutSessaoInput, Prisma.EntregaUncheckedUpdateWithoutSessaoInput>;
};
export type EntregaUpdateManyWithWhereWithoutSessaoInput = {
    where: Prisma.EntregaScalarWhereInput;
    data: Prisma.XOR<Prisma.EntregaUpdateManyMutationInput, Prisma.EntregaUncheckedUpdateManyWithoutSessaoInput>;
};
export type EntregaScalarWhereInput = {
    AND?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
    OR?: Prisma.EntregaScalarWhereInput[];
    NOT?: Prisma.EntregaScalarWhereInput | Prisma.EntregaScalarWhereInput[];
    id?: Prisma.UuidFilter<"Entrega"> | string;
    sessaoId?: Prisma.UuidFilter<"Entrega"> | string;
    documentoNumero?: Prisma.StringFilter<"Entrega"> | string;
    entregadorCodigo?: Prisma.StringFilter<"Entrega"> | string;
    entregadorNome?: Prisma.StringFilter<"Entrega"> | string;
    status?: Prisma.StringFilter<"Entrega"> | string;
    motivoPendencia?: Prisma.StringNullableFilter<"Entrega"> | string | null;
    entregaAnteriorId?: Prisma.UuidNullableFilter<"Entrega"> | string | null;
    iniciadaEm?: Prisma.DateTimeFilter<"Entrega"> | Date | string;
    finalizadaEm?: Prisma.DateTimeNullableFilter<"Entrega"> | Date | string | null;
};
export type EntregaCreateWithoutReentregasInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutEntregasInput;
    entregaAnterior?: Prisma.EntregaCreateNestedOneWithoutReentregasInput;
    itens?: Prisma.EntregaItemCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateWithoutReentregasInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    itens?: Prisma.EntregaItemUncheckedCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaCreateOrConnectWithoutReentregasInput = {
    where: Prisma.EntregaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutReentregasInput, Prisma.EntregaUncheckedCreateWithoutReentregasInput>;
};
export type EntregaCreateWithoutEntregaAnteriorInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutEntregasInput;
    reentregas?: Prisma.EntregaCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateWithoutEntregaAnteriorInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    reentregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemUncheckedCreateNestedManyWithoutEntregaInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaCreateOrConnectWithoutEntregaAnteriorInput = {
    where: Prisma.EntregaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput>;
};
export type EntregaCreateManyEntregaAnteriorInputEnvelope = {
    data: Prisma.EntregaCreateManyEntregaAnteriorInput | Prisma.EntregaCreateManyEntregaAnteriorInput[];
    skipDuplicates?: boolean;
};
export type EntregaUpsertWithoutReentregasInput = {
    update: Prisma.XOR<Prisma.EntregaUpdateWithoutReentregasInput, Prisma.EntregaUncheckedUpdateWithoutReentregasInput>;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutReentregasInput, Prisma.EntregaUncheckedCreateWithoutReentregasInput>;
    where?: Prisma.EntregaWhereInput;
};
export type EntregaUpdateToOneWithWhereWithoutReentregasInput = {
    where?: Prisma.EntregaWhereInput;
    data: Prisma.XOR<Prisma.EntregaUpdateWithoutReentregasInput, Prisma.EntregaUncheckedUpdateWithoutReentregasInput>;
};
export type EntregaUpdateWithoutReentregasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutEntregasNestedInput;
    entregaAnterior?: Prisma.EntregaUpdateOneWithoutReentregasNestedInput;
    itens?: Prisma.EntregaItemUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateWithoutReentregasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    itens?: Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUpsertWithWhereUniqueWithoutEntregaAnteriorInput = {
    where: Prisma.EntregaWhereUniqueInput;
    update: Prisma.XOR<Prisma.EntregaUpdateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedUpdateWithoutEntregaAnteriorInput>;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedCreateWithoutEntregaAnteriorInput>;
};
export type EntregaUpdateWithWhereUniqueWithoutEntregaAnteriorInput = {
    where: Prisma.EntregaWhereUniqueInput;
    data: Prisma.XOR<Prisma.EntregaUpdateWithoutEntregaAnteriorInput, Prisma.EntregaUncheckedUpdateWithoutEntregaAnteriorInput>;
};
export type EntregaUpdateManyWithWhereWithoutEntregaAnteriorInput = {
    where: Prisma.EntregaScalarWhereInput;
    data: Prisma.XOR<Prisma.EntregaUpdateManyMutationInput, Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorInput>;
};
export type EntregaCreateWithoutItensInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutEntregasInput;
    entregaAnterior?: Prisma.EntregaCreateNestedOneWithoutReentregasInput;
    reentregas?: Prisma.EntregaCreateNestedManyWithoutEntregaAnteriorInput;
    logsAlteracao?: Prisma.LogAlteracaoCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateWithoutItensInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    reentregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaCreateOrConnectWithoutItensInput = {
    where: Prisma.EntregaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutItensInput, Prisma.EntregaUncheckedCreateWithoutItensInput>;
};
export type EntregaUpsertWithoutItensInput = {
    update: Prisma.XOR<Prisma.EntregaUpdateWithoutItensInput, Prisma.EntregaUncheckedUpdateWithoutItensInput>;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutItensInput, Prisma.EntregaUncheckedCreateWithoutItensInput>;
    where?: Prisma.EntregaWhereInput;
};
export type EntregaUpdateToOneWithWhereWithoutItensInput = {
    where?: Prisma.EntregaWhereInput;
    data: Prisma.XOR<Prisma.EntregaUpdateWithoutItensInput, Prisma.EntregaUncheckedUpdateWithoutItensInput>;
};
export type EntregaUpdateWithoutItensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutEntregasNestedInput;
    entregaAnterior?: Prisma.EntregaUpdateOneWithoutReentregasNestedInput;
    reentregas?: Prisma.EntregaUpdateManyWithoutEntregaAnteriorNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateWithoutItensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reentregas?: Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaCreateWithoutLogsAlteracaoInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutEntregasInput;
    entregaAnterior?: Prisma.EntregaCreateNestedOneWithoutReentregasInput;
    reentregas?: Prisma.EntregaCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemCreateNestedManyWithoutEntregaInput;
};
export type EntregaUncheckedCreateWithoutLogsAlteracaoInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
    reentregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutEntregaAnteriorInput;
    itens?: Prisma.EntregaItemUncheckedCreateNestedManyWithoutEntregaInput;
};
export type EntregaCreateOrConnectWithoutLogsAlteracaoInput = {
    where: Prisma.EntregaWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedCreateWithoutLogsAlteracaoInput>;
};
export type EntregaUpsertWithoutLogsAlteracaoInput = {
    update: Prisma.XOR<Prisma.EntregaUpdateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedUpdateWithoutLogsAlteracaoInput>;
    create: Prisma.XOR<Prisma.EntregaCreateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedCreateWithoutLogsAlteracaoInput>;
    where?: Prisma.EntregaWhereInput;
};
export type EntregaUpdateToOneWithWhereWithoutLogsAlteracaoInput = {
    where?: Prisma.EntregaWhereInput;
    data: Prisma.XOR<Prisma.EntregaUpdateWithoutLogsAlteracaoInput, Prisma.EntregaUncheckedUpdateWithoutLogsAlteracaoInput>;
};
export type EntregaUpdateWithoutLogsAlteracaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutEntregasNestedInput;
    entregaAnterior?: Prisma.EntregaUpdateOneWithoutReentregasNestedInput;
    reentregas?: Prisma.EntregaUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateWithoutLogsAlteracaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reentregas?: Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaCreateManySessaoInput = {
    id?: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    entregaAnteriorId?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
};
export type EntregaUpdateWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    entregaAnterior?: Prisma.EntregaUpdateOneWithoutReentregasNestedInput;
    reentregas?: Prisma.EntregaUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reentregas?: Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateManyWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entregaAnteriorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type EntregaCreateManyEntregaAnteriorInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    entregadorCodigo: string;
    entregadorNome: string;
    status?: string;
    motivoPendencia?: string | null;
    iniciadaEm?: Date | string;
    finalizadaEm?: Date | string | null;
};
export type EntregaUpdateWithoutEntregaAnteriorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutEntregasNestedInput;
    reentregas?: Prisma.EntregaUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateWithoutEntregaAnteriorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reentregas?: Prisma.EntregaUncheckedUpdateManyWithoutEntregaAnteriorNestedInput;
    itens?: Prisma.EntregaItemUncheckedUpdateManyWithoutEntregaNestedInput;
    logsAlteracao?: Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput;
};
export type EntregaUncheckedUpdateManyWithoutEntregaAnteriorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    entregadorNome?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoPendencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iniciadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalizadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type EntregaCountOutputType
 */
export type EntregaCountOutputType = {
    reentregas: number;
    itens: number;
    logsAlteracao: number;
};
export type EntregaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reentregas?: boolean | EntregaCountOutputTypeCountReentregasArgs;
    itens?: boolean | EntregaCountOutputTypeCountItensArgs;
    logsAlteracao?: boolean | EntregaCountOutputTypeCountLogsAlteracaoArgs;
};
/**
 * EntregaCountOutputType without action
 */
export type EntregaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntregaCountOutputType
     */
    select?: Prisma.EntregaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EntregaCountOutputType without action
 */
export type EntregaCountOutputTypeCountReentregasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntregaWhereInput;
};
/**
 * EntregaCountOutputType without action
 */
export type EntregaCountOutputTypeCountItensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntregaItemWhereInput;
};
/**
 * EntregaCountOutputType without action
 */
export type EntregaCountOutputTypeCountLogsAlteracaoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogAlteracaoWhereInput;
};
export type EntregaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    entregadorCodigo?: boolean;
    entregadorNome?: boolean;
    status?: boolean;
    motivoPendencia?: boolean;
    entregaAnteriorId?: boolean;
    iniciadaEm?: boolean;
    finalizadaEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
    reentregas?: boolean | Prisma.Entrega$reentregasArgs<ExtArgs>;
    itens?: boolean | Prisma.Entrega$itensArgs<ExtArgs>;
    logsAlteracao?: boolean | Prisma.Entrega$logsAlteracaoArgs<ExtArgs>;
    _count?: boolean | Prisma.EntregaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["entrega"]>;
export type EntregaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    entregadorCodigo?: boolean;
    entregadorNome?: boolean;
    status?: boolean;
    motivoPendencia?: boolean;
    entregaAnteriorId?: boolean;
    iniciadaEm?: boolean;
    finalizadaEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
}, ExtArgs["result"]["entrega"]>;
export type EntregaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    entregadorCodigo?: boolean;
    entregadorNome?: boolean;
    status?: boolean;
    motivoPendencia?: boolean;
    entregaAnteriorId?: boolean;
    iniciadaEm?: boolean;
    finalizadaEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
}, ExtArgs["result"]["entrega"]>;
export type EntregaSelectScalar = {
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    entregadorCodigo?: boolean;
    entregadorNome?: boolean;
    status?: boolean;
    motivoPendencia?: boolean;
    entregaAnteriorId?: boolean;
    iniciadaEm?: boolean;
    finalizadaEm?: boolean;
};
export type EntregaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessaoId" | "documentoNumero" | "entregadorCodigo" | "entregadorNome" | "status" | "motivoPendencia" | "entregaAnteriorId" | "iniciadaEm" | "finalizadaEm", ExtArgs["result"]["entrega"]>;
export type EntregaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
    reentregas?: boolean | Prisma.Entrega$reentregasArgs<ExtArgs>;
    itens?: boolean | Prisma.Entrega$itensArgs<ExtArgs>;
    logsAlteracao?: boolean | Prisma.Entrega$logsAlteracaoArgs<ExtArgs>;
    _count?: boolean | Prisma.EntregaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EntregaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
};
export type EntregaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
    entregaAnterior?: boolean | Prisma.Entrega$entregaAnteriorArgs<ExtArgs>;
};
export type $EntregaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Entrega";
    objects: {
        sessao: Prisma.$SessaoPayload<ExtArgs>;
        entregaAnterior: Prisma.$EntregaPayload<ExtArgs> | null;
        reentregas: Prisma.$EntregaPayload<ExtArgs>[];
        itens: Prisma.$EntregaItemPayload<ExtArgs>[];
        logsAlteracao: Prisma.$LogAlteracaoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessaoId: string;
        documentoNumero: string;
        entregadorCodigo: string;
        entregadorNome: string;
        status: string;
        motivoPendencia: string | null;
        entregaAnteriorId: string | null;
        iniciadaEm: Date;
        finalizadaEm: Date | null;
    }, ExtArgs["result"]["entrega"]>;
    composites: {};
};
export type EntregaGetPayload<S extends boolean | null | undefined | EntregaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EntregaPayload, S>;
export type EntregaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EntregaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EntregaCountAggregateInputType | true;
};
export interface EntregaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Entrega'];
        meta: {
            name: 'Entrega';
        };
    };
    /**
     * Find zero or one Entrega that matches the filter.
     * @param {EntregaFindUniqueArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntregaFindUniqueArgs>(args: Prisma.SelectSubset<T, EntregaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Entrega that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntregaFindUniqueOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntregaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EntregaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Entrega that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntregaFindFirstArgs>(args?: Prisma.SelectSubset<T, EntregaFindFirstArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Entrega that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindFirstOrThrowArgs} args - Arguments to find a Entrega
     * @example
     * // Get one Entrega
     * const entrega = await prisma.entrega.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntregaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EntregaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Entregas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entregas
     * const entregas = await prisma.entrega.findMany()
     *
     * // Get first 10 Entregas
     * const entregas = await prisma.entrega.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const entregaWithIdOnly = await prisma.entrega.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EntregaFindManyArgs>(args?: Prisma.SelectSubset<T, EntregaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Entrega.
     * @param {EntregaCreateArgs} args - Arguments to create a Entrega.
     * @example
     * // Create one Entrega
     * const Entrega = await prisma.entrega.create({
     *   data: {
     *     // ... data to create a Entrega
     *   }
     * })
     *
     */
    create<T extends EntregaCreateArgs>(args: Prisma.SelectSubset<T, EntregaCreateArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Entregas.
     * @param {EntregaCreateManyArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EntregaCreateManyArgs>(args?: Prisma.SelectSubset<T, EntregaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Entregas and returns the data saved in the database.
     * @param {EntregaCreateManyAndReturnArgs} args - Arguments to create many Entregas.
     * @example
     * // Create many Entregas
     * const entrega = await prisma.entrega.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EntregaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EntregaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Entrega.
     * @param {EntregaDeleteArgs} args - Arguments to delete one Entrega.
     * @example
     * // Delete one Entrega
     * const Entrega = await prisma.entrega.delete({
     *   where: {
     *     // ... filter to delete one Entrega
     *   }
     * })
     *
     */
    delete<T extends EntregaDeleteArgs>(args: Prisma.SelectSubset<T, EntregaDeleteArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Entrega.
     * @param {EntregaUpdateArgs} args - Arguments to update one Entrega.
     * @example
     * // Update one Entrega
     * const entrega = await prisma.entrega.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EntregaUpdateArgs>(args: Prisma.SelectSubset<T, EntregaUpdateArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Entregas.
     * @param {EntregaDeleteManyArgs} args - Arguments to filter Entregas to delete.
     * @example
     * // Delete a few Entregas
     * const { count } = await prisma.entrega.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EntregaDeleteManyArgs>(args?: Prisma.SelectSubset<T, EntregaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EntregaUpdateManyArgs>(args: Prisma.SelectSubset<T, EntregaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Entregas and returns the data updated in the database.
     * @param {EntregaUpdateManyAndReturnArgs} args - Arguments to update many Entregas.
     * @example
     * // Update many Entregas
     * const entrega = await prisma.entrega.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Entregas and only return the `id`
     * const entregaWithIdOnly = await prisma.entrega.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntregaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EntregaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Entrega.
     * @param {EntregaUpsertArgs} args - Arguments to update or create a Entrega.
     * @example
     * // Update or create a Entrega
     * const entrega = await prisma.entrega.upsert({
     *   create: {
     *     // ... data to create a Entrega
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrega we want to update
     *   }
     * })
     */
    upsert<T extends EntregaUpsertArgs>(args: Prisma.SelectSubset<T, EntregaUpsertArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Entregas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaCountArgs} args - Arguments to filter Entregas to count.
     * @example
     * // Count the number of Entregas
     * const count = await prisma.entrega.count({
     *   where: {
     *     // ... the filter for the Entregas we want to count
     *   }
     * })
    **/
    count<T extends EntregaCountArgs>(args?: Prisma.Subset<T, EntregaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EntregaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntregaAggregateArgs>(args: Prisma.Subset<T, EntregaAggregateArgs>): Prisma.PrismaPromise<GetEntregaAggregateType<T>>;
    /**
     * Group by Entrega.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntregaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EntregaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EntregaGroupByArgs['orderBy'];
    } : {
        orderBy?: EntregaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EntregaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntregaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Entrega model
     */
    readonly fields: EntregaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Entrega.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EntregaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessao<T extends Prisma.SessaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessaoDefaultArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    entregaAnterior<T extends Prisma.Entrega$entregaAnteriorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Entrega$entregaAnteriorArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reentregas<T extends Prisma.Entrega$reentregasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Entrega$reentregasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    itens<T extends Prisma.Entrega$itensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Entrega$itensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    logsAlteracao<T extends Prisma.Entrega$logsAlteracaoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Entrega$logsAlteracaoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Entrega model
 */
export interface EntregaFieldRefs {
    readonly id: Prisma.FieldRef<"Entrega", 'String'>;
    readonly sessaoId: Prisma.FieldRef<"Entrega", 'String'>;
    readonly documentoNumero: Prisma.FieldRef<"Entrega", 'String'>;
    readonly entregadorCodigo: Prisma.FieldRef<"Entrega", 'String'>;
    readonly entregadorNome: Prisma.FieldRef<"Entrega", 'String'>;
    readonly status: Prisma.FieldRef<"Entrega", 'String'>;
    readonly motivoPendencia: Prisma.FieldRef<"Entrega", 'String'>;
    readonly entregaAnteriorId: Prisma.FieldRef<"Entrega", 'String'>;
    readonly iniciadaEm: Prisma.FieldRef<"Entrega", 'DateTime'>;
    readonly finalizadaEm: Prisma.FieldRef<"Entrega", 'DateTime'>;
}
/**
 * Entrega findUnique
 */
export type EntregaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter, which Entrega to fetch.
     */
    where: Prisma.EntregaWhereUniqueInput;
};
/**
 * Entrega findUniqueOrThrow
 */
export type EntregaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter, which Entrega to fetch.
     */
    where: Prisma.EntregaWhereUniqueInput;
};
/**
 * Entrega findFirst
 */
export type EntregaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter, which Entrega to fetch.
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Entregas to fetch.
     */
    orderBy?: Prisma.EntregaOrderByWithRelationInput | Prisma.EntregaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Entregas.
     */
    cursor?: Prisma.EntregaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Entregas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Entregas.
     */
    distinct?: Prisma.EntregaScalarFieldEnum | Prisma.EntregaScalarFieldEnum[];
};
/**
 * Entrega findFirstOrThrow
 */
export type EntregaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter, which Entrega to fetch.
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Entregas to fetch.
     */
    orderBy?: Prisma.EntregaOrderByWithRelationInput | Prisma.EntregaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Entregas.
     */
    cursor?: Prisma.EntregaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Entregas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Entregas.
     */
    distinct?: Prisma.EntregaScalarFieldEnum | Prisma.EntregaScalarFieldEnum[];
};
/**
 * Entrega findMany
 */
export type EntregaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter, which Entregas to fetch.
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Entregas to fetch.
     */
    orderBy?: Prisma.EntregaOrderByWithRelationInput | Prisma.EntregaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Entregas.
     */
    cursor?: Prisma.EntregaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Entregas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Entregas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Entregas.
     */
    distinct?: Prisma.EntregaScalarFieldEnum | Prisma.EntregaScalarFieldEnum[];
};
/**
 * Entrega create
 */
export type EntregaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * The data needed to create a Entrega.
     */
    data: Prisma.XOR<Prisma.EntregaCreateInput, Prisma.EntregaUncheckedCreateInput>;
};
/**
 * Entrega createMany
 */
export type EntregaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entregas.
     */
    data: Prisma.EntregaCreateManyInput | Prisma.EntregaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Entrega createManyAndReturn
 */
export type EntregaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * The data used to create many Entregas.
     */
    data: Prisma.EntregaCreateManyInput | Prisma.EntregaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Entrega update
 */
export type EntregaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * The data needed to update a Entrega.
     */
    data: Prisma.XOR<Prisma.EntregaUpdateInput, Prisma.EntregaUncheckedUpdateInput>;
    /**
     * Choose, which Entrega to update.
     */
    where: Prisma.EntregaWhereUniqueInput;
};
/**
 * Entrega updateMany
 */
export type EntregaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Entregas.
     */
    data: Prisma.XOR<Prisma.EntregaUpdateManyMutationInput, Prisma.EntregaUncheckedUpdateManyInput>;
    /**
     * Filter which Entregas to update
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * Limit how many Entregas to update.
     */
    limit?: number;
};
/**
 * Entrega updateManyAndReturn
 */
export type EntregaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * The data used to update Entregas.
     */
    data: Prisma.XOR<Prisma.EntregaUpdateManyMutationInput, Prisma.EntregaUncheckedUpdateManyInput>;
    /**
     * Filter which Entregas to update
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * Limit how many Entregas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Entrega upsert
 */
export type EntregaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * The filter to search for the Entrega to update in case it exists.
     */
    where: Prisma.EntregaWhereUniqueInput;
    /**
     * In case the Entrega found by the `where` argument doesn't exist, create a new Entrega with this data.
     */
    create: Prisma.XOR<Prisma.EntregaCreateInput, Prisma.EntregaUncheckedCreateInput>;
    /**
     * In case the Entrega was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EntregaUpdateInput, Prisma.EntregaUncheckedUpdateInput>;
};
/**
 * Entrega delete
 */
export type EntregaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    /**
     * Filter which Entrega to delete.
     */
    where: Prisma.EntregaWhereUniqueInput;
};
/**
 * Entrega deleteMany
 */
export type EntregaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Entregas to delete
     */
    where?: Prisma.EntregaWhereInput;
    /**
     * Limit how many Entregas to delete.
     */
    limit?: number;
};
/**
 * Entrega.entregaAnterior
 */
export type Entrega$entregaAnteriorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    where?: Prisma.EntregaWhereInput;
};
/**
 * Entrega.reentregas
 */
export type Entrega$reentregasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
    where?: Prisma.EntregaWhereInput;
    orderBy?: Prisma.EntregaOrderByWithRelationInput | Prisma.EntregaOrderByWithRelationInput[];
    cursor?: Prisma.EntregaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntregaScalarFieldEnum | Prisma.EntregaScalarFieldEnum[];
};
/**
 * Entrega.itens
 */
export type Entrega$itensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EntregaItemWhereInput;
    orderBy?: Prisma.EntregaItemOrderByWithRelationInput | Prisma.EntregaItemOrderByWithRelationInput[];
    cursor?: Prisma.EntregaItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntregaItemScalarFieldEnum | Prisma.EntregaItemScalarFieldEnum[];
};
/**
 * Entrega.logsAlteracao
 */
export type Entrega$logsAlteracaoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAlteracao
     */
    select?: Prisma.LogAlteracaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LogAlteracao
     */
    omit?: Prisma.LogAlteracaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogAlteracaoInclude<ExtArgs> | null;
    where?: Prisma.LogAlteracaoWhereInput;
    orderBy?: Prisma.LogAlteracaoOrderByWithRelationInput | Prisma.LogAlteracaoOrderByWithRelationInput[];
    cursor?: Prisma.LogAlteracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LogAlteracaoScalarFieldEnum | Prisma.LogAlteracaoScalarFieldEnum[];
};
/**
 * Entrega without action
 */
export type EntregaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrega
     */
    select?: Prisma.EntregaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Entrega
     */
    omit?: Prisma.EntregaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EntregaInclude<ExtArgs> | null;
};
//# sourceMappingURL=Entrega.d.ts.map