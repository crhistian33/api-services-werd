import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductFeatureModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductFeaturePayload>;
export type AggregateProductFeature = {
    _count: ProductFeatureCountAggregateOutputType | null;
    _avg: ProductFeatureAvgAggregateOutputType | null;
    _sum: ProductFeatureSumAggregateOutputType | null;
    _min: ProductFeatureMinAggregateOutputType | null;
    _max: ProductFeatureMaxAggregateOutputType | null;
};
export type ProductFeatureAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ProductFeatureSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ProductFeatureMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    feature: string | null;
    sortOrder: number | null;
};
export type ProductFeatureMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    feature: string | null;
    sortOrder: number | null;
};
export type ProductFeatureCountAggregateOutputType = {
    id: number;
    productId: number;
    feature: number;
    sortOrder: number;
    _all: number;
};
export type ProductFeatureAvgAggregateInputType = {
    sortOrder?: true;
};
export type ProductFeatureSumAggregateInputType = {
    sortOrder?: true;
};
export type ProductFeatureMinAggregateInputType = {
    id?: true;
    productId?: true;
    feature?: true;
    sortOrder?: true;
};
export type ProductFeatureMaxAggregateInputType = {
    id?: true;
    productId?: true;
    feature?: true;
    sortOrder?: true;
};
export type ProductFeatureCountAggregateInputType = {
    id?: true;
    productId?: true;
    feature?: true;
    sortOrder?: true;
    _all?: true;
};
export type ProductFeatureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductFeatureWhereInput;
    orderBy?: Prisma.ProductFeatureOrderByWithRelationInput | Prisma.ProductFeatureOrderByWithRelationInput[];
    cursor?: Prisma.ProductFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductFeatureCountAggregateInputType;
    _avg?: ProductFeatureAvgAggregateInputType;
    _sum?: ProductFeatureSumAggregateInputType;
    _min?: ProductFeatureMinAggregateInputType;
    _max?: ProductFeatureMaxAggregateInputType;
};
export type GetProductFeatureAggregateType<T extends ProductFeatureAggregateArgs> = {
    [P in keyof T & keyof AggregateProductFeature]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductFeature[P]> : Prisma.GetScalarType<T[P], AggregateProductFeature[P]>;
};
export type ProductFeatureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductFeatureWhereInput;
    orderBy?: Prisma.ProductFeatureOrderByWithAggregationInput | Prisma.ProductFeatureOrderByWithAggregationInput[];
    by: Prisma.ProductFeatureScalarFieldEnum[] | Prisma.ProductFeatureScalarFieldEnum;
    having?: Prisma.ProductFeatureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductFeatureCountAggregateInputType | true;
    _avg?: ProductFeatureAvgAggregateInputType;
    _sum?: ProductFeatureSumAggregateInputType;
    _min?: ProductFeatureMinAggregateInputType;
    _max?: ProductFeatureMaxAggregateInputType;
};
export type ProductFeatureGroupByOutputType = {
    id: string;
    productId: string;
    feature: string;
    sortOrder: number;
    _count: ProductFeatureCountAggregateOutputType | null;
    _avg: ProductFeatureAvgAggregateOutputType | null;
    _sum: ProductFeatureSumAggregateOutputType | null;
    _min: ProductFeatureMinAggregateOutputType | null;
    _max: ProductFeatureMaxAggregateOutputType | null;
};
type GetProductFeatureGroupByPayload<T extends ProductFeatureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductFeatureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductFeatureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductFeatureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductFeatureGroupByOutputType[P]>;
}>>;
export type ProductFeatureWhereInput = {
    AND?: Prisma.ProductFeatureWhereInput | Prisma.ProductFeatureWhereInput[];
    OR?: Prisma.ProductFeatureWhereInput[];
    NOT?: Prisma.ProductFeatureWhereInput | Prisma.ProductFeatureWhereInput[];
    id?: Prisma.StringFilter<"ProductFeature"> | string;
    productId?: Prisma.StringFilter<"ProductFeature"> | string;
    feature?: Prisma.StringFilter<"ProductFeature"> | string;
    sortOrder?: Prisma.IntFilter<"ProductFeature"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductFeatureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    feature?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductFeatureWhereInput | Prisma.ProductFeatureWhereInput[];
    OR?: Prisma.ProductFeatureWhereInput[];
    NOT?: Prisma.ProductFeatureWhereInput | Prisma.ProductFeatureWhereInput[];
    productId?: Prisma.StringFilter<"ProductFeature"> | string;
    feature?: Prisma.StringFilter<"ProductFeature"> | string;
    sortOrder?: Prisma.IntFilter<"ProductFeature"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type ProductFeatureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    feature?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.ProductFeatureCountOrderByAggregateInput;
    _avg?: Prisma.ProductFeatureAvgOrderByAggregateInput;
    _max?: Prisma.ProductFeatureMaxOrderByAggregateInput;
    _min?: Prisma.ProductFeatureMinOrderByAggregateInput;
    _sum?: Prisma.ProductFeatureSumOrderByAggregateInput;
};
export type ProductFeatureScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductFeatureScalarWhereWithAggregatesInput | Prisma.ProductFeatureScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductFeatureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductFeatureScalarWhereWithAggregatesInput | Prisma.ProductFeatureScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductFeature"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductFeature"> | string;
    feature?: Prisma.StringWithAggregatesFilter<"ProductFeature"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ProductFeature"> | number;
};
export type ProductFeatureCreateInput = {
    id?: string;
    feature: string;
    sortOrder?: number;
    product: Prisma.ProductCreateNestedOneWithoutFeaturesInput;
};
export type ProductFeatureUncheckedCreateInput = {
    id?: string;
    productId: string;
    feature: string;
    sortOrder?: number;
};
export type ProductFeatureUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutFeaturesNestedInput;
};
export type ProductFeatureUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureCreateManyInput = {
    id?: string;
    productId: string;
    feature: string;
    sortOrder?: number;
};
export type ProductFeatureUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureListRelationFilter = {
    every?: Prisma.ProductFeatureWhereInput;
    some?: Prisma.ProductFeatureWhereInput;
    none?: Prisma.ProductFeatureWhereInput;
};
export type ProductFeatureOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductFeatureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    feature?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductFeatureAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ProductFeatureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    feature?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductFeatureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    feature?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductFeatureSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ProductFeatureCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput> | Prisma.ProductFeatureCreateWithoutProductInput[] | Prisma.ProductFeatureUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductFeatureCreateOrConnectWithoutProductInput | Prisma.ProductFeatureCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductFeatureCreateManyProductInputEnvelope;
    connect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
};
export type ProductFeatureUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput> | Prisma.ProductFeatureCreateWithoutProductInput[] | Prisma.ProductFeatureUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductFeatureCreateOrConnectWithoutProductInput | Prisma.ProductFeatureCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductFeatureCreateManyProductInputEnvelope;
    connect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
};
export type ProductFeatureUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput> | Prisma.ProductFeatureCreateWithoutProductInput[] | Prisma.ProductFeatureUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductFeatureCreateOrConnectWithoutProductInput | Prisma.ProductFeatureCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductFeatureUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductFeatureUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductFeatureCreateManyProductInputEnvelope;
    set?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    disconnect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    delete?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    connect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    update?: Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput | Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductFeatureScalarWhereInput | Prisma.ProductFeatureScalarWhereInput[];
};
export type ProductFeatureUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput> | Prisma.ProductFeatureCreateWithoutProductInput[] | Prisma.ProductFeatureUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductFeatureCreateOrConnectWithoutProductInput | Prisma.ProductFeatureCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductFeatureUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductFeatureUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductFeatureCreateManyProductInputEnvelope;
    set?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    disconnect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    delete?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    connect?: Prisma.ProductFeatureWhereUniqueInput | Prisma.ProductFeatureWhereUniqueInput[];
    update?: Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductFeatureUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput | Prisma.ProductFeatureUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductFeatureScalarWhereInput | Prisma.ProductFeatureScalarWhereInput[];
};
export type ProductFeatureCreateWithoutProductInput = {
    id?: string;
    feature: string;
    sortOrder?: number;
};
export type ProductFeatureUncheckedCreateWithoutProductInput = {
    id?: string;
    feature: string;
    sortOrder?: number;
};
export type ProductFeatureCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductFeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput>;
};
export type ProductFeatureCreateManyProductInputEnvelope = {
    data: Prisma.ProductFeatureCreateManyProductInput | Prisma.ProductFeatureCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductFeatureUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductFeatureWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductFeatureUpdateWithoutProductInput, Prisma.ProductFeatureUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductFeatureCreateWithoutProductInput, Prisma.ProductFeatureUncheckedCreateWithoutProductInput>;
};
export type ProductFeatureUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductFeatureWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductFeatureUpdateWithoutProductInput, Prisma.ProductFeatureUncheckedUpdateWithoutProductInput>;
};
export type ProductFeatureUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductFeatureScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductFeatureUpdateManyMutationInput, Prisma.ProductFeatureUncheckedUpdateManyWithoutProductInput>;
};
export type ProductFeatureScalarWhereInput = {
    AND?: Prisma.ProductFeatureScalarWhereInput | Prisma.ProductFeatureScalarWhereInput[];
    OR?: Prisma.ProductFeatureScalarWhereInput[];
    NOT?: Prisma.ProductFeatureScalarWhereInput | Prisma.ProductFeatureScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductFeature"> | string;
    productId?: Prisma.StringFilter<"ProductFeature"> | string;
    feature?: Prisma.StringFilter<"ProductFeature"> | string;
    sortOrder?: Prisma.IntFilter<"ProductFeature"> | number;
};
export type ProductFeatureCreateManyProductInput = {
    id?: string;
    feature: string;
    sortOrder?: number;
};
export type ProductFeatureUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    feature?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductFeatureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    feature?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productFeature"]>;
export type ProductFeatureSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    feature?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productFeature"]>;
export type ProductFeatureSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    feature?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productFeature"]>;
export type ProductFeatureSelectScalar = {
    id?: boolean;
    productId?: boolean;
    feature?: boolean;
    sortOrder?: boolean;
};
export type ProductFeatureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "feature" | "sortOrder", ExtArgs["result"]["productFeature"]>;
export type ProductFeatureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductFeatureIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductFeatureIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductFeaturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductFeature";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        feature: string;
        sortOrder: number;
    }, ExtArgs["result"]["productFeature"]>;
    composites: {};
};
export type ProductFeatureGetPayload<S extends boolean | null | undefined | ProductFeatureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload, S>;
export type ProductFeatureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductFeatureCountAggregateInputType | true;
};
export interface ProductFeatureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductFeature'];
        meta: {
            name: 'ProductFeature';
        };
    };
    findUnique<T extends ProductFeatureFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFeatureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFeatureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFeatureFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFeatureFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFeatureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFeatureFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductFeatureCreateArgs>(args: Prisma.SelectSubset<T, ProductFeatureCreateArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductFeatureCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductFeatureCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductFeatureDeleteArgs>(args: Prisma.SelectSubset<T, ProductFeatureDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductFeatureUpdateArgs>(args: Prisma.SelectSubset<T, ProductFeatureUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductFeatureDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductFeatureUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductFeatureUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductFeatureUpsertArgs>(args: Prisma.SelectSubset<T, ProductFeatureUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductFeatureClient<runtime.Types.Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductFeatureCountArgs>(args?: Prisma.Subset<T, ProductFeatureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductFeatureCountAggregateOutputType> : number>;
    aggregate<T extends ProductFeatureAggregateArgs>(args: Prisma.Subset<T, ProductFeatureAggregateArgs>): Prisma.PrismaPromise<GetProductFeatureAggregateType<T>>;
    groupBy<T extends ProductFeatureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductFeatureGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductFeatureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFeatureFieldRefs;
}
export interface Prisma__ProductFeatureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFeatureFieldRefs {
    readonly id: Prisma.FieldRef<"ProductFeature", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductFeature", 'String'>;
    readonly feature: Prisma.FieldRef<"ProductFeature", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"ProductFeature", 'Int'>;
}
export type ProductFeatureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where: Prisma.ProductFeatureWhereUniqueInput;
};
export type ProductFeatureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where: Prisma.ProductFeatureWhereUniqueInput;
};
export type ProductFeatureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where?: Prisma.ProductFeatureWhereInput;
    orderBy?: Prisma.ProductFeatureOrderByWithRelationInput | Prisma.ProductFeatureOrderByWithRelationInput[];
    cursor?: Prisma.ProductFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductFeatureScalarFieldEnum | Prisma.ProductFeatureScalarFieldEnum[];
};
export type ProductFeatureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where?: Prisma.ProductFeatureWhereInput;
    orderBy?: Prisma.ProductFeatureOrderByWithRelationInput | Prisma.ProductFeatureOrderByWithRelationInput[];
    cursor?: Prisma.ProductFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductFeatureScalarFieldEnum | Prisma.ProductFeatureScalarFieldEnum[];
};
export type ProductFeatureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where?: Prisma.ProductFeatureWhereInput;
    orderBy?: Prisma.ProductFeatureOrderByWithRelationInput | Prisma.ProductFeatureOrderByWithRelationInput[];
    cursor?: Prisma.ProductFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductFeatureScalarFieldEnum | Prisma.ProductFeatureScalarFieldEnum[];
};
export type ProductFeatureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductFeatureCreateInput, Prisma.ProductFeatureUncheckedCreateInput>;
};
export type ProductFeatureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductFeatureCreateManyInput | Prisma.ProductFeatureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductFeatureCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    data: Prisma.ProductFeatureCreateManyInput | Prisma.ProductFeatureCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductFeatureIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductFeatureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductFeatureUpdateInput, Prisma.ProductFeatureUncheckedUpdateInput>;
    where: Prisma.ProductFeatureWhereUniqueInput;
};
export type ProductFeatureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductFeatureUpdateManyMutationInput, Prisma.ProductFeatureUncheckedUpdateManyInput>;
    where?: Prisma.ProductFeatureWhereInput;
    limit?: number;
};
export type ProductFeatureUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductFeatureUpdateManyMutationInput, Prisma.ProductFeatureUncheckedUpdateManyInput>;
    where?: Prisma.ProductFeatureWhereInput;
    limit?: number;
    include?: Prisma.ProductFeatureIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductFeatureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where: Prisma.ProductFeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductFeatureCreateInput, Prisma.ProductFeatureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductFeatureUpdateInput, Prisma.ProductFeatureUncheckedUpdateInput>;
};
export type ProductFeatureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
    where: Prisma.ProductFeatureWhereUniqueInput;
};
export type ProductFeatureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductFeatureWhereInput;
    limit?: number;
};
export type ProductFeatureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductFeatureSelect<ExtArgs> | null;
    omit?: Prisma.ProductFeatureOmit<ExtArgs> | null;
    include?: Prisma.ProductFeatureInclude<ExtArgs> | null;
};
export {};
