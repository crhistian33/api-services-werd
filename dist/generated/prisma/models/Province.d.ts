import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProvinceModel = runtime.Types.Result.DefaultSelection<Prisma.$ProvincePayload>;
export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null;
    _min: ProvinceMinAggregateOutputType | null;
    _max: ProvinceMaxAggregateOutputType | null;
};
export type ProvinceMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    departmentId: string | null;
};
export type ProvinceMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    departmentId: string | null;
};
export type ProvinceCountAggregateOutputType = {
    id: number;
    name: number;
    departmentId: number;
    _all: number;
};
export type ProvinceMinAggregateInputType = {
    id?: true;
    name?: true;
    departmentId?: true;
};
export type ProvinceMaxAggregateInputType = {
    id?: true;
    name?: true;
    departmentId?: true;
};
export type ProvinceCountAggregateInputType = {
    id?: true;
    name?: true;
    departmentId?: true;
    _all?: true;
};
export type ProvinceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvinceWhereInput;
    orderBy?: Prisma.ProvinceOrderByWithRelationInput | Prisma.ProvinceOrderByWithRelationInput[];
    cursor?: Prisma.ProvinceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProvinceCountAggregateInputType;
    _min?: ProvinceMinAggregateInputType;
    _max?: ProvinceMaxAggregateInputType;
};
export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
    [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProvince[P]> : Prisma.GetScalarType<T[P], AggregateProvince[P]>;
};
export type ProvinceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvinceWhereInput;
    orderBy?: Prisma.ProvinceOrderByWithAggregationInput | Prisma.ProvinceOrderByWithAggregationInput[];
    by: Prisma.ProvinceScalarFieldEnum[] | Prisma.ProvinceScalarFieldEnum;
    having?: Prisma.ProvinceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProvinceCountAggregateInputType | true;
    _min?: ProvinceMinAggregateInputType;
    _max?: ProvinceMaxAggregateInputType;
};
export type ProvinceGroupByOutputType = {
    id: string;
    name: string;
    departmentId: string;
    _count: ProvinceCountAggregateOutputType | null;
    _min: ProvinceMinAggregateOutputType | null;
    _max: ProvinceMaxAggregateOutputType | null;
};
type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProvinceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProvinceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProvinceGroupByOutputType[P]>;
}>>;
export type ProvinceWhereInput = {
    AND?: Prisma.ProvinceWhereInput | Prisma.ProvinceWhereInput[];
    OR?: Prisma.ProvinceWhereInput[];
    NOT?: Prisma.ProvinceWhereInput | Prisma.ProvinceWhereInput[];
    id?: Prisma.StringFilter<"Province"> | string;
    name?: Prisma.StringFilter<"Province"> | string;
    departmentId?: Prisma.StringFilter<"Province"> | string;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    districts?: Prisma.DistrictListRelationFilter;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
};
export type ProvinceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    districts?: Prisma.DistrictOrderByRelationAggregateInput;
    zoneAreas?: Prisma.ShippingZoneAreaOrderByRelationAggregateInput;
    addresses?: Prisma.CustomerAddressOrderByRelationAggregateInput;
    orderAddresses?: Prisma.OrderAddressOrderByRelationAggregateInput;
};
export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_departmentId?: Prisma.ProvinceNameDepartmentIdCompoundUniqueInput;
    AND?: Prisma.ProvinceWhereInput | Prisma.ProvinceWhereInput[];
    OR?: Prisma.ProvinceWhereInput[];
    NOT?: Prisma.ProvinceWhereInput | Prisma.ProvinceWhereInput[];
    name?: Prisma.StringFilter<"Province"> | string;
    departmentId?: Prisma.StringFilter<"Province"> | string;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    districts?: Prisma.DistrictListRelationFilter;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
}, "id" | "name_departmentId">;
export type ProvinceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    _count?: Prisma.ProvinceCountOrderByAggregateInput;
    _max?: Prisma.ProvinceMaxOrderByAggregateInput;
    _min?: Prisma.ProvinceMinOrderByAggregateInput;
};
export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProvinceScalarWhereWithAggregatesInput | Prisma.ProvinceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProvinceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProvinceScalarWhereWithAggregatesInput | Prisma.ProvinceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Province"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Province"> | string;
    departmentId?: Prisma.StringWithAggregatesFilter<"Province"> | string;
};
export type ProvinceCreateInput = {
    id: string;
    name: string;
    department: Prisma.DepartmentCreateNestedOneWithoutProvincesInput;
    districts?: Prisma.DistrictCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateInput = {
    id: string;
    name: string;
    departmentId: string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutProvincesNestedInput;
    districts?: Prisma.DistrictUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceCreateManyInput = {
    id: string;
    name: string;
    departmentId: string;
};
export type ProvinceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProvinceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProvinceScalarRelationFilter = {
    is?: Prisma.ProvinceWhereInput;
    isNot?: Prisma.ProvinceWhereInput;
};
export type ProvinceListRelationFilter = {
    every?: Prisma.ProvinceWhereInput;
    some?: Prisma.ProvinceWhereInput;
    none?: Prisma.ProvinceWhereInput;
};
export type ProvinceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProvinceNameDepartmentIdCompoundUniqueInput = {
    name: string;
    departmentId: string;
};
export type ProvinceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type ProvinceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type ProvinceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
};
export type ProvinceNullableScalarRelationFilter = {
    is?: Prisma.ProvinceWhereInput | null;
    isNot?: Prisma.ProvinceWhereInput | null;
};
export type ProvinceCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutAddressesInput, Prisma.ProvinceUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutAddressesInput, Prisma.ProvinceUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.ProvinceUpsertWithoutAddressesInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProvinceUpdateToOneWithWhereWithoutAddressesInput, Prisma.ProvinceUpdateWithoutAddressesInput>, Prisma.ProvinceUncheckedUpdateWithoutAddressesInput>;
};
export type ProvinceCreateNestedOneWithoutOrderAddressesInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutOrderAddressesInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceUpdateOneRequiredWithoutOrderAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutOrderAddressesInput;
    upsert?: Prisma.ProvinceUpsertWithoutOrderAddressesInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProvinceUpdateToOneWithWhereWithoutOrderAddressesInput, Prisma.ProvinceUpdateWithoutOrderAddressesInput>, Prisma.ProvinceUncheckedUpdateWithoutOrderAddressesInput>;
};
export type ProvinceCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput> | Prisma.ProvinceCreateWithoutDepartmentInput[] | Prisma.ProvinceUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDepartmentInput | Prisma.ProvinceCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.ProvinceCreateManyDepartmentInputEnvelope;
    connect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
};
export type ProvinceUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput> | Prisma.ProvinceCreateWithoutDepartmentInput[] | Prisma.ProvinceUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDepartmentInput | Prisma.ProvinceCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.ProvinceCreateManyDepartmentInputEnvelope;
    connect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
};
export type ProvinceUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput> | Prisma.ProvinceCreateWithoutDepartmentInput[] | Prisma.ProvinceUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDepartmentInput | Prisma.ProvinceCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.ProvinceUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.ProvinceUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.ProvinceCreateManyDepartmentInputEnvelope;
    set?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    disconnect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    delete?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    connect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    update?: Prisma.ProvinceUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.ProvinceUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.ProvinceUpdateManyWithWhereWithoutDepartmentInput | Prisma.ProvinceUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.ProvinceScalarWhereInput | Prisma.ProvinceScalarWhereInput[];
};
export type ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput> | Prisma.ProvinceCreateWithoutDepartmentInput[] | Prisma.ProvinceUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDepartmentInput | Prisma.ProvinceCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.ProvinceUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.ProvinceUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.ProvinceCreateManyDepartmentInputEnvelope;
    set?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    disconnect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    delete?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    connect?: Prisma.ProvinceWhereUniqueInput | Prisma.ProvinceWhereUniqueInput[];
    update?: Prisma.ProvinceUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.ProvinceUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.ProvinceUpdateManyWithWhereWithoutDepartmentInput | Prisma.ProvinceUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.ProvinceScalarWhereInput | Prisma.ProvinceScalarWhereInput[];
};
export type ProvinceCreateNestedOneWithoutDistrictsInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDistrictsInput, Prisma.ProvinceUncheckedCreateWithoutDistrictsInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDistrictsInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutDistrictsInput, Prisma.ProvinceUncheckedCreateWithoutDistrictsInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutDistrictsInput;
    upsert?: Prisma.ProvinceUpsertWithoutDistrictsInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProvinceUpdateToOneWithWhereWithoutDistrictsInput, Prisma.ProvinceUpdateWithoutDistrictsInput>, Prisma.ProvinceUncheckedUpdateWithoutDistrictsInput>;
};
export type ProvinceCreateNestedOneWithoutZoneAreasInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutZoneAreasInput, Prisma.ProvinceUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutZoneAreasInput;
    connect?: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceUpdateOneWithoutZoneAreasNestedInput = {
    create?: Prisma.XOR<Prisma.ProvinceCreateWithoutZoneAreasInput, Prisma.ProvinceUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.ProvinceCreateOrConnectWithoutZoneAreasInput;
    upsert?: Prisma.ProvinceUpsertWithoutZoneAreasInput;
    disconnect?: Prisma.ProvinceWhereInput | boolean;
    delete?: Prisma.ProvinceWhereInput | boolean;
    connect?: Prisma.ProvinceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProvinceUpdateToOneWithWhereWithoutZoneAreasInput, Prisma.ProvinceUpdateWithoutZoneAreasInput>, Prisma.ProvinceUncheckedUpdateWithoutZoneAreasInput>;
};
export type ProvinceCreateWithoutAddressesInput = {
    id: string;
    name: string;
    department: Prisma.DepartmentCreateNestedOneWithoutProvincesInput;
    districts?: Prisma.DistrictCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateWithoutAddressesInput = {
    id: string;
    name: string;
    departmentId: string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceCreateOrConnectWithoutAddressesInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutAddressesInput, Prisma.ProvinceUncheckedCreateWithoutAddressesInput>;
};
export type ProvinceUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.ProvinceUpdateWithoutAddressesInput, Prisma.ProvinceUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutAddressesInput, Prisma.ProvinceUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.ProvinceWhereInput;
};
export type ProvinceUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.ProvinceWhereInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateWithoutAddressesInput, Prisma.ProvinceUncheckedUpdateWithoutAddressesInput>;
};
export type ProvinceUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutProvincesNestedInput;
    districts?: Prisma.DistrictUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    department: Prisma.DepartmentCreateNestedOneWithoutProvincesInput;
    districts?: Prisma.DistrictCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    departmentId: string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceCreateOrConnectWithoutOrderAddressesInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedCreateWithoutOrderAddressesInput>;
};
export type ProvinceUpsertWithoutOrderAddressesInput = {
    update: Prisma.XOR<Prisma.ProvinceUpdateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedUpdateWithoutOrderAddressesInput>;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedCreateWithoutOrderAddressesInput>;
    where?: Prisma.ProvinceWhereInput;
};
export type ProvinceUpdateToOneWithWhereWithoutOrderAddressesInput = {
    where?: Prisma.ProvinceWhereInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateWithoutOrderAddressesInput, Prisma.ProvinceUncheckedUpdateWithoutOrderAddressesInput>;
};
export type ProvinceUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutProvincesNestedInput;
    districts?: Prisma.DistrictUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceCreateWithoutDepartmentInput = {
    id: string;
    name: string;
    districts?: Prisma.DistrictCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateWithoutDepartmentInput = {
    id: string;
    name: string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutProvinceInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput>;
};
export type ProvinceCreateManyDepartmentInputEnvelope = {
    data: Prisma.ProvinceCreateManyDepartmentInput | Prisma.ProvinceCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type ProvinceUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProvinceUpdateWithoutDepartmentInput, Prisma.ProvinceUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutDepartmentInput, Prisma.ProvinceUncheckedCreateWithoutDepartmentInput>;
};
export type ProvinceUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateWithoutDepartmentInput, Prisma.ProvinceUncheckedUpdateWithoutDepartmentInput>;
};
export type ProvinceUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.ProvinceScalarWhereInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateManyMutationInput, Prisma.ProvinceUncheckedUpdateManyWithoutDepartmentInput>;
};
export type ProvinceScalarWhereInput = {
    AND?: Prisma.ProvinceScalarWhereInput | Prisma.ProvinceScalarWhereInput[];
    OR?: Prisma.ProvinceScalarWhereInput[];
    NOT?: Prisma.ProvinceScalarWhereInput | Prisma.ProvinceScalarWhereInput[];
    id?: Prisma.StringFilter<"Province"> | string;
    name?: Prisma.StringFilter<"Province"> | string;
    departmentId?: Prisma.StringFilter<"Province"> | string;
};
export type ProvinceCreateWithoutDistrictsInput = {
    id: string;
    name: string;
    department: Prisma.DepartmentCreateNestedOneWithoutProvincesInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateWithoutDistrictsInput = {
    id: string;
    name: string;
    departmentId: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceCreateOrConnectWithoutDistrictsInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutDistrictsInput, Prisma.ProvinceUncheckedCreateWithoutDistrictsInput>;
};
export type ProvinceUpsertWithoutDistrictsInput = {
    update: Prisma.XOR<Prisma.ProvinceUpdateWithoutDistrictsInput, Prisma.ProvinceUncheckedUpdateWithoutDistrictsInput>;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutDistrictsInput, Prisma.ProvinceUncheckedCreateWithoutDistrictsInput>;
    where?: Prisma.ProvinceWhereInput;
};
export type ProvinceUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: Prisma.ProvinceWhereInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateWithoutDistrictsInput, Prisma.ProvinceUncheckedUpdateWithoutDistrictsInput>;
};
export type ProvinceUpdateWithoutDistrictsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutProvincesNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateWithoutDistrictsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    department: Prisma.DepartmentCreateNestedOneWithoutProvincesInput;
    districts?: Prisma.DistrictCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutProvinceInput;
};
export type ProvinceUncheckedCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    departmentId: string;
    districts?: Prisma.DistrictUncheckedCreateNestedManyWithoutProvinceInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutProvinceInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutProvinceInput;
};
export type ProvinceCreateOrConnectWithoutZoneAreasInput = {
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutZoneAreasInput, Prisma.ProvinceUncheckedCreateWithoutZoneAreasInput>;
};
export type ProvinceUpsertWithoutZoneAreasInput = {
    update: Prisma.XOR<Prisma.ProvinceUpdateWithoutZoneAreasInput, Prisma.ProvinceUncheckedUpdateWithoutZoneAreasInput>;
    create: Prisma.XOR<Prisma.ProvinceCreateWithoutZoneAreasInput, Prisma.ProvinceUncheckedCreateWithoutZoneAreasInput>;
    where?: Prisma.ProvinceWhereInput;
};
export type ProvinceUpdateToOneWithWhereWithoutZoneAreasInput = {
    where?: Prisma.ProvinceWhereInput;
    data: Prisma.XOR<Prisma.ProvinceUpdateWithoutZoneAreasInput, Prisma.ProvinceUncheckedUpdateWithoutZoneAreasInput>;
};
export type ProvinceUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutProvincesNestedInput;
    districts?: Prisma.DistrictUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceCreateManyDepartmentInput = {
    id: string;
    name: string;
};
export type ProvinceUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    districts?: Prisma.DistrictUncheckedUpdateManyWithoutProvinceNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutProvinceNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutProvinceNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutProvinceNestedInput;
};
export type ProvinceUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProvinceCountOutputType = {
    districts: number;
    zoneAreas: number;
    addresses: number;
    orderAddresses: number;
};
export type ProvinceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    districts?: boolean | ProvinceCountOutputTypeCountDistrictsArgs;
    zoneAreas?: boolean | ProvinceCountOutputTypeCountZoneAreasArgs;
    addresses?: boolean | ProvinceCountOutputTypeCountAddressesArgs;
    orderAddresses?: boolean | ProvinceCountOutputTypeCountOrderAddressesArgs;
};
export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceCountOutputTypeSelect<ExtArgs> | null;
};
export type ProvinceCountOutputTypeCountDistrictsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DistrictWhereInput;
};
export type ProvinceCountOutputTypeCountZoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
};
export type ProvinceCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
};
export type ProvinceCountOutputTypeCountOrderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
};
export type ProvinceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    departmentId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    districts?: boolean | Prisma.Province$districtsArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.Province$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.Province$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.Province$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProvinceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["province"]>;
export type ProvinceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    departmentId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["province"]>;
export type ProvinceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    departmentId?: boolean;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["province"]>;
export type ProvinceSelectScalar = {
    id?: boolean;
    name?: boolean;
    departmentId?: boolean;
};
export type ProvinceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "departmentId", ExtArgs["result"]["province"]>;
export type ProvinceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    districts?: boolean | Prisma.Province$districtsArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.Province$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.Province$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.Province$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProvinceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
};
export type ProvinceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
};
export type $ProvincePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Province";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs>;
        districts: Prisma.$DistrictPayload<ExtArgs>[];
        zoneAreas: Prisma.$ShippingZoneAreaPayload<ExtArgs>[];
        addresses: Prisma.$CustomerAddressPayload<ExtArgs>[];
        orderAddresses: Prisma.$OrderAddressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        departmentId: string;
    }, ExtArgs["result"]["province"]>;
    composites: {};
};
export type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProvincePayload, S>;
export type ProvinceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProvinceCountAggregateInputType | true;
};
export interface ProvinceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Province'];
        meta: {
            name: 'Province';
        };
    };
    findUnique<T extends ProvinceFindUniqueArgs>(args: Prisma.SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProvinceFindFirstArgs>(args?: Prisma.SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProvinceFindManyArgs>(args?: Prisma.SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProvinceCreateArgs>(args: Prisma.SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProvinceCreateManyArgs>(args?: Prisma.SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProvinceDeleteArgs>(args: Prisma.SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProvinceUpdateArgs>(args: Prisma.SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProvinceUpdateManyArgs>(args: Prisma.SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProvinceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProvinceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProvinceUpsertArgs>(args: Prisma.SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProvinceCountArgs>(args?: Prisma.Subset<T, ProvinceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProvinceCountAggregateOutputType> : number>;
    aggregate<T extends ProvinceAggregateArgs>(args: Prisma.Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>;
    groupBy<T extends ProvinceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProvinceGroupByArgs['orderBy'];
    } : {
        orderBy?: ProvinceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProvinceFieldRefs;
}
export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    districts<T extends Prisma.Province$districtsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Province$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zoneAreas<T extends Prisma.Province$zoneAreasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Province$zoneAreasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.Province$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Province$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderAddresses<T extends Prisma.Province$orderAddressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Province$orderAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProvinceFieldRefs {
    readonly id: Prisma.FieldRef<"Province", 'String'>;
    readonly name: Prisma.FieldRef<"Province", 'String'>;
    readonly departmentId: Prisma.FieldRef<"Province", 'String'>;
}
export type ProvinceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where?: Prisma.ProvinceWhereInput;
    orderBy?: Prisma.ProvinceOrderByWithRelationInput | Prisma.ProvinceOrderByWithRelationInput[];
    cursor?: Prisma.ProvinceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvinceScalarFieldEnum | Prisma.ProvinceScalarFieldEnum[];
};
export type ProvinceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where?: Prisma.ProvinceWhereInput;
    orderBy?: Prisma.ProvinceOrderByWithRelationInput | Prisma.ProvinceOrderByWithRelationInput[];
    cursor?: Prisma.ProvinceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvinceScalarFieldEnum | Prisma.ProvinceScalarFieldEnum[];
};
export type ProvinceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where?: Prisma.ProvinceWhereInput;
    orderBy?: Prisma.ProvinceOrderByWithRelationInput | Prisma.ProvinceOrderByWithRelationInput[];
    cursor?: Prisma.ProvinceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvinceScalarFieldEnum | Prisma.ProvinceScalarFieldEnum[];
};
export type ProvinceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProvinceCreateInput, Prisma.ProvinceUncheckedCreateInput>;
};
export type ProvinceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProvinceCreateManyInput | Prisma.ProvinceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProvinceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    data: Prisma.ProvinceCreateManyInput | Prisma.ProvinceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProvinceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProvinceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProvinceUpdateInput, Prisma.ProvinceUncheckedUpdateInput>;
    where: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProvinceUpdateManyMutationInput, Prisma.ProvinceUncheckedUpdateManyInput>;
    where?: Prisma.ProvinceWhereInput;
    limit?: number;
};
export type ProvinceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProvinceUpdateManyMutationInput, Prisma.ProvinceUncheckedUpdateManyInput>;
    where?: Prisma.ProvinceWhereInput;
    limit?: number;
    include?: Prisma.ProvinceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProvinceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where: Prisma.ProvinceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProvinceCreateInput, Prisma.ProvinceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProvinceUpdateInput, Prisma.ProvinceUncheckedUpdateInput>;
};
export type ProvinceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
    where: Prisma.ProvinceWhereUniqueInput;
};
export type ProvinceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvinceWhereInput;
    limit?: number;
};
export type Province$districtsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where?: Prisma.DistrictWhereInput;
    orderBy?: Prisma.DistrictOrderByWithRelationInput | Prisma.DistrictOrderByWithRelationInput[];
    cursor?: Prisma.DistrictWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DistrictScalarFieldEnum | Prisma.DistrictScalarFieldEnum[];
};
export type Province$zoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Province$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithRelationInput | Prisma.CustomerAddressOrderByWithRelationInput[];
    cursor?: Prisma.CustomerAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerAddressScalarFieldEnum | Prisma.CustomerAddressScalarFieldEnum[];
};
export type Province$orderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ProvinceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProvinceSelect<ExtArgs> | null;
    omit?: Prisma.ProvinceOmit<ExtArgs> | null;
    include?: Prisma.ProvinceInclude<ExtArgs> | null;
};
export {};
