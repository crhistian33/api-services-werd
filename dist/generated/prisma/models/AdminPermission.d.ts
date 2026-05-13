import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminPermissionModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminPermissionPayload>;
export type AggregateAdminPermission = {
    _count: AdminPermissionCountAggregateOutputType | null;
    _min: AdminPermissionMinAggregateOutputType | null;
    _max: AdminPermissionMaxAggregateOutputType | null;
};
export type AdminPermissionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    module: $Enums.AdminPermissionModule | null;
};
export type AdminPermissionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    module: $Enums.AdminPermissionModule | null;
};
export type AdminPermissionCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    module: number;
    _all: number;
};
export type AdminPermissionMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    module?: true;
};
export type AdminPermissionMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    module?: true;
};
export type AdminPermissionCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    module?: true;
    _all?: true;
};
export type AdminPermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminPermissionWhereInput;
    orderBy?: Prisma.AdminPermissionOrderByWithRelationInput | Prisma.AdminPermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminPermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminPermissionCountAggregateInputType;
    _min?: AdminPermissionMinAggregateInputType;
    _max?: AdminPermissionMaxAggregateInputType;
};
export type GetAdminPermissionAggregateType<T extends AdminPermissionAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminPermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminPermission[P]> : Prisma.GetScalarType<T[P], AggregateAdminPermission[P]>;
};
export type AdminPermissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminPermissionWhereInput;
    orderBy?: Prisma.AdminPermissionOrderByWithAggregationInput | Prisma.AdminPermissionOrderByWithAggregationInput[];
    by: Prisma.AdminPermissionScalarFieldEnum[] | Prisma.AdminPermissionScalarFieldEnum;
    having?: Prisma.AdminPermissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminPermissionCountAggregateInputType | true;
    _min?: AdminPermissionMinAggregateInputType;
    _max?: AdminPermissionMaxAggregateInputType;
};
export type AdminPermissionGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
    _count: AdminPermissionCountAggregateOutputType | null;
    _min: AdminPermissionMinAggregateOutputType | null;
    _max: AdminPermissionMaxAggregateOutputType | null;
};
type GetAdminPermissionGroupByPayload<T extends AdminPermissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminPermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminPermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminPermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminPermissionGroupByOutputType[P]>;
}>>;
export type AdminPermissionWhereInput = {
    AND?: Prisma.AdminPermissionWhereInput | Prisma.AdminPermissionWhereInput[];
    OR?: Prisma.AdminPermissionWhereInput[];
    NOT?: Prisma.AdminPermissionWhereInput | Prisma.AdminPermissionWhereInput[];
    id?: Prisma.StringFilter<"AdminPermission"> | string;
    code?: Prisma.StringFilter<"AdminPermission"> | string;
    name?: Prisma.StringFilter<"AdminPermission"> | string;
    module?: Prisma.EnumAdminPermissionModuleFilter<"AdminPermission"> | $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionListRelationFilter;
};
export type AdminPermissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    roles?: Prisma.AdminRolePermissionOrderByRelationAggregateInput;
};
export type AdminPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.AdminPermissionWhereInput | Prisma.AdminPermissionWhereInput[];
    OR?: Prisma.AdminPermissionWhereInput[];
    NOT?: Prisma.AdminPermissionWhereInput | Prisma.AdminPermissionWhereInput[];
    name?: Prisma.StringFilter<"AdminPermission"> | string;
    module?: Prisma.EnumAdminPermissionModuleFilter<"AdminPermission"> | $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionListRelationFilter;
}, "id" | "code">;
export type AdminPermissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
    _count?: Prisma.AdminPermissionCountOrderByAggregateInput;
    _max?: Prisma.AdminPermissionMaxOrderByAggregateInput;
    _min?: Prisma.AdminPermissionMinOrderByAggregateInput;
};
export type AdminPermissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminPermissionScalarWhereWithAggregatesInput | Prisma.AdminPermissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminPermissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminPermissionScalarWhereWithAggregatesInput | Prisma.AdminPermissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdminPermission"> | string;
    code?: Prisma.StringWithAggregatesFilter<"AdminPermission"> | string;
    name?: Prisma.StringWithAggregatesFilter<"AdminPermission"> | string;
    module?: Prisma.EnumAdminPermissionModuleWithAggregatesFilter<"AdminPermission"> | $Enums.AdminPermissionModule;
};
export type AdminPermissionCreateInput = {
    id?: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionCreateNestedManyWithoutPermissionInput;
};
export type AdminPermissionUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionUncheckedCreateNestedManyWithoutPermissionInput;
};
export type AdminPermissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionUpdateManyWithoutPermissionNestedInput;
};
export type AdminPermissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
    roles?: Prisma.AdminRolePermissionUncheckedUpdateManyWithoutPermissionNestedInput;
};
export type AdminPermissionCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
};
export type AdminPermissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
};
export type AdminPermissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
};
export type AdminPermissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
};
export type AdminPermissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
};
export type AdminPermissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    module?: Prisma.SortOrder;
};
export type AdminPermissionScalarRelationFilter = {
    is?: Prisma.AdminPermissionWhereInput;
    isNot?: Prisma.AdminPermissionWhereInput;
};
export type EnumAdminPermissionModuleFieldUpdateOperationsInput = {
    set?: $Enums.AdminPermissionModule;
};
export type AdminPermissionCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.AdminPermissionCreateWithoutRolesInput, Prisma.AdminPermissionUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.AdminPermissionCreateOrConnectWithoutRolesInput;
    connect?: Prisma.AdminPermissionWhereUniqueInput;
};
export type AdminPermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.AdminPermissionCreateWithoutRolesInput, Prisma.AdminPermissionUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.AdminPermissionCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.AdminPermissionUpsertWithoutRolesInput;
    connect?: Prisma.AdminPermissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminPermissionUpdateToOneWithWhereWithoutRolesInput, Prisma.AdminPermissionUpdateWithoutRolesInput>, Prisma.AdminPermissionUncheckedUpdateWithoutRolesInput>;
};
export type AdminPermissionCreateWithoutRolesInput = {
    id?: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
};
export type AdminPermissionUncheckedCreateWithoutRolesInput = {
    id?: string;
    code: string;
    name: string;
    module: $Enums.AdminPermissionModule;
};
export type AdminPermissionCreateOrConnectWithoutRolesInput = {
    where: Prisma.AdminPermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminPermissionCreateWithoutRolesInput, Prisma.AdminPermissionUncheckedCreateWithoutRolesInput>;
};
export type AdminPermissionUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.AdminPermissionUpdateWithoutRolesInput, Prisma.AdminPermissionUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.AdminPermissionCreateWithoutRolesInput, Prisma.AdminPermissionUncheckedCreateWithoutRolesInput>;
    where?: Prisma.AdminPermissionWhereInput;
};
export type AdminPermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.AdminPermissionWhereInput;
    data: Prisma.XOR<Prisma.AdminPermissionUpdateWithoutRolesInput, Prisma.AdminPermissionUncheckedUpdateWithoutRolesInput>;
};
export type AdminPermissionUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
};
export type AdminPermissionUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    module?: Prisma.EnumAdminPermissionModuleFieldUpdateOperationsInput | $Enums.AdminPermissionModule;
};
export type AdminPermissionCountOutputType = {
    roles: number;
};
export type AdminPermissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | AdminPermissionCountOutputTypeCountRolesArgs;
};
export type AdminPermissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminPermissionCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminRolePermissionWhereInput;
};
export type AdminPermissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    module?: boolean;
    roles?: boolean | Prisma.AdminPermission$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminPermissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminPermission"]>;
