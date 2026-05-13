import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderLogisticsModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderLogisticsPayload>;
export type AggregateOrderLogistics = {
    _count: OrderLogisticsCountAggregateOutputType | null;
    _avg: OrderLogisticsAvgAggregateOutputType | null;
    _sum: OrderLogisticsSumAggregateOutputType | null;
    _min: OrderLogisticsMinAggregateOutputType | null;
    _max: OrderLogisticsMaxAggregateOutputType | null;
};
export type OrderLogisticsAvgAggregateOutputType = {
    estimatedShipping: runtime.Decimal | null;
    actualShippingCost: runtime.Decimal | null;
    internalTransportCost: runtime.Decimal | null;
};
export type OrderLogisticsSumAggregateOutputType = {
    estimatedShipping: runtime.Decimal | null;
    actualShippingCost: runtime.Decimal | null;
    internalTransportCost: runtime.Decimal | null;
};
export type OrderLogisticsMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    deliveryType: $Enums.DeliveryType | null;
    estimatedShipping: runtime.Decimal | null;
    actualShippingCost: runtime.Decimal | null;
    internalTransportCost: runtime.Decimal | null;
    trackingNumber: string | null;
    courierName: string | null;
    dispatchedAt: Date | null;
    deliveredAt: Date | null;
    dispatchedById: string | null;
    deliveredById: string | null;
    deliveryEvidenceNote: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderLogisticsMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    deliveryType: $Enums.DeliveryType | null;
    estimatedShipping: runtime.Decimal | null;
    actualShippingCost: runtime.Decimal | null;
    internalTransportCost: runtime.Decimal | null;
    trackingNumber: string | null;
    courierName: string | null;
    dispatchedAt: Date | null;
    deliveredAt: Date | null;
    dispatchedById: string | null;
    deliveredById: string | null;
    deliveryEvidenceNote: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderLogisticsCountAggregateOutputType = {
    id: number;
    orderId: number;
    deliveryType: number;
    estimatedShipping: number;
    actualShippingCost: number;
    internalTransportCost: number;
    trackingNumber: number;
    courierName: number;
    dispatchedAt: number;
    deliveredAt: number;
    dispatchedById: number;
    deliveredById: number;
    deliveryEvidenceNote: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderLogisticsAvgAggregateInputType = {
    estimatedShipping?: true;
    actualShippingCost?: true;
    internalTransportCost?: true;
};
export type OrderLogisticsSumAggregateInputType = {
    estimatedShipping?: true;
    actualShippingCost?: true;
    internalTransportCost?: true;
};
export type OrderLogisticsMinAggregateInputType = {
    id?: true;
    orderId?: true;
    deliveryType?: true;
    estimatedShipping?: true;
    actualShippingCost?: true;
    internalTransportCost?: true;
    trackingNumber?: true;
    courierName?: true;
    dispatchedAt?: true;
    deliveredAt?: true;
    dispatchedById?: true;
    deliveredById?: true;
    deliveryEvidenceNote?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderLogisticsMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    deliveryType?: true;
    estimatedShipping?: true;
    actualShippingCost?: true;
    internalTransportCost?: true;
    trackingNumber?: true;
    courierName?: true;
    dispatchedAt?: true;
    deliveredAt?: true;
    dispatchedById?: true;
    deliveredById?: true;
    deliveryEvidenceNote?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderLogisticsCountAggregateInputType = {
    id?: true;
    orderId?: true;
    deliveryType?: true;
    estimatedShipping?: true;
    actualShippingCost?: true;
    internalTransportCost?: true;
    trackingNumber?: true;
    courierName?: true;
    dispatchedAt?: true;
    deliveredAt?: true;
    dispatchedById?: true;
    deliveredById?: true;
    deliveryEvidenceNote?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderLogisticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderLogisticsWhereInput;
    orderBy?: Prisma.OrderLogisticsOrderByWithRelationInput | Prisma.OrderLogisticsOrderByWithRelationInput[];
    cursor?: Prisma.OrderLogisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderLogisticsCountAggregateInputType;
    _avg?: OrderLogisticsAvgAggregateInputType;
    _sum?: OrderLogisticsSumAggregateInputType;
    _min?: OrderLogisticsMinAggregateInputType;
    _max?: OrderLogisticsMaxAggregateInputType;
};
export type GetOrderLogisticsAggregateType<T extends OrderLogisticsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderLogistics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderLogistics[P]> : Prisma.GetScalarType<T[P], AggregateOrderLogistics[P]>;
};
export type OrderLogisticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderLogisticsWhereInput;
    orderBy?: Prisma.OrderLogisticsOrderByWithAggregationInput | Prisma.OrderLogisticsOrderByWithAggregationInput[];
    by: Prisma.OrderLogisticsScalarFieldEnum[] | Prisma.OrderLogisticsScalarFieldEnum;
    having?: Prisma.OrderLogisticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderLogisticsCountAggregateInputType | true;
    _avg?: OrderLogisticsAvgAggregateInputType;
    _sum?: OrderLogisticsSumAggregateInputType;
    _min?: OrderLogisticsMinAggregateInputType;
    _max?: OrderLogisticsMaxAggregateInputType;
};
export type OrderLogisticsGroupByOutputType = {
    id: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal;
    actualShippingCost: runtime.Decimal | null;
    internalTransportCost: runtime.Decimal | null;
    trackingNumber: string | null;
    courierName: string | null;
    dispatchedAt: Date | null;
    deliveredAt: Date | null;
    dispatchedById: string | null;
    deliveredById: string | null;
    deliveryEvidenceNote: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderLogisticsCountAggregateOutputType | null;
    _avg: OrderLogisticsAvgAggregateOutputType | null;
    _sum: OrderLogisticsSumAggregateOutputType | null;
    _min: OrderLogisticsMinAggregateOutputType | null;
    _max: OrderLogisticsMaxAggregateOutputType | null;
};
type GetOrderLogisticsGroupByPayload<T extends OrderLogisticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderLogisticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderLogisticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderLogisticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderLogisticsGroupByOutputType[P]>;
}>>;
export type OrderLogisticsWhereInput = {
    AND?: Prisma.OrderLogisticsWhereInput | Prisma.OrderLogisticsWhereInput[];
    OR?: Prisma.OrderLogisticsWhereInput[];
    NOT?: Prisma.OrderLogisticsWhereInput | Prisma.OrderLogisticsWhereInput[];
    id?: Prisma.StringFilter<"OrderLogistics"> | string;
    orderId?: Prisma.StringFilter<"OrderLogistics"> | string;
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"OrderLogistics"> | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    courierName?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    dispatchedById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveredById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveryEvidenceNote?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    dispatchedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deliveredBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type OrderLogisticsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    courierName?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryEvidenceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    dispatchedBy?: Prisma.AdminUserOrderByWithRelationInput;
    deliveredBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type OrderLogisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.OrderLogisticsWhereInput | Prisma.OrderLogisticsWhereInput[];
    OR?: Prisma.OrderLogisticsWhereInput[];
    NOT?: Prisma.OrderLogisticsWhereInput | Prisma.OrderLogisticsWhereInput[];
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"OrderLogistics"> | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    courierName?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    dispatchedById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveredById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveryEvidenceNote?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    dispatchedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deliveredBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "orderId">;
export type OrderLogisticsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    courierName?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryEvidenceNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderLogisticsCountOrderByAggregateInput;
    _avg?: Prisma.OrderLogisticsAvgOrderByAggregateInput;
    _max?: Prisma.OrderLogisticsMaxOrderByAggregateInput;
    _min?: Prisma.OrderLogisticsMinOrderByAggregateInput;
    _sum?: Prisma.OrderLogisticsSumOrderByAggregateInput;
};
export type OrderLogisticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderLogisticsScalarWhereWithAggregatesInput | Prisma.OrderLogisticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderLogisticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderLogisticsScalarWhereWithAggregatesInput | Prisma.OrderLogisticsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderLogistics"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderLogistics"> | string;
    deliveryType?: Prisma.EnumDeliveryTypeWithAggregatesFilter<"OrderLogistics"> | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalWithAggregatesFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.DecimalNullableWithAggregatesFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.DecimalNullableWithAggregatesFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.StringNullableWithAggregatesFilter<"OrderLogistics"> | string | null;
    courierName?: Prisma.StringNullableWithAggregatesFilter<"OrderLogistics"> | string | null;
    dispatchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OrderLogistics"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"OrderLogistics"> | Date | string | null;
    dispatchedById?: Prisma.StringNullableWithAggregatesFilter<"OrderLogistics"> | string | null;
    deliveredById?: Prisma.StringNullableWithAggregatesFilter<"OrderLogistics"> | string | null;
    deliveryEvidenceNote?: Prisma.StringNullableWithAggregatesFilter<"OrderLogistics"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderLogistics"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrderLogistics"> | Date | string;
};
export type OrderLogisticsCreateInput = {
    id?: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutLogisticsInput;
    dispatchedBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDispatchedInput;
    deliveredBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDeliveredInput;
};
export type OrderLogisticsUncheckedCreateInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    dispatchedById?: string | null;
    deliveredById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutLogisticsNestedInput;
    dispatchedBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDispatchedNestedInput;
    deliveredBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDeliveredNestedInput;
};
export type OrderLogisticsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsCreateManyInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    dispatchedById?: string | null;
    deliveredById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsNullableScalarRelationFilter = {
    is?: Prisma.OrderLogisticsWhereInput | null;
    isNot?: Prisma.OrderLogisticsWhereInput | null;
};
export type OrderLogisticsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    courierName?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    dispatchedById?: Prisma.SortOrder;
    deliveredById?: Prisma.SortOrder;
    deliveryEvidenceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderLogisticsAvgOrderByAggregateInput = {
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrder;
};
export type OrderLogisticsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    courierName?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    dispatchedById?: Prisma.SortOrder;
    deliveredById?: Prisma.SortOrder;
    deliveryEvidenceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderLogisticsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrder;
    trackingNumber?: Prisma.SortOrder;
    courierName?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    dispatchedById?: Prisma.SortOrder;
    deliveredById?: Prisma.SortOrder;
    deliveryEvidenceNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderLogisticsSumOrderByAggregateInput = {
    estimatedShipping?: Prisma.SortOrder;
    actualShippingCost?: Prisma.SortOrder;
    internalTransportCost?: Prisma.SortOrder;
};
export type OrderLogisticsListRelationFilter = {
    every?: Prisma.OrderLogisticsWhereInput;
    some?: Prisma.OrderLogisticsWhereInput;
    none?: Prisma.OrderLogisticsWhereInput;
};
export type OrderLogisticsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderLogisticsCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OrderLogisticsUpsertWithoutOrderInput;
    disconnect?: Prisma.OrderLogisticsWhereInput | boolean;
    delete?: Prisma.OrderLogisticsWhereInput | boolean;
    connect?: Prisma.OrderLogisticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderLogisticsUpdateToOneWithWhereWithoutOrderInput, Prisma.OrderLogisticsUpdateWithoutOrderInput>, Prisma.OrderLogisticsUncheckedUpdateWithoutOrderInput>;
};
export type OrderLogisticsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OrderLogisticsUpsertWithoutOrderInput;
    disconnect?: Prisma.OrderLogisticsWhereInput | boolean;
    delete?: Prisma.OrderLogisticsWhereInput | boolean;
    connect?: Prisma.OrderLogisticsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderLogisticsUpdateToOneWithWhereWithoutOrderInput, Prisma.OrderLogisticsUpdateWithoutOrderInput>, Prisma.OrderLogisticsUncheckedUpdateWithoutOrderInput>;
};
export type EnumDeliveryTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryType;
};
export type OrderLogisticsCreateNestedManyWithoutDispatchedByInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput> | Prisma.OrderLogisticsCreateWithoutDispatchedByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDispatchedByInputEnvelope;
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
};
export type OrderLogisticsCreateNestedManyWithoutDeliveredByInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput> | Prisma.OrderLogisticsCreateWithoutDeliveredByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDeliveredByInputEnvelope;
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
};
export type OrderLogisticsUncheckedCreateNestedManyWithoutDispatchedByInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput> | Prisma.OrderLogisticsCreateWithoutDispatchedByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDispatchedByInputEnvelope;
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
};
export type OrderLogisticsUncheckedCreateNestedManyWithoutDeliveredByInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput> | Prisma.OrderLogisticsCreateWithoutDeliveredByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDeliveredByInputEnvelope;
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
};
export type OrderLogisticsUpdateManyWithoutDispatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput> | Prisma.OrderLogisticsCreateWithoutDispatchedByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput[];
    upsert?: Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDispatchedByInput | Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDispatchedByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDispatchedByInputEnvelope;
    set?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    disconnect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    delete?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    update?: Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDispatchedByInput | Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDispatchedByInput[];
    updateMany?: Prisma.OrderLogisticsUpdateManyWithWhereWithoutDispatchedByInput | Prisma.OrderLogisticsUpdateManyWithWhereWithoutDispatchedByInput[];
    deleteMany?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
};
export type OrderLogisticsUpdateManyWithoutDeliveredByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput> | Prisma.OrderLogisticsCreateWithoutDeliveredByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput[];
    upsert?: Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDeliveredByInput | Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDeliveredByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDeliveredByInputEnvelope;
    set?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    disconnect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    delete?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    update?: Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDeliveredByInput | Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDeliveredByInput[];
    updateMany?: Prisma.OrderLogisticsUpdateManyWithWhereWithoutDeliveredByInput | Prisma.OrderLogisticsUpdateManyWithWhereWithoutDeliveredByInput[];
    deleteMany?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
};
export type OrderLogisticsUncheckedUpdateManyWithoutDispatchedByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput> | Prisma.OrderLogisticsCreateWithoutDispatchedByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDispatchedByInput[];
    upsert?: Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDispatchedByInput | Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDispatchedByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDispatchedByInputEnvelope;
    set?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    disconnect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    delete?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    update?: Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDispatchedByInput | Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDispatchedByInput[];
    updateMany?: Prisma.OrderLogisticsUpdateManyWithWhereWithoutDispatchedByInput | Prisma.OrderLogisticsUpdateManyWithWhereWithoutDispatchedByInput[];
    deleteMany?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
};
export type OrderLogisticsUncheckedUpdateManyWithoutDeliveredByNestedInput = {
    create?: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput> | Prisma.OrderLogisticsCreateWithoutDeliveredByInput[] | Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput[];
    connectOrCreate?: Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput | Prisma.OrderLogisticsCreateOrConnectWithoutDeliveredByInput[];
    upsert?: Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDeliveredByInput | Prisma.OrderLogisticsUpsertWithWhereUniqueWithoutDeliveredByInput[];
    createMany?: Prisma.OrderLogisticsCreateManyDeliveredByInputEnvelope;
    set?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    disconnect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    delete?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    connect?: Prisma.OrderLogisticsWhereUniqueInput | Prisma.OrderLogisticsWhereUniqueInput[];
    update?: Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDeliveredByInput | Prisma.OrderLogisticsUpdateWithWhereUniqueWithoutDeliveredByInput[];
    updateMany?: Prisma.OrderLogisticsUpdateManyWithWhereWithoutDeliveredByInput | Prisma.OrderLogisticsUpdateManyWithWhereWithoutDeliveredByInput[];
    deleteMany?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
};
export type OrderLogisticsCreateWithoutOrderInput = {
    id?: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dispatchedBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDispatchedInput;
    deliveredBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDeliveredInput;
};
export type OrderLogisticsUncheckedCreateWithoutOrderInput = {
    id?: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    dispatchedById?: string | null;
    deliveredById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
};
export type OrderLogisticsUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutOrderInput, Prisma.OrderLogisticsUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutOrderInput, Prisma.OrderLogisticsUncheckedCreateWithoutOrderInput>;
    where?: Prisma.OrderLogisticsWhereInput;
};
export type OrderLogisticsUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.OrderLogisticsWhereInput;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutOrderInput, Prisma.OrderLogisticsUncheckedUpdateWithoutOrderInput>;
};
export type OrderLogisticsUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dispatchedBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDispatchedNestedInput;
    deliveredBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDeliveredNestedInput;
};
export type OrderLogisticsUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsCreateWithoutDispatchedByInput = {
    id?: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutLogisticsInput;
    deliveredBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDeliveredInput;
};
export type OrderLogisticsUncheckedCreateWithoutDispatchedByInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveredById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsCreateOrConnectWithoutDispatchedByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput>;
};
export type OrderLogisticsCreateManyDispatchedByInputEnvelope = {
    data: Prisma.OrderLogisticsCreateManyDispatchedByInput | Prisma.OrderLogisticsCreateManyDispatchedByInput[];
    skipDuplicates?: boolean;
};
export type OrderLogisticsCreateWithoutDeliveredByInput = {
    id?: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutLogisticsInput;
    dispatchedBy?: Prisma.AdminUserCreateNestedOneWithoutLogisticsDispatchedInput;
};
export type OrderLogisticsUncheckedCreateWithoutDeliveredByInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    dispatchedById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsCreateOrConnectWithoutDeliveredByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput>;
};
export type OrderLogisticsCreateManyDeliveredByInputEnvelope = {
    data: Prisma.OrderLogisticsCreateManyDeliveredByInput | Prisma.OrderLogisticsCreateManyDeliveredByInput[];
    skipDuplicates?: boolean;
};
export type OrderLogisticsUpsertWithWhereUniqueWithoutDispatchedByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedUpdateWithoutDispatchedByInput>;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDispatchedByInput>;
};
export type OrderLogisticsUpdateWithWhereUniqueWithoutDispatchedByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutDispatchedByInput, Prisma.OrderLogisticsUncheckedUpdateWithoutDispatchedByInput>;
};
export type OrderLogisticsUpdateManyWithWhereWithoutDispatchedByInput = {
    where: Prisma.OrderLogisticsScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateManyMutationInput, Prisma.OrderLogisticsUncheckedUpdateManyWithoutDispatchedByInput>;
};
export type OrderLogisticsScalarWhereInput = {
    AND?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
    OR?: Prisma.OrderLogisticsScalarWhereInput[];
    NOT?: Prisma.OrderLogisticsScalarWhereInput | Prisma.OrderLogisticsScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderLogistics"> | string;
    orderId?: Prisma.StringFilter<"OrderLogistics"> | string;
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"OrderLogistics"> | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.DecimalNullableFilter<"OrderLogistics"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    courierName?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"OrderLogistics"> | Date | string | null;
    dispatchedById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveredById?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    deliveryEvidenceNote?: Prisma.StringNullableFilter<"OrderLogistics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderLogistics"> | Date | string;
};
export type OrderLogisticsUpsertWithWhereUniqueWithoutDeliveredByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedUpdateWithoutDeliveredByInput>;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedCreateWithoutDeliveredByInput>;
};
export type OrderLogisticsUpdateWithWhereUniqueWithoutDeliveredByInput = {
    where: Prisma.OrderLogisticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateWithoutDeliveredByInput, Prisma.OrderLogisticsUncheckedUpdateWithoutDeliveredByInput>;
};
export type OrderLogisticsUpdateManyWithWhereWithoutDeliveredByInput = {
    where: Prisma.OrderLogisticsScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateManyMutationInput, Prisma.OrderLogisticsUncheckedUpdateManyWithoutDeliveredByInput>;
};
export type OrderLogisticsCreateManyDispatchedByInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    deliveredById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsCreateManyDeliveredByInput = {
    id?: string;
    orderId: string;
    deliveryType: $Enums.DeliveryType;
    estimatedShipping: runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: string | null;
    courierName?: string | null;
    dispatchedAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    dispatchedById?: string | null;
    deliveryEvidenceNote?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderLogisticsUpdateWithoutDispatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutLogisticsNestedInput;
    deliveredBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDeliveredNestedInput;
};
export type OrderLogisticsUncheckedUpdateWithoutDispatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsUncheckedUpdateManyWithoutDispatchedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsUpdateWithoutDeliveredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutLogisticsNestedInput;
    dispatchedBy?: Prisma.AdminUserUpdateOneWithoutLogisticsDispatchedNestedInput;
};
export type OrderLogisticsUncheckedUpdateWithoutDeliveredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsUncheckedUpdateManyWithoutDeliveredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    estimatedShipping?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    actualShippingCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    internalTransportCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    trackingNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    courierName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryEvidenceNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderLogisticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    deliveryType?: boolean;
    estimatedShipping?: boolean;
    actualShippingCost?: boolean;
    internalTransportCost?: boolean;
    trackingNumber?: boolean;
    courierName?: boolean;
    dispatchedAt?: boolean;
    deliveredAt?: boolean;
    dispatchedById?: boolean;
    deliveredById?: boolean;
    deliveryEvidenceNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
}, ExtArgs["result"]["orderLogistics"]>;
export type OrderLogisticsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    deliveryType?: boolean;
    estimatedShipping?: boolean;
    actualShippingCost?: boolean;
    internalTransportCost?: boolean;
    trackingNumber?: boolean;
    courierName?: boolean;
    dispatchedAt?: boolean;
    deliveredAt?: boolean;
    dispatchedById?: boolean;
    deliveredById?: boolean;
    deliveryEvidenceNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
}, ExtArgs["result"]["orderLogistics"]>;
export type OrderLogisticsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    deliveryType?: boolean;
    estimatedShipping?: boolean;
    actualShippingCost?: boolean;
    internalTransportCost?: boolean;
    trackingNumber?: boolean;
    courierName?: boolean;
    dispatchedAt?: boolean;
    deliveredAt?: boolean;
    dispatchedById?: boolean;
    deliveredById?: boolean;
    deliveryEvidenceNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
}, ExtArgs["result"]["orderLogistics"]>;
export type OrderLogisticsSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    deliveryType?: boolean;
    estimatedShipping?: boolean;
    actualShippingCost?: boolean;
    internalTransportCost?: boolean;
    trackingNumber?: boolean;
    courierName?: boolean;
    dispatchedAt?: boolean;
    deliveredAt?: boolean;
    dispatchedById?: boolean;
    deliveredById?: boolean;
    deliveryEvidenceNote?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderLogisticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "deliveryType" | "estimatedShipping" | "actualShippingCost" | "internalTransportCost" | "trackingNumber" | "courierName" | "dispatchedAt" | "deliveredAt" | "dispatchedById" | "deliveredById" | "deliveryEvidenceNote" | "createdAt" | "updatedAt", ExtArgs["result"]["orderLogistics"]>;
