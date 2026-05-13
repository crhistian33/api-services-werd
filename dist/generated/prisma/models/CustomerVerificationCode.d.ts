import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerVerificationCodeModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerVerificationCodePayload>;
export type AggregateCustomerVerificationCode = {
    _count: CustomerVerificationCodeCountAggregateOutputType | null;
    _min: CustomerVerificationCodeMinAggregateOutputType | null;
    _max: CustomerVerificationCodeMaxAggregateOutputType | null;
};
export type CustomerVerificationCodeMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    email: string | null;
    expiresAt: Date | null;
    customerId: string | null;
    createdAt: Date | null;
};
export type CustomerVerificationCodeMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    email: string | null;
    expiresAt: Date | null;
    customerId: string | null;
    createdAt: Date | null;
};
export type CustomerVerificationCodeCountAggregateOutputType = {
    id: number;
    code: number;
    email: number;
    expiresAt: number;
    customerId: number;
    createdAt: number;
    _all: number;
};
export type CustomerVerificationCodeMinAggregateInputType = {
    id?: true;
    code?: true;
    email?: true;
    expiresAt?: true;
    customerId?: true;
    createdAt?: true;
};
export type CustomerVerificationCodeMaxAggregateInputType = {
    id?: true;
    code?: true;
    email?: true;
    expiresAt?: true;
    customerId?: true;
    createdAt?: true;
};
export type CustomerVerificationCodeCountAggregateInputType = {
    id?: true;
    code?: true;
    email?: true;
    expiresAt?: true;
    customerId?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerVerificationCodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerVerificationCodeWhereInput;
    orderBy?: Prisma.CustomerVerificationCodeOrderByWithRelationInput | Prisma.CustomerVerificationCodeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerVerificationCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerVerificationCodeCountAggregateInputType;
    _min?: CustomerVerificationCodeMinAggregateInputType;
    _max?: CustomerVerificationCodeMaxAggregateInputType;
};
export type GetCustomerVerificationCodeAggregateType<T extends CustomerVerificationCodeAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerVerificationCode]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerVerificationCode[P]> : Prisma.GetScalarType<T[P], AggregateCustomerVerificationCode[P]>;
};
export type CustomerVerificationCodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerVerificationCodeWhereInput;
    orderBy?: Prisma.CustomerVerificationCodeOrderByWithAggregationInput | Prisma.CustomerVerificationCodeOrderByWithAggregationInput[];
    by: Prisma.CustomerVerificationCodeScalarFieldEnum[] | Prisma.CustomerVerificationCodeScalarFieldEnum;
    having?: Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerVerificationCodeCountAggregateInputType | true;
    _min?: CustomerVerificationCodeMinAggregateInputType;
    _max?: CustomerVerificationCodeMaxAggregateInputType;
};
export type CustomerVerificationCodeGroupByOutputType = {
    id: string;
    code: string;
    email: string;
    expiresAt: Date;
    customerId: string;
    createdAt: Date;
    _count: CustomerVerificationCodeCountAggregateOutputType | null;
    _min: CustomerVerificationCodeMinAggregateOutputType | null;
    _max: CustomerVerificationCodeMaxAggregateOutputType | null;
};
type GetCustomerVerificationCodeGroupByPayload<T extends CustomerVerificationCodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerVerificationCodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerVerificationCodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerVerificationCodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerVerificationCodeGroupByOutputType[P]>;
}>>;
export type CustomerVerificationCodeWhereInput = {
    AND?: Prisma.CustomerVerificationCodeWhereInput | Prisma.CustomerVerificationCodeWhereInput[];
    OR?: Prisma.CustomerVerificationCodeWhereInput[];
    NOT?: Prisma.CustomerVerificationCodeWhereInput | Prisma.CustomerVerificationCodeWhereInput[];
    id?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    code?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    email?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
    customerId?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    createdAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type CustomerVerificationCodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CustomerVerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CustomerVerificationCodeWhereInput | Prisma.CustomerVerificationCodeWhereInput[];
    OR?: Prisma.CustomerVerificationCodeWhereInput[];
    NOT?: Prisma.CustomerVerificationCodeWhereInput | Prisma.CustomerVerificationCodeWhereInput[];
    code?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    email?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
    customerId?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    createdAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id">;
export type CustomerVerificationCodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerVerificationCodeCountOrderByAggregateInput;
    _max?: Prisma.CustomerVerificationCodeMaxOrderByAggregateInput;
    _min?: Prisma.CustomerVerificationCodeMinOrderByAggregateInput;
};
export type CustomerVerificationCodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput | Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput | Prisma.CustomerVerificationCodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustomerVerificationCode"> | string;
    code?: Prisma.StringWithAggregatesFilter<"CustomerVerificationCode"> | string;
    email?: Prisma.StringWithAggregatesFilter<"CustomerVerificationCode"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerVerificationCode"> | Date | string;
    customerId?: Prisma.StringWithAggregatesFilter<"CustomerVerificationCode"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerVerificationCode"> | Date | string;
};
export type CustomerVerificationCodeCreateInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutVerificationCodesInput;
};
export type CustomerVerificationCodeUncheckedCreateInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    customerId: string;
    createdAt?: Date | string;
};
export type CustomerVerificationCodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutVerificationCodesNestedInput;
};
export type CustomerVerificationCodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeCreateManyInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    customerId: string;
    createdAt?: Date | string;
};
export type CustomerVerificationCodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeListRelationFilter = {
    every?: Prisma.CustomerVerificationCodeWhereInput;
    some?: Prisma.CustomerVerificationCodeWhereInput;
    none?: Prisma.CustomerVerificationCodeWhereInput;
};
export type CustomerVerificationCodeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerVerificationCodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerVerificationCodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerVerificationCodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerVerificationCodeCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerVerificationCodeCreateWithoutCustomerInput[] | Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput | Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerVerificationCodeCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
};
export type CustomerVerificationCodeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerVerificationCodeCreateWithoutCustomerInput[] | Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput | Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerVerificationCodeCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
};
export type CustomerVerificationCodeUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerVerificationCodeCreateWithoutCustomerInput[] | Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput | Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerVerificationCodeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerVerificationCodeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerVerificationCodeCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    disconnect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    delete?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    connect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    update?: Prisma.CustomerVerificationCodeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerVerificationCodeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerVerificationCodeUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerVerificationCodeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerVerificationCodeScalarWhereInput | Prisma.CustomerVerificationCodeScalarWhereInput[];
};
export type CustomerVerificationCodeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput> | Prisma.CustomerVerificationCodeCreateWithoutCustomerInput[] | Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput | Prisma.CustomerVerificationCodeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerVerificationCodeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerVerificationCodeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerVerificationCodeCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    disconnect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    delete?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    connect?: Prisma.CustomerVerificationCodeWhereUniqueInput | Prisma.CustomerVerificationCodeWhereUniqueInput[];
    update?: Prisma.CustomerVerificationCodeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerVerificationCodeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerVerificationCodeUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerVerificationCodeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerVerificationCodeScalarWhereInput | Prisma.CustomerVerificationCodeScalarWhereInput[];
};
export type CustomerVerificationCodeCreateWithoutCustomerInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type CustomerVerificationCodeUncheckedCreateWithoutCustomerInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type CustomerVerificationCodeCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput>;
};
export type CustomerVerificationCodeCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerVerificationCodeCreateManyCustomerInput | Prisma.CustomerVerificationCodeCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerVerificationCodeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerVerificationCodeCreateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedCreateWithoutCustomerInput>;
};
export type CustomerVerificationCodeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateWithoutCustomerInput, Prisma.CustomerVerificationCodeUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerVerificationCodeUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerVerificationCodeScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateManyMutationInput, Prisma.CustomerVerificationCodeUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerVerificationCodeScalarWhereInput = {
    AND?: Prisma.CustomerVerificationCodeScalarWhereInput | Prisma.CustomerVerificationCodeScalarWhereInput[];
    OR?: Prisma.CustomerVerificationCodeScalarWhereInput[];
    NOT?: Prisma.CustomerVerificationCodeScalarWhereInput | Prisma.CustomerVerificationCodeScalarWhereInput[];
    id?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    code?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    email?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    expiresAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
    customerId?: Prisma.StringFilter<"CustomerVerificationCode"> | string;
    createdAt?: Prisma.DateTimeFilter<"CustomerVerificationCode"> | Date | string;
};
export type CustomerVerificationCodeCreateManyCustomerInput = {
    id?: string;
    code: string;
    email: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
};
export type CustomerVerificationCodeUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerVerificationCodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    email?: boolean;
    expiresAt?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerVerificationCode"]>;
