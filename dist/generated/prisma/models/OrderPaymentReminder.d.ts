import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderPaymentReminderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPaymentReminderPayload>;
export type AggregateOrderPaymentReminder = {
    _count: OrderPaymentReminderCountAggregateOutputType | null;
    _min: OrderPaymentReminderMinAggregateOutputType | null;
    _max: OrderPaymentReminderMaxAggregateOutputType | null;
};
export type OrderPaymentReminderMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    sentAt: Date | null;
    type: $Enums.PaymentReminderType | null;
};
export type OrderPaymentReminderMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    sentAt: Date | null;
    type: $Enums.PaymentReminderType | null;
};
export type OrderPaymentReminderCountAggregateOutputType = {
    id: number;
    orderId: number;
    sentAt: number;
    type: number;
    _all: number;
};
export type OrderPaymentReminderMinAggregateInputType = {
    id?: true;
    orderId?: true;
    sentAt?: true;
    type?: true;
};
export type OrderPaymentReminderMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    sentAt?: true;
    type?: true;
};
export type OrderPaymentReminderCountAggregateInputType = {
    id?: true;
    orderId?: true;
    sentAt?: true;
    type?: true;
    _all?: true;
};
export type OrderPaymentReminderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderPaymentReminderWhereInput;
    orderBy?: Prisma.OrderPaymentReminderOrderByWithRelationInput | Prisma.OrderPaymentReminderOrderByWithRelationInput[];
    cursor?: Prisma.OrderPaymentReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderPaymentReminderCountAggregateInputType;
    _min?: OrderPaymentReminderMinAggregateInputType;
    _max?: OrderPaymentReminderMaxAggregateInputType;
};
export type GetOrderPaymentReminderAggregateType<T extends OrderPaymentReminderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderPaymentReminder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderPaymentReminder[P]> : Prisma.GetScalarType<T[P], AggregateOrderPaymentReminder[P]>;
};
export type OrderPaymentReminderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderPaymentReminderWhereInput;
    orderBy?: Prisma.OrderPaymentReminderOrderByWithAggregationInput | Prisma.OrderPaymentReminderOrderByWithAggregationInput[];
    by: Prisma.OrderPaymentReminderScalarFieldEnum[] | Prisma.OrderPaymentReminderScalarFieldEnum;
    having?: Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderPaymentReminderCountAggregateInputType | true;
    _min?: OrderPaymentReminderMinAggregateInputType;
    _max?: OrderPaymentReminderMaxAggregateInputType;
};
export type OrderPaymentReminderGroupByOutputType = {
    id: string;
    orderId: string;
    sentAt: Date;
    type: $Enums.PaymentReminderType;
    _count: OrderPaymentReminderCountAggregateOutputType | null;
    _min: OrderPaymentReminderMinAggregateOutputType | null;
    _max: OrderPaymentReminderMaxAggregateOutputType | null;
};
type GetOrderPaymentReminderGroupByPayload<T extends OrderPaymentReminderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderPaymentReminderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderPaymentReminderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderPaymentReminderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderPaymentReminderGroupByOutputType[P]>;
}>>;
export type OrderPaymentReminderWhereInput = {
    AND?: Prisma.OrderPaymentReminderWhereInput | Prisma.OrderPaymentReminderWhereInput[];
    OR?: Prisma.OrderPaymentReminderWhereInput[];
    NOT?: Prisma.OrderPaymentReminderWhereInput | Prisma.OrderPaymentReminderWhereInput[];
    id?: Prisma.StringFilter<"OrderPaymentReminder"> | string;
    orderId?: Prisma.StringFilter<"OrderPaymentReminder"> | string;
    sentAt?: Prisma.DateTimeFilter<"OrderPaymentReminder"> | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFilter<"OrderPaymentReminder"> | $Enums.PaymentReminderType;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
};
export type OrderPaymentReminderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type OrderPaymentReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderPaymentReminderWhereInput | Prisma.OrderPaymentReminderWhereInput[];
    OR?: Prisma.OrderPaymentReminderWhereInput[];
    NOT?: Prisma.OrderPaymentReminderWhereInput | Prisma.OrderPaymentReminderWhereInput[];
    orderId?: Prisma.StringFilter<"OrderPaymentReminder"> | string;
    sentAt?: Prisma.DateTimeFilter<"OrderPaymentReminder"> | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFilter<"OrderPaymentReminder"> | $Enums.PaymentReminderType;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
}, "id">;
export type OrderPaymentReminderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.OrderPaymentReminderCountOrderByAggregateInput;
    _max?: Prisma.OrderPaymentReminderMaxOrderByAggregateInput;
    _min?: Prisma.OrderPaymentReminderMinOrderByAggregateInput;
};
export type OrderPaymentReminderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput | Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput | Prisma.OrderPaymentReminderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderPaymentReminder"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"OrderPaymentReminder"> | string;
    sentAt?: Prisma.DateTimeWithAggregatesFilter<"OrderPaymentReminder"> | Date | string;
    type?: Prisma.EnumPaymentReminderTypeWithAggregatesFilter<"OrderPaymentReminder"> | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderCreateInput = {
    id?: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
    order: Prisma.OrderCreateNestedOneWithoutPaymentRemindersInput;
};
export type OrderPaymentReminderUncheckedCreateInput = {
    id?: string;
    orderId: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
    order?: Prisma.OrderUpdateOneRequiredWithoutPaymentRemindersNestedInput;
};
export type OrderPaymentReminderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderCreateManyInput = {
    id?: string;
    orderId: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderListRelationFilter = {
    every?: Prisma.OrderPaymentReminderWhereInput;
    some?: Prisma.OrderPaymentReminderWhereInput;
    none?: Prisma.OrderPaymentReminderWhereInput;
};
export type OrderPaymentReminderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderPaymentReminderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type OrderPaymentReminderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type OrderPaymentReminderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type OrderPaymentReminderCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput> | Prisma.OrderPaymentReminderCreateWithoutOrderInput[] | Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput | Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderPaymentReminderCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
};
export type OrderPaymentReminderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput> | Prisma.OrderPaymentReminderCreateWithoutOrderInput[] | Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput | Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.OrderPaymentReminderCreateManyOrderInputEnvelope;
    connect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
};
export type OrderPaymentReminderUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput> | Prisma.OrderPaymentReminderCreateWithoutOrderInput[] | Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput | Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderPaymentReminderUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderPaymentReminderUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderPaymentReminderCreateManyOrderInputEnvelope;
    set?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    disconnect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    delete?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    connect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    update?: Prisma.OrderPaymentReminderUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderPaymentReminderUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderPaymentReminderUpdateManyWithWhereWithoutOrderInput | Prisma.OrderPaymentReminderUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderPaymentReminderScalarWhereInput | Prisma.OrderPaymentReminderScalarWhereInput[];
};
export type OrderPaymentReminderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput> | Prisma.OrderPaymentReminderCreateWithoutOrderInput[] | Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput | Prisma.OrderPaymentReminderCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.OrderPaymentReminderUpsertWithWhereUniqueWithoutOrderInput | Prisma.OrderPaymentReminderUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.OrderPaymentReminderCreateManyOrderInputEnvelope;
    set?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    disconnect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    delete?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    connect?: Prisma.OrderPaymentReminderWhereUniqueInput | Prisma.OrderPaymentReminderWhereUniqueInput[];
    update?: Prisma.OrderPaymentReminderUpdateWithWhereUniqueWithoutOrderInput | Prisma.OrderPaymentReminderUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.OrderPaymentReminderUpdateManyWithWhereWithoutOrderInput | Prisma.OrderPaymentReminderUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.OrderPaymentReminderScalarWhereInput | Prisma.OrderPaymentReminderScalarWhereInput[];
};
export type EnumPaymentReminderTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderCreateWithoutOrderInput = {
    id?: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUncheckedCreateWithoutOrderInput = {
    id?: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderCreateOrConnectWithoutOrderInput = {
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput>;
};
export type OrderPaymentReminderCreateManyOrderInputEnvelope = {
    data: Prisma.OrderPaymentReminderCreateManyOrderInput | Prisma.OrderPaymentReminderCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type OrderPaymentReminderUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderPaymentReminderUpdateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OrderPaymentReminderCreateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedCreateWithoutOrderInput>;
};
export type OrderPaymentReminderUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderPaymentReminderUpdateWithoutOrderInput, Prisma.OrderPaymentReminderUncheckedUpdateWithoutOrderInput>;
};
export type OrderPaymentReminderUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.OrderPaymentReminderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderPaymentReminderUpdateManyMutationInput, Prisma.OrderPaymentReminderUncheckedUpdateManyWithoutOrderInput>;
};
export type OrderPaymentReminderScalarWhereInput = {
    AND?: Prisma.OrderPaymentReminderScalarWhereInput | Prisma.OrderPaymentReminderScalarWhereInput[];
    OR?: Prisma.OrderPaymentReminderScalarWhereInput[];
    NOT?: Prisma.OrderPaymentReminderScalarWhereInput | Prisma.OrderPaymentReminderScalarWhereInput[];
    id?: Prisma.StringFilter<"OrderPaymentReminder"> | string;
    orderId?: Prisma.StringFilter<"OrderPaymentReminder"> | string;
    sentAt?: Prisma.DateTimeFilter<"OrderPaymentReminder"> | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFilter<"OrderPaymentReminder"> | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderCreateManyOrderInput = {
    id?: string;
    sentAt?: Date | string;
    type: $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sentAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    type?: Prisma.EnumPaymentReminderTypeFieldUpdateOperationsInput | $Enums.PaymentReminderType;
};
export type OrderPaymentReminderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    sentAt?: boolean;
    type?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderPaymentReminder"]>;
export type OrderPaymentReminderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    sentAt?: boolean;
    type?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderPaymentReminder"]>;
export type OrderPaymentReminderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    sentAt?: boolean;
    type?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orderPaymentReminder"]>;
export type OrderPaymentReminderSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    sentAt?: boolean;
    type?: boolean;
};
export type OrderPaymentReminderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "sentAt" | "type", ExtArgs["result"]["orderPaymentReminder"]>;
export type OrderPaymentReminderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderPaymentReminderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type OrderPaymentReminderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
};
export type $OrderPaymentReminderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderPaymentReminder";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        sentAt: Date;
        type: $Enums.PaymentReminderType;
    }, ExtArgs["result"]["orderPaymentReminder"]>;
    composites: {};
};
export type OrderPaymentReminderGetPayload<S extends boolean | null | undefined | OrderPaymentReminderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload, S>;
export type OrderPaymentReminderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderPaymentReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderPaymentReminderCountAggregateInputType | true;
};
export interface OrderPaymentReminderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderPaymentReminder'];
        meta: {
            name: 'OrderPaymentReminder';
        };
    };
    findUnique<T extends OrderPaymentReminderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderPaymentReminderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderPaymentReminderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderPaymentReminderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderPaymentReminderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderPaymentReminderCreateArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderPaymentReminderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderPaymentReminderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderPaymentReminderDeleteArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderPaymentReminderUpdateArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderPaymentReminderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderPaymentReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderPaymentReminderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderPaymentReminderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderPaymentReminderUpsertArgs>(args: Prisma.SelectSubset<T, OrderPaymentReminderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderPaymentReminderClient<runtime.Types.Result.GetResult<Prisma.$OrderPaymentReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderPaymentReminderCountArgs>(args?: Prisma.Subset<T, OrderPaymentReminderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderPaymentReminderCountAggregateOutputType> : number>;
    aggregate<T extends OrderPaymentReminderAggregateArgs>(args: Prisma.Subset<T, OrderPaymentReminderAggregateArgs>): Prisma.PrismaPromise<GetOrderPaymentReminderAggregateType<T>>;
    groupBy<T extends OrderPaymentReminderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderPaymentReminderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderPaymentReminderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderPaymentReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderPaymentReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderPaymentReminderFieldRefs;
}
export interface Prisma__OrderPaymentReminderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderPaymentReminderFieldRefs {
    readonly id: Prisma.FieldRef<"OrderPaymentReminder", 'String'>;
    readonly orderId: Prisma.FieldRef<"OrderPaymentReminder", 'String'>;
    readonly sentAt: Prisma.FieldRef<"OrderPaymentReminder", 'DateTime'>;
    readonly type: Prisma.FieldRef<"OrderPaymentReminder", 'PaymentReminderType'>;
}
export type OrderPaymentReminderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
};
export type OrderPaymentReminderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
};
export type OrderPaymentReminderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where?: Prisma.OrderPaymentReminderWhereInput;
    orderBy?: Prisma.OrderPaymentReminderOrderByWithRelationInput | Prisma.OrderPaymentReminderOrderByWithRelationInput[];
    cursor?: Prisma.OrderPaymentReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderPaymentReminderScalarFieldEnum | Prisma.OrderPaymentReminderScalarFieldEnum[];
};
export type OrderPaymentReminderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where?: Prisma.OrderPaymentReminderWhereInput;
    orderBy?: Prisma.OrderPaymentReminderOrderByWithRelationInput | Prisma.OrderPaymentReminderOrderByWithRelationInput[];
    cursor?: Prisma.OrderPaymentReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderPaymentReminderScalarFieldEnum | Prisma.OrderPaymentReminderScalarFieldEnum[];
};
export type OrderPaymentReminderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where?: Prisma.OrderPaymentReminderWhereInput;
    orderBy?: Prisma.OrderPaymentReminderOrderByWithRelationInput | Prisma.OrderPaymentReminderOrderByWithRelationInput[];
    cursor?: Prisma.OrderPaymentReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderPaymentReminderScalarFieldEnum | Prisma.OrderPaymentReminderScalarFieldEnum[];
};
export type OrderPaymentReminderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderPaymentReminderCreateInput, Prisma.OrderPaymentReminderUncheckedCreateInput>;
};
export type OrderPaymentReminderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderPaymentReminderCreateManyInput | Prisma.OrderPaymentReminderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderPaymentReminderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    data: Prisma.OrderPaymentReminderCreateManyInput | Prisma.OrderPaymentReminderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderPaymentReminderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderPaymentReminderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderPaymentReminderUpdateInput, Prisma.OrderPaymentReminderUncheckedUpdateInput>;
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
};
export type OrderPaymentReminderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderPaymentReminderUpdateManyMutationInput, Prisma.OrderPaymentReminderUncheckedUpdateManyInput>;
    where?: Prisma.OrderPaymentReminderWhereInput;
    limit?: number;
};
export type OrderPaymentReminderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderPaymentReminderUpdateManyMutationInput, Prisma.OrderPaymentReminderUncheckedUpdateManyInput>;
    where?: Prisma.OrderPaymentReminderWhereInput;
    limit?: number;
    include?: Prisma.OrderPaymentReminderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderPaymentReminderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderPaymentReminderCreateInput, Prisma.OrderPaymentReminderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderPaymentReminderUpdateInput, Prisma.OrderPaymentReminderUncheckedUpdateInput>;
};
export type OrderPaymentReminderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
    where: Prisma.OrderPaymentReminderWhereUniqueInput;
};
export type OrderPaymentReminderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderPaymentReminderWhereInput;
    limit?: number;
};
export type OrderPaymentReminderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderPaymentReminderSelect<ExtArgs> | null;
    omit?: Prisma.OrderPaymentReminderOmit<ExtArgs> | null;
    include?: Prisma.OrderPaymentReminderInclude<ExtArgs> | null;
};
export {};
