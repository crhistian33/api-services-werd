import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PaymentMethodModel = runtime.Types.Result.DefaultSelection<Prisma.$PaymentMethodPayload>;
export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null;
    _avg: PaymentMethodAvgAggregateOutputType | null;
    _sum: PaymentMethodSumAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
export type PaymentMethodAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type PaymentMethodSumAggregateOutputType = {
    sortOrder: number | null;
};
export type PaymentMethodMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    type: $Enums.PaymentMethodType | null;
    instructions: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentMethodMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    type: $Enums.PaymentMethodType | null;
    instructions: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PaymentMethodCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    type: number;
    config: number;
    instructions: number;
    isActive: number;
    sortOrder: number;
    createdById: number;
    updatedById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PaymentMethodAvgAggregateInputType = {
    sortOrder?: true;
};
export type PaymentMethodSumAggregateInputType = {
    sortOrder?: true;
};
export type PaymentMethodMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    type?: true;
    instructions?: true;
    isActive?: true;
    sortOrder?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentMethodMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    type?: true;
    instructions?: true;
    isActive?: true;
    sortOrder?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PaymentMethodCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    type?: true;
    config?: true;
    instructions?: true;
    isActive?: true;
    sortOrder?: true;
    createdById?: true;
    updatedById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PaymentMethodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentMethodCountAggregateInputType;
    _avg?: PaymentMethodAvgAggregateInputType;
    _sum?: PaymentMethodSumAggregateInputType;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
    [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]> : Prisma.GetScalarType<T[P], AggregatePaymentMethod[P]>;
};
export type PaymentMethodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithAggregationInput | Prisma.PaymentMethodOrderByWithAggregationInput[];
    by: Prisma.PaymentMethodScalarFieldEnum[] | Prisma.PaymentMethodScalarFieldEnum;
    having?: Prisma.PaymentMethodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentMethodCountAggregateInputType | true;
    _avg?: PaymentMethodAvgAggregateInputType;
    _sum?: PaymentMethodSumAggregateInputType;
    _min?: PaymentMethodMinAggregateInputType;
    _max?: PaymentMethodMaxAggregateInputType;
};
export type PaymentMethodGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config: runtime.JsonValue;
    instructions: string | null;
    isActive: boolean;
    sortOrder: number;
    createdById: string | null;
    updatedById: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PaymentMethodCountAggregateOutputType | null;
    _avg: PaymentMethodAvgAggregateOutputType | null;
    _sum: PaymentMethodSumAggregateOutputType | null;
    _min: PaymentMethodMinAggregateOutputType | null;
    _max: PaymentMethodMaxAggregateOutputType | null;
};
type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentMethodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>;
}>>;
export type PaymentMethodWhereInput = {
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    id?: Prisma.StringFilter<"PaymentMethod"> | string;
    code?: Prisma.StringFilter<"PaymentMethod"> | string;
    name?: Prisma.StringFilter<"PaymentMethod"> | string;
    type?: Prisma.EnumPaymentMethodTypeFilter<"PaymentMethod"> | $Enums.PaymentMethodType;
    config?: Prisma.JsonFilter<"PaymentMethod">;
    instructions?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    isActive?: Prisma.BoolFilter<"PaymentMethod"> | boolean;
    sortOrder?: Prisma.IntFilter<"PaymentMethod"> | number;
    createdById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    transactions?: Prisma.OrderPaymentTransactionListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type PaymentMethodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    instructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    transactions?: Prisma.OrderPaymentTransactionOrderByRelationAggregateInput;
    createdBy?: Prisma.AdminUserOrderByWithRelationInput;
    updatedBy?: Prisma.AdminUserOrderByWithRelationInput;
};
export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    OR?: Prisma.PaymentMethodWhereInput[];
    NOT?: Prisma.PaymentMethodWhereInput | Prisma.PaymentMethodWhereInput[];
    name?: Prisma.StringFilter<"PaymentMethod"> | string;
    type?: Prisma.EnumPaymentMethodTypeFilter<"PaymentMethod"> | $Enums.PaymentMethodType;
    config?: Prisma.JsonFilter<"PaymentMethod">;
    instructions?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    isActive?: Prisma.BoolFilter<"PaymentMethod"> | boolean;
    sortOrder?: Prisma.IntFilter<"PaymentMethod"> | number;
    createdById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    transactions?: Prisma.OrderPaymentTransactionListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
    updatedBy?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id" | "code">;
