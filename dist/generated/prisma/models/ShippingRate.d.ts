import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShippingRateModel = runtime.Types.Result.DefaultSelection<Prisma.$ShippingRatePayload>;
export type AggregateShippingRate = {
    _count: ShippingRateCountAggregateOutputType | null;
    _avg: ShippingRateAvgAggregateOutputType | null;
    _sum: ShippingRateSumAggregateOutputType | null;
    _min: ShippingRateMinAggregateOutputType | null;
    _max: ShippingRateMaxAggregateOutputType | null;
};
export type ShippingRateAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    minOrderAmount: runtime.Decimal | null;
    freeShippingThreshold: runtime.Decimal | null;
    estimatedMin: number | null;
    estimatedMax: number | null;
    sortOrder: number | null;
};
export type ShippingRateSumAggregateOutputType = {
    price: runtime.Decimal | null;
    minOrderAmount: runtime.Decimal | null;
    freeShippingThreshold: runtime.Decimal | null;
    estimatedMin: number | null;
    estimatedMax: number | null;
    sortOrder: number | null;
};
export type ShippingRateMinAggregateOutputType = {
    id: string | null;
    zoneId: string | null;
    name: string | null;
    price: runtime.Decimal | null;
    minOrderAmount: runtime.Decimal | null;
    freeShippingThreshold: runtime.Decimal | null;
    estimatedMin: number | null;
    estimatedMax: number | null;
    estimatedUnit: $Enums.DeliveryUnit | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShippingRateMaxAggregateOutputType = {
    id: string | null;
    zoneId: string | null;
    name: string | null;
    price: runtime.Decimal | null;
    minOrderAmount: runtime.Decimal | null;
    freeShippingThreshold: runtime.Decimal | null;
    estimatedMin: number | null;
    estimatedMax: number | null;
    estimatedUnit: $Enums.DeliveryUnit | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShippingRateCountAggregateOutputType = {
    id: number;
    zoneId: number;
    name: number;
    price: number;
    minOrderAmount: number;
    freeShippingThreshold: number;
    estimatedMin: number;
    estimatedMax: number;
    estimatedUnit: number;
    sortOrder: number;
    isActive: number;
    createdById: number;
    updatedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShippingRateAvgAggregateInputType = {
    price?: true;
    minOrderAmount?: true;
    freeShippingThreshold?: true;
    estimatedMin?: true;
    estimatedMax?: true;
    sortOrder?: true;
};
export type ShippingRateSumAggregateInputType = {
    price?: true;
    minOrderAmount?: true;
    freeShippingThreshold?: true;
    estimatedMin?: true;
    estimatedMax?: true;
    sortOrder?: true;
};
export type ShippingRateMinAggregateInputType = {
    id?: true;
    zoneId?: true;
    name?: true;
    price?: true;
    minOrderAmount?: true;
    freeShippingThreshold?: true;
    estimatedMin?: true;
    estimatedMax?: true;
    estimatedUnit?: true;
    sortOrder?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShippingRateMaxAggregateInputType = {
    id?: true;
    zoneId?: true;
    name?: true;
    price?: true;
    minOrderAmount?: true;
    freeShippingThreshold?: true;
    estimatedMin?: true;
    estimatedMax?: true;
    estimatedUnit?: true;
    sortOrder?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShippingRateCountAggregateInputType = {
    id?: true;
    zoneId?: true;
    name?: true;
    price?: true;
    minOrderAmount?: true;
    freeShippingThreshold?: true;
    estimatedMin?: true;
    estimatedMax?: true;
    estimatedUnit?: true;
    sortOrder?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShippingRateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingRateWhereInput;
    orderBy?: Prisma.ShippingRateOrderByWithRelationInput | Prisma.ShippingRateOrderByWithRelationInput[];
    cursor?: Prisma.ShippingRateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShippingRateCountAggregateInputType;
    _avg?: ShippingRateAvgAggregateInputType;
    _sum?: ShippingRateSumAggregateInputType;
    _min?: ShippingRateMinAggregateInputType;
    _max?: ShippingRateMaxAggregateInputType;
};
export type GetShippingRateAggregateType<T extends ShippingRateAggregateArgs> = {
    [P in keyof T & keyof AggregateShippingRate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShippingRate[P]> : Prisma.GetScalarType<T[P], AggregateShippingRate[P]>;
};
export type ShippingRateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingRateWhereInput;
    orderBy?: Prisma.ShippingRateOrderByWithAggregationInput | Prisma.ShippingRateOrderByWithAggregationInput[];
    by: Prisma.ShippingRateScalarFieldEnum[] | Prisma.ShippingRateScalarFieldEnum;
    having?: Prisma.ShippingRateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShippingRateCountAggregateInputType | true;
    _avg?: ShippingRateAvgAggregateInputType;
    _sum?: ShippingRateSumAggregateInputType;
    _min?: ShippingRateMinAggregateInputType;
    _max?: ShippingRateMaxAggregateInputType;
};
export type ShippingRateGroupByOutputType = {
    id: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal;
    minOrderAmount: runtime.Decimal;
    freeShippingThreshold: runtime.Decimal | null;
    estimatedMin: number | null;
    estimatedMax: number | null;
    estimatedUnit: $Enums.DeliveryUnit;
    sortOrder: number;
    isActive: boolean;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ShippingRateCountAggregateOutputType | null;
    _avg: ShippingRateAvgAggregateOutputType | null;
    _sum: ShippingRateSumAggregateOutputType | null;
    _min: ShippingRateMinAggregateOutputType | null;
    _max: ShippingRateMaxAggregateOutputType | null;
};
type GetShippingRateGroupByPayload<T extends ShippingRateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShippingRateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShippingRateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShippingRateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShippingRateGroupByOutputType[P]>;
}>>;
export type ShippingRateWhereInput = {
    AND?: Prisma.ShippingRateWhereInput | Prisma.ShippingRateWhereInput[];
    OR?: Prisma.ShippingRateWhereInput[];
    NOT?: Prisma.ShippingRateWhereInput | Prisma.ShippingRateWhereInput[];
    id?: Prisma.StringFilter<"ShippingRate"> | string;
    zoneId?: Prisma.StringFilter<"ShippingRate"> | string;
    name?: Prisma.StringFilter<"ShippingRate"> | string;
    price?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.DecimalNullableFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedMax?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFilter<"ShippingRate"> | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFilter<"ShippingRate"> | number;
    isActive?: Prisma.BoolFilter<"ShippingRate"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
    zone?: Prisma.XOR<Prisma.ShippingZoneScalarRelationFilter, Prisma.ShippingZoneWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
};
export type ShippingRateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedUnit?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    zone?: Prisma.ShippingZoneOrderByWithRelationInput;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
    updatedBy?: Prisma.AdminUserOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type ShippingRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShippingRateWhereInput | Prisma.ShippingRateWhereInput[];
    OR?: Prisma.ShippingRateWhereInput[];
    NOT?: Prisma.ShippingRateWhereInput | Prisma.ShippingRateWhereInput[];
    zoneId?: Prisma.StringFilter<"ShippingRate"> | string;
    name?: Prisma.StringFilter<"ShippingRate"> | string;
    price?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.DecimalNullableFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedMax?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFilter<"ShippingRate"> | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFilter<"ShippingRate"> | number;
    isActive?: Prisma.BoolFilter<"ShippingRate"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
    zone?: Prisma.XOR<Prisma.ShippingZoneScalarRelationFilter, Prisma.ShippingZoneWhereInput>;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
}, "id">;
export type ShippingRateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrderInput | Prisma.SortOrder;
    estimatedUnit?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShippingRateCountOrderByAggregateInput;
    _avg?: Prisma.ShippingRateAvgOrderByAggregateInput;
    _max?: Prisma.ShippingRateMaxOrderByAggregateInput;
    _min?: Prisma.ShippingRateMinOrderByAggregateInput;
    _sum?: Prisma.ShippingRateSumOrderByAggregateInput;
};
export type ShippingRateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShippingRateScalarWhereWithAggregatesInput | Prisma.ShippingRateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShippingRateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShippingRateScalarWhereWithAggregatesInput | Prisma.ShippingRateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShippingRate"> | string;
    zoneId?: Prisma.StringWithAggregatesFilter<"ShippingRate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShippingRate"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalWithAggregatesFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.DecimalNullableWithAggregatesFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.IntNullableWithAggregatesFilter<"ShippingRate"> | number | null;
    estimatedMax?: Prisma.IntNullableWithAggregatesFilter<"ShippingRate"> | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitWithAggregatesFilter<"ShippingRate"> | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ShippingRate"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShippingRate"> | boolean;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"ShippingRate"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"ShippingRate"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShippingRate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShippingRate"> | Date | string;
};
export type ShippingRateCreateInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutRatesInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesUpdatedInput;
    orders?: Prisma.OrderCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateUncheckedCreateInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutRatesNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesUpdatedNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateCreateManyInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShippingRateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateNullableScalarRelationFilter = {
    is?: Prisma.ShippingRateWhereInput | null;
    isNot?: Prisma.ShippingRateWhereInput | null;
};
export type ShippingRateListRelationFilter = {
    every?: Prisma.ShippingRateWhereInput;
    some?: Prisma.ShippingRateWhereInput;
    none?: Prisma.ShippingRateWhereInput;
};
export type ShippingRateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShippingRateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrder;
    estimatedUnit?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShippingRateAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShippingRateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrder;
    estimatedUnit?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShippingRateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrder;
    estimatedUnit?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShippingRateSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    minOrderAmount?: Prisma.SortOrder;
    freeShippingThreshold?: Prisma.SortOrder;
    estimatedMin?: Prisma.SortOrder;
    estimatedMax?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShippingRateCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutOrdersInput, Prisma.ShippingRateUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.ShippingRateWhereUniqueInput;
};
export type ShippingRateUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutOrdersInput, Prisma.ShippingRateUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.ShippingRateUpsertWithoutOrdersInput;
    disconnect?: Prisma.ShippingRateWhereInput | boolean;
    delete?: Prisma.ShippingRateWhereInput | boolean;
    connect?: Prisma.ShippingRateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShippingRateUpdateToOneWithWhereWithoutOrdersInput, Prisma.ShippingRateUpdateWithoutOrdersInput>, Prisma.ShippingRateUncheckedUpdateWithoutOrdersInput>;
};
export type ShippingRateCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput> | Prisma.ShippingRateCreateWithoutZoneInput[] | Prisma.ShippingRateUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutZoneInput | Prisma.ShippingRateCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ShippingRateCreateManyZoneInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateUncheckedCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput> | Prisma.ShippingRateCreateWithoutZoneInput[] | Prisma.ShippingRateUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutZoneInput | Prisma.ShippingRateCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ShippingRateCreateManyZoneInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput> | Prisma.ShippingRateCreateWithoutZoneInput[] | Prisma.ShippingRateUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutZoneInput | Prisma.ShippingRateCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutZoneInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ShippingRateCreateManyZoneInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutZoneInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutZoneInput | Prisma.ShippingRateUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type ShippingRateUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput> | Prisma.ShippingRateCreateWithoutZoneInput[] | Prisma.ShippingRateUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutZoneInput | Prisma.ShippingRateCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutZoneInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ShippingRateCreateManyZoneInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutZoneInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutZoneInput | Prisma.ShippingRateUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type EnumDeliveryUnitFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryUnit;
};
export type ShippingRateCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingRateCreateWithoutCreatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput | Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingRateCreateWithoutUpdatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingRateCreateWithoutCreatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput | Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingRateCreateWithoutUpdatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
};
export type ShippingRateUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingRateCreateWithoutCreatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput | Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShippingRateUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type ShippingRateUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingRateCreateWithoutUpdatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyUpdatedByInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutUpdatedByInput | Prisma.ShippingRateUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type ShippingRateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingRateCreateWithoutCreatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput | Prisma.ShippingRateCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShippingRateUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type ShippingRateUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingRateCreateWithoutUpdatedByInput[] | Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingRateCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.ShippingRateUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingRateUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingRateCreateManyUpdatedByInputEnvelope;
    set?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    disconnect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    delete?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    connect?: Prisma.ShippingRateWhereUniqueInput | Prisma.ShippingRateWhereUniqueInput[];
    update?: Prisma.ShippingRateUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingRateUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.ShippingRateUpdateManyWithWhereWithoutUpdatedByInput | Prisma.ShippingRateUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
};
export type ShippingRateCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutRatesInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesUpdatedInput;
};
export type ShippingRateUncheckedCreateWithoutOrdersInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShippingRateCreateOrConnectWithoutOrdersInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutOrdersInput, Prisma.ShippingRateUncheckedCreateWithoutOrdersInput>;
};
export type ShippingRateUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.ShippingRateUpdateWithoutOrdersInput, Prisma.ShippingRateUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutOrdersInput, Prisma.ShippingRateUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.ShippingRateWhereInput;
};
export type ShippingRateUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.ShippingRateWhereInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateWithoutOrdersInput, Prisma.ShippingRateUncheckedUpdateWithoutOrdersInput>;
};
export type ShippingRateUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutRatesNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesUpdatedNestedInput;
};
export type ShippingRateUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateCreateWithoutZoneInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesUpdatedInput;
    orders?: Prisma.OrderCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateUncheckedCreateWithoutZoneInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateCreateOrConnectWithoutZoneInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput>;
};
export type ShippingRateCreateManyZoneInputEnvelope = {
    data: Prisma.ShippingRateCreateManyZoneInput | Prisma.ShippingRateCreateManyZoneInput[];
    skipDuplicates?: boolean;
};
export type ShippingRateUpsertWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingRateUpdateWithoutZoneInput, Prisma.ShippingRateUncheckedUpdateWithoutZoneInput>;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutZoneInput, Prisma.ShippingRateUncheckedCreateWithoutZoneInput>;
};
export type ShippingRateUpdateWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateWithoutZoneInput, Prisma.ShippingRateUncheckedUpdateWithoutZoneInput>;
};
export type ShippingRateUpdateManyWithWhereWithoutZoneInput = {
    where: Prisma.ShippingRateScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateManyMutationInput, Prisma.ShippingRateUncheckedUpdateManyWithoutZoneInput>;
};
export type ShippingRateScalarWhereInput = {
    AND?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
    OR?: Prisma.ShippingRateScalarWhereInput[];
    NOT?: Prisma.ShippingRateScalarWhereInput | Prisma.ShippingRateScalarWhereInput[];
    id?: Prisma.StringFilter<"ShippingRate"> | string;
    zoneId?: Prisma.StringFilter<"ShippingRate"> | string;
    name?: Prisma.StringFilter<"ShippingRate"> | string;
    price?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.DecimalNullableFilter<"ShippingRate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedMax?: Prisma.IntNullableFilter<"ShippingRate"> | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFilter<"ShippingRate"> | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFilter<"ShippingRate"> | number;
    isActive?: Prisma.BoolFilter<"ShippingRate"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingRate"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingRate"> | Date | string;
};
export type ShippingRateCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutRatesInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesUpdatedInput;
    orders?: Prisma.OrderCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput>;
};
export type ShippingRateCreateManyCreatedByInputEnvelope = {
    data: Prisma.ShippingRateCreateManyCreatedByInput | Prisma.ShippingRateCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ShippingRateCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutRatesInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingRatesCreatedInput;
    orders?: Prisma.OrderCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutShippingRateInput;
};
export type ShippingRateCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput>;
};
export type ShippingRateCreateManyUpdatedByInputEnvelope = {
    data: Prisma.ShippingRateCreateManyUpdatedByInput | Prisma.ShippingRateCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type ShippingRateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingRateUpdateWithoutCreatedByInput, Prisma.ShippingRateUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutCreatedByInput, Prisma.ShippingRateUncheckedCreateWithoutCreatedByInput>;
};
export type ShippingRateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateWithoutCreatedByInput, Prisma.ShippingRateUncheckedUpdateWithoutCreatedByInput>;
};
export type ShippingRateUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ShippingRateScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateManyMutationInput, Prisma.ShippingRateUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ShippingRateUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingRateUpdateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.ShippingRateCreateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedCreateWithoutUpdatedByInput>;
};
export type ShippingRateUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.ShippingRateWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateWithoutUpdatedByInput, Prisma.ShippingRateUncheckedUpdateWithoutUpdatedByInput>;
};
export type ShippingRateUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.ShippingRateScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingRateUpdateManyMutationInput, Prisma.ShippingRateUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type ShippingRateCreateManyZoneInput = {
    id?: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShippingRateUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesUpdatedNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateManyWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateCreateManyCreatedByInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShippingRateCreateManyUpdatedByInput = {
    id?: string;
    zoneId: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: number | null;
    estimatedMax?: number | null;
    estimatedUnit?: $Enums.DeliveryUnit;
    sortOrder?: number;
    isActive?: boolean;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShippingRateUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutRatesNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesUpdatedNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutRatesNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingRatesCreatedNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutShippingRateNestedInput;
};
export type ShippingRateUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minOrderAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    freeShippingThreshold?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estimatedMin?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedMax?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estimatedUnit?: Prisma.EnumDeliveryUnitFieldUpdateOperationsInput | $Enums.DeliveryUnit;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShippingRateCountOutputType = {
    orders: number;
};
export type ShippingRateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | ShippingRateCountOutputTypeCountOrdersArgs;
};
export type ShippingRateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateCountOutputTypeSelect<ExtArgs> | null;
};
export type ShippingRateCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type ShippingRateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    name?: boolean;
    price?: boolean;
    minOrderAmount?: boolean;
    freeShippingThreshold?: boolean;
    estimatedMin?: boolean;
    estimatedMax?: boolean;
    estimatedUnit?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
    orders?: boolean | Prisma.ShippingRate$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.ShippingRateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shippingRate"]>;
