import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FilaDocumento
 *
 */
export type FilaDocumentoModel = runtime.Types.Result.DefaultSelection<Prisma.$FilaDocumentoPayload>;
export type AggregateFilaDocumento = {
    _count: FilaDocumentoCountAggregateOutputType | null;
    _avg: FilaDocumentoAvgAggregateOutputType | null;
    _sum: FilaDocumentoSumAggregateOutputType | null;
    _min: FilaDocumentoMinAggregateOutputType | null;
    _max: FilaDocumentoMaxAggregateOutputType | null;
};
export type FilaDocumentoAvgAggregateOutputType = {
    qtdItens: number | null;
};
export type FilaDocumentoSumAggregateOutputType = {
    qtdItens: number | null;
};
export type FilaDocumentoMinAggregateOutputType = {
    id: string | null;
    sessaoId: string | null;
    documentoNumero: string | null;
    documentoChave: string | null;
    clienteNome: string | null;
    qtdItens: number | null;
    status: string | null;
    consultadoEm: Date | null;
    removidoEm: Date | null;
};
export type FilaDocumentoMaxAggregateOutputType = {
    id: string | null;
    sessaoId: string | null;
    documentoNumero: string | null;
    documentoChave: string | null;
    clienteNome: string | null;
    qtdItens: number | null;
    status: string | null;
    consultadoEm: Date | null;
    removidoEm: Date | null;
};
export type FilaDocumentoCountAggregateOutputType = {
    id: number;
    sessaoId: number;
    documentoNumero: number;
    documentoChave: number;
    clienteNome: number;
    qtdItens: number;
    status: number;
    payloadProtheus: number;
    consultadoEm: number;
    removidoEm: number;
    _all: number;
};
export type FilaDocumentoAvgAggregateInputType = {
    qtdItens?: true;
};
export type FilaDocumentoSumAggregateInputType = {
    qtdItens?: true;
};
export type FilaDocumentoMinAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    documentoChave?: true;
    clienteNome?: true;
    qtdItens?: true;
    status?: true;
    consultadoEm?: true;
    removidoEm?: true;
};
export type FilaDocumentoMaxAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    documentoChave?: true;
    clienteNome?: true;
    qtdItens?: true;
    status?: true;
    consultadoEm?: true;
    removidoEm?: true;
};
export type FilaDocumentoCountAggregateInputType = {
    id?: true;
    sessaoId?: true;
    documentoNumero?: true;
    documentoChave?: true;
    clienteNome?: true;
    qtdItens?: true;
    status?: true;
    payloadProtheus?: true;
    consultadoEm?: true;
    removidoEm?: true;
    _all?: true;
};
export type FilaDocumentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FilaDocumento to aggregate.
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilaDocumentos to fetch.
     */
    orderBy?: Prisma.FilaDocumentoOrderByWithRelationInput | Prisma.FilaDocumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FilaDocumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilaDocumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilaDocumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FilaDocumentos
    **/
    _count?: true | FilaDocumentoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FilaDocumentoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FilaDocumentoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FilaDocumentoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FilaDocumentoMaxAggregateInputType;
};
export type GetFilaDocumentoAggregateType<T extends FilaDocumentoAggregateArgs> = {
    [P in keyof T & keyof AggregateFilaDocumento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilaDocumento[P]> : Prisma.GetScalarType<T[P], AggregateFilaDocumento[P]>;
};
export type FilaDocumentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilaDocumentoWhereInput;
    orderBy?: Prisma.FilaDocumentoOrderByWithAggregationInput | Prisma.FilaDocumentoOrderByWithAggregationInput[];
    by: Prisma.FilaDocumentoScalarFieldEnum[] | Prisma.FilaDocumentoScalarFieldEnum;
    having?: Prisma.FilaDocumentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilaDocumentoCountAggregateInputType | true;
    _avg?: FilaDocumentoAvgAggregateInputType;
    _sum?: FilaDocumentoSumAggregateInputType;
    _min?: FilaDocumentoMinAggregateInputType;
    _max?: FilaDocumentoMaxAggregateInputType;
};
export type FilaDocumentoGroupByOutputType = {
    id: string;
    sessaoId: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: runtime.JsonValue;
    consultadoEm: Date;
    removidoEm: Date | null;
    _count: FilaDocumentoCountAggregateOutputType | null;
    _avg: FilaDocumentoAvgAggregateOutputType | null;
    _sum: FilaDocumentoSumAggregateOutputType | null;
    _min: FilaDocumentoMinAggregateOutputType | null;
    _max: FilaDocumentoMaxAggregateOutputType | null;
};
export type GetFilaDocumentoGroupByPayload<T extends FilaDocumentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilaDocumentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilaDocumentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilaDocumentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilaDocumentoGroupByOutputType[P]>;
}>>;
export type FilaDocumentoWhereInput = {
    AND?: Prisma.FilaDocumentoWhereInput | Prisma.FilaDocumentoWhereInput[];
    OR?: Prisma.FilaDocumentoWhereInput[];
    NOT?: Prisma.FilaDocumentoWhereInput | Prisma.FilaDocumentoWhereInput[];
    id?: Prisma.UuidFilter<"FilaDocumento"> | string;
    sessaoId?: Prisma.UuidFilter<"FilaDocumento"> | string;
    documentoNumero?: Prisma.StringFilter<"FilaDocumento"> | string;
    documentoChave?: Prisma.StringFilter<"FilaDocumento"> | string;
    clienteNome?: Prisma.StringFilter<"FilaDocumento"> | string;
    qtdItens?: Prisma.IntFilter<"FilaDocumento"> | number;
    status?: Prisma.StringFilter<"FilaDocumento"> | string;
    payloadProtheus?: Prisma.JsonFilter<"FilaDocumento">;
    consultadoEm?: Prisma.DateTimeFilter<"FilaDocumento"> | Date | string;
    removidoEm?: Prisma.DateTimeNullableFilter<"FilaDocumento"> | Date | string | null;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
};
export type FilaDocumentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    documentoChave?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    qtdItens?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payloadProtheus?: Prisma.SortOrder;
    consultadoEm?: Prisma.SortOrder;
    removidoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    sessao?: Prisma.SessaoOrderByWithRelationInput;
};
export type FilaDocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FilaDocumentoWhereInput | Prisma.FilaDocumentoWhereInput[];
    OR?: Prisma.FilaDocumentoWhereInput[];
    NOT?: Prisma.FilaDocumentoWhereInput | Prisma.FilaDocumentoWhereInput[];
    sessaoId?: Prisma.UuidFilter<"FilaDocumento"> | string;
    documentoNumero?: Prisma.StringFilter<"FilaDocumento"> | string;
    documentoChave?: Prisma.StringFilter<"FilaDocumento"> | string;
    clienteNome?: Prisma.StringFilter<"FilaDocumento"> | string;
    qtdItens?: Prisma.IntFilter<"FilaDocumento"> | number;
    status?: Prisma.StringFilter<"FilaDocumento"> | string;
    payloadProtheus?: Prisma.JsonFilter<"FilaDocumento">;
    consultadoEm?: Prisma.DateTimeFilter<"FilaDocumento"> | Date | string;
    removidoEm?: Prisma.DateTimeNullableFilter<"FilaDocumento"> | Date | string | null;
    sessao?: Prisma.XOR<Prisma.SessaoScalarRelationFilter, Prisma.SessaoWhereInput>;
}, "id">;
export type FilaDocumentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    documentoChave?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    qtdItens?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payloadProtheus?: Prisma.SortOrder;
    consultadoEm?: Prisma.SortOrder;
    removidoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FilaDocumentoCountOrderByAggregateInput;
    _avg?: Prisma.FilaDocumentoAvgOrderByAggregateInput;
    _max?: Prisma.FilaDocumentoMaxOrderByAggregateInput;
    _min?: Prisma.FilaDocumentoMinOrderByAggregateInput;
    _sum?: Prisma.FilaDocumentoSumOrderByAggregateInput;
};
export type FilaDocumentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.FilaDocumentoScalarWhereWithAggregatesInput | Prisma.FilaDocumentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.FilaDocumentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FilaDocumentoScalarWhereWithAggregatesInput | Prisma.FilaDocumentoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"FilaDocumento"> | string;
    sessaoId?: Prisma.UuidWithAggregatesFilter<"FilaDocumento"> | string;
    documentoNumero?: Prisma.StringWithAggregatesFilter<"FilaDocumento"> | string;
    documentoChave?: Prisma.StringWithAggregatesFilter<"FilaDocumento"> | string;
    clienteNome?: Prisma.StringWithAggregatesFilter<"FilaDocumento"> | string;
    qtdItens?: Prisma.IntWithAggregatesFilter<"FilaDocumento"> | number;
    status?: Prisma.StringWithAggregatesFilter<"FilaDocumento"> | string;
    payloadProtheus?: Prisma.JsonWithAggregatesFilter<"FilaDocumento">;
    consultadoEm?: Prisma.DateTimeWithAggregatesFilter<"FilaDocumento"> | Date | string;
    removidoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"FilaDocumento"> | Date | string | null;
};
export type FilaDocumentoCreateInput = {
    id?: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
    sessao: Prisma.SessaoCreateNestedOneWithoutFilaDocumentosInput;
};
export type FilaDocumentoUncheckedCreateInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
};
export type FilaDocumentoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sessao?: Prisma.SessaoUpdateOneRequiredWithoutFilaDocumentosNestedInput;
};
export type FilaDocumentoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoCreateManyInput = {
    id?: string;
    sessaoId: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
};
export type FilaDocumentoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoListRelationFilter = {
    every?: Prisma.FilaDocumentoWhereInput;
    some?: Prisma.FilaDocumentoWhereInput;
    none?: Prisma.FilaDocumentoWhereInput;
};
export type FilaDocumentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FilaDocumentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    documentoChave?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    qtdItens?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    payloadProtheus?: Prisma.SortOrder;
    consultadoEm?: Prisma.SortOrder;
    removidoEm?: Prisma.SortOrder;
};
export type FilaDocumentoAvgOrderByAggregateInput = {
    qtdItens?: Prisma.SortOrder;
};
export type FilaDocumentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    documentoChave?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    qtdItens?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consultadoEm?: Prisma.SortOrder;
    removidoEm?: Prisma.SortOrder;
};
export type FilaDocumentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessaoId?: Prisma.SortOrder;
    documentoNumero?: Prisma.SortOrder;
    documentoChave?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    qtdItens?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    consultadoEm?: Prisma.SortOrder;
    removidoEm?: Prisma.SortOrder;
};
export type FilaDocumentoSumOrderByAggregateInput = {
    qtdItens?: Prisma.SortOrder;
};
export type FilaDocumentoCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput> | Prisma.FilaDocumentoCreateWithoutSessaoInput[] | Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput | Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.FilaDocumentoCreateManySessaoInputEnvelope;
    connect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
};
export type FilaDocumentoUncheckedCreateNestedManyWithoutSessaoInput = {
    create?: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput> | Prisma.FilaDocumentoCreateWithoutSessaoInput[] | Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput | Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput[];
    createMany?: Prisma.FilaDocumentoCreateManySessaoInputEnvelope;
    connect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
};
export type FilaDocumentoUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput> | Prisma.FilaDocumentoCreateWithoutSessaoInput[] | Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput | Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.FilaDocumentoUpsertWithWhereUniqueWithoutSessaoInput | Prisma.FilaDocumentoUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.FilaDocumentoCreateManySessaoInputEnvelope;
    set?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    disconnect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    delete?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    connect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    update?: Prisma.FilaDocumentoUpdateWithWhereUniqueWithoutSessaoInput | Prisma.FilaDocumentoUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.FilaDocumentoUpdateManyWithWhereWithoutSessaoInput | Prisma.FilaDocumentoUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.FilaDocumentoScalarWhereInput | Prisma.FilaDocumentoScalarWhereInput[];
};
export type FilaDocumentoUncheckedUpdateManyWithoutSessaoNestedInput = {
    create?: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput> | Prisma.FilaDocumentoCreateWithoutSessaoInput[] | Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput[];
    connectOrCreate?: Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput | Prisma.FilaDocumentoCreateOrConnectWithoutSessaoInput[];
    upsert?: Prisma.FilaDocumentoUpsertWithWhereUniqueWithoutSessaoInput | Prisma.FilaDocumentoUpsertWithWhereUniqueWithoutSessaoInput[];
    createMany?: Prisma.FilaDocumentoCreateManySessaoInputEnvelope;
    set?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    disconnect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    delete?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    connect?: Prisma.FilaDocumentoWhereUniqueInput | Prisma.FilaDocumentoWhereUniqueInput[];
    update?: Prisma.FilaDocumentoUpdateWithWhereUniqueWithoutSessaoInput | Prisma.FilaDocumentoUpdateWithWhereUniqueWithoutSessaoInput[];
    updateMany?: Prisma.FilaDocumentoUpdateManyWithWhereWithoutSessaoInput | Prisma.FilaDocumentoUpdateManyWithWhereWithoutSessaoInput[];
    deleteMany?: Prisma.FilaDocumentoScalarWhereInput | Prisma.FilaDocumentoScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type FilaDocumentoCreateWithoutSessaoInput = {
    id?: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
};
export type FilaDocumentoUncheckedCreateWithoutSessaoInput = {
    id?: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
};
export type FilaDocumentoCreateOrConnectWithoutSessaoInput = {
    where: Prisma.FilaDocumentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput>;
};
export type FilaDocumentoCreateManySessaoInputEnvelope = {
    data: Prisma.FilaDocumentoCreateManySessaoInput | Prisma.FilaDocumentoCreateManySessaoInput[];
    skipDuplicates?: boolean;
};
export type FilaDocumentoUpsertWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.FilaDocumentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.FilaDocumentoUpdateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedUpdateWithoutSessaoInput>;
    create: Prisma.XOR<Prisma.FilaDocumentoCreateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedCreateWithoutSessaoInput>;
};
export type FilaDocumentoUpdateWithWhereUniqueWithoutSessaoInput = {
    where: Prisma.FilaDocumentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.FilaDocumentoUpdateWithoutSessaoInput, Prisma.FilaDocumentoUncheckedUpdateWithoutSessaoInput>;
};
export type FilaDocumentoUpdateManyWithWhereWithoutSessaoInput = {
    where: Prisma.FilaDocumentoScalarWhereInput;
    data: Prisma.XOR<Prisma.FilaDocumentoUpdateManyMutationInput, Prisma.FilaDocumentoUncheckedUpdateManyWithoutSessaoInput>;
};
export type FilaDocumentoScalarWhereInput = {
    AND?: Prisma.FilaDocumentoScalarWhereInput | Prisma.FilaDocumentoScalarWhereInput[];
    OR?: Prisma.FilaDocumentoScalarWhereInput[];
    NOT?: Prisma.FilaDocumentoScalarWhereInput | Prisma.FilaDocumentoScalarWhereInput[];
    id?: Prisma.UuidFilter<"FilaDocumento"> | string;
    sessaoId?: Prisma.UuidFilter<"FilaDocumento"> | string;
    documentoNumero?: Prisma.StringFilter<"FilaDocumento"> | string;
    documentoChave?: Prisma.StringFilter<"FilaDocumento"> | string;
    clienteNome?: Prisma.StringFilter<"FilaDocumento"> | string;
    qtdItens?: Prisma.IntFilter<"FilaDocumento"> | number;
    status?: Prisma.StringFilter<"FilaDocumento"> | string;
    payloadProtheus?: Prisma.JsonFilter<"FilaDocumento">;
    consultadoEm?: Prisma.DateTimeFilter<"FilaDocumento"> | Date | string;
    removidoEm?: Prisma.DateTimeNullableFilter<"FilaDocumento"> | Date | string | null;
};
export type FilaDocumentoCreateManySessaoInput = {
    id?: string;
    documentoNumero: string;
    documentoChave: string;
    clienteNome: string;
    qtdItens: number;
    status: string;
    payloadProtheus: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Date | string;
    removidoEm?: Date | string | null;
};
export type FilaDocumentoUpdateWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoUncheckedUpdateWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoUncheckedUpdateManyWithoutSessaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoNumero?: Prisma.StringFieldUpdateOperationsInput | string;
    documentoChave?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    qtdItens?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    payloadProtheus?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    consultadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    removidoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type FilaDocumentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    documentoChave?: boolean;
    clienteNome?: boolean;
    qtdItens?: boolean;
    status?: boolean;
    payloadProtheus?: boolean;
    consultadoEm?: boolean;
    removidoEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["filaDocumento"]>;
