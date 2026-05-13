import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductReviewPayload>;
export type AggregateProductReview = {
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
export type ProductReviewAvgAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewSumAggregateOutputType = {
    rating: number | null;
};
export type ProductReviewMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    customerId: string | null;
    orderId: string | null;
    rating: number | null;
    title: string | null;
    comment: string | null;
    isApproved: boolean | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
};
export type ProductReviewMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    customerId: string | null;
    orderId: string | null;
    rating: number | null;
    title: string | null;
    comment: string | null;
    isApproved: boolean | null;
    reviewedById: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
};
export type ProductReviewCountAggregateOutputType = {
    id: number;
    productId: number;
    customerId: number;
    orderId: number;
    rating: number;
    title: number;
    comment: number;
    isApproved: number;
    reviewedById: number;
    reviewedAt: number;
    createdAt: number;
    _all: number;
};
export type ProductReviewAvgAggregateInputType = {
    rating?: true;
};
export type ProductReviewSumAggregateInputType = {
    rating?: true;
};
export type ProductReviewMinAggregateInputType = {
    id?: true;
    productId?: true;
    customerId?: true;
    orderId?: true;
    rating?: true;
    title?: true;
    comment?: true;
    isApproved?: true;
    reviewedById?: true;
    reviewedAt?: true;
    createdAt?: true;
};
export type ProductReviewMaxAggregateInputType = {
    id?: true;
    productId?: true;
    customerId?: true;
    orderId?: true;
    rating?: true;
    title?: true;
    comment?: true;
    isApproved?: true;
    reviewedById?: true;
    reviewedAt?: true;
    createdAt?: true;
};
export type ProductReviewCountAggregateInputType = {
    id?: true;
    productId?: true;
    customerId?: true;
    orderId?: true;
    rating?: true;
    title?: true;
    comment?: true;
    isApproved?: true;
    reviewedById?: true;
    reviewedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ProductReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductReviewCountAggregateInputType;
    _avg?: ProductReviewAvgAggregateInputType;
    _sum?: ProductReviewSumAggregateInputType;
    _min?: ProductReviewMinAggregateInputType;
    _max?: ProductReviewMaxAggregateInputType;
};
export type GetProductReviewAggregateType<T extends ProductReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateProductReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductReview[P]> : Prisma.GetScalarType<T[P], AggregateProductReview[P]>;
};
export type ProductReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithAggregationInput | Prisma.ProductReviewOrderByWithAggregationInput[];
    by: Prisma.ProductReviewScalarFieldEnum[] | Prisma.ProductReviewScalarFieldEnum;
    having?: Prisma.ProductReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductReviewCountAggregateInputType | true;
    _avg?: ProductReviewAvgAggregateInputType;
    _sum?: ProductReviewSumAggregateInputType;
    _min?: ProductReviewMinAggregateInputType;
    _max?: ProductReviewMaxAggregateInputType;
};
export type ProductReviewGroupByOutputType = {
    id: string;
    productId: string;
    customerId: string;
    orderId: string;
    rating: number;
    title: string | null;
    comment: string | null;
    isApproved: boolean;
    reviewedById: string | null;
    reviewedAt: Date | null;
    createdAt: Date;
    _count: ProductReviewCountAggregateOutputType | null;
    _avg: ProductReviewAvgAggregateOutputType | null;
    _sum: ProductReviewSumAggregateOutputType | null;
    _min: ProductReviewMinAggregateOutputType | null;
    _max: ProductReviewMaxAggregateOutputType | null;
};
type GetProductReviewGroupByPayload<T extends ProductReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductReviewGroupByOutputType[P]>;
}>>;
export type ProductReviewWhereInput = {
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    orderId?: Prisma.StringFilter<"ProductReview"> | string;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    title?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    isApproved?: Prisma.BoolFilter<"ProductReview"> | boolean;
    reviewedById?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ProductReview"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type ProductReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    reviewedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type ProductReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId_customerId_orderId?: Prisma.ProductReviewProductIdCustomerIdOrderIdCompoundUniqueInput;
    AND?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    OR?: Prisma.ProductReviewWhereInput[];
    NOT?: Prisma.ProductReviewWhereInput | Prisma.ProductReviewWhereInput[];
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    orderId?: Prisma.StringFilter<"ProductReview"> | string;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    title?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    isApproved?: Prisma.BoolFilter<"ProductReview"> | boolean;
    reviewedById?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ProductReview"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    reviewedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "productId_customerId_orderId">;
export type ProductReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProductReviewCountOrderByAggregateInput;
    _avg?: Prisma.ProductReviewAvgOrderByAggregateInput;
    _max?: Prisma.ProductReviewMaxOrderByAggregateInput;
    _min?: Prisma.ProductReviewMinOrderByAggregateInput;
    _sum?: Prisma.ProductReviewSumOrderByAggregateInput;
};
export type ProductReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductReviewScalarWhereWithAggregatesInput | Prisma.ProductReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"ProductReview"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"ProductReview"> | number;
    title?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    comment?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    isApproved?: Prisma.BoolWithAggregatesFilter<"ProductReview"> | boolean;
    reviewedById?: Prisma.StringNullableWithAggregatesFilter<"ProductReview"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ProductReview"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateInput = {
    id?: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    order: Prisma.OrderCreateNestedOneWithoutReviewsInput;
    reviewedBy?: Prisma.AdminUserCreateNestedOneWithoutReviewsReviewedInput;
};
export type ProductReviewUncheckedCreateInput = {
    id?: string;
    productId: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReviewsNestedInput;
    reviewedBy?: Prisma.AdminUserUpdateOneWithoutReviewsReviewedNestedInput;
};
export type ProductReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyInput = {
    id?: string;
    productId: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewListRelationFilter = {
    every?: Prisma.ProductReviewWhereInput;
    some?: Prisma.ProductReviewWhereInput;
    none?: Prisma.ProductReviewWhereInput;
};
export type ProductReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductReviewProductIdCustomerIdOrderIdCompoundUniqueInput = {
    productId: string;
    customerId: string;
    orderId: string;
};
export type ProductReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    isApproved?: Prisma.SortOrder;
    reviewedById?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductReviewSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ProductReviewCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput | Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput> | Prisma.ProductReviewCreateWithoutProductInput[] | Prisma.ProductReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutProductInput | Prisma.ProductReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductReviewCreateManyProductInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput | Prisma.ProductReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput> | Prisma.ProductReviewCreateWithoutCustomerInput[] | Prisma.ProductReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutCustomerInput | Prisma.ProductReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput> | Prisma.ProductReviewCreateWithoutOrderInput[] | Prisma.ProductReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutOrderInput | Prisma.ProductReviewCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ProductReviewCreateManyOrderInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput> | Prisma.ProductReviewCreateWithoutOrderInput[] | Prisma.ProductReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutOrderInput | Prisma.ProductReviewCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ProductReviewCreateManyOrderInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput> | Prisma.ProductReviewCreateWithoutOrderInput[] | Prisma.ProductReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutOrderInput | Prisma.ProductReviewCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutOrderInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ProductReviewCreateManyOrderInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutOrderInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutOrderInput | Prisma.ProductReviewUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput> | Prisma.ProductReviewCreateWithoutOrderInput[] | Prisma.ProductReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutOrderInput | Prisma.ProductReviewCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutOrderInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ProductReviewCreateManyOrderInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutOrderInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutOrderInput | Prisma.ProductReviewUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput> | Prisma.ProductReviewCreateWithoutReviewedByInput[] | Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput | Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ProductReviewCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUncheckedCreateNestedManyWithoutReviewedByInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput> | Prisma.ProductReviewCreateWithoutReviewedByInput[] | Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput | Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput[];
    createMany?: Prisma.ProductReviewCreateManyReviewedByInputEnvelope;
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
};
export type ProductReviewUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput> | Prisma.ProductReviewCreateWithoutReviewedByInput[] | Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput | Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ProductReviewCreateManyReviewedByInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutReviewedByInput | Prisma.ProductReviewUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewUncheckedUpdateManyWithoutReviewedByNestedInput = {
    create?: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput> | Prisma.ProductReviewCreateWithoutReviewedByInput[] | Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput[];
    connectOrCreate?: Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput | Prisma.ProductReviewCreateOrConnectWithoutReviewedByInput[];
    upsert?: Prisma.ProductReviewUpsertWithWhereUniqueWithoutReviewedByInput | Prisma.ProductReviewUpsertWithWhereUniqueWithoutReviewedByInput[];
    createMany?: Prisma.ProductReviewCreateManyReviewedByInputEnvelope;
    set?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    disconnect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    delete?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    connect?: Prisma.ProductReviewWhereUniqueInput | Prisma.ProductReviewWhereUniqueInput[];
    update?: Prisma.ProductReviewUpdateWithWhereUniqueWithoutReviewedByInput | Prisma.ProductReviewUpdateWithWhereUniqueWithoutReviewedByInput[];
    updateMany?: Prisma.ProductReviewUpdateManyWithWhereWithoutReviewedByInput | Prisma.ProductReviewUpdateManyWithWhereWithoutReviewedByInput[];
    deleteMany?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
};
export type ProductReviewCreateWithoutProductInput = {
    id?: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    order: Prisma.OrderCreateNestedOneWithoutReviewsInput;
    reviewedBy?: Prisma.AdminUserCreateNestedOneWithoutReviewsReviewedInput;
};
export type ProductReviewUncheckedCreateWithoutProductInput = {
    id?: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput>;
};
export type ProductReviewCreateManyProductInputEnvelope = {
    data: Prisma.ProductReviewCreateManyProductInput | Prisma.ProductReviewCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutProductInput, Prisma.ProductReviewUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutProductInput, Prisma.ProductReviewUncheckedCreateWithoutProductInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutProductInput, Prisma.ProductReviewUncheckedUpdateWithoutProductInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutProductInput>;
};
export type ProductReviewScalarWhereInput = {
    AND?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    OR?: Prisma.ProductReviewScalarWhereInput[];
    NOT?: Prisma.ProductReviewScalarWhereInput | Prisma.ProductReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductReview"> | string;
    productId?: Prisma.StringFilter<"ProductReview"> | string;
    customerId?: Prisma.StringFilter<"ProductReview"> | string;
    orderId?: Prisma.StringFilter<"ProductReview"> | string;
    rating?: Prisma.IntFilter<"ProductReview"> | number;
    title?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    comment?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    isApproved?: Prisma.BoolFilter<"ProductReview"> | boolean;
    reviewedById?: Prisma.StringNullableFilter<"ProductReview"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"ProductReview"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductReview"> | Date | string;
};
export type ProductReviewCreateWithoutCustomerInput = {
    id?: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
    order: Prisma.OrderCreateNestedOneWithoutReviewsInput;
    reviewedBy?: Prisma.AdminUserCreateNestedOneWithoutReviewsReviewedInput;
};
export type ProductReviewUncheckedCreateWithoutCustomerInput = {
    id?: string;
    productId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput>;
};
export type ProductReviewCreateManyCustomerInputEnvelope = {
    data: Prisma.ProductReviewCreateManyCustomerInput | Prisma.ProductReviewCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutCustomerInput, Prisma.ProductReviewUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutCustomerInput, Prisma.ProductReviewUncheckedCreateWithoutCustomerInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutCustomerInput, Prisma.ProductReviewUncheckedUpdateWithoutCustomerInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutCustomerInput>;
};
export type ProductReviewCreateWithoutOrderInput = {
    id?: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    reviewedBy?: Prisma.AdminUserCreateNestedOneWithoutReviewsReviewedInput;
};
export type ProductReviewUncheckedCreateWithoutOrderInput = {
    id?: string;
    productId: string;
    customerId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutOrderInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput>;
};
export type ProductReviewCreateManyOrderInputEnvelope = {
    data: Prisma.ProductReviewCreateManyOrderInput | Prisma.ProductReviewCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutOrderInput, Prisma.ProductReviewUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutOrderInput, Prisma.ProductReviewUncheckedCreateWithoutOrderInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutOrderInput, Prisma.ProductReviewUncheckedUpdateWithoutOrderInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutOrderInput>;
};
export type ProductReviewCreateWithoutReviewedByInput = {
    id?: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReviewsInput;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    order: Prisma.OrderCreateNestedOneWithoutReviewsInput;
};
export type ProductReviewUncheckedCreateWithoutReviewedByInput = {
    id?: string;
    productId: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewCreateOrConnectWithoutReviewedByInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput>;
};
export type ProductReviewCreateManyReviewedByInputEnvelope = {
    data: Prisma.ProductReviewCreateManyReviewedByInput | Prisma.ProductReviewCreateManyReviewedByInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewUpsertWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductReviewUpdateWithoutReviewedByInput, Prisma.ProductReviewUncheckedUpdateWithoutReviewedByInput>;
    create: Prisma.XOR<Prisma.ProductReviewCreateWithoutReviewedByInput, Prisma.ProductReviewUncheckedCreateWithoutReviewedByInput>;
};
export type ProductReviewUpdateWithWhereUniqueWithoutReviewedByInput = {
    where: Prisma.ProductReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateWithoutReviewedByInput, Prisma.ProductReviewUncheckedUpdateWithoutReviewedByInput>;
};
export type ProductReviewUpdateManyWithWhereWithoutReviewedByInput = {
    where: Prisma.ProductReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyWithoutReviewedByInput>;
};
export type ProductReviewCreateManyProductInput = {
    id?: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReviewsNestedInput;
    reviewedBy?: Prisma.AdminUserUpdateOneWithoutReviewsReviewedNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyCustomerInput = {
    id?: string;
    productId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReviewsNestedInput;
    reviewedBy?: Prisma.AdminUserUpdateOneWithoutReviewsReviewedNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyOrderInput = {
    id?: string;
    productId: string;
    customerId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedById?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    reviewedBy?: Prisma.AdminUserUpdateOneWithoutReviewsReviewedNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewCreateManyReviewedByInput = {
    id?: string;
    productId: string;
    customerId: string;
    orderId: string;
    rating: number;
    title?: string | null;
    comment?: string | null;
    isApproved?: boolean;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ProductReviewUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewsNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutReviewsNestedInput;
};
export type ProductReviewUncheckedUpdateWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewUncheckedUpdateManyWithoutReviewedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isApproved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    customerId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    isApproved?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    customerId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    isApproved?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    customerId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    isApproved?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
}, ExtArgs["result"]["productReview"]>;
export type ProductReviewSelectScalar = {
    id?: boolean;
    productId?: boolean;
    customerId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    title?: boolean;
    comment?: boolean;
    isApproved?: boolean;
    reviewedById?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
};
export type ProductReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "customerId" | "orderId" | "rating" | "title" | "comment" | "isApproved" | "reviewedById" | "reviewedAt" | "createdAt", ExtArgs["result"]["productReview"]>;
export type ProductReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
};
export type ProductReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
};
export type ProductReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    reviewedBy?: boolean | Prisma.ProductReview$reviewedByArgs<ExtArgs>;
};
export type $ProductReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductReview";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs>;
        reviewedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        customerId: string;
        orderId: string;
        rating: number;
        title: string | null;
        comment: string | null;
        isApproved: boolean;
        reviewedById: string | null;
        reviewedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["productReview"]>;
    composites: {};
};
export type ProductReviewGetPayload<S extends boolean | null | undefined | ProductReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload, S>;
export type ProductReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductReviewCountAggregateInputType | true;
};
export interface ProductReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductReview'];
        meta: {
            name: 'ProductReview';
        };
    };
    findUnique<T extends ProductReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductReviewFindManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductReviewCreateArgs>(args: Prisma.SelectSubset<T, ProductReviewCreateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductReviewDeleteArgs>(args: Prisma.SelectSubset<T, ProductReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductReviewUpdateArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductReviewUpsertArgs>(args: Prisma.SelectSubset<T, ProductReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductReviewClient<runtime.Types.Result.GetResult<Prisma.$ProductReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductReviewCountArgs>(args?: Prisma.Subset<T, ProductReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductReviewCountAggregateOutputType> : number>;
    aggregate<T extends ProductReviewAggregateArgs>(args: Prisma.Subset<T, ProductReviewAggregateArgs>): Prisma.PrismaPromise<GetProductReviewAggregateType<T>>;
    groupBy<T extends ProductReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductReviewFieldRefs;
}
export interface Prisma__ProductReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviewedBy<T extends Prisma.ProductReview$reviewedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductReview$reviewedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductReviewFieldRefs {
    readonly id: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly customerId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly orderId: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly rating: Prisma.FieldRef<"ProductReview", 'Int'>;
    readonly title: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly comment: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly isApproved: Prisma.FieldRef<"ProductReview", 'Boolean'>;
    readonly reviewedById: Prisma.FieldRef<"ProductReview", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"ProductReview", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ProductReview", 'DateTime'>;
}
export type ProductReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where?: Prisma.ProductReviewWhereInput;
    orderBy?: Prisma.ProductReviewOrderByWithRelationInput | Prisma.ProductReviewOrderByWithRelationInput[];
    cursor?: Prisma.ProductReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductReviewScalarFieldEnum | Prisma.ProductReviewScalarFieldEnum[];
};
export type ProductReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
};
export type ProductReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    data: Prisma.ProductReviewCreateManyInput | Prisma.ProductReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
};
export type ProductReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductReviewUpdateManyMutationInput, Prisma.ProductReviewUncheckedUpdateManyInput>;
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
    include?: Prisma.ProductReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductReviewCreateInput, Prisma.ProductReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductReviewUpdateInput, Prisma.ProductReviewUncheckedUpdateInput>;
};
export type ProductReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
    where: Prisma.ProductReviewWhereUniqueInput;
};
export type ProductReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductReviewWhereInput;
    limit?: number;
};
export type ProductReview$reviewedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ProductReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductReviewSelect<ExtArgs> | null;
    omit?: Prisma.ProductReviewOmit<ExtArgs> | null;
    include?: Prisma.ProductReviewInclude<ExtArgs> | null;
};
export {};