export type OrderLogisticsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
};
export type OrderLogisticsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
};
export type OrderLogisticsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    dispatchedBy?: boolean | Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>;
    deliveredBy?: boolean | Prisma.OrderLogistics$deliveredByArgs<ExtArgs>;
};
export type $OrderLogisticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderLogistics";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        dispatchedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        deliveredBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        deliveryType: $Enums.DeliveryType;
        estimatedShipping: runtime.Decimal;
        actualShippingCost: runtime.Decimal | null;
        internalTransportCost: runtime.Decimal | null;
        trackingNumber: string | null;
        courierName: string | null;
        dispatchedAt: Date | null;
        deliveredAt: Date | null;
        dispatchedById: string | null;
        deliveredById: string | null;
        deliveryEvidenceNote: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["orderLogistics"]>;
    composites: {};
};
export type OrderLogisticsGetPayload<S extends boolean | null | undefined | OrderLogisticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload, S>;
export type OrderLogisticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderLogisticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderLogisticsCountAggregateInputType | true;
};
export interface OrderLogisticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderLogistics'];
        meta: {
            name: 'OrderLogistics';
        };
    };
    findUnique<T extends OrderLogisticsFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderLogisticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderLogisticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderLogisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderLogisticsFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderLogisticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderLogisticsFindManyArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderLogisticsCreateArgs>(args: Prisma.SelectSubset<T, OrderLogisticsCreateArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderLogisticsCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderLogisticsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderLogisticsDeleteArgs>(args: Prisma.SelectSubset<T, OrderLogisticsDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderLogisticsUpdateArgs>(args: Prisma.SelectSubset<T, OrderLogisticsUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderLogisticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderLogisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderLogisticsUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderLogisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderLogisticsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderLogisticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderLogisticsUpsertArgs>(args: Prisma.SelectSubset<T, OrderLogisticsUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderLogisticsClient<runtime.Types.Result.GetResult<Prisma.$OrderLogisticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderLogisticsCountArgs>(args?: Prisma.Subset<T, OrderLogisticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderLogisticsCountAggregateOutputType> : number>;
    aggregate<T extends OrderLogisticsAggregateArgs>(args: Prisma.Subset<T, OrderLogisticsAggregateArgs>): Prisma.PrismaPromise<GetOrderLogisticsAggregateType<T>>;
    groupBy<T extends OrderLogisticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderLogisticsGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderLogisticsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderLogisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderLogisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderLogisticsFieldRefs;
}
export interface Prisma__OrderLogisticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    dispatchedBy<T extends Prisma.OrderLogistics$dispatchedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderLogistics$dispatchedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deliveredBy<T extends Prisma.OrderLogistics$deliveredByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderLogistics$deliveredByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderLogisticsFieldRefs {
    readonly id: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly deliveryType: Prisma.FieldRef<"OrderLogistics", 'DeliveryType'>;
    readonly estimatedShipping: Prisma.FieldRef<"OrderLogistics", 'Decimal'>;
    readonly actualShippingCost: Prisma.FieldRef<"OrderLogistics", 'Decimal'>;
    readonly internalTransportCost: Prisma.FieldRef<"OrderLogistics", 'Decimal'>;
    readonly trackingNumber: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly courierName: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly dispatchedAt: Prisma.FieldRef<"OrderLogistics", 'DateTime'>;
    readonly deliveredAt: Prisma.FieldRef<"OrderLogistics", 'DateTime'>;
    readonly dispatchedById: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly deliveredById: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly deliveryEvidenceNote: Prisma.FieldRef<"OrderLogistics", 'String'>;
    readonly createdAt: Prisma.FieldRef<"OrderLogistics", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OrderLogistics", 'DateTime'>;
}
export type OrderLogisticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where?: Prisma.OrderLogisticsWhereInput;
    orderBy?: Prisma.OrderLogisticsOrderByWithRelationInput | Prisma.OrderLogisticsOrderByWithRelationInput[];
    cursor?: Prisma.OrderLogisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderLogisticsScalarFieldEnum | Prisma.OrderLogisticsScalarFieldEnum[];
};
export type OrderLogisticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where?: Prisma.OrderLogisticsWhereInput;
    orderBy?: Prisma.OrderLogisticsOrderByWithRelationInput | Prisma.OrderLogisticsOrderByWithRelationInput[];
    cursor?: Prisma.OrderLogisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderLogisticsScalarFieldEnum | Prisma.OrderLogisticsScalarFieldEnum[];
};
export type OrderLogisticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where?: Prisma.OrderLogisticsWhereInput;
    orderBy?: Prisma.OrderLogisticsOrderByWithRelationInput | Prisma.OrderLogisticsOrderByWithRelationInput[];
    cursor?: Prisma.OrderLogisticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderLogisticsScalarFieldEnum | Prisma.OrderLogisticsScalarFieldEnum[];
};
export type OrderLogisticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderLogisticsCreateInput, Prisma.OrderLogisticsUncheckedCreateInput>;
};
export type OrderLogisticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderLogisticsCreateManyInput | Prisma.OrderLogisticsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderLogisticsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    data: Prisma.OrderLogisticsCreateManyInput | Prisma.OrderLogisticsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderLogisticsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderLogisticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateInput, Prisma.OrderLogisticsUncheckedUpdateInput>;
    where: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateManyMutationInput, Prisma.OrderLogisticsUncheckedUpdateManyInput>;
    where?: Prisma.OrderLogisticsWhereInput;
    limit?: number;
};
export type OrderLogisticsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderLogisticsUpdateManyMutationInput, Prisma.OrderLogisticsUncheckedUpdateManyInput>;
    where?: Prisma.OrderLogisticsWhereInput;
    limit?: number;
    include?: Prisma.OrderLogisticsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderLogisticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where: Prisma.OrderLogisticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderLogisticsCreateInput, Prisma.OrderLogisticsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderLogisticsUpdateInput, Prisma.OrderLogisticsUncheckedUpdateInput>;
};
export type OrderLogisticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
    where: Prisma.OrderLogisticsWhereUniqueInput;
};
export type OrderLogisticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderLogisticsWhereInput;
    limit?: number;
};
export type OrderLogistics$dispatchedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type OrderLogistics$deliveredByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type OrderLogisticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderLogisticsSelect<ExtArgs> | null;
    omit?: Prisma.OrderLogisticsOmit<ExtArgs> | null;
    include?: Prisma.OrderLogisticsInclude<ExtArgs> | null;
};
export {};
