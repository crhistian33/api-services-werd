import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductSpecModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductSpecPayload>;
export type AggregateProductSpec = {
    _count: ProductSpecCountAggregateOutputType | null;
    _avg: ProductSpecAvgAggregateOutputType | null;
    _sum: ProductSpecSumAggregateOutputType | null;
    _min: ProductSpecMinAggregateOutputType | null;
    _max: ProductSpecMaxAggregateOutputType | null;
};
export type ProductSpecAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ProductSpecSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ProductSpecMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    specKey: string | null;
    specValue: string | null;
    sortOrder: number | null;
};
export type ProductSpecMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    specKey: string | null;
    specValue: string | null;
    sortOrder: number | null;
};
export type ProductSpecCountAggregateOutputType = {
    id: number;
    productId: number;
    specKey: number;
    specValue: number;
    sortOrder: number;
    _all: number;
};
export type ProductSpecAvgAggregateInputType = {
    sortOrder?: true;
};
export type ProductSpecSumAggregateInputType = {
    sortOrder?: true;
};
export type ProductSpecMinAggregateInputType = {
    id?: true;
    productId?: true;
    specKey?: true;
    specValue?: true;
    sortOrder?: true;
};
export type ProductSpecMaxAggregateInputType = {
    id?: true;
    productId?: true;
    specKey?: true;
    specValue?: true;
    sortOrder?: true;
};
export type ProductSpecCountAggregateInputType = {
    id?: true;
    productId?: true;
    specKey?: true;
    specValue?: true;
    sortOrder?: true;
    _all?: true;
};
export type ProductSpecAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductSpecWhereInput;
    orderBy?: Prisma.ProductSpecOrderByWithRelationInput | Prisma.ProductSpecOrderByWithRelationInput[];
    cursor?: Prisma.ProductSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductSpecCountAggregateInputType;
    _avg?: ProductSpecAvgAggregateInputType;
    _sum?: ProductSpecSumAggregateInputType;
    _min?: ProductSpecMinAggregateInputType;
    _max?: ProductSpecMaxAggregateInputType;
};
export type GetProductSpecAggregateType<T extends ProductSpecAggregateArgs> = {
    [P in keyof T & keyof AggregateProductSpec]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductSpec[P]> : Prisma.GetScalarType<T[P], AggregateProductSpec[P]>;
};
export type ProductSpecGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductSpecWhereInput;
    orderBy?: Prisma.ProductSpecOrderByWithAggregationInput | Prisma.ProductSpecOrderByWithAggregationInput[];
    by: Prisma.ProductSpecScalarFieldEnum[] | Prisma.ProductSpecScalarFieldEnum;
    having?: Prisma.ProductSpecScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductSpecCountAggregateInputType | true;
    _avg?: ProductSpecAvgAggregateInputType;
    _sum?: ProductSpecSumAggregateInputType;
    _min?: ProductSpecMinAggregateInputType;
    _max?: ProductSpecMaxAggregateInputType;
};
export type ProductSpecGroupByOutputType = {
    id: string;
    productId: string;
    specKey: string;
    specValue: string;
    sortOrder: number;
    _count: ProductSpecCountAggregateOutputType | null;
    _avg: ProductSpecAvgAggregateOutputType | null;
    _sum: ProductSpecSumAggregateOutputType | null;
    _min: ProductSpecMinAggregateOutputType | null;
    _max: ProductSpecMaxAggregateOutputType | null;
};
type GetProductSpecGroupByPayload<T extends ProductSpecGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductSpecGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductSpecGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductSpecGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductSpecGroupByOutputType[P]>;
}>>;
export type ProductSpecWhereInput = {
    AND?: Prisma.ProductSpecWhereInput | Prisma.ProductSpecWhereInput[];
    OR?: Prisma.ProductSpecWhereInput[];
    NOT?: Prisma.ProductSpecWhereInput | Prisma.ProductSpecWhereInput[];
    id?: Prisma.StringFilter<"ProductSpec"> | string;
    productId?: Prisma.StringFilter<"ProductSpec"> | string;
    specKey?: Prisma.StringFilter<"ProductSpec"> | string;
    specValue?: Prisma.StringFilter<"ProductSpec"> | string;
    sortOrder?: Prisma.IntFilter<"ProductSpec"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductSpecOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    specKey?: Prisma.SortOrder;
    specValue?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductSpecWhereInput | Prisma.ProductSpecWhereInput[];
    OR?: Prisma.ProductSpecWhereInput[];
    NOT?: Prisma.ProductSpecWhereInput | Prisma.ProductSpecWhereInput[];
    productId?: Prisma.StringFilter<"ProductSpec"> | string;
    specKey?: Prisma.StringFilter<"ProductSpec"> | string;
    specValue?: Prisma.StringFilter<"ProductSpec"> | string;
    sortOrder?: Prisma.IntFilter<"ProductSpec"> | number;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type ProductSpecOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    specKey?: Prisma.SortOrder;
    specValue?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.ProductSpecCountOrderByAggregateInput;
    _avg?: Prisma.ProductSpecAvgOrderByAggregateInput;
    _max?: Prisma.ProductSpecMaxOrderByAggregateInput;
    _min?: Prisma.ProductSpecMinOrderByAggregateInput;
    _sum?: Prisma.ProductSpecSumOrderByAggregateInput;
};
export type ProductSpecScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductSpecScalarWhereWithAggregatesInput | Prisma.ProductSpecScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductSpecScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductSpecScalarWhereWithAggregatesInput | Prisma.ProductSpecScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductSpec"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductSpec"> | string;
    specKey?: Prisma.StringWithAggregatesFilter<"ProductSpec"> | string;
    specValue?: Prisma.StringWithAggregatesFilter<"ProductSpec"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ProductSpec"> | number;
};
export type ProductSpecCreateInput = {
    id?: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
    product: Prisma.ProductCreateNestedOneWithoutSpecsInput;
};
export type ProductSpecUncheckedCreateInput = {
    id?: string;
    productId: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
};
export type ProductSpecUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductUpdateOneRequiredWithoutSpecsNestedInput;
};
export type ProductSpecUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecCreateManyInput = {
    id?: string;
    productId: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
};
export type ProductSpecUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecListRelationFilter = {
    every?: Prisma.ProductSpecWhereInput;
    some?: Prisma.ProductSpecWhereInput;
    none?: Prisma.ProductSpecWhereInput;
};
export type ProductSpecOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductSpecCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    specKey?: Prisma.SortOrder;
    specValue?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductSpecAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ProductSpecMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    specKey?: Prisma.SortOrder;
    specValue?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductSpecMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    specKey?: Prisma.SortOrder;
    specValue?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ProductSpecSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ProductSpecCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput> | Prisma.ProductSpecCreateWithoutProductInput[] | Prisma.ProductSpecUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductSpecCreateOrConnectWithoutProductInput | Prisma.ProductSpecCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductSpecCreateManyProductInputEnvelope;
    connect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
};
export type ProductSpecUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput> | Prisma.ProductSpecCreateWithoutProductInput[] | Prisma.ProductSpecUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductSpecCreateOrConnectWithoutProductInput | Prisma.ProductSpecCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductSpecCreateManyProductInputEnvelope;
    connect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
};
export type ProductSpecUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput> | Prisma.ProductSpecCreateWithoutProductInput[] | Prisma.ProductSpecUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductSpecCreateOrConnectWithoutProductInput | Prisma.ProductSpecCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductSpecUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductSpecUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductSpecCreateManyProductInputEnvelope;
    set?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    disconnect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    delete?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    connect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    update?: Prisma.ProductSpecUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductSpecUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductSpecUpdateManyWithWhereWithoutProductInput | Prisma.ProductSpecUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductSpecScalarWhereInput | Prisma.ProductSpecScalarWhereInput[];
};
export type ProductSpecUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput> | Prisma.ProductSpecCreateWithoutProductInput[] | Prisma.ProductSpecUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductSpecCreateOrConnectWithoutProductInput | Prisma.ProductSpecCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductSpecUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductSpecUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductSpecCreateManyProductInputEnvelope;
    set?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    disconnect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    delete?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    connect?: Prisma.ProductSpecWhereUniqueInput | Prisma.ProductSpecWhereUniqueInput[];
    update?: Prisma.ProductSpecUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductSpecUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductSpecUpdateManyWithWhereWithoutProductInput | Prisma.ProductSpecUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductSpecScalarWhereInput | Prisma.ProductSpecScalarWhereInput[];
};
export type ProductSpecCreateWithoutProductInput = {
    id?: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
};
export type ProductSpecUncheckedCreateWithoutProductInput = {
    id?: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
};
export type ProductSpecCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput>;
};
export type ProductSpecCreateManyProductInputEnvelope = {
    data: Prisma.ProductSpecCreateManyProductInput | Prisma.ProductSpecCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductSpecUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductSpecWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductSpecUpdateWithoutProductInput, Prisma.ProductSpecUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductSpecCreateWithoutProductInput, Prisma.ProductSpecUncheckedCreateWithoutProductInput>;
};
export type ProductSpecUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductSpecWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductSpecUpdateWithoutProductInput, Prisma.ProductSpecUncheckedUpdateWithoutProductInput>;
};
export type ProductSpecUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductSpecScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductSpecUpdateManyMutationInput, Prisma.ProductSpecUncheckedUpdateManyWithoutProductInput>;
};
export type ProductSpecScalarWhereInput = {
    AND?: Prisma.ProductSpecScalarWhereInput | Prisma.ProductSpecScalarWhereInput[];
    OR?: Prisma.ProductSpecScalarWhereInput[];
    NOT?: Prisma.ProductSpecScalarWhereInput | Prisma.ProductSpecScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductSpec"> | string;
    productId?: Prisma.StringFilter<"ProductSpec"> | string;
    specKey?: Prisma.StringFilter<"ProductSpec"> | string;
    specValue?: Prisma.StringFilter<"ProductSpec"> | string;
    sortOrder?: Prisma.IntFilter<"ProductSpec"> | number;
};
export type ProductSpecCreateManyProductInput = {
    id?: string;
    specKey: string;
    specValue: string;
    sortOrder?: number;
};
export type ProductSpecUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    specKey?: Prisma.StringFieldUpdateOperationsInput | string;
    specValue?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProductSpecSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    specKey?: boolean;
    specValue?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productSpec"]>;