export type AdminPermissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    module?: boolean;
}, ExtArgs["result"]["adminPermission"]>;
export type AdminPermissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    module?: boolean;
}, ExtArgs["result"]["adminPermission"]>;
export type AdminPermissionSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    module?: boolean;
};
export type AdminPermissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "module", ExtArgs["result"]["adminPermission"]>;
export type AdminPermissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.AdminPermission$rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminPermissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminPermissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AdminPermissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AdminPermissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminPermission";
    objects: {
        roles: Prisma.$AdminRolePermissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        module: $Enums.AdminPermissionModule;
    }, ExtArgs["result"]["adminPermission"]>;
    composites: {};
};
export type AdminPermissionGetPayload<S extends boolean | null | undefined | AdminPermissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload, S>;
export type AdminPermissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminPermissionCountAggregateInputType | true;
};
export interface AdminPermissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminPermission'];
        meta: {
            name: 'AdminPermission';
        };
    };
    findUnique<T extends AdminPermissionFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminPermissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminPermissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminPermissionFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminPermissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminPermissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminPermissionFindManyArgs>(args?: Prisma.SelectSubset<T, AdminPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminPermissionCreateArgs>(args: Prisma.SelectSubset<T, AdminPermissionCreateArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminPermissionCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminPermissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminPermissionDeleteArgs>(args: Prisma.SelectSubset<T, AdminPermissionDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminPermissionUpdateArgs>(args: Prisma.SelectSubset<T, AdminPermissionUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminPermissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminPermissionUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminPermissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminPermissionUpsertArgs>(args: Prisma.SelectSubset<T, AdminPermissionUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminPermissionClient<runtime.Types.Result.GetResult<Prisma.$AdminPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminPermissionCountArgs>(args?: Prisma.Subset<T, AdminPermissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminPermissionCountAggregateOutputType> : number>;
    aggregate<T extends AdminPermissionAggregateArgs>(args: Prisma.Subset<T, AdminPermissionAggregateArgs>): Prisma.PrismaPromise<GetAdminPermissionAggregateType<T>>;
    groupBy<T extends AdminPermissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminPermissionGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminPermissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminPermissionFieldRefs;
}
export interface Prisma__AdminPermissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.AdminPermission$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminPermission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminRolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminPermissionFieldRefs {
    readonly id: Prisma.FieldRef<"AdminPermission", 'String'>;
    readonly code: Prisma.FieldRef<"AdminPermission", 'String'>;
    readonly name: Prisma.FieldRef<"AdminPermission", 'String'>;
    readonly module: Prisma.FieldRef<"AdminPermission", 'AdminPermissionModule'>;
}
export type AdminPermissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where: Prisma.AdminPermissionWhereUniqueInput;
};
export type AdminPermissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where: Prisma.AdminPermissionWhereUniqueInput;
};
export type AdminPermissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where?: Prisma.AdminPermissionWhereInput;
    orderBy?: Prisma.AdminPermissionOrderByWithRelationInput | Prisma.AdminPermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminPermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminPermissionScalarFieldEnum | Prisma.AdminPermissionScalarFieldEnum[];
};
export type AdminPermissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where?: Prisma.AdminPermissionWhereInput;
    orderBy?: Prisma.AdminPermissionOrderByWithRelationInput | Prisma.AdminPermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminPermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminPermissionScalarFieldEnum | Prisma.AdminPermissionScalarFieldEnum[];
};
export type AdminPermissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where?: Prisma.AdminPermissionWhereInput;
    orderBy?: Prisma.AdminPermissionOrderByWithRelationInput | Prisma.AdminPermissionOrderByWithRelationInput[];
    cursor?: Prisma.AdminPermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminPermissionScalarFieldEnum | Prisma.AdminPermissionScalarFieldEnum[];
};
export type AdminPermissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminPermissionCreateInput, Prisma.AdminPermissionUncheckedCreateInput>;
};
export type AdminPermissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminPermissionCreateManyInput | Prisma.AdminPermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminPermissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    data: Prisma.AdminPermissionCreateManyInput | Prisma.AdminPermissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminPermissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminPermissionUpdateInput, Prisma.AdminPermissionUncheckedUpdateInput>;
    where: Prisma.AdminPermissionWhereUniqueInput;
};
export type AdminPermissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminPermissionUpdateManyMutationInput, Prisma.AdminPermissionUncheckedUpdateManyInput>;
    where?: Prisma.AdminPermissionWhereInput;
    limit?: number;
};
export type AdminPermissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminPermissionUpdateManyMutationInput, Prisma.AdminPermissionUncheckedUpdateManyInput>;
    where?: Prisma.AdminPermissionWhereInput;
    limit?: number;
};
export type AdminPermissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where: Prisma.AdminPermissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminPermissionCreateInput, Prisma.AdminPermissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminPermissionUpdateInput, Prisma.AdminPermissionUncheckedUpdateInput>;
};
export type AdminPermissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
    where: Prisma.AdminPermissionWhereUniqueInput;
};
export type AdminPermissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminPermissionWhereInput;
    limit?: number;
};
export type AdminPermission$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AdminPermissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminPermissionSelect<ExtArgs> | null;
    omit?: Prisma.AdminPermissionOmit<ExtArgs> | null;
    include?: Prisma.AdminPermissionInclude<ExtArgs> | null;
};
export {};