export type ShippingRateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    name?: boolean;
    price?: boolean;
    minOrderAmount?: boolean;
    freeShippingThreshold?: boolean;
    estimatedMin?: boolean;
    estimatedMax?: boolean;
    estimatedUnit?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["shippingRate"]>;
export type ShippingRateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    name?: boolean;
    price?: boolean;
    minOrderAmount?: boolean;
    freeShippingThreshold?: boolean;
    estimatedMin?: boolean;
    estimatedMax?: boolean;
    estimatedUnit?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["shippingRate"]>;
export type ShippingRateSelectScalar = {
    id?: boolean;
    zoneId?: boolean;
    name?: boolean;
    price?: boolean;
    minOrderAmount?: boolean;
    freeShippingThreshold?: boolean;
    estimatedMin?: boolean;
    estimatedMax?: boolean;
    estimatedUnit?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShippingRateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "zoneId" | "name" | "price" | "minOrderAmount" | "freeShippingThreshold" | "estimatedMin" | "estimatedMax" | "estimatedUnit" | "sortOrder" | "isActive" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["shippingRate"]>;
export type ShippingRateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
    orders?: boolean | Prisma.ShippingRate$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.ShippingRateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShippingRateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
};
export type ShippingRateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingRate$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingRate$updatedByArgs<ExtArgs>;
};
export type $ShippingRatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShippingRate";
    objects: {
        zone: Prisma.$ShippingZonePayload<ExtArgs>;
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        updatedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        zoneId: string;
        name: string;
        price: runtime.Decimal;
        minOrderAmount: runtime.Decimal;
        freeShippingThreshold: runtime.Decimal | null;
        estimatedMin: number | null;
        estimatedMax: number | null;
        estimatedUnit: $Enums.DeliveryUnit;
        sortOrder: number;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shippingRate"]>;
    composites: {};
};
export type ShippingRateGetPayload<S extends boolean | null | undefined | ShippingRateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload, S>;
export type ShippingRateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShippingRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShippingRateCountAggregateInputType | true;
};
export interface ShippingRateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShippingRate'];
        meta: {
            name: 'ShippingRate';
        };
    };
    findUnique<T extends ShippingRateFindUniqueArgs>(args: Prisma.SelectSubset<T, ShippingRateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShippingRateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShippingRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShippingRateFindFirstArgs>(args?: Prisma.SelectSubset<T, ShippingRateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShippingRateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShippingRateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShippingRateFindManyArgs>(args?: Prisma.SelectSubset<T, ShippingRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShippingRateCreateArgs>(args: Prisma.SelectSubset<T, ShippingRateCreateArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShippingRateCreateManyArgs>(args?: Prisma.SelectSubset<T, ShippingRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShippingRateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShippingRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShippingRateDeleteArgs>(args: Prisma.SelectSubset<T, ShippingRateDeleteArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShippingRateUpdateArgs>(args: Prisma.SelectSubset<T, ShippingRateUpdateArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShippingRateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShippingRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShippingRateUpdateManyArgs>(args: Prisma.SelectSubset<T, ShippingRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShippingRateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShippingRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShippingRateUpsertArgs>(args: Prisma.SelectSubset<T, ShippingRateUpsertArgs<ExtArgs>>): Prisma.Prisma__ShippingRateClient<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShippingRateCountArgs>(args?: Prisma.Subset<T, ShippingRateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShippingRateCountAggregateOutputType> : number>;
    aggregate<T extends ShippingRateAggregateArgs>(args: Prisma.Subset<T, ShippingRateAggregateArgs>): Prisma.PrismaPromise<GetShippingRateAggregateType<T>>;
    groupBy<T extends ShippingRateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShippingRateGroupByArgs['orderBy'];
    } : {
        orderBy?: ShippingRateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShippingRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShippingRateFieldRefs;
}
export interface Prisma__ShippingRateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zone<T extends Prisma.ShippingZoneDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZoneDefaultArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    createdBy<T extends Prisma.ShippingRate$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingRate$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.ShippingRate$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingRate$updatedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ShippingRate$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingRate$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShippingRateFieldRefs {
    readonly id: Prisma.FieldRef<"ShippingRate", 'String'>;
    readonly zoneId: Prisma.FieldRef<"ShippingRate", 'String'>;
    readonly name: Prisma.FieldRef<"ShippingRate", 'String'>;
    readonly price: Prisma.FieldRef<"ShippingRate", 'Decimal'>;
    readonly minOrderAmount: Prisma.FieldRef<"ShippingRate", 'Decimal'>;
    readonly freeShippingThreshold: Prisma.FieldRef<"ShippingRate", 'Decimal'>;
    readonly estimatedMin: Prisma.FieldRef<"ShippingRate", 'Int'>;
    readonly estimatedMax: Prisma.FieldRef<"ShippingRate", 'Int'>;
    readonly estimatedUnit: Prisma.FieldRef<"ShippingRate", 'DeliveryUnit'>;
    readonly sortOrder: Prisma.FieldRef<"ShippingRate", 'Int'>;
    readonly isActive: Prisma.FieldRef<"ShippingRate", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"ShippingRate", 'String'>;
    readonly updatedById: Prisma.FieldRef<"ShippingRate", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShippingRate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShippingRate", 'DateTime'>;
}
export type ShippingRateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where: Prisma.ShippingRateWhereUniqueInput;
};
export type ShippingRateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where: Prisma.ShippingRateWhereUniqueInput;
};
export type ShippingRateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where?: Prisma.ShippingRateWhereInput;
    orderBy?: Prisma.ShippingRateOrderByWithRelationInput | Prisma.ShippingRateOrderByWithRelationInput[];
    cursor?: Prisma.ShippingRateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingRateScalarFieldEnum | Prisma.ShippingRateScalarFieldEnum[];
};
export type ShippingRateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where?: Prisma.ShippingRateWhereInput;
    orderBy?: Prisma.ShippingRateOrderByWithRelationInput | Prisma.ShippingRateOrderByWithRelationInput[];
    cursor?: Prisma.ShippingRateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingRateScalarFieldEnum | Prisma.ShippingRateScalarFieldEnum[];
};
export type ShippingRateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where?: Prisma.ShippingRateWhereInput;
    orderBy?: Prisma.ShippingRateOrderByWithRelationInput | Prisma.ShippingRateOrderByWithRelationInput[];
    cursor?: Prisma.ShippingRateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingRateScalarFieldEnum | Prisma.ShippingRateScalarFieldEnum[];
};
export type ShippingRateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingRateCreateInput, Prisma.ShippingRateUncheckedCreateInput>;
};
export type ShippingRateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShippingRateCreateManyInput | Prisma.ShippingRateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShippingRateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    data: Prisma.ShippingRateCreateManyInput | Prisma.ShippingRateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShippingRateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShippingRateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingRateUpdateInput, Prisma.ShippingRateUncheckedUpdateInput>;
    where: Prisma.ShippingRateWhereUniqueInput;
};
export type ShippingRateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShippingRateUpdateManyMutationInput, Prisma.ShippingRateUncheckedUpdateManyInput>;
    where?: Prisma.ShippingRateWhereInput;
    limit?: number;
};
export type ShippingRateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingRateUpdateManyMutationInput, Prisma.ShippingRateUncheckedUpdateManyInput>;
    where?: Prisma.ShippingRateWhereInput;
    limit?: number;
    include?: Prisma.ShippingRateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShippingRateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where: Prisma.ShippingRateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingRateCreateInput, Prisma.ShippingRateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShippingRateUpdateInput, Prisma.ShippingRateUncheckedUpdateInput>;
};
export type ShippingRateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
    where: Prisma.ShippingRateWhereUniqueInput;
};
export type ShippingRateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingRateWhereInput;
    limit?: number;
};
export type ShippingRate$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ShippingRate$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ShippingRate$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type ShippingRateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingRateSelect<ExtArgs> | null;
    omit?: Prisma.ShippingRateOmit<ExtArgs> | null;
    include?: Prisma.ShippingRateInclude<ExtArgs> | null;
};
export {};