export type FilaDocumentoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    documentoChave?: boolean;
    clienteNome?: boolean;
    qtdItens?: boolean;
    status?: boolean;
    payloadProtheus?: boolean;
    consultadoEm?: boolean;
    removidoEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["filaDocumento"]>;
export type FilaDocumentoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    documentoChave?: boolean;
    clienteNome?: boolean;
    qtdItens?: boolean;
    status?: boolean;
    payloadProtheus?: boolean;
    consultadoEm?: boolean;
    removidoEm?: boolean;
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["filaDocumento"]>;
export type FilaDocumentoSelectScalar = {
    id?: boolean;
    sessaoId?: boolean;
    documentoNumero?: boolean;
    documentoChave?: boolean;
    clienteNome?: boolean;
    qtdItens?: boolean;
    status?: boolean;
    payloadProtheus?: boolean;
    consultadoEm?: boolean;
    removidoEm?: boolean;
};
export type FilaDocumentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessaoId" | "documentoNumero" | "documentoChave" | "clienteNome" | "qtdItens" | "status" | "payloadProtheus" | "consultadoEm" | "removidoEm", ExtArgs["result"]["filaDocumento"]>;
export type FilaDocumentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
};
export type FilaDocumentoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
};
export type FilaDocumentoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sessao?: boolean | Prisma.SessaoDefaultArgs<ExtArgs>;
};
export type $FilaDocumentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FilaDocumento";
    objects: {
        sessao: Prisma.$SessaoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessaoId: string;
        documentoNumero: string;
        documentoChave: string;
        clienteNome: string;
        qtdItens: number;
        status: string;
        payloadProtheus: runtime.JsonValue;
        consultadoEm: Date;
        removidoEm: Date | null;
    }, ExtArgs["result"]["filaDocumento"]>;
    composites: {};
};
export type FilaDocumentoGetPayload<S extends boolean | null | undefined | FilaDocumentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload, S>;
export type FilaDocumentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FilaDocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilaDocumentoCountAggregateInputType | true;
};
export interface FilaDocumentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FilaDocumento'];
        meta: {
            name: 'FilaDocumento';
        };
    };
    /**
     * Find zero or one FilaDocumento that matches the filter.
     * @param {FilaDocumentoFindUniqueArgs} args - Arguments to find a FilaDocumento
     * @example
     * // Get one FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilaDocumentoFindUniqueArgs>(args: Prisma.SelectSubset<T, FilaDocumentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FilaDocumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilaDocumentoFindUniqueOrThrowArgs} args - Arguments to find a FilaDocumento
     * @example
     * // Get one FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilaDocumentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FilaDocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FilaDocumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoFindFirstArgs} args - Arguments to find a FilaDocumento
     * @example
     * // Get one FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilaDocumentoFindFirstArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FilaDocumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoFindFirstOrThrowArgs} args - Arguments to find a FilaDocumento
     * @example
     * // Get one FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilaDocumentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FilaDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilaDocumentos
     * const filaDocumentos = await prisma.filaDocumento.findMany()
     *
     * // Get first 10 FilaDocumentos
     * const filaDocumentos = await prisma.filaDocumento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const filaDocumentoWithIdOnly = await prisma.filaDocumento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FilaDocumentoFindManyArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FilaDocumento.
     * @param {FilaDocumentoCreateArgs} args - Arguments to create a FilaDocumento.
     * @example
     * // Create one FilaDocumento
     * const FilaDocumento = await prisma.filaDocumento.create({
     *   data: {
     *     // ... data to create a FilaDocumento
     *   }
     * })
     *
     */
    create<T extends FilaDocumentoCreateArgs>(args: Prisma.SelectSubset<T, FilaDocumentoCreateArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FilaDocumentos.
     * @param {FilaDocumentoCreateManyArgs} args - Arguments to create many FilaDocumentos.
     * @example
     * // Create many FilaDocumentos
     * const filaDocumento = await prisma.filaDocumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FilaDocumentoCreateManyArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FilaDocumentos and returns the data saved in the database.
     * @param {FilaDocumentoCreateManyAndReturnArgs} args - Arguments to create many FilaDocumentos.
     * @example
     * // Create many FilaDocumentos
     * const filaDocumento = await prisma.filaDocumento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FilaDocumentos and only return the `id`
     * const filaDocumentoWithIdOnly = await prisma.filaDocumento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FilaDocumentoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FilaDocumento.
     * @param {FilaDocumentoDeleteArgs} args - Arguments to delete one FilaDocumento.
     * @example
     * // Delete one FilaDocumento
     * const FilaDocumento = await prisma.filaDocumento.delete({
     *   where: {
     *     // ... filter to delete one FilaDocumento
     *   }
     * })
     *
     */
    delete<T extends FilaDocumentoDeleteArgs>(args: Prisma.SelectSubset<T, FilaDocumentoDeleteArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FilaDocumento.
     * @param {FilaDocumentoUpdateArgs} args - Arguments to update one FilaDocumento.
     * @example
     * // Update one FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FilaDocumentoUpdateArgs>(args: Prisma.SelectSubset<T, FilaDocumentoUpdateArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FilaDocumentos.
     * @param {FilaDocumentoDeleteManyArgs} args - Arguments to filter FilaDocumentos to delete.
     * @example
     * // Delete a few FilaDocumentos
     * const { count } = await prisma.filaDocumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FilaDocumentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, FilaDocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FilaDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilaDocumentos
     * const filaDocumento = await prisma.filaDocumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FilaDocumentoUpdateManyArgs>(args: Prisma.SelectSubset<T, FilaDocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FilaDocumentos and returns the data updated in the database.
     * @param {FilaDocumentoUpdateManyAndReturnArgs} args - Arguments to update many FilaDocumentos.
     * @example
     * // Update many FilaDocumentos
     * const filaDocumento = await prisma.filaDocumento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FilaDocumentos and only return the `id`
     * const filaDocumentoWithIdOnly = await prisma.filaDocumento.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilaDocumentoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FilaDocumentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FilaDocumento.
     * @param {FilaDocumentoUpsertArgs} args - Arguments to update or create a FilaDocumento.
     * @example
     * // Update or create a FilaDocumento
     * const filaDocumento = await prisma.filaDocumento.upsert({
     *   create: {
     *     // ... data to create a FilaDocumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilaDocumento we want to update
     *   }
     * })
     */
    upsert<T extends FilaDocumentoUpsertArgs>(args: Prisma.SelectSubset<T, FilaDocumentoUpsertArgs<ExtArgs>>): Prisma.Prisma__FilaDocumentoClient<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FilaDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoCountArgs} args - Arguments to filter FilaDocumentos to count.
     * @example
     * // Count the number of FilaDocumentos
     * const count = await prisma.filaDocumento.count({
     *   where: {
     *     // ... the filter for the FilaDocumentos we want to count
     *   }
     * })
    **/
    count<T extends FilaDocumentoCountArgs>(args?: Prisma.Subset<T, FilaDocumentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilaDocumentoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FilaDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilaDocumentoAggregateArgs>(args: Prisma.Subset<T, FilaDocumentoAggregateArgs>): Prisma.PrismaPromise<GetFilaDocumentoAggregateType<T>>;
    /**
     * Group by FilaDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaDocumentoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FilaDocumentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FilaDocumentoGroupByArgs['orderBy'];
    } : {
        orderBy?: FilaDocumentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FilaDocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilaDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FilaDocumento model
     */
    readonly fields: FilaDocumentoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FilaDocumento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FilaDocumentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessao<T extends Prisma.SessaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessaoDefaultArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the FilaDocumento model
 */
export interface FilaDocumentoFieldRefs {
    readonly id: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly sessaoId: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly documentoNumero: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly documentoChave: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly clienteNome: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly qtdItens: Prisma.FieldRef<"FilaDocumento", 'Int'>;
    readonly status: Prisma.FieldRef<"FilaDocumento", 'String'>;
    readonly payloadProtheus: Prisma.FieldRef<"FilaDocumento", 'Json'>;
    readonly consultadoEm: Prisma.FieldRef<"FilaDocumento", 'DateTime'>;
    readonly removidoEm: Prisma.FieldRef<"FilaDocumento", 'DateTime'>;
}
/**
 * FilaDocumento findUnique
 */
export type FilaDocumentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter, which FilaDocumento to fetch.
     */
    where: Prisma.FilaDocumentoWhereUniqueInput;
};
/**
 * FilaDocumento findUniqueOrThrow
 */
export type FilaDocumentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter, which FilaDocumento to fetch.
     */
    where: Prisma.FilaDocumentoWhereUniqueInput;
};
/**
 * FilaDocumento findFirst
 */
export type FilaDocumentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter, which FilaDocumento to fetch.
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilaDocumentos to fetch.
     */
    orderBy?: Prisma.FilaDocumentoOrderByWithRelationInput | Prisma.FilaDocumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FilaDocumentos.
     */
    cursor?: Prisma.FilaDocumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilaDocumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilaDocumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilaDocumentos.
     */
    distinct?: Prisma.FilaDocumentoScalarFieldEnum | Prisma.FilaDocumentoScalarFieldEnum[];
};
/**
 * FilaDocumento findFirstOrThrow
 */
