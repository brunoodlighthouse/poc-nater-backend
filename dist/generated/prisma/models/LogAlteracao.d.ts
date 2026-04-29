import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model LogAlteracao
 *
 */
export type LogAlteracaoModel = runtime.Types.Result.DefaultSelection<Prisma.$LogAlteracaoPayload>;
export type AggregateLogAlteracao = {
    _count: LogAlteracaoCountAggregateOutputType | null;
    _min: LogAlteracaoMinAggregateOutputType | null;
    _max: LogAlteracaoMaxAggregateOutputType | null;
};
export type LogAlteracaoMinAggregateOutputType = {
    id: string | null;
    usuarioAdmin: string | null;
    ipOrigem: string | null;
    userAgent: string | null;
    acao: string | null;
    recursoTipo: string | null;
    recursoId: string | null;
    motivo: string | null;
    realizadaEm: Date | null;
};
export type LogAlteracaoMaxAggregateOutputType = {
    id: string | null;
    usuarioAdmin: string | null;
    ipOrigem: string | null;
    userAgent: string | null;
    acao: string | null;
    recursoTipo: string | null;
    recursoId: string | null;
    motivo: string | null;
    realizadaEm: Date | null;
};
export type LogAlteracaoCountAggregateOutputType = {
    id: number;
    usuarioAdmin: number;
    ipOrigem: number;
    userAgent: number;
    acao: number;
    recursoTipo: number;
    recursoId: number;
    dadosAntes: number;
    dadosDepois: number;
    motivo: number;
    realizadaEm: number;
    _all: number;
};
export type LogAlteracaoMinAggregateInputType = {
    id?: true;
    usuarioAdmin?: true;
    ipOrigem?: true;
    userAgent?: true;
    acao?: true;
    recursoTipo?: true;
    recursoId?: true;
    motivo?: true;
    realizadaEm?: true;
};
export type LogAlteracaoMaxAggregateInputType = {
    id?: true;
    usuarioAdmin?: true;
    ipOrigem?: true;
    userAgent?: true;
    acao?: true;
    recursoTipo?: true;
    recursoId?: true;
    motivo?: true;
    realizadaEm?: true;
};
export type LogAlteracaoCountAggregateInputType = {
    id?: true;
    usuarioAdmin?: true;
    ipOrigem?: true;
    userAgent?: true;
    acao?: true;
    recursoTipo?: true;
    recursoId?: true;
    dadosAntes?: true;
    dadosDepois?: true;
    motivo?: true;
    realizadaEm?: true;
    _all?: true;
};
export type LogAlteracaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LogAlteracao to aggregate.
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogAlteracaos to fetch.
     */
    orderBy?: Prisma.LogAlteracaoOrderByWithRelationInput | Prisma.LogAlteracaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LogAlteracaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogAlteracaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogAlteracaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LogAlteracaos
    **/
    _count?: true | LogAlteracaoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LogAlteracaoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LogAlteracaoMaxAggregateInputType;
};
export type GetLogAlteracaoAggregateType<T extends LogAlteracaoAggregateArgs> = {
    [P in keyof T & keyof AggregateLogAlteracao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLogAlteracao[P]> : Prisma.GetScalarType<T[P], AggregateLogAlteracao[P]>;
};
export type LogAlteracaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogAlteracaoWhereInput;
    orderBy?: Prisma.LogAlteracaoOrderByWithAggregationInput | Prisma.LogAlteracaoOrderByWithAggregationInput[];
    by: Prisma.LogAlteracaoScalarFieldEnum[] | Prisma.LogAlteracaoScalarFieldEnum;
    having?: Prisma.LogAlteracaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogAlteracaoCountAggregateInputType | true;
    _min?: LogAlteracaoMinAggregateInputType;
    _max?: LogAlteracaoMaxAggregateInputType;
};
export type LogAlteracaoGroupByOutputType = {
    id: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    recursoId: string;
    dadosAntes: runtime.JsonValue;
    dadosDepois: runtime.JsonValue;
    motivo: string;
    realizadaEm: Date;
    _count: LogAlteracaoCountAggregateOutputType | null;
    _min: LogAlteracaoMinAggregateOutputType | null;
    _max: LogAlteracaoMaxAggregateOutputType | null;
};
export type GetLogAlteracaoGroupByPayload<T extends LogAlteracaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LogAlteracaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LogAlteracaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LogAlteracaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LogAlteracaoGroupByOutputType[P]>;
}>>;
export type LogAlteracaoWhereInput = {
    AND?: Prisma.LogAlteracaoWhereInput | Prisma.LogAlteracaoWhereInput[];
    OR?: Prisma.LogAlteracaoWhereInput[];
    NOT?: Prisma.LogAlteracaoWhereInput | Prisma.LogAlteracaoWhereInput[];
    id?: Prisma.UuidFilter<"LogAlteracao"> | string;
    usuarioAdmin?: Prisma.StringFilter<"LogAlteracao"> | string;
    ipOrigem?: Prisma.StringFilter<"LogAlteracao"> | string;
    userAgent?: Prisma.StringFilter<"LogAlteracao"> | string;
    acao?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoTipo?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoId?: Prisma.UuidFilter<"LogAlteracao"> | string;
    dadosAntes?: Prisma.JsonFilter<"LogAlteracao">;
    dadosDepois?: Prisma.JsonFilter<"LogAlteracao">;
    motivo?: Prisma.StringFilter<"LogAlteracao"> | string;
    realizadaEm?: Prisma.DateTimeFilter<"LogAlteracao"> | Date | string;
    entrega?: Prisma.XOR<Prisma.EntregaNullableScalarRelationFilter, Prisma.EntregaWhereInput> | null;
};
export type LogAlteracaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioAdmin?: Prisma.SortOrder;
    ipOrigem?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    acao?: Prisma.SortOrder;
    recursoTipo?: Prisma.SortOrder;
    recursoId?: Prisma.SortOrder;
    dadosAntes?: Prisma.SortOrder;
    dadosDepois?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    realizadaEm?: Prisma.SortOrder;
    entrega?: Prisma.EntregaOrderByWithRelationInput;
};
export type LogAlteracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LogAlteracaoWhereInput | Prisma.LogAlteracaoWhereInput[];
    OR?: Prisma.LogAlteracaoWhereInput[];
    NOT?: Prisma.LogAlteracaoWhereInput | Prisma.LogAlteracaoWhereInput[];
    usuarioAdmin?: Prisma.StringFilter<"LogAlteracao"> | string;
    ipOrigem?: Prisma.StringFilter<"LogAlteracao"> | string;
    userAgent?: Prisma.StringFilter<"LogAlteracao"> | string;
    acao?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoTipo?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoId?: Prisma.UuidFilter<"LogAlteracao"> | string;
    dadosAntes?: Prisma.JsonFilter<"LogAlteracao">;
    dadosDepois?: Prisma.JsonFilter<"LogAlteracao">;
    motivo?: Prisma.StringFilter<"LogAlteracao"> | string;
    realizadaEm?: Prisma.DateTimeFilter<"LogAlteracao"> | Date | string;
    entrega?: Prisma.XOR<Prisma.EntregaNullableScalarRelationFilter, Prisma.EntregaWhereInput> | null;
}, "id">;
export type LogAlteracaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioAdmin?: Prisma.SortOrder;
    ipOrigem?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    acao?: Prisma.SortOrder;
    recursoTipo?: Prisma.SortOrder;
    recursoId?: Prisma.SortOrder;
    dadosAntes?: Prisma.SortOrder;
    dadosDepois?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    realizadaEm?: Prisma.SortOrder;
    _count?: Prisma.LogAlteracaoCountOrderByAggregateInput;
    _max?: Prisma.LogAlteracaoMaxOrderByAggregateInput;
    _min?: Prisma.LogAlteracaoMinOrderByAggregateInput;
};
export type LogAlteracaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.LogAlteracaoScalarWhereWithAggregatesInput | Prisma.LogAlteracaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.LogAlteracaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LogAlteracaoScalarWhereWithAggregatesInput | Prisma.LogAlteracaoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LogAlteracao"> | string;
    usuarioAdmin?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    ipOrigem?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    userAgent?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    acao?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    recursoTipo?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    recursoId?: Prisma.UuidWithAggregatesFilter<"LogAlteracao"> | string;
    dadosAntes?: Prisma.JsonWithAggregatesFilter<"LogAlteracao">;
    dadosDepois?: Prisma.JsonWithAggregatesFilter<"LogAlteracao">;
    motivo?: Prisma.StringWithAggregatesFilter<"LogAlteracao"> | string;
    realizadaEm?: Prisma.DateTimeWithAggregatesFilter<"LogAlteracao"> | Date | string;
};
export type LogAlteracaoCreateInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
    entrega?: Prisma.EntregaCreateNestedOneWithoutLogsAlteracaoInput;
};
export type LogAlteracaoUncheckedCreateInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    recursoId: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
};
export type LogAlteracaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    entrega?: Prisma.EntregaUpdateOneWithoutLogsAlteracaoNestedInput;
};
export type LogAlteracaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoId?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoCreateManyInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    recursoId: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
};
export type LogAlteracaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoId?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoListRelationFilter = {
    every?: Prisma.LogAlteracaoWhereInput;
    some?: Prisma.LogAlteracaoWhereInput;
    none?: Prisma.LogAlteracaoWhereInput;
};
export type LogAlteracaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LogAlteracaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioAdmin?: Prisma.SortOrder;
    ipOrigem?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    acao?: Prisma.SortOrder;
    recursoTipo?: Prisma.SortOrder;
    recursoId?: Prisma.SortOrder;
    dadosAntes?: Prisma.SortOrder;
    dadosDepois?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    realizadaEm?: Prisma.SortOrder;
};
export type LogAlteracaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioAdmin?: Prisma.SortOrder;
    ipOrigem?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    acao?: Prisma.SortOrder;
    recursoTipo?: Prisma.SortOrder;
    recursoId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    realizadaEm?: Prisma.SortOrder;
};
export type LogAlteracaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioAdmin?: Prisma.SortOrder;
    ipOrigem?: Prisma.SortOrder;
    userAgent?: Prisma.SortOrder;
    acao?: Prisma.SortOrder;
    recursoTipo?: Prisma.SortOrder;
    recursoId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    realizadaEm?: Prisma.SortOrder;
};
export type LogAlteracaoCreateNestedManyWithoutEntregaInput = {
    create?: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput> | Prisma.LogAlteracaoCreateWithoutEntregaInput[] | Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput | Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput[];
    createMany?: Prisma.LogAlteracaoCreateManyEntregaInputEnvelope;
    connect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
};
export type LogAlteracaoUncheckedCreateNestedManyWithoutEntregaInput = {
    create?: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput> | Prisma.LogAlteracaoCreateWithoutEntregaInput[] | Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput | Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput[];
    createMany?: Prisma.LogAlteracaoCreateManyEntregaInputEnvelope;
    connect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
};
export type LogAlteracaoUpdateManyWithoutEntregaNestedInput = {
    create?: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput> | Prisma.LogAlteracaoCreateWithoutEntregaInput[] | Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput | Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput[];
    upsert?: Prisma.LogAlteracaoUpsertWithWhereUniqueWithoutEntregaInput | Prisma.LogAlteracaoUpsertWithWhereUniqueWithoutEntregaInput[];
    createMany?: Prisma.LogAlteracaoCreateManyEntregaInputEnvelope;
    set?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    disconnect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    delete?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    connect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    update?: Prisma.LogAlteracaoUpdateWithWhereUniqueWithoutEntregaInput | Prisma.LogAlteracaoUpdateWithWhereUniqueWithoutEntregaInput[];
    updateMany?: Prisma.LogAlteracaoUpdateManyWithWhereWithoutEntregaInput | Prisma.LogAlteracaoUpdateManyWithWhereWithoutEntregaInput[];
    deleteMany?: Prisma.LogAlteracaoScalarWhereInput | Prisma.LogAlteracaoScalarWhereInput[];
};
export type LogAlteracaoUncheckedUpdateManyWithoutEntregaNestedInput = {
    create?: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput> | Prisma.LogAlteracaoCreateWithoutEntregaInput[] | Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput[];
    connectOrCreate?: Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput | Prisma.LogAlteracaoCreateOrConnectWithoutEntregaInput[];
    upsert?: Prisma.LogAlteracaoUpsertWithWhereUniqueWithoutEntregaInput | Prisma.LogAlteracaoUpsertWithWhereUniqueWithoutEntregaInput[];
    createMany?: Prisma.LogAlteracaoCreateManyEntregaInputEnvelope;
    set?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    disconnect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    delete?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    connect?: Prisma.LogAlteracaoWhereUniqueInput | Prisma.LogAlteracaoWhereUniqueInput[];
    update?: Prisma.LogAlteracaoUpdateWithWhereUniqueWithoutEntregaInput | Prisma.LogAlteracaoUpdateWithWhereUniqueWithoutEntregaInput[];
    updateMany?: Prisma.LogAlteracaoUpdateManyWithWhereWithoutEntregaInput | Prisma.LogAlteracaoUpdateManyWithWhereWithoutEntregaInput[];
    deleteMany?: Prisma.LogAlteracaoScalarWhereInput | Prisma.LogAlteracaoScalarWhereInput[];
};
export type LogAlteracaoCreateWithoutEntregaInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
};
export type LogAlteracaoUncheckedCreateWithoutEntregaInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
};
export type LogAlteracaoCreateOrConnectWithoutEntregaInput = {
    where: Prisma.LogAlteracaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput>;
};
export type LogAlteracaoCreateManyEntregaInputEnvelope = {
    data: Prisma.LogAlteracaoCreateManyEntregaInput | Prisma.LogAlteracaoCreateManyEntregaInput[];
    skipDuplicates?: boolean;
};
export type LogAlteracaoUpsertWithWhereUniqueWithoutEntregaInput = {
    where: Prisma.LogAlteracaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.LogAlteracaoUpdateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedUpdateWithoutEntregaInput>;
    create: Prisma.XOR<Prisma.LogAlteracaoCreateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedCreateWithoutEntregaInput>;
};
export type LogAlteracaoUpdateWithWhereUniqueWithoutEntregaInput = {
    where: Prisma.LogAlteracaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.LogAlteracaoUpdateWithoutEntregaInput, Prisma.LogAlteracaoUncheckedUpdateWithoutEntregaInput>;
};
export type LogAlteracaoUpdateManyWithWhereWithoutEntregaInput = {
    where: Prisma.LogAlteracaoScalarWhereInput;
    data: Prisma.XOR<Prisma.LogAlteracaoUpdateManyMutationInput, Prisma.LogAlteracaoUncheckedUpdateManyWithoutEntregaInput>;
};
export type LogAlteracaoScalarWhereInput = {
    AND?: Prisma.LogAlteracaoScalarWhereInput | Prisma.LogAlteracaoScalarWhereInput[];
    OR?: Prisma.LogAlteracaoScalarWhereInput[];
    NOT?: Prisma.LogAlteracaoScalarWhereInput | Prisma.LogAlteracaoScalarWhereInput[];
    id?: Prisma.UuidFilter<"LogAlteracao"> | string;
    usuarioAdmin?: Prisma.StringFilter<"LogAlteracao"> | string;
    ipOrigem?: Prisma.StringFilter<"LogAlteracao"> | string;
    userAgent?: Prisma.StringFilter<"LogAlteracao"> | string;
    acao?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoTipo?: Prisma.StringFilter<"LogAlteracao"> | string;
    recursoId?: Prisma.UuidFilter<"LogAlteracao"> | string;
    dadosAntes?: Prisma.JsonFilter<"LogAlteracao">;
    dadosDepois?: Prisma.JsonFilter<"LogAlteracao">;
    motivo?: Prisma.StringFilter<"LogAlteracao"> | string;
    realizadaEm?: Prisma.DateTimeFilter<"LogAlteracao"> | Date | string;
};
export type LogAlteracaoCreateManyEntregaInput = {
    id?: string;
    usuarioAdmin: string;
    ipOrigem: string;
    userAgent: string;
    acao: string;
    recursoTipo: string;
    dadosAntes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo: string;
    realizadaEm?: Date | string;
};
export type LogAlteracaoUpdateWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoUncheckedUpdateWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoUncheckedUpdateManyWithoutEntregaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarioAdmin?: Prisma.StringFieldUpdateOperationsInput | string;
    ipOrigem?: Prisma.StringFieldUpdateOperationsInput | string;
    userAgent?: Prisma.StringFieldUpdateOperationsInput | string;
    acao?: Prisma.StringFieldUpdateOperationsInput | string;
    recursoTipo?: Prisma.StringFieldUpdateOperationsInput | string;
    dadosAntes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dadosDepois?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    realizadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LogAlteracaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioAdmin?: boolean;
    ipOrigem?: boolean;
    userAgent?: boolean;
    acao?: boolean;
    recursoTipo?: boolean;
    recursoId?: boolean;
    dadosAntes?: boolean;
    dadosDepois?: boolean;
    motivo?: boolean;
    realizadaEm?: boolean;
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
}, ExtArgs["result"]["logAlteracao"]>;
export type LogAlteracaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioAdmin?: boolean;
    ipOrigem?: boolean;
    userAgent?: boolean;
    acao?: boolean;
    recursoTipo?: boolean;
    recursoId?: boolean;
    dadosAntes?: boolean;
    dadosDepois?: boolean;
    motivo?: boolean;
    realizadaEm?: boolean;
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
}, ExtArgs["result"]["logAlteracao"]>;
export type LogAlteracaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioAdmin?: boolean;
    ipOrigem?: boolean;
    userAgent?: boolean;
    acao?: boolean;
    recursoTipo?: boolean;
    recursoId?: boolean;
    dadosAntes?: boolean;
    dadosDepois?: boolean;
    motivo?: boolean;
    realizadaEm?: boolean;
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
}, ExtArgs["result"]["logAlteracao"]>;
export type LogAlteracaoSelectScalar = {
    id?: boolean;
    usuarioAdmin?: boolean;
    ipOrigem?: boolean;
    userAgent?: boolean;
    acao?: boolean;
    recursoTipo?: boolean;
    recursoId?: boolean;
    dadosAntes?: boolean;
    dadosDepois?: boolean;
    motivo?: boolean;
    realizadaEm?: boolean;
};
export type LogAlteracaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioAdmin" | "ipOrigem" | "userAgent" | "acao" | "recursoTipo" | "recursoId" | "dadosAntes" | "dadosDepois" | "motivo" | "realizadaEm", ExtArgs["result"]["logAlteracao"]>;
export type LogAlteracaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
};
export type LogAlteracaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
};
export type LogAlteracaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    entrega?: boolean | Prisma.LogAlteracao$entregaArgs<ExtArgs>;
};
export type $LogAlteracaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LogAlteracao";
    objects: {
        entrega: Prisma.$EntregaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuarioAdmin: string;
        ipOrigem: string;
        userAgent: string;
        acao: string;
        recursoTipo: string;
        recursoId: string;
        dadosAntes: runtime.JsonValue;
        dadosDepois: runtime.JsonValue;
        motivo: string;
        realizadaEm: Date;
    }, ExtArgs["result"]["logAlteracao"]>;
    composites: {};
};
export type LogAlteracaoGetPayload<S extends boolean | null | undefined | LogAlteracaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload, S>;
export type LogAlteracaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LogAlteracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LogAlteracaoCountAggregateInputType | true;
};
export interface LogAlteracaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LogAlteracao'];
        meta: {
            name: 'LogAlteracao';
        };
    };
    /**
     * Find zero or one LogAlteracao that matches the filter.
     * @param {LogAlteracaoFindUniqueArgs} args - Arguments to find a LogAlteracao
     * @example
     * // Get one LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAlteracaoFindUniqueArgs>(args: Prisma.SelectSubset<T, LogAlteracaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LogAlteracao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAlteracaoFindUniqueOrThrowArgs} args - Arguments to find a LogAlteracao
     * @example
     * // Get one LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAlteracaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LogAlteracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LogAlteracao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoFindFirstArgs} args - Arguments to find a LogAlteracao
     * @example
     * // Get one LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAlteracaoFindFirstArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LogAlteracao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoFindFirstOrThrowArgs} args - Arguments to find a LogAlteracao
     * @example
     * // Get one LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAlteracaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LogAlteracaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAlteracaos
     * const logAlteracaos = await prisma.logAlteracao.findMany()
     *
     * // Get first 10 LogAlteracaos
     * const logAlteracaos = await prisma.logAlteracao.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const logAlteracaoWithIdOnly = await prisma.logAlteracao.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LogAlteracaoFindManyArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LogAlteracao.
     * @param {LogAlteracaoCreateArgs} args - Arguments to create a LogAlteracao.
     * @example
     * // Create one LogAlteracao
     * const LogAlteracao = await prisma.logAlteracao.create({
     *   data: {
     *     // ... data to create a LogAlteracao
     *   }
     * })
     *
     */
    create<T extends LogAlteracaoCreateArgs>(args: Prisma.SelectSubset<T, LogAlteracaoCreateArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LogAlteracaos.
     * @param {LogAlteracaoCreateManyArgs} args - Arguments to create many LogAlteracaos.
     * @example
     * // Create many LogAlteracaos
     * const logAlteracao = await prisma.logAlteracao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LogAlteracaoCreateManyArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LogAlteracaos and returns the data saved in the database.
     * @param {LogAlteracaoCreateManyAndReturnArgs} args - Arguments to create many LogAlteracaos.
     * @example
     * // Create many LogAlteracaos
     * const logAlteracao = await prisma.logAlteracao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LogAlteracaos and only return the `id`
     * const logAlteracaoWithIdOnly = await prisma.logAlteracao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LogAlteracaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LogAlteracao.
     * @param {LogAlteracaoDeleteArgs} args - Arguments to delete one LogAlteracao.
     * @example
     * // Delete one LogAlteracao
     * const LogAlteracao = await prisma.logAlteracao.delete({
     *   where: {
     *     // ... filter to delete one LogAlteracao
     *   }
     * })
     *
     */
    delete<T extends LogAlteracaoDeleteArgs>(args: Prisma.SelectSubset<T, LogAlteracaoDeleteArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LogAlteracao.
     * @param {LogAlteracaoUpdateArgs} args - Arguments to update one LogAlteracao.
     * @example
     * // Update one LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LogAlteracaoUpdateArgs>(args: Prisma.SelectSubset<T, LogAlteracaoUpdateArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LogAlteracaos.
     * @param {LogAlteracaoDeleteManyArgs} args - Arguments to filter LogAlteracaos to delete.
     * @example
     * // Delete a few LogAlteracaos
     * const { count } = await prisma.logAlteracao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LogAlteracaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, LogAlteracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LogAlteracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAlteracaos
     * const logAlteracao = await prisma.logAlteracao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LogAlteracaoUpdateManyArgs>(args: Prisma.SelectSubset<T, LogAlteracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LogAlteracaos and returns the data updated in the database.
     * @param {LogAlteracaoUpdateManyAndReturnArgs} args - Arguments to update many LogAlteracaos.
     * @example
     * // Update many LogAlteracaos
     * const logAlteracao = await prisma.logAlteracao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LogAlteracaos and only return the `id`
     * const logAlteracaoWithIdOnly = await prisma.logAlteracao.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogAlteracaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LogAlteracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LogAlteracao.
     * @param {LogAlteracaoUpsertArgs} args - Arguments to update or create a LogAlteracao.
     * @example
     * // Update or create a LogAlteracao
     * const logAlteracao = await prisma.logAlteracao.upsert({
     *   create: {
     *     // ... data to create a LogAlteracao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAlteracao we want to update
     *   }
     * })
     */
    upsert<T extends LogAlteracaoUpsertArgs>(args: Prisma.SelectSubset<T, LogAlteracaoUpsertArgs<ExtArgs>>): Prisma.Prisma__LogAlteracaoClient<runtime.Types.Result.GetResult<Prisma.$LogAlteracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LogAlteracaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoCountArgs} args - Arguments to filter LogAlteracaos to count.
     * @example
     * // Count the number of LogAlteracaos
     * const count = await prisma.logAlteracao.count({
     *   where: {
     *     // ... the filter for the LogAlteracaos we want to count
     *   }
     * })
    **/
    count<T extends LogAlteracaoCountArgs>(args?: Prisma.Subset<T, LogAlteracaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LogAlteracaoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LogAlteracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAlteracaoAggregateArgs>(args: Prisma.Subset<T, LogAlteracaoAggregateArgs>): Prisma.PrismaPromise<GetLogAlteracaoAggregateType<T>>;
    /**
     * Group by LogAlteracao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAlteracaoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LogAlteracaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LogAlteracaoGroupByArgs['orderBy'];
    } : {
        orderBy?: LogAlteracaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LogAlteracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAlteracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LogAlteracao model
     */
    readonly fields: LogAlteracaoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LogAlteracao.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LogAlteracaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    entrega<T extends Prisma.LogAlteracao$entregaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LogAlteracao$entregaArgs<ExtArgs>>): Prisma.Prisma__EntregaClient<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LogAlteracao model
 */
export interface LogAlteracaoFieldRefs {
    readonly id: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly usuarioAdmin: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly ipOrigem: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly userAgent: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly acao: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly recursoTipo: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly recursoId: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly dadosAntes: Prisma.FieldRef<"LogAlteracao", 'Json'>;
    readonly dadosDepois: Prisma.FieldRef<"LogAlteracao", 'Json'>;
    readonly motivo: Prisma.FieldRef<"LogAlteracao", 'String'>;
    readonly realizadaEm: Prisma.FieldRef<"LogAlteracao", 'DateTime'>;
}
/**
 * LogAlteracao findUnique
 */
export type LogAlteracaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LogAlteracao to fetch.
     */
    where: Prisma.LogAlteracaoWhereUniqueInput;
};
/**
 * LogAlteracao findUniqueOrThrow
 */
export type LogAlteracaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LogAlteracao to fetch.
     */
    where: Prisma.LogAlteracaoWhereUniqueInput;
};
/**
 * LogAlteracao findFirst
 */
