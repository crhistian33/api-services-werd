import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RefundModel = runtime.Types.Result.DefaultSelection<Prisma.$RefundPayload>;
export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
export type RefundAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type RefundMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    claimId: string | null;
    amount: runtime.Decimal | null;
    status: $Enums.RefundStatus | null;
    method: $Enums.RefundMethod | null;
    reason: string | null;
    processedById: string | null;
    createdById: string | null;
    gatewayRefundId: string | null;
    adminNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefundMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    claimId: string | null;
    amount: runtime.Decimal | null;
    status: $Enums.RefundStatus | null;
    method: $Enums.RefundMethod | null;
    reason: string | null;
    processedById: string | null;
    createdById: string | null;
    gatewayRefundId: string | null;
    adminNotes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RefundCountAggregateOutputType = {
    id: number;
    orderId: number;
    claimId: number;
    amount: number;
    status: number;
    method: number;
    reason: number;
    processedById: number;
    createdById: number;
    gatewayRefundId: number;
    adminNotes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RefundAvgAggregateInputType = {
    amount?: true;
};
export type RefundSumAggregateInputType = {
    amount?: true;
};
export type RefundMinAggregateInputType = {
    id?: true;
    orderId?: true;
    claimId?: true;
    amount?: true;
    status?: true;
    method?: true;
    reason?: true;
    processedById?: true;
    createdById?: true;
    gatewayRefundId?: true;
    adminNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefundMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    claimId?: true;
    amount?: true;
    status?: true;
    method?: true;
    reason?: true;
    processedById?: true;
    createdById?: true;
    gatewayRefundId?: true;
    adminNotes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RefundCountAggregateInputType = {
    id?: true;
    orderId?: true;
    claimId?: true;
    amount?: true;
    status?: true;
    method?: true;
    reason?: true;
    processedById?: true;
    createdById?: true;
    gatewayRefundId?: true;
    adminNotes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RefundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefundCountAggregateInputType;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
    [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefund[P]> : Prisma.GetScalarType<T[P], AggregateRefund[P]>;
};
export type RefundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithAggregationInput | Prisma.RefundOrderByWithAggregationInput[];
    by: Prisma.RefundScalarFieldEnum[] | Prisma.RefundScalarFieldEnum;
    having?: Prisma.RefundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefundCountAggregateInputType | true;
    _avg?: RefundAvgAggregateInputType;
    _sum?: RefundSumAggregateInputType;
    _min?: RefundMinAggregateInputType;
    _max?: RefundMaxAggregateInputType;
};
export type RefundGroupByOutputType = {
    id: string;
    orderId: string;
    claimId: string | null;
    amount: runtime.Decimal;
    status: $Enums.RefundStatus;
    method: $Enums.RefundMethod;
    reason: string | null;
    processedById: string | null;
    createdById: string | null;
    gatewayRefundId: string | null;
    adminNotes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RefundCountAggregateOutputType | null;
    _avg: RefundAvgAggregateOutputType | null;
    _sum: RefundSumAggregateOutputType | null;
    _min: RefundMinAggregateOutputType | null;
    _max: RefundMaxAggregateOutputType | null;
};
type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefundGroupByOutputType[P]>;
}>>;
export type RefundWhereInput = {
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    id?: Prisma.StringFilter<"Refund"> | string;
    orderId?: Prisma.StringFilter<"Refund"> | string;
    claimId?: Prisma.StringNullableFilter<"Refund"> | string | null;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFilter<"Refund"> | $Enums.RefundMethod;
    reason?: Prisma.StringNullableFilter<"Refund"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    gatewayRefundId?: Prisma.StringNullableFilter<"Refund"> | string | null;
    adminNotes?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    items?: Prisma.RefundItemListRelationFilter;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    claim?: Prisma.XOR<Prisma.OrderClaimNullableScalarRelationFilter, Prisma.OrderClaimWhereInput> | null;
    processedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type RefundOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    claimId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    gatewayRefundId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    items?: Prisma.RefundItemOrderByRelationAggregateInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    claim?: Prisma.OrderClaimOrderByWithRelationInput;
    processedBy?: Prisma.AdminUserOrderByWithRelationInput;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    claimId?: string;
    gatewayRefundId?: string;
    AND?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    OR?: Prisma.RefundWhereInput[];
    NOT?: Prisma.RefundWhereInput | Prisma.RefundWhereInput[];
    orderId?: Prisma.StringFilter<"Refund"> | string;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFilter<"Refund"> | $Enums.RefundMethod;
    reason?: Prisma.StringNullableFilter<"Refund"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    adminNotes?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    items?: Prisma.RefundItemListRelationFilter;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    claim?: Prisma.XOR<Prisma.OrderClaimNullableScalarRelationFilter, Prisma.OrderClaimWhereInput> | null;
    processedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "claimId" | "gatewayRefundId">;
export type RefundOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    claimId?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    processedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    gatewayRefundId?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RefundCountOrderByAggregateInput;
    _avg?: Prisma.RefundAvgOrderByAggregateInput;
    _max?: Prisma.RefundMaxOrderByAggregateInput;
    _min?: Prisma.RefundMinOrderByAggregateInput;
    _sum?: Prisma.RefundSumOrderByAggregateInput;
};
export type RefundScalarWhereWithAggregatesInput = {
    AND?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    OR?: Prisma.RefundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RefundScalarWhereWithAggregatesInput | Prisma.RefundScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"Refund"> | string;
    claimId?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusWithAggregatesFilter<"Refund"> | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodWithAggregatesFilter<"Refund"> | $Enums.RefundMethod;
    reason?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    processedById?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    gatewayRefundId?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    adminNotes?: Prisma.StringNullableWithAggregatesFilter<"Refund"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Refund"> | Date | string;
};
export type RefundCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemCreateNestedManyWithoutRefundInput;
    order: Prisma.OrderCreateNestedOneWithoutRefundsInput;
    claim?: Prisma.OrderClaimCreateNestedOneWithoutRefundInput;
    processedBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsProcessedInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsCreatedInput;
};
export type RefundUncheckedCreateInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemUncheckedCreateNestedManyWithoutRefundInput;
};
export type RefundUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUpdateManyWithoutRefundNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutRefundsNestedInput;
    claim?: Prisma.OrderClaimUpdateOneWithoutRefundNestedInput;
    processedBy?: Prisma.AdminUserUpdateOneWithoutRefundsProcessedNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutRefundsCreatedNestedInput;
};
export type RefundUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUncheckedUpdateManyWithoutRefundNestedInput;
};
export type RefundCreateManyInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundListRelationFilter = {
    every?: Prisma.RefundWhereInput;
    some?: Prisma.RefundWhereInput;
    none?: Prisma.RefundWhereInput;
};
export type RefundOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RefundNullableScalarRelationFilter = {
    is?: Prisma.RefundWhereInput | null;
    isNot?: Prisma.RefundWhereInput | null;
};
export type RefundCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    gatewayRefundId?: Prisma.SortOrder;
    adminNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RefundMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    gatewayRefundId?: Prisma.SortOrder;
    adminNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    claimId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    processedById?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    gatewayRefundId?: Prisma.SortOrder;
    adminNotes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RefundSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type RefundScalarRelationFilter = {
    is?: Prisma.RefundWhereInput;
    isNot?: Prisma.RefundWhereInput;
};
export type RefundCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput> | Prisma.RefundCreateWithoutOrderInput[] | Prisma.RefundUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutOrderInput | Prisma.RefundCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RefundCreateManyOrderInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput> | Prisma.RefundCreateWithoutOrderInput[] | Prisma.RefundUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutOrderInput | Prisma.RefundCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RefundCreateManyOrderInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput> | Prisma.RefundCreateWithoutOrderInput[] | Prisma.RefundUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutOrderInput | Prisma.RefundCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutOrderInput | Prisma.RefundUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RefundCreateManyOrderInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutOrderInput | Prisma.RefundUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutOrderInput | Prisma.RefundUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput> | Prisma.RefundCreateWithoutOrderInput[] | Prisma.RefundUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutOrderInput | Prisma.RefundCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutOrderInput | Prisma.RefundUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RefundCreateManyOrderInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutOrderInput | Prisma.RefundUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutOrderInput | Prisma.RefundUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundCreateNestedOneWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutClaimInput;
    connect?: Prisma.RefundWhereUniqueInput;
};
export type RefundUncheckedCreateNestedOneWithoutClaimInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutClaimInput;
    connect?: Prisma.RefundWhereUniqueInput;
};
export type RefundUpdateOneWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutClaimInput;
    upsert?: Prisma.RefundUpsertWithoutClaimInput;
    disconnect?: Prisma.RefundWhereInput | boolean;
    delete?: Prisma.RefundWhereInput | boolean;
    connect?: Prisma.RefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RefundUpdateToOneWithWhereWithoutClaimInput, Prisma.RefundUpdateWithoutClaimInput>, Prisma.RefundUncheckedUpdateWithoutClaimInput>;
};
export type RefundUncheckedUpdateOneWithoutClaimNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutClaimInput;
    upsert?: Prisma.RefundUpsertWithoutClaimInput;
    disconnect?: Prisma.RefundWhereInput | boolean;
    delete?: Prisma.RefundWhereInput | boolean;
    connect?: Prisma.RefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RefundUpdateToOneWithWhereWithoutClaimInput, Prisma.RefundUpdateWithoutClaimInput>, Prisma.RefundUncheckedUpdateWithoutClaimInput>;
};
export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus;
};
export type EnumRefundMethodFieldUpdateOperationsInput = {
    set?: $Enums.RefundMethod;
};
export type RefundCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutItemsInput, Prisma.RefundUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutItemsInput;
    connect?: Prisma.RefundWhereUniqueInput;
};
export type RefundUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutItemsInput, Prisma.RefundUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.RefundUpsertWithoutItemsInput;
    connect?: Prisma.RefundWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RefundUpdateToOneWithWhereWithoutItemsInput, Prisma.RefundUpdateWithoutItemsInput>, Prisma.RefundUncheckedUpdateWithoutItemsInput>;
};
export type RefundCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput> | Prisma.RefundCreateWithoutProcessedByInput[] | Prisma.RefundUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutProcessedByInput | Prisma.RefundCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.RefundCreateManyProcessedByInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput> | Prisma.RefundCreateWithoutCreatedByInput[] | Prisma.RefundUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutCreatedByInput | Prisma.RefundCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.RefundCreateManyCreatedByInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUncheckedCreateNestedManyWithoutProcessedByInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput> | Prisma.RefundCreateWithoutProcessedByInput[] | Prisma.RefundUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutProcessedByInput | Prisma.RefundCreateOrConnectWithoutProcessedByInput[];
    createMany?: Prisma.RefundCreateManyProcessedByInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput> | Prisma.RefundCreateWithoutCreatedByInput[] | Prisma.RefundUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutCreatedByInput | Prisma.RefundCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.RefundCreateManyCreatedByInputEnvelope;
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
};
export type RefundUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput> | Prisma.RefundCreateWithoutProcessedByInput[] | Prisma.RefundUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutProcessedByInput | Prisma.RefundCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.RefundUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.RefundCreateManyProcessedByInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.RefundUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutProcessedByInput | Prisma.RefundUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput> | Prisma.RefundCreateWithoutCreatedByInput[] | Prisma.RefundUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutCreatedByInput | Prisma.RefundCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.RefundUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.RefundCreateManyCreatedByInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.RefundUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutCreatedByInput | Prisma.RefundUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUncheckedUpdateManyWithoutProcessedByNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput> | Prisma.RefundCreateWithoutProcessedByInput[] | Prisma.RefundUncheckedCreateWithoutProcessedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutProcessedByInput | Prisma.RefundCreateOrConnectWithoutProcessedByInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutProcessedByInput | Prisma.RefundUpsertWithWhereUniqueWithoutProcessedByInput[];
    createMany?: Prisma.RefundCreateManyProcessedByInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutProcessedByInput | Prisma.RefundUpdateWithWhereUniqueWithoutProcessedByInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutProcessedByInput | Prisma.RefundUpdateManyWithWhereWithoutProcessedByInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput> | Prisma.RefundCreateWithoutCreatedByInput[] | Prisma.RefundUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.RefundCreateOrConnectWithoutCreatedByInput | Prisma.RefundCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.RefundUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.RefundUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.RefundCreateManyCreatedByInputEnvelope;
    set?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    disconnect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    delete?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    connect?: Prisma.RefundWhereUniqueInput | Prisma.RefundWhereUniqueInput[];
    update?: Prisma.RefundUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.RefundUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.RefundUpdateManyWithWhereWithoutCreatedByInput | Prisma.RefundUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
};
export type RefundCreateWithoutOrderInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemCreateNestedManyWithoutRefundInput;
    claim?: Prisma.OrderClaimCreateNestedOneWithoutRefundInput;
    processedBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsProcessedInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsCreatedInput;
};
export type RefundUncheckedCreateWithoutOrderInput = {
    id?: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemUncheckedCreateNestedManyWithoutRefundInput;
};
export type RefundCreateOrConnectWithoutOrderInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput>;
};
export type RefundCreateManyOrderInputEnvelope = {
    data: Prisma.RefundCreateManyOrderInput | Prisma.RefundCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type RefundUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RefundWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundUpdateWithoutOrderInput, Prisma.RefundUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutOrderInput, Prisma.RefundUncheckedCreateWithoutOrderInput>;
};
export type RefundUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RefundWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutOrderInput, Prisma.RefundUncheckedUpdateWithoutOrderInput>;
};
export type RefundUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.RefundScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyWithoutOrderInput>;
};
export type RefundScalarWhereInput = {
    AND?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
    OR?: Prisma.RefundScalarWhereInput[];
    NOT?: Prisma.RefundScalarWhereInput | Prisma.RefundScalarWhereInput[];
    id?: Prisma.StringFilter<"Refund"> | string;
    orderId?: Prisma.StringFilter<"Refund"> | string;
    claimId?: Prisma.StringNullableFilter<"Refund"> | string | null;
    amount?: Prisma.DecimalFilter<"Refund"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFilter<"Refund"> | $Enums.RefundMethod;
    reason?: Prisma.StringNullableFilter<"Refund"> | string | null;
    processedById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdById?: Prisma.StringNullableFilter<"Refund"> | string | null;
    gatewayRefundId?: Prisma.StringNullableFilter<"Refund"> | string | null;
    adminNotes?: Prisma.StringNullableFilter<"Refund"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Refund"> | Date | string;
};
export type RefundCreateWithoutClaimInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemCreateNestedManyWithoutRefundInput;
    order: Prisma.OrderCreateNestedOneWithoutRefundsInput;
    processedBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsProcessedInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsCreatedInput;
};
export type RefundUncheckedCreateWithoutClaimInput = {
    id?: string;
    orderId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemUncheckedCreateNestedManyWithoutRefundInput;
};
export type RefundCreateOrConnectWithoutClaimInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
};
export type RefundUpsertWithoutClaimInput = {
    update: Prisma.XOR<Prisma.RefundUpdateWithoutClaimInput, Prisma.RefundUncheckedUpdateWithoutClaimInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutClaimInput, Prisma.RefundUncheckedCreateWithoutClaimInput>;
    where?: Prisma.RefundWhereInput;
};
export type RefundUpdateToOneWithWhereWithoutClaimInput = {
    where?: Prisma.RefundWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutClaimInput, Prisma.RefundUncheckedUpdateWithoutClaimInput>;
};
export type RefundUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUpdateManyWithoutRefundNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutRefundsNestedInput;
    processedBy?: Prisma.AdminUserUpdateOneWithoutRefundsProcessedNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutRefundsCreatedNestedInput;
};
export type RefundUncheckedUpdateWithoutClaimInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUncheckedUpdateManyWithoutRefundNestedInput;
};
export type RefundCreateWithoutItemsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutRefundsInput;
    claim?: Prisma.OrderClaimCreateNestedOneWithoutRefundInput;
    processedBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsProcessedInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsCreatedInput;
};
export type RefundUncheckedCreateWithoutItemsInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundCreateOrConnectWithoutItemsInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutItemsInput, Prisma.RefundUncheckedCreateWithoutItemsInput>;
};
export type RefundUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.RefundUpdateWithoutItemsInput, Prisma.RefundUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutItemsInput, Prisma.RefundUncheckedCreateWithoutItemsInput>;
    where?: Prisma.RefundWhereInput;
};
export type RefundUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.RefundWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutItemsInput, Prisma.RefundUncheckedUpdateWithoutItemsInput>;
};
export type RefundUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutRefundsNestedInput;
    claim?: Prisma.OrderClaimUpdateOneWithoutRefundNestedInput;
    processedBy?: Prisma.AdminUserUpdateOneWithoutRefundsProcessedNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutRefundsCreatedNestedInput;
};
export type RefundUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCreateWithoutProcessedByInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemCreateNestedManyWithoutRefundInput;
    order: Prisma.OrderCreateNestedOneWithoutRefundsInput;
    claim?: Prisma.OrderClaimCreateNestedOneWithoutRefundInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsCreatedInput;
};
export type RefundUncheckedCreateWithoutProcessedByInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemUncheckedCreateNestedManyWithoutRefundInput;
};
export type RefundCreateOrConnectWithoutProcessedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput>;
};
export type RefundCreateManyProcessedByInputEnvelope = {
    data: Prisma.RefundCreateManyProcessedByInput | Prisma.RefundCreateManyProcessedByInput[];
    skipDuplicates?: boolean;
};
export type RefundCreateWithoutCreatedByInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemCreateNestedManyWithoutRefundInput;
    order: Prisma.OrderCreateNestedOneWithoutRefundsInput;
    claim?: Prisma.OrderClaimCreateNestedOneWithoutRefundInput;
    processedBy?: Prisma.AdminUserCreateNestedOneWithoutRefundsProcessedInput;
};
export type RefundUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.RefundItemUncheckedCreateNestedManyWithoutRefundInput;
};
export type RefundCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput>;
};
export type RefundCreateManyCreatedByInputEnvelope = {
    data: Prisma.RefundCreateManyCreatedByInput | Prisma.RefundCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type RefundUpsertWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundUpdateWithoutProcessedByInput, Prisma.RefundUncheckedUpdateWithoutProcessedByInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutProcessedByInput, Prisma.RefundUncheckedCreateWithoutProcessedByInput>;
};
export type RefundUpdateWithWhereUniqueWithoutProcessedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutProcessedByInput, Prisma.RefundUncheckedUpdateWithoutProcessedByInput>;
};
export type RefundUpdateManyWithWhereWithoutProcessedByInput = {
    where: Prisma.RefundScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyWithoutProcessedByInput>;
};
export type RefundUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefundUpdateWithoutCreatedByInput, Prisma.RefundUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.RefundCreateWithoutCreatedByInput, Prisma.RefundUncheckedCreateWithoutCreatedByInput>;
};
export type RefundUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.RefundWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefundUpdateWithoutCreatedByInput, Prisma.RefundUncheckedUpdateWithoutCreatedByInput>;
};
export type RefundUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.RefundScalarWhereInput;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyWithoutCreatedByInput>;
};
export type RefundCreateManyOrderInput = {
    id?: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUpdateManyWithoutRefundNestedInput;
    claim?: Prisma.OrderClaimUpdateOneWithoutRefundNestedInput;
    processedBy?: Prisma.AdminUserUpdateOneWithoutRefundsProcessedNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutRefundsCreatedNestedInput;
};
export type RefundUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUncheckedUpdateManyWithoutRefundNestedInput;
};
export type RefundUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCreateManyProcessedByInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    createdById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundCreateManyCreatedByInput = {
    id?: string;
    orderId: string;
    claimId?: string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.RefundStatus;
    method?: $Enums.RefundMethod;
    reason?: string | null;
    processedById?: string | null;
    gatewayRefundId?: string | null;
    adminNotes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RefundUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUpdateManyWithoutRefundNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutRefundsNestedInput;
    claim?: Prisma.OrderClaimUpdateOneWithoutRefundNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutRefundsCreatedNestedInput;
};
export type RefundUncheckedUpdateWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUncheckedUpdateManyWithoutRefundNestedInput;
};
export type RefundUncheckedUpdateManyWithoutProcessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUpdateManyWithoutRefundNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutRefundsNestedInput;
    claim?: Prisma.OrderClaimUpdateOneWithoutRefundNestedInput;
    processedBy?: Prisma.AdminUserUpdateOneWithoutRefundsProcessedNestedInput;
};
export type RefundUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.RefundItemUncheckedUpdateManyWithoutRefundNestedInput;
};
export type RefundUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    claimId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus;
    method?: Prisma.EnumRefundMethodFieldUpdateOperationsInput | $Enums.RefundMethod;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    processedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gatewayRefundId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adminNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RefundCountOutputType = {
    items: number;
};
export type RefundCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | RefundCountOutputTypeCountItemsArgs;
};
export type RefundCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundCountOutputTypeSelect<ExtArgs> | null;
};
export type RefundCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundItemWhereInput;
};
export type RefundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    claimId?: boolean;
    amount?: boolean;
    status?: boolean;
    method?: boolean;
    reason?: boolean;
    processedById?: boolean;
    createdById?: boolean;
    gatewayRefundId?: boolean;
    adminNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    items?: boolean | Prisma.Refund$itemsArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
    _count?: boolean | Prisma.RefundCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    claimId?: boolean;
    amount?: boolean;
    status?: boolean;
    method?: boolean;
    reason?: boolean;
    processedById?: boolean;
    createdById?: boolean;
    gatewayRefundId?: boolean;
    adminNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    claimId?: boolean;
    amount?: boolean;
    status?: boolean;
    method?: boolean;
    reason?: boolean;
    processedById?: boolean;
    createdById?: boolean;
    gatewayRefundId?: boolean;
    adminNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
}, ExtArgs["result"]["refund"]>;
export type RefundSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    claimId?: boolean;
    amount?: boolean;
    status?: boolean;
    method?: boolean;
    reason?: boolean;
    processedById?: boolean;
    createdById?: boolean;
    gatewayRefundId?: boolean;
    adminNotes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RefundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "claimId" | "amount" | "status" | "method" | "reason" | "processedById" | "createdById" | "gatewayRefundId" | "adminNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["refund"]>;
