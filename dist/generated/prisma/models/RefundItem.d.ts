import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RefundItemModel = runtime.Types.Result.DefaultSelection<Prisma.$RefundItemPayload>;
export type AggregateRefundItem = {
    _count: RefundItemCountAggregateOutputType | null;
    _avg: RefundItemAvgAggregateOutputType | null;
    _sum: RefundItemSumAggregateOutputType | null;
    _min: RefundItemMinAggregateOutputType | null;
    _max: RefundItemMaxAggregateOutputType | null;
};
export type RefundItemAvgAggregateOutputType = {
    quantity: number | null;
    amount: runtime.Decimal | null;
};
export type RefundItemSumAggregateOutputType = {
    quantity: number | null;
    amount: runtime.Decimal | null;
};
export type RefundItemMinAggregateOutputType = {
    id: string | null;
    refundId: string | null;
    orderItemId: string | null;
    quantity: number | null;
    amount: runtime.Decimal | null;
    restockQuantity: boolean | null;
};
export type RefundItemMaxAggregateOutputType = {
    id: string | null;
    refundId: string | null;
    orderItemId: string | null;
    quantity: number | null;
    amount: runtime.Decimal | null;
    restockQuantity: boolean | null;
};
export type RefundItemCountAggregateOutputType = {
    id: number;
    refundId: number;
    orderItemId: number;
    quantity: number;
    amount: number;
    restockQuantity: number;
    _all: number;
};
export type RefundItemAvgAggregateInputType = {
    quantity?: true;
    amount?: true;
};
export type RefundItemSumAggregateInputType = {
    quantity?: true;
    amount?: true;
};
export type RefundItemMinAggregateInputType = {
    id?: true;
    refundId?: true;
    orderItemId?: true;
    quantity?: true;
    amount?: true;
    restockQuantity?: true;
};
export type RefundItemMaxAggregateInputType = {
    id?: true;
    refundId?: true;
    orderItemId?: true;
    quantity?: true;
    amount?: true;
    restockQuantity?: true;
};
export type RefundItemCountAggregateInputType = {
    id?: true;
    refundId?: true;
    orderItemId?: true;
    quantity?: true;
    amount?: true;
    restockQuantity?: true;
    _all?: true;
};
export type RefundItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundItemWhereInput;
    orderBy?: Prisma.RefundItemOrderByWithRelationInput | Prisma.RefundItemOrderByWithRelationInput[];
    cursor?: Prisma.RefundItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundItemCountAggregateInputType;
    _avg?: RefundItemAvgAggregateInputType;
    _sum?: RefundItemSumAggregateInputType;
    _min?: RefundItemMinAggregateInputType;
    _max?: RefundItemMaxAggregateInputType;
};
export type GetRefundItemAggregateType<T extends RefundItemAggregateArgs> = {
    [P in keyof T & keyof AggregateRefundItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefundItem[P]> : Prisma.GetScalarType<T[P], AggregateRefundItem[P]>;
};
export type RefundItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundItemWhereInput;
    orderBy?: Prisma.RefundItemOrderByWithAggregationInput | Prisma.RefundItemOrderByWithAggregationInput[];
    by: Prisma.RefundItemScalarFieldEnum[] | Prisma.RefundItemScalarFieldEnum;
    having?: Prisma.RefundItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundItemCountAggregateInputType | true;
    _avg?: RefundItemAvgAggregateInputType;
    _sum?: RefundItemSumAggregateInputType;
    _min?: RefundItemMinAggregateInputType;
    _max?: RefundItemMaxAggregateInputType;
};
export type RefundItemGroupByOutputType = {
    id: string;
    refundId: string;
    orderItemId: string;
    quantity: number;
    amount: runtime.Decimal;
    restockQuantity: boolean;
    _count: RefundItemCountAggregateOutputType | null;
    _avg: RefundItemAvgAggregateOutputType | null;
    _sum: RefundItemSumAggregateOutputType | null;
    _min: RefundItemMinAggregateOutputType | null;
    _max: RefundItemMaxAggregateOutputType | null;
};
type GetRefundItemGroupByPayload<T extends RefundItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundItemGroupByOutputType[P]>;
}>>;
export type RefundItemWhereInput = {
    AND?: Prisma.RefundItemWhereInput | Prisma.RefundItemWhereInput[];
    OR?: Prisma.RefundItemWhereInput[];
    NOT?: Prisma.RefundItemWhereInput | Prisma.RefundItemWhereInput[];
    id?: Prisma.StringFilter<"RefundItem"> | string;
    refundId?: Prisma.StringFilter<"RefundItem"> | string;
    orderItemId?: Prisma.StringFilter<"RefundItem"> | string;
    quantity?: Prisma.IntFilter<"RefundItem"> | number;
    amount?: Prisma.DecimalFilter<"RefundItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFilter<"RefundItem"> | boolean;
    refund?: Prisma.XOR<Prisma.RefundScalarRelationFilter, Prisma.RefundWhereInput>;
    orderItem?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
};
export type RefundItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    restockQuantity?: Prisma.SortOrder;
    refund?: Prisma.RefundOrderByWithRelationInput;
    orderItem?: Prisma.OrderItemOrderByWithRelationInput;
};
export type RefundItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RefundItemWhereInput | Prisma.RefundItemWhereInput[];
    OR?: Prisma.RefundItemWhereInput[];
    NOT?: Prisma.RefundItemWhereInput | Prisma.RefundItemWhereInput[];
    refundId?: Prisma.StringFilter<"RefundItem"> | string;
    orderItemId?: Prisma.StringFilter<"RefundItem"> | string;
    quantity?: Prisma.IntFilter<"RefundItem"> | number;
    amount?: Prisma.DecimalFilter<"RefundItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFilter<"RefundItem"> | boolean;
    refund?: Prisma.XOR<Prisma.RefundScalarRelationFilter, Prisma.RefundWhereInput>;
    orderItem?: Prisma.XOR<Prisma.OrderItemScalarRelationFilter, Prisma.OrderItemWhereInput>;
}, "id">;
export type RefundItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    restockQuantity?: Prisma.SortOrder;
    _count?: Prisma.RefundItemCountOrderByAggregateInput;
    _avg?: Prisma.RefundItemAvgOrderByAggregateInput;
    _max?: Prisma.RefundItemMaxOrderByAggregateInput;
    _min?: Prisma.RefundItemMinOrderByAggregateInput;
    _sum?: Prisma.RefundItemSumOrderByAggregateInput;
};
export type RefundItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.RefundItemScalarWhereWithAggregatesInput | Prisma.RefundItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.RefundItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RefundItemScalarWhereWithAggregatesInput | Prisma.RefundItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RefundItem"> | string;
    refundId?: Prisma.StringWithAggregatesFilter<"RefundItem"> | string;
    orderItemId?: Prisma.StringWithAggregatesFilter<"RefundItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"RefundItem"> | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"RefundItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolWithAggregatesFilter<"RefundItem"> | boolean;
};
export type RefundItemCreateInput = {
    id?: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
    refund: Prisma.RefundCreateNestedOneWithoutItemsInput;
    orderItem: Prisma.OrderItemCreateNestedOneWithoutRefundItemsInput;
};
export type RefundItemUncheckedCreateInput = {
    id?: string;
    refundId: string;
    orderItemId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    refund?: Prisma.RefundUpdateOneRequiredWithoutItemsNestedInput;
    orderItem?: Prisma.OrderItemUpdateOneRequiredWithoutRefundItemsNestedInput;
};
export type RefundItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemCreateManyInput = {
    id?: string;
    refundId: string;
    orderItemId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemListRelationFilter = {
    every?: Prisma.RefundItemWhereInput;
    some?: Prisma.RefundItemWhereInput;
    none?: Prisma.RefundItemWhereInput;
};
export type RefundItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RefundItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    restockQuantity?: Prisma.SortOrder;
};
export type RefundItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type RefundItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    restockQuantity?: Prisma.SortOrder;
};
export type RefundItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    refundId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    restockQuantity?: Prisma.SortOrder;
};
export type RefundItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type RefundItemCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput> | Prisma.RefundItemCreateWithoutOrderItemInput[] | Prisma.RefundItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutOrderItemInput | Prisma.RefundItemCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.RefundItemCreateManyOrderItemInputEnvelope;
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
};
export type RefundItemUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput> | Prisma.RefundItemCreateWithoutOrderItemInput[] | Prisma.RefundItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutOrderItemInput | Prisma.RefundItemCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.RefundItemCreateManyOrderItemInputEnvelope;
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
};
export type RefundItemUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput> | Prisma.RefundItemCreateWithoutOrderItemInput[] | Prisma.RefundItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutOrderItemInput | Prisma.RefundItemCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.RefundItemUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.RefundItemUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.RefundItemCreateManyOrderItemInputEnvelope;
    set?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    disconnect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    delete?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    update?: Prisma.RefundItemUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.RefundItemUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.RefundItemUpdateManyWithWhereWithoutOrderItemInput | Prisma.RefundItemUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
};
export type RefundItemUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput> | Prisma.RefundItemCreateWithoutOrderItemInput[] | Prisma.RefundItemUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutOrderItemInput | Prisma.RefundItemCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.RefundItemUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.RefundItemUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.RefundItemCreateManyOrderItemInputEnvelope;
    set?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    disconnect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    delete?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    update?: Prisma.RefundItemUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.RefundItemUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.RefundItemUpdateManyWithWhereWithoutOrderItemInput | Prisma.RefundItemUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
};
export type RefundItemCreateNestedManyWithoutRefundInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput> | Prisma.RefundItemCreateWithoutRefundInput[] | Prisma.RefundItemUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutRefundInput | Prisma.RefundItemCreateOrConnectWithoutRefundInput[];
    createMany?: Prisma.RefundItemCreateManyRefundInputEnvelope;
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
};
export type RefundItemUncheckedCreateNestedManyWithoutRefundInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput> | Prisma.RefundItemCreateWithoutRefundInput[] | Prisma.RefundItemUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutRefundInput | Prisma.RefundItemCreateOrConnectWithoutRefundInput[];
    createMany?: Prisma.RefundItemCreateManyRefundInputEnvelope;
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
};
export type RefundItemUpdateManyWithoutRefundNestedInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput> | Prisma.RefundItemCreateWithoutRefundInput[] | Prisma.RefundItemUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutRefundInput | Prisma.RefundItemCreateOrConnectWithoutRefundInput[];
    upsert?: Prisma.RefundItemUpsertWithWhereUniqueWithoutRefundInput | Prisma.RefundItemUpsertWithWhereUniqueWithoutRefundInput[];
    createMany?: Prisma.RefundItemCreateManyRefundInputEnvelope;
    set?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    disconnect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    delete?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    update?: Prisma.RefundItemUpdateWithWhereUniqueWithoutRefundInput | Prisma.RefundItemUpdateWithWhereUniqueWithoutRefundInput[];
    updateMany?: Prisma.RefundItemUpdateManyWithWhereWithoutRefundInput | Prisma.RefundItemUpdateManyWithWhereWithoutRefundInput[];
    deleteMany?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
};
export type RefundItemUncheckedUpdateManyWithoutRefundNestedInput = {
    create?: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput> | Prisma.RefundItemCreateWithoutRefundInput[] | Prisma.RefundItemUncheckedCreateWithoutRefundInput[];
    connectOrCreate?: Prisma.RefundItemCreateOrConnectWithoutRefundInput | Prisma.RefundItemCreateOrConnectWithoutRefundInput[];
    upsert?: Prisma.RefundItemUpsertWithWhereUniqueWithoutRefundInput | Prisma.RefundItemUpsertWithWhereUniqueWithoutRefundInput[];
    createMany?: Prisma.RefundItemCreateManyRefundInputEnvelope;
    set?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    disconnect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    delete?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    connect?: Prisma.RefundItemWhereUniqueInput | Prisma.RefundItemWhereUniqueInput[];
    update?: Prisma.RefundItemUpdateWithWhereUniqueWithoutRefundInput | Prisma.RefundItemUpdateWithWhereUniqueWithoutRefundInput[];
    updateMany?: Prisma.RefundItemUpdateManyWithWhereWithoutRefundInput | Prisma.RefundItemUpdateManyWithWhereWithoutRefundInput[];
    deleteMany?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
};
export type RefundItemCreateWithoutOrderItemInput = {
    id?: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
    refund: Prisma.RefundCreateNestedOneWithoutItemsInput;
};
export type RefundItemUncheckedCreateWithoutOrderItemInput = {
    id?: string;
    refundId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput>;
};
export type RefundItemCreateManyOrderItemInputEnvelope = {
    data: Prisma.RefundItemCreateManyOrderItemInput | Prisma.RefundItemCreateManyOrderItemInput[];
    skipDuplicates?: boolean;
};
export type RefundItemUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundItemUpdateWithoutOrderItemInput, Prisma.RefundItemUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.RefundItemCreateWithoutOrderItemInput, Prisma.RefundItemUncheckedCreateWithoutOrderItemInput>;
};
export type RefundItemUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundItemUpdateWithoutOrderItemInput, Prisma.RefundItemUncheckedUpdateWithoutOrderItemInput>;
};
export type RefundItemUpdateManyWithWhereWithoutOrderItemInput = {
    where: Prisma.RefundItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundItemUpdateManyMutationInput, Prisma.RefundItemUncheckedUpdateManyWithoutOrderItemInput>;
};
export type RefundItemScalarWhereInput = {
    AND?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
    OR?: Prisma.RefundItemScalarWhereInput[];
    NOT?: Prisma.RefundItemScalarWhereInput | Prisma.RefundItemScalarWhereInput[];
    id?: Prisma.StringFilter<"RefundItem"> | string;
    refundId?: Prisma.StringFilter<"RefundItem"> | string;
    orderItemId?: Prisma.StringFilter<"RefundItem"> | string;
    quantity?: Prisma.IntFilter<"RefundItem"> | number;
    amount?: Prisma.DecimalFilter<"RefundItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFilter<"RefundItem"> | boolean;
};
export type RefundItemCreateWithoutRefundInput = {
    id?: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
    orderItem: Prisma.OrderItemCreateNestedOneWithoutRefundItemsInput;
};
export type RefundItemUncheckedCreateWithoutRefundInput = {
    id?: string;
    orderItemId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemCreateOrConnectWithoutRefundInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput>;
};
export type RefundItemCreateManyRefundInputEnvelope = {
    data: Prisma.RefundItemCreateManyRefundInput | Prisma.RefundItemCreateManyRefundInput[];
    skipDuplicates?: boolean;
};
export type RefundItemUpsertWithWhereUniqueWithoutRefundInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundItemUpdateWithoutRefundInput, Prisma.RefundItemUncheckedUpdateWithoutRefundInput>;
    create: Prisma.XOR<Prisma.RefundItemCreateWithoutRefundInput, Prisma.RefundItemUncheckedCreateWithoutRefundInput>;
};
export type RefundItemUpdateWithWhereUniqueWithoutRefundInput = {
    where: Prisma.RefundItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundItemUpdateWithoutRefundInput, Prisma.RefundItemUncheckedUpdateWithoutRefundInput>;
};
export type RefundItemUpdateManyWithWhereWithoutRefundInput = {
    where: Prisma.RefundItemScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundItemUpdateManyMutationInput, Prisma.RefundItemUncheckedUpdateManyWithoutRefundInput>;
};
export type RefundItemCreateManyOrderItemInput = {
    id?: string;
    refundId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    refund?: Prisma.RefundUpdateOneRequiredWithoutItemsNestedInput;
};
export type RefundItemUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemUncheckedUpdateManyWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    refundId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemCreateManyRefundInput = {
    id?: string;
    orderItemId: string;
    quantity: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: boolean;
};
export type RefundItemUpdateWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orderItem?: Prisma.OrderItemUpdateOneRequiredWithoutRefundItemsNestedInput;
};
export type RefundItemUncheckedUpdateWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemUncheckedUpdateManyWithoutRefundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderItemId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    restockQuantity?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type RefundItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    amount?: boolean;
    restockQuantity?: boolean;
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refundItem"]>;
export type RefundItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    amount?: boolean;
    restockQuantity?: boolean;
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refundItem"]>;
export type RefundItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    refundId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    amount?: boolean;
    restockQuantity?: boolean;
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refundItem"]>;
export type RefundItemSelectScalar = {
    id?: boolean;
    refundId?: boolean;
    orderItemId?: boolean;
    quantity?: boolean;
    amount?: boolean;
    restockQuantity?: boolean;
};
export type RefundItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "refundId" | "orderItemId" | "quantity" | "amount" | "restockQuantity", ExtArgs["result"]["refundItem"]>;
export type RefundItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type RefundItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type RefundItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refund?: boolean | Prisma.RefundDefaultArgs<ExtArgs>;
    orderItem?: boolean | Prisma.OrderItemDefaultArgs<ExtArgs>;
};
export type $RefundItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RefundItem";
    objects: {
        refund: Prisma.$RefundPayload<ExtArgs>;
        orderItem: Prisma.$OrderItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        refundId: string;
        orderItemId: string;
        quantity: number;
        amount: runtime.Decimal;
        restockQuantity: boolean;
    }, ExtArgs["result"]["refundItem"]>;
    composites: {};
};
export type RefundItemGetPayload<S extends boolean | null | undefined | RefundItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefundItemPayload, S>;
export type RefundItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RefundItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundItemCountAggregateInputType | true;
};
export interface RefundItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RefundItem'];
        meta: {
            name: 'RefundItem';
        };
    };
    findUnique<T extends RefundItemFindUniqueArgs>(args: Prisma.SelectSubset<T, RefundItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RefundItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefundItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RefundItemFindFirstArgs>(args?: Prisma.SelectSubset<T, RefundItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RefundItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefundItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RefundItemFindManyArgs>(args?: Prisma.SelectSubset<T, RefundItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RefundItemCreateArgs>(args: Prisma.SelectSubset<T, RefundItemCreateArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RefundItemCreateManyArgs>(args?: Prisma.SelectSubset<T, RefundItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RefundItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RefundItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RefundItemDeleteArgs>(args: Prisma.SelectSubset<T, RefundItemDeleteArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RefundItemUpdateArgs>(args: Prisma.SelectSubset<T, RefundItemUpdateArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RefundItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefundItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RefundItemUpdateManyArgs>(args: Prisma.SelectSubset<T, RefundItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RefundItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RefundItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RefundItemUpsertArgs>(args: Prisma.SelectSubset<T, RefundItemUpsertArgs<ExtArgs>>): Prisma.Prisma__RefundItemClient<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RefundItemCountArgs>(args?: Prisma.Subset<T, RefundItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundItemCountAggregateOutputType> : number>;
    aggregate<T extends RefundItemAggregateArgs>(args: Prisma.Subset<T, RefundItemAggregateArgs>): Prisma.PrismaPromise<GetRefundItemAggregateType<T>>;
    groupBy<T extends RefundItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RefundItemGroupByArgs['orderBy'];
    } : {
        orderBy?: RefundItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RefundItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RefundItemFieldRefs;
}
export interface Prisma__RefundItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    refund<T extends Prisma.RefundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RefundDefaultArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItem<T extends Prisma.OrderItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderItemDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderItemClient<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RefundItemFieldRefs {
    readonly id: Prisma.FieldRef<"RefundItem", 'String'>;
    readonly refundId: Prisma.FieldRef<"RefundItem", 'String'>;
    readonly orderItemId: Prisma.FieldRef<"RefundItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"RefundItem", 'Int'>;
    readonly amount: Prisma.FieldRef<"RefundItem", 'Decimal'>;
    readonly restockQuantity: Prisma.FieldRef<"RefundItem", 'Boolean'>;
}
export type RefundItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    where: Prisma.RefundItemWhereUniqueInput;
};
export type RefundItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    where: Prisma.RefundItemWhereUniqueInput;
};
export type RefundItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefundItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundItemCreateInput, Prisma.RefundItemUncheckedCreateInput>;
};
export type RefundItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RefundItemCreateManyInput | Prisma.RefundItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefundItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    data: Prisma.RefundItemCreateManyInput | Prisma.RefundItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RefundItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RefundItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundItemUpdateInput, Prisma.RefundItemUncheckedUpdateInput>;
    where: Prisma.RefundItemWhereUniqueInput;
};
export type RefundItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RefundItemUpdateManyMutationInput, Prisma.RefundItemUncheckedUpdateManyInput>;
    where?: Prisma.RefundItemWhereInput;
    limit?: number;
};
export type RefundItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundItemUpdateManyMutationInput, Prisma.RefundItemUncheckedUpdateManyInput>;
    where?: Prisma.RefundItemWhereInput;
    limit?: number;
    include?: Prisma.RefundItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RefundItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    where: Prisma.RefundItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundItemCreateInput, Prisma.RefundItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RefundItemUpdateInput, Prisma.RefundItemUncheckedUpdateInput>;
};
export type RefundItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
    where: Prisma.RefundItemWhereUniqueInput;
};
export type RefundItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundItemWhereInput;
    limit?: number;
};
export type RefundItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundItemSelect<ExtArgs> | null;
    omit?: Prisma.RefundItemOmit<ExtArgs> | null;
    include?: Prisma.RefundItemInclude<ExtArgs> | null;
};
export {};
