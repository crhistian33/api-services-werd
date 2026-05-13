import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderClaimItemModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderClaimItemPayload>;
export type AggregateOrderClaimItem = {
    _count: OrderClaimItemCountAggregateOutputType | null;
    _avg: OrderClaimItemAvgAggregateOutputType | null;
    _sum: OrderClaimItemSumAggregateOutputType | null;
    _min: OrderClaimItemMinAggregateOutputType | null;
    _max: OrderClaimItemMaxAggregateOutputType | null;
};
export type OrderClaimItemAvgAggregateOutputType = {
    quantity: number | null;
};
export type OrderClaimItemSumAggregateOutputType = {
    quantity: number | null;
};
export type OrderClaimItemMinAggregateOutputType = {
    id: string | null;
    claimId: string | null;
    orderItemId: string | null;
    quantity: number | null;
    reason: string | null;
};
export type OrderClaimItemMaxAggregateOutputType = {
    id: string | null;
    claimId: string | null;
    orderItemId: string | null;
    quantity: number | null;
    reason: string | null;
};
export type OrderClaimItemCountAggregateOutputType = {
    id: number;
    claimId: number;
    orderItemId: number;
    quantity: number;
    reason: number;
    _all: number;
};
export type OrderClaimItemAvgAggregateInputType = {
    quantity?: true;
};
export type OrderClaimItemSumAggregateInputType = {
    quantity?: true;
};
export type OrderClaimItemMinAggregateInputType = {
    id?: true;
    claimId?: true;
    orderItemId?: true;
    quantity?: true;
    reason?: true;
};
export type OrderClaimItemMaxAggregateInputType = {
    id?: true;
    claimId?: true;
    orderItemId?: true;
    quantity?: true;
    reason?: true;
};
export type OrderClaimItemCountAggregateInputType = {
    id?: true;
    claimId?: true;
    orderItemId?: true;
    quantity?: true;
    reason?: true;
    _all?: true;
};
export type OrderClaimItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderClaimItemWhereInput;
    orderBy?: Prisma.OrderClaimItemOrderByWithRelationInput | Prisma.OrderClaimItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderClaimItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderClaimItemCountAggregateInputType;
    _avg?: OrderClaimItemAvgAggregateInputType;
    _sum?: OrderClaimItemSumAggregateInputType;
    _min?: OrderClaimItemMinAggregateInputType;
    _max?: OrderClaimItemMaxAggregateInputType;
};
export type GetOrderClaimItemAggregateType<T extends OrderClaimItemAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderClaimItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderClaimItem[P]> : Prisma.GetScalarType<T[P], AggregateOrderClaimItem[P]>;
};
export type OrderClaimItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderClaimItemWhereInput;
    orderBy?: Prisma.OrderClaimItemOrderByWithAggregationInput | Prisma.OrderClaimItemOrderByWithAggregationInput[];
    by: Prisma.OrderClaimItemScalarFieldEnum[] | Prisma.OrderClaimItemScalarFieldEnum;
    having?: Prisma.OrderClaimItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderClaimItemCountAggregateInputType | true;
    _avg?: OrderClaimItemAvgAggregateInputType;
    _sum?: OrderClaimItemSumAggregateInputType;
    _min?: OrderClaimItemMinAggregateInputType;
    _max?: OrderClaimItemMaxAggregateInputType;
};
export type OrderClaimItemGroupByOutputType = {
    id: string;
    claimId: string;
    orderItemId: string;
    quantity: number;
    reason: string | null;
    _count: OrderClaimItemCountAggregateOutputType | null;
    _avg: OrderClaimItemAvgAggregateOutputType | null;
    _sum: OrderClaimItemSumAggregateOutputType | null;
    _min: OrderClaimItemMinAggregateOutputType | null;
    _max: OrderClaimItemMaxAggregateOutputType | null;
};
type GetOrderClaimItemGroupByPayload<T extends OrderClaimItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderClaimItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderClaimItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderClaimItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderClaimItemGroupByOutputType[P]>;
}>>;
export type OrderClaimItemWhereInput = {
    AND?: Prisma.OrderClaimItemWhereInput | Prisma.OrderClaimItemWhereInput[];
    OR?: Prisma.OrderClaimItemWhereInput[];
    NOT?: Prisma.OrderClaimItemWhereInput | Prisma.OrderClaimItemWhereInput[];
    id?: Prisma.StringFilter<"OrderClaimItem"> | string;
    claimId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    orderItemId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    quantity?: Prisma.IntFilter<"OrderClaimItem"> | number;
    reason?: Prisma.StringNullableFilter<"OrderClaimItem"> | string | null;
    claim?: Prisma.XOR<Prisma.OrderClaimScalarRelationFilter, Prisma.OrderClaimWhereInput>;
    orderItem?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
};
export type OrderClaimItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    claim?: Prisma.OrderClaimOrderByWithRelationInput;
    orderItem?: Prisma.OrderItemOrderByWithRelationInput;
};
export type OrderClaimItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderClaimItemWhereInput | Prisma.OrderClaimItemWhereInput[];
    OR?: Prisma.OrderClaimItemWhereInput[];
    NOT?: Prisma.OrderClaimItemWhereInput | Prisma.OrderClaimItemWhereInput[];
    claimId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    orderItemId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    quantity?: Prisma.IntFilter<"OrderClaimItem"> | number;
    reason?: Prisma.StringNullableFilter<"OrderClaimItem"> | string | null;
    claim?: Prisma.XOR<Prisma.OrderClaimScalarRelationFilter, Prisma.OrderClaimWhereInput>;
    orderItem?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
}, "id">;
export type OrderClaimItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderClaimItemCountOrderByAggregateInput;
    _avg?: Prisma.OrderClaimItemAvgOrderByAggregateInput;
    _max?: Prisma.OrderClaimItemMaxOrderByAggregateInput;
    _min?: Prisma.OrderClaimItemMinOrderByAggregateInput;
    _sum?: Prisma.OrderClaimItemSumOrderByAggregateInput;
};
export type OrderClaimItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderClaimItemScalarWhereWithAggregatesInput | Prisma.OrderClaimItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderClaimItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderClaimItemScalarWhereWithAggregatesInput | Prisma.OrderClaimItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderClaimItem"> | string;
    claimId?: Prisma.StringWithAggregatesFilter<"OrderClaimItem"> | string;
    orderItemId?: Prisma.StringWithAggregatesFilter<"OrderClaimItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"OrderClaimItem"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"OrderClaimItem"> | string | null;
};
export type OrderClaimItemCreateInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    claim: Prisma.OrderClaimCreateNestedOneWithoutItemsInput;
    orderItem: Prisma.OrderItemCreateNestedOneWithoutClaimItemsInput;
};
export type OrderClaimItemUncheckedCreateInput = {
    id?: string;
    claimId: string;
    orderItemId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claim?: Prisma.OrderClaimUpdateOneRequiredWithoutItemsNestedInput;
    orderItem?: Prisma.OrderItemUpdateOneRequiredWithoutClaimItemsNestedInput;
};
export type OrderClaimItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemCreateManyInput = {
    id?: string;
    claimId: string;
    orderItemId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemListRelationFilter = {
    every?: Prisma.OrderClaimItemWhereInput;
    some?: Prisma.OrderClaimItemWhereInput;
    none?: Prisma.OrderClaimItemWhereInput;
};
export type OrderClaimItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderClaimItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OrderClaimItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type OrderClaimItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OrderClaimItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
};
export type OrderClaimItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type OrderClaimItemCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput> | Prisma.OrderClaimItemCreateWithoutOrderItemInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput | Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.OrderClaimItemCreateManyOrderItemInputEnvelope;
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
};
export type OrderClaimItemUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput> | Prisma.OrderClaimItemCreateWithoutOrderItemInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput | Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.OrderClaimItemCreateManyOrderItemInputEnvelope;
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
};
export type OrderClaimItemUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput> | Prisma.OrderClaimItemCreateWithoutOrderItemInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput | Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.OrderClaimItemCreateManyOrderItemInputEnvelope;
    set?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    disconnect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    delete?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    update?: Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.OrderClaimItemUpdateManyWithWhereWithoutOrderItemInput | Prisma.OrderClaimItemUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
};
export type OrderClaimItemUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput> | Prisma.OrderClaimItemCreateWithoutOrderItemInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput | Prisma.OrderClaimItemCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.OrderClaimItemCreateManyOrderItemInputEnvelope;
    set?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    disconnect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    delete?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    update?: Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.OrderClaimItemUpdateManyWithWhereWithoutOrderItemInput | Prisma.OrderClaimItemUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
};
export type OrderClaimItemCreateNestedManyWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput> | Prisma.OrderClaimItemCreateWithoutClaimInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput | Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput[];
    createMany?: Prisma.OrderClaimItemCreateManyClaimInputEnvelope;
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
};
export type OrderClaimItemUncheckedCreateNestedManyWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput> | Prisma.OrderClaimItemCreateWithoutClaimInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput | Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput[];
    createMany?: Prisma.OrderClaimItemCreateManyClaimInputEnvelope;
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
};
export type OrderClaimItemUpdateManyWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput> | Prisma.OrderClaimItemCreateWithoutClaimInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput | Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput[];
    upsert?: Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutClaimInput | Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutClaimInput[];
    createMany?: Prisma.OrderClaimItemCreateManyClaimInputEnvelope;
    set?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    disconnect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    delete?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    update?: Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutClaimInput | Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutClaimInput[];
    updateMany?: Prisma.OrderClaimItemUpdateManyWithWhereWithoutClaimInput | Prisma.OrderClaimItemUpdateManyWithWhereWithoutClaimInput[];
    deleteMany?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
};
export type OrderClaimItemUncheckedUpdateManyWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput> | Prisma.OrderClaimItemCreateWithoutClaimInput[] | Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput[];
    connectOrCreate?: Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput | Prisma.OrderClaimItemCreateOrConnectWithoutClaimInput[];
    upsert?: Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutClaimInput | Prisma.OrderClaimItemUpsertWithWhereUniqueWithoutClaimInput[];
    createMany?: Prisma.OrderClaimItemCreateManyClaimInputEnvelope;
    set?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    disconnect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    delete?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    connect?: Prisma.OrderClaimItemWhereUniqueInput | Prisma.OrderClaimItemWhereUniqueInput[];
    update?: Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutClaimInput | Prisma.OrderClaimItemUpdateWithWhereUniqueWithoutClaimInput[];
    updateMany?: Prisma.OrderClaimItemUpdateManyWithWhereWithoutClaimInput | Prisma.OrderClaimItemUpdateManyWithWhereWithoutClaimInput[];
    deleteMany?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
};
export type OrderClaimItemCreateWithoutOrderItemInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    claim: Prisma.OrderClaimCreateNestedOneWithoutItemsInput;
};
export type OrderClaimItemUncheckedCreateWithoutOrderItemInput = {
    id?: string;
    claimId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput>;
};
export type OrderClaimItemCreateManyOrderItemInputEnvelope = {
    data: Prisma.OrderClaimItemCreateManyOrderItemInput | Prisma.OrderClaimItemCreateManyOrderItemInput[];
    skipDuplicates?: boolean;
};
export type OrderClaimItemUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderClaimItemUpdateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedCreateWithoutOrderItemInput>;
};
export type OrderClaimItemUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateWithoutOrderItemInput, Prisma.OrderClaimItemUncheckedUpdateWithoutOrderItemInput>;
};
export type OrderClaimItemUpdateManyWithWhereWithoutOrderItemInput = {
    where: Prisma.OrderClaimItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateManyMutationInput, Prisma.OrderClaimItemUncheckedUpdateManyWithoutOrderItemInput>;
};
export type OrderClaimItemScalarWhereInput = {
    AND?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
    OR?: Prisma.OrderClaimItemScalarWhereInput[];
    NOT?: Prisma.OrderClaimItemScalarWhereInput | Prisma.OrderClaimItemScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderClaimItem"> | string;
    claimId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    orderItemId?: Prisma.StringFilter<"OrderClaimItem"> | string;
    quantity?: Prisma.IntFilter<"OrderClaimItem"> | number;
    reason?: Prisma.StringNullableFilter<"OrderClaimItem"> | string | null;
};
export type OrderClaimItemCreateWithoutClaimInput = {
    id?: string;
    quantity: number;
    reason?: string | null;
    orderItem: Prisma.OrderItemCreateNestedOneWithoutClaimItemsInput;
};
export type OrderClaimItemUncheckedCreateWithoutClaimInput = {
    id?: string;
    orderItemId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemCreateOrConnectWithoutClaimInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput>;
};
export type OrderClaimItemCreateManyClaimInputEnvelope = {
    data: Prisma.OrderClaimItemCreateManyClaimInput | Prisma.OrderClaimItemCreateManyClaimInput[];
    skipDuplicates?: boolean;
};
export type OrderClaimItemUpsertWithWhereUniqueWithoutClaimInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderClaimItemUpdateWithoutClaimInput, Prisma.OrderClaimItemUncheckedUpdateWithoutClaimInput>;
    create: Prisma.XOR<Prisma.OrderClaimItemCreateWithoutClaimInput, Prisma.OrderClaimItemUncheckedCreateWithoutClaimInput>;
};
export type OrderClaimItemUpdateWithWhereUniqueWithoutClaimInput = {
    where: Prisma.OrderClaimItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateWithoutClaimInput, Prisma.OrderClaimItemUncheckedUpdateWithoutClaimInput>;
};
export type OrderClaimItemUpdateManyWithWhereWithoutClaimInput = {
    where: Prisma.OrderClaimItemScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateManyMutationInput, Prisma.OrderClaimItemUncheckedUpdateManyWithoutClaimInput>;
};
export type OrderClaimItemCreateManyOrderItemInput = {
    id?: string;
    claimId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claim?: Prisma.OrderClaimUpdateOneRequiredWithoutItemsNestedInput;
};
export type OrderClaimItemUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemUncheckedUpdateManyWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemCreateManyClaimInput = {
    id?: string;
    orderItemId: string;
    quantity: number;
    reason?: string | null;
};
export type OrderClaimItemUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItem?: Prisma.OrderItemUpdateOneRequiredWithoutClaimItemsNestedInput;
};
export type OrderClaimItemUncheckedUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemUncheckedUpdateManyWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OrderClaimItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    claimId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderClaimItem"]>;
export type OrderClaimItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    claimId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderClaimItem"]>;
export type OrderClaimItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    claimId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderClaimItem"]>;
export type OrderClaimItemSelectScalar = {
    id?: boolean;
    claimId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    reason?: boolean;
};
export type OrderClaimItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "claimId" | "orderItemId" | "quantity" | "reason", ExtArgs["result"]["orderClaimItem"]>;
export type OrderClaimItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type OrderClaimItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type OrderClaimItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    claim?: boolean | Prisma.OrderClaimDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type $OrderClaimItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderClaimItem";
    objects: {
        claim: Prisma.$OrderClaimPayload<ExtArgs>;
        orderItem: Prisma.$OrderItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        claimId: string;
        orderItemId: string;
        quantity: number;
        reason: string | null;
    }, ExtArgs["result"]["orderClaimItem"]>;
    composites: {};
};
export type OrderClaimItemGetPayload<S extends boolean | null | undefined | OrderClaimItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload, S>;
export type OrderClaimItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderClaimItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderClaimItemCountAggregateInputType | true;
};
export interface OrderClaimItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderClaimItem'];
        meta: {
            name: 'OrderClaimItem';
        };
    };
    findUnique<T extends OrderClaimItemFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderClaimItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderClaimItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderClaimItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderClaimItemFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderClaimItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderClaimItemFindManyArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderClaimItemCreateArgs>(args: Prisma.SelectSubset<T, OrderClaimItemCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderClaimItemCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderClaimItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderClaimItemDeleteArgs>(args: Prisma.SelectSubset<T, OrderClaimItemDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderClaimItemUpdateArgs>(args: Prisma.SelectSubset<T, OrderClaimItemUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderClaimItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderClaimItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderClaimItemUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderClaimItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderClaimItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderClaimItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderClaimItemUpsertArgs>(args: Prisma.SelectSubset<T, OrderClaimItemUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClaimItemClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderClaimItemCountArgs>(args?: Prisma.Subset<T, OrderClaimItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderClaimItemCountAggregateOutputType> : number>;
    aggregate<T extends OrderClaimItemAggregateArgs>(args: Prisma.Subset<T, OrderClaimItemAggregateArgs>): Prisma.PrismaPromise<GetOrderClaimItemAggregateType<T>>;
    groupBy<T extends OrderClaimItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderClaimItemGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderClaimItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderClaimItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderClaimItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderClaimItemFieldRefs;
}
export interface Prisma__OrderClaimItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    claim<T extends Prisma.OrderClaimDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderClaimDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClaimClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItem<T extends Prisma.OrderItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItemDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderClaimItemFieldRefs {
    readonly id: Prisma.FieldRef<"OrderClaimItem", 'String'>;
    readonly claimId: Prisma.FieldRef<"OrderClaimItem", 'String'>;
    readonly orderItemId: Prisma.FieldRef<"OrderClaimItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"OrderClaimItem", 'Int'>;
    readonly reason: Prisma.FieldRef<"OrderClaimItem", 'String'>;
}
export type OrderClaimItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    where: Prisma.OrderClaimItemWhereUniqueInput;
};
export type OrderClaimItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    where: Prisma.OrderClaimItemWhereUniqueInput;
};
export type OrderClaimItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderClaimItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderClaimItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrderClaimItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderClaimItemCreateInput, Prisma.OrderClaimItemUncheckedCreateInput>;
};
export type OrderClaimItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderClaimItemCreateManyInput | Prisma.OrderClaimItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderClaimItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    data: Prisma.OrderClaimItemCreateManyInput | Prisma.OrderClaimItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderClaimItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderClaimItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateInput, Prisma.OrderClaimItemUncheckedUpdateInput>;
    where: Prisma.OrderClaimItemWhereUniqueInput;
};
export type OrderClaimItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateManyMutationInput, Prisma.OrderClaimItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderClaimItemWhereInput;
    limit?: number;
};
export type OrderClaimItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderClaimItemUpdateManyMutationInput, Prisma.OrderClaimItemUncheckedUpdateManyInput>;
    where?: Prisma.OrderClaimItemWhereInput;
    limit?: number;
    include?: Prisma.OrderClaimItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderClaimItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    where: Prisma.OrderClaimItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderClaimItemCreateInput, Prisma.OrderClaimItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderClaimItemUpdateInput, Prisma.OrderClaimItemUncheckedUpdateInput>;
};
export type OrderClaimItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
    where: Prisma.OrderClaimItemWhereUniqueInput;
};
export type OrderClaimItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderClaimItemWhereInput;
    limit?: number;
};
export type OrderClaimItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimItemOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimItemInclude<ExtArgs> | null;
};
export {};
