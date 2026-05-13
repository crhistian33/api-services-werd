import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerRefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerRefreshTokenPayload>;
export type AggregateCustomerRefreshToken = {
    _count: CustomerRefreshTokenCountAggregateOutputType | null;
    _min: CustomerRefreshTokenMinAggregateOutputType | null;
    _max: CustomerRefreshTokenMaxAggregateOutputType | null;
};
export type CustomerRefreshTokenMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type CustomerRefreshTokenMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type CustomerRefreshTokenCountAggregateOutputType = {
    id: number;
    customerId: number;
    tokenHash: number;
    expiresAt: number;
    revokedAt: number;
    createdAt: number;
    _all: number;
};
export type CustomerRefreshTokenMinAggregateInputType = {
    id?: true;
    customerId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type CustomerRefreshTokenMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type CustomerRefreshTokenCountAggregateInputType = {
    id?: true;
    customerId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerRefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerRefreshTokenWhereInput;
    orderBy?: Prisma.CustomerRefreshTokenOrderByWithRelationInput | Prisma.CustomerRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.CustomerRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerRefreshTokenCountAggregateInputType;
    _min?: CustomerRefreshTokenMinAggregateInputType;
    _max?: CustomerRefreshTokenMaxAggregateInputType;
};
export type GetCustomerRefreshTokenAggregateType<T extends CustomerRefreshTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerRefreshToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerRefreshToken[P]> : Prisma.GetScalarType<T[P], AggregateCustomerRefreshToken[P]>;
};
export type CustomerRefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerRefreshTokenWhereInput;
    orderBy?: Prisma.CustomerRefreshTokenOrderByWithAggregationInput | Prisma.CustomerRefreshTokenOrderByWithAggregationInput[];
    by: Prisma.CustomerRefreshTokenScalarFieldEnum[] | Prisma.CustomerRefreshTokenScalarFieldEnum;
    having?: Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerRefreshTokenCountAggregateInputType | true;
    _min?: CustomerRefreshTokenMinAggregateInputType;
    _max?: CustomerRefreshTokenMaxAggregateInputType;
};
export type CustomerRefreshTokenGroupByOutputType = {
    id: string;
    customerId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    _count: CustomerRefreshTokenCountAggregateOutputType | null;
    _min: CustomerRefreshTokenMinAggregateOutputType | null;
    _max: CustomerRefreshTokenMaxAggregateOutputType | null;
};
type GetCustomerRefreshTokenGroupByPayload<T extends CustomerRefreshTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerRefreshTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerRefreshTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerRefreshTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerRefreshTokenGroupByOutputType[P]>;
}>>;
export type CustomerRefreshTokenWhereInput = {
    AND?: Prisma.CustomerRefreshTokenWhereInput | Prisma.CustomerRefreshTokenWhereInput[];
    OR?: Prisma.CustomerRefreshTokenWhereInput[];
    NOT?: Prisma.CustomerRefreshTokenWhereInput | Prisma.CustomerRefreshTokenWhereInput[];
    id?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    customerId?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"CustomerRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type CustomerRefreshTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CustomerRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.CustomerRefreshTokenWhereInput | Prisma.CustomerRefreshTokenWhereInput[];
    OR?: Prisma.CustomerRefreshTokenWhereInput[];
    NOT?: Prisma.CustomerRefreshTokenWhereInput | Prisma.CustomerRefreshTokenWhereInput[];
    customerId?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"CustomerRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "tokenHash">;
export type CustomerRefreshTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerRefreshTokenCountOrderByAggregateInput;
    _max?: Prisma.CustomerRefreshTokenMaxOrderByAggregateInput;
    _min?: Prisma.CustomerRefreshTokenMinOrderByAggregateInput;
};
export type CustomerRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput | Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput | Prisma.CustomerRefreshTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustomerRefreshToken"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"CustomerRefreshToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"CustomerRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CustomerRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerRefreshToken"> | Date | string;
};
export type CustomerRefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCustomerRefreshTokensInput;
};
export type CustomerRefreshTokenUncheckedCreateInput = {
    id?: string;
    customerId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerRefreshTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCustomerRefreshTokensNestedInput;
};
export type CustomerRefreshTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenCreateManyInput = {
    id?: string;
    customerId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerRefreshTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenListRelationFilter = {
    every?: Prisma.CustomerRefreshTokenWhereInput;
    some?: Prisma.CustomerRefreshTokenWhereInput;
    none?: Prisma.CustomerRefreshTokenWhereInput;
};
export type CustomerRefreshTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerRefreshTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerRefreshTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerRefreshTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerRefreshTokenCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput> | Prisma.CustomerRefreshTokenCreateWithoutCustomerInput[] | Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput | Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerRefreshTokenCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
};
export type CustomerRefreshTokenUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput> | Prisma.CustomerRefreshTokenCreateWithoutCustomerInput[] | Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput | Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerRefreshTokenCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
};
export type CustomerRefreshTokenUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput> | Prisma.CustomerRefreshTokenCreateWithoutCustomerInput[] | Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput | Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerRefreshTokenUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerRefreshTokenUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerRefreshTokenCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    delete?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    connect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    update?: Prisma.CustomerRefreshTokenUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerRefreshTokenUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerRefreshTokenUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerRefreshTokenUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerRefreshTokenScalarWhereInput | Prisma.CustomerRefreshTokenScalarWhereInput[];
};
export type CustomerRefreshTokenUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput> | Prisma.CustomerRefreshTokenCreateWithoutCustomerInput[] | Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput | Prisma.CustomerRefreshTokenCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerRefreshTokenUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerRefreshTokenUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerRefreshTokenCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    delete?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    connect?: Prisma.CustomerRefreshTokenWhereUniqueInput | Prisma.CustomerRefreshTokenWhereUniqueInput[];
    update?: Prisma.CustomerRefreshTokenUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerRefreshTokenUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerRefreshTokenUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerRefreshTokenUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerRefreshTokenScalarWhereInput | Prisma.CustomerRefreshTokenScalarWhereInput[];
};
export type CustomerRefreshTokenCreateWithoutCustomerInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerRefreshTokenUncheckedCreateWithoutCustomerInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerRefreshTokenCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput>;
};
export type CustomerRefreshTokenCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerRefreshTokenCreateManyCustomerInput | Prisma.CustomerRefreshTokenCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerRefreshTokenUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerRefreshTokenCreateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedCreateWithoutCustomerInput>;
};
export type CustomerRefreshTokenUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateWithoutCustomerInput, Prisma.CustomerRefreshTokenUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerRefreshTokenUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerRefreshTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateManyMutationInput, Prisma.CustomerRefreshTokenUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerRefreshTokenScalarWhereInput = {
    AND?: Prisma.CustomerRefreshTokenScalarWhereInput | Prisma.CustomerRefreshTokenScalarWhereInput[];
    OR?: Prisma.CustomerRefreshTokenScalarWhereInput[];
    NOT?: Prisma.CustomerRefreshTokenScalarWhereInput | Prisma.CustomerRefreshTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    customerId?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"CustomerRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"CustomerRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerRefreshToken"> | Date | string;
};
export type CustomerRefreshTokenCreateManyCustomerInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerRefreshTokenUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerRefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerRefreshToken"]>;
export type CustomerRefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerRefreshToken"]>;
export type CustomerRefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerRefreshToken"]>;
export type CustomerRefreshTokenSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
};
export type CustomerRefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["customerRefreshToken"]>;
export type CustomerRefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerRefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CustomerRefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerRefreshToken";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["customerRefreshToken"]>;
    composites: {};
};
export type CustomerRefreshTokenGetPayload<S extends boolean | null | undefined | CustomerRefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload, S>;
export type CustomerRefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerRefreshTokenCountAggregateInputType | true;
};
export interface CustomerRefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerRefreshToken'];
        meta: {
            name: 'CustomerRefreshToken';
        };
    };
    findUnique<T extends CustomerRefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerRefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerRefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerRefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerRefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerRefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerRefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerRefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerRefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerRefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerRefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerRefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerRefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerRefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, CustomerRefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$CustomerRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerRefreshTokenCountArgs>(args?: Prisma.Subset<T, CustomerRefreshTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerRefreshTokenCountAggregateOutputType> : number>;
    aggregate<T extends CustomerRefreshTokenAggregateArgs>(args: Prisma.Subset<T, CustomerRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetCustomerRefreshTokenAggregateType<T>>;
    groupBy<T extends CustomerRefreshTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerRefreshTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerRefreshTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerRefreshTokenFieldRefs;
}
export interface Prisma__CustomerRefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerRefreshTokenFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerRefreshToken", 'String'>;
    readonly customerId: Prisma.FieldRef<"CustomerRefreshToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"CustomerRefreshToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"CustomerRefreshToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"CustomerRefreshToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CustomerRefreshToken", 'DateTime'>;
}
export type CustomerRefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
};
export type CustomerRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
};
export type CustomerRefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.CustomerRefreshTokenWhereInput;
    orderBy?: Prisma.CustomerRefreshTokenOrderByWithRelationInput | Prisma.CustomerRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.CustomerRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerRefreshTokenScalarFieldEnum | Prisma.CustomerRefreshTokenScalarFieldEnum[];
};
export type CustomerRefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.CustomerRefreshTokenWhereInput;
    orderBy?: Prisma.CustomerRefreshTokenOrderByWithRelationInput | Prisma.CustomerRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.CustomerRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerRefreshTokenScalarFieldEnum | Prisma.CustomerRefreshTokenScalarFieldEnum[];
};
export type CustomerRefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.CustomerRefreshTokenWhereInput;
    orderBy?: Prisma.CustomerRefreshTokenOrderByWithRelationInput | Prisma.CustomerRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.CustomerRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerRefreshTokenScalarFieldEnum | Prisma.CustomerRefreshTokenScalarFieldEnum[];
};
export type CustomerRefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerRefreshTokenCreateInput, Prisma.CustomerRefreshTokenUncheckedCreateInput>;
};
export type CustomerRefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerRefreshTokenCreateManyInput | Prisma.CustomerRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerRefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    data: Prisma.CustomerRefreshTokenCreateManyInput | Prisma.CustomerRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerRefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateInput, Prisma.CustomerRefreshTokenUncheckedUpdateInput>;
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
};
export type CustomerRefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateManyMutationInput, Prisma.CustomerRefreshTokenUncheckedUpdateManyInput>;
    where?: Prisma.CustomerRefreshTokenWhereInput;
    limit?: number;
};
export type CustomerRefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateManyMutationInput, Prisma.CustomerRefreshTokenUncheckedUpdateManyInput>;
    where?: Prisma.CustomerRefreshTokenWhereInput;
    limit?: number;
    include?: Prisma.CustomerRefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerRefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerRefreshTokenCreateInput, Prisma.CustomerRefreshTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerRefreshTokenUpdateInput, Prisma.CustomerRefreshTokenUncheckedUpdateInput>;
};
export type CustomerRefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.CustomerRefreshTokenWhereUniqueInput;
};
export type CustomerRefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerRefreshTokenWhereInput;
    limit?: number;
};
export type CustomerRefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.CustomerRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.CustomerRefreshTokenInclude<ExtArgs> | null;
};
export {};