export type PaymentMethodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    instructions?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdById?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PaymentMethodCountOrderByAggregateInput;
    _avg?: Prisma.PaymentMethodAvgOrderByAggregateInput;
    _max?: Prisma.PaymentMethodMaxOrderByAggregateInput;
    _min?: Prisma.PaymentMethodMinOrderByAggregateInput;
    _sum?: Prisma.PaymentMethodSumOrderByAggregateInput;
};
export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    OR?: Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PaymentMethodScalarWhereWithAggregatesInput | Prisma.PaymentMethodScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    code?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PaymentMethod"> | string;
    type?: Prisma.EnumPaymentMethodTypeWithAggregatesFilter<"PaymentMethod"> | $Enums.PaymentMethodType;
    config?: Prisma.JsonWithAggregatesFilter<"PaymentMethod">;
    instructions?: Prisma.StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"PaymentMethod"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"PaymentMethod"> | number;
    createdById?: Prisma.StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"PaymentMethod"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PaymentMethod"> | Date | string;
};
export type PaymentMethodCreateInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionCreateNestedManyWithoutPaymentMethodInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsUpdatedInput;
};
export type PaymentMethodUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUpdateManyWithoutPaymentMethodNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsUpdatedNestedInput;
};
export type PaymentMethodUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodScalarRelationFilter = {
    is?: Prisma.PaymentMethodWhereInput;
    isNot?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    config?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PaymentMethodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PaymentMethodSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type PaymentMethodListRelationFilter = {
    every?: Prisma.PaymentMethodWhereInput;
    some?: Prisma.PaymentMethodWhereInput;
    none?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentMethodCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.PaymentMethodUpsertWithoutOrdersInput;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentMethodUpdateToOneWithWhereWithoutOrdersInput, Prisma.PaymentMethodUpdateWithoutOrdersInput>, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
};
export type EnumPaymentMethodTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethodType;
};
export type PaymentMethodCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.PaymentMethodUpsertWithoutTransactionsInput;
    connect?: Prisma.PaymentMethodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PaymentMethodUpdateToOneWithWhereWithoutTransactionsInput, Prisma.PaymentMethodUpdateWithoutTransactionsInput>, Prisma.PaymentMethodUncheckedUpdateWithoutTransactionsInput>;
};
export type PaymentMethodCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentMethodCreateWithoutCreatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput> | Prisma.PaymentMethodCreateWithoutUpdatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentMethodCreateWithoutCreatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput> | Prisma.PaymentMethodCreateWithoutUpdatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
};
export type PaymentMethodUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentMethodCreateWithoutCreatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyCreatedByInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutCreatedByInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput> | Prisma.PaymentMethodCreateWithoutUpdatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyUpdatedByInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutUpdatedByInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput> | Prisma.PaymentMethodCreateWithoutCreatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyCreatedByInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutCreatedByInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput> | Prisma.PaymentMethodCreateWithoutUpdatedByInput[] | Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput | Prisma.PaymentMethodCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.PaymentMethodUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.PaymentMethodUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.PaymentMethodCreateManyUpdatedByInputEnvelope;
    set?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    disconnect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    delete?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    connect?: Prisma.PaymentMethodWhereUniqueInput | Prisma.PaymentMethodWhereUniqueInput[];
    update?: Prisma.PaymentMethodUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.PaymentMethodUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.PaymentMethodUpdateManyWithWhereWithoutUpdatedByInput | Prisma.PaymentMethodUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
};
export type PaymentMethodCreateWithoutOrdersInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.OrderPaymentTransactionCreateNestedManyWithoutPaymentMethodInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsUpdatedInput;
};
export type PaymentMethodUncheckedCreateWithoutOrdersInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.OrderPaymentTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodCreateOrConnectWithoutOrdersInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
};
export type PaymentMethodUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutOrdersInput, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutOrdersInput, Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.PaymentMethodWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutOrdersInput, Prisma.PaymentMethodUncheckedUpdateWithoutOrdersInput>;
};
export type PaymentMethodUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.OrderPaymentTransactionUpdateManyWithoutPaymentMethodNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsUpdatedNestedInput;
};
export type PaymentMethodUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.OrderPaymentTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodCreateWithoutTransactionsInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPaymentMethodInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsCreatedInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsUpdatedInput;
};
export type PaymentMethodUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedCreateWithoutTransactionsInput>;
};
export type PaymentMethodUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.PaymentMethodWhereInput;
};
export type PaymentMethodUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.PaymentMethodWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutTransactionsInput, Prisma.PaymentMethodUncheckedUpdateWithoutTransactionsInput>;
};
export type PaymentMethodUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsCreatedNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsUpdatedNestedInput;
};
export type PaymentMethodUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodCreateWithoutCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionCreateNestedManyWithoutPaymentMethodInput;
    updatedBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsUpdatedInput;
};
export type PaymentMethodUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput>;
};
export type PaymentMethodCreateManyCreatedByInputEnvelope = {
    data: Prisma.PaymentMethodCreateManyCreatedByInput | Prisma.PaymentMethodCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentMethodCreateWithoutUpdatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionCreateNestedManyWithoutPaymentMethodInput;
    createdBy?: Prisma.AdminUserCreateNestedOneWithoutPaymentMethodsCreatedInput;
};
export type PaymentMethodUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedCreateNestedManyWithoutPaymentMethodInput;
};
export type PaymentMethodCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput>;
};
export type PaymentMethodCreateManyUpdatedByInputEnvelope = {
    data: Prisma.PaymentMethodCreateManyUpdatedByInput | Prisma.PaymentMethodCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type PaymentMethodUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutCreatedByInput>;
};
export type PaymentMethodUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutCreatedByInput, Prisma.PaymentMethodUncheckedUpdateWithoutCreatedByInput>;
};
export type PaymentMethodUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PaymentMethodScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PaymentMethodScalarWhereInput = {
    AND?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
    OR?: Prisma.PaymentMethodScalarWhereInput[];
    NOT?: Prisma.PaymentMethodScalarWhereInput | Prisma.PaymentMethodScalarWhereInput[];
    id?: Prisma.StringFilter<"PaymentMethod"> | string;
    code?: Prisma.StringFilter<"PaymentMethod"> | string;
    name?: Prisma.StringFilter<"PaymentMethod"> | string;
    type?: Prisma.EnumPaymentMethodTypeFilter<"PaymentMethod"> | $Enums.PaymentMethodType;
    config?: Prisma.JsonFilter<"PaymentMethod">;
    instructions?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    isActive?: Prisma.BoolFilter<"PaymentMethod"> | boolean;
    sortOrder?: Prisma.IntFilter<"PaymentMethod"> | number;
    createdById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    updatedById?: Prisma.StringNullableFilter<"PaymentMethod"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PaymentMethod"> | Date | string;
};
export type PaymentMethodUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.PaymentMethodCreateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedCreateWithoutUpdatedByInput>;
};
export type PaymentMethodUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.PaymentMethodWhereUniqueInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateWithoutUpdatedByInput, Prisma.PaymentMethodUncheckedUpdateWithoutUpdatedByInput>;
};
export type PaymentMethodUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.PaymentMethodScalarWhereInput;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type PaymentMethodCreateManyCreatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    updatedById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodCreateManyUpdatedByInput = {
    id?: string;
    code: string;
    name: string;
    type: $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdById?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PaymentMethodUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUpdateManyWithoutPaymentMethodNestedInput;
    updatedBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsUpdatedNestedInput;
};
export type PaymentMethodUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUpdateManyWithoutPaymentMethodNestedInput;
    createdBy?: Prisma.AdminUserUpdateOneWithoutPaymentMethodsCreatedNestedInput;
};
export type PaymentMethodUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutPaymentMethodNestedInput;
    transactions?: Prisma.OrderPaymentTransactionUncheckedUpdateManyWithoutPaymentMethodNestedInput;
};
export type PaymentMethodUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput | $Enums.PaymentMethodType;
    config?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    instructions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentMethodCountOutputType = {
    orders: number;
    transactions: number;
};
export type PaymentMethodCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | PaymentMethodCountOutputTypeCountOrdersArgs;
    transactions?: boolean | PaymentMethodCountOutputTypeCountTransactionsArgs;
};
export type PaymentMethodCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodCountOutputTypeSelect<ExtArgs> | null;
};
export type PaymentMethodCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type PaymentMethodCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderPaymentTransactionWhereInput;
};
export type PaymentMethodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    type?: boolean;
    config?: boolean;
    instructions?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.PaymentMethod$ordersArgs<ExtArgs>;
    transactions?: boolean | Prisma.PaymentMethod$transactionsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    type?: boolean;
    config?: boolean;
    instructions?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    type?: boolean;
    config?: boolean;
    instructions?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    type?: boolean;
    config?: boolean;
    instructions?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PaymentMethodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "type" | "config" | "instructions" | "isActive" | "sortOrder" | "createdById" | "updatedById" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentMethod"]>;
