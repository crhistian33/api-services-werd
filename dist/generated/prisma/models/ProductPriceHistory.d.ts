import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductPriceHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPriceHistoryPayload>;
export type AggregateProductPriceHistory = {
    _count: ProductPriceHistoryCountAggregateOutputType | null;
    _avg: ProductPriceHistoryAvgAggregateOutputType | null;
    _sum: ProductPriceHistorySumAggregateOutputType | null;
    _min: ProductPriceHistoryMinAggregateOutputType | null;
    _max: ProductPriceHistoryMaxAggregateOutputType | null;
};
export type ProductPriceHistoryAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    marginPct: runtime.Decimal | null;
};
export type ProductPriceHistorySumAggregateOutputType = {
    price: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    marginPct: runtime.Decimal | null;
};
export type ProductPriceHistoryMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    marginPct: runtime.Decimal | null;
    changedById: string | null;
    reason: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ProductPriceHistoryMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    marginPct: runtime.Decimal | null;
    changedById: string | null;
    reason: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ProductPriceHistoryCountAggregateOutputType = {
    id: number;
    productId: number;
    price: number;
    cost: number;
    marginPct: number;
    changedById: number;
    reason: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type ProductPriceHistoryAvgAggregateInputType = {
    price?: true;
    cost?: true;
    marginPct?: true;
};
export type ProductPriceHistorySumAggregateInputType = {
    price?: true;
    cost?: true;
    marginPct?: true;
};
export type ProductPriceHistoryMinAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    cost?: true;
    marginPct?: true;
    changedById?: true;
    reason?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ProductPriceHistoryMaxAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    cost?: true;
    marginPct?: true;
    changedById?: true;
    reason?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ProductPriceHistoryCountAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    cost?: true;
    marginPct?: true;
    changedById?: true;
    reason?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type ProductPriceHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceHistoryWhereInput;
    orderBy?: Prisma.ProductPriceHistoryOrderByWithRelationInput | Prisma.ProductPriceHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductPriceHistoryCountAggregateInputType;
    _avg?: ProductPriceHistoryAvgAggregateInputType;
    _sum?: ProductPriceHistorySumAggregateInputType;
    _min?: ProductPriceHistoryMinAggregateInputType;
    _max?: ProductPriceHistoryMaxAggregateInputType;
};
export type GetProductPriceHistoryAggregateType<T extends ProductPriceHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateProductPriceHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductPriceHistory[P]> : Prisma.GetScalarType<T[P], AggregateProductPriceHistory[P]>;
};
export type ProductPriceHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceHistoryWhereInput;
    orderBy?: Prisma.ProductPriceHistoryOrderByWithAggregationInput | Prisma.ProductPriceHistoryOrderByWithAggregationInput[];
    by: Prisma.ProductPriceHistoryScalarFieldEnum[] | Prisma.ProductPriceHistoryScalarFieldEnum;
    having?: Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductPriceHistoryCountAggregateInputType | true;
    _avg?: ProductPriceHistoryAvgAggregateInputType;
    _sum?: ProductPriceHistorySumAggregateInputType;
    _min?: ProductPriceHistoryMinAggregateInputType;
    _max?: ProductPriceHistoryMaxAggregateInputType;
};
export type ProductPriceHistoryGroupByOutputType = {
    id: string;
    productId: string;
    price: runtime.Decimal;
    cost: runtime.Decimal | null;
    marginPct: runtime.Decimal | null;
    changedById: string | null;
    reason: string | null;
    effectiveFrom: Date;
    createdAt: Date;
    _count: ProductPriceHistoryCountAggregateOutputType | null;
    _avg: ProductPriceHistoryAvgAggregateOutputType | null;
    _sum: ProductPriceHistorySumAggregateOutputType | null;
    _min: ProductPriceHistoryMinAggregateOutputType | null;
    _max: ProductPriceHistoryMaxAggregateOutputType | null;
};
type GetProductPriceHistoryGroupByPayload<T extends ProductPriceHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductPriceHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductPriceHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductPriceHistoryGroupByOutputType[P]>;
}>>;
export type ProductPriceHistoryWhereInput = {
    AND?: Prisma.ProductPriceHistoryWhereInput | Prisma.ProductPriceHistoryWhereInput[];
    OR?: Prisma.ProductPriceHistoryWhereInput[];
    NOT?: Prisma.ProductPriceHistoryWhereInput | Prisma.ProductPriceHistoryWhereInput[];
    id?: Prisma.StringFilter<"ProductPriceHistory"> | string;
    productId?: Prisma.StringFilter<"ProductPriceHistory"> | string;
    price?: Prisma.DecimalFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    changedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type ProductPriceHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    marginPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    changedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type ProductPriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductPriceHistoryWhereInput | Prisma.ProductPriceHistoryWhereInput[];
    OR?: Prisma.ProductPriceHistoryWhereInput[];
    NOT?: Prisma.ProductPriceHistoryWhereInput | Prisma.ProductPriceHistoryWhereInput[];
    productId?: Prisma.StringFilter<"ProductPriceHistory"> | string;
    price?: Prisma.DecimalFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    changedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id">;
export type ProductPriceHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    marginPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProductPriceHistoryCountOrderByAggregateInput;
    _avg?: Prisma.ProductPriceHistoryAvgOrderByAggregateInput;
    _max?: Prisma.ProductPriceHistoryMaxOrderByAggregateInput;
    _min?: Prisma.ProductPriceHistoryMinOrderByAggregateInput;
    _sum?: Prisma.ProductPriceHistorySumOrderByAggregateInput;
};
export type ProductPriceHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput | Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput | Prisma.ProductPriceHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductPriceHistory"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductPriceHistory"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.DecimalNullableWithAggregatesFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.DecimalNullableWithAggregatesFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.StringNullableWithAggregatesFilter<"ProductPriceHistory"> | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"ProductPriceHistory"> | string | null;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"ProductPriceHistory"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductPriceHistory"> | Date | string;
};
export type ProductPriceHistoryCreateInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPriceHistoryInput;
    changedBy?: Prisma.AdminUserCreateNestedOneWithoutPriceChangesInput;
};
export type ProductPriceHistoryUncheckedCreateInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPriceHistoryNestedInput;
    changedBy?: Prisma.AdminUserUpdateOneWithoutPriceChangesNestedInput;
};
export type ProductPriceHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryCreateManyInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryListRelationFilter = {
    every?: Prisma.ProductPriceHistoryWhereInput;
    some?: Prisma.ProductPriceHistoryWhereInput;
    none?: Prisma.ProductPriceHistoryWhereInput;
};
export type ProductPriceHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductPriceHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    marginPct?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductPriceHistoryAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    marginPct?: Prisma.SortOrder;
};
export type ProductPriceHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    marginPct?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductPriceHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    marginPct?: Prisma.SortOrder;
    changedById?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductPriceHistorySumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    marginPct?: Prisma.SortOrder;
};
export type ProductPriceHistoryCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput> | Prisma.ProductPriceHistoryCreateWithoutProductInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyProductInputEnvelope;
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
};
export type ProductPriceHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput> | Prisma.ProductPriceHistoryCreateWithoutProductInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyProductInputEnvelope;
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
};
export type ProductPriceHistoryUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput> | Prisma.ProductPriceHistoryCreateWithoutProductInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyProductInputEnvelope;
    set?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    disconnect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    delete?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    update?: Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
};
export type ProductPriceHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput> | Prisma.ProductPriceHistoryCreateWithoutProductInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyProductInputEnvelope;
    set?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    disconnect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    delete?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    update?: Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutProductInput | Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
};
export type ProductPriceHistoryCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput> | Prisma.ProductPriceHistoryCreateWithoutChangedByInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyChangedByInputEnvelope;
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
};
export type ProductPriceHistoryUncheckedCreateNestedManyWithoutChangedByInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput> | Prisma.ProductPriceHistoryCreateWithoutChangedByInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyChangedByInputEnvelope;
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
};
export type ProductPriceHistoryUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput> | Prisma.ProductPriceHistoryCreateWithoutChangedByInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput | Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyChangedByInputEnvelope;
    set?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    disconnect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    delete?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    update?: Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput | Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutChangedByInput | Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
};
export type ProductPriceHistoryUncheckedUpdateManyWithoutChangedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput> | Prisma.ProductPriceHistoryCreateWithoutChangedByInput[] | Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput[];
    connectOrCreate?: Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput | Prisma.ProductPriceHistoryCreateOrConnectWithoutChangedByInput[];
    upsert?: Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput | Prisma.ProductPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput[];
    createMany?: Prisma.ProductPriceHistoryCreateManyChangedByInputEnvelope;
    set?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    disconnect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    delete?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    connect?: Prisma.ProductPriceHistoryWhereUniqueInput | Prisma.ProductPriceHistoryWhereUniqueInput[];
    update?: Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput | Prisma.ProductPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput[];
    updateMany?: Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutChangedByInput | Prisma.ProductPriceHistoryUpdateManyWithWhereWithoutChangedByInput[];
    deleteMany?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
};
export type ProductPriceHistoryCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
    changedBy?: Prisma.AdminUserCreateNestedOneWithoutPriceChangesInput;
};
export type ProductPriceHistoryUncheckedCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput>;
};
export type ProductPriceHistoryCreateManyProductInputEnvelope = {
    data: Prisma.ProductPriceHistoryCreateManyProductInput | Prisma.ProductPriceHistoryCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductPriceHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductPriceHistoryUpdateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutProductInput>;
};
export type ProductPriceHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateWithoutProductInput, Prisma.ProductPriceHistoryUncheckedUpdateWithoutProductInput>;
};
export type ProductPriceHistoryUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductPriceHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateManyMutationInput, Prisma.ProductPriceHistoryUncheckedUpdateManyWithoutProductInput>;
};
export type ProductPriceHistoryScalarWhereInput = {
    AND?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
    OR?: Prisma.ProductPriceHistoryScalarWhereInput[];
    NOT?: Prisma.ProductPriceHistoryScalarWhereInput | Prisma.ProductPriceHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductPriceHistory"> | string;
    productId?: Prisma.StringFilter<"ProductPriceHistory"> | string;
    price?: Prisma.DecimalFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.DecimalNullableFilter<"ProductPriceHistory"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductPriceHistory"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ProductPriceHistory"> | Date | string;
};
export type ProductPriceHistoryCreateWithoutChangedByInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPriceHistoryInput;
};
export type ProductPriceHistoryUncheckedCreateWithoutChangedByInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryCreateOrConnectWithoutChangedByInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput>;
};
export type ProductPriceHistoryCreateManyChangedByInputEnvelope = {
    data: Prisma.ProductPriceHistoryCreateManyChangedByInput | Prisma.ProductPriceHistoryCreateManyChangedByInput[];
    skipDuplicates?: boolean;
};
export type ProductPriceHistoryUpsertWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductPriceHistoryUpdateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedUpdateWithoutChangedByInput>;
    create: Prisma.XOR<Prisma.ProductPriceHistoryCreateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedCreateWithoutChangedByInput>;
};
export type ProductPriceHistoryUpdateWithWhereUniqueWithoutChangedByInput = {
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateWithoutChangedByInput, Prisma.ProductPriceHistoryUncheckedUpdateWithoutChangedByInput>;
};
export type ProductPriceHistoryUpdateManyWithWhereWithoutChangedByInput = {
    where: Prisma.ProductPriceHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateManyMutationInput, Prisma.ProductPriceHistoryUncheckedUpdateManyWithoutChangedByInput>;
};
export type ProductPriceHistoryCreateManyProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    changedBy?: Prisma.AdminUserUpdateOneWithoutPriceChangesNestedInput;
};
export type ProductPriceHistoryUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    changedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryCreateManyChangedByInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: string | null;
    effectiveFrom?: Date | string;
    createdAt?: Date | string;
};
export type ProductPriceHistoryUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPriceHistoryNestedInput;
};
export type ProductPriceHistoryUncheckedUpdateWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistoryUncheckedUpdateManyWithoutChangedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    marginPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    cost?: boolean;
    marginPct?: boolean;
    changedById?: boolean;
    reason?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
}, ExtArgs["result"]["productPriceHistory"]>;
export type ProductPriceHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    cost?: boolean;
    marginPct?: boolean;
    changedById?: boolean;
    reason?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
}, ExtArgs["result"]["productPriceHistory"]>;
export type ProductPriceHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    cost?: boolean;
    marginPct?: boolean;
    changedById?: boolean;
    reason?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
}, ExtArgs["result"]["productPriceHistory"]>;
export type ProductPriceHistorySelectScalar = {
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    cost?: boolean;
    marginPct?: boolean;
    changedById?: boolean;
    reason?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type ProductPriceHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "price" | "cost" | "marginPct" | "changedById" | "reason" | "effectiveFrom" | "createdAt", ExtArgs["result"]["productPriceHistory"]>;
export type ProductPriceHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
};
export type ProductPriceHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
};
export type ProductPriceHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    changedBy?: boolean | Prisma.ProductPriceHistory$changedByArgs<ExtArgs>;
};
export type $ProductPriceHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductPriceHistory";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        changedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        price: runtime.Decimal;
        cost: runtime.Decimal | null;
        marginPct: runtime.Decimal | null;
        changedById: string | null;
        reason: string | null;
        effectiveFrom: Date;
        createdAt: Date;
    }, ExtArgs["result"]["productPriceHistory"]>;
    composites: {};
};
export type ProductPriceHistoryGetPayload<S extends boolean | null | undefined | ProductPriceHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload, S>;
export type ProductPriceHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductPriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductPriceHistoryCountAggregateInputType | true;
};
export interface ProductPriceHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductPriceHistory'];
        meta: {
            name: 'ProductPriceHistory';
        };
    };
    findUnique<T extends ProductPriceHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductPriceHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductPriceHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductPriceHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductPriceHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductPriceHistoryCreateArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductPriceHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductPriceHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductPriceHistoryDeleteArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductPriceHistoryUpdateArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductPriceHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductPriceHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductPriceHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductPriceHistoryUpsertArgs>(args: Prisma.SelectSubset<T, ProductPriceHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductPriceHistoryClient<runtime.Types.Result.GetResult<Prisma.$ProductPriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductPriceHistoryCountArgs>(args?: Prisma.Subset<T, ProductPriceHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductPriceHistoryCountAggregateOutputType> : number>;
    aggregate<T extends ProductPriceHistoryAggregateArgs>(args: Prisma.Subset<T, ProductPriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductPriceHistoryAggregateType<T>>;
    groupBy<T extends ProductPriceHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductPriceHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductPriceHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductPriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductPriceHistoryFieldRefs;
}
export interface Prisma__ProductPriceHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    changedBy<T extends Prisma.ProductPriceHistory$changedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductPriceHistory$changedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductPriceHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"ProductPriceHistory", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductPriceHistory", 'String'>;
    readonly price: Prisma.FieldRef<"ProductPriceHistory", 'Decimal'>;
    readonly cost: Prisma.FieldRef<"ProductPriceHistory", 'Decimal'>;
    readonly marginPct: Prisma.FieldRef<"ProductPriceHistory", 'Decimal'>;
    readonly changedById: Prisma.FieldRef<"ProductPriceHistory", 'String'>;
    readonly reason: Prisma.FieldRef<"ProductPriceHistory", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"ProductPriceHistory", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ProductPriceHistory", 'DateTime'>;
}
export type ProductPriceHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
};
export type ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
};
export type ProductPriceHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceHistoryWhereInput;
    orderBy?: Prisma.ProductPriceHistoryOrderByWithRelationInput | Prisma.ProductPriceHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceHistoryScalarFieldEnum | Prisma.ProductPriceHistoryScalarFieldEnum[];
};
export type ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceHistoryWhereInput;
    orderBy?: Prisma.ProductPriceHistoryOrderByWithRelationInput | Prisma.ProductPriceHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceHistoryScalarFieldEnum | Prisma.ProductPriceHistoryScalarFieldEnum[];
};
export type ProductPriceHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceHistoryWhereInput;
    orderBy?: Prisma.ProductPriceHistoryOrderByWithRelationInput | Prisma.ProductPriceHistoryOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceHistoryScalarFieldEnum | Prisma.ProductPriceHistoryScalarFieldEnum[];
};
export type ProductPriceHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceHistoryCreateInput, Prisma.ProductPriceHistoryUncheckedCreateInput>;
};
export type ProductPriceHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductPriceHistoryCreateManyInput | Prisma.ProductPriceHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductPriceHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    data: Prisma.ProductPriceHistoryCreateManyInput | Prisma.ProductPriceHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductPriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductPriceHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateInput, Prisma.ProductPriceHistoryUncheckedUpdateInput>;
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
};
export type ProductPriceHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateManyMutationInput, Prisma.ProductPriceHistoryUncheckedUpdateManyInput>;
    where?: Prisma.ProductPriceHistoryWhereInput;
    limit?: number;
};
export type ProductPriceHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceHistoryUpdateManyMutationInput, Prisma.ProductPriceHistoryUncheckedUpdateManyInput>;
    where?: Prisma.ProductPriceHistoryWhereInput;
    limit?: number;
    include?: Prisma.ProductPriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductPriceHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductPriceHistoryCreateInput, Prisma.ProductPriceHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductPriceHistoryUpdateInput, Prisma.ProductPriceHistoryUncheckedUpdateInput>;
};
export type ProductPriceHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
    where: Prisma.ProductPriceHistoryWhereUniqueInput;
};
export type ProductPriceHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceHistoryWhereInput;
    limit?: number;
};
export type ProductPriceHistory$changedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ProductPriceHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceHistorySelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceHistoryOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceHistoryInclude<ExtArgs> | null;
};
export {};
