import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ShippingZoneModel = runtime.Types.Result.DefaultSelection<Prisma.$ShippingZonePayload>;
export type AggregateShippingZone = {
    _count: ShippingZoneCountAggregateOutputType | null;
    _min: ShippingZoneMinAggregateOutputType | null;
    _max: ShippingZoneMaxAggregateOutputType | null;
};
export type ShippingZoneMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ShippingZoneMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type ShippingZoneCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    isActive: number;
    createdById: number;
    updatedById: number;
    deletedById: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type ShippingZoneMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ShippingZoneMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type ShippingZoneCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    createdById?: true;
    updatedById?: true;
    deletedById?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type ShippingZoneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneWhereInput;
    orderBy?: Prisma.ShippingZoneOrderByWithRelationInput | Prisma.ShippingZoneOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ShippingZoneCountAggregateInputType;
    _min?: ShippingZoneMinAggregateInputType;
    _max?: ShippingZoneMaxAggregateInputType;
};
export type GetShippingZoneAggregateType<T extends ShippingZoneAggregateArgs> = {
    [P in keyof T & keyof AggregateShippingZone]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShippingZone[P]> : Prisma.GetScalarType<T[P], AggregateShippingZone[P]>;
};
export type ShippingZoneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneWhereInput;
    orderBy?: Prisma.ShippingZoneOrderByWithAggregationInput | Prisma.ShippingZoneOrderByWithAggregationInput[];
    by: Prisma.ShippingZoneScalarFieldEnum[] | Prisma.ShippingZoneScalarFieldEnum;
    having?: Prisma.ShippingZoneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShippingZoneCountAggregateInputType | true;
    _min?: ShippingZoneMinAggregateInputType;
    _max?: ShippingZoneMaxAggregateInputType;
};
export type ShippingZoneGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    createdById: string | null;
    updatedById: string | null;
    deletedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: ShippingZoneCountAggregateOutputType | null;
    _min: ShippingZoneMinAggregateOutputType | null;
    _max: ShippingZoneMaxAggregateOutputType | null;
};
type GetShippingZoneGroupByPayload<T extends ShippingZoneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShippingZoneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShippingZoneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShippingZoneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShippingZoneGroupByOutputType[P]>;
}>>;
export type ShippingZoneWhereInput = {
    AND?: Prisma.ShippingZoneWhereInput | Prisma.ShippingZoneWhereInput[];
    OR?: Prisma.ShippingZoneWhereInput[];
    NOT?: Prisma.ShippingZoneWhereInput | Prisma.ShippingZoneWhereInput[];
    id?: Prisma.StringFilter<"ShippingZone"> | string;
    name?: Prisma.StringFilter<"ShippingZone"> | string;
    description?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    isActive?: Prisma.BoolFilter<"ShippingZone"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"ShippingZone"> | Date | string | null;
    areas?: Prisma.ShippingZoneAreaListRelationFilter;
    rates?: Prisma.ShippingRateListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type ShippingZoneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    areas?: Prisma.ShippingZoneAreaOrderByRelationAggregateInput;
    rates?: Prisma.ShippingRateOrderByRelationAggregateInput;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
    updatedBy?: Prisma.AdminUserOrderByWithRelationInput;
    deletedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type ShippingZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShippingZoneWhereInput | Prisma.ShippingZoneWhereInput[];
    OR?: Prisma.ShippingZoneWhereInput[];
    NOT?: Prisma.ShippingZoneWhereInput | Prisma.ShippingZoneWhereInput[];
    name?: Prisma.StringFilter<"ShippingZone"> | string;
    description?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    isActive?: Prisma.BoolFilter<"ShippingZone"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"ShippingZone"> | Date | string | null;
    areas?: Prisma.ShippingZoneAreaListRelationFilter;
    rates?: Prisma.ShippingRateListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    deletedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id">;
export type ShippingZoneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ShippingZoneCountOrderByAggregateInput;
    _max?: Prisma.ShippingZoneMaxOrderByAggregateInput;
    _min?: Prisma.ShippingZoneMinOrderByAggregateInput;
};
export type ShippingZoneScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShippingZoneScalarWhereWithAggregatesInput | Prisma.ShippingZoneScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShippingZoneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShippingZoneScalarWhereWithAggregatesInput | Prisma.ShippingZoneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShippingZone"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShippingZone"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ShippingZone"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShippingZone"> | boolean;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"ShippingZone"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"ShippingZone"> | string | null;
    deletedById?: Prisma.StringNullableWithAggregatesFilter<"ShippingZone"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShippingZone"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShippingZone"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShippingZone"> | Date | string | null;
};
export type ShippingZoneCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateCreateNestedManyWithoutZoneInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesDeletedInput;
};
export type ShippingZoneUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUpdateManyWithoutZoneNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesDeletedNestedInput;
};
export type ShippingZoneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ShippingZoneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShippingZoneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShippingZoneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ShippingZoneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ShippingZoneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    deletedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type ShippingZoneScalarRelationFilter = {
    is?: Prisma.ShippingZoneWhereInput;
    isNot?: Prisma.ShippingZoneWhereInput;
};
export type ShippingZoneListRelationFilter = {
    every?: Prisma.ShippingZoneWhereInput;
    some?: Prisma.ShippingZoneWhereInput;
    none?: Prisma.ShippingZoneWhereInput;
};
export type ShippingZoneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShippingZoneCreateNestedOneWithoutAreasInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutAreasInput, Prisma.ShippingZoneUncheckedCreateWithoutAreasInput>;
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutAreasInput;
    connect?: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneUpdateOneRequiredWithoutAreasNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutAreasInput, Prisma.ShippingZoneUncheckedCreateWithoutAreasInput>;
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutAreasInput;
    upsert?: Prisma.ShippingZoneUpsertWithoutAreasInput;
    connect?: Prisma.ShippingZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShippingZoneUpdateToOneWithWhereWithoutAreasInput, Prisma.ShippingZoneUpdateWithoutAreasInput>, Prisma.ShippingZoneUncheckedUpdateWithoutAreasInput>;
};
export type ShippingZoneCreateNestedOneWithoutRatesInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutRatesInput, Prisma.ShippingZoneUncheckedCreateWithoutRatesInput>;
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutRatesInput;
    connect?: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneUpdateOneRequiredWithoutRatesNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutRatesInput, Prisma.ShippingZoneUncheckedCreateWithoutRatesInput>;
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutRatesInput;
    upsert?: Prisma.ShippingZoneUpsertWithoutRatesInput;
    connect?: Prisma.ShippingZoneWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShippingZoneUpdateToOneWithWhereWithoutRatesInput, Prisma.ShippingZoneUpdateWithoutRatesInput>, Prisma.ShippingZoneUncheckedUpdateWithoutRatesInput>;
};
export type ShippingZoneCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingZoneCreateWithoutCreatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingZoneCreateWithoutUpdatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput> | Prisma.ShippingZoneCreateWithoutDeletedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput | Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyDeletedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingZoneCreateWithoutCreatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingZoneCreateWithoutUpdatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput> | Prisma.ShippingZoneCreateWithoutDeletedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput | Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyDeletedByInputEnvelope;
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
};
export type ShippingZoneUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingZoneCreateWithoutCreatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingZoneCreateWithoutUpdatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyUpdatedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutUpdatedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput> | Prisma.ShippingZoneCreateWithoutDeletedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput | Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyDeletedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutDeletedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput> | Prisma.ShippingZoneCreateWithoutCreatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput> | Prisma.ShippingZoneCreateWithoutUpdatedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput | Prisma.ShippingZoneCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyUpdatedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutUpdatedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput> | Prisma.ShippingZoneCreateWithoutDeletedByInput[] | Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput[];
    connectOrCreate?: Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput | Prisma.ShippingZoneCreateOrConnectWithoutDeletedByInput[];
    upsert?: Prisma.ShippingZoneUpsertWithWhereUniqueWithoutDeletedByInput | Prisma.ShippingZoneUpsertWithWhereUniqueWithoutDeletedByInput[];
    createMany?: Prisma.ShippingZoneCreateManyDeletedByInputEnvelope;
    set?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    disconnect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    delete?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    connect?: Prisma.ShippingZoneWhereUniqueInput | Prisma.ShippingZoneWhereUniqueInput[];
    update?: Prisma.ShippingZoneUpdateWithWhereUniqueWithoutDeletedByInput | Prisma.ShippingZoneUpdateWithWhereUniqueWithoutDeletedByInput[];
    updateMany?: Prisma.ShippingZoneUpdateManyWithWhereWithoutDeletedByInput | Prisma.ShippingZoneUpdateManyWithWhereWithoutDeletedByInput[];
    deleteMany?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
};
export type ShippingZoneCreateWithoutAreasInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    rates?: Prisma.ShippingRateCreateNestedManyWithoutZoneInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesDeletedInput;
};
export type ShippingZoneUncheckedCreateWithoutAreasInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    rates?: Prisma.ShippingRateUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneCreateOrConnectWithoutAreasInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutAreasInput, Prisma.ShippingZoneUncheckedCreateWithoutAreasInput>;
};
export type ShippingZoneUpsertWithoutAreasInput = {
    update: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutAreasInput, Prisma.ShippingZoneUncheckedUpdateWithoutAreasInput>;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutAreasInput, Prisma.ShippingZoneUncheckedCreateWithoutAreasInput>;
    where?: Prisma.ShippingZoneWhereInput;
};
export type ShippingZoneUpdateToOneWithWhereWithoutAreasInput = {
    where?: Prisma.ShippingZoneWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutAreasInput, Prisma.ShippingZoneUncheckedUpdateWithoutAreasInput>;
};
export type ShippingZoneUpdateWithoutAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rates?: Prisma.ShippingRateUpdateManyWithoutZoneNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesDeletedNestedInput;
};
export type ShippingZoneUncheckedUpdateWithoutAreasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rates?: Prisma.ShippingRateUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneCreateWithoutRatesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutZoneInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesDeletedInput;
};
export type ShippingZoneUncheckedCreateWithoutRatesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneCreateOrConnectWithoutRatesInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutRatesInput, Prisma.ShippingZoneUncheckedCreateWithoutRatesInput>;
};
export type ShippingZoneUpsertWithoutRatesInput = {
    update: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutRatesInput, Prisma.ShippingZoneUncheckedUpdateWithoutRatesInput>;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutRatesInput, Prisma.ShippingZoneUncheckedCreateWithoutRatesInput>;
    where?: Prisma.ShippingZoneWhereInput;
};
export type ShippingZoneUpdateToOneWithWhereWithoutRatesInput = {
    where?: Prisma.ShippingZoneWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutRatesInput, Prisma.ShippingZoneUncheckedUpdateWithoutRatesInput>;
};
export type ShippingZoneUpdateWithoutRatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUpdateManyWithoutZoneNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesDeletedNestedInput;
};
export type ShippingZoneUncheckedUpdateWithoutRatesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateCreateNestedManyWithoutZoneInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesUpdatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesDeletedInput;
};
export type ShippingZoneUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput>;
};
export type ShippingZoneCreateManyCreatedByInputEnvelope = {
    data: Prisma.ShippingZoneCreateManyCreatedByInput | Prisma.ShippingZoneCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateCreateNestedManyWithoutZoneInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesCreatedInput;
    deletedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesDeletedInput;
};
export type ShippingZoneUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput>;
};
export type ShippingZoneCreateManyUpdatedByInputEnvelope = {
    data: Prisma.ShippingZoneCreateManyUpdatedByInput | Prisma.ShippingZoneCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneCreateWithoutDeletedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateCreateNestedManyWithoutZoneInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutShippingZonesUpdatedInput;
};
export type ShippingZoneUncheckedCreateWithoutDeletedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedCreateNestedManyWithoutZoneInput;
    rates?: Prisma.ShippingRateUncheckedCreateNestedManyWithoutZoneInput;
};
export type ShippingZoneCreateOrConnectWithoutDeletedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput>;
};
export type ShippingZoneCreateManyDeletedByInputEnvelope = {
    data: Prisma.ShippingZoneCreateManyDeletedByInput | Prisma.ShippingZoneCreateManyDeletedByInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutCreatedByInput>;
};
export type ShippingZoneUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutCreatedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutCreatedByInput>;
};
export type ShippingZoneUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ShippingZoneScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateManyMutationInput, Prisma.ShippingZoneUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ShippingZoneScalarWhereInput = {
    AND?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
    OR?: Prisma.ShippingZoneScalarWhereInput[];
    NOT?: Prisma.ShippingZoneScalarWhereInput | Prisma.ShippingZoneScalarWhereInput[];
    id?: Prisma.StringFilter<"ShippingZone"> | string;
    name?: Prisma.StringFilter<"ShippingZone"> | string;
    description?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    isActive?: Prisma.BoolFilter<"ShippingZone"> | boolean;
    createdById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    deletedById?: Prisma.StringNullableFilter<"ShippingZone"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShippingZone"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"ShippingZone"> | Date | string | null;
};
export type ShippingZoneUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedCreateWithoutUpdatedByInput>;
};
export type ShippingZoneUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutUpdatedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutUpdatedByInput>;
};
export type ShippingZoneUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.ShippingZoneScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateManyMutationInput, Prisma.ShippingZoneUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type ShippingZoneUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutDeletedByInput>;
    create: Prisma.XOR<Prisma.ShippingZoneCreateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedCreateWithoutDeletedByInput>;
};
export type ShippingZoneUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: Prisma.ShippingZoneWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateWithoutDeletedByInput, Prisma.ShippingZoneUncheckedUpdateWithoutDeletedByInput>;
};
export type ShippingZoneUpdateManyWithWhereWithoutDeletedByInput = {
    where: Prisma.ShippingZoneScalarWhereInput;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateManyMutationInput, Prisma.ShippingZoneUncheckedUpdateManyWithoutDeletedByInput>;
};
export type ShippingZoneCreateManyCreatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    updatedById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ShippingZoneCreateManyUpdatedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    deletedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ShippingZoneCreateManyDeletedByInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type ShippingZoneUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUpdateManyWithoutZoneNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesUpdatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesDeletedNestedInput;
};
export type ShippingZoneUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShippingZoneUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUpdateManyWithoutZoneNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesCreatedNestedInput;
    deletedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesDeletedNestedInput;
};
export type ShippingZoneUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShippingZoneUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUpdateManyWithoutZoneNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutShippingZonesUpdatedNestedInput;
};
export type ShippingZoneUncheckedUpdateWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    areas?: Prisma.ShippingZoneAreaUncheckedUpdateManyWithoutZoneNestedInput;
    rates?: Prisma.ShippingRateUncheckedUpdateManyWithoutZoneNestedInput;
};
export type ShippingZoneUncheckedUpdateManyWithoutDeletedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShippingZoneCountOutputType = {
    areas: number;
    rates: number;
};
export type ShippingZoneCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    areas?: boolean | ShippingZoneCountOutputTypeCountAreasArgs;
    rates?: boolean | ShippingZoneCountOutputTypeCountRatesArgs;
};
export type ShippingZoneCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneCountOutputTypeSelect<ExtArgs> | null;
};
export type ShippingZoneCountOutputTypeCountAreasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneAreaWhereInput;
};
export type ShippingZoneCountOutputTypeCountRatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingRateWhereInput;
};
export type ShippingZoneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    areas?: boolean | Prisma.ShippingZone$areasArgs<ExtArgs>;
    rates?: boolean | Prisma.ShippingZone$ratesArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
    _count?: boolean | Prisma.ShippingZoneCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZone"]>;
