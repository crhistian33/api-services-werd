import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DistrictModel = runtime.Types.Result.DefaultSelection<Prisma.$DistrictPayload>;
export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null;
    _min: DistrictMinAggregateOutputType | null;
    _max: DistrictMaxAggregateOutputType | null;
};
export type DistrictMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    provinceId: string | null;
};
export type DistrictMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    provinceId: string | null;
};
export type DistrictCountAggregateOutputType = {
    id: number;
    name: number;
    provinceId: number;
    _all: number;
};
export type DistrictMinAggregateInputType = {
    id?: true;
    name?: true;
    provinceId?: true;
};
export type DistrictMaxAggregateInputType = {
    id?: true;
    name?: true;
    provinceId?: true;
};
export type DistrictCountAggregateInputType = {
    id?: true;
    name?: true;
    provinceId?: true;
    _all?: true;
};
export type DistrictAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DistrictWhereInput;
    orderBy?: Prisma.DistrictOrderByWithRelationInput | Prisma.DistrictOrderByWithRelationInput[];
    cursor?: Prisma.DistrictWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DistrictCountAggregateInputType;
    _min?: DistrictMinAggregateInputType;
    _max?: DistrictMaxAggregateInputType;
};
export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
    [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDistrict[P]> : Prisma.GetScalarType<T[P], AggregateDistrict[P]>;
};
export type DistrictGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DistrictWhereInput;
    orderBy?: Prisma.DistrictOrderByWithAggregationInput | Prisma.DistrictOrderByWithAggregationInput[];
    by: Prisma.DistrictScalarFieldEnum[] | Prisma.DistrictScalarFieldEnum;
    having?: Prisma.DistrictScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DistrictCountAggregateInputType | true;
    _min?: DistrictMinAggregateInputType;
    _max?: DistrictMaxAggregateInputType;
};
export type DistrictGroupByOutputType = {
    id: string;
    name: string;
    provinceId: string;
    _count: DistrictCountAggregateOutputType | null;
    _min: DistrictMinAggregateOutputType | null;
    _max: DistrictMaxAggregateOutputType | null;
};
type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DistrictGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DistrictGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DistrictGroupByOutputType[P]>;
}>>;
export type DistrictWhereInput = {
    AND?: Prisma.DistrictWhereInput | Prisma.DistrictWhereInput[];
    OR?: Prisma.DistrictWhereInput[];
    NOT?: Prisma.DistrictWhereInput | Prisma.DistrictWhereInput[];
    id?: Prisma.StringFilter<"District"> | string;
    name?: Prisma.StringFilter<"District"> | string;
    provinceId?: Prisma.StringFilter<"District"> | string;
    province?: Prisma.XOR<Prisma.ProvinceScalarRelationFilter, Prisma.ProvinceWhereInput>;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
};
export type DistrictOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    province?: Prisma.ProvinceOrderByWithRelationInput;
    zoneAreas?: Prisma.ShippingZoneAreaOrderByRelationAggregateInput;
    addresses?: Prisma.CustomerAddressOrderByRelationAggregateInput;
    orderAddresses?: Prisma.OrderAddressOrderByRelationAggregateInput;
};
export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_provinceId?: Prisma.DistrictNameProvinceIdCompoundUniqueInput;
    AND?: Prisma.DistrictWhereInput | Prisma.DistrictWhereInput[];
    OR?: Prisma.DistrictWhereInput[];
    NOT?: Prisma.DistrictWhereInput | Prisma.DistrictWhereInput[];
    name?: Prisma.StringFilter<"District"> | string;
    provinceId?: Prisma.StringFilter<"District"> | string;
    province?: Prisma.XOR<Prisma.ProvinceScalarRelationFilter, Prisma.ProvinceWhereInput>;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
}, "id" | "name_provinceId">;
export type DistrictOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
    _count?: Prisma.DistrictCountOrderByAggregateInput;
    _max?: Prisma.DistrictMaxOrderByAggregateInput;
    _min?: Prisma.DistrictMinOrderByAggregateInput;
};
export type DistrictScalarWhereWithAggregatesInput = {
    AND?: Prisma.DistrictScalarWhereWithAggregatesInput | Prisma.DistrictScalarWhereWithAggregatesInput[];
    OR?: Prisma.DistrictScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DistrictScalarWhereWithAggregatesInput | Prisma.DistrictScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"District"> | string;
    name?: Prisma.StringWithAggregatesFilter<"District"> | string;
    provinceId?: Prisma.StringWithAggregatesFilter<"District"> | string;
};
export type DistrictCreateInput = {
    id: string;
    name: string;
    province: Prisma.ProvinceCreateNestedOneWithoutDistrictsInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDistrictInput;
};
export type DistrictUncheckedCreateInput = {
    id: string;
    name: string;
    provinceId: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDistrictInput;
};
export type DistrictUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutDistrictsNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDistrictNestedInput;
};
export type DistrictCreateManyInput = {
    id: string;
    name: string;
    provinceId: string;
};
export type DistrictUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DistrictUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DistrictScalarRelationFilter = {
    is?: Prisma.DistrictWhereInput;
    isNot?: Prisma.DistrictWhereInput;
};
export type DistrictListRelationFilter = {
    every?: Prisma.DistrictWhereInput;
    some?: Prisma.DistrictWhereInput;
    none?: Prisma.DistrictWhereInput;
};
export type DistrictOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DistrictNameProvinceIdCompoundUniqueInput = {
    name: string;
    provinceId: string;
};
export type DistrictCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
};
export type DistrictMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
};
export type DistrictMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinceId?: Prisma.SortOrder;
};
export type DistrictNullableScalarRelationFilter = {
    is?: Prisma.DistrictWhereInput | null;
    isNot?: Prisma.DistrictWhereInput | null;
};
export type DistrictCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutAddressesInput, Prisma.DistrictUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.DistrictWhereUniqueInput;
};
export type DistrictUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutAddressesInput, Prisma.DistrictUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.DistrictUpsertWithoutAddressesInput;
    connect?: Prisma.DistrictWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DistrictUpdateToOneWithWhereWithoutAddressesInput, Prisma.DistrictUpdateWithoutAddressesInput>, Prisma.DistrictUncheckedUpdateWithoutAddressesInput>;
};
export type DistrictCreateNestedOneWithoutOrderAddressesInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutOrderAddressesInput, Prisma.DistrictUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutOrderAddressesInput;
    connect?: Prisma.DistrictWhereUniqueInput;
};
export type DistrictUpdateOneRequiredWithoutOrderAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutOrderAddressesInput, Prisma.DistrictUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutOrderAddressesInput;
    upsert?: Prisma.DistrictUpsertWithoutOrderAddressesInput;
    connect?: Prisma.DistrictWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DistrictUpdateToOneWithWhereWithoutOrderAddressesInput, Prisma.DistrictUpdateWithoutOrderAddressesInput>, Prisma.DistrictUncheckedUpdateWithoutOrderAddressesInput>;
};
export type DistrictCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput> | Prisma.DistrictCreateWithoutProvinceInput[] | Prisma.DistrictUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutProvinceInput | Prisma.DistrictCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.DistrictCreateManyProvinceInputEnvelope;
    connect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
};
export type DistrictUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput> | Prisma.DistrictCreateWithoutProvinceInput[] | Prisma.DistrictUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutProvinceInput | Prisma.DistrictCreateOrConnectWithoutProvinceInput[];
    createMany?: Prisma.DistrictCreateManyProvinceInputEnvelope;
    connect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
};
export type DistrictUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput> | Prisma.DistrictCreateWithoutProvinceInput[] | Prisma.DistrictUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutProvinceInput | Prisma.DistrictCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.DistrictUpsertWithWhereUniqueWithoutProvinceInput | Prisma.DistrictUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.DistrictCreateManyProvinceInputEnvelope;
    set?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    disconnect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    delete?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    connect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    update?: Prisma.DistrictUpdateWithWhereUniqueWithoutProvinceInput | Prisma.DistrictUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.DistrictUpdateManyWithWhereWithoutProvinceInput | Prisma.DistrictUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.DistrictScalarWhereInput | Prisma.DistrictScalarWhereInput[];
};
export type DistrictUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput> | Prisma.DistrictCreateWithoutProvinceInput[] | Prisma.DistrictUncheckedCreateWithoutProvinceInput[];
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutProvinceInput | Prisma.DistrictCreateOrConnectWithoutProvinceInput[];
    upsert?: Prisma.DistrictUpsertWithWhereUniqueWithoutProvinceInput | Prisma.DistrictUpsertWithWhereUniqueWithoutProvinceInput[];
    createMany?: Prisma.DistrictCreateManyProvinceInputEnvelope;
    set?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    disconnect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    delete?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    connect?: Prisma.DistrictWhereUniqueInput | Prisma.DistrictWhereUniqueInput[];
    update?: Prisma.DistrictUpdateWithWhereUniqueWithoutProvinceInput | Prisma.DistrictUpdateWithWhereUniqueWithoutProvinceInput[];
    updateMany?: Prisma.DistrictUpdateManyWithWhereWithoutProvinceInput | Prisma.DistrictUpdateManyWithWhereWithoutProvinceInput[];
    deleteMany?: Prisma.DistrictScalarWhereInput | Prisma.DistrictScalarWhereInput[];
};
export type DistrictCreateNestedOneWithoutZoneAreasInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutZoneAreasInput, Prisma.DistrictUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutZoneAreasInput;
    connect?: Prisma.DistrictWhereUniqueInput;
};
export type DistrictUpdateOneWithoutZoneAreasNestedInput = {
    create?: Prisma.XOR<Prisma.DistrictCreateWithoutZoneAreasInput, Prisma.DistrictUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.DistrictCreateOrConnectWithoutZoneAreasInput;
    upsert?: Prisma.DistrictUpsertWithoutZoneAreasInput;
    disconnect?: Prisma.DistrictWhereInput | boolean;
    delete?: Prisma.DistrictWhereInput | boolean;
    connect?: Prisma.DistrictWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DistrictUpdateToOneWithWhereWithoutZoneAreasInput, Prisma.DistrictUpdateWithoutZoneAreasInput>, Prisma.DistrictUncheckedUpdateWithoutZoneAreasInput>;
};
export type DistrictCreateWithoutAddressesInput = {
    id: string;
    name: string;
    province: Prisma.ProvinceCreateNestedOneWithoutDistrictsInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDistrictInput;
};
export type DistrictUncheckedCreateWithoutAddressesInput = {
    id: string;
    name: string;
    provinceId: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDistrictInput;
};
export type DistrictCreateOrConnectWithoutAddressesInput = {
    where: Prisma.DistrictWhereUniqueInput;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutAddressesInput, Prisma.DistrictUncheckedCreateWithoutAddressesInput>;
};
export type DistrictUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.DistrictUpdateWithoutAddressesInput, Prisma.DistrictUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutAddressesInput, Prisma.DistrictUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.DistrictWhereInput;
};
export type DistrictUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.DistrictWhereInput;
    data: Prisma.XOR<Prisma.DistrictUpdateWithoutAddressesInput, Prisma.DistrictUncheckedUpdateWithoutAddressesInput>;
};
export type DistrictUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutDistrictsNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDistrictNestedInput;
};
export type DistrictCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    province: Prisma.ProvinceCreateNestedOneWithoutDistrictsInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDistrictInput;
};
export type DistrictUncheckedCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    provinceId: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDistrictInput;
};
export type DistrictCreateOrConnectWithoutOrderAddressesInput = {
    where: Prisma.DistrictWhereUniqueInput;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutOrderAddressesInput, Prisma.DistrictUncheckedCreateWithoutOrderAddressesInput>;
};
export type DistrictUpsertWithoutOrderAddressesInput = {
    update: Prisma.XOR<Prisma.DistrictUpdateWithoutOrderAddressesInput, Prisma.DistrictUncheckedUpdateWithoutOrderAddressesInput>;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutOrderAddressesInput, Prisma.DistrictUncheckedCreateWithoutOrderAddressesInput>;
    where?: Prisma.DistrictWhereInput;
};
export type DistrictUpdateToOneWithWhereWithoutOrderAddressesInput = {
    where?: Prisma.DistrictWhereInput;
    data: Prisma.XOR<Prisma.DistrictUpdateWithoutOrderAddressesInput, Prisma.DistrictUncheckedUpdateWithoutOrderAddressesInput>;
};
export type DistrictUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutDistrictsNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDistrictNestedInput;
};
export type DistrictCreateWithoutProvinceInput = {
    id: string;
    name: string;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDistrictInput;
};
export type DistrictUncheckedCreateWithoutProvinceInput = {
    id: string;
    name: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDistrictInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDistrictInput;
};
export type DistrictCreateOrConnectWithoutProvinceInput = {
    where: Prisma.DistrictWhereUniqueInput;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput>;
};
export type DistrictCreateManyProvinceInputEnvelope = {
    data: Prisma.DistrictCreateManyProvinceInput | Prisma.DistrictCreateManyProvinceInput[];
    skipDuplicates?: boolean;
};
export type DistrictUpsertWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.DistrictWhereUniqueInput;
    update: Prisma.XOR<Prisma.DistrictUpdateWithoutProvinceInput, Prisma.DistrictUncheckedUpdateWithoutProvinceInput>;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutProvinceInput, Prisma.DistrictUncheckedCreateWithoutProvinceInput>;
};
export type DistrictUpdateWithWhereUniqueWithoutProvinceInput = {
    where: Prisma.DistrictWhereUniqueInput;
    data: Prisma.XOR<Prisma.DistrictUpdateWithoutProvinceInput, Prisma.DistrictUncheckedUpdateWithoutProvinceInput>;
};
export type DistrictUpdateManyWithWhereWithoutProvinceInput = {
    where: Prisma.DistrictScalarWhereInput;
    data: Prisma.XOR<Prisma.DistrictUpdateManyMutationInput, Prisma.DistrictUncheckedUpdateManyWithoutProvinceInput>;
};
export type DistrictScalarWhereInput = {
    AND?: Prisma.DistrictScalarWhereInput | Prisma.DistrictScalarWhereInput[];
    OR?: Prisma.DistrictScalarWhereInput[];
    NOT?: Prisma.DistrictScalarWhereInput | Prisma.DistrictScalarWhereInput[];
    id?: Prisma.StringFilter<"District"> | string;
    name?: Prisma.StringFilter<"District"> | string;
    provinceId?: Prisma.StringFilter<"District"> | string;
};
export type DistrictCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    province: Prisma.ProvinceCreateNestedOneWithoutDistrictsInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDistrictInput;
};
export type DistrictUncheckedCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    provinceId: string;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDistrictInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDistrictInput;
};
export type DistrictCreateOrConnectWithoutZoneAreasInput = {
    where: Prisma.DistrictWhereUniqueInput;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutZoneAreasInput, Prisma.DistrictUncheckedCreateWithoutZoneAreasInput>;
};
export type DistrictUpsertWithoutZoneAreasInput = {
    update: Prisma.XOR<Prisma.DistrictUpdateWithoutZoneAreasInput, Prisma.DistrictUncheckedUpdateWithoutZoneAreasInput>;
    create: Prisma.XOR<Prisma.DistrictCreateWithoutZoneAreasInput, Prisma.DistrictUncheckedCreateWithoutZoneAreasInput>;
    where?: Prisma.DistrictWhereInput;
};
export type DistrictUpdateToOneWithWhereWithoutZoneAreasInput = {
    where?: Prisma.DistrictWhereInput;
    data: Prisma.XOR<Prisma.DistrictUpdateWithoutZoneAreasInput, Prisma.DistrictUncheckedUpdateWithoutZoneAreasInput>;
};
export type DistrictUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.ProvinceUpdateOneRequiredWithoutDistrictsNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinceId?: Prisma.StringFieldUpdateOperationsInput | string;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDistrictNestedInput;
};
export type DistrictCreateManyProvinceInput = {
    id: string;
    name: string;
};
export type DistrictUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDistrictNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDistrictNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDistrictNestedInput;
};
export type DistrictUncheckedUpdateManyWithoutProvinceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DistrictCountOutputType = {
    zoneAreas: number;
    addresses: number;
    orderAddresses: number;
};
export type DistrictCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    zoneAreas?: boolean | DistrictCountOutputTypeCountZoneAreasArgs;
    addresses?: boolean | DistrictCountOutputTypeCountAddressesArgs;
    orderAddresses?: boolean | DistrictCountOutputTypeCountOrderAddressesArgs;
};
export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictCountOutputTypeSelect<ExtArgs> | null;
};
export type DistrictCountOutputTypeCountZoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
};
export type DistrictCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
};
export type DistrictCountOutputTypeCountOrderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
};
export type DistrictSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    provinceId?: boolean;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.District$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.District$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.District$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DistrictCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["district"]>;
export type DistrictSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    provinceId?: boolean;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["district"]>;
export type DistrictSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    provinceId?: boolean;
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["district"]>;
export type DistrictSelectScalar = {
    id?: boolean;
    name?: boolean;
    provinceId?: boolean;
};
export type DistrictOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "provinceId", ExtArgs["result"]["district"]>;
export type DistrictInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.District$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.District$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.District$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DistrictCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DistrictIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
};
export type DistrictIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    province?: boolean | Prisma.ProvinceDefaultArgs<ExtArgs>;
};
export type $DistrictPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "District";
    objects: {
        province: Prisma.$ProvincePayload<ExtArgs>;
        zoneAreas: Prisma.$ShippingZoneAreaPayload<ExtArgs>[];
        addresses: Prisma.$CustomerAddressPayload<ExtArgs>[];
        orderAddresses: Prisma.$OrderAddressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        provinceId: string;
    }, ExtArgs["result"]["district"]>;
    composites: {};
};
export type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DistrictPayload, S>;
export type DistrictCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DistrictCountAggregateInputType | true;
};
export interface DistrictDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['District'];
        meta: {
            name: 'District';
        };
    };
    findUnique<T extends DistrictFindUniqueArgs>(args: Prisma.SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DistrictFindFirstArgs>(args?: Prisma.SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DistrictFindManyArgs>(args?: Prisma.SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DistrictCreateArgs>(args: Prisma.SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DistrictCreateManyArgs>(args?: Prisma.SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DistrictDeleteArgs>(args: Prisma.SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DistrictUpdateArgs>(args: Prisma.SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DistrictDeleteManyArgs>(args?: Prisma.SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DistrictUpdateManyArgs>(args: Prisma.SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DistrictUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DistrictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DistrictUpsertArgs>(args: Prisma.SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DistrictCountArgs>(args?: Prisma.Subset<T, DistrictCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DistrictCountAggregateOutputType> : number>;
    aggregate<T extends DistrictAggregateArgs>(args: Prisma.Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>;
    groupBy<T extends DistrictGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DistrictGroupByArgs['orderBy'];
    } : {
        orderBy?: DistrictGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DistrictFieldRefs;
}
export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    province<T extends Prisma.ProvinceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProvinceDefaultArgs<ExtArgs>>): Prisma.Prisma__ProvinceClient<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    zoneAreas<T extends Prisma.District$zoneAreasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.District$zoneAreasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.District$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.District$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderAddresses<T extends Prisma.District$orderAddressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.District$orderAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DistrictFieldRefs {
    readonly id: Prisma.FieldRef<"District", 'String'>;
    readonly name: Prisma.FieldRef<"District", 'String'>;
    readonly provinceId: Prisma.FieldRef<"District", 'String'>;
}
export type DistrictFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where: Prisma.DistrictWhereUniqueInput;
};
export type DistrictFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where: Prisma.DistrictWhereUniqueInput;
};
export type DistrictFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DistrictFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DistrictFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DistrictCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DistrictCreateInput, Prisma.DistrictUncheckedCreateInput>;
};
export type DistrictCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DistrictCreateManyInput | Prisma.DistrictCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DistrictCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    data: Prisma.DistrictCreateManyInput | Prisma.DistrictCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DistrictIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DistrictUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DistrictUpdateInput, Prisma.DistrictUncheckedUpdateInput>;
    where: Prisma.DistrictWhereUniqueInput;
};
export type DistrictUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DistrictUpdateManyMutationInput, Prisma.DistrictUncheckedUpdateManyInput>;
    where?: Prisma.DistrictWhereInput;
    limit?: number;
};
export type DistrictUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DistrictUpdateManyMutationInput, Prisma.DistrictUncheckedUpdateManyInput>;
    where?: Prisma.DistrictWhereInput;
    limit?: number;
    include?: Prisma.DistrictIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DistrictUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where: Prisma.DistrictWhereUniqueInput;
    create: Prisma.XOR<Prisma.DistrictCreateInput, Prisma.DistrictUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DistrictUpdateInput, Prisma.DistrictUncheckedUpdateInput>;
};
export type DistrictDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where: Prisma.DistrictWhereUniqueInput;
};
export type DistrictDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DistrictWhereInput;
    limit?: number;
};
export type District$zoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type District$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type District$orderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DistrictDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    include?: Prisma.DistrictInclude<ExtArgs> | null;
};
export {};