export type LogAlteracaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LogAlteracao to fetch.
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogAlteracaos to fetch.
     */
    orderBy?: Prisma.LogAlteracaoOrderByWithRelationInput | Prisma.LogAlteracaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogAlteracaos.
     */
    cursor?: Prisma.LogAlteracaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogAlteracaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogAlteracaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogAlteracaos.
     */
    distinct?: Prisma.LogAlteracaoScalarFieldEnum | Prisma.LogAlteracaoScalarFieldEnum[];
};
/**
 * LogAlteracao findFirstOrThrow
 */
export type LogAlteracaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LogAlteracao to fetch.
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogAlteracaos to fetch.
     */
    orderBy?: Prisma.LogAlteracaoOrderByWithRelationInput | Prisma.LogAlteracaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LogAlteracaos.
     */
    cursor?: Prisma.LogAlteracaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogAlteracaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogAlteracaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogAlteracaos.
     */
    distinct?: Prisma.LogAlteracaoScalarFieldEnum | Prisma.LogAlteracaoScalarFieldEnum[];
};
/**
 * LogAlteracao findMany
 */
export type LogAlteracaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LogAlteracaos to fetch.
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LogAlteracaos to fetch.
     */
    orderBy?: Prisma.LogAlteracaoOrderByWithRelationInput | Prisma.LogAlteracaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LogAlteracaos.
     */
    cursor?: Prisma.LogAlteracaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LogAlteracaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LogAlteracaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LogAlteracaos.
     */
    distinct?: Prisma.LogAlteracaoScalarFieldEnum | Prisma.LogAlteracaoScalarFieldEnum[];
};
/**
 * LogAlteracao create
 */