export type FilaDocumentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter, which FilaDocumento to fetch.
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilaDocumentos to fetch.
     */
    orderBy?: Prisma.FilaDocumentoOrderByWithRelationInput | Prisma.FilaDocumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FilaDocumentos.
     */
    cursor?: Prisma.FilaDocumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilaDocumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilaDocumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilaDocumentos.
     */
    distinct?: Prisma.FilaDocumentoScalarFieldEnum | Prisma.FilaDocumentoScalarFieldEnum[];
};
/**
 * FilaDocumento findMany
 */
export type FilaDocumentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter, which FilaDocumentos to fetch.
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilaDocumentos to fetch.
     */
    orderBy?: Prisma.FilaDocumentoOrderByWithRelationInput | Prisma.FilaDocumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FilaDocumentos.
     */
    cursor?: Prisma.FilaDocumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilaDocumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilaDocumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilaDocumentos.
     */
    distinct?: Prisma.FilaDocumentoScalarFieldEnum | Prisma.FilaDocumentoScalarFieldEnum[];
};
/**
 * FilaDocumento create
 */
export type FilaDocumentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * The data needed to create a FilaDocumento.
     */
    data: Prisma.XOR<Prisma.FilaDocumentoCreateInput, Prisma.FilaDocumentoUncheckedCreateInput>;
};
/**
 * FilaDocumento createMany
 */
