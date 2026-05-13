import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminRolePayload>;
export type AggregateAdminRole = {
    _count: AdminRoleCountAggregateOutputType | null;
    _min: AdminRoleMinAggregateOutputType | null;
    _max: AdminRoleMaxAggregateOutputType | null;
};
export type AdminRoleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type AdminRoleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
};
export type AdminRoleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    createdAt: number;
    _all: number;
};
export type AdminRoleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
};
export type AdminRoleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
};
export type AdminRoleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    _all?: true;
};
export type AdminRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRoleWhereInput;
    orderBy?: Prisma.AdminRoleOrderByWithRelationInput | Prisma.AdminRoleOrderByWithRelationInput[];
    cursor?: Prisma.AdminRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminRoleCountAggregateInputType;
    _min?: AdminRoleMinAggregateInputType;
    _max?: AdminRoleMaxAggregateInputType;
};
export type GetAdminRoleAggregateType<T extends AdminRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminRole[P]> : Prisma.GetScalarType<T[P], AggregateAdminRole[P]>;
};
export type AdminRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRoleWhereInput;
    orderBy?: Prisma.AdminRoleOrderByWithAggregationInput | Prisma.AdminRoleOrderByWithAggregationInput[];
    by: Prisma.AdminRoleScalarFieldEnum[] | Prisma.AdminRoleScalarFieldEnum;
    having?: Prisma.AdminRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminRoleCountAggregateInputType | true;
    _min?: AdminRoleMinAggregateInputType;
    _max?: AdminRoleMaxAggregateInputType;
};
export type AdminRoleGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    createdAt: Date;
    _count: AdminRoleCountAggregateOutputType | null;
    _min: AdminRoleMinAggregateOutputType | null;
    _max: AdminRoleMaxAggregateOutputType | null;
};
type GetAdminRoleGroupByPayload<T extends AdminRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminRoleGroupByOutputType[P]>;
}>>;
export type AdminRoleWhereInput = {
    AND?: Prisma.AdminRoleWhereInput | Prisma.AdminRoleWhereInput[];
    OR?: Prisma.AdminRoleWhereInput[];
    NOT?: Prisma.AdminRoleWhereInput | Prisma.AdminRoleWhereInput[];
    id?: Prisma.StringFilter<"AdminRole"> | string;
    name?: Prisma.StringFilter<"AdminRole"> | string;
    description?: Prisma.StringNullableFilter<"AdminRole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminRole"> | Date | string;
    users?: Prisma.AdminUserListRelationFilter;
    permissions?: Prisma.AdminRolePermissionListRelationFilter;
};
export type AdminRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    users?: Prisma.AdminUserOrderByRelationAggregateInput;
    permissions?: Prisma.AdminRolePermissionOrderByRelationAggregateInput;
};
export type AdminRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.AdminRoleWhereInput | Prisma.AdminRoleWhereInput[];
    OR?: Prisma.AdminRoleWhereInput[];
    NOT?: Prisma.AdminRoleWhereInput | Prisma.AdminRoleWhereInput[];
    description?: Prisma.StringNullableFilter<"AdminRole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminRole"> | Date | string;
    users?: Prisma.AdminUserListRelationFilter;
    permissions?: Prisma.AdminRolePermissionListRelationFilter;
}, "id" | "name">;
export type AdminRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AdminRoleCountOrderByAggregateInput;
    _max?: Prisma.AdminRoleMaxOrderByAggregateInput;
    _min?: Prisma.AdminRoleMinOrderByAggregateInput;
};
export type AdminRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminRoleScalarWhereWithAggregatesInput | Prisma.AdminRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminRoleScalarWhereWithAggregatesInput | Prisma.AdminRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminRole"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AdminRole"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"AdminRole"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminRole"> | Date | string;
};
export type AdminRoleCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    users?: Prisma.AdminUserCreateNestedManyWithoutRoleInput;
    permissions?: Prisma.AdminRolePermissionCreateNestedManyWithoutRoleInput;
};
export type AdminRoleUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    users?: Prisma.AdminUserUncheckedCreateNestedManyWithoutRoleInput;
    permissions?: Prisma.AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type AdminRoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.AdminUserUpdateManyWithoutRoleNestedInput;
    permissions?: Prisma.AdminRolePermissionUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.AdminUserUncheckedUpdateManyWithoutRoleNestedInput;
    permissions?: Prisma.AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
};
export type AdminRoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AdminRoleScalarRelationFilter = {
    is?: Prisma.AdminRoleWhereInput;
    isNot?: Prisma.AdminRoleWhereInput;
};
export type AdminRoleCreateNestedOneWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.AdminRoleCreateWithoutPermissionsInput, Prisma.AdminRoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.AdminRoleCreateOrConnectWithoutPermissionsInput;
    connect?: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRoleCreateWithoutPermissionsInput, Prisma.AdminRoleUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.AdminRoleCreateOrConnectWithoutPermissionsInput;
    upsert?: Prisma.AdminRoleUpsertWithoutPermissionsInput;
    connect?: Prisma.AdminRoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminRoleUpdateToOneWithWhereWithoutPermissionsInput, Prisma.AdminRoleUpdateWithoutPermissionsInput>, Prisma.AdminRoleUncheckedUpdateWithoutPermissionsInput>;
};
export type AdminRoleCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.AdminRoleCreateWithoutUsersInput, Prisma.AdminRoleUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.AdminRoleCreateOrConnectWithoutUsersInput;
    connect?: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRoleCreateWithoutUsersInput, Prisma.AdminRoleUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.AdminRoleCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.AdminRoleUpsertWithoutUsersInput;
    connect?: Prisma.AdminRoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminRoleUpdateToOneWithWhereWithoutUsersInput, Prisma.AdminRoleUpdateWithoutUsersInput>, Prisma.AdminRoleUncheckedUpdateWithoutUsersInput>;
};
export type AdminRoleCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    users?: Prisma.AdminUserCreateNestedManyWithoutRoleInput;
};
export type AdminRoleUncheckedCreateWithoutPermissionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    users?: Prisma.AdminUserUncheckedCreateNestedManyWithoutRoleInput;
};
export type AdminRoleCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.AdminRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRoleCreateWithoutPermissionsInput, Prisma.AdminRoleUncheckedCreateWithoutPermissionsInput>;
};
export type AdminRoleUpsertWithoutPermissionsInput = {
    update: Prisma.XOR<Prisma.AdminRoleUpdateWithoutPermissionsInput, Prisma.AdminRoleUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.AdminRoleCreateWithoutPermissionsInput, Prisma.AdminRoleUncheckedCreateWithoutPermissionsInput>;
    where?: Prisma.AdminRoleWhereInput;
};
export type AdminRoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: Prisma.AdminRoleWhereInput;
    data: Prisma.XOR<Prisma.AdminRoleUpdateWithoutPermissionsInput, Prisma.AdminRoleUncheckedUpdateWithoutPermissionsInput>;
};
export type AdminRoleUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.AdminUserUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleUncheckedUpdateWithoutPermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.AdminUserUncheckedUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    permissions?: Prisma.AdminRolePermissionCreateNestedManyWithoutRoleInput;
};
export type AdminRoleUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    permissions?: Prisma.AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type AdminRoleCreateOrConnectWithoutUsersInput = {
    where: Prisma.AdminRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRoleCreateWithoutUsersInput, Prisma.AdminRoleUncheckedCreateWithoutUsersInput>;
};
export type AdminRoleUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.AdminRoleUpdateWithoutUsersInput, Prisma.AdminRoleUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.AdminRoleCreateWithoutUsersInput, Prisma.AdminRoleUncheckedCreateWithoutUsersInput>;
    where?: Prisma.AdminRoleWhereInput;
};
export type AdminRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.AdminRoleWhereInput;
    data: Prisma.XOR<Prisma.AdminRoleUpdateWithoutUsersInput, Prisma.AdminRoleUncheckedUpdateWithoutUsersInput>;
};
export type AdminRoleUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.AdminRolePermissionUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permissions?: Prisma.AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type AdminRoleCountOutputType = {
    users: number;
    permissions: number;
};
export type AdminRoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | AdminRoleCountOutputTypeCountUsersArgs;
    permissions?: boolean | AdminRoleCountOutputTypeCountPermissionsArgs;
};
export type AdminRoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminRoleCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
};
export type AdminRoleCountOutputTypeCountPermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRolePermissionWhereInput;
};
export type AdminRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    users?: boolean | Prisma.AdminRole$usersArgs<ExtArgs>;
    permissions?: boolean | Prisma.AdminRole$permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminRoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRole"]>;
