import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminRefreshTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminRefreshTokenPayload>;
export type AggregateAdminRefreshToken = {
    _count: AdminRefreshTokenCountAggregateOutputType | null;
    _min: AdminRefreshTokenMinAggregateOutputType | null;
    _max: AdminRefreshTokenMaxAggregateOutputType | null;
};
export type AdminRefreshTokenMinAggregateOutputType = {
    id: string | null;
    adminUserId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type AdminRefreshTokenMaxAggregateOutputType = {
    id: string | null;
    adminUserId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
    createdAt: Date | null;
};
export type AdminRefreshTokenCountAggregateOutputType = {
    id: number;
    adminUserId: number;
    tokenHash: number;
    expiresAt: number;
    revokedAt: number;
    createdAt: number;
    _all: number;
};
export type AdminRefreshTokenMinAggregateInputType = {
    id?: true;
    adminUserId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type AdminRefreshTokenMaxAggregateInputType = {
    id?: true;
    adminUserId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
};
export type AdminRefreshTokenCountAggregateInputType = {
    id?: true;
    adminUserId?: true;
    tokenHash?: true;
    expiresAt?: true;
    revokedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type AdminRefreshTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRefreshTokenWhereInput;
    orderBy?: Prisma.AdminRefreshTokenOrderByWithRelationInput | Prisma.AdminRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.AdminRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminRefreshTokenCountAggregateInputType;
    _min?: AdminRefreshTokenMinAggregateInputType;
    _max?: AdminRefreshTokenMaxAggregateInputType;
};
export type GetAdminRefreshTokenAggregateType<T extends AdminRefreshTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminRefreshToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminRefreshToken[P]> : Prisma.GetScalarType<T[P], AggregateAdminRefreshToken[P]>;
};
export type AdminRefreshTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRefreshTokenWhereInput;
    orderBy?: Prisma.AdminRefreshTokenOrderByWithAggregationInput | Prisma.AdminRefreshTokenOrderByWithAggregationInput[];
    by: Prisma.AdminRefreshTokenScalarFieldEnum[] | Prisma.AdminRefreshTokenScalarFieldEnum;
    having?: Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminRefreshTokenCountAggregateInputType | true;
    _min?: AdminRefreshTokenMinAggregateInputType;
    _max?: AdminRefreshTokenMaxAggregateInputType;
};
export type AdminRefreshTokenGroupByOutputType = {
    id: string;
    adminUserId: string;
    tokenHash: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    _count: AdminRefreshTokenCountAggregateOutputType | null;
    _min: AdminRefreshTokenMinAggregateOutputType | null;
    _max: AdminRefreshTokenMaxAggregateOutputType | null;
};
type GetAdminRefreshTokenGroupByPayload<T extends AdminRefreshTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminRefreshTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminRefreshTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminRefreshTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminRefreshTokenGroupByOutputType[P]>;
}>>;
export type AdminRefreshTokenWhereInput = {
    AND?: Prisma.AdminRefreshTokenWhereInput | Prisma.AdminRefreshTokenWhereInput[];
    OR?: Prisma.AdminRefreshTokenWhereInput[];
    NOT?: Prisma.AdminRefreshTokenWhereInput | Prisma.AdminRefreshTokenWhereInput[];
    id?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    adminUserId?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"AdminRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
    adminUser?: Prisma.XOR<Prisma.AdminUserScalarRelationFilter, Prisma.AdminUserWhereInput>;
};
export type AdminRefreshTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    adminUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    adminUser?: Prisma.AdminUserOrderByWithRelationInput;
};
export type AdminRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tokenHash?: string;
    AND?: Prisma.AdminRefreshTokenWhereInput | Prisma.AdminRefreshTokenWhereInput[];
    OR?: Prisma.AdminRefreshTokenWhereInput[];
    NOT?: Prisma.AdminRefreshTokenWhereInput | Prisma.AdminRefreshTokenWhereInput[];
    adminUserId?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"AdminRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
    adminUser?: Prisma.XOR<Prisma.AdminUserScalarRelationFilter, Prisma.AdminUserWhereInput>;
}, "id" | "tokenHash">;
export type AdminRefreshTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    adminUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AdminRefreshTokenCountOrderByAggregateInput;
    _max?: Prisma.AdminRefreshTokenMaxOrderByAggregateInput;
    _min?: Prisma.AdminRefreshTokenMinOrderByAggregateInput;
};
export type AdminRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput | Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput | Prisma.AdminRefreshTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminRefreshToken"> | string;
    adminUserId?: Prisma.StringWithAggregatesFilter<"AdminRefreshToken"> | string;
    tokenHash?: Prisma.StringWithAggregatesFilter<"AdminRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"AdminRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AdminRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminRefreshToken"> | Date | string;
};
export type AdminRefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    adminUser: Prisma.AdminUserCreateNestedOneWithoutAdminRefreshTokensInput;
};
export type AdminRefreshTokenUncheckedCreateInput = {
    id?: string;
    adminUserId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AdminRefreshTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminUser?: Prisma.AdminUserUpdateOneRequiredWithoutAdminRefreshTokensNestedInput;
};
export type AdminRefreshTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenCreateManyInput = {
    id?: string;
    adminUserId: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AdminRefreshTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    adminUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenListRelationFilter = {
    every?: Prisma.AdminRefreshTokenWhereInput;
    some?: Prisma.AdminRefreshTokenWhereInput;
    none?: Prisma.AdminRefreshTokenWhereInput;
};
export type AdminRefreshTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminRefreshTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRefreshTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRefreshTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    adminUserId?: Prisma.SortOrder;
    tokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRefreshTokenCreateNestedManyWithoutAdminUserInput = {
    create?: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput> | Prisma.AdminRefreshTokenCreateWithoutAdminUserInput[] | Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput[];
    connectOrCreate?: Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput | Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput[];
    createMany?: Prisma.AdminRefreshTokenCreateManyAdminUserInputEnvelope;
    connect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
};
export type AdminRefreshTokenUncheckedCreateNestedManyWithoutAdminUserInput = {
    create?: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput> | Prisma.AdminRefreshTokenCreateWithoutAdminUserInput[] | Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput[];
    connectOrCreate?: Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput | Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput[];
    createMany?: Prisma.AdminRefreshTokenCreateManyAdminUserInputEnvelope;
    connect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
};
export type AdminRefreshTokenUpdateManyWithoutAdminUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput> | Prisma.AdminRefreshTokenCreateWithoutAdminUserInput[] | Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput[];
    connectOrCreate?: Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput | Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput[];
    upsert?: Prisma.AdminRefreshTokenUpsertWithWhereUniqueWithoutAdminUserInput | Prisma.AdminRefreshTokenUpsertWithWhereUniqueWithoutAdminUserInput[];
    createMany?: Prisma.AdminRefreshTokenCreateManyAdminUserInputEnvelope;
    set?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    delete?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    connect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    update?: Prisma.AdminRefreshTokenUpdateWithWhereUniqueWithoutAdminUserInput | Prisma.AdminRefreshTokenUpdateWithWhereUniqueWithoutAdminUserInput[];
    updateMany?: Prisma.AdminRefreshTokenUpdateManyWithWhereWithoutAdminUserInput | Prisma.AdminRefreshTokenUpdateManyWithWhereWithoutAdminUserInput[];
    deleteMany?: Prisma.AdminRefreshTokenScalarWhereInput | Prisma.AdminRefreshTokenScalarWhereInput[];
};
export type AdminRefreshTokenUncheckedUpdateManyWithoutAdminUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput> | Prisma.AdminRefreshTokenCreateWithoutAdminUserInput[] | Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput[];
    connectOrCreate?: Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput | Prisma.AdminRefreshTokenCreateOrConnectWithoutAdminUserInput[];
    upsert?: Prisma.AdminRefreshTokenUpsertWithWhereUniqueWithoutAdminUserInput | Prisma.AdminRefreshTokenUpsertWithWhereUniqueWithoutAdminUserInput[];
    createMany?: Prisma.AdminRefreshTokenCreateManyAdminUserInputEnvelope;
    set?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    disconnect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    delete?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    connect?: Prisma.AdminRefreshTokenWhereUniqueInput | Prisma.AdminRefreshTokenWhereUniqueInput[];
    update?: Prisma.AdminRefreshTokenUpdateWithWhereUniqueWithoutAdminUserInput | Prisma.AdminRefreshTokenUpdateWithWhereUniqueWithoutAdminUserInput[];
    updateMany?: Prisma.AdminRefreshTokenUpdateManyWithWhereWithoutAdminUserInput | Prisma.AdminRefreshTokenUpdateManyWithWhereWithoutAdminUserInput[];
    deleteMany?: Prisma.AdminRefreshTokenScalarWhereInput | Prisma.AdminRefreshTokenScalarWhereInput[];
};
export type AdminRefreshTokenCreateWithoutAdminUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AdminRefreshTokenUncheckedCreateWithoutAdminUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AdminRefreshTokenCreateOrConnectWithoutAdminUserInput = {
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput>;
};
export type AdminRefreshTokenCreateManyAdminUserInputEnvelope = {
    data: Prisma.AdminRefreshTokenCreateManyAdminUserInput | Prisma.AdminRefreshTokenCreateManyAdminUserInput[];
    skipDuplicates?: boolean;
};
export type AdminRefreshTokenUpsertWithWhereUniqueWithoutAdminUserInput = {
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminRefreshTokenUpdateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedUpdateWithoutAdminUserInput>;
    create: Prisma.XOR<Prisma.AdminRefreshTokenCreateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedCreateWithoutAdminUserInput>;
};
export type AdminRefreshTokenUpdateWithWhereUniqueWithoutAdminUserInput = {
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminRefreshTokenUpdateWithoutAdminUserInput, Prisma.AdminRefreshTokenUncheckedUpdateWithoutAdminUserInput>;
};
export type AdminRefreshTokenUpdateManyWithWhereWithoutAdminUserInput = {
    where: Prisma.AdminRefreshTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminRefreshTokenUpdateManyMutationInput, Prisma.AdminRefreshTokenUncheckedUpdateManyWithoutAdminUserInput>;
};
export type AdminRefreshTokenScalarWhereInput = {
    AND?: Prisma.AdminRefreshTokenScalarWhereInput | Prisma.AdminRefreshTokenScalarWhereInput[];
    OR?: Prisma.AdminRefreshTokenScalarWhereInput[];
    NOT?: Prisma.AdminRefreshTokenScalarWhereInput | Prisma.AdminRefreshTokenScalarWhereInput[];
    id?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    adminUserId?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    tokenHash?: Prisma.StringFilter<"AdminRefreshToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"AdminRefreshToken"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminRefreshToken"> | Date | string;
};
export type AdminRefreshTokenCreateManyAdminUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type AdminRefreshTokenUpdateWithoutAdminUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenUncheckedUpdateWithoutAdminUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenUncheckedUpdateManyWithoutAdminUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRefreshTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminUserId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRefreshToken"]>;
export type AdminRefreshTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminUserId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRefreshToken"]>;
export type AdminRefreshTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    adminUserId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRefreshToken"]>;
export type AdminRefreshTokenSelectScalar = {
    id?: boolean;
    adminUserId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
    createdAt?: boolean;
};
export type AdminRefreshTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "adminUserId" | "tokenHash" | "expiresAt" | "revokedAt" | "createdAt", ExtArgs["result"]["adminRefreshToken"]>;
export type AdminRefreshTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
};
export type AdminRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
};
export type AdminRefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminUser?: boolean | Prisma.AdminUserDefaultArgs<ExtArgs>;
};
export type $AdminRefreshTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminRefreshToken";
    objects: {
        adminUser: Prisma.$AdminUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        adminUserId: string;
        tokenHash: string;
        expiresAt: Date;
        revokedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["adminRefreshToken"]>;
    composites: {};
};
export type AdminRefreshTokenGetPayload<S extends boolean | null | undefined | AdminRefreshTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload, S>;
export type AdminRefreshTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminRefreshTokenCountAggregateInputType | true;
};
export interface AdminRefreshTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminRefreshToken'];
        meta: {
            name: 'AdminRefreshToken';
        };
    };
    findUnique<T extends AdminRefreshTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminRefreshTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminRefreshTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminRefreshTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminRefreshTokenFindManyArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminRefreshTokenCreateArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenCreateArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminRefreshTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminRefreshTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminRefreshTokenDeleteArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminRefreshTokenUpdateArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminRefreshTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminRefreshTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminRefreshTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminRefreshTokenUpsertArgs>(args: Prisma.SelectSubset<T, AdminRefreshTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminRefreshTokenClient<runtime.Types.Result.GetResult<Prisma.$AdminRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminRefreshTokenCountArgs>(args?: Prisma.Subset<T, AdminRefreshTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminRefreshTokenCountAggregateOutputType> : number>;
    aggregate<T extends AdminRefreshTokenAggregateArgs>(args: Prisma.Subset<T, AdminRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetAdminRefreshTokenAggregateType<T>>;
    groupBy<T extends AdminRefreshTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminRefreshTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminRefreshTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminRefreshTokenFieldRefs;
}
export interface Prisma__AdminRefreshTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adminUser<T extends Prisma.AdminUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminRefreshTokenFieldRefs {
    readonly id: Prisma.FieldRef<"AdminRefreshToken", 'String'>;
    readonly adminUserId: Prisma.FieldRef<"AdminRefreshToken", 'String'>;
    readonly tokenHash: Prisma.FieldRef<"AdminRefreshToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"AdminRefreshToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"AdminRefreshToken", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AdminRefreshToken", 'DateTime'>;
}
export type AdminRefreshTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
};
export type AdminRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
};
export type AdminRefreshTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.AdminRefreshTokenWhereInput;
    orderBy?: Prisma.AdminRefreshTokenOrderByWithRelationInput | Prisma.AdminRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.AdminRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRefreshTokenScalarFieldEnum | Prisma.AdminRefreshTokenScalarFieldEnum[];
};
export type AdminRefreshTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.AdminRefreshTokenWhereInput;
    orderBy?: Prisma.AdminRefreshTokenOrderByWithRelationInput | Prisma.AdminRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.AdminRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRefreshTokenScalarFieldEnum | Prisma.AdminRefreshTokenScalarFieldEnum[];
};
export type AdminRefreshTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.AdminRefreshTokenWhereInput;
    orderBy?: Prisma.AdminRefreshTokenOrderByWithRelationInput | Prisma.AdminRefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.AdminRefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRefreshTokenScalarFieldEnum | Prisma.AdminRefreshTokenScalarFieldEnum[];
};
export type AdminRefreshTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRefreshTokenCreateInput, Prisma.AdminRefreshTokenUncheckedCreateInput>;
};
export type AdminRefreshTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminRefreshTokenCreateManyInput | Prisma.AdminRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminRefreshTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    data: Prisma.AdminRefreshTokenCreateManyInput | Prisma.AdminRefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminRefreshTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRefreshTokenUpdateInput, Prisma.AdminRefreshTokenUncheckedUpdateInput>;
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
};
export type AdminRefreshTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminRefreshTokenUpdateManyMutationInput, Prisma.AdminRefreshTokenUncheckedUpdateManyInput>;
    where?: Prisma.AdminRefreshTokenWhereInput;
    limit?: number;
};
export type AdminRefreshTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRefreshTokenUpdateManyMutationInput, Prisma.AdminRefreshTokenUncheckedUpdateManyInput>;
    where?: Prisma.AdminRefreshTokenWhereInput;
    limit?: number;
    include?: Prisma.AdminRefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminRefreshTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRefreshTokenCreateInput, Prisma.AdminRefreshTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminRefreshTokenUpdateInput, Prisma.AdminRefreshTokenUncheckedUpdateInput>;
};
export type AdminRefreshTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
    where: Prisma.AdminRefreshTokenWhereUniqueInput;
};
export type AdminRefreshTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRefreshTokenWhereInput;
    limit?: number;
};
export type AdminRefreshTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.AdminRefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.AdminRefreshTokenInclude<ExtArgs> | null;
};
export {};
