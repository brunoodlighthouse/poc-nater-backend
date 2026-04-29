import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Sessao
 *
 */
export type SessaoModel = runtime.Types.Result.DefaultSelection<Prisma.$SessaoPayload>;
export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null;
    _min: SessaoMinAggregateOutputType | null;
    _max: SessaoMaxAggregateOutputType | null;
};
export type SessaoMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    lojaCodigo: string | null;
    lojaNome: string | null;
    dispositivoId: string | null;
    criadaEm: Date | null;
    ultimaAtividadeEm: Date | null;
    revogadaEm: Date | null;
};
export type SessaoMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    lojaCodigo: string | null;
    lojaNome: string | null;
    dispositivoId: string | null;
    criadaEm: Date | null;
    ultimaAtividadeEm: Date | null;
    revogadaEm: Date | null;
};
export type SessaoCountAggregateOutputType = {
    id: number;
    token: number;
    lojaCodigo: number;
    lojaNome: number;
    dispositivoId: number;
    criadaEm: number;
    ultimaAtividadeEm: number;
    revogadaEm: number;
    _all: number;
};
export type SessaoMinAggregateInputType = {
    id?: true;
    token?: true;
    lojaCodigo?: true;
    lojaNome?: true;
    dispositivoId?: true;
    criadaEm?: true;
    ultimaAtividadeEm?: true;
    revogadaEm?: true;
};
export type SessaoMaxAggregateInputType = {
    id?: true;
    token?: true;
    lojaCodigo?: true;
    lojaNome?: true;
    dispositivoId?: true;
    criadaEm?: true;
    ultimaAtividadeEm?: true;
    revogadaEm?: true;
};
export type SessaoCountAggregateInputType = {
    id?: true;
    token?: true;
    lojaCodigo?: true;
    lojaNome?: true;
    dispositivoId?: true;
    criadaEm?: true;
    ultimaAtividadeEm?: true;
    revogadaEm?: true;
    _all?: true;
};
export type SessaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: Prisma.SessaoOrderByWithRelationInput | Prisma.SessaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SessaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType;
};
export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
    [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSessao[P]> : Prisma.GetScalarType<T[P], AggregateSessao[P]>;
};
export type SessaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SessaoWhereInput;
    orderBy?: Prisma.SessaoOrderByWithAggregationInput | Prisma.SessaoOrderByWithAggregationInput[];
    by: Prisma.SessaoScalarFieldEnum[] | Prisma.SessaoScalarFieldEnum;
    having?: Prisma.SessaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessaoCountAggregateInputType | true;
    _min?: SessaoMinAggregateInputType;
    _max?: SessaoMaxAggregateInputType;
};
export type SessaoGroupByOutputType = {
    id: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm: Date;
    ultimaAtividadeEm: Date;
    revogadaEm: Date | null;
    _count: SessaoCountAggregateOutputType | null;
    _min: SessaoMinAggregateOutputType | null;
    _max: SessaoMaxAggregateOutputType | null;
};
export type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessaoGroupByOutputType[P]>;
}>>;
export type SessaoWhereInput = {
    AND?: Prisma.SessaoWhereInput | Prisma.SessaoWhereInput[];
    OR?: Prisma.SessaoWhereInput[];
    NOT?: Prisma.SessaoWhereInput | Prisma.SessaoWhereInput[];
    id?: Prisma.UuidFilter<"Sessao"> | string;
    token?: Prisma.StringFilter<"Sessao"> | string;
    lojaCodigo?: Prisma.StringFilter<"Sessao"> | string;
    lojaNome?: Prisma.StringFilter<"Sessao"> | string;
    dispositivoId?: Prisma.StringFilter<"Sessao"> | string;
    criadaEm?: Prisma.DateTimeFilter<"Sessao"> | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFilter<"Sessao"> | Date | string;
    revogadaEm?: Prisma.DateTimeNullableFilter<"Sessao"> | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoListRelationFilter;
    entregas?: Prisma.EntregaListRelationFilter;
};
export type SessaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    lojaCodigo?: Prisma.SortOrder;
    lojaNome?: Prisma.SortOrder;
    dispositivoId?: Prisma.SortOrder;
    criadaEm?: Prisma.SortOrder;
    ultimaAtividadeEm?: Prisma.SortOrder;
    revogadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    filaDocumentos?: Prisma.FilaDocumentoOrderByRelationAggregateInput;
    entregas?: Prisma.EntregaOrderByRelationAggregateInput;
};
export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    dispositivoId?: string;
    AND?: Prisma.SessaoWhereInput | Prisma.SessaoWhereInput[];
    OR?: Prisma.SessaoWhereInput[];
    NOT?: Prisma.SessaoWhereInput | Prisma.SessaoWhereInput[];
    lojaCodigo?: Prisma.StringFilter<"Sessao"> | string;
    lojaNome?: Prisma.StringFilter<"Sessao"> | string;
    criadaEm?: Prisma.DateTimeFilter<"Sessao"> | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFilter<"Sessao"> | Date | string;
    revogadaEm?: Prisma.DateTimeNullableFilter<"Sessao"> | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoListRelationFilter;
    entregas?: Prisma.EntregaListRelationFilter;
}, "id" | "token" | "dispositivoId">;
export type SessaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    lojaCodigo?: Prisma.SortOrder;
    lojaNome?: Prisma.SortOrder;
    dispositivoId?: Prisma.SortOrder;
    criadaEm?: Prisma.SortOrder;
    ultimaAtividadeEm?: Prisma.SortOrder;
    revogadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.SessaoCountOrderByAggregateInput;
    _max?: Prisma.SessaoMaxOrderByAggregateInput;
    _min?: Prisma.SessaoMinOrderByAggregateInput;
};
export type SessaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.SessaoScalarWhereWithAggregatesInput | Prisma.SessaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.SessaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SessaoScalarWhereWithAggregatesInput | Prisma.SessaoScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Sessao"> | string;
    token?: Prisma.StringWithAggregatesFilter<"Sessao"> | string;
    lojaCodigo?: Prisma.StringWithAggregatesFilter<"Sessao"> | string;
    lojaNome?: Prisma.StringWithAggregatesFilter<"Sessao"> | string;
    dispositivoId?: Prisma.StringWithAggregatesFilter<"Sessao"> | string;
    criadaEm?: Prisma.DateTimeWithAggregatesFilter<"Sessao"> | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeWithAggregatesFilter<"Sessao"> | Date | string;
    revogadaEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Sessao"> | Date | string | null;
};
export type SessaoCreateInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoCreateNestedManyWithoutSessaoInput;
    entregas?: Prisma.EntregaCreateNestedManyWithoutSessaoInput;
};
export type SessaoUncheckedCreateInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUncheckedCreateNestedManyWithoutSessaoInput;
    entregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutSessaoInput;
};
export type SessaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUpdateManyWithoutSessaoNestedInput;
    entregas?: Prisma.EntregaUpdateManyWithoutSessaoNestedInput;
};
export type SessaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUncheckedUpdateManyWithoutSessaoNestedInput;
    entregas?: Prisma.EntregaUncheckedUpdateManyWithoutSessaoNestedInput;
};
export type SessaoCreateManyInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
};
export type SessaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type SessaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    lojaCodigo?: Prisma.SortOrder;
    lojaNome?: Prisma.SortOrder;
    dispositivoId?: Prisma.SortOrder;
    criadaEm?: Prisma.SortOrder;
    ultimaAtividadeEm?: Prisma.SortOrder;
    revogadaEm?: Prisma.SortOrder;
};
export type SessaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    lojaCodigo?: Prisma.SortOrder;
    lojaNome?: Prisma.SortOrder;
    dispositivoId?: Prisma.SortOrder;
    criadaEm?: Prisma.SortOrder;
    ultimaAtividadeEm?: Prisma.SortOrder;
    revogadaEm?: Prisma.SortOrder;
};
export type SessaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    lojaCodigo?: Prisma.SortOrder;
    lojaNome?: Prisma.SortOrder;
    dispositivoId?: Prisma.SortOrder;
    criadaEm?: Prisma.SortOrder;
    ultimaAtividadeEm?: Prisma.SortOrder;
    revogadaEm?: Prisma.SortOrder;
};
export type SessaoScalarRelationFilter = {
    is?: Prisma.SessaoWhereInput;
    isNot?: Prisma.SessaoWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SessaoCreateNestedOneWithoutFilaDocumentosInput = {
    create?: Prisma.XOR<Prisma.SessaoCreateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedCreateWithoutFilaDocumentosInput>;
    connectOrCreate?: Prisma.SessaoCreateOrConnectWithoutFilaDocumentosInput;
    connect?: Prisma.SessaoWhereUniqueInput;
};
export type SessaoUpdateOneRequiredWithoutFilaDocumentosNestedInput = {
    create?: Prisma.XOR<Prisma.SessaoCreateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedCreateWithoutFilaDocumentosInput>;
    connectOrCreate?: Prisma.SessaoCreateOrConnectWithoutFilaDocumentosInput;
    upsert?: Prisma.SessaoUpsertWithoutFilaDocumentosInput;
    connect?: Prisma.SessaoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SessaoUpdateToOneWithWhereWithoutFilaDocumentosInput, Prisma.SessaoUpdateWithoutFilaDocumentosInput>, Prisma.SessaoUncheckedUpdateWithoutFilaDocumentosInput>;
};
export type SessaoCreateNestedOneWithoutEntregasInput = {
    create?: Prisma.XOR<Prisma.SessaoCreateWithoutEntregasInput, Prisma.SessaoUncheckedCreateWithoutEntregasInput>;
    connectOrCreate?: Prisma.SessaoCreateOrConnectWithoutEntregasInput;
    connect?: Prisma.SessaoWhereUniqueInput;
};
export type SessaoUpdateOneRequiredWithoutEntregasNestedInput = {
    create?: Prisma.XOR<Prisma.SessaoCreateWithoutEntregasInput, Prisma.SessaoUncheckedCreateWithoutEntregasInput>;
    connectOrCreate?: Prisma.SessaoCreateOrConnectWithoutEntregasInput;
    upsert?: Prisma.SessaoUpsertWithoutEntregasInput;
    connect?: Prisma.SessaoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SessaoUpdateToOneWithWhereWithoutEntregasInput, Prisma.SessaoUpdateWithoutEntregasInput>, Prisma.SessaoUncheckedUpdateWithoutEntregasInput>;
};
export type SessaoCreateWithoutFilaDocumentosInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    entregas?: Prisma.EntregaCreateNestedManyWithoutSessaoInput;
};
export type SessaoUncheckedCreateWithoutFilaDocumentosInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    entregas?: Prisma.EntregaUncheckedCreateNestedManyWithoutSessaoInput;
};
export type SessaoCreateOrConnectWithoutFilaDocumentosInput = {
    where: Prisma.SessaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessaoCreateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedCreateWithoutFilaDocumentosInput>;
};
export type SessaoUpsertWithoutFilaDocumentosInput = {
    update: Prisma.XOR<Prisma.SessaoUpdateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedUpdateWithoutFilaDocumentosInput>;
    create: Prisma.XOR<Prisma.SessaoCreateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedCreateWithoutFilaDocumentosInput>;
    where?: Prisma.SessaoWhereInput;
};
export type SessaoUpdateToOneWithWhereWithoutFilaDocumentosInput = {
    where?: Prisma.SessaoWhereInput;
    data: Prisma.XOR<Prisma.SessaoUpdateWithoutFilaDocumentosInput, Prisma.SessaoUncheckedUpdateWithoutFilaDocumentosInput>;
};
export type SessaoUpdateWithoutFilaDocumentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    entregas?: Prisma.EntregaUpdateManyWithoutSessaoNestedInput;
};
export type SessaoUncheckedUpdateWithoutFilaDocumentosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    entregas?: Prisma.EntregaUncheckedUpdateManyWithoutSessaoNestedInput;
};
export type SessaoCreateWithoutEntregasInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoCreateNestedManyWithoutSessaoInput;
};
export type SessaoUncheckedCreateWithoutEntregasInput = {
    id?: string;
    token: string;
    lojaCodigo: string;
    lojaNome: string;
    dispositivoId: string;
    criadaEm?: Date | string;
    ultimaAtividadeEm?: Date | string;
    revogadaEm?: Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUncheckedCreateNestedManyWithoutSessaoInput;
};
export type SessaoCreateOrConnectWithoutEntregasInput = {
    where: Prisma.SessaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.SessaoCreateWithoutEntregasInput, Prisma.SessaoUncheckedCreateWithoutEntregasInput>;
};
export type SessaoUpsertWithoutEntregasInput = {
    update: Prisma.XOR<Prisma.SessaoUpdateWithoutEntregasInput, Prisma.SessaoUncheckedUpdateWithoutEntregasInput>;
    create: Prisma.XOR<Prisma.SessaoCreateWithoutEntregasInput, Prisma.SessaoUncheckedCreateWithoutEntregasInput>;
    where?: Prisma.SessaoWhereInput;
};
export type SessaoUpdateToOneWithWhereWithoutEntregasInput = {
    where?: Prisma.SessaoWhereInput;
    data: Prisma.XOR<Prisma.SessaoUpdateWithoutEntregasInput, Prisma.SessaoUncheckedUpdateWithoutEntregasInput>;
};
export type SessaoUpdateWithoutEntregasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUpdateManyWithoutSessaoNestedInput;
};
export type SessaoUncheckedUpdateWithoutEntregasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaCodigo?: Prisma.StringFieldUpdateOperationsInput | string;
    lojaNome?: Prisma.StringFieldUpdateOperationsInput | string;
    dispositivoId?: Prisma.StringFieldUpdateOperationsInput | string;
    criadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ultimaAtividadeEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revogadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    filaDocumentos?: Prisma.FilaDocumentoUncheckedUpdateManyWithoutSessaoNestedInput;
};
/**
 * Count Type SessaoCountOutputType
 */
