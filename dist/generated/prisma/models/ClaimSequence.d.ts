import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClaimSequenceModel = runtime.Types.Result.DefaultSelection<Prisma.$ClaimSequencePayload>;
export type AggregateClaimSequence = {
    _count: ClaimSequenceCountAggregateOutputType | null;
    _avg: ClaimSequenceAvgAggregateOutputType | null;
    _sum: ClaimSequenceSumAggregateOutputType | null;
    _min: ClaimSequenceMinAggregateOutputType | null;
    _max: ClaimSequenceMaxAggregateOutputType | null;
};
export type ClaimSequenceAvgAggregateOutputType = {
    lastSeq: number | null;
};
export type ClaimSequenceSumAggregateOutputType = {
    lastSeq: number | null;
};
export type ClaimSequenceMinAggregateOutputType = {
    id: string | null;
    lastSeq: number | null;
};
export type ClaimSequenceMaxAggregateOutputType = {
    id: string | null;
    lastSeq: number | null;
};
export type ClaimSequenceCountAggregateOutputType = {
    id: number;
    lastSeq: number;
    _all: number;
};
export type ClaimSequenceAvgAggregateInputType = {
    lastSeq?: true;
};
export type ClaimSequenceSumAggregateInputType = {
    lastSeq?: true;
};
export type ClaimSequenceMinAggregateInputType = {
    id?: true;
    lastSeq?: true;
};
export type ClaimSequenceMaxAggregateInputType = {
    id?: true;
    lastSeq?: true;
};
export type ClaimSequenceCountAggregateInputType = {
    id?: true;
    lastSeq?: true;
    _all?: true;
};
export type ClaimSequenceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClaimSequenceWhereInput;
    orderBy?: Prisma.ClaimSequenceOrderByWithRelationInput | Prisma.ClaimSequenceOrderByWithRelationInput[];
    cursor?: Prisma.ClaimSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClaimSequenceCountAggregateInputType;
    _avg?: ClaimSequenceAvgAggregateInputType;
    _sum?: ClaimSequenceSumAggregateInputType;
    _min?: ClaimSequenceMinAggregateInputType;
    _max?: ClaimSequenceMaxAggregateInputType;
};
export type GetClaimSequenceAggregateType<T extends ClaimSequenceAggregateArgs> = {
    [P in keyof T & keyof AggregateClaimSequence]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClaimSequence[P]> : Prisma.GetScalarType<T[P], AggregateClaimSequence[P]>;
};
export type ClaimSequenceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClaimSequenceWhereInput;
    orderBy?: Prisma.ClaimSequenceOrderByWithAggregationInput | Prisma.ClaimSequenceOrderByWithAggregationInput[];
    by: Prisma.ClaimSequenceScalarFieldEnum[] | Prisma.ClaimSequenceScalarFieldEnum;
    having?: Prisma.ClaimSequenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClaimSequenceCountAggregateInputType | true;
    _avg?: ClaimSequenceAvgAggregateInputType;
    _sum?: ClaimSequenceSumAggregateInputType;
    _min?: ClaimSequenceMinAggregateInputType;
    _max?: ClaimSequenceMaxAggregateInputType;
};
export type ClaimSequenceGroupByOutputType = {
    id: string;
    lastSeq: number;
    _count: ClaimSequenceCountAggregateOutputType | null;
    _avg: ClaimSequenceAvgAggregateOutputType | null;
    _sum: ClaimSequenceSumAggregateOutputType | null;
    _min: ClaimSequenceMinAggregateOutputType | null;
    _max: ClaimSequenceMaxAggregateOutputType | null;
};
type GetClaimSequenceGroupByPayload<T extends ClaimSequenceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClaimSequenceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClaimSequenceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClaimSequenceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClaimSequenceGroupByOutputType[P]>;
}>>;
export type ClaimSequenceWhereInput = {
    AND?: Prisma.ClaimSequenceWhereInput | Prisma.ClaimSequenceWhereInput[];
    OR?: Prisma.ClaimSequenceWhereInput[];
    NOT?: Prisma.ClaimSequenceWhereInput | Prisma.ClaimSequenceWhereInput[];
    id?: Prisma.StringFilter<"ClaimSequence"> | string;
    lastSeq?: Prisma.IntFilter<"ClaimSequence"> | number;
};
export type ClaimSequenceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClaimSequenceWhereInput | Prisma.ClaimSequenceWhereInput[];
    OR?: Prisma.ClaimSequenceWhereInput[];
    NOT?: Prisma.ClaimSequenceWhereInput | Prisma.ClaimSequenceWhereInput[];
    lastSeq?: Prisma.IntFilter<"ClaimSequence"> | number;
}, "id">;
export type ClaimSequenceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
    _count?: Prisma.ClaimSequenceCountOrderByAggregateInput;
    _avg?: Prisma.ClaimSequenceAvgOrderByAggregateInput;
    _max?: Prisma.ClaimSequenceMaxOrderByAggregateInput;
    _min?: Prisma.ClaimSequenceMinOrderByAggregateInput;
    _sum?: Prisma.ClaimSequenceSumOrderByAggregateInput;
};
export type ClaimSequenceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClaimSequenceScalarWhereWithAggregatesInput | Prisma.ClaimSequenceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClaimSequenceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClaimSequenceScalarWhereWithAggregatesInput | Prisma.ClaimSequenceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClaimSequence"> | string;
    lastSeq?: Prisma.IntWithAggregatesFilter<"ClaimSequence"> | number;
};
export type ClaimSequenceCreateInput = {
    id?: string;
    lastSeq?: number;
};
export type ClaimSequenceUncheckedCreateInput = {
    id?: string;
    lastSeq?: number;
};
export type ClaimSequenceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClaimSequenceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClaimSequenceCreateManyInput = {
    id?: string;
    lastSeq?: number;
};
export type ClaimSequenceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClaimSequenceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeq?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ClaimSequenceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceAvgOrderByAggregateInput = {
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceSumOrderByAggregateInput = {
    lastSeq?: Prisma.SortOrder;
};
export type ClaimSequenceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["claimSequence"]>;
export type ClaimSequenceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["claimSequence"]>;
export type ClaimSequenceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lastSeq?: boolean;
}, ExtArgs["result"]["claimSequence"]>;
export type ClaimSequenceSelectScalar = {
    id?: boolean;
    lastSeq?: boolean;
};
export type ClaimSequenceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lastSeq", ExtArgs["result"]["claimSequence"]>;
export type $ClaimSequencePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClaimSequence";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lastSeq: number;
    }, ExtArgs["result"]["claimSequence"]>;
    composites: {};
};
export type ClaimSequenceGetPayload<S extends boolean | null | undefined | ClaimSequenceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload, S>;
export type ClaimSequenceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClaimSequenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClaimSequenceCountAggregateInputType | true;
};
export interface ClaimSequenceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClaimSequence'];
        meta: {
            name: 'ClaimSequence';
        };
    };
    findUnique<T extends ClaimSequenceFindUniqueArgs>(args: Prisma.SelectSubset<T, ClaimSequenceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClaimSequenceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClaimSequenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClaimSequenceFindFirstArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClaimSequenceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClaimSequenceFindManyArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClaimSequenceCreateArgs>(args: Prisma.SelectSubset<T, ClaimSequenceCreateArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClaimSequenceCreateManyArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClaimSequenceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClaimSequenceDeleteArgs>(args: Prisma.SelectSubset<T, ClaimSequenceDeleteArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClaimSequenceUpdateArgs>(args: Prisma.SelectSubset<T, ClaimSequenceUpdateArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClaimSequenceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClaimSequenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClaimSequenceUpdateManyArgs>(args: Prisma.SelectSubset<T, ClaimSequenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClaimSequenceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClaimSequenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClaimSequenceUpsertArgs>(args: Prisma.SelectSubset<T, ClaimSequenceUpsertArgs<ExtArgs>>): Prisma.Prisma__ClaimSequenceClient<runtime.Types.Result.GetResult<Prisma.$ClaimSequencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClaimSequenceCountArgs>(args?: Prisma.Subset<T, ClaimSequenceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClaimSequenceCountAggregateOutputType> : number>;
    aggregate<T extends ClaimSequenceAggregateArgs>(args: Prisma.Subset<T, ClaimSequenceAggregateArgs>): Prisma.PrismaPromise<GetClaimSequenceAggregateType<T>>;
    groupBy<T extends ClaimSequenceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClaimSequenceGroupByArgs['orderBy'];
    } : {
        orderBy?: ClaimSequenceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClaimSequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClaimSequenceFieldRefs;
}
export interface Prisma__ClaimSequenceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClaimSequenceFieldRefs {
    readonly id: Prisma.FieldRef<"ClaimSequence", 'String'>;
    readonly lastSeq: Prisma.FieldRef<"ClaimSequence", 'Int'>;
}
export type ClaimSequenceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where: Prisma.ClaimSequenceWhereUniqueInput;
};
export type ClaimSequenceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where: Prisma.ClaimSequenceWhereUniqueInput;
};
export type ClaimSequenceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where?: Prisma.ClaimSequenceWhereInput;
    orderBy?: Prisma.ClaimSequenceOrderByWithRelationInput | Prisma.ClaimSequenceOrderByWithRelationInput[];
    cursor?: Prisma.ClaimSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClaimSequenceScalarFieldEnum | Prisma.ClaimSequenceScalarFieldEnum[];
};
export type ClaimSequenceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where?: Prisma.ClaimSequenceWhereInput;
    orderBy?: Prisma.ClaimSequenceOrderByWithRelationInput | Prisma.ClaimSequenceOrderByWithRelationInput[];
    cursor?: Prisma.ClaimSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClaimSequenceScalarFieldEnum | Prisma.ClaimSequenceScalarFieldEnum[];
};
export type ClaimSequenceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where?: Prisma.ClaimSequenceWhereInput;
    orderBy?: Prisma.ClaimSequenceOrderByWithRelationInput | Prisma.ClaimSequenceOrderByWithRelationInput[];
    cursor?: Prisma.ClaimSequenceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClaimSequenceScalarFieldEnum | Prisma.ClaimSequenceScalarFieldEnum[];
};
export type ClaimSequenceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.ClaimSequenceCreateInput, Prisma.ClaimSequenceUncheckedCreateInput>;
};
export type ClaimSequenceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClaimSequenceCreateManyInput | Prisma.ClaimSequenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClaimSequenceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    data: Prisma.ClaimSequenceCreateManyInput | Prisma.ClaimSequenceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClaimSequenceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClaimSequenceUpdateInput, Prisma.ClaimSequenceUncheckedUpdateInput>;
    where: Prisma.ClaimSequenceWhereUniqueInput;
};
export type ClaimSequenceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClaimSequenceUpdateManyMutationInput, Prisma.ClaimSequenceUncheckedUpdateManyInput>;
    where?: Prisma.ClaimSequenceWhereInput;
    limit?: number;
};
export type ClaimSequenceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClaimSequenceUpdateManyMutationInput, Prisma.ClaimSequenceUncheckedUpdateManyInput>;
    where?: Prisma.ClaimSequenceWhereInput;
    limit?: number;
};
export type ClaimSequenceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where: Prisma.ClaimSequenceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClaimSequenceCreateInput, Prisma.ClaimSequenceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClaimSequenceUpdateInput, Prisma.ClaimSequenceUncheckedUpdateInput>;
};
export type ClaimSequenceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
    where: Prisma.ClaimSequenceWhereUniqueInput;
};
export type ClaimSequenceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClaimSequenceWhereInput;
    limit?: number;
};
export type ClaimSequenceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClaimSequenceSelect<ExtArgs> | null;
    omit?: Prisma.ClaimSequenceOmit<ExtArgs> | null;
};
export {};