export type FilaDocumentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilaDocumentos.
     */
    data: Prisma.FilaDocumentoCreateManyInput | Prisma.FilaDocumentoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FilaDocumento createManyAndReturn
 */
export type FilaDocumentoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * The data used to create many FilaDocumentos.
     */
    data: Prisma.FilaDocumentoCreateManyInput | Prisma.FilaDocumentoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FilaDocumento update
 */
export type FilaDocumentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * The data needed to update a FilaDocumento.
     */
    data: Prisma.XOR<Prisma.FilaDocumentoUpdateInput, Prisma.FilaDocumentoUncheckedUpdateInput>;
    /**
     * Choose, which FilaDocumento to update.
     */
    where: Prisma.FilaDocumentoWhereUniqueInput;
};
/**
 * FilaDocumento updateMany
 */
export type FilaDocumentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FilaDocumentos.
     */
    data: Prisma.XOR<Prisma.FilaDocumentoUpdateManyMutationInput, Prisma.FilaDocumentoUncheckedUpdateManyInput>;
    /**
     * Filter which FilaDocumentos to update
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * Limit how many FilaDocumentos to update.
     */
    limit?: number;
};
/**
 * FilaDocumento updateManyAndReturn
 */
export type FilaDocumentoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * The data used to update FilaDocumentos.
     */
    data: Prisma.XOR<Prisma.FilaDocumentoUpdateManyMutationInput, Prisma.FilaDocumentoUncheckedUpdateManyInput>;
    /**
     * Filter which FilaDocumentos to update
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * Limit how many FilaDocumentos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FilaDocumento upsert
 */