export type LogAlteracaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LogAlteracao.
     */
    data: Prisma.XOR<Prisma.LogAlteracaoCreateInput, Prisma.LogAlteracaoUncheckedCreateInput>;
};
/**
 * LogAlteracao createMany
 */
export type LogAlteracaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAlteracaos.
     */
    data: Prisma.LogAlteracaoCreateManyInput | Prisma.LogAlteracaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LogAlteracao createManyAndReturn
 */
export type LogAlteracaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAlteracao
     */
    select?: Prisma.LogAlteracaoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LogAlteracao
     */
    omit?: Prisma.LogAlteracaoOmit<ExtArgs> | null;
    /**
     * The data used to create many LogAlteracaos.
     */
    data: Prisma.LogAlteracaoCreateManyInput | Prisma.LogAlteracaoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogAlteracaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LogAlteracao update
 */
export type LogAlteracaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LogAlteracao.
     */
    data: Prisma.XOR<Prisma.LogAlteracaoUpdateInput, Prisma.LogAlteracaoUncheckedUpdateInput>;
    /**
     * Choose, which LogAlteracao to update.
     */
    where: Prisma.LogAlteracaoWhereUniqueInput;
};
/**
 * LogAlteracao updateMany
 */
export type LogAlteracaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAlteracaos.
     */
    data: Prisma.XOR<Prisma.LogAlteracaoUpdateManyMutationInput, Prisma.LogAlteracaoUncheckedUpdateManyInput>;
    /**
     * Filter which LogAlteracaos to update
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * Limit how many LogAlteracaos to update.
     */
    limit?: number;
};
/**
 * LogAlteracao updateManyAndReturn
 */
