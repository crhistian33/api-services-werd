import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderAddressModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderAddressPayload>;
export type AggregateOrderAddress = {
    _count: OrderAddressCountAggregateOutputType | null;
    _avg: OrderAddressAvgAggregateOutputType | null;
    _sum: OrderAddressSumAggregateOutputType | null;
    _min: OrderAddressMinAggregateOutputType | null;
    _max: OrderAddressMaxAggregateOutputType | null;
};
export type OrderAddressAvgAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type OrderAddressSumAggregateOutputType = {
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
};
export type OrderAddressMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    recipientName: string | null;
    phone: string | null;
    departmentId: string | null;
    provinceId: string | null;
    districtId: string | null;
    alias: string | null;
    addressLine: string | null;
    reference: string | null;
    sourceAddressId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderAddressMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    recipientName: string | null;
    phone: string | null;
    departmentId: string | null;
    provinceId: string | null;
    districtId: string | null;
    alias: string | null;
    addressLine: string | null;
    reference: string | null;
    sourceAddressId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OrderAddressCountAggregateOutputType = {
    id: number;
    orderId: number;
    recipientName: number;
    phone: number;
    departmentId: number;
    provinceId: number;
    districtId: number;
    alias: number;
    addressLine: number;
    reference: number;
    sourceAddressId: number;
    latitude: number;
    longitude: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OrderAddressAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type OrderAddressSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type OrderAddressMinAggregateInputType = {
    id?: true;
    orderId?: true;
    recipientName?: true;
    phone?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    alias?: true;
    addressLine?: true;
    reference?: true;
    sourceAddressId?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderAddressMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    recipientName?: true;
    phone?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    alias?: true;
    addressLine?: true;
    reference?: true;
    sourceAddressId?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OrderAddressCountAggregateInputType = {
    id?: true;
    orderId?: true;
    recipientName?: true;
    phone?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    alias?: true;
    addressLine?: true;
    reference?: true;
    sourceAddressId?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OrderAddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
    orderBy?: Prisma.OrderAddressOrderByWithRelationInput | Prisma.OrderAddressOrderByWithRelationInput[];
    cursor?: Prisma.OrderAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderAddressCountAggregateInputType;
    _avg?: OrderAddressAvgAggregateInputType;
    _sum?: OrderAddressSumAggregateInputType;
    _min?: OrderAddressMinAggregateInputType;
    _max?: OrderAddressMaxAggregateInputType;
};
export type GetOrderAddressAggregateType<T extends OrderAddressAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderAddress[P]> : Prisma.GetScalarType<T[P], AggregateOrderAddress[P]>;
};
export type OrderAddressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
    orderBy?: Prisma.OrderAddressOrderByWithAggregationInput | Prisma.OrderAddressOrderByWithAggregationInput[];
    by: Prisma.OrderAddressScalarFieldEnum[] | Prisma.OrderAddressScalarFieldEnum;
    having?: Prisma.OrderAddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderAddressCountAggregateInputType | true;
    _avg?: OrderAddressAvgAggregateInputType;
    _sum?: OrderAddressSumAggregateInputType;
    _min?: OrderAddressMinAggregateInputType;
    _max?: OrderAddressMaxAggregateInputType;
};
export type OrderAddressGroupByOutputType = {
    id: string;
    orderId: string;
    recipientName: string;
    phone: string | null;
    departmentId: string;
    provinceId: string;
    districtId: string;
    alias: string | null;
    addressLine: string;
    reference: string | null;
    sourceAddressId: string | null;
    latitude: runtime.Decimal | null;
    longitude: runtime.Decimal | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderAddressCountAggregateOutputType | null;
    _avg: OrderAddressAvgAggregateOutputType | null;
    _sum: OrderAddressSumAggregateOutputType | null;
    _min: OrderAddressMinAggregateOutputType | null;
    _max: OrderAddressMaxAggregateOutputType | null;
};
type GetOrderAddressGroupByPayload<T extends OrderAddressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderAddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderAddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderAddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderAddressGroupByOutputType[P]>;
}>>;
export type OrderAddressWhereInput = {
    AND?: Prisma.OrderAddressWhereInput | Prisma.OrderAddressWhereInput[];
    OR?: Prisma.OrderAddressWhereInput[];
    NOT?: Prisma.OrderAddressWhereInput | Prisma.OrderAddressWhereInput[];
    id?: Prisma.StringFilter<"OrderAddress"> | string;
    orderId?: Prisma.StringFilter<"OrderAddress"> | string;
    recipientName?: Prisma.StringFilter<"OrderAddress"> | string;
    phone?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    departmentId?: Prisma.StringFilter<"OrderAddress"> | string;
    provinceId?: Prisma.StringFilter<"OrderAddress"> | string;
    districtId?: Prisma.StringFilter<"OrderAddress"> | string;
    alias?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    addressLine?: Prisma.StringFilter<"OrderAddress"> | string;
    reference?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    sourceAddressId?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    latitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    province?: Prisma.XOR<Prisma.ProvinceScalarRelationFilter, Prisma.ProvinceWhereInput>;
    district?: Prisma.XOR<Prisma.DistrictScalarRelationFilter, Prisma.DistrictWhereInput>;
};
export type OrderAddressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    alias?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceAddressId?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    province?: Prisma.ProvinceOrderByWithRelationInput;
    district?: Prisma.DistrictOrderByWithRelationInput;
};
export type OrderAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.OrderAddressWhereInput | Prisma.OrderAddressWhereInput[];
    OR?: Prisma.OrderAddressWhereInput[];
    NOT?: Prisma.OrderAddressWhereInput | Prisma.OrderAddressWhereInput[];
    recipientName?: Prisma.StringFilter<"OrderAddress"> | string;
    phone?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    departmentId?: Prisma.StringFilter<"OrderAddress"> | string;
    provinceId?: Prisma.StringFilter<"OrderAddress"> | string;
    districtId?: Prisma.StringFilter<"OrderAddress"> | string;
    alias?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    addressLine?: Prisma.StringFilter<"OrderAddress"> | string;
    reference?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    sourceAddressId?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    latitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    province?: Prisma.XOR<Prisma.ProvinceScalarRelationFilter, Prisma.ProvinceWhereInput>;
    district?: Prisma.XOR<Prisma.DistrictScalarRelationFilter, Prisma.DistrictWhereInput>;
}, "id" | "orderId">;
export type OrderAddressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    alias?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine?: Prisma.SortOrder;
    reference?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceAddressId?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OrderAddressCountOrderByAggregateInput;
    _avg?: Prisma.OrderAddressAvgOrderByAggregateInput;
    _max?: Prisma.OrderAddressMaxOrderByAggregateInput;
    _min?: Prisma.OrderAddressMinOrderByAggregateInput;
    _sum?: Prisma.OrderAddressSumOrderByAggregateInput;
};
export type OrderAddressScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderAddressScalarWhereWithAggregatesInput | Prisma.OrderAddressScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderAddressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderAddressScalarWhereWithAggregatesInput | Prisma.OrderAddressScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    recipientName?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"OrderAddress"> | string | null;
    departmentId?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    provinceId?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    districtId?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    alias?: Prisma.StringNullableWithAggregatesFilter<"OrderAddress"> | string | null;
    addressLine?: Prisma.StringWithAggregatesFilter<"OrderAddress"> | string;
    reference?: Prisma.StringNullableWithAggregatesFilter<"OrderAddress"> | string | null;
    sourceAddressId?: Prisma.StringNullableWithAggregatesFilter<"OrderAddress"> | string | null;
    latitude?: Prisma.DecimalNullableWithAggregatesFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableWithAggregatesFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OrderAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OrderAddress"> | Date | string;
};
export type OrderAddressCreateInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutShippingAddressInput;
    department: Prisma.DepartmentCreateNestedOneWithoutOrderAddressesInput;
    province: Prisma.ProvinceCreateNestedOneWithoutOrderAddressesInput;
    district: Prisma.DistrictCreateNestedOneWithoutOrderAddressesInput;
};
export type OrderAddressUncheckedCreateInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    provinceId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutShippingAddressNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutOrderAddressesNestedInput;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutOrderAddressesNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutOrderAddressesNestedInput;
};
export type OrderAddressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressCreateManyInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    provinceId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressNullableScalarRelationFilter = {
    is?: Prisma.OrderAddressWhereInput | null;
    isNot?: Prisma.OrderAddressWhereInput | null;
};
export type OrderAddressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    addressLine?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    sourceAddressId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAddressAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type OrderAddressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    addressLine?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    sourceAddressId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAddressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    recipientName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    addressLine?: Prisma.SortOrder;
    reference?: Prisma.SortOrder;
    sourceAddressId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OrderAddressSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type OrderAddressListRelationFilter = {
    every?: Prisma.OrderAddressWhereInput;
    some?: Prisma.OrderAddressWhereInput;
    none?: Prisma.OrderAddressWhereInput;
};
export type OrderAddressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderAddressCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OrderAddressUpsertWithoutOrderInput;
    disconnect?: Prisma.OrderAddressWhereInput | boolean;
    delete?: Prisma.OrderAddressWhereInput | boolean;
    connect?: Prisma.OrderAddressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderAddressUpdateToOneWithWhereWithoutOrderInput, Prisma.OrderAddressUpdateWithoutOrderInput>, Prisma.OrderAddressUncheckedUpdateWithoutOrderInput>;
};
export type OrderAddressUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OrderAddressUpsertWithoutOrderInput;
    disconnect?: Prisma.OrderAddressWhereInput | boolean;
    delete?: Prisma.OrderAddressWhereInput | boolean;
    connect?: Prisma.OrderAddressWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderAddressUpdateToOneWithWhereWithoutOrderInput, Prisma.OrderAddressUpdateWithoutOrderInput>, Prisma.OrderAddressUncheckedUpdateWithoutOrderInput>;
};
export type OrderAddressCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput> | Prisma.OrderAddressCreateWithoutDepartmentInput[] | Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput | Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.OrderAddressCreateManyDepartmentInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput> | Prisma.OrderAddressCreateWithoutDepartmentInput[] | Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput | Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.OrderAddressCreateManyDepartmentInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput> | Prisma.OrderAddressCreateWithoutDepartmentInput[] | Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput | Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.OrderAddressCreateManyDepartmentInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutDepartmentInput | Prisma.OrderAddressUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput> | Prisma.OrderAddressCreateWithoutDepartmentInput[] | Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput | Prisma.OrderAddressCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.OrderAddressCreateManyDepartmentInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutDepartmentInput | Prisma.OrderAddressUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput> | Prisma.OrderAddressCreateWithoutProvinceInput[] | Prisma.OrderAddressUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutProvinceInput | Prisma.OrderAddressCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.OrderAddressCreateManyProvinceInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput> | Prisma.OrderAddressCreateWithoutProvinceInput[] | Prisma.OrderAddressUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutProvinceInput | Prisma.OrderAddressCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.OrderAddressCreateManyProvinceInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput> | Prisma.OrderAddressCreateWithoutProvinceInput[] | Prisma.OrderAddressUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutProvinceInput | Prisma.OrderAddressCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutProvinceInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.OrderAddressCreateManyProvinceInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutProvinceInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutProvinceInput | Prisma.OrderAddressUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput> | Prisma.OrderAddressCreateWithoutProvinceInput[] | Prisma.OrderAddressUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutProvinceInput | Prisma.OrderAddressCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutProvinceInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.OrderAddressCreateManyProvinceInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutProvinceInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutProvinceInput | Prisma.OrderAddressUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput> | Prisma.OrderAddressCreateWithoutDistrictInput[] | Prisma.OrderAddressUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDistrictInput | Prisma.OrderAddressCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.OrderAddressCreateManyDistrictInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput> | Prisma.OrderAddressCreateWithoutDistrictInput[] | Prisma.OrderAddressUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDistrictInput | Prisma.OrderAddressCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.OrderAddressCreateManyDistrictInputEnvelope;
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
};
export type OrderAddressUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput> | Prisma.OrderAddressCreateWithoutDistrictInput[] | Prisma.OrderAddressUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDistrictInput | Prisma.OrderAddressCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutDistrictInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.OrderAddressCreateManyDistrictInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutDistrictInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutDistrictInput | Prisma.OrderAddressUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput> | Prisma.OrderAddressCreateWithoutDistrictInput[] | Prisma.OrderAddressUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.OrderAddressCreateOrConnectWithoutDistrictInput | Prisma.OrderAddressCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.OrderAddressUpsertWithWhereUniqueWithoutDistrictInput | Prisma.OrderAddressUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.OrderAddressCreateManyDistrictInputEnvelope;
    set?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    disconnect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    delete?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    connect?: Prisma.OrderAddressWhereUniqueInput | Prisma.OrderAddressWhereUniqueInput[];
    update?: Prisma.OrderAddressUpdateWithWhereUniqueWithoutDistrictInput | Prisma.OrderAddressUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.OrderAddressUpdateManyWithWhereWithoutDistrictInput | Prisma.OrderAddressUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
};
export type OrderAddressCreateWithoutOrderInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutOrderAddressesInput;
    province: Prisma.ProvinceCreateNestedOneWithoutOrderAddressesInput;
    district: Prisma.DistrictCreateNestedOneWithoutOrderAddressesInput;
};
export type OrderAddressUncheckedCreateWithoutOrderInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    provinceId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
};
export type OrderAddressUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.OrderAddressUpdateWithoutOrderInput, Prisma.OrderAddressUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutOrderInput, Prisma.OrderAddressUncheckedCreateWithoutOrderInput>;
    where?: Prisma.OrderAddressWhereInput;
};
export type OrderAddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.OrderAddressWhereInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateWithoutOrderInput, Prisma.OrderAddressUncheckedUpdateWithoutOrderInput>;
};
export type OrderAddressUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutOrderAddressesNestedInput;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutOrderAddressesNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutOrderAddressesNestedInput;
};
export type OrderAddressUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressCreateWithoutDepartmentInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutShippingAddressInput;
    province: Prisma.ProvinceCreateNestedOneWithoutOrderAddressesInput;
    district: Prisma.DistrictCreateNestedOneWithoutOrderAddressesInput;
};
export type OrderAddressUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    provinceId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput>;
};
export type OrderAddressCreateManyDepartmentInputEnvelope = {
    data: Prisma.OrderAddressCreateManyDepartmentInput | Prisma.OrderAddressCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type OrderAddressUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderAddressUpdateWithoutDepartmentInput, Prisma.OrderAddressUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutDepartmentInput, Prisma.OrderAddressUncheckedCreateWithoutDepartmentInput>;
};
export type OrderAddressUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateWithoutDepartmentInput, Prisma.OrderAddressUncheckedUpdateWithoutDepartmentInput>;
};
export type OrderAddressUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.OrderAddressScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateManyMutationInput, Prisma.OrderAddressUncheckedUpdateManyWithoutDepartmentInput>;
};
export type OrderAddressScalarWhereInput = {
    AND?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
    OR?: Prisma.OrderAddressScalarWhereInput[];
    NOT?: Prisma.OrderAddressScalarWhereInput | Prisma.OrderAddressScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderAddress"> | string;
    orderId?: Prisma.StringFilter<"OrderAddress"> | string;
    recipientName?: Prisma.StringFilter<"OrderAddress"> | string;
    phone?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    departmentId?: Prisma.StringFilter<"OrderAddress"> | string;
    provinceId?: Prisma.StringFilter<"OrderAddress"> | string;
    districtId?: Prisma.StringFilter<"OrderAddress"> | string;
    alias?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    addressLine?: Prisma.StringFilter<"OrderAddress"> | string;
    reference?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    sourceAddressId?: Prisma.StringNullableFilter<"OrderAddress"> | string | null;
    latitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.DecimalNullableFilter<"OrderAddress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OrderAddress"> | Date | string;
};
export type OrderAddressCreateWithoutProvinceInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutShippingAddressInput;
    department: Prisma.DepartmentCreateNestedOneWithoutOrderAddressesInput;
    district: Prisma.DistrictCreateNestedOneWithoutOrderAddressesInput;
};
export type OrderAddressUncheckedCreateWithoutProvinceInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressCreateOrConnectWithoutProvinceInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput>;
};
export type OrderAddressCreateManyProvinceInputEnvelope = {
    data: Prisma.OrderAddressCreateManyProvinceInput | Prisma.OrderAddressCreateManyProvinceInput[];
    skipDuplicates?: boolean;
};
export type OrderAddressUpsertWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderAddressUpdateWithoutProvinceInput, Prisma.OrderAddressUncheckedUpdateWithoutProvinceInput>;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutProvinceInput, Prisma.OrderAddressUncheckedCreateWithoutProvinceInput>;
};
export type OrderAddressUpdateWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateWithoutProvinceInput, Prisma.OrderAddressUncheckedUpdateWithoutProvinceInput>;
};
export type OrderAddressUpdateManyWithWhereWithoutProvinceInput = {
    where: Prisma.OrderAddressScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateManyMutationInput, Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceInput>;
};
export type OrderAddressCreateWithoutDistrictInput = {
    id?: string;
    recipientName: string;
    phone?: string | null;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutShippingAddressInput;
    department: Prisma.DepartmentCreateNestedOneWithoutOrderAddressesInput;
    province: Prisma.ProvinceCreateNestedOneWithoutOrderAddressesInput;
};
export type OrderAddressUncheckedCreateWithoutDistrictInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    provinceId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressCreateOrConnectWithoutDistrictInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput>;
};
export type OrderAddressCreateManyDistrictInputEnvelope = {
    data: Prisma.OrderAddressCreateManyDistrictInput | Prisma.OrderAddressCreateManyDistrictInput[];
    skipDuplicates?: boolean;
};
export type OrderAddressUpsertWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderAddressUpdateWithoutDistrictInput, Prisma.OrderAddressUncheckedUpdateWithoutDistrictInput>;
    create: Prisma.XOR<Prisma.OrderAddressCreateWithoutDistrictInput, Prisma.OrderAddressUncheckedCreateWithoutDistrictInput>;
};
export type OrderAddressUpdateWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.OrderAddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateWithoutDistrictInput, Prisma.OrderAddressUncheckedUpdateWithoutDistrictInput>;
};
export type OrderAddressUpdateManyWithWhereWithoutDistrictInput = {
    where: Prisma.OrderAddressScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderAddressUpdateManyMutationInput, Prisma.OrderAddressUncheckedUpdateManyWithoutDistrictInput>;
};
export type OrderAddressCreateManyDepartmentInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    provinceId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutShippingAddressNestedInput;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutOrderAddressesNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutOrderAddressesNestedInput;
};
export type OrderAddressUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressCreateManyProvinceInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    districtId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutShippingAddressNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutOrderAddressesNestedInput;
    district?: Prisma.DistrictUpdateOneRequiredWithoutOrderAddressesNestedInput;
};
export type OrderAddressUncheckedUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressUncheckedUpdateManyWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressCreateManyDistrictInput = {
    id?: string;
    orderId: string;
    recipientName: string;
    phone?: string | null;
    departmentId: string;
    provinceId: string;
    alias?: string | null;
    addressLine: string;
    reference?: string | null;
    sourceAddressId?: string | null;
    latitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OrderAddressUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutShippingAddressNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutOrderAddressesNestedInput;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutOrderAddressesNestedInput;
};
export type OrderAddressUncheckedUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressUncheckedUpdateManyWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipientName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine?: Prisma.StringFieldUpdateOperationsInput | string;
    reference?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceAddressId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    latitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitude?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderAddressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    alias?: boolean;
    addressLine?: boolean;
    reference?: boolean;
    sourceAddressId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderAddress"]>;
