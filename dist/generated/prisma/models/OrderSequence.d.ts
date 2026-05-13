import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderSequenceModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderSequencePayload>;
export type AggregateOrderSequence = {
    _count: OrderSequenceCountAggregateOutputType | null;
    _avg: OrderSequenceAvgAggregateOutputType | null;
    _sum: OrderSequenceSumAggregateOutputType | null;
    _min: OrderSequenceMinAggregateOutputType | null;
    _max: OrderSequenceMaxAggregateOutputType | null;
};
export type OrderSequenceAvgAggregateOutputType = {
    lastSeq: number | null;
};
export type OrderSequenceSumAggregateOutputType = {
    lastSeq: number | null;
};
export type OrderSequenceMinAggregateOutputType = {
    id: string | null;
    lastSeq: number | null;
};
export type OrderSequenceMaxAggregateOutputType = {
    id: string | null;
    lastSeq: number | null;
};
export type OrderSequenceCountAggregateOutputType = {
    id: number;
    lastSeq: number;
    _all: number;
};
export type OrderSequenceAvgAggregateInputType = {
    lastSeq?: true;
};
export type OrderSequenceSumAggregateInputType = {
    lastSeq?: true;
};
export type OrderSequenceMinAggregateInputType = {
    id?: true;
    lastSeq?: true;
};
export type OrderSequenceMaxAggregateInputType = {
    id?: true;
    lastSeq?: true;
};
export type OrderSequenceCountAggregateInputType = {
    id?: true;
    lastSeq?: true;
    _all?: true;
};
export type OrderSequenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderSequenceWhereInput;
    orderBy?: Prisma.OrderSequenceOrderByWithRelationInput | Prisma.OrderSequenceOrderByWithRelationInput[];
    cursor?: Prisma.OrderSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderSequenceCountAggregateInputType;
    _avg?: OrderSequenceAvgAggregateInputType;
    _sum?: OrderSequenceSumAggregateInputType;
    _min?: OrderSequenceMinAggregateInputType;
    _max?: OrderSequenceMaxAggregateInputType;
};
export type GetOrderSequenceAggregateType<T extends OrderSequenceAggregateArgs> = {
    [P in keyof T & keyof AggregateOrderSequence]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrderSequence[P]> : Prisma.GetScalarType<T[P], AggregateOrderSequence[P]>;
};
export type OrderSequenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderSequenceWhereInput;
    orderBy?: Prisma.OrderSequenceOrderByWithAggregationInput | Prisma.OrderSequenceOrderByWithAggregationInput[];
    by: Prisma.OrderSequenceScalarFieldEnum[] | Prisma.OrderSequenceScalarFieldEnum;
    having?: Prisma.OrderSequenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderSequenceCountAggregateInputType | true;
    _avg?: OrderSequenceAvgAggregateInputType;
    _sum?: OrderSequenceSumAggregateInputType;
    _min?: OrderSequenceMinAggregateInputType;
    _max?: OrderSequenceMaxAggregateInputType;
};
export type OrderSequenceGroupByOutputType = {
    id: string;
    lastSeq: number;
    _count: OrderSequenceCountAggregateOutputType | null;
    _avg: OrderSequenceAvgAggregateOutputType | null;
    _sum: OrderSequenceSumAggregateOutputType | null;
    _min: OrderSequenceMinAggregateOutputType | null;
    _max: OrderSequenceMaxAggregateOutputType | null;
};
type GetOrderSequenceGroupByPayload<T extends OrderSequenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderSequenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderSequenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderSequenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderSequenceGroupByOutputType[P]>;
}>>;
export type OrderSequenceWhereInput = {
    AND?: Prisma.OrderSequenceWhereInput | Prisma.OrderSequenceWhereInput[];
    OR?: Prisma.OrderSequenceWhereInput[];
    NOT?: Prisma.OrderSequenceWhereInput | Prisma.OrderSequenceWhereInput[];
    id?: Prisma.StringFilter<"OrderSequence"> | string;
    lastSeq?: Prisma.IntFilter<"OrderSequence"> | number;
};
export type OrderSequenceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderSequenceWhereInput | Prisma.OrderSequenceWhereInput[];
    OR?: Prisma.OrderSequenceWhereInput[];
    NOT?: Prisma.OrderSequenceWhereInput | Prisma.OrderSequenceWhereInput[];
    lastSeq?: Prisma.IntFilter<"OrderSequence"> | number;
}, "id">;
export type OrderSequenceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
    _count?: Prisma.OrderSequenceCountOrderByAggregateInput;
    _avg?: Prisma.OrderSequenceAvgOrderByAggregateInput;
    _max?: Prisma.OrderSequenceMaxOrderByAggregateInput;
    _min?: Prisma.OrderSequenceMinOrderByAggregateInput;
    _sum?: Prisma.OrderSequenceSumOrderByAggregateInput;
};
export type OrderSequenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderSequenceScalarWhereWithAggregatesInput | Prisma.OrderSequenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderSequenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderSequenceScalarWhereWithAggregatesInput | Prisma.OrderSequenceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OrderSequence"> | string;
    lastSeq?: Prisma.IntWithAggregatesFilter<"OrderSequence"> | number;
};
export type OrderSequenceCreateInput = {
    id?: string;
    lastSeq?: number;
};
export type OrderSequenceUncheckedCreateInput = {
    id?: string;
    lastSeq?: number;
};
export type OrderSequenceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderSequenceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderSequenceCreateManyInput = {
    id?: string;
    lastSeq?: number;
};
export type OrderSequenceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderSequenceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type OrderSequenceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceAvgOrderByAggregateInput = {
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceSumOrderByAggregateInput = {
    lastSeq?: Prisma.SortOrder;
};
export type OrderSequenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["orderSequence"]>;
export type OrderSequenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["orderSequence"]>;
export type OrderSequenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["orderSequence"]>;
export type OrderSequenceSelectScalar = {
    id?: boolean;
    lastSeq?: boolean;
};
export type OrderSequenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lastSeq", ExtArgs["result"]["orderSequence"]>;
export type $OrderSequencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrderSequence";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lastSeq: number;
    }, ExtArgs["result"]["orderSequence"]>;
    composites: {};
};
export type OrderSequenceGetPayload<S extends boolean | null | undefined | OrderSequenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload, S>;
export type OrderSequenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderSequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderSequenceCountAggregateInputType | true;
};
export interface OrderSequenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrderSequence'];
        meta: {
            name: 'OrderSequence';
        };
    };
    findUnique<T extends OrderSequenceFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderSequenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderSequenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderSequenceFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderSequenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderSequenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderSequenceFindManyArgs>(args?: Prisma.SelectSubset<T, OrderSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderSequenceCreateArgs>(args: Prisma.SelectSubset<T, OrderSequenceCreateArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderSequenceCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderSequenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderSequenceDeleteArgs>(args: Prisma.SelectSubset<T, OrderSequenceDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderSequenceUpdateArgs>(args: Prisma.SelectSubset<T, OrderSequenceUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderSequenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderSequenceUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderSequenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderSequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderSequenceUpsertArgs>(args: Prisma.SelectSubset<T, OrderSequenceUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderSequenceClient<runtime.Types.Result.GetResult<Prisma.$OrderSequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderSequenceCountArgs>(args?: Prisma.Subset<T, OrderSequenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderSequenceCountAggregateOutputType> : number>;
    aggregate<T extends OrderSequenceAggregateArgs>(args: Prisma.Subset<T, OrderSequenceAggregateArgs>): Prisma.PrismaPromise<GetOrderSequenceAggregateType<T>>;
    groupBy<T extends OrderSequenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderSequenceGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderSequenceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderSequenceFieldRefs;
}
export interface Prisma__OrderSequenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderSequenceFieldRefs {
    readonly id: Prisma.FieldRef<"OrderSequence", 'String'>;
    readonly lastSeq: Prisma.FieldRef<"OrderSequence", 'Int'>;
}
export type OrderSequenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where: Prisma.OrderSequenceWhereUniqueInput;
};
export type OrderSequenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where: Prisma.OrderSequenceWhereUniqueInput;
};
export type OrderSequenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where?: Prisma.OrderSequenceWhereInput;
    orderBy?: Prisma.OrderSequenceOrderByWithRelationInput | Prisma.OrderSequenceOrderByWithRelationInput[];
    cursor?: Prisma.OrderSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderSequenceScalarFieldEnum | Prisma.OrderSequenceScalarFieldEnum[];
};
export type OrderSequenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where?: Prisma.OrderSequenceWhereInput;
    orderBy?: Prisma.OrderSequenceOrderByWithRelationInput | Prisma.OrderSequenceOrderByWithRelationInput[];
    cursor?: Prisma.OrderSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderSequenceScalarFieldEnum | Prisma.OrderSequenceScalarFieldEnum[];
};
export type OrderSequenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where?: Prisma.OrderSequenceWhereInput;
    orderBy?: Prisma.OrderSequenceOrderByWithRelationInput | Prisma.OrderSequenceOrderByWithRelationInput[];
    cursor?: Prisma.OrderSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderSequenceScalarFieldEnum | Prisma.OrderSequenceScalarFieldEnum[];
};
export type OrderSequenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.OrderSequenceCreateInput, Prisma.OrderSequenceUncheckedCreateInput>;
};
export type OrderSequenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderSequenceCreateManyInput | Prisma.OrderSequenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderSequenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    data: Prisma.OrderSequenceCreateManyInput | Prisma.OrderSequenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderSequenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderSequenceUpdateInput, Prisma.OrderSequenceUncheckedUpdateInput>;
    where: Prisma.OrderSequenceWhereUniqueInput;
};
export type OrderSequenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderSequenceUpdateManyMutationInput, Prisma.OrderSequenceUncheckedUpdateManyInput>;
    where?: Prisma.OrderSequenceWhereInput;
    limit?: number;
};
export type OrderSequenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderSequenceUpdateManyMutationInput, Prisma.OrderSequenceUncheckedUpdateManyInput>;
    where?: Prisma.OrderSequenceWhereInput;
    limit?: number;
};
export type OrderSequenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where: Prisma.OrderSequenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderSequenceCreateInput, Prisma.OrderSequenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderSequenceUpdateInput, Prisma.OrderSequenceUncheckedUpdateInput>;
};
export type OrderSequenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
    where: Prisma.OrderSequenceWhereUniqueInput;
};
export type OrderSequenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderSequenceWhereInput;
    limit?: number;
};
export type OrderSequenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSequenceSelect<ExtArgs> | null;
    omit?: Prisma.OrderSequenceOmit<ExtArgs> | null;
};
export {};