export type AdminRoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["adminRole"]>;
export type AdminRoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["adminRole"]>;
export type AdminRoleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
};
export type AdminRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["adminRole"]>;
export type AdminRoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.AdminRole$usersArgs<ExtArgs>;
    permissions?: boolean | Prisma.AdminRole$permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminRoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminRoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AdminRoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AdminRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminRole";
    objects: {
        users: Prisma.$AdminUserPayload<ExtArgs>[];
        permissions: Prisma.$AdminRolePermissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["adminRole"]>;
    composites: {};
};
export type AdminRoleGetPayload<S extends boolean | null | undefined | AdminRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminRolePayload, S>;
export type AdminRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminRoleCountAggregateInputType | true;
};
export interface AdminRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminRole'];
        meta: {
            name: 'AdminRole';
        };
    };
    findUnique<T extends AdminRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminRoleFindManyArgs>(args?: Prisma.SelectSubset<T, AdminRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminRoleCreateArgs>(args: Prisma.SelectSubset<T, AdminRoleCreateArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminRoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminRoleDeleteArgs>(args: Prisma.SelectSubset<T, AdminRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminRoleUpdateArgs>(args: Prisma.SelectSubset<T, AdminRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminRoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminRoleUpsertArgs>(args: Prisma.SelectSubset<T, AdminRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminRoleCountArgs>(args?: Prisma.Subset<T, AdminRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminRoleCountAggregateOutputType> : number>;
    aggregate<T extends AdminRoleAggregateArgs>(args: Prisma.Subset<T, AdminRoleAggregateArgs>): Prisma.PrismaPromise<GetAdminRoleAggregateType<T>>;
    groupBy<T extends AdminRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminRoleFieldRefs;
}
export interface Prisma__AdminRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.AdminRole$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    permissions<T extends Prisma.AdminRole$permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminRole$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminRoleFieldRefs {
    readonly id: Prisma.FieldRef<"AdminRole", 'String'>;
    readonly name: Prisma.FieldRef<"AdminRole", 'String'>;
    readonly description: Prisma.FieldRef<"AdminRole", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AdminRole", 'DateTime'>;
}
export type AdminRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where?: Prisma.AdminRoleWhereInput;
    orderBy?: Prisma.AdminRoleOrderByWithRelationInput | Prisma.AdminRoleOrderByWithRelationInput[];
    cursor?: Prisma.AdminRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRoleScalarFieldEnum | Prisma.AdminRoleScalarFieldEnum[];
};
export type AdminRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where?: Prisma.AdminRoleWhereInput;
    orderBy?: Prisma.AdminRoleOrderByWithRelationInput | Prisma.AdminRoleOrderByWithRelationInput[];
    cursor?: Prisma.AdminRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRoleScalarFieldEnum | Prisma.AdminRoleScalarFieldEnum[];
};
export type AdminRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where?: Prisma.AdminRoleWhereInput;
    orderBy?: Prisma.AdminRoleOrderByWithRelationInput | Prisma.AdminRoleOrderByWithRelationInput[];
    cursor?: Prisma.AdminRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRoleScalarFieldEnum | Prisma.AdminRoleScalarFieldEnum[];
};
export type AdminRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRoleCreateInput, Prisma.AdminRoleUncheckedCreateInput>;
};
export type AdminRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminRoleCreateManyInput | Prisma.AdminRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminRoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    data: Prisma.AdminRoleCreateManyInput | Prisma.AdminRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRoleUpdateInput, Prisma.AdminRoleUncheckedUpdateInput>;
    where: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminRoleUpdateManyMutationInput, Prisma.AdminRoleUncheckedUpdateManyInput>;
    where?: Prisma.AdminRoleWhereInput;
    limit?: number;
};
export type AdminRoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRoleUpdateManyMutationInput, Prisma.AdminRoleUncheckedUpdateManyInput>;
    where?: Prisma.AdminRoleWhereInput;
    limit?: number;
};
export type AdminRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where: Prisma.AdminRoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRoleCreateInput, Prisma.AdminRoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminRoleUpdateInput, Prisma.AdminRoleUncheckedUpdateInput>;
};
export type AdminRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
    where: Prisma.AdminRoleWhereUniqueInput;
};
export type AdminRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRoleWhereInput;
    limit?: number;
};
export type AdminRole$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminRole$permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    where?: Prisma.AdminRolePermissionWhereInput;
    orderBy?: Prisma.AdminRolePermissionOrderByWithRelationInput | Prisma.AdminRolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminRolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminRolePermissionScalarFieldEnum | Prisma.AdminRolePermissionScalarFieldEnum[];
};
export type AdminRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRoleSelect<ExtArgs> | null;
    omit?: Prisma.AdminRoleOmit<ExtArgs> | null;
    include?: Prisma.AdminRoleInclude<ExtArgs> | null;
};
export {};