export type ShippingZoneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZone"]>;
export type ShippingZoneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
}, ExtArgs["result"]["shippingZone"]>;
export type ShippingZoneSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    deletedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type ShippingZoneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdById" | "updatedById" | "deletedById" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["shippingZone"]>;
export type ShippingZoneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    areas?: boolean | Prisma.ShippingZone$areasArgs<ExtArgs>;
    rates?: boolean | Prisma.ShippingZone$ratesArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
    _count?: boolean | Prisma.ShippingZoneCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShippingZoneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
};
export type ShippingZoneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.ShippingZone$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.ShippingZone$updatedByArgs<ExtArgs>;
    deletedBy?: boolean | Prisma.ShippingZone$deletedByArgs<ExtArgs>;
};
export type $ShippingZonePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShippingZone";
    objects: {
        areas: Prisma.$ShippingZoneAreaPayload<ExtArgs>[];
        rates: Prisma.$ShippingRatePayload<ExtArgs>[];
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        updatedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        deletedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["shippingZone"]>;
    composites: {};
};
export type ShippingZoneGetPayload<S extends boolean | null | undefined | ShippingZoneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload, S>;
export type ShippingZoneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShippingZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShippingZoneCountAggregateInputType | true;
};
export interface ShippingZoneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShippingZone'];
        meta: {
            name: 'ShippingZone';
        };
    };
    findUnique<T extends ShippingZoneFindUniqueArgs>(args: Prisma.SelectSubset<T, ShippingZoneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ShippingZoneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShippingZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ShippingZoneFindFirstArgs>(args?: Prisma.SelectSubset<T, ShippingZoneFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ShippingZoneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShippingZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ShippingZoneFindManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ShippingZoneCreateArgs>(args: Prisma.SelectSubset<T, ShippingZoneCreateArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ShippingZoneCreateManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ShippingZoneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShippingZoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ShippingZoneDeleteArgs>(args: Prisma.SelectSubset<T, ShippingZoneDeleteArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ShippingZoneUpdateArgs>(args: Prisma.SelectSubset<T, ShippingZoneUpdateArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ShippingZoneDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShippingZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ShippingZoneUpdateManyArgs>(args: Prisma.SelectSubset<T, ShippingZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ShippingZoneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShippingZoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ShippingZoneUpsertArgs>(args: Prisma.SelectSubset<T, ShippingZoneUpsertArgs<ExtArgs>>): Prisma.Prisma__ShippingZoneClient<runtime.Types.Result.GetResult<Prisma.$ShippingZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ShippingZoneCountArgs>(args?: Prisma.Subset<T, ShippingZoneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShippingZoneCountAggregateOutputType> : number>;
    aggregate<T extends ShippingZoneAggregateArgs>(args: Prisma.Subset<T, ShippingZoneAggregateArgs>): Prisma.PrismaPromise<GetShippingZoneAggregateType<T>>;
    groupBy<T extends ShippingZoneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShippingZoneGroupByArgs['orderBy'];
    } : {
        orderBy?: ShippingZoneGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShippingZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ShippingZoneFieldRefs;
}
export interface Prisma__ShippingZoneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    areas<T extends Prisma.ShippingZone$areasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZone$areasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingZoneAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rates<T extends Prisma.ShippingZone$ratesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZone$ratesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShippingRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.ShippingZone$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZone$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.ShippingZone$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZone$updatedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    deletedBy<T extends Prisma.ShippingZone$deletedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShippingZone$deletedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ShippingZoneFieldRefs {
    readonly id: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly name: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly description: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly isActive: Prisma.FieldRef<"ShippingZone", 'Boolean'>;
    readonly createdById: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly updatedById: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly deletedById: Prisma.FieldRef<"ShippingZone", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShippingZone", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShippingZone", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"ShippingZone", 'DateTime'>;
}
export type ShippingZoneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneWhereInput;
    orderBy?: Prisma.ShippingZoneOrderByWithRelationInput | Prisma.ShippingZoneOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneScalarFieldEnum | Prisma.ShippingZoneScalarFieldEnum[];
};
export type ShippingZoneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneWhereInput;
    orderBy?: Prisma.ShippingZoneOrderByWithRelationInput | Prisma.ShippingZoneOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneScalarFieldEnum | Prisma.ShippingZoneScalarFieldEnum[];
};
export type ShippingZoneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where?: Prisma.ShippingZoneWhereInput;
    orderBy?: Prisma.ShippingZoneOrderByWithRelationInput | Prisma.ShippingZoneOrderByWithRelationInput[];
    cursor?: Prisma.ShippingZoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShippingZoneScalarFieldEnum | Prisma.ShippingZoneScalarFieldEnum[];
};
export type ShippingZoneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneCreateInput, Prisma.ShippingZoneUncheckedCreateInput>;
};
export type ShippingZoneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ShippingZoneCreateManyInput | Prisma.ShippingZoneCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ShippingZoneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    data: Prisma.ShippingZoneCreateManyInput | Prisma.ShippingZoneCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ShippingZoneIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ShippingZoneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateInput, Prisma.ShippingZoneUncheckedUpdateInput>;
    where: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ShippingZoneUpdateManyMutationInput, Prisma.ShippingZoneUncheckedUpdateManyInput>;
    where?: Prisma.ShippingZoneWhereInput;
    limit?: number;
};
export type ShippingZoneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ShippingZoneUpdateManyMutationInput, Prisma.ShippingZoneUncheckedUpdateManyInput>;
    where?: Prisma.ShippingZoneWhereInput;
    limit?: number;
    include?: Prisma.ShippingZoneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ShippingZoneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShippingZoneCreateInput, Prisma.ShippingZoneUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ShippingZoneUpdateInput, Prisma.ShippingZoneUncheckedUpdateInput>;
};
export type ShippingZoneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
    where: Prisma.ShippingZoneWhereUniqueInput;
};
export type ShippingZoneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShippingZoneWhereInput;
    limit?: number;
};
export type ShippingZone$areasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShippingZone$ratesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ShippingZone$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ShippingZone$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ShippingZone$deletedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type ShippingZoneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ShippingZoneSelect<ExtArgs> | null;
    omit?: Prisma.ShippingZoneOmit<ExtArgs> | null;
    include?: Prisma.ShippingZoneInclude<ExtArgs> | null;
};
export {};