export type OrderAddressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    alias?: boolean;
    addressLine?: boolean;
    reference?: boolean;
    sourceAddressId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderAddress"]>;
export type OrderAddressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    alias?: boolean;
    addressLine?: boolean;
    reference?: boolean;
    sourceAddressId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderAddress"]>;
export type OrderAddressSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    recipientName?: boolean;
    phone?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    alias?: boolean;
    addressLine?: boolean;
    reference?: boolean;
    sourceAddressId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OrderAddressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "recipientName" | "phone" | "departmentId" | "provinceId" | "districtId" | "alias" | "addressLine" | "reference" | "sourceAddressId" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["orderAddress"]>;
export type OrderAddressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
};
export type OrderAddressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
};
export type OrderAddressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    district?: boolean | Prisma.DistrictDefaultArgs<ExtArgs>;
};
export type $OrderAddressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderAddress";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs>;
        province: Prisma.$ProvincePayload<ExtArgs>;
        district: Prisma.$DistrictPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        recipientName: string;
        phone: string | null;
        departmentId: string;
        provinceId: string;
        districtId: string;
        alias: string | null;
        addressLine: string;
        reference: string | null;
        sourceAddressId: string | null;
        latitude: runtime.Decimal | null;
        longitude: runtime.Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["orderAddress"]>;
    composites: {};
};
export type OrderAddressGetPayload<S extends boolean | null | undefined | OrderAddressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload, S>;
export type OrderAddressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderAddressCountAggregateInputType | true;
};
export interface OrderAddressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderAddress'];
        meta: {
            name: 'OrderAddress';
        };
    };
    findUnique<T extends OrderAddressFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderAddressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderAddressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderAddressFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderAddressFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderAddressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderAddressFindManyArgs>(args?: Prisma.SelectSubset<T, OrderAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderAddressCreateArgs>(args: Prisma.SelectSubset<T, OrderAddressCreateArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderAddressCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderAddressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderAddressDeleteArgs>(args: Prisma.SelectSubset<T, OrderAddressDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderAddressUpdateArgs>(args: Prisma.SelectSubset<T, OrderAddressUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderAddressDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderAddressUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderAddressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderAddressUpsertArgs>(args: Prisma.SelectSubset<T, OrderAddressUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderAddressClient<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderAddressCountArgs>(args?: Prisma.Subset<T, OrderAddressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderAddressCountAggregateOutputType> : number>;
    aggregate<T extends OrderAddressAggregateArgs>(args: Prisma.Subset<T, OrderAddressAggregateArgs>): Prisma.PrismaPromise<GetOrderAddressAggregateType<T>>;
    groupBy<T extends OrderAddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderAddressGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderAddressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderAddressFieldRefs;
}
export interface Prisma__OrderAddressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    province<T extends Prisma.ProvinceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProvinceDefaultArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    district<T extends Prisma.DistrictDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DistrictDefaultArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderAddressFieldRefs {
    readonly id: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly recipientName: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly phone: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly departmentId: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly provinceId: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly districtId: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly alias: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly addressLine: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly reference: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly sourceAddressId: Prisma.FieldRef<"OrderAddress", 'String'>;
    readonly latitude: Prisma.FieldRef<"OrderAddress", 'Decimal'>;
    readonly longitude: Prisma.FieldRef<"OrderAddress", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"OrderAddress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OrderAddress", 'DateTime'>;
}
export type OrderAddressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where?: Prisma.OrderAddressWhereInput;
    orderBy?: Prisma.OrderAddressOrderByWithRelationInput | Prisma.OrderAddressOrderByWithRelationInput[];
    cursor?: Prisma.OrderAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderAddressScalarFieldEnum | Prisma.OrderAddressScalarFieldEnum[];
};
export type OrderAddressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where?: Prisma.OrderAddressWhereInput;
    orderBy?: Prisma.OrderAddressOrderByWithRelationInput | Prisma.OrderAddressOrderByWithRelationInput[];
    cursor?: Prisma.OrderAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderAddressScalarFieldEnum | Prisma.OrderAddressScalarFieldEnum[];
};
export type OrderAddressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where?: Prisma.OrderAddressWhereInput;
    orderBy?: Prisma.OrderAddressOrderByWithRelationInput | Prisma.OrderAddressOrderByWithRelationInput[];
    cursor?: Prisma.OrderAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderAddressScalarFieldEnum | Prisma.OrderAddressScalarFieldEnum[];
};
export type OrderAddressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderAddressCreateInput, Prisma.OrderAddressUncheckedCreateInput>;
};
export type OrderAddressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderAddressCreateManyInput | Prisma.OrderAddressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderAddressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    data: Prisma.OrderAddressCreateManyInput | Prisma.OrderAddressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderAddressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderAddressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderAddressUpdateInput, Prisma.OrderAddressUncheckedUpdateInput>;
    where: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderAddressUpdateManyMutationInput, Prisma.OrderAddressUncheckedUpdateManyInput>;
    where?: Prisma.OrderAddressWhereInput;
    limit?: number;
};
export type OrderAddressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderAddressUpdateManyMutationInput, Prisma.OrderAddressUncheckedUpdateManyInput>;
    where?: Prisma.OrderAddressWhereInput;
    limit?: number;
    include?: Prisma.OrderAddressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderAddressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where: Prisma.OrderAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderAddressCreateInput, Prisma.OrderAddressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderAddressUpdateInput, Prisma.OrderAddressUncheckedUpdateInput>;
};
export type OrderAddressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
    where: Prisma.OrderAddressWhereUniqueInput;
};
export type OrderAddressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
    limit?: number;
};
export type OrderAddressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderAddressSelect<ExtArgs> | null;
    omit?: Prisma.OrderAddressOmit<ExtArgs> | null;
    include?: Prisma.OrderAddressInclude<ExtArgs> | null;
};
export {};
