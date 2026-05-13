import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DepartmentModel = runtime.Types.Result.DefaultSelection<Prisma.$DepartmentPayload>;
export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
export type DepartmentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
};
export type DepartmentCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type DepartmentMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type DepartmentMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type DepartmentCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type DepartmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DepartmentCountAggregateInputType;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDepartment[P]> : Prisma.GetScalarType<T[P], AggregateDepartment[P]>;
};
export type DepartmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithAggregationInput | Prisma.DepartmentOrderByWithAggregationInput[];
    by: Prisma.DepartmentScalarFieldEnum[] | Prisma.DepartmentScalarFieldEnum;
    having?: Prisma.DepartmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
};
export type DepartmentGroupByOutputType = {
    id: string;
    name: string;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
};
type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
}>>;
export type DepartmentWhereInput = {
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    id?: Prisma.StringFilter<"Department"> | string;
    name?: Prisma.StringFilter<"Department"> | string;
    provinces?: Prisma.ProvinceListRelationFilter;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
};
export type DepartmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    provinces?: Prisma.ProvinceOrderByRelationAggregateInput;
    zoneAreas?: Prisma.ShippingZoneAreaOrderByRelationAggregateInput;
    addresses?: Prisma.CustomerAddressOrderByRelationAggregateInput;
    orderAddresses?: Prisma.OrderAddressOrderByRelationAggregateInput;
};
export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    OR?: Prisma.DepartmentWhereInput[];
    NOT?: Prisma.DepartmentWhereInput | Prisma.DepartmentWhereInput[];
    provinces?: Prisma.ProvinceListRelationFilter;
    zoneAreas?: Prisma.ShippingZoneAreaListRelationFilter;
    addresses?: Prisma.CustomerAddressListRelationFilter;
    orderAddresses?: Prisma.OrderAddressListRelationFilter;
}, "id" | "name">;
export type DepartmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.DepartmentCountOrderByAggregateInput;
    _max?: Prisma.DepartmentMaxOrderByAggregateInput;
    _min?: Prisma.DepartmentMinOrderByAggregateInput;
};
export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DepartmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DepartmentScalarWhereWithAggregatesInput | Prisma.DepartmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Department"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Department"> | string;
};
export type DepartmentCreateInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceUncheckedCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateManyInput = {
    id: string;
    name: string;
};
export type DepartmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DepartmentScalarRelationFilter = {
    is?: Prisma.DepartmentWhereInput;
    isNot?: Prisma.DepartmentWhereInput;
};
export type DepartmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type DepartmentCreateNestedOneWithoutAddressesInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutAddressesInput, Prisma.DepartmentUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutAddressesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutAddressesInput, Prisma.DepartmentUncheckedCreateWithoutAddressesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutAddressesInput;
    upsert?: Prisma.DepartmentUpsertWithoutAddressesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutAddressesInput, Prisma.DepartmentUpdateWithoutAddressesInput>, Prisma.DepartmentUncheckedUpdateWithoutAddressesInput>;
};
export type DepartmentCreateNestedOneWithoutOrderAddressesInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrderAddressesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutOrderAddressesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedCreateWithoutOrderAddressesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutOrderAddressesInput;
    upsert?: Prisma.DepartmentUpsertWithoutOrderAddressesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutOrderAddressesInput, Prisma.DepartmentUpdateWithoutOrderAddressesInput>, Prisma.DepartmentUncheckedUpdateWithoutOrderAddressesInput>;
};
export type DepartmentCreateNestedOneWithoutProvincesInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutProvincesInput, Prisma.DepartmentUncheckedCreateWithoutProvincesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutProvincesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutProvincesNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutProvincesInput, Prisma.DepartmentUncheckedCreateWithoutProvincesInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutProvincesInput;
    upsert?: Prisma.DepartmentUpsertWithoutProvincesInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutProvincesInput, Prisma.DepartmentUpdateWithoutProvincesInput>, Prisma.DepartmentUncheckedUpdateWithoutProvincesInput>;
};
export type DepartmentCreateNestedOneWithoutZoneAreasInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutZoneAreasInput, Prisma.DepartmentUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutZoneAreasInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateOneRequiredWithoutZoneAreasNestedInput = {
    create?: Prisma.XOR<Prisma.DepartmentCreateWithoutZoneAreasInput, Prisma.DepartmentUncheckedCreateWithoutZoneAreasInput>;
    connectOrCreate?: Prisma.DepartmentCreateOrConnectWithoutZoneAreasInput;
    upsert?: Prisma.DepartmentUpsertWithoutZoneAreasInput;
    connect?: Prisma.DepartmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DepartmentUpdateToOneWithWhereWithoutZoneAreasInput, Prisma.DepartmentUpdateWithoutZoneAreasInput>, Prisma.DepartmentUncheckedUpdateWithoutZoneAreasInput>;
};
export type DepartmentCreateWithoutAddressesInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutAddressesInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceUncheckedCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutAddressesInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutAddressesInput, Prisma.DepartmentUncheckedCreateWithoutAddressesInput>;
};
export type DepartmentUpsertWithoutAddressesInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutAddressesInput, Prisma.DepartmentUncheckedUpdateWithoutAddressesInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutAddressesInput, Prisma.DepartmentUncheckedCreateWithoutAddressesInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutAddressesInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutAddressesInput, Prisma.DepartmentUncheckedUpdateWithoutAddressesInput>;
};
export type DepartmentUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutOrderAddressesInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceUncheckedCreateNestedManyWithoutDepartmentInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutOrderAddressesInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedCreateWithoutOrderAddressesInput>;
};
export type DepartmentUpsertWithoutOrderAddressesInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedUpdateWithoutOrderAddressesInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedCreateWithoutOrderAddressesInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutOrderAddressesInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutOrderAddressesInput, Prisma.DepartmentUncheckedUpdateWithoutOrderAddressesInput>;
};
export type DepartmentUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutOrderAddressesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutProvincesInput = {
    id: string;
    name: string;
    zoneAreas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutProvincesInput = {
    id: string;
    name: string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutProvincesInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutProvincesInput, Prisma.DepartmentUncheckedCreateWithoutProvincesInput>;
};
export type DepartmentUpsertWithoutProvincesInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutProvincesInput, Prisma.DepartmentUncheckedUpdateWithoutProvincesInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutProvincesInput, Prisma.DepartmentUncheckedCreateWithoutProvincesInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutProvincesInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutProvincesInput, Prisma.DepartmentUncheckedUpdateWithoutProvincesInput>;
};
export type DepartmentUpdateWithoutProvincesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutProvincesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    zoneAreas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentUncheckedCreateWithoutZoneAreasInput = {
    id: string;
    name: string;
    provinces?: Prisma.ProvinceUncheckedCreateNestedManyWithoutDepartmentInput;
    addresses?: Prisma.CustomerAddressUncheckedCreateNestedManyWithoutDepartmentInput;
    orderAddresses?: Prisma.OrderAddressUncheckedCreateNestedManyWithoutDepartmentInput;
};
export type DepartmentCreateOrConnectWithoutZoneAreasInput = {
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutZoneAreasInput, Prisma.DepartmentUncheckedCreateWithoutZoneAreasInput>;
};
export type DepartmentUpsertWithoutZoneAreasInput = {
    update: Prisma.XOR<Prisma.DepartmentUpdateWithoutZoneAreasInput, Prisma.DepartmentUncheckedUpdateWithoutZoneAreasInput>;
    create: Prisma.XOR<Prisma.DepartmentCreateWithoutZoneAreasInput, Prisma.DepartmentUncheckedCreateWithoutZoneAreasInput>;
    where?: Prisma.DepartmentWhereInput;
};
export type DepartmentUpdateToOneWithWhereWithoutZoneAreasInput = {
    where?: Prisma.DepartmentWhereInput;
    data: Prisma.XOR<Prisma.DepartmentUpdateWithoutZoneAreasInput, Prisma.DepartmentUncheckedUpdateWithoutZoneAreasInput>;
};
export type DepartmentUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentUncheckedUpdateWithoutZoneAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    provinces?: Prisma.ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput;
    addresses?: Prisma.CustomerAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
    orderAddresses?: Prisma.OrderAddressUncheckedUpdateManyWithoutDepartmentNestedInput;
};
export type DepartmentCountOutputType = {
    provinces: number;
    zoneAreas: number;
    addresses: number;
    orderAddresses: number;
};
export type DepartmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provinces?: boolean | DepartmentCountOutputTypeCountProvincesArgs;
    zoneAreas?: boolean | DepartmentCountOutputTypeCountZoneAreasArgs;
    addresses?: boolean | DepartmentCountOutputTypeCountAddressesArgs;
    orderAddresses?: boolean | DepartmentCountOutputTypeCountOrderAddressesArgs;
};
export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentCountOutputTypeSelect<ExtArgs> | null;
};
export type DepartmentCountOutputTypeCountProvincesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProvinceWhereInput;
};
export type DepartmentCountOutputTypeCountZoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
};
export type DepartmentCountOutputTypeCountAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
};
export type DepartmentCountOutputTypeCountOrderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderAddressWhereInput;
};
export type DepartmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    provinces?: boolean | Prisma.Department$provincesArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.Department$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.Department$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.Department$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["department"]>;
export type DepartmentSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type DepartmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>;
export type DepartmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    provinces?: boolean | Prisma.Department$provincesArgs<ExtArgs>;
    zoneAreas?: boolean | Prisma.Department$zoneAreasArgs<ExtArgs>;
    addresses?: boolean | Prisma.Department$addressesArgs<ExtArgs>;
    orderAddresses?: boolean | Prisma.Department$orderAddressesArgs<ExtArgs>;
    _count?: boolean | Prisma.DepartmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DepartmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Department";
    objects: {
        provinces: Prisma.$ProvincePayload<ExtArgs>[];
        zoneAreas: Prisma.$ShippingZoneAreaPayload<ExtArgs>[];
        addresses: Prisma.$CustomerAddressPayload<ExtArgs>[];
        orderAddresses: Prisma.$OrderAddressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
    }, ExtArgs["result"]["department"]>;
    composites: {};
};
export type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DepartmentPayload, S>;
export type DepartmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DepartmentCountAggregateInputType | true;
};
export interface DepartmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Department'];
        meta: {
            name: 'Department';
        };
    };
    findUnique<T extends DepartmentFindUniqueArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DepartmentFindFirstArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DepartmentFindManyArgs>(args?: Prisma.SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DepartmentCreateArgs>(args: Prisma.SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DepartmentCreateManyArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DepartmentDeleteArgs>(args: Prisma.SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DepartmentUpdateArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DepartmentUpdateManyArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DepartmentUpsertArgs>(args: Prisma.SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DepartmentCountArgs>(args?: Prisma.Subset<T, DepartmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DepartmentCountAggregateOutputType> : number>;
    aggregate<T extends DepartmentAggregateArgs>(args: Prisma.Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;
    groupBy<T extends DepartmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DepartmentGroupByArgs['orderBy'];
    } : {
        orderBy?: DepartmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DepartmentFieldRefs;
}
export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    provinces<T extends Prisma.Department$provincesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$provincesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zoneAreas<T extends Prisma.Department$zoneAreasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$zoneAreasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addresses<T extends Prisma.Department$addressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderAddresses<T extends Prisma.Department$orderAddressesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Department$orderAddressesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DepartmentFieldRefs {
    readonly id: Prisma.FieldRef<"Department", 'String'>;
    readonly name: Prisma.FieldRef<"Department", 'String'>;
}
export type DepartmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput | Prisma.DepartmentOrderByWithRelationInput[];
    cursor?: Prisma.DepartmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DepartmentScalarFieldEnum | Prisma.DepartmentScalarFieldEnum[];
};
export type DepartmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
};
export type DepartmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.DepartmentCreateManyInput | Prisma.DepartmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DepartmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DepartmentUpdateManyMutationInput, Prisma.DepartmentUncheckedUpdateManyInput>;
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type DepartmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DepartmentCreateInput, Prisma.DepartmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DepartmentUpdateInput, Prisma.DepartmentUncheckedUpdateInput>;
};
export type DepartmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where: Prisma.DepartmentWhereUniqueInput;
};
export type DepartmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DepartmentWhereInput;
    limit?: number;
};
export type Department$provincesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$zoneAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$addressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Department$orderAddressesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DepartmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
};
export {};