export type SessaoCountOutputType = {
    filaDocumentos: number;
    entregas: number;
};
export type SessaoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filaDocumentos?: boolean | SessaoCountOutputTypeCountFilaDocumentosArgs;
    entregas?: boolean | SessaoCountOutputTypeCountEntregasArgs;
};
/**
 * SessaoCountOutputType without action
 */
export type SessaoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessaoCountOutputType
     */
    select?: Prisma.SessaoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SessaoCountOutputType without action
 */
export type SessaoCountOutputTypeCountFilaDocumentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilaDocumentoWhereInput;
};
/**
 * SessaoCountOutputType without action
 */
export type SessaoCountOutputTypeCountEntregasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntregaWhereInput;
};
export type SessaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    lojaCodigo?: boolean;
    lojaNome?: boolean;
    dispositivoId?: boolean;
    criadaEm?: boolean;
    ultimaAtividadeEm?: boolean;
    revogadaEm?: boolean;
    filaDocumentos?: boolean | Prisma.Sessao$filaDocumentosArgs<ExtArgs>;
    entregas?: boolean | Prisma.Sessao$entregasArgs<ExtArgs>;
    _count?: boolean | Prisma.SessaoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sessao"]>;
export type SessaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    lojaCodigo?: boolean;
    lojaNome?: boolean;
    dispositivoId?: boolean;
    criadaEm?: boolean;
    ultimaAtividadeEm?: boolean;
    revogadaEm?: boolean;
}, ExtArgs["result"]["sessao"]>;
export type SessaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    lojaCodigo?: boolean;
    lojaNome?: boolean;
    dispositivoId?: boolean;
    criadaEm?: boolean;
    ultimaAtividadeEm?: boolean;
    revogadaEm?: boolean;
}, ExtArgs["result"]["sessao"]>;
export type SessaoSelectScalar = {
    id?: boolean;
    token?: boolean;
    lojaCodigo?: boolean;
    lojaNome?: boolean;
    dispositivoId?: boolean;
    criadaEm?: boolean;
    ultimaAtividadeEm?: boolean;
    revogadaEm?: boolean;
};
export type SessaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "lojaCodigo" | "lojaNome" | "dispositivoId" | "criadaEm" | "ultimaAtividadeEm" | "revogadaEm", ExtArgs["result"]["sessao"]>;
export type SessaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    filaDocumentos?: boolean | Prisma.Sessao$filaDocumentosArgs<ExtArgs>;
    entregas?: boolean | Prisma.Sessao$entregasArgs<ExtArgs>;
    _count?: boolean | Prisma.SessaoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SessaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SessaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SessaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sessao";
    objects: {
        filaDocumentos: Prisma.$FilaDocumentoPayload<ExtArgs>[];
        entregas: Prisma.$EntregaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        token: string;
        lojaCodigo: string;
        lojaNome: string;
        dispositivoId: string;
        criadaEm: Date;
        ultimaAtividadeEm: Date;
        revogadaEm: Date | null;
    }, ExtArgs["result"]["sessao"]>;
    composites: {};
};
export type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SessaoPayload, S>;
export type SessaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessaoCountAggregateInputType | true;
};
export interface SessaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sessao'];
        meta: {
            name: 'Sessao';
        };
    };
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessaoFindUniqueArgs>(args: Prisma.SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Sessao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessaoFindFirstArgs>(args?: Prisma.SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     *
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessaoWithIdOnly = await prisma.sessao.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessaoFindManyArgs>(args?: Prisma.SelectSubset<T, SessaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     *
     */
    create<T extends SessaoCreateArgs>(args: Prisma.SelectSubset<T, SessaoCreateArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Sessaos.
     * @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessaoCreateManyArgs>(args?: Prisma.SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Sessaos and returns the data saved in the database.
     * @param {SessaoCreateManyAndReturnArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SessaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SessaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     *
     */
    delete<T extends SessaoDeleteArgs>(args: Prisma.SelectSubset<T, SessaoDeleteArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessaoUpdateArgs>(args: Prisma.SelectSubset<T, SessaoUpdateArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessaoUpdateManyArgs>(args: Prisma.SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Sessaos and returns the data updated in the database.
     * @param {SessaoUpdateManyAndReturnArgs} args - Arguments to update many Sessaos.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SessaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
     */
    upsert<T extends SessaoUpsertArgs>(args: Prisma.SelectSubset<T, SessaoUpsertArgs<ExtArgs>>): Prisma.Prisma__SessaoClient<runtime.Types.Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(args?: Prisma.Subset<T, SessaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessaoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessaoAggregateArgs>(args: Prisma.Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>;
    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SessaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SessaoGroupByArgs['orderBy'];
    } : {
        orderBy?: SessaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Sessao model
     */
    readonly fields: SessaoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Sessao.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    filaDocumentos<T extends Prisma.Sessao$filaDocumentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sessao$filaDocumentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilaDocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    entregas<T extends Prisma.Sessao$entregasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sessao$entregasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntregaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Sessao model
 */
export interface SessaoFieldRefs {
    readonly id: Prisma.FieldRef<"Sessao", 'String'>;
    readonly token: Prisma.FieldRef<"Sessao", 'String'>;
    readonly lojaCodigo: Prisma.FieldRef<"Sessao", 'String'>;
    readonly lojaNome: Prisma.FieldRef<"Sessao", 'String'>;
    readonly dispositivoId: Prisma.FieldRef<"Sessao", 'String'>;
    readonly criadaEm: Prisma.FieldRef<"Sessao", 'DateTime'>;
    readonly ultimaAtividadeEm: Prisma.FieldRef<"Sessao", 'DateTime'>;
    readonly revogadaEm: Prisma.FieldRef<"Sessao", 'DateTime'>;
}
/**
 * Sessao findUnique
 */
export type SessaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter, which Sessao to fetch.
     */
    where: Prisma.SessaoWhereUniqueInput;
};
/**
 * Sessao findUniqueOrThrow
 */
export type SessaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter, which Sessao to fetch.
     */
    where: Prisma.SessaoWhereUniqueInput;
};
/**
 * Sessao findFirst
 */
export type SessaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter, which Sessao to fetch.
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: Prisma.SessaoOrderByWithRelationInput | Prisma.SessaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessaos.
     */
    cursor?: Prisma.SessaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessaos.
     */
    distinct?: Prisma.SessaoScalarFieldEnum | Prisma.SessaoScalarFieldEnum[];
};
/**
 * Sessao findFirstOrThrow
 */
export type SessaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter, which Sessao to fetch.
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: Prisma.SessaoOrderByWithRelationInput | Prisma.SessaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessaos.
     */
    cursor?: Prisma.SessaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessaos.
     */
    distinct?: Prisma.SessaoScalarFieldEnum | Prisma.SessaoScalarFieldEnum[];
};
/**
 * Sessao findMany
 */
export type SessaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: Prisma.SessaoOrderByWithRelationInput | Prisma.SessaoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessaos.
     */
    cursor?: Prisma.SessaoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessaos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessaos.
     */
    distinct?: Prisma.SessaoScalarFieldEnum | Prisma.SessaoScalarFieldEnum[];
};
/**
 * Sessao create
 */
export type SessaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * The data needed to create a Sessao.
     */
    data: Prisma.XOR<Prisma.SessaoCreateInput, Prisma.SessaoUncheckedCreateInput>;
};
/**
 * Sessao createMany
 */
export type SessaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: Prisma.SessaoCreateManyInput | Prisma.SessaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Sessao createManyAndReturn
 */
export type SessaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * The data used to create many Sessaos.
     */
    data: Prisma.SessaoCreateManyInput | Prisma.SessaoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Sessao update
 */
export type SessaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * The data needed to update a Sessao.
     */
    data: Prisma.XOR<Prisma.SessaoUpdateInput, Prisma.SessaoUncheckedUpdateInput>;
    /**
     * Choose, which Sessao to update.
     */
    where: Prisma.SessaoWhereUniqueInput;
};
/**
 * Sessao updateMany
 */
export type SessaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: Prisma.XOR<Prisma.SessaoUpdateManyMutationInput, Prisma.SessaoUncheckedUpdateManyInput>;
    /**
     * Filter which Sessaos to update
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number;
};
/**
 * Sessao updateManyAndReturn
 */
export type SessaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * The data used to update Sessaos.
     */
    data: Prisma.XOR<Prisma.SessaoUpdateManyMutationInput, Prisma.SessaoUncheckedUpdateManyInput>;
    /**
     * Filter which Sessaos to update
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number;
};
/**
 * Sessao upsert
 */
export type SessaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: Prisma.SessaoWhereUniqueInput;
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: Prisma.XOR<Prisma.SessaoCreateInput, Prisma.SessaoUncheckedCreateInput>;
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SessaoUpdateInput, Prisma.SessaoUncheckedUpdateInput>;
};
/**
 * Sessao delete
 */
export type SessaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
    /**
     * Filter which Sessao to delete.
     */
    where: Prisma.SessaoWhereUniqueInput;
};
/**
 * Sessao deleteMany
 */
export type SessaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: Prisma.SessaoWhereInput;
    /**
     * Limit how many Sessaos to delete.
     */
    limit?: number;
};
/**
 * Sessao.filaDocumentos
 */
export type Sessao$filaDocumentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.FilaDocumentoWhereInput;
    orderBy?: Prisma.FilaDocumentoOrderByWithRelationInput | Prisma.FilaDocumentoOrderByWithRelationInput[];
    cursor?: Prisma.FilaDocumentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilaDocumentoScalarFieldEnum | Prisma.FilaDocumentoScalarFieldEnum[];
};
/**
 * Sessao.entregas
 */
export type Sessao$entregasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Sessao without action
 */
export type SessaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: Prisma.SessaoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Sessao
     */
    omit?: Prisma.SessaoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SessaoInclude<ExtArgs> | null;
};
//# sourceMappingURL=Sessao.d.ts.map