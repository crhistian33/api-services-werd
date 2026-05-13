import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PageModel = runtime.Types.Result.DefaultSelection<Prisma.$PagePayload>;
export type AggregatePage = {
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
};
export type PageMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    status: $Enums.PageStatus | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PageMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    content: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    status: $Enums.PageStatus | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type PageCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    content: number;
    metaTitle: number;
    metaDescription: number;
    status: number;
    createdById: number;
    updatedById: number;
    deletedById: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type PageMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    metaTitle?: true;
    metaDescription?: true;
    status?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PageMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    metaTitle?: true;
    metaDescription?: true;
    status?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type PageCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    content?: true;
    metaTitle?: true;
    metaDescription?: true;
    status?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type PageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithRelationInput | Prisma.PageOrderByWithRelationInput[];
    cursor?: Prisma.PageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PageCountAggregateInputType;
    _min?: PageMinAggregateInputType;
    _max?: PageMaxAggregateInputType;
};
export type GetPageAggregateType<T extends PageAggregateArgs> = {
    [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePage[P]> : Prisma.GetScalarType<T[P], AggregatePage[P]>;
};
export type PageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithAggregationInput | Prisma.PageOrderByWithAggregationInput[];
    by: Prisma.PageScalarFieldEnum[] | Prisma.PageScalarFieldEnum;
    having?: Prisma.PageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageCountAggregateInputType | true;
    _min?: PageMinAggregateInputType;
    _max?: PageMaxAggregateInputType;
};
export type PageGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    content: string | null;
    metaTitle: string | null;
    metaDescription: string | null;
    status: $Enums.PageStatus;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
};
type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PageGroupByOutputType[P]>;
}>>;
export type PageWhereInput = {
    AND?: Prisma.PageWhereInput | Prisma.PageWhereInput[];
    OR?: Prisma.PageWhereInput[];
    NOT?: Prisma.PageWhereInput | Prisma.PageWhereInput[];
    id?: Prisma.StringFilter<"Page"> | string;
    title?: Prisma.StringFilter<"Page"> | string;
    slug?: Prisma.StringFilter<"Page"> | string;
    content?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaTitle?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"Page"> | string | null;
    status?: Prisma.EnumPageStatusFilter<"Page"> | $Enums.PageStatus;
    createdById?: Prisma.StringNullableFilter<"Page"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Page"> | Date | string | null;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type PageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
    updatedBy?: Prisma.AdminUserOrderByWithRelationInput;
    deletedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.PageWhereInput | Prisma.PageWhereInput[];
    OR?: Prisma.PageWhereInput[];
    NOT?: Prisma.PageWhereInput | Prisma.PageWhereInput[];
    title?: Prisma.StringFilter<"Page"> | string;
    content?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaTitle?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"Page"> | string | null;
    status?: Prisma.EnumPageStatusFilter<"Page"> | $Enums.PageStatus;
    createdById?: Prisma.StringNullableFilter<"Page"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Page"> | Date | string | null;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "slug">;
export type PageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PageCountOrderByAggregateInput;
    _max?: Prisma.PageMaxOrderByAggregateInput;
    _min?: Prisma.PageMinOrderByAggregateInput;
};
export type PageScalarWhereWithAggregatesInput = {
    AND?: Prisma.PageScalarWhereWithAggregatesInput | Prisma.PageScalarWhereWithAggregatesInput[];
    OR?: Prisma.PageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PageScalarWhereWithAggregatesInput | Prisma.PageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Page"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Page"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Page"> | string;
    content?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    metaTitle?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    metaDescription?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    status?: Prisma.EnumPageStatusWithAggregatesFilter<"Page"> | $Enums.PageStatus;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    deletedById?: Prisma.StringNullableWithAggregatesFilter<"Page"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Page"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Page"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Page"> | Date | string | null;
};
export type PageCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPagesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesDeletedInput;
};
export type PageUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPagesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPagesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutPagesDeletedNestedInput;
};
export type PageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageListRelationFilter = {
    every?: Prisma.PageWhereInput;
    some?: Prisma.PageWhereInput;
    none?: Prisma.PageWhereInput;
};
export type PageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type PageCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput> | Prisma.PageCreateWithoutCreatedByInput[] | Prisma.PageUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutCreatedByInput | Prisma.PageCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PageCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput> | Prisma.PageCreateWithoutUpdatedByInput[] | Prisma.PageUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutUpdatedByInput | Prisma.PageCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.PageCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput> | Prisma.PageCreateWithoutDeletedByInput[] | Prisma.PageUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutDeletedByInput | Prisma.PageCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.PageCreateManyDeletedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput> | Prisma.PageCreateWithoutCreatedByInput[] | Prisma.PageUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutCreatedByInput | Prisma.PageCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PageCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput> | Prisma.PageCreateWithoutUpdatedByInput[] | Prisma.PageUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutUpdatedByInput | Prisma.PageCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.PageCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput> | Prisma.PageCreateWithoutDeletedByInput[] | Prisma.PageUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutDeletedByInput | Prisma.PageCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.PageCreateManyDeletedByInputEnvelope;
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
};
export type PageUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput> | Prisma.PageCreateWithoutCreatedByInput[] | Prisma.PageUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutCreatedByInput | Prisma.PageCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PageUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PageCreateManyCreatedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PageUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutCreatedByInput | Prisma.PageUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type PageUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput> | Prisma.PageCreateWithoutUpdatedByInput[] | Prisma.PageUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutUpdatedByInput | Prisma.PageCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.PageUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.PageCreateManyUpdatedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.PageUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutUpdatedByInput | Prisma.PageUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type PageUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput> | Prisma.PageCreateWithoutDeletedByInput[] | Prisma.PageUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutDeletedByInput | Prisma.PageCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.PageUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.PageCreateManyDeletedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.PageUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutDeletedByInput | Prisma.PageUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type PageUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput> | Prisma.PageCreateWithoutCreatedByInput[] | Prisma.PageUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutCreatedByInput | Prisma.PageCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PageUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PageCreateManyCreatedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PageUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutCreatedByInput | Prisma.PageUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type PageUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput> | Prisma.PageCreateWithoutUpdatedByInput[] | Prisma.PageUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutUpdatedByInput | Prisma.PageCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.PageUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.PageCreateManyUpdatedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.PageUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutUpdatedByInput | Prisma.PageUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type PageUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput> | Prisma.PageCreateWithoutDeletedByInput[] | Prisma.PageUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.PageCreateOrConnectWithoutDeletedByInput | Prisma.PageCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.PageUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.PageUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.PageCreateManyDeletedByInputEnvelope;
    set?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    disconnect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    delete?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    connect?: Prisma.PageWhereUniqueInput | Prisma.PageWhereUniqueInput[];
    update?: Prisma.PageUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.PageUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.PageUpdateManyWithWhereWithoutDeletedByInput | Prisma.PageUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
};
export type EnumPageStatusFieldUpdateOperationsInput = {
    set?: $Enums.PageStatus;
};
export type PageCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesDeletedInput;
};
export type PageUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput>;
};
export type PageCreateManyCreatedByInputEnvelope = {
    data: Prisma.PageCreateManyCreatedByInput | Prisma.PageCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PageCreateWithoutUpdatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPagesCreatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesDeletedInput;
};
export type PageUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput>;
};
export type PageCreateManyUpdatedByInputEnvelope = {
    data: Prisma.PageCreateManyUpdatedByInput | Prisma.PageCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type PageCreateWithoutDeletedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPagesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPagesUpdatedInput;
};
export type PageUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.PageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput>;
};
export type PageCreateManyDeletedByInputEnvelope = {
    data: Prisma.PageCreateManyDeletedByInput | Prisma.PageCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type PageUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PageUpdateWithoutCreatedByInput, Prisma.PageUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PageCreateWithoutCreatedByInput, Prisma.PageUncheckedCreateWithoutCreatedByInput>;
};
export type PageUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PageUpdateWithoutCreatedByInput, Prisma.PageUncheckedUpdateWithoutCreatedByInput>;
};
export type PageUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PageScalarWhereInput;
    data: Prisma.XOR<Prisma.PageUpdateManyMutationInput, Prisma.PageUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PageScalarWhereInput = {
    AND?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
    OR?: Prisma.PageScalarWhereInput[];
    NOT?: Prisma.PageScalarWhereInput | Prisma.PageScalarWhereInput[];
    id?: Prisma.StringFilter<"Page"> | string;
    title?: Prisma.StringFilter<"Page"> | string;
    slug?: Prisma.StringFilter<"Page"> | string;
    content?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaTitle?: Prisma.StringNullableFilter<"Page"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"Page"> | string | null;
    status?: Prisma.EnumPageStatusFilter<"Page"> | $Enums.PageStatus;
    createdById?: Prisma.StringNullableFilter<"Page"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Page"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Page"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Page"> | Date | string | null;
};
export type PageUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PageUpdateWithoutUpdatedByInput, Prisma.PageUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.PageCreateWithoutUpdatedByInput, Prisma.PageUncheckedCreateWithoutUpdatedByInput>;
};
export type PageUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.PageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PageUpdateWithoutUpdatedByInput, Prisma.PageUncheckedUpdateWithoutUpdatedByInput>;
};
export type PageUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.PageScalarWhereInput;
    data: Prisma.XOR<Prisma.PageUpdateManyMutationInput, Prisma.PageUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type PageUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.PageWhereUniqueInput;
    update: Prisma.XOR<Prisma.PageUpdateWithoutDeletedByInput, Prisma.PageUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.PageCreateWithoutDeletedByInput, Prisma.PageUncheckedCreateWithoutDeletedByInput>;
};
export type PageUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.PageWhereUniqueInput;
    data: Prisma.XOR<Prisma.PageUpdateWithoutDeletedByInput, Prisma.PageUncheckedUpdateWithoutDeletedByInput>;
};
export type PageUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.PageScalarWhereInput;
    data: Prisma.XOR<Prisma.PageUpdateManyMutationInput, Prisma.PageUncheckedUpdateManyWithoutDeletedByInput>;
};
export type PageCreateManyCreatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageCreateManyUpdatedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageCreateManyDeletedByInput = {
    id?: string;
    title: string;
    slug: string;
    content?: string | null;
    metaTitle?: string | null;
    metaDescription?: string | null;
    status?: $Enums.PageStatus;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type PageUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPagesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutPagesDeletedNestedInput;
};
export type PageUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPagesCreatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutPagesDeletedNestedInput;
};
export type PageUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPagesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPagesUpdatedNestedInput;
};
export type PageUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumPageStatusFieldUpdateOperationsInput | $Enums.PageStatus;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    status?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["page"]>;
export type PageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    status?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["page"]>;
export type PageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    status?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["page"]>;
export type PageSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    content?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    status?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type PageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "content" | "metaTitle" | "metaDescription" | "status" | "createdById" | "updatedById" | "deletedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["page"]>;
export type PageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
};
export type PageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
};
export type PageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.Page$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Page$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Page$deletedByArgs<ExtArgs>;
};
export type $PagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Page";
    objects: {
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        updatedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        deletedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        content: string | null;
        metaTitle: string | null;
        metaDescription: string | null;
        status: $Enums.PageStatus;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["page"]>;
    composites: {};
};
export type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PagePayload, S>;
export type PageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PageCountAggregateInputType | true;
};
export interface PageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Page'];
        meta: {
            name: 'Page';
        };
    };
    findUnique<T extends PageFindUniqueArgs>(args: Prisma.SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PageFindFirstArgs>(args?: Prisma.SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PageFindManyArgs>(args?: Prisma.SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PageCreateArgs>(args: Prisma.SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PageCreateManyArgs>(args?: Prisma.SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PageDeleteArgs>(args: Prisma.SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PageUpdateArgs>(args: Prisma.SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PageDeleteManyArgs>(args?: Prisma.SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PageUpdateManyArgs>(args: Prisma.SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PageUpsertArgs>(args: Prisma.SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma.Prisma__PageClient<runtime.Types.Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PageCountArgs>(args?: Prisma.Subset<T, PageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PageCountAggregateOutputType> : number>;
    aggregate<T extends PageAggregateArgs>(args: Prisma.Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>;
    groupBy<T extends PageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PageGroupByArgs['orderBy'];
    } : {
        orderBy?: PageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PageFieldRefs;
}
export interface Prisma__PageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.Page$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Page$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.Page$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Page$updatedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deletedBy<T extends Prisma.Page$deletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Page$deletedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PageFieldRefs {
    readonly id: Prisma.FieldRef<"Page", 'String'>;
    readonly title: Prisma.FieldRef<"Page", 'String'>;
    readonly slug: Prisma.FieldRef<"Page", 'String'>;
    readonly content: Prisma.FieldRef<"Page", 'String'>;
    readonly metaTitle: Prisma.FieldRef<"Page", 'String'>;
    readonly metaDescription: Prisma.FieldRef<"Page", 'String'>;
    readonly status: Prisma.FieldRef<"Page", 'PageStatus'>;
    readonly createdById: Prisma.FieldRef<"Page", 'String'>;
    readonly updatedById: Prisma.FieldRef<"Page", 'String'>;
    readonly deletedById: Prisma.FieldRef<"Page", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Page", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Page", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Page", 'DateTime'>;
}
export type PageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where: Prisma.PageWhereUniqueInput;
};
export type PageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where: Prisma.PageWhereUniqueInput;
};
export type PageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithRelationInput | Prisma.PageOrderByWithRelationInput[];
    cursor?: Prisma.PageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageScalarFieldEnum | Prisma.PageScalarFieldEnum[];
};
export type PageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithRelationInput | Prisma.PageOrderByWithRelationInput[];
    cursor?: Prisma.PageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageScalarFieldEnum | Prisma.PageScalarFieldEnum[];
};
export type PageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where?: Prisma.PageWhereInput;
    orderBy?: Prisma.PageOrderByWithRelationInput | Prisma.PageOrderByWithRelationInput[];
    cursor?: Prisma.PageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageScalarFieldEnum | Prisma.PageScalarFieldEnum[];
};
export type PageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageCreateInput, Prisma.PageUncheckedCreateInput>;
};
export type PageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PageCreateManyInput | Prisma.PageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    data: Prisma.PageCreateManyInput | Prisma.PageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageUpdateInput, Prisma.PageUncheckedUpdateInput>;
    where: Prisma.PageWhereUniqueInput;
};
export type PageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PageUpdateManyMutationInput, Prisma.PageUncheckedUpdateManyInput>;
    where?: Prisma.PageWhereInput;
    limit?: number;
};
export type PageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageUpdateManyMutationInput, Prisma.PageUncheckedUpdateManyInput>;
    where?: Prisma.PageWhereInput;
    limit?: number;
    include?: Prisma.PageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where: Prisma.PageWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageCreateInput, Prisma.PageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PageUpdateInput, Prisma.PageUncheckedUpdateInput>;
};
export type PageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
    where: Prisma.PageWhereUniqueInput;
};
export type PageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageWhereInput;
    limit?: number;
};
export type Page$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type Page$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type Page$deletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type PageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageSelect<ExtArgs> | null;
    omit?: Prisma.PageOmit<ExtArgs> | null;
    include?: Prisma.PageInclude<ExtArgs> | null;
};
export {};
