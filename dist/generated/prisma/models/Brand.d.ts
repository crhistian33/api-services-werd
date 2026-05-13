import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BrandModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandPayload>;
export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
export type BrandMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type BrandMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type BrandCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    isActive: number;
    createdById: number;
    updatedById: number;
    deletedById: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type BrandMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type BrandMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type BrandCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type BrandAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BrandCountAggregateInputType;
    _min?: BrandMinAggregateInputType;
    _max?: BrandMaxAggregateInputType;
};
export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
    [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrand[P]> : Prisma.GetScalarType<T[P], AggregateBrand[P]>;
};
export type BrandGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithAggregationInput | Prisma.BrandOrderByWithAggregationInput[];
    by: Prisma.BrandScalarFieldEnum[] | Prisma.BrandScalarFieldEnum;
    having?: Prisma.BrandScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandCountAggregateInputType | true;
    _min?: BrandMinAggregateInputType;
    _max?: BrandMaxAggregateInputType;
};
export type BrandGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    isActive: boolean;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: BrandCountAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]>;
}>>;
export type BrandWhereInput = {
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    id?: Prisma.StringFilter<"Brand"> | string;
    name?: Prisma.StringFilter<"Brand"> | string;
    slug?: Prisma.StringFilter<"Brand"> | string;
    description?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Brand"> | Date | string | null;
    products?: Prisma.ProductListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type BrandOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
    updatedBy?: Prisma.AdminUserOrderByWithRelationInput;
    deletedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    slug?: string;
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    description?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Brand"> | Date | string | null;
    products?: Prisma.ProductListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "name" | "slug">;
export type BrandOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BrandCountOrderByAggregateInput;
    _max?: Prisma.BrandMaxOrderByAggregateInput;
    _min?: Prisma.BrandMinOrderByAggregateInput;
};
export type BrandScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Brand"> | boolean;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    deletedById?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Brand"> | Date | string | null;
};
export type BrandCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsDeletedInput;
};
export type BrandUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutBrandsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutBrandsUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutBrandsDeletedNestedInput;
};
export type BrandUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type BrandUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type BrandMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type BrandMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type BrandNullableScalarRelationFilter = {
    is?: Prisma.BrandWhereInput | null;
    isNot?: Prisma.BrandWhereInput | null;
};
export type BrandListRelationFilter = {
    every?: Prisma.BrandWhereInput;
    some?: Prisma.BrandWhereInput;
    none?: Prisma.BrandWhereInput;
};
export type BrandOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutProductsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.BrandUpsertWithoutProductsInput;
    disconnect?: Prisma.BrandWhereInput | boolean;
    delete?: Prisma.BrandWhereInput | boolean;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutProductsInput, Prisma.BrandUpdateWithoutProductsInput>, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
};
export type BrandCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput> | Prisma.BrandCreateWithoutCreatedByInput[] | Prisma.BrandUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCreatedByInput | Prisma.BrandCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.BrandCreateManyCreatedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput> | Prisma.BrandCreateWithoutUpdatedByInput[] | Prisma.BrandUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUpdatedByInput | Prisma.BrandCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BrandCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput> | Prisma.BrandCreateWithoutDeletedByInput[] | Prisma.BrandUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDeletedByInput | Prisma.BrandCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.BrandCreateManyDeletedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput> | Prisma.BrandCreateWithoutCreatedByInput[] | Prisma.BrandUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCreatedByInput | Prisma.BrandCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.BrandCreateManyCreatedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput> | Prisma.BrandCreateWithoutUpdatedByInput[] | Prisma.BrandUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUpdatedByInput | Prisma.BrandCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.BrandCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput> | Prisma.BrandCreateWithoutDeletedByInput[] | Prisma.BrandUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDeletedByInput | Prisma.BrandCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.BrandCreateManyDeletedByInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput> | Prisma.BrandCreateWithoutCreatedByInput[] | Prisma.BrandUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCreatedByInput | Prisma.BrandCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.BrandCreateManyCreatedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutCreatedByInput | Prisma.BrandUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput> | Prisma.BrandCreateWithoutUpdatedByInput[] | Prisma.BrandUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUpdatedByInput | Prisma.BrandCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BrandCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BrandUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput> | Prisma.BrandCreateWithoutDeletedByInput[] | Prisma.BrandUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDeletedByInput | Prisma.BrandCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.BrandCreateManyDeletedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutDeletedByInput | Prisma.BrandUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput> | Prisma.BrandCreateWithoutCreatedByInput[] | Prisma.BrandUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCreatedByInput | Prisma.BrandCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.BrandCreateManyCreatedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutCreatedByInput | Prisma.BrandUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput> | Prisma.BrandCreateWithoutUpdatedByInput[] | Prisma.BrandUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutUpdatedByInput | Prisma.BrandCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.BrandCreateManyUpdatedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutUpdatedByInput | Prisma.BrandUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput> | Prisma.BrandCreateWithoutDeletedByInput[] | Prisma.BrandUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutDeletedByInput | Prisma.BrandCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.BrandUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.BrandCreateManyDeletedByInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.BrandUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutDeletedByInput | Prisma.BrandUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandCreateWithoutProductsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsDeletedInput;
};
export type BrandUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type BrandCreateOrConnectWithoutProductsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
};
export type BrandUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutProductsInput, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutProductsInput, Prisma.BrandUncheckedCreateWithoutProductsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutProductsInput, Prisma.BrandUncheckedUpdateWithoutProductsInput>;
};
export type BrandUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdBy?: Prisma.AdminUserUpdateOneWithoutBrandsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutBrandsUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutBrandsDeletedNestedInput;
};
export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsDeletedInput;
};
export type BrandUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput>;
};
export type BrandCreateManyCreatedByInputEnvelope = {
    data: Prisma.BrandCreateManyCreatedByInput | Prisma.BrandCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type BrandCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsCreatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsDeletedInput;
};
export type BrandUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput>;
};
export type BrandCreateManyUpdatedByInputEnvelope = {
    data: Prisma.BrandCreateManyUpdatedByInput | Prisma.BrandCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type BrandCreateWithoutDeletedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductCreateNestedManyWithoutBrandInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutBrandsUpdatedInput;
};
export type BrandUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput>;
};
export type BrandCreateManyDeletedByInputEnvelope = {
    data: Prisma.BrandCreateManyDeletedByInput | Prisma.BrandCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type BrandUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandUpdateWithoutCreatedByInput, Prisma.BrandUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCreatedByInput, Prisma.BrandUncheckedCreateWithoutCreatedByInput>;
};
export type BrandUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutCreatedByInput, Prisma.BrandUncheckedUpdateWithoutCreatedByInput>;
};
export type BrandUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.BrandScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyWithoutCreatedByInput>;
};
export type BrandScalarWhereInput = {
    AND?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
    OR?: Prisma.BrandScalarWhereInput[];
    NOT?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
    id?: Prisma.StringFilter<"Brand"> | string;
    name?: Prisma.StringFilter<"Brand"> | string;
    slug?: Prisma.StringFilter<"Brand"> | string;
    description?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"Brand"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Brand"> | Date | string | null;
};
export type BrandUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandUpdateWithoutUpdatedByInput, Prisma.BrandUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutUpdatedByInput, Prisma.BrandUncheckedCreateWithoutUpdatedByInput>;
};
export type BrandUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutUpdatedByInput, Prisma.BrandUncheckedUpdateWithoutUpdatedByInput>;
};
export type BrandUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.BrandScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type BrandUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandUpdateWithoutDeletedByInput, Prisma.BrandUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutDeletedByInput, Prisma.BrandUncheckedCreateWithoutDeletedByInput>;
};
export type BrandUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutDeletedByInput, Prisma.BrandUncheckedUpdateWithoutDeletedByInput>;
};
export type BrandUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.BrandScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyWithoutDeletedByInput>;
};
export type BrandCreateManyCreatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type BrandCreateManyUpdatedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type BrandCreateManyDeletedByInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type BrandUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutBrandsUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutBrandsDeletedNestedInput;
};
export type BrandUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutBrandsCreatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutBrandsDeletedNestedInput;
};
export type BrandUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUpdateManyWithoutBrandNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutBrandsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutBrandsUpdatedNestedInput;
};
export type BrandUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    products?: Prisma.ProductUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BrandCountOutputType = {
    products: number;
};
export type BrandCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs;
};
export type BrandCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandCountOutputTypeSelect<ExtArgs> | null;
};
export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type BrandSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    products?: boolean | Prisma.Brand$productsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type BrandOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "description" | "isActive" | "createdById" | "updatedById" | "deletedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["brand"]>;
export type BrandInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | Prisma.Brand$productsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BrandIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
};
export type BrandIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.Brand$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Brand$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.Brand$deletedByArgs<ExtArgs>;
};
export type $BrandPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Brand";
    objects: {
        products: Prisma.$ProductPayload<ExtArgs>[];
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        updatedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        deletedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["brand"]>;
    composites: {};
};
export type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandPayload, S>;
export type BrandCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandCountAggregateInputType | true;
};
export interface BrandDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Brand'];
        meta: {
            name: 'Brand';
        };
    };
    findUnique<T extends BrandFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BrandFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BrandFindManyArgs>(args?: Prisma.SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BrandCreateArgs>(args: Prisma.SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BrandCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BrandDeleteArgs>(args: Prisma.SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BrandUpdateArgs>(args: Prisma.SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BrandDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BrandUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BrandUpsertArgs>(args: Prisma.SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BrandCountArgs>(args?: Prisma.Subset<T, BrandCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandCountAggregateOutputType> : number>;
    aggregate<T extends BrandAggregateArgs>(args: Prisma.Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>;
    groupBy<T extends BrandGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BrandFieldRefs;
}
export interface Prisma__BrandClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    products<T extends Prisma.Brand$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.Brand$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.Brand$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$updatedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deletedBy<T extends Prisma.Brand$deletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$deletedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BrandFieldRefs {
    readonly id: Prisma.FieldRef<"Brand", 'String'>;
    readonly name: Prisma.FieldRef<"Brand", 'String'>;
    readonly slug: Prisma.FieldRef<"Brand", 'String'>;
    readonly description: Prisma.FieldRef<"Brand", 'String'>;
    readonly isActive: Prisma.FieldRef<"Brand", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"Brand", 'String'>;
    readonly updatedById: Prisma.FieldRef<"Brand", 'String'>;
    readonly deletedById: Prisma.FieldRef<"Brand", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Brand", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Brand", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Brand", 'DateTime'>;
}
export type BrandFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
};
export type BrandCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BrandCreateManyInput | Prisma.BrandCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BrandCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    data: Prisma.BrandCreateManyInput | Prisma.BrandCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BrandIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BrandUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyInput>;
    where?: Prisma.BrandWhereInput;
    limit?: number;
};
export type BrandUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyInput>;
    where?: Prisma.BrandWhereInput;
    limit?: number;
    include?: Prisma.BrandIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BrandUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
};
export type BrandDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    limit?: number;
};
export type Brand$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Brand$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type Brand$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type Brand$deletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type BrandDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
};
export {};
