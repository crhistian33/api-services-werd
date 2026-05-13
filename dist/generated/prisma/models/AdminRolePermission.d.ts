import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminRolePermissionModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminRolePermissionPayload>;
export type AggregateAdminRolePermission = {
    _count: AdminRolePermissionCountAggregateOutputType | null;
    _min: AdminRolePermissionMinAggregateOutputType | null;
    _max: AdminRolePermissionMaxAggregateOutputType | null;
};
export type AdminRolePermissionMinAggregateOutputType = {
    roleId: string | null;
    permissionId: string | null;
};
export type AdminRolePermissionMaxAggregateOutputType = {
    roleId: string | null;
    permissionId: string | null;
};
export type AdminRolePermissionCountAggregateOutputType = {
    roleId: number;
    permissionId: number;
    _all: number;
};
export type AdminRolePermissionMinAggregateInputType = {
    roleId?: true;
    permissionId?: true;
};
export type AdminRolePermissionMaxAggregateInputType = {
    roleId?: true;
    permissionId?: true;
};
export type AdminRolePermissionCountAggregateInputType = {
    roleId?: true;
    permissionId?: true;
    _all?: true;
};
export type AdminRolePermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRolePermissionWhereInput;
    orderBy?: Prisma.AdminRolePermissionOrderByWithRelationInput | Prisma.AdminRolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminRolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminRolePermissionCountAggregateInputType;
    _min?: AdminRolePermissionMinAggregateInputType;
    _max?: AdminRolePermissionMaxAggregateInputType;
};
export type GetAdminRolePermissionAggregateType<T extends AdminRolePermissionAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminRolePermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminRolePermission[P]> : Prisma.GetScalarType<T[P], AggregateAdminRolePermission[P]>;
};
export type AdminRolePermissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRolePermissionWhereInput;
    orderBy?: Prisma.AdminRolePermissionOrderByWithAggregationInput | Prisma.AdminRolePermissionOrderByWithAggregationInput[];
    by: Prisma.AdminRolePermissionScalarFieldEnum[] | Prisma.AdminRolePermissionScalarFieldEnum;
    having?: Prisma.AdminRolePermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminRolePermissionCountAggregateInputType | true;
    _min?: AdminRolePermissionMinAggregateInputType;
    _max?: AdminRolePermissionMaxAggregateInputType;
};
export type AdminRolePermissionGroupByOutputType = {
    roleId: string;
    permissionId: string;
    _count: AdminRolePermissionCountAggregateOutputType | null;
    _min: AdminRolePermissionMinAggregateOutputType | null;
    _max: AdminRolePermissionMaxAggregateOutputType | null;
};
type GetAdminRolePermissionGroupByPayload<T extends AdminRolePermissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminRolePermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminRolePermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminRolePermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminRolePermissionGroupByOutputType[P]>;
}>>;
export type AdminRolePermissionWhereInput = {
    AND?: Prisma.AdminRolePermissionWhereInput | Prisma.AdminRolePermissionWhereInput[];
    OR?: Prisma.AdminRolePermissionWhereInput[];
    NOT?: Prisma.AdminRolePermissionWhereInput | Prisma.AdminRolePermissionWhereInput[];
    roleId?: Prisma.StringFilter<"AdminRolePermission"> | string;
    permissionId?: Prisma.StringFilter<"AdminRolePermission"> | string;
    role?: Prisma.XOR<Prisma.AdminRoleScalarRelationFilter, Prisma.AdminRoleWhereInput>;
    permission?: Prisma.XOR<Prisma.AdminPermissionScalarRelationFilter, Prisma.AdminPermissionWhereInput>;
};
export type AdminRolePermissionOrderByWithRelationInput = {
    roleId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
    role?: Prisma.AdminRoleOrderByWithRelationInput;
    permission?: Prisma.AdminPermissionOrderByWithRelationInput;
};
export type AdminRolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: Prisma.AdminRolePermissionRoleIdPermissionIdCompoundUniqueInput;
    AND?: Prisma.AdminRolePermissionWhereInput | Prisma.AdminRolePermissionWhereInput[];
    OR?: Prisma.AdminRolePermissionWhereInput[];
    NOT?: Prisma.AdminRolePermissionWhereInput | Prisma.AdminRolePermissionWhereInput[];
    roleId?: Prisma.StringFilter<"AdminRolePermission"> | string;
    permissionId?: Prisma.StringFilter<"AdminRolePermission"> | string;
    role?: Prisma.XOR<Prisma.AdminRoleScalarRelationFilter, Prisma.AdminRoleWhereInput>;
    permission?: Prisma.XOR<Prisma.AdminPermissionScalarRelationFilter, Prisma.AdminPermissionWhereInput>;
}, "roleId_permissionId">;
export type AdminRolePermissionOrderByWithAggregationInput = {
    roleId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
    _count?: Prisma.AdminRolePermissionCountOrderByAggregateInput;
    _max?: Prisma.AdminRolePermissionMaxOrderByAggregateInput;
    _min?: Prisma.AdminRolePermissionMinOrderByAggregateInput;
};
export type AdminRolePermissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminRolePermissionScalarWhereWithAggregatesInput | Prisma.AdminRolePermissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminRolePermissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminRolePermissionScalarWhereWithAggregatesInput | Prisma.AdminRolePermissionScalarWhereWithAggregatesInput[];
    roleId?: Prisma.StringWithAggregatesFilter<"AdminRolePermission"> | string;
    permissionId?: Prisma.StringWithAggregatesFilter<"AdminRolePermission"> | string;
};
export type AdminRolePermissionCreateInput = {
    role: Prisma.AdminRoleCreateNestedOneWithoutPermissionsInput;
    permission: Prisma.AdminPermissionCreateNestedOneWithoutRolesInput;
};
export type AdminRolePermissionUncheckedCreateInput = {
    roleId: string;
    permissionId: string;
};
export type AdminRolePermissionUpdateInput = {
    role?: Prisma.AdminRoleUpdateOneRequiredWithoutPermissionsNestedInput;
    permission?: Prisma.AdminPermissionUpdateOneRequiredWithoutRolesNestedInput;
};
export type AdminRolePermissionUncheckedUpdateInput = {
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionCreateManyInput = {
    roleId: string;
    permissionId: string;
};
export type AdminRolePermissionUpdateManyMutationInput = {};
export type AdminRolePermissionUncheckedUpdateManyInput = {
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionListRelationFilter = {
    every?: Prisma.AdminRolePermissionWhereInput;
    some?: Prisma.AdminRolePermissionWhereInput;
    none?: Prisma.AdminRolePermissionWhereInput;
};
export type AdminRolePermissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminRolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string;
    permissionId: string;
};
export type AdminRolePermissionCountOrderByAggregateInput = {
    roleId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type AdminRolePermissionMaxOrderByAggregateInput = {
    roleId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type AdminRolePermissionMinOrderByAggregateInput = {
    roleId?: Prisma.SortOrder;
    permissionId?: Prisma.SortOrder;
};
export type AdminRolePermissionCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput> | Prisma.AdminRolePermissionCreateWithoutRoleInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput | Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
};
export type AdminRolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput> | Prisma.AdminRolePermissionCreateWithoutRoleInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput | Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyRoleInputEnvelope;
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
};
export type AdminRolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput> | Prisma.AdminRolePermissionCreateWithoutRoleInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput | Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyRoleInputEnvelope;
    set?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    disconnect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    delete?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    update?: Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.AdminRolePermissionUpdateManyWithWhereWithoutRoleInput | Prisma.AdminRolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
};
export type AdminRolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput> | Prisma.AdminRolePermissionCreateWithoutRoleInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput | Prisma.AdminRolePermissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyRoleInputEnvelope;
    set?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    disconnect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    delete?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    update?: Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.AdminRolePermissionUpdateManyWithWhereWithoutRoleInput | Prisma.AdminRolePermissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
};
export type AdminRolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput> | Prisma.AdminRolePermissionCreateWithoutPermissionInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput | Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
};
export type AdminRolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput> | Prisma.AdminRolePermissionCreateWithoutPermissionInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput | Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
};
export type AdminRolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput> | Prisma.AdminRolePermissionCreateWithoutPermissionInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput | Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyPermissionInputEnvelope;
    set?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    disconnect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    delete?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    update?: Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput | Prisma.AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
};
export type AdminRolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput> | Prisma.AdminRolePermissionCreateWithoutPermissionInput[] | Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput | Prisma.AdminRolePermissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.AdminRolePermissionCreateManyPermissionInputEnvelope;
    set?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    disconnect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    delete?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    connect?: Prisma.AdminRolePermissionWhereUniqueInput | Prisma.AdminRolePermissionWhereUniqueInput[];
    update?: Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput | Prisma.AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
};
export type AdminRolePermissionCreateWithoutRoleInput = {
    permission: Prisma.AdminPermissionCreateNestedOneWithoutRolesInput;
};
export type AdminRolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: string;
};
export type AdminRolePermissionCreateOrConnectWithoutRoleInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput>;
};
export type AdminRolePermissionCreateManyRoleInputEnvelope = {
    data: Prisma.AdminRolePermissionCreateManyRoleInput | Prisma.AdminRolePermissionCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type AdminRolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminRolePermissionUpdateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedCreateWithoutRoleInput>;
};
export type AdminRolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateWithoutRoleInput, Prisma.AdminRolePermissionUncheckedUpdateWithoutRoleInput>;
};
export type AdminRolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.AdminRolePermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateManyMutationInput, Prisma.AdminRolePermissionUncheckedUpdateManyWithoutRoleInput>;
};
export type AdminRolePermissionScalarWhereInput = {
    AND?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
    OR?: Prisma.AdminRolePermissionScalarWhereInput[];
    NOT?: Prisma.AdminRolePermissionScalarWhereInput | Prisma.AdminRolePermissionScalarWhereInput[];
    roleId?: Prisma.StringFilter<"AdminRolePermission"> | string;
    permissionId?: Prisma.StringFilter<"AdminRolePermission"> | string;
};
export type AdminRolePermissionCreateWithoutPermissionInput = {
    role: Prisma.AdminRoleCreateNestedOneWithoutPermissionsInput;
};
export type AdminRolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: string;
};
export type AdminRolePermissionCreateOrConnectWithoutPermissionInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput>;
};
export type AdminRolePermissionCreateManyPermissionInputEnvelope = {
    data: Prisma.AdminRolePermissionCreateManyPermissionInput | Prisma.AdminRolePermissionCreateManyPermissionInput[];
    skipDuplicates?: boolean;
};
export type AdminRolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminRolePermissionUpdateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedUpdateWithoutPermissionInput>;
    create: Prisma.XOR<Prisma.AdminRolePermissionCreateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedCreateWithoutPermissionInput>;
};
export type AdminRolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateWithoutPermissionInput, Prisma.AdminRolePermissionUncheckedUpdateWithoutPermissionInput>;
};
export type AdminRolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: Prisma.AdminRolePermissionScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateManyMutationInput, Prisma.AdminRolePermissionUncheckedUpdateManyWithoutPermissionInput>;
};
export type AdminRolePermissionCreateManyRoleInput = {
    permissionId: string;
};
export type AdminRolePermissionUpdateWithoutRoleInput = {
    permission?: Prisma.AdminPermissionUpdateOneRequiredWithoutRolesNestedInput;
};
export type AdminRolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionCreateManyPermissionInput = {
    roleId: string;
};
export type AdminRolePermissionUpdateWithoutPermissionInput = {
    role?: Prisma.AdminRoleUpdateOneRequiredWithoutPermissionsNestedInput;
};
export type AdminRolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdminRolePermissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleId?: boolean;
    permissionId?: boolean;
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRolePermission"]>;
export type AdminRolePermissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleId?: boolean;
    permissionId?: boolean;
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRolePermission"]>;
export type AdminRolePermissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    roleId?: boolean;
    permissionId?: boolean;
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminRolePermission"]>;
export type AdminRolePermissionSelectScalar = {
    roleId?: boolean;
    permissionId?: boolean;
};
export type AdminRolePermissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"roleId" | "permissionId", ExtArgs["result"]["adminRolePermission"]>;
export type AdminRolePermissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
};
export type AdminRolePermissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
};
export type AdminRolePermissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.AdminRoleDefaultArgs<ExtArgs>;
    permission?: boolean | Prisma.AdminPermissionDefaultArgs<ExtArgs>;
};
export type $AdminRolePermissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminRolePermission";
    objects: {
        role: Prisma.$AdminRolePayload<ExtArgs>;
        permission: Prisma.$AdminPermissionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        roleId: string;
        permissionId: string;
    }, ExtArgs["result"]["adminRolePermission"]>;
    composites: {};
};
export type AdminRolePermissionGetPayload<S extends boolean | null | undefined | AdminRolePermissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload, S>;
export type AdminRolePermissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminRolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminRolePermissionCountAggregateInputType | true;
};
export interface AdminRolePermissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminRolePermission'];
        meta: {
            name: 'AdminRolePermission';
        };
    };
    findUnique<T extends AdminRolePermissionFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminRolePermissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminRolePermissionFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminRolePermissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminRolePermissionFindManyArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminRolePermissionCreateArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionCreateArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminRolePermissionCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminRolePermissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminRolePermissionDeleteArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminRolePermissionUpdateArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminRolePermissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminRolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminRolePermissionUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminRolePermissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminRolePermissionUpsertArgs>(args: Prisma.SelectSubset<T, AdminRolePermissionUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminRolePermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminRolePermissionCountArgs>(args?: Prisma.Subset<T, AdminRolePermissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminRolePermissionCountAggregateOutputType> : number>;
    aggregate<T extends AdminRolePermissionAggregateArgs>(args: Prisma.Subset<T, AdminRolePermissionAggregateArgs>): Prisma.PrismaPromise<GetAdminRolePermissionAggregateType<T>>;
    groupBy<T extends AdminRolePermissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminRolePermissionGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminRolePermissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminRolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminRolePermissionFieldRefs;
}
export interface Prisma__AdminRolePermissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends Prisma.AdminRoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminRoleDefaultArgs<ExtArgs>>): Prisma.Prisma__AdminRoleClient<runtime.Types.Result.GetResult<Prisma.$AdminRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    permission<T extends Prisma.AdminPermissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminPermissionDefaultArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminRolePermissionFieldRefs {
    readonly roleId: Prisma.FieldRef<"AdminRolePermission", 'String'>;
    readonly permissionId: Prisma.FieldRef<"AdminRolePermission", 'String'>;
}
export type AdminRolePermissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    where: Prisma.AdminRolePermissionWhereUniqueInput;
};
export type AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    where: Prisma.AdminRolePermissionWhereUniqueInput;
};
export type AdminRolePermissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminRolePermissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminRolePermissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminRolePermissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRolePermissionCreateInput, Prisma.AdminRolePermissionUncheckedCreateInput>;
};
export type AdminRolePermissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminRolePermissionCreateManyInput | Prisma.AdminRolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminRolePermissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    data: Prisma.AdminRolePermissionCreateManyInput | Prisma.AdminRolePermissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminRolePermissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminRolePermissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateInput, Prisma.AdminRolePermissionUncheckedUpdateInput>;
    where: Prisma.AdminRolePermissionWhereUniqueInput;
};
export type AdminRolePermissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateManyMutationInput, Prisma.AdminRolePermissionUncheckedUpdateManyInput>;
    where?: Prisma.AdminRolePermissionWhereInput;
    limit?: number;
};
export type AdminRolePermissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminRolePermissionUpdateManyMutationInput, Prisma.AdminRolePermissionUncheckedUpdateManyInput>;
    where?: Prisma.AdminRolePermissionWhereInput;
    limit?: number;
    include?: Prisma.AdminRolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminRolePermissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    where: Prisma.AdminRolePermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminRolePermissionCreateInput, Prisma.AdminRolePermissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminRolePermissionUpdateInput, Prisma.AdminRolePermissionUncheckedUpdateInput>;
};
export type AdminRolePermissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
    where: Prisma.AdminRolePermissionWhereUniqueInput;
};
export type AdminRolePermissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRolePermissionWhereInput;
    limit?: number;
};
export type AdminRolePermissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminRolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminRolePermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminRolePermissionInclude<ExtArgs> | null;
};
export {};