export type FilaDocumentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * The filter to search for the FilaDocumento to update in case it exists.
     */
    where: Prisma.FilaDocumentoWhereUniqueInput;
    /**
     * In case the FilaDocumento found by the `where` argument doesn't exist, create a new FilaDocumento with this data.
     */
    create: Prisma.XOR<Prisma.FilaDocumentoCreateInput, Prisma.FilaDocumentoUncheckedCreateInput>;
    /**
     * In case the FilaDocumento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FilaDocumentoUpdateInput, Prisma.FilaDocumentoUncheckedUpdateInput>;
};
/**
 * FilaDocumento delete
 */
export type FilaDocumentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
    /**
     * Filter which FilaDocumento to delete.
     */
    where: Prisma.FilaDocumentoWhereUniqueInput;
};
/**
 * FilaDocumento deleteMany
 */
export type FilaDocumentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FilaDocumentos to delete
     */
    where?: Prisma.FilaDocumentoWhereInput;
    /**
     * Limit how many FilaDocumentos to delete.
     */
    limit?: number;
};
/**
 * FilaDocumento without action
 */
export type FilaDocumentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaDocumento
     */
    select?: Prisma.FilaDocumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilaDocumento
     */
    omit?: Prisma.FilaDocumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FilaDocumentoInclude<ExtArgs> | null;
};
//# sourceMappingURL=FilaDocumento.d.ts.map