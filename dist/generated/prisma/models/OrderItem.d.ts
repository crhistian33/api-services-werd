import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderItemPayload>;
export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
};
export type OrderItemAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    lineTotal: runtime.Decimal | null;
};
export type OrderItemSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    lineTotal: runtime.Decimal | null;
};
export type OrderItemMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    productId: string | null;
    productName: string | null;
    productSku: string | null;
    productImageUrl: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    lineTotal: runtime.Decimal | null;
    promotionId: string | null;
};
export type OrderItemMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    productId: string | null;
    productName: string | null;
    productSku: string | null;
    productImageUrl: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    unitCost: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    lineTotal: runtime.Decimal | null;
    promotionId: string | null;
};
export type OrderItemCountAggregateOutputType = {
    id: number;
    orderId: number;
    productId: number;
    productName: number;
    productSku: number;
    productImageUrl: number;
    quantity: number;
    unitPrice: number;
    unitCost: number;
    discountAmount: number;
    lineTotal: number;
    promotionId: number;
    _all: number;
};
export type OrderItemAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    unitCost?: true;
    discountAmount?: true;
    lineTotal?: true;
};
export type OrderItemSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    unitCost?: true;
    discountAmount?: true;
    lineTotal?: true;
};
export type OrderItemMinAggregateInputType = {
    id?: true;
    orderId?: true;
    productId?: true;
    productName?: true;
    productSku?: true;
    productImageUrl?: true;
    quantity?: true;
    unitPrice?: true;
    unitCost?: true;
    discountAmount?: true;
    lineTotal?: true;
    promotionId?: true;
};
export type OrderItemMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    productId?: true;
    productName?: true;
    productSku?: true;
    productImageUrl?: true;
    quantity?: true;
    unitPrice?: true;
    unitCost?: true;
    discountAmount?: true;
    lineTotal?: true;
    promotionId?: true;
};
export type OrderItemCountAggregateInputType = {
    id?: true;
    orderId?: true;
    productId?: true;
    productName?: true;
    productSku?: true;
    productImageUrl?: true;
    quantity?: true;
    unitPrice?: true;
    unitCost?: true;
    discountAmount?: true;
    lineTotal?: true;
    promotionId?: true;
    _all?: true;
};
export type OrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderItemCountAggregateInputType;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
};
export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderItem[P]> : Prisma.GetScalarType<T[P], AggregateOrderItem[P]>;
};
export type OrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithAggregationInput | Prisma.OrderItemOrderByWithAggregationInput[];
    by: Prisma.OrderItemScalarFieldEnum[] | Prisma.OrderItemScalarFieldEnum;
    having?: Prisma.OrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderItemCountAggregateInputType | true;
    _avg?: OrderItemAvgAggregateInputType;
    _sum?: OrderItemSumAggregateInputType;
    _min?: OrderItemMinAggregateInputType;
    _max?: OrderItemMaxAggregateInputType;
};
export type OrderItemGroupByOutputType = {
    id: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl: string | null;
    quantity: number;
    unitPrice: runtime.Decimal;
    unitCost: runtime.Decimal | null;
    discountAmount: runtime.Decimal;
    lineTotal: runtime.Decimal;
    promotionId: string | null;
    _count: OrderItemCountAggregateOutputType | null;
    _avg: OrderItemAvgAggregateOutputType | null;
    _sum: OrderItemSumAggregateOutputType | null;
    _min: OrderItemMinAggregateOutputType | null;
    _max: OrderItemMaxAggregateOutputType | null;
};
type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderItemGroupByOutputType[P]>;
}>>;
export type OrderItemWhereInput = {
    AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    OR?: Prisma.OrderItemWhereInput[];
    NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    id?: Prisma.StringFilter<"OrderItem"> | string;
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    productId?: Prisma.StringFilter<"OrderItem"> | string;
    productName?: Prisma.StringFilter<"OrderItem"> | string;
    productSku?: Prisma.StringFilter<"OrderItem"> | string;
    productImageUrl?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.DecimalNullableFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    promotion?: Prisma.XOR<Prisma.PromotionNullableScalarRelationFilter, Prisma.PromotionWhereInput> | null;
    claimItems?: Prisma.OrderClaimItemListRelationFilter;
    refundItems?: Prisma.RefundItemListRelationFilter;
};
export type OrderItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSku?: Prisma.SortOrder;
    productImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    promotionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    promotion?: Prisma.PromotionOrderByWithRelationInput;
    claimItems?: Prisma.OrderClaimItemOrderByRelationAggregateInput;
    refundItems?: Prisma.RefundItemOrderByRelationAggregateInput;
};
export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    OR?: Prisma.OrderItemWhereInput[];
    NOT?: Prisma.OrderItemWhereInput | Prisma.OrderItemWhereInput[];
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    productId?: Prisma.StringFilter<"OrderItem"> | string;
    productName?: Prisma.StringFilter<"OrderItem"> | string;
    productSku?: Prisma.StringFilter<"OrderItem"> | string;
    productImageUrl?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.DecimalNullableFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    promotion?: Prisma.XOR<Prisma.PromotionNullableScalarRelationFilter, Prisma.PromotionWhereInput> | null;
    claimItems?: Prisma.OrderClaimItemListRelationFilter;
    refundItems?: Prisma.RefundItemListRelationFilter;
}, "id">;
export type OrderItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSku?: Prisma.SortOrder;
    productImageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    promotionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderItemCountOrderByAggregateInput;
    _avg?: Prisma.OrderItemAvgOrderByAggregateInput;
    _max?: Prisma.OrderItemMaxOrderByAggregateInput;
    _min?: Prisma.OrderItemMinOrderByAggregateInput;
    _sum?: Prisma.OrderItemSumOrderByAggregateInput;
};
export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderItemScalarWhereWithAggregatesInput | Prisma.OrderItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    productSku?: Prisma.StringWithAggregatesFilter<"OrderItem"> | string;
    productImageUrl?: Prisma.StringNullableWithAggregatesFilter<"OrderItem"> | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"OrderItem"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.DecimalNullableWithAggregatesFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalWithAggregatesFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalWithAggregatesFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.StringNullableWithAggregatesFilter<"OrderItem"> | string | null;
};
export type OrderItemCreateInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutOrderItemsInput;
    promotion?: Prisma.PromotionCreateNestedOneWithoutOrderItemsInput;
    claimItems?: Prisma.OrderClaimItemCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
    promotion?: Prisma.PromotionUpdateOneWithoutOrderItemsNestedInput;
    claimItems?: Prisma.OrderClaimItemUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemCreateManyInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
};
export type OrderItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderItemListRelationFilter = {
    every?: Prisma.OrderItemWhereInput;
    some?: Prisma.OrderItemWhereInput;
    none?: Prisma.OrderItemWhereInput;
};
export type OrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSku?: Prisma.SortOrder;
    productImageUrl?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    promotionId?: Prisma.SortOrder;
};
export type OrderItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
};
export type OrderItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSku?: Prisma.SortOrder;
    productImageUrl?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    promotionId?: Prisma.SortOrder;
};
export type OrderItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    productSku?: Prisma.SortOrder;
    productImageUrl?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
    promotionId?: Prisma.SortOrder;
};
export type OrderItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    lineTotal?: Prisma.SortOrder;
};
export type OrderItemScalarRelationFilter = {
    is?: Prisma.OrderItemWhereInput;
    isNot?: Prisma.OrderItemWhereInput;
};
export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput> | Prisma.OrderItemCreateWithoutProductInput[] | Prisma.OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutProductInput | Prisma.OrderItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.OrderItemCreateManyProductInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput> | Prisma.OrderItemCreateWithoutProductInput[] | Prisma.OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutProductInput | Prisma.OrderItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.OrderItemCreateManyProductInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput> | Prisma.OrderItemCreateWithoutProductInput[] | Prisma.OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutProductInput | Prisma.OrderItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.OrderItemCreateManyProductInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutProductInput | Prisma.OrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput> | Prisma.OrderItemCreateWithoutProductInput[] | Prisma.OrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutProductInput | Prisma.OrderItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.OrderItemCreateManyProductInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutProductInput | Prisma.OrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateNestedManyWithoutPromotionInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput> | Prisma.OrderItemCreateWithoutPromotionInput[] | Prisma.OrderItemUncheckedCreateWithoutPromotionInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPromotionInput | Prisma.OrderItemCreateOrConnectWithoutPromotionInput[];
    createMany?: Prisma.OrderItemCreateManyPromotionInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput> | Prisma.OrderItemCreateWithoutPromotionInput[] | Prisma.OrderItemUncheckedCreateWithoutPromotionInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPromotionInput | Prisma.OrderItemCreateOrConnectWithoutPromotionInput[];
    createMany?: Prisma.OrderItemCreateManyPromotionInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutPromotionNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput> | Prisma.OrderItemCreateWithoutPromotionInput[] | Prisma.OrderItemUncheckedCreateWithoutPromotionInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPromotionInput | Prisma.OrderItemCreateOrConnectWithoutPromotionInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutPromotionInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutPromotionInput[];
    createMany?: Prisma.OrderItemCreateManyPromotionInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutPromotionInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutPromotionInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutPromotionInput | Prisma.OrderItemUpdateManyWithWhereWithoutPromotionInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput> | Prisma.OrderItemCreateWithoutPromotionInput[] | Prisma.OrderItemUncheckedCreateWithoutPromotionInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutPromotionInput | Prisma.OrderItemCreateOrConnectWithoutPromotionInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutPromotionInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutPromotionInput[];
    createMany?: Prisma.OrderItemCreateManyPromotionInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutPromotionInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutPromotionInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutPromotionInput | Prisma.OrderItemUpdateManyWithWhereWithoutPromotionInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
};
export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput> | Prisma.OrderItemCreateWithoutOrderInput[] | Prisma.OrderItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutOrderInput | Prisma.OrderItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderItemCreateManyOrderInputEnvelope;
    set?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    disconnect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    delete?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    connect?: Prisma.OrderItemWhereUniqueInput | Prisma.OrderItemWhereUniqueInput[];
    update?: Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput | Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
};
export type OrderItemCreateNestedOneWithoutClaimItemsInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutClaimItemsInput, Prisma.OrderItemUncheckedCreateWithoutClaimItemsInput>;
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutClaimItemsInput;
    connect?: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemUpdateOneRequiredWithoutClaimItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutClaimItemsInput, Prisma.OrderItemUncheckedCreateWithoutClaimItemsInput>;
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutClaimItemsInput;
    upsert?: Prisma.OrderItemUpsertWithoutClaimItemsInput;
    connect?: Prisma.OrderItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderItemUpdateToOneWithWhereWithoutClaimItemsInput, Prisma.OrderItemUpdateWithoutClaimItemsInput>, Prisma.OrderItemUncheckedUpdateWithoutClaimItemsInput>;
};
export type OrderItemCreateNestedOneWithoutRefundItemsInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutRefundItemsInput, Prisma.OrderItemUncheckedCreateWithoutRefundItemsInput>;
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutRefundItemsInput;
    connect?: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemUpdateOneRequiredWithoutRefundItemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderItemCreateWithoutRefundItemsInput, Prisma.OrderItemUncheckedCreateWithoutRefundItemsInput>;
    connectOrCreate?: Prisma.OrderItemCreateOrConnectWithoutRefundItemsInput;
    upsert?: Prisma.OrderItemUpsertWithoutRefundItemsInput;
    connect?: Prisma.OrderItemWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderItemUpdateToOneWithWhereWithoutRefundItemsInput, Prisma.OrderItemUpdateWithoutRefundItemsInput>, Prisma.OrderItemUncheckedUpdateWithoutRefundItemsInput>;
};
export type OrderItemCreateWithoutProductInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    promotion?: Prisma.PromotionCreateNestedOneWithoutOrderItemsInput;
    claimItems?: Prisma.OrderClaimItemCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string;
    orderId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemCreateOrConnectWithoutProductInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput>;
};
export type OrderItemCreateManyProductInputEnvelope = {
    data: Prisma.OrderItemCreateManyProductInput | Prisma.OrderItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutProductInput, Prisma.OrderItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutProductInput, Prisma.OrderItemUncheckedCreateWithoutProductInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutProductInput, Prisma.OrderItemUncheckedUpdateWithoutProductInput>;
};
export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutProductInput>;
};
export type OrderItemScalarWhereInput = {
    AND?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
    OR?: Prisma.OrderItemScalarWhereInput[];
    NOT?: Prisma.OrderItemScalarWhereInput | Prisma.OrderItemScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderItem"> | string;
    orderId?: Prisma.StringFilter<"OrderItem"> | string;
    productId?: Prisma.StringFilter<"OrderItem"> | string;
    productName?: Prisma.StringFilter<"OrderItem"> | string;
    productSku?: Prisma.StringFilter<"OrderItem"> | string;
    productImageUrl?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
    quantity?: Prisma.IntFilter<"OrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.DecimalNullableFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFilter<"OrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.StringNullableFilter<"OrderItem"> | string | null;
};
export type OrderItemCreateWithoutPromotionInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutOrderItemsInput;
    claimItems?: Prisma.OrderClaimItemCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateWithoutPromotionInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    claimItems?: Prisma.OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemCreateOrConnectWithoutPromotionInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput>;
};
export type OrderItemCreateManyPromotionInputEnvelope = {
    data: Prisma.OrderItemCreateManyPromotionInput | Prisma.OrderItemCreateManyPromotionInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutPromotionInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutPromotionInput, Prisma.OrderItemUncheckedUpdateWithoutPromotionInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutPromotionInput, Prisma.OrderItemUncheckedCreateWithoutPromotionInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutPromotionInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutPromotionInput, Prisma.OrderItemUncheckedUpdateWithoutPromotionInput>;
};
export type OrderItemUpdateManyWithWhereWithoutPromotionInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutPromotionInput>;
};
export type OrderItemCreateWithoutOrderInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    product: Prisma.ProductCreateNestedOneWithoutOrderItemsInput;
    promotion?: Prisma.PromotionCreateNestedOneWithoutOrderItemsInput;
    claimItems?: Prisma.OrderClaimItemCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput;
    refundItems?: Prisma.RefundItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
};
export type OrderItemCreateManyOrderInputEnvelope = {
    data: Prisma.OrderItemCreateManyOrderInput | Prisma.OrderItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutOrderInput, Prisma.OrderItemUncheckedCreateWithoutOrderInput>;
};
export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutOrderInput, Prisma.OrderItemUncheckedUpdateWithoutOrderInput>;
};
export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderItemCreateWithoutClaimItemsInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutOrderItemsInput;
    promotion?: Prisma.PromotionCreateNestedOneWithoutOrderItemsInput;
    refundItems?: Prisma.RefundItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateWithoutClaimItemsInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
    refundItems?: Prisma.RefundItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemCreateOrConnectWithoutClaimItemsInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutClaimItemsInput, Prisma.OrderItemUncheckedCreateWithoutClaimItemsInput>;
};
export type OrderItemUpsertWithoutClaimItemsInput = {
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutClaimItemsInput, Prisma.OrderItemUncheckedUpdateWithoutClaimItemsInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutClaimItemsInput, Prisma.OrderItemUncheckedCreateWithoutClaimItemsInput>;
    where?: Prisma.OrderItemWhereInput;
};
export type OrderItemUpdateToOneWithWhereWithoutClaimItemsInput = {
    where?: Prisma.OrderItemWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutClaimItemsInput, Prisma.OrderItemUncheckedUpdateWithoutClaimItemsInput>;
};
export type OrderItemUpdateWithoutClaimItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
    promotion?: Prisma.PromotionUpdateOneWithoutOrderItemsNestedInput;
    refundItems?: Prisma.RefundItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateWithoutClaimItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refundItems?: Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemCreateWithoutRefundItemsInput = {
    id?: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    order: Prisma.OrderCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutOrderItemsInput;
    promotion?: Prisma.PromotionCreateNestedOneWithoutOrderItemsInput;
    claimItems?: Prisma.OrderClaimItemCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemUncheckedCreateWithoutRefundItemsInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput;
};
export type OrderItemCreateOrConnectWithoutRefundItemsInput = {
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutRefundItemsInput, Prisma.OrderItemUncheckedCreateWithoutRefundItemsInput>;
};
export type OrderItemUpsertWithoutRefundItemsInput = {
    update: Prisma.XOR<Prisma.OrderItemUpdateWithoutRefundItemsInput, Prisma.OrderItemUncheckedUpdateWithoutRefundItemsInput>;
    create: Prisma.XOR<Prisma.OrderItemCreateWithoutRefundItemsInput, Prisma.OrderItemUncheckedCreateWithoutRefundItemsInput>;
    where?: Prisma.OrderItemWhereInput;
};
export type OrderItemUpdateToOneWithWhereWithoutRefundItemsInput = {
    where?: Prisma.OrderItemWhereInput;
    data: Prisma.XOR<Prisma.OrderItemUpdateWithoutRefundItemsInput, Prisma.OrderItemUncheckedUpdateWithoutRefundItemsInput>;
};
export type OrderItemUpdateWithoutRefundItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
    promotion?: Prisma.PromotionUpdateOneWithoutOrderItemsNestedInput;
    claimItems?: Prisma.OrderClaimItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateWithoutRefundItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemCreateManyProductInput = {
    id?: string;
    orderId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
};
export type OrderItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    promotion?: Prisma.PromotionUpdateOneWithoutOrderItemsNestedInput;
    claimItems?: Prisma.OrderClaimItemUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderItemCreateManyPromotionInput = {
    id?: string;
    orderId: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemUpdateWithoutPromotionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
    claimItems?: Prisma.OrderClaimItemUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateWithoutPromotionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    claimItems?: Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateManyWithoutPromotionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type OrderItemCreateManyOrderInput = {
    id?: string;
    productId: string;
    productName: string;
    productSku: string;
    productImageUrl?: string | null;
    quantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: string | null;
};
export type OrderItemUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput;
    promotion?: Prisma.PromotionUpdateOneWithoutOrderItemsNestedInput;
    claimItems?: Prisma.OrderClaimItemUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimItems?: Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput;
    refundItems?: Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput;
};
export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    productSku?: Prisma.StringFieldUpdateOperationsInput | string;
    productImageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    lineTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    promotionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderItemCountOutputType = {
    claimItems: number;
    refundItems: number;
};
export type OrderItemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    claimItems?: boolean | OrderItemCountOutputTypeCountClaimItemsArgs;
    refundItems?: boolean | OrderItemCountOutputTypeCountRefundItemsArgs;
};
export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderItemCountOutputTypeCountClaimItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderClaimItemWhereInput;
};
export type OrderItemCountOutputTypeCountRefundItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundItemWhereInput;
};
export type OrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSku?: boolean;
    productImageUrl?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    unitCost?: boolean;
    discountAmount?: boolean;
    lineTotal?: boolean;
    promotionId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
    claimItems?: boolean | Prisma.OrderItem$claimItemsArgs<ExtArgs>;
    refundItems?: boolean | Prisma.OrderItem$refundItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderItemCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSku?: boolean;
    productImageUrl?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    unitCost?: boolean;
    discountAmount?: boolean;
    lineTotal?: boolean;
    promotionId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSku?: boolean;
    productImageUrl?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    unitCost?: boolean;
    discountAmount?: boolean;
    lineTotal?: boolean;
    promotionId?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
}, ExtArgs["result"]["orderItem"]>;
export type OrderItemSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    productId?: boolean;
    productName?: boolean;
    productSku?: boolean;
    productImageUrl?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    unitCost?: boolean;
    discountAmount?: boolean;
    lineTotal?: boolean;
    promotionId?: boolean;
};
export type OrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "productId" | "productName" | "productSku" | "productImageUrl" | "quantity" | "unitPrice" | "unitCost" | "discountAmount" | "lineTotal" | "promotionId", ExtArgs["result"]["orderItem"]>;
export type OrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
    claimItems?: boolean | Prisma.OrderItem$claimItemsArgs<ExtArgs>;
    refundItems?: boolean | Prisma.OrderItem$refundItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderItemCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
};
export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    promotion?: boolean | Prisma.OrderItem$promotionArgs<ExtArgs>;
};
export type $OrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderItem";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
        promotion: Prisma.$PromotionPayload<ExtArgs> | null;
        claimItems: Prisma.$OrderClaimItemPayload<ExtArgs>[];
        refundItems: Prisma.$RefundItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        productId: string;
        productName: string;
        productSku: string;
        productImageUrl: string | null;
        quantity: number;
        unitPrice: runtime.Decimal;
        unitCost: runtime.Decimal | null;
        discountAmount: runtime.Decimal;
        lineTotal: runtime.Decimal;
        promotionId: string | null;
    }, ExtArgs["result"]["orderItem"]>;
    composites: {};
};
export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderItemPayload, S>;
export type OrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderItemCountAggregateInputType | true;
};
export interface OrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'];
        meta: {
            name: 'OrderItem';
        };
    };
    findUnique<T extends OrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderItemCreateArgs>(args: Prisma.SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderItemDeleteArgs>(args: Prisma.SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderItemUpdateArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderItemUpsertArgs>(args: Prisma.SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderItemCountArgs>(args?: Prisma.Subset<T, OrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderItemCountAggregateOutputType> : number>;
    aggregate<T extends OrderItemAggregateArgs>(args: Prisma.Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>;
    groupBy<T extends OrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderItemFieldRefs;
}
export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    promotion<T extends Prisma.OrderItem$promotionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItem$promotionArgs<ExtArgs>>): Prisma.Prisma__PromotionClient<runtime.Types.Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    claimItems<T extends Prisma.OrderItem$claimItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItem$claimItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refundItems<T extends Prisma.OrderItem$refundItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItem$refundItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderItemFieldRefs {
    readonly id: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly productId: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly productName: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly productSku: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly productImageUrl: Prisma.FieldRef<"OrderItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"OrderItem", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"OrderItem", 'Decimal'>;
    readonly unitCost: Prisma.FieldRef<"OrderItem", 'Decimal'>;
    readonly discountAmount: Prisma.FieldRef<"OrderItem", 'Decimal'>;
    readonly lineTotal: Prisma.FieldRef<"OrderItem", 'Decimal'>;
    readonly promotionId: Prisma.FieldRef<"OrderItem", 'String'>;
}
export type OrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type OrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>;
};
export type OrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    data: Prisma.OrderItemCreateManyInput | Prisma.OrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
};
export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderItemUpdateManyMutationInput, Prisma.OrderItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
    include?: Prisma.OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderItemCreateInput, Prisma.OrderItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderItemUpdateInput, Prisma.OrderItemUncheckedUpdateInput>;
};
export type OrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where: Prisma.OrderItemWhereUniqueInput;
};
export type OrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
    limit?: number;
};
export type OrderItem$promotionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromotionSelect<ExtArgs> | null;
    omit?: Prisma.PromotionOmit<ExtArgs> | null;
    include?: Prisma.PromotionInclude<ExtArgs> | null;
    where?: Prisma.PromotionWhereInput;
};
export type OrderItem$claimItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    where?: Prisma.OrderClaimItemWhereInput;
    orderBy?: Prisma.OrderClaimItemOrderByWithRelationInput | Prisma.OrderClaimItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderClaimItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderClaimItemScalarFieldEnum | Prisma.OrderClaimItemScalarFieldEnum[];
};
export type OrderItem$refundItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    where?: Prisma.RefundItemWhereInput;
    orderBy?: Prisma.RefundItemOrderByWithRelationInput | Prisma.RefundItemOrderByWithRelationInput[];
    cursor?: Prisma.RefundItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundItemScalarFieldEnum | Prisma.RefundItemScalarFieldEnum[];
};
export type OrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
};
export {};
