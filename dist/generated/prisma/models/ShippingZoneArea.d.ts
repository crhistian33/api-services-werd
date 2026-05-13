import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShippingZoneAreaModel = runtime.Types.Result.DefaultSelection<Prisma.$ShippingZoneAreaPayload>;
export type AggregateShippingZoneArea = {
    _count: ShippingZoneAreaCountAggregateOutputType | null;
    _min: ShippingZoneAreaMinAggregateOutputType | null;
    _max: ShippingZoneAreaMaxAggregateOutputType | null;
};
export type ShippingZoneAreaMinAggregateOutputType = {
    id: string | null;
    zoneId: string | null;
    departmentId: string | null;
    provinceId: string | null;
    districtId: string | null;
    deliveryType: $Enums.DeliveryType | null;
};
export type ShippingZoneAreaMaxAggregateOutputType = {
    id: string | null;
    zoneId: string | null;
    departmentId: string | null;
    provinceId: string | null;
    districtId: string | null;
    deliveryType: $Enums.DeliveryType | null;
};
export type ShippingZoneAreaCountAggregateOutputType = {
    id: number;
    zoneId: number;
    departmentId: number;
    provinceId: number;
    districtId: number;
    deliveryType: number;
    _all: number;
};
export type ShippingZoneAreaMinAggregateInputType = {
    id?: true;
    zoneId?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    deliveryType?: true;
};
export type ShippingZoneAreaMaxAggregateInputType = {
    id?: true;
    zoneId?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    deliveryType?: true;
};
export type ShippingZoneAreaCountAggregateInputType = {
    id?: true;
    zoneId?: true;
    departmentId?: true;
    provinceId?: true;
    districtId?: true;
    deliveryType?: true;
    _all?: true;
};
export type ShippingZoneAreaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
    orderBy?: Prisma.ShippingZoneAreaOrderByWithRelationInput | Prisma.ShippingZoneAreaOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShippingZoneAreaCountAggregateInputType;
    _min?: ShippingZoneAreaMinAggregateInputType;
    _max?: ShippingZoneAreaMaxAggregateInputType;
};
export type GetShippingZoneAreaAggregateType<T extends ShippingZoneAreaAggregateArgs> = {
    [P in keyof T & keyof AggregateShippingZoneArea]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShippingZoneArea[P]> : Prisma.GetScalarType<T[P], AggregateShippingZoneArea[P]>;
};
export type ShippingZoneAreaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
    orderBy?: Prisma.ShippingZoneAreaOrderByWithAggregationInput | Prisma.ShippingZoneAreaOrderByWithAggregationInput[];
    by: Prisma.ShippingZoneAreaScalarFieldEnum[] | Prisma.ShippingZoneAreaScalarFieldEnum;
    having?: Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShippingZoneAreaCountAggregateInputType | true;
    _min?: ShippingZoneAreaMinAggregateInputType;
    _max?: ShippingZoneAreaMaxAggregateInputType;
};
export type ShippingZoneAreaGroupByOutputType = {
    id: string;
    zoneId: string;
    departmentId: string;
    provinceId: string | null;
    districtId: string | null;
    deliveryType: $Enums.DeliveryType;
    _count: ShippingZoneAreaCountAggregateOutputType | null;
    _min: ShippingZoneAreaMinAggregateOutputType | null;
    _max: ShippingZoneAreaMaxAggregateOutputType | null;
};
type GetShippingZoneAreaGroupByPayload<T extends ShippingZoneAreaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShippingZoneAreaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShippingZoneAreaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShippingZoneAreaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShippingZoneAreaGroupByOutputType[P]>;
}>>;
export type ShippingZoneAreaWhereInput = {
    AND?: Prisma.ShippingZoneAreaWhereInput | Prisma.ShippingZoneAreaWhereInput[];
    OR?: Prisma.ShippingZoneAreaWhereInput[];
    NOT?: Prisma.ShippingZoneAreaWhereInput | Prisma.ShippingZoneAreaWhereInput[];
    id?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    zoneId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    departmentId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    provinceId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    districtId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"ShippingZoneArea"> | $Enums.DeliveryType;
    zone?: Prisma.XOR<Prisma.ShippingZoneScalarRelationFilter, Prisma.ShippingZoneWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    province?: Prisma.XOR<Prisma.ProvinceNullableScalarRelationFilter, Prisma.ProvinceWhereInput> | null;
    district?: Prisma.XOR<Prisma.DistrictNullableScalarRelationFilter, Prisma.DistrictWhereInput> | null;
};
export type ShippingZoneAreaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    districtId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    zone?: Prisma.ShippingZoneOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    province?: Prisma.ProvinceOrderByWithRelationInput;
    district?: Prisma.DistrictOrderByWithRelationInput;
};
export type ShippingZoneAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShippingZoneAreaWhereInput | Prisma.ShippingZoneAreaWhereInput[];
    OR?: Prisma.ShippingZoneAreaWhereInput[];
    NOT?: Prisma.ShippingZoneAreaWhereInput | Prisma.ShippingZoneAreaWhereInput[];
    zoneId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    departmentId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    provinceId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    districtId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"ShippingZoneArea"> | $Enums.DeliveryType;
    zone?: Prisma.XOR<Prisma.ShippingZoneScalarRelationFilter, Prisma.ShippingZoneWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    province?: Prisma.XOR<Prisma.ProvinceNullableScalarRelationFilter, Prisma.ProvinceWhereInput> | null;
    district?: Prisma.XOR<Prisma.DistrictNullableScalarRelationFilter, Prisma.DistrictWhereInput> | null;
}, "id">;
export type ShippingZoneAreaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    districtId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
    _count?: Prisma.ShippingZoneAreaCountOrderByAggregateInput;
    _max?: Prisma.ShippingZoneAreaMaxOrderByAggregateInput;
    _min?: Prisma.ShippingZoneAreaMinOrderByAggregateInput;
};
export type ShippingZoneAreaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput | Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput | Prisma.ShippingZoneAreaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShippingZoneArea"> | string;
    zoneId?: Prisma.StringWithAggregatesFilter<"ShippingZoneArea"> | string;
    departmentId?: Prisma.StringWithAggregatesFilter<"ShippingZoneArea"> | string;
    provinceId?: Prisma.StringNullableWithAggregatesFilter<"ShippingZoneArea"> | string | null;
    districtId?: Prisma.StringNullableWithAggregatesFilter<"ShippingZoneArea"> | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeWithAggregatesFilter<"ShippingZoneArea"> | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateInput = {
    id?: string;
    deliveryType?: $Enums.DeliveryType;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutAreasInput;
    department: Prisma.DepartmentCreateNestedOneWithoutZoneAreasInput;
    province?: Prisma.ProvinceCreateNestedOneWithoutZoneAreasInput;
    district?: Prisma.DistrictCreateNestedOneWithoutZoneAreasInput;
};
export type ShippingZoneAreaUncheckedCreateInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutAreasNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutZoneAreasNestedInput;
    province?: Prisma.ProvinceUpdateOneWithoutZoneAreasNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutZoneAreasNestedInput;
};
export type ShippingZoneAreaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateManyInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaListRelationFilter = {
    every?: Prisma.ShippingZoneAreaWhereInput;
    some?: Prisma.ShippingZoneAreaWhereInput;
    none?: Prisma.ShippingZoneAreaWhereInput;
};
export type ShippingZoneAreaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShippingZoneAreaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
};
export type ShippingZoneAreaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
};
export type ShippingZoneAreaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    zoneId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    deliveryType?: Prisma.SortOrder;
};
export type ShippingZoneAreaCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput> | Prisma.ShippingZoneAreaCreateWithoutDepartmentInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDepartmentInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput> | Prisma.ShippingZoneAreaCreateWithoutDepartmentInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDepartmentInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput> | Prisma.ShippingZoneAreaCreateWithoutDepartmentInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDepartmentInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDepartmentInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput> | Prisma.ShippingZoneAreaCreateWithoutDepartmentInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDepartmentInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDepartmentInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput> | Prisma.ShippingZoneAreaCreateWithoutProvinceInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyProvinceInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput> | Prisma.ShippingZoneAreaCreateWithoutProvinceInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyProvinceInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput> | Prisma.ShippingZoneAreaCreateWithoutProvinceInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutProvinceInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyProvinceInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutProvinceInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutProvinceInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput> | Prisma.ShippingZoneAreaCreateWithoutProvinceInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutProvinceInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyProvinceInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutProvinceInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutProvinceInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput> | Prisma.ShippingZoneAreaCreateWithoutDistrictInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDistrictInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput> | Prisma.ShippingZoneAreaCreateWithoutDistrictInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDistrictInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput> | Prisma.ShippingZoneAreaCreateWithoutDistrictInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDistrictInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDistrictInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDistrictInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDistrictInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput> | Prisma.ShippingZoneAreaCreateWithoutDistrictInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDistrictInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyDistrictInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDistrictInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDistrictInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput> | Prisma.ShippingZoneAreaCreateWithoutZoneInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyZoneInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput> | Prisma.ShippingZoneAreaCreateWithoutZoneInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyZoneInputEnvelope;
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
};
export type ShippingZoneAreaUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput> | Prisma.ShippingZoneAreaCreateWithoutZoneInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutZoneInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyZoneInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutZoneInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutZoneInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput> | Prisma.ShippingZoneAreaCreateWithoutZoneInput[] | Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput | Prisma.ShippingZoneAreaCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutZoneInput | Prisma.ShippingZoneAreaUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.ShippingZoneAreaCreateManyZoneInputEnvelope;
    set?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    delete?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    connect?: Prisma.ShippingZoneAreaWhereUniqueInput | Prisma.ShippingZoneAreaWhereUniqueInput[];
    update?: Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutZoneInput | Prisma.ShippingZoneAreaUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutZoneInput | Prisma.ShippingZoneAreaUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
};
export type ShippingZoneAreaCreateWithoutDepartmentInput = {
    id?: string;
    deliveryType?: $Enums.DeliveryType;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutAreasInput;
    province?: Prisma.ProvinceCreateNestedOneWithoutZoneAreasInput;
    district?: Prisma.DistrictCreateNestedOneWithoutZoneAreasInput;
};
export type ShippingZoneAreaUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    zoneId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput>;
};
export type ShippingZoneAreaCreateManyDepartmentInputEnvelope = {
    data: Prisma.ShippingZoneAreaCreateManyDepartmentInput | Prisma.ShippingZoneAreaCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneAreaUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDepartmentInput>;
};
export type ShippingZoneAreaUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutDepartmentInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutDepartmentInput>;
};
export type ShippingZoneAreaUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.ShippingZoneAreaScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentInput>;
};
export type ShippingZoneAreaScalarWhereInput = {
    AND?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
    OR?: Prisma.ShippingZoneAreaScalarWhereInput[];
    NOT?: Prisma.ShippingZoneAreaScalarWhereInput | Prisma.ShippingZoneAreaScalarWhereInput[];
    id?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    zoneId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    departmentId?: Prisma.StringFilter<"ShippingZoneArea"> | string;
    provinceId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    districtId?: Prisma.StringNullableFilter<"ShippingZoneArea"> | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFilter<"ShippingZoneArea"> | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateWithoutProvinceInput = {
    id?: string;
    deliveryType?: $Enums.DeliveryType;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutAreasInput;
    department: Prisma.DepartmentCreateNestedOneWithoutZoneAreasInput;
    district?: Prisma.DistrictCreateNestedOneWithoutZoneAreasInput;
};
export type ShippingZoneAreaUncheckedCreateWithoutProvinceInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateOrConnectWithoutProvinceInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput>;
};
export type ShippingZoneAreaCreateManyProvinceInputEnvelope = {
    data: Prisma.ShippingZoneAreaCreateManyProvinceInput | Prisma.ShippingZoneAreaCreateManyProvinceInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneAreaUpsertWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutProvinceInput>;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutProvinceInput>;
};
export type ShippingZoneAreaUpdateWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutProvinceInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutProvinceInput>;
};
export type ShippingZoneAreaUpdateManyWithWhereWithoutProvinceInput = {
    where: Prisma.ShippingZoneAreaScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceInput>;
};
export type ShippingZoneAreaCreateWithoutDistrictInput = {
    id?: string;
    deliveryType?: $Enums.DeliveryType;
    zone: Prisma.ShippingZoneCreateNestedOneWithoutAreasInput;
    department: Prisma.DepartmentCreateNestedOneWithoutZoneAreasInput;
    province?: Prisma.ProvinceCreateNestedOneWithoutZoneAreasInput;
};
export type ShippingZoneAreaUncheckedCreateWithoutDistrictInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    provinceId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateOrConnectWithoutDistrictInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput>;
};
export type ShippingZoneAreaCreateManyDistrictInputEnvelope = {
    data: Prisma.ShippingZoneAreaCreateManyDistrictInput | Prisma.ShippingZoneAreaCreateManyDistrictInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneAreaUpsertWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutDistrictInput>;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutDistrictInput>;
};
export type ShippingZoneAreaUpdateWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutDistrictInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutDistrictInput>;
};
export type ShippingZoneAreaUpdateManyWithWhereWithoutDistrictInput = {
    where: Prisma.ShippingZoneAreaScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDistrictInput>;
};
export type ShippingZoneAreaCreateWithoutZoneInput = {
    id?: string;
    deliveryType?: $Enums.DeliveryType;
    department: Prisma.DepartmentCreateNestedOneWithoutZoneAreasInput;
    province?: Prisma.ProvinceCreateNestedOneWithoutZoneAreasInput;
    district?: Prisma.DistrictCreateNestedOneWithoutZoneAreasInput;
};
export type ShippingZoneAreaUncheckedCreateWithoutZoneInput = {
    id?: string;
    departmentId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateOrConnectWithoutZoneInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput>;
};
export type ShippingZoneAreaCreateManyZoneInputEnvelope = {
    data: Prisma.ShippingZoneAreaCreateManyZoneInput | Prisma.ShippingZoneAreaCreateManyZoneInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneAreaUpsertWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutZoneInput>;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedCreateWithoutZoneInput>;
};
export type ShippingZoneAreaUpdateWithWhereUniqueWithoutZoneInput = {
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateWithoutZoneInput, Prisma.ShippingZoneAreaUncheckedUpdateWithoutZoneInput>;
};
export type ShippingZoneAreaUpdateManyWithWhereWithoutZoneInput = {
    where: Prisma.ShippingZoneAreaScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneInput>;
};
export type ShippingZoneAreaCreateManyDepartmentInput = {
    id?: string;
    zoneId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutAreasNestedInput;
    province?: Prisma.ProvinceUpdateOneWithoutZoneAreasNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutZoneAreasNestedInput;
};
export type ShippingZoneAreaUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateManyProvinceInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutAreasNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutZoneAreasNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutZoneAreasNestedInput;
};
export type ShippingZoneAreaUncheckedUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateManyDistrictInput = {
    id?: string;
    zoneId: string;
    departmentId: string;
    provinceId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    zone?: Prisma.ShippingZoneUpdateOneRequiredWithoutAreasNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutZoneAreasNestedInput;
    province?: Prisma.ProvinceUpdateOneWithoutZoneAreasNestedInput;
};
export type ShippingZoneAreaUncheckedUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaCreateManyZoneInput = {
    id?: string;
    departmentId: string;
    provinceId?: string | null;
    districtId?: string | null;
    deliveryType?: $Enums.DeliveryType;
};
export type ShippingZoneAreaUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutZoneAreasNestedInput;
    province?: Prisma.ProvinceUpdateOneWithoutZoneAreasNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutZoneAreasNestedInput;
};
export type ShippingZoneAreaUncheckedUpdateWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaUncheckedUpdateManyWithoutZoneInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deliveryType?: Prisma.EnumDeliveryTypeFieldUpdateOperationsInput | $Enums.DeliveryType;
};
export type ShippingZoneAreaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    deliveryType?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZoneArea"]>;
export type ShippingZoneAreaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    deliveryType?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZoneArea"]>;
export type ShippingZoneAreaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    zoneId?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    deliveryType?: boolean;
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZoneArea"]>;
export type ShippingZoneAreaSelectScalar = {
    id?: boolean;
    zoneId?: boolean;
    departmentId?: boolean;
    provinceId?: boolean;
    districtId?: boolean;
    deliveryType?: boolean;
};
export type ShippingZoneAreaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "zoneId" | "departmentId" | "provinceId" | "districtId" | "deliveryType", ExtArgs["result"]["shippingZoneArea"]>;
export type ShippingZoneAreaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
};
export type ShippingZoneAreaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
};
export type ShippingZoneAreaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zone?: boolean | Prisma.ShippingZoneDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    province?: boolean | Prisma.ShippingZoneArea$provinceArgs<ExtArgs>;
    district?: boolean | Prisma.ShippingZoneArea$districtArgs<ExtArgs>;
};
export type $ShippingZoneAreaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShippingZoneArea";
    objects: {
        zone: Prisma.$ShippingZonePayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs>;
        province: Prisma.$ProvincePayload<ExtArgs> | null;
        district: Prisma.$DistrictPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        zoneId: string;
        departmentId: string;
        provinceId: string | null;
        districtId: string | null;
        deliveryType: $Enums.DeliveryType;
    }, ExtArgs["result"]["shippingZoneArea"]>;
    composites: {};
};
export type ShippingZoneAreaGetPayload<S extends boolean | null | undefined | ShippingZoneAreaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload, S>;
export type ShippingZoneAreaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShippingZoneAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShippingZoneAreaCountAggregateInputType | true;
};
export interface ShippingZoneAreaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShippingZoneArea'];
        meta: {
            name: 'ShippingZoneArea';
        };
    };
    findUnique<T extends ShippingZoneAreaFindUniqueArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShippingZoneAreaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShippingZoneAreaFindFirstArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShippingZoneAreaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShippingZoneAreaFindManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShippingZoneAreaCreateArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaCreateArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShippingZoneAreaCreateManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShippingZoneAreaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShippingZoneAreaDeleteArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaDeleteArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShippingZoneAreaUpdateArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaUpdateArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShippingZoneAreaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShippingZoneAreaUpdateManyArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShippingZoneAreaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShippingZoneAreaUpsertArgs>(args: Prisma.SelectSubset<T, ShippingZoneAreaUpsertArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneAreaClient<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShippingZoneAreaCountArgs>(args?: Prisma.Subset<T, ShippingZoneAreaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShippingZoneAreaCountAggregateOutputType> : number>;
    aggregate<T extends ShippingZoneAreaAggregateArgs>(args: Prisma.Subset<T, ShippingZoneAreaAggregateArgs>): Prisma.PrismaPromise<GetShippingZoneAreaAggregateType<T>>;
    groupBy<T extends ShippingZoneAreaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShippingZoneAreaGroupByArgs['orderBy'];
    } : {
        orderBy?: ShippingZoneAreaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShippingZoneAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingZoneAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShippingZoneAreaFieldRefs;
}
export interface Prisma__ShippingZoneAreaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    zone<T extends Prisma.ShippingZoneDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZoneDefaultArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    province<T extends Prisma.ShippingZoneArea$provinceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZoneArea$provinceArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    district<T extends Prisma.ShippingZoneArea$districtArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZoneArea$districtArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShippingZoneAreaFieldRefs {
    readonly id: Prisma.FieldRef<"ShippingZoneArea", 'String'>;
    readonly zoneId: Prisma.FieldRef<"ShippingZoneArea", 'String'>;
    readonly departmentId: Prisma.FieldRef<"ShippingZoneArea", 'String'>;
    readonly provinceId: Prisma.FieldRef<"ShippingZoneArea", 'String'>;
    readonly districtId: Prisma.FieldRef<"ShippingZoneArea", 'String'>;
    readonly deliveryType: Prisma.FieldRef<"ShippingZoneArea", 'DeliveryType'>;
}
export type ShippingZoneAreaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
};
export type ShippingZoneAreaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
};
export type ShippingZoneAreaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneAreaWhereInput;
    orderBy?: Prisma.ShippingZoneAreaOrderByWithRelationInput | Prisma.ShippingZoneAreaOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneAreaScalarFieldEnum | Prisma.ShippingZoneAreaScalarFieldEnum[];
};
export type ShippingZoneAreaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneAreaWhereInput;
    orderBy?: Prisma.ShippingZoneAreaOrderByWithRelationInput | Prisma.ShippingZoneAreaOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneAreaScalarFieldEnum | Prisma.ShippingZoneAreaScalarFieldEnum[];
};
export type ShippingZoneAreaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneAreaWhereInput;
    orderBy?: Prisma.ShippingZoneAreaOrderByWithRelationInput | Prisma.ShippingZoneAreaOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneAreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneAreaScalarFieldEnum | Prisma.ShippingZoneAreaScalarFieldEnum[];
};
export type ShippingZoneAreaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneAreaCreateInput, Prisma.ShippingZoneAreaUncheckedCreateInput>;
};
export type ShippingZoneAreaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShippingZoneAreaCreateManyInput | Prisma.ShippingZoneAreaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneAreaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    data: Prisma.ShippingZoneAreaCreateManyInput | Prisma.ShippingZoneAreaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShippingZoneAreaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShippingZoneAreaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateInput, Prisma.ShippingZoneAreaUncheckedUpdateInput>;
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
};
export type ShippingZoneAreaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyInput>;
    where?: Prisma.ShippingZoneAreaWhereInput;
    limit?: number;
};
export type ShippingZoneAreaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneAreaUpdateManyMutationInput, Prisma.ShippingZoneAreaUncheckedUpdateManyInput>;
    where?: Prisma.ShippingZoneAreaWhereInput;
    limit?: number;
    include?: Prisma.ShippingZoneAreaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShippingZoneAreaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneAreaCreateInput, Prisma.ShippingZoneAreaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShippingZoneAreaUpdateInput, Prisma.ShippingZoneAreaUncheckedUpdateInput>;
};
export type ShippingZoneAreaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneAreaWhereUniqueInput;
};
export type ShippingZoneAreaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
    limit?: number;
};
export type ShippingZoneArea$provinceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where?: Prisma.ProvinceWhereInput;
};
export type ShippingZoneArea$districtArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where?: Prisma.DistrictWhereInput;
};
export type ShippingZoneAreaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneAreaSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneAreaOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneAreaInclude<ExtArgs> | null;
};
export {};