export type ProductSpecSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    specKey?: boolean;
    specValue?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productSpec"]>;
export type ProductSpecSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    specKey?: boolean;
    specValue?: boolean;
    sortOrder?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productSpec"]>;
export type ProductSpecSelectScalar = {
    id?: boolean;
    productId?: boolean;
    specKey?: boolean;
    specValue?: boolean;
    sortOrder?: boolean;
};
export type ProductSpecOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "specKey" | "specValue" | "sortOrder", ExtArgs["result"]["productSpec"]>;
export type ProductSpecInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductSpecIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductSpecIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductSpecPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductSpec";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        specKey: string;
        specValue: string;
        sortOrder: number;
    }, ExtArgs["result"]["productSpec"]>;
    composites: {};
};
export type ProductSpecGetPayload<S extends boolean | null | undefined | ProductSpecDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload, S>;
export type ProductSpecCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductSpecCountAggregateInputType | true;
};
export interface ProductSpecDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductSpec'];
        meta: {
            name: 'ProductSpec';
        };
    };
    findUnique<T extends ProductSpecFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductSpecFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductSpecFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductSpecFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductSpecFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductSpecFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductSpecFindManyArgs>(args?: Prisma.SelectSubset<T, ProductSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductSpecCreateArgs>(args: Prisma.SelectSubset<T, ProductSpecCreateArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductSpecCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductSpecCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductSpecDeleteArgs>(args: Prisma.SelectSubset<T, ProductSpecDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductSpecUpdateArgs>(args: Prisma.SelectSubset<T, ProductSpecUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductSpecDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductSpecUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductSpecUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductSpecUpsertArgs>(args: Prisma.SelectSubset<T, ProductSpecUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductSpecClient<runtime.Types.Result.GetResult<Prisma.$ProductSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductSpecCountArgs>(args?: Prisma.Subset<T, ProductSpecCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductSpecCountAggregateOutputType> : number>;
    aggregate<T extends ProductSpecAggregateArgs>(args: Prisma.Subset<T, ProductSpecAggregateArgs>): Prisma.PrismaPromise<GetProductSpecAggregateType<T>>;
    groupBy<T extends ProductSpecGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductSpecGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductSpecGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductSpecFieldRefs;
}
export interface Prisma__ProductSpecClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductSpecFieldRefs {
    readonly id: Prisma.FieldRef<"ProductSpec", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductSpec", 'String'>;
    readonly specKey: Prisma.FieldRef<"ProductSpec", 'String'>;
    readonly specValue: Prisma.FieldRef<"ProductSpec", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"ProductSpec", 'Int'>;
}
export type ProductSpecFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where: Prisma.ProductSpecWhereUniqueInput;
};
export type ProductSpecFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where: Prisma.ProductSpecWhereUniqueInput;
};
export type ProductSpecFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where?: Prisma.ProductSpecWhereInput;
    orderBy?: Prisma.ProductSpecOrderByWithRelationInput | Prisma.ProductSpecOrderByWithRelationInput[];
    cursor?: Prisma.ProductSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductSpecScalarFieldEnum | Prisma.ProductSpecScalarFieldEnum[];
};
export type ProductSpecFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where?: Prisma.ProductSpecWhereInput;
    orderBy?: Prisma.ProductSpecOrderByWithRelationInput | Prisma.ProductSpecOrderByWithRelationInput[];
    cursor?: Prisma.ProductSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductSpecScalarFieldEnum | Prisma.ProductSpecScalarFieldEnum[];
};
export type ProductSpecFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where?: Prisma.ProductSpecWhereInput;
    orderBy?: Prisma.ProductSpecOrderByWithRelationInput | Prisma.ProductSpecOrderByWithRelationInput[];
    cursor?: Prisma.ProductSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductSpecScalarFieldEnum | Prisma.ProductSpecScalarFieldEnum[];
};
export type ProductSpecCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductSpecCreateInput, Prisma.ProductSpecUncheckedCreateInput>;
};
export type ProductSpecCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductSpecCreateManyInput | Prisma.ProductSpecCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductSpecCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    data: Prisma.ProductSpecCreateManyInput | Prisma.ProductSpecCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductSpecIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductSpecUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductSpecUpdateInput, Prisma.ProductSpecUncheckedUpdateInput>;
    where: Prisma.ProductSpecWhereUniqueInput;
};
export type ProductSpecUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductSpecUpdateManyMutationInput, Prisma.ProductSpecUncheckedUpdateManyInput>;
    where?: Prisma.ProductSpecWhereInput;
    limit?: number;
};
export type ProductSpecUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductSpecUpdateManyMutationInput, Prisma.ProductSpecUncheckedUpdateManyInput>;
    where?: Prisma.ProductSpecWhereInput;
    limit?: number;
    include?: Prisma.ProductSpecIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductSpecUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where: Prisma.ProductSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductSpecCreateInput, Prisma.ProductSpecUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductSpecUpdateInput, Prisma.ProductSpecUncheckedUpdateInput>;
};
export type ProductSpecDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
    where: Prisma.ProductSpecWhereUniqueInput;
};
export type ProductSpecDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductSpecWhereInput;
    limit?: number;
};
export type ProductSpecDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSpecSelect<ExtArgs> | null;
    omit?: Prisma.ProductSpecOmit<ExtArgs> | null;
    include?: Prisma.ProductSpecInclude<ExtArgs> | null;
};
export {};
