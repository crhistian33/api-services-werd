import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CouponUsageModel = runtime.Types.Result.DefaultSelection<Prisma.$CouponUsagePayload>;
export type AggregateCouponUsage = {
    _count: CouponUsageCountAggregateOutputType | null;
    _avg: CouponUsageAvgAggregateOutputType | null;
    _sum: CouponUsageSumAggregateOutputType | null;
    _min: CouponUsageMinAggregateOutputType | null;
    _max: CouponUsageMaxAggregateOutputType | null;
};
export type CouponUsageAvgAggregateOutputType = {
    discountApplied: runtime.Decimal | null;
};
export type CouponUsageSumAggregateOutputType = {
    discountApplied: runtime.Decimal | null;
};
export type CouponUsageMinAggregateOutputType = {
    id: string | null;
    couponId: string | null;
    orderId: string | null;
    customerId: string | null;
    guestEmail: string | null;
    discountApplied: runtime.Decimal | null;
    usedAt: Date | null;
};
export type CouponUsageMaxAggregateOutputType = {
    id: string | null;
    couponId: string | null;
    orderId: string | null;
    customerId: string | null;
    guestEmail: string | null;
    discountApplied: runtime.Decimal | null;
    usedAt: Date | null;
};
export type CouponUsageCountAggregateOutputType = {
    id: number;
    couponId: number;
    orderId: number;
    customerId: number;
    guestEmail: number;
    discountApplied: number;
    usedAt: number;
    _all: number;
};
export type CouponUsageAvgAggregateInputType = {
    discountApplied?: true;
};
export type CouponUsageSumAggregateInputType = {
    discountApplied?: true;
};
export type CouponUsageMinAggregateInputType = {
    id?: true;
    couponId?: true;
    orderId?: true;
    customerId?: true;
    guestEmail?: true;
    discountApplied?: true;
    usedAt?: true;
};
export type CouponUsageMaxAggregateInputType = {
    id?: true;
    couponId?: true;
    orderId?: true;
    customerId?: true;
    guestEmail?: true;
    discountApplied?: true;
    usedAt?: true;
};
export type CouponUsageCountAggregateInputType = {
    id?: true;
    couponId?: true;
    orderId?: true;
    customerId?: true;
    guestEmail?: true;
    discountApplied?: true;
    usedAt?: true;
    _all?: true;
};
export type CouponUsageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponUsageWhereInput;
    orderBy?: Prisma.CouponUsageOrderByWithRelationInput | Prisma.CouponUsageOrderByWithRelationInput[];
    cursor?: Prisma.CouponUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CouponUsageCountAggregateInputType;
    _avg?: CouponUsageAvgAggregateInputType;
    _sum?: CouponUsageSumAggregateInputType;
    _min?: CouponUsageMinAggregateInputType;
    _max?: CouponUsageMaxAggregateInputType;
};
export type GetCouponUsageAggregateType<T extends CouponUsageAggregateArgs> = {
    [P in keyof T & keyof AggregateCouponUsage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCouponUsage[P]> : Prisma.GetScalarType<T[P], AggregateCouponUsage[P]>;
};
export type CouponUsageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponUsageWhereInput;
    orderBy?: Prisma.CouponUsageOrderByWithAggregationInput | Prisma.CouponUsageOrderByWithAggregationInput[];
    by: Prisma.CouponUsageScalarFieldEnum[] | Prisma.CouponUsageScalarFieldEnum;
    having?: Prisma.CouponUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CouponUsageCountAggregateInputType | true;
    _avg?: CouponUsageAvgAggregateInputType;
    _sum?: CouponUsageSumAggregateInputType;
    _min?: CouponUsageMinAggregateInputType;
    _max?: CouponUsageMaxAggregateInputType;
};
export type CouponUsageGroupByOutputType = {
    id: string;
    couponId: string;
    orderId: string;
    customerId: string | null;
    guestEmail: string | null;
    discountApplied: runtime.Decimal;
    usedAt: Date;
    _count: CouponUsageCountAggregateOutputType | null;
    _avg: CouponUsageAvgAggregateOutputType | null;
    _sum: CouponUsageSumAggregateOutputType | null;
    _min: CouponUsageMinAggregateOutputType | null;
    _max: CouponUsageMaxAggregateOutputType | null;
};
type GetCouponUsageGroupByPayload<T extends CouponUsageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CouponUsageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CouponUsageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CouponUsageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CouponUsageGroupByOutputType[P]>;
}>>;
export type CouponUsageWhereInput = {
    AND?: Prisma.CouponUsageWhereInput | Prisma.CouponUsageWhereInput[];
    OR?: Prisma.CouponUsageWhereInput[];
    NOT?: Prisma.CouponUsageWhereInput | Prisma.CouponUsageWhereInput[];
    id?: Prisma.StringFilter<"CouponUsage"> | string;
    couponId?: Prisma.StringFilter<"CouponUsage"> | string;
    orderId?: Prisma.StringFilter<"CouponUsage"> | string;
    customerId?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    guestEmail?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    discountApplied?: Prisma.DecimalFilter<"CouponUsage"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFilter<"CouponUsage"> | Date | string;
    coupon?: Prisma.XOR<Prisma.CouponScalarRelationFilter, Prisma.CouponWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
};
export type CouponUsageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    couponId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountApplied?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    coupon?: Prisma.CouponOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CouponUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.CouponUsageWhereInput | Prisma.CouponUsageWhereInput[];
    OR?: Prisma.CouponUsageWhereInput[];
    NOT?: Prisma.CouponUsageWhereInput | Prisma.CouponUsageWhereInput[];
    couponId?: Prisma.StringFilter<"CouponUsage"> | string;
    customerId?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    guestEmail?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    discountApplied?: Prisma.DecimalFilter<"CouponUsage"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFilter<"CouponUsage"> | Date | string;
    coupon?: Prisma.XOR<Prisma.CouponScalarRelationFilter, Prisma.CouponWhereInput>;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
}, "id" | "orderId">;
export type CouponUsageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    couponId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    guestEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    discountApplied?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    _count?: Prisma.CouponUsageCountOrderByAggregateInput;
    _avg?: Prisma.CouponUsageAvgOrderByAggregateInput;
    _max?: Prisma.CouponUsageMaxOrderByAggregateInput;
    _min?: Prisma.CouponUsageMinOrderByAggregateInput;
    _sum?: Prisma.CouponUsageSumOrderByAggregateInput;
};
export type CouponUsageScalarWhereWithAggregatesInput = {
    AND?: Prisma.CouponUsageScalarWhereWithAggregatesInput | Prisma.CouponUsageScalarWhereWithAggregatesInput[];
    OR?: Prisma.CouponUsageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CouponUsageScalarWhereWithAggregatesInput | Prisma.CouponUsageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CouponUsage"> | string;
    couponId?: Prisma.StringWithAggregatesFilter<"CouponUsage"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"CouponUsage"> | string;
    customerId?: Prisma.StringNullableWithAggregatesFilter<"CouponUsage"> | string | null;
    guestEmail?: Prisma.StringNullableWithAggregatesFilter<"CouponUsage"> | string | null;
    discountApplied?: Prisma.DecimalWithAggregatesFilter<"CouponUsage"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeWithAggregatesFilter<"CouponUsage"> | Date | string;
};
export type CouponUsageCreateInput = {
    id?: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
    coupon: Prisma.CouponCreateNestedOneWithoutUsagesInput;
    order: Prisma.OrderCreateNestedOneWithoutCouponUsageInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutCouponUsagesInput;
};
export type CouponUsageUncheckedCreateInput = {
    id?: string;
    couponId: string;
    orderId: string;
    customerId?: string | null;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    coupon?: Prisma.CouponUpdateOneRequiredWithoutUsagesNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutCouponUsageNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutCouponUsagesNestedInput;
};
export type CouponUsageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    couponId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageCreateManyInput = {
    id?: string;
    couponId: string;
    orderId: string;
    customerId?: string | null;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    couponId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageListRelationFilter = {
    every?: Prisma.CouponUsageWhereInput;
    some?: Prisma.CouponUsageWhereInput;
    none?: Prisma.CouponUsageWhereInput;
};
export type CouponUsageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CouponUsageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    couponId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    guestEmail?: Prisma.SortOrder;
    discountApplied?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
};
export type CouponUsageAvgOrderByAggregateInput = {
    discountApplied?: Prisma.SortOrder;
};
export type CouponUsageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    couponId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    guestEmail?: Prisma.SortOrder;
    discountApplied?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
};
export type CouponUsageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    couponId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    guestEmail?: Prisma.SortOrder;
    discountApplied?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
};
export type CouponUsageSumOrderByAggregateInput = {
    discountApplied?: Prisma.SortOrder;
};
export type CouponUsageNullableScalarRelationFilter = {
    is?: Prisma.CouponUsageWhereInput | null;
    isNot?: Prisma.CouponUsageWhereInput | null;
};
export type CouponUsageCreateNestedManyWithoutCouponInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput> | Prisma.CouponUsageCreateWithoutCouponInput[] | Prisma.CouponUsageUncheckedCreateWithoutCouponInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCouponInput | Prisma.CouponUsageCreateOrConnectWithoutCouponInput[];
    createMany?: Prisma.CouponUsageCreateManyCouponInputEnvelope;
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
};
export type CouponUsageUncheckedCreateNestedManyWithoutCouponInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput> | Prisma.CouponUsageCreateWithoutCouponInput[] | Prisma.CouponUsageUncheckedCreateWithoutCouponInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCouponInput | Prisma.CouponUsageCreateOrConnectWithoutCouponInput[];
    createMany?: Prisma.CouponUsageCreateManyCouponInputEnvelope;
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
};
export type CouponUsageUpdateManyWithoutCouponNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput> | Prisma.CouponUsageCreateWithoutCouponInput[] | Prisma.CouponUsageUncheckedCreateWithoutCouponInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCouponInput | Prisma.CouponUsageCreateOrConnectWithoutCouponInput[];
    upsert?: Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput | Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput[];
    createMany?: Prisma.CouponUsageCreateManyCouponInputEnvelope;
    set?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    disconnect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    delete?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    update?: Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput | Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput[];
    updateMany?: Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput | Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput[];
    deleteMany?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
};
export type CouponUsageUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput> | Prisma.CouponUsageCreateWithoutCouponInput[] | Prisma.CouponUsageUncheckedCreateWithoutCouponInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCouponInput | Prisma.CouponUsageCreateOrConnectWithoutCouponInput[];
    upsert?: Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput | Prisma.CouponUsageUpsertWithWhereUniqueWithoutCouponInput[];
    createMany?: Prisma.CouponUsageCreateManyCouponInputEnvelope;
    set?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    disconnect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    delete?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    update?: Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput | Prisma.CouponUsageUpdateWithWhereUniqueWithoutCouponInput[];
    updateMany?: Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput | Prisma.CouponUsageUpdateManyWithWhereWithoutCouponInput[];
    deleteMany?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
};
export type CouponUsageCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput> | Prisma.CouponUsageCreateWithoutCustomerInput[] | Prisma.CouponUsageUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCustomerInput | Prisma.CouponUsageCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CouponUsageCreateManyCustomerInputEnvelope;
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
};
export type CouponUsageUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput> | Prisma.CouponUsageCreateWithoutCustomerInput[] | Prisma.CouponUsageUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCustomerInput | Prisma.CouponUsageCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CouponUsageCreateManyCustomerInputEnvelope;
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
};
export type CouponUsageUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput> | Prisma.CouponUsageCreateWithoutCustomerInput[] | Prisma.CouponUsageUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCustomerInput | Prisma.CouponUsageCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CouponUsageUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CouponUsageUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CouponUsageCreateManyCustomerInputEnvelope;
    set?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    disconnect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    delete?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    update?: Prisma.CouponUsageUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CouponUsageUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CouponUsageUpdateManyWithWhereWithoutCustomerInput | Prisma.CouponUsageUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
};
export type CouponUsageUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput> | Prisma.CouponUsageCreateWithoutCustomerInput[] | Prisma.CouponUsageUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutCustomerInput | Prisma.CouponUsageCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CouponUsageUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CouponUsageUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CouponUsageCreateManyCustomerInputEnvelope;
    set?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    disconnect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    delete?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    connect?: Prisma.CouponUsageWhereUniqueInput | Prisma.CouponUsageWhereUniqueInput[];
    update?: Prisma.CouponUsageUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CouponUsageUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CouponUsageUpdateManyWithWhereWithoutCustomerInput | Prisma.CouponUsageUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
};
export type CouponUsageCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutOrderInput;
    connect?: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutOrderInput;
    connect?: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.CouponUsageUpsertWithoutOrderInput;
    disconnect?: Prisma.CouponUsageWhereInput | boolean;
    delete?: Prisma.CouponUsageWhereInput | boolean;
    connect?: Prisma.CouponUsageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CouponUsageUpdateToOneWithWhereWithoutOrderInput, Prisma.CouponUsageUpdateWithoutOrderInput>, Prisma.CouponUsageUncheckedUpdateWithoutOrderInput>;
};
export type CouponUsageUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.CouponUsageCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.CouponUsageUpsertWithoutOrderInput;
    disconnect?: Prisma.CouponUsageWhereInput | boolean;
    delete?: Prisma.CouponUsageWhereInput | boolean;
    connect?: Prisma.CouponUsageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CouponUsageUpdateToOneWithWhereWithoutOrderInput, Prisma.CouponUsageUpdateWithoutOrderInput>, Prisma.CouponUsageUncheckedUpdateWithoutOrderInput>;
};
export type CouponUsageCreateWithoutCouponInput = {
    id?: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutCouponUsageInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutCouponUsagesInput;
};
export type CouponUsageUncheckedCreateWithoutCouponInput = {
    id?: string;
    orderId: string;
    customerId?: string | null;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageCreateOrConnectWithoutCouponInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput>;
};
export type CouponUsageCreateManyCouponInputEnvelope = {
    data: Prisma.CouponUsageCreateManyCouponInput | Prisma.CouponUsageCreateManyCouponInput[];
    skipDuplicates?: boolean;
};
export type CouponUsageUpsertWithWhereUniqueWithoutCouponInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    update: Prisma.XOR<Prisma.CouponUsageUpdateWithoutCouponInput, Prisma.CouponUsageUncheckedUpdateWithoutCouponInput>;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutCouponInput, Prisma.CouponUsageUncheckedCreateWithoutCouponInput>;
};
export type CouponUsageUpdateWithWhereUniqueWithoutCouponInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    data: Prisma.XOR<Prisma.CouponUsageUpdateWithoutCouponInput, Prisma.CouponUsageUncheckedUpdateWithoutCouponInput>;
};
export type CouponUsageUpdateManyWithWhereWithoutCouponInput = {
    where: Prisma.CouponUsageScalarWhereInput;
    data: Prisma.XOR<Prisma.CouponUsageUpdateManyMutationInput, Prisma.CouponUsageUncheckedUpdateManyWithoutCouponInput>;
};
export type CouponUsageScalarWhereInput = {
    AND?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
    OR?: Prisma.CouponUsageScalarWhereInput[];
    NOT?: Prisma.CouponUsageScalarWhereInput | Prisma.CouponUsageScalarWhereInput[];
    id?: Prisma.StringFilter<"CouponUsage"> | string;
    couponId?: Prisma.StringFilter<"CouponUsage"> | string;
    orderId?: Prisma.StringFilter<"CouponUsage"> | string;
    customerId?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    guestEmail?: Prisma.StringNullableFilter<"CouponUsage"> | string | null;
    discountApplied?: Prisma.DecimalFilter<"CouponUsage"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFilter<"CouponUsage"> | Date | string;
};
export type CouponUsageCreateWithoutCustomerInput = {
    id?: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
    coupon: Prisma.CouponCreateNestedOneWithoutUsagesInput;
    order: Prisma.OrderCreateNestedOneWithoutCouponUsageInput;
};
export type CouponUsageUncheckedCreateWithoutCustomerInput = {
    id?: string;
    couponId: string;
    orderId: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput>;
};
export type CouponUsageCreateManyCustomerInputEnvelope = {
    data: Prisma.CouponUsageCreateManyCustomerInput | Prisma.CouponUsageCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CouponUsageUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    update: Prisma.XOR<Prisma.CouponUsageUpdateWithoutCustomerInput, Prisma.CouponUsageUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutCustomerInput, Prisma.CouponUsageUncheckedCreateWithoutCustomerInput>;
};
export type CouponUsageUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    data: Prisma.XOR<Prisma.CouponUsageUpdateWithoutCustomerInput, Prisma.CouponUsageUncheckedUpdateWithoutCustomerInput>;
};
export type CouponUsageUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CouponUsageScalarWhereInput;
    data: Prisma.XOR<Prisma.CouponUsageUpdateManyMutationInput, Prisma.CouponUsageUncheckedUpdateManyWithoutCustomerInput>;
};
export type CouponUsageCreateWithoutOrderInput = {
    id?: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
    coupon: Prisma.CouponCreateNestedOneWithoutUsagesInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutCouponUsagesInput;
};
export type CouponUsageUncheckedCreateWithoutOrderInput = {
    id?: string;
    couponId: string;
    customerId?: string | null;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageCreateOrConnectWithoutOrderInput = {
    where: Prisma.CouponUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
};
export type CouponUsageUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.CouponUsageUpdateWithoutOrderInput, Prisma.CouponUsageUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.CouponUsageCreateWithoutOrderInput, Prisma.CouponUsageUncheckedCreateWithoutOrderInput>;
    where?: Prisma.CouponUsageWhereInput;
};
export type CouponUsageUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.CouponUsageWhereInput;
    data: Prisma.XOR<Prisma.CouponUsageUpdateWithoutOrderInput, Prisma.CouponUsageUncheckedUpdateWithoutOrderInput>;
};
export type CouponUsageUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    coupon?: Prisma.CouponUpdateOneRequiredWithoutUsagesNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutCouponUsagesNestedInput;
};
export type CouponUsageUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    couponId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageCreateManyCouponInput = {
    id?: string;
    orderId: string;
    customerId?: string | null;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageUpdateWithoutCouponInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutCouponUsageNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutCouponUsagesNestedInput;
};
export type CouponUsageUncheckedUpdateWithoutCouponInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageUncheckedUpdateManyWithoutCouponInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageCreateManyCustomerInput = {
    id?: string;
    couponId: string;
    orderId: string;
    guestEmail?: string | null;
    discountApplied: runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Date | string;
};
export type CouponUsageUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    coupon?: Prisma.CouponUpdateOneRequiredWithoutUsagesNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutCouponUsageNestedInput;
};
export type CouponUsageUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    couponId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    couponId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    guestEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discountApplied?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    usedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUsageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    couponId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    guestEmail?: boolean;
    discountApplied?: boolean;
    usedAt?: boolean;
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
}, ExtArgs["result"]["couponUsage"]>;
export type CouponUsageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    couponId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    guestEmail?: boolean;
    discountApplied?: boolean;
    usedAt?: boolean;
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
}, ExtArgs["result"]["couponUsage"]>;
export type CouponUsageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    couponId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    guestEmail?: boolean;
    discountApplied?: boolean;
    usedAt?: boolean;
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
}, ExtArgs["result"]["couponUsage"]>;
export type CouponUsageSelectScalar = {
    id?: boolean;
    couponId?: boolean;
    orderId?: boolean;
    customerId?: boolean;
    guestEmail?: boolean;
    discountApplied?: boolean;
    usedAt?: boolean;
};
export type CouponUsageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "couponId" | "orderId" | "customerId" | "guestEmail" | "discountApplied" | "usedAt", ExtArgs["result"]["couponUsage"]>;
export type CouponUsageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
};
export type CouponUsageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
};
export type CouponUsageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    coupon?: boolean | Prisma.CouponDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CouponUsage$customerArgs<ExtArgs>;
};
export type $CouponUsagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CouponUsage";
    objects: {
        coupon: Prisma.$CouponPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        couponId: string;
        orderId: string;
        customerId: string | null;
        guestEmail: string | null;
        discountApplied: runtime.Decimal;
        usedAt: Date;
    }, ExtArgs["result"]["couponUsage"]>;
    composites: {};
};
export type CouponUsageGetPayload<S extends boolean | null | undefined | CouponUsageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload, S>;
export type CouponUsageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CouponUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CouponUsageCountAggregateInputType | true;
};
export interface CouponUsageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CouponUsage'];
        meta: {
            name: 'CouponUsage';
        };
    };
    findUnique<T extends CouponUsageFindUniqueArgs>(args: Prisma.SelectSubset<T, CouponUsageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CouponUsageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CouponUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CouponUsageFindFirstArgs>(args?: Prisma.SelectSubset<T, CouponUsageFindFirstArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CouponUsageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CouponUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CouponUsageFindManyArgs>(args?: Prisma.SelectSubset<T, CouponUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CouponUsageCreateArgs>(args: Prisma.SelectSubset<T, CouponUsageCreateArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CouponUsageCreateManyArgs>(args?: Prisma.SelectSubset<T, CouponUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CouponUsageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CouponUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CouponUsageDeleteArgs>(args: Prisma.SelectSubset<T, CouponUsageDeleteArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CouponUsageUpdateArgs>(args: Prisma.SelectSubset<T, CouponUsageUpdateArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CouponUsageDeleteManyArgs>(args?: Prisma.SelectSubset<T, CouponUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CouponUsageUpdateManyArgs>(args: Prisma.SelectSubset<T, CouponUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CouponUsageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CouponUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CouponUsageUpsertArgs>(args: Prisma.SelectSubset<T, CouponUsageUpsertArgs<ExtArgs>>): Prisma.Prisma__CouponUsageClient<runtime.Types.Result.GetResult<Prisma.$CouponUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CouponUsageCountArgs>(args?: Prisma.Subset<T, CouponUsageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CouponUsageCountAggregateOutputType> : number>;
    aggregate<T extends CouponUsageAggregateArgs>(args: Prisma.Subset<T, CouponUsageAggregateArgs>): Prisma.PrismaPromise<GetCouponUsageAggregateType<T>>;
    groupBy<T extends CouponUsageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CouponUsageGroupByArgs['orderBy'];
    } : {
        orderBy?: CouponUsageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CouponUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CouponUsageFieldRefs;
}
export interface Prisma__CouponUsageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    coupon<T extends Prisma.CouponDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CouponDefaultArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CouponUsage$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CouponUsage$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CouponUsageFieldRefs {
    readonly id: Prisma.FieldRef<"CouponUsage", 'String'>;
    readonly couponId: Prisma.FieldRef<"CouponUsage", 'String'>;
    readonly orderId: Prisma.FieldRef<"CouponUsage", 'String'>;
    readonly customerId: Prisma.FieldRef<"CouponUsage", 'String'>;
    readonly guestEmail: Prisma.FieldRef<"CouponUsage", 'String'>;
    readonly discountApplied: Prisma.FieldRef<"CouponUsage", 'Decimal'>;
    readonly usedAt: Prisma.FieldRef<"CouponUsage", 'DateTime'>;
}
export type CouponUsageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where?: Prisma.CouponUsageWhereInput;
    orderBy?: Prisma.CouponUsageOrderByWithRelationInput | Prisma.CouponUsageOrderByWithRelationInput[];
    cursor?: Prisma.CouponUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponUsageScalarFieldEnum | Prisma.CouponUsageScalarFieldEnum[];
};
export type CouponUsageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where?: Prisma.CouponUsageWhereInput;
    orderBy?: Prisma.CouponUsageOrderByWithRelationInput | Prisma.CouponUsageOrderByWithRelationInput[];
    cursor?: Prisma.CouponUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponUsageScalarFieldEnum | Prisma.CouponUsageScalarFieldEnum[];
};
export type CouponUsageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where?: Prisma.CouponUsageWhereInput;
    orderBy?: Prisma.CouponUsageOrderByWithRelationInput | Prisma.CouponUsageOrderByWithRelationInput[];
    cursor?: Prisma.CouponUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponUsageScalarFieldEnum | Prisma.CouponUsageScalarFieldEnum[];
};
export type CouponUsageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponUsageCreateInput, Prisma.CouponUsageUncheckedCreateInput>;
};
export type CouponUsageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CouponUsageCreateManyInput | Prisma.CouponUsageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CouponUsageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    data: Prisma.CouponUsageCreateManyInput | Prisma.CouponUsageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CouponUsageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CouponUsageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponUsageUpdateInput, Prisma.CouponUsageUncheckedUpdateInput>;
    where: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CouponUsageUpdateManyMutationInput, Prisma.CouponUsageUncheckedUpdateManyInput>;
    where?: Prisma.CouponUsageWhereInput;
    limit?: number;
};
export type CouponUsageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponUsageUpdateManyMutationInput, Prisma.CouponUsageUncheckedUpdateManyInput>;
    where?: Prisma.CouponUsageWhereInput;
    limit?: number;
    include?: Prisma.CouponUsageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CouponUsageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where: Prisma.CouponUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponUsageCreateInput, Prisma.CouponUsageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CouponUsageUpdateInput, Prisma.CouponUsageUncheckedUpdateInput>;
};
export type CouponUsageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
    where: Prisma.CouponUsageWhereUniqueInput;
};
export type CouponUsageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponUsageWhereInput;
    limit?: number;
};
export type CouponUsage$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type CouponUsageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponUsageSelect<ExtArgs> | null;
    omit?: Prisma.CouponUsageOmit<ExtArgs> | null;
    include?: Prisma.CouponUsageInclude<ExtArgs> | null;
};
export {};