export type RefundInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | Prisma.Refund$itemsArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
    _count?: boolean | Prisma.RefundCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RefundIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
};
export type RefundIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    claim?: boolean | Prisma.Refund$claimArgs<ExtArgs>;
    processedBy?: boolean | Prisma.Refund$processedByArgs<ExtArgs>;
    createdBy?: boolean | Prisma.Refund$createdByArgs<ExtArgs>;
};
export type $RefundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Refund";
    objects: {
        items: Prisma.$RefundItemPayload<ExtArgs>[];
        order: Prisma.$OrderPayload<ExtArgs>;
        claim: Prisma.$OrderClaimPayload<ExtArgs> | null;
        processedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        claimId: string | null;
        amount: runtime.Decimal;
        status: $Enums.RefundStatus;
        method: $Enums.RefundMethod;
        reason: string | null;
        processedById: string | null;
        createdById: string | null;
        gatewayRefundId: string | null;
        adminNotes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["refund"]>;
    composites: {};
};
export type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefundPayload, S>;
export type RefundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefundCountAggregateInputType | true;
};
export interface RefundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Refund'];
        meta: {
            name: 'Refund';
        };
    };
    findUnique<T extends RefundFindUniqueArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RefundFindFirstArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RefundFindManyArgs>(args?: Prisma.SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RefundCreateArgs>(args: Prisma.SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RefundCreateManyArgs>(args?: Prisma.SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RefundDeleteArgs>(args: Prisma.SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RefundUpdateArgs>(args: Prisma.SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RefundDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RefundUpdateManyArgs>(args: Prisma.SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RefundUpsertArgs>(args: Prisma.SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma.Prisma__RefundClient<runtime.Types.Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RefundCountArgs>(args?: Prisma.Subset<T, RefundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefundCountAggregateOutputType> : number>;
    aggregate<T extends RefundAggregateArgs>(args: Prisma.Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>;
    groupBy<T extends RefundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RefundGroupByArgs['orderBy'];
    } : {
        orderBy?: RefundGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RefundFieldRefs;
}
export interface Prisma__RefundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    items<T extends Prisma.Refund$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Refund$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    claim<T extends Prisma.Refund$claimArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Refund$claimArgs<ExtArgs>>): Prisma.Prisma__OrderClaimClient<runtime.Types.Result.GetResult<Prisma.$OrderClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    processedBy<T extends Prisma.Refund$processedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Refund$processedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.Refund$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Refund$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RefundFieldRefs {
    readonly id: Prisma.FieldRef<"Refund", 'String'>;
    readonly orderId: Prisma.FieldRef<"Refund", 'String'>;
    readonly claimId: Prisma.FieldRef<"Refund", 'String'>;
    readonly amount: Prisma.FieldRef<"Refund", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Refund", 'RefundStatus'>;
    readonly method: Prisma.FieldRef<"Refund", 'RefundMethod'>;
    readonly reason: Prisma.FieldRef<"Refund", 'String'>;
    readonly processedById: Prisma.FieldRef<"Refund", 'String'>;
    readonly createdById: Prisma.FieldRef<"Refund", 'String'>;
    readonly gatewayRefundId: Prisma.FieldRef<"Refund", 'String'>;
    readonly adminNotes: Prisma.FieldRef<"Refund", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Refund", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Refund", 'DateTime'>;
}
export type RefundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where?: Prisma.RefundWhereInput;
    orderBy?: Prisma.RefundOrderByWithRelationInput | Prisma.RefundOrderByWithRelationInput[];
    cursor?: Prisma.RefundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefundScalarFieldEnum | Prisma.RefundScalarFieldEnum[];
};
export type RefundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
};
export type RefundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RefundCreateManyInput | Prisma.RefundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefundCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.RefundCreateManyInput | Prisma.RefundCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RefundIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RefundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyInput>;
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type RefundUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefundUpdateManyMutationInput, Prisma.RefundUncheckedUpdateManyInput>;
    where?: Prisma.RefundWhereInput;
    limit?: number;
    include?: Prisma.RefundIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RefundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefundCreateInput, Prisma.RefundUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RefundUpdateInput, Prisma.RefundUncheckedUpdateInput>;
};
export type RefundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
    where: Prisma.RefundWhereUniqueInput;
};
export type RefundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefundWhereInput;
    limit?: number;
};
export type Refund$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Refund$claimArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderClaimSelect<ExtArgs> | null;
    omit?: Prisma.OrderClaimOmit<ExtArgs> | null;
    include?: Prisma.OrderClaimInclude<ExtArgs> | null;
    where?: Prisma.OrderClaimWhereInput;
};
export type Refund$processedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type Refund$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type RefundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefundSelect<ExtArgs> | null;
    omit?: Prisma.RefundOmit<ExtArgs> | null;
    include?: Prisma.RefundInclude<ExtArgs> | null;
};
export {};