export type CustomerVerificationCodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    email?: boolean;
    expiresAt?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerVerificationCode"]>;
export type CustomerVerificationCodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    email?: boolean;
    expiresAt?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerVerificationCode"]>;
export type CustomerVerificationCodeSelectScalar = {
    id?: boolean;
    code?: boolean;
    email?: boolean;
    expiresAt?: boolean;
    customerId?: boolean;
    createdAt?: boolean;
};
export type CustomerVerificationCodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "email" | "expiresAt" | "customerId" | "createdAt", ExtArgs["result"]["customerVerificationCode"]>;
export type CustomerVerificationCodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerVerificationCodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerVerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CustomerVerificationCodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerVerificationCode";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        email: string;
        expiresAt: Date;
        customerId: string;
        createdAt: Date;
    }, ExtArgs["result"]["customerVerificationCode"]>;
    composites: {};
};
export type CustomerVerificationCodeGetPayload<S extends boolean | null | undefined | CustomerVerificationCodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload, S>;
export type CustomerVerificationCodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerVerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerVerificationCodeCountAggregateInputType | true;
};
export interface CustomerVerificationCodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerVerificationCode'];
        meta: {
            name: 'CustomerVerificationCode';
        };
    };
    findUnique<T extends CustomerVerificationCodeFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerVerificationCodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerVerificationCodeFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerVerificationCodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerVerificationCodeFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerVerificationCodeCreateArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerVerificationCodeCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerVerificationCodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerVerificationCodeDeleteArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerVerificationCodeUpdateArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerVerificationCodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerVerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerVerificationCodeUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerVerificationCodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerVerificationCodeUpsertArgs>(args: Prisma.SelectSubset<T, CustomerVerificationCodeUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerVerificationCodeClient<runtime.Types.Result.GetResult<Prisma.$CustomerVerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerVerificationCodeCountArgs>(args?: Prisma.Subset<T, CustomerVerificationCodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerVerificationCodeCountAggregateOutputType> : number>;
    aggregate<T extends CustomerVerificationCodeAggregateArgs>(args: Prisma.Subset<T, CustomerVerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetCustomerVerificationCodeAggregateType<T>>;
    groupBy<T extends CustomerVerificationCodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerVerificationCodeGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerVerificationCodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerVerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerVerificationCodeFieldRefs;
}
export interface Prisma__CustomerVerificationCodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerVerificationCodeFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerVerificationCode", 'String'>;
    readonly code: Prisma.FieldRef<"CustomerVerificationCode", 'String'>;
    readonly email: Prisma.FieldRef<"CustomerVerificationCode", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"CustomerVerificationCode", 'DateTime'>;
    readonly customerId: Prisma.FieldRef<"CustomerVerificationCode", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CustomerVerificationCode", 'DateTime'>;
}
export type CustomerVerificationCodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
};
export type CustomerVerificationCodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
};
export type CustomerVerificationCodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where?: Prisma.CustomerVerificationCodeWhereInput;
    orderBy?: Prisma.CustomerVerificationCodeOrderByWithRelationInput | Prisma.CustomerVerificationCodeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerVerificationCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerVerificationCodeScalarFieldEnum | Prisma.CustomerVerificationCodeScalarFieldEnum[];
};
export type CustomerVerificationCodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where?: Prisma.CustomerVerificationCodeWhereInput;
    orderBy?: Prisma.CustomerVerificationCodeOrderByWithRelationInput | Prisma.CustomerVerificationCodeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerVerificationCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerVerificationCodeScalarFieldEnum | Prisma.CustomerVerificationCodeScalarFieldEnum[];
};
export type CustomerVerificationCodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where?: Prisma.CustomerVerificationCodeWhereInput;
    orderBy?: Prisma.CustomerVerificationCodeOrderByWithRelationInput | Prisma.CustomerVerificationCodeOrderByWithRelationInput[];
    cursor?: Prisma.CustomerVerificationCodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerVerificationCodeScalarFieldEnum | Prisma.CustomerVerificationCodeScalarFieldEnum[];
};
export type CustomerVerificationCodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerVerificationCodeCreateInput, Prisma.CustomerVerificationCodeUncheckedCreateInput>;
};
export type CustomerVerificationCodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerVerificationCodeCreateManyInput | Prisma.CustomerVerificationCodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerVerificationCodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    data: Prisma.CustomerVerificationCodeCreateManyInput | Prisma.CustomerVerificationCodeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerVerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerVerificationCodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateInput, Prisma.CustomerVerificationCodeUncheckedUpdateInput>;
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
};
export type CustomerVerificationCodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateManyMutationInput, Prisma.CustomerVerificationCodeUncheckedUpdateManyInput>;
    where?: Prisma.CustomerVerificationCodeWhereInput;
    limit?: number;
};
export type CustomerVerificationCodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateManyMutationInput, Prisma.CustomerVerificationCodeUncheckedUpdateManyInput>;
    where?: Prisma.CustomerVerificationCodeWhereInput;
    limit?: number;
    include?: Prisma.CustomerVerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerVerificationCodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerVerificationCodeCreateInput, Prisma.CustomerVerificationCodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerVerificationCodeUpdateInput, Prisma.CustomerVerificationCodeUncheckedUpdateInput>;
};
export type CustomerVerificationCodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
    where: Prisma.CustomerVerificationCodeWhereUniqueInput;
};
export type CustomerVerificationCodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerVerificationCodeWhereInput;
    limit?: number;
};
export type CustomerVerificationCodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerVerificationCodeSelect<ExtArgs> | null;
    omit?: Prisma.CustomerVerificationCodeOmit<ExtArgs> | null;
    include?: Prisma.CustomerVerificationCodeInclude<ExtArgs> | null;
};
export {};