export type PaymentMethodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.PaymentMethod$ordersArgs<ExtArgs>;
    transactions?: boolean | Prisma.PaymentMethod$transactionsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
    _count?: boolean | Prisma.PaymentMethodCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
};
export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.PaymentMethod$createdByArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.PaymentMethod$updatedByArgs<ExtArgs>;
};
export type $PaymentMethodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PaymentMethod";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        transactions: Prisma.$OrderPaymentTransactionPayload<ExtArgs>[];
        createdBy: Prisma.$AdminUserPayload<ExtArgs> | null;
        updatedBy: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        type: $Enums.PaymentMethodType;
        config: runtime.JsonValue;
        instructions: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["paymentMethod"]>;
    composites: {};
};
export type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload, S>;
export type PaymentMethodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentMethodCountAggregateInputType | true;
};
export interface PaymentMethodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'];
        meta: {
            name: 'PaymentMethod';
        };
    };
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PaymentMethodFindManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PaymentMethodCreateArgs>(args: Prisma.SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PaymentMethodCreateManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PaymentMethodDeleteArgs>(args: Prisma.SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PaymentMethodUpdateArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: Prisma.SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PaymentMethodUpsertArgs>(args: Prisma.SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma.Prisma__PaymentMethodClient<runtime.Types.Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PaymentMethodCountArgs>(args?: Prisma.Subset<T, PaymentMethodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentMethodCountAggregateOutputType> : number>;
    aggregate<T extends PaymentMethodAggregateArgs>(args: Prisma.Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>;
    groupBy<T extends PaymentMethodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PaymentMethodGroupByArgs['orderBy'];
    } : {
        orderBy?: PaymentMethodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PaymentMethodFieldRefs;
}
export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.PaymentMethod$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethod$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.PaymentMethod$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethod$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPaymentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.PaymentMethod$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethod$createdByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.PaymentMethod$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PaymentMethod$updatedByArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PaymentMethodFieldRefs {
    readonly id: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly code: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly name: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly type: Prisma.FieldRef<"PaymentMethod", 'PaymentMethodType'>;
    readonly config: Prisma.FieldRef<"PaymentMethod", 'Json'>;
    readonly instructions: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly isActive: Prisma.FieldRef<"PaymentMethod", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"PaymentMethod", 'Int'>;
    readonly createdById: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly updatedById: Prisma.FieldRef<"PaymentMethod", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PaymentMethod", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PaymentMethod", 'DateTime'>;
}
export type PaymentMethodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where?: Prisma.PaymentMethodWhereInput;
    orderBy?: Prisma.PaymentMethodOrderByWithRelationInput | Prisma.PaymentMethodOrderByWithRelationInput[];
    cursor?: Prisma.PaymentMethodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentMethodScalarFieldEnum | Prisma.PaymentMethodScalarFieldEnum[];
};
export type PaymentMethodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
};
export type PaymentMethodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.PaymentMethodCreateManyInput | Prisma.PaymentMethodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PaymentMethodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PaymentMethodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PaymentMethodUpdateManyMutationInput, Prisma.PaymentMethodUncheckedUpdateManyInput>;
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
    include?: Prisma.PaymentMethodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PaymentMethodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
    create: Prisma.XOR<Prisma.PaymentMethodCreateInput, Prisma.PaymentMethodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PaymentMethodUpdateInput, Prisma.PaymentMethodUncheckedUpdateInput>;
};
export type PaymentMethodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
    where: Prisma.PaymentMethodWhereUniqueInput;
};
export type PaymentMethodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentMethodWhereInput;
    limit?: number;
};
export type PaymentMethod$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PaymentMethod$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentTransactionSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentTransactionOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentTransactionInclude<ExtArgs> | null;
    where?: Prisma.OrderPaymentTransactionWhereInput;
    orderBy?: Prisma.OrderPaymentTransactionOrderByWithRelationInput | Prisma.OrderPaymentTransactionOrderByWithRelationInput[];
    cursor?: Prisma.OrderPaymentTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderPaymentTransactionScalarFieldEnum | Prisma.OrderPaymentTransactionScalarFieldEnum[];
};
export type PaymentMethod$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type PaymentMethod$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type PaymentMethodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentMethodSelect<ExtArgs> | null;
    omit?: Prisma.PaymentMethodOmit<ExtArgs> | null;
    include?: Prisma.PaymentMethodInclude<ExtArgs> | null;
};
export {};