export type LogAlteracaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAlteracao
     */
    select?: Prisma.LogAlteracaoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LogAlteracao
     */
    omit?: Prisma.LogAlteracaoOmit<ExtArgs> | null;
    /**
     * The data used to update LogAlteracaos.
     */
    data: Prisma.XOR<Prisma.LogAlteracaoUpdateManyMutationInput, Prisma.LogAlteracaoUncheckedUpdateManyInput>;
    /**
     * Filter which LogAlteracaos to update
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * Limit how many LogAlteracaos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogAlteracaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LogAlteracao upsert
 */
export type LogAlteracaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LogAlteracao to update in case it exists.
     */
    where: Prisma.LogAlteracaoWhereUniqueInput;
    /**
     * In case the LogAlteracao found by the `where` argument doesn't exist, create a new LogAlteracao with this data.
     */
    create: Prisma.XOR<Prisma.LogAlteracaoCreateInput, Prisma.LogAlteracaoUncheckedCreateInput>;
    /**
     * In case the LogAlteracao was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LogAlteracaoUpdateInput, Prisma.LogAlteracaoUncheckedUpdateInput>;
};
/**
 * LogAlteracao delete
 */
export type LogAlteracaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LogAlteracao to delete.
     */
    where: Prisma.LogAlteracaoWhereUniqueInput;
};
/**
 * LogAlteracao deleteMany
 */
export type LogAlteracaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LogAlteracaos to delete
     */
    where?: Prisma.LogAlteracaoWhereInput;
    /**
     * Limit how many LogAlteracaos to delete.
     */
    limit?: number;
};
/**
 * LogAlteracao.entrega
 */
export type LogAlteracao$entregaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * LogAlteracao without action
 */
export type LogAlteracaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=LogAlteracao.d.ts.map