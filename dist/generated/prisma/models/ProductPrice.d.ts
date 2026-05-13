import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductPriceModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPricePayload>;
export type AggregateProductPrice = {
    _count: ProductPriceCountAggregateOutputType | null;
    _avg: ProductPriceAvgAggregateOutputType | null;
    _sum: ProductPriceSumAggregateOutputType | null;
    _min: ProductPriceMinAggregateOutputType | null;
    _max: ProductPriceMaxAggregateOutputType | null;
};
export type ProductPriceAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    compareAtPrice: runtime.Decimal | null;
    cost: runtime.Decimal | null;
};
export type ProductPriceSumAggregateOutputType = {
    price: runtime.Decimal | null;
    compareAtPrice: runtime.Decimal | null;
    cost: runtime.Decimal | null;
};
export type ProductPriceMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    compareAtPrice: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
};
export type ProductPriceMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    compareAtPrice: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    currency: string | null;
    updatedAt: Date | null;
};
export type ProductPriceCountAggregateOutputType = {
    id: number;
    productId: number;
    price: number;
    compareAtPrice: number;
    cost: number;
    currency: number;
    updatedAt: number;
    _all: number;
};
export type ProductPriceAvgAggregateInputType = {
    price?: true;
    compareAtPrice?: true;
    cost?: true;
};
export type ProductPriceSumAggregateInputType = {
    price?: true;
    compareAtPrice?: true;
    cost?: true;
};
export type ProductPriceMinAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    compareAtPrice?: true;
    cost?: true;
    currency?: true;
    updatedAt?: true;
};
export type ProductPriceMaxAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    compareAtPrice?: true;
    cost?: true;
    currency?: true;
    updatedAt?: true;
};
export type ProductPriceCountAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    compareAtPrice?: true;
    cost?: true;
    currency?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductPriceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceWhereInput;
    orderBy?: Prisma.ProductPriceOrderByWithRelationInput | Prisma.ProductPriceOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductPriceCountAggregateInputType;
    _avg?: ProductPriceAvgAggregateInputType;
    _sum?: ProductPriceSumAggregateInputType;
    _min?: ProductPriceMinAggregateInputType;
    _max?: ProductPriceMaxAggregateInputType;
};
export type GetProductPriceAggregateType<T extends ProductPriceAggregateArgs> = {
    [P in keyof T & keyof AggregateProductPrice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductPrice[P]> : Prisma.GetScalarType<T[P], AggregateProductPrice[P]>;
};
export type ProductPriceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceWhereInput;
    orderBy?: Prisma.ProductPriceOrderByWithAggregationInput | Prisma.ProductPriceOrderByWithAggregationInput[];
    by: Prisma.ProductPriceScalarFieldEnum[] | Prisma.ProductPriceScalarFieldEnum;
    having?: Prisma.ProductPriceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductPriceCountAggregateInputType | true;
    _avg?: ProductPriceAvgAggregateInputType;
    _sum?: ProductPriceSumAggregateInputType;
    _min?: ProductPriceMinAggregateInputType;
    _max?: ProductPriceMaxAggregateInputType;
};
export type ProductPriceGroupByOutputType = {
    id: string;
    productId: string;
    price: runtime.Decimal;
    compareAtPrice: runtime.Decimal | null;
    cost: runtime.Decimal | null;
    currency: string;
    updatedAt: Date;
    _count: ProductPriceCountAggregateOutputType | null;
    _avg: ProductPriceAvgAggregateOutputType | null;
    _sum: ProductPriceSumAggregateOutputType | null;
    _min: ProductPriceMinAggregateOutputType | null;
    _max: ProductPriceMaxAggregateOutputType | null;
};
type GetProductPriceGroupByPayload<T extends ProductPriceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductPriceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductPriceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductPriceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductPriceGroupByOutputType[P]>;
}>>;
export type ProductPriceWhereInput = {
    AND?: Prisma.ProductPriceWhereInput | Prisma.ProductPriceWhereInput[];
    OR?: Prisma.ProductPriceWhereInput[];
    NOT?: Prisma.ProductPriceWhereInput | Prisma.ProductPriceWhereInput[];
    id?: Prisma.StringFilter<"ProductPrice"> | string;
    productId?: Prisma.StringFilter<"ProductPrice"> | string;
    price?: Prisma.DecimalFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.DecimalNullableFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.DecimalNullableFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFilter<"ProductPrice"> | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductPrice"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductPriceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId?: string;
    AND?: Prisma.ProductPriceWhereInput | Prisma.ProductPriceWhereInput[];
    OR?: Prisma.ProductPriceWhereInput[];
    NOT?: Prisma.ProductPriceWhereInput | Prisma.ProductPriceWhereInput[];
    price?: Prisma.DecimalFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.DecimalNullableFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.DecimalNullableFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFilter<"ProductPrice"> | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductPrice"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "productId">;
export type ProductPriceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductPriceCountOrderByAggregateInput;
    _avg?: Prisma.ProductPriceAvgOrderByAggregateInput;
    _max?: Prisma.ProductPriceMaxOrderByAggregateInput;
    _min?: Prisma.ProductPriceMinOrderByAggregateInput;
    _sum?: Prisma.ProductPriceSumOrderByAggregateInput;
};
export type ProductPriceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductPriceScalarWhereWithAggregatesInput | Prisma.ProductPriceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductPriceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductPriceScalarWhereWithAggregatesInput | Prisma.ProductPriceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductPrice"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductPrice"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.DecimalNullableWithAggregatesFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.DecimalNullableWithAggregatesFilter<"ProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringWithAggregatesFilter<"ProductPrice"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductPrice"> | Date | string;
};
export type ProductPriceCreateInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPriceInput;
};
export type ProductPriceUncheckedCreateInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    updatedAt?: Date | string;
};
export type ProductPriceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPriceNestedInput;
};
export type ProductPriceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceCreateManyInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    updatedAt?: Date | string;
};
export type ProductPriceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceNullableScalarRelationFilter = {
    is?: Prisma.ProductPriceWhereInput | null;
    isNot?: Prisma.ProductPriceWhereInput | null;
};
export type ProductPriceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductPriceAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type ProductPriceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductPriceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductPriceSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    compareAtPrice?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
};
export type ProductPriceCreateNestedOneWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductPriceCreateOrConnectWithoutProductInput;
    connect?: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceUncheckedCreateNestedOneWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductPriceCreateOrConnectWithoutProductInput;
    connect?: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceUpdateOneWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductPriceCreateOrConnectWithoutProductInput;
    upsert?: Prisma.ProductPriceUpsertWithoutProductInput;
    disconnect?: Prisma.ProductPriceWhereInput | boolean;
    delete?: Prisma.ProductPriceWhereInput | boolean;
    connect?: Prisma.ProductPriceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductPriceUpdateToOneWithWhereWithoutProductInput, Prisma.ProductPriceUpdateWithoutProductInput>, Prisma.ProductPriceUncheckedUpdateWithoutProductInput>;
};
export type ProductPriceUncheckedUpdateOneWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.ProductPriceCreateOrConnectWithoutProductInput;
    upsert?: Prisma.ProductPriceUpsertWithoutProductInput;
    disconnect?: Prisma.ProductPriceWhereInput | boolean;
    delete?: Prisma.ProductPriceWhereInput | boolean;
    connect?: Prisma.ProductPriceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductPriceUpdateToOneWithWhereWithoutProductInput, Prisma.ProductPriceUpdateWithoutProductInput>, Prisma.ProductPriceUncheckedUpdateWithoutProductInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductPriceCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    updatedAt?: Date | string;
};
export type ProductPriceUncheckedCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: string;
    updatedAt?: Date | string;
};
export type ProductPriceCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
};
export type ProductPriceUpsertWithoutProductInput = {
    update: Prisma.XOR<Prisma.ProductPriceUpdateWithoutProductInput, Prisma.ProductPriceUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductPriceCreateWithoutProductInput, Prisma.ProductPriceUncheckedCreateWithoutProductInput>;
    where?: Prisma.ProductPriceWhereInput;
};
export type ProductPriceUpdateToOneWithWhereWithoutProductInput = {
    where?: Prisma.ProductPriceWhereInput;
    data: Prisma.XOR<Prisma.ProductPriceUpdateWithoutProductInput, Prisma.ProductPriceUncheckedUpdateWithoutProductInput>;
};
export type ProductPriceUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    compareAtPrice?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductPriceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    compareAtPrice?: boolean;
    cost?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productPrice"]>;
export type ProductPriceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    compareAtPrice?: boolean;
    cost?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productPrice"]>;
export type ProductPriceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    compareAtPrice?: boolean;
    cost?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productPrice"]>;
export type ProductPriceSelectScalar = {
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    compareAtPrice?: boolean;
    cost?: boolean;
    currency?: boolean;
    updatedAt?: boolean;
};
export type ProductPriceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "price" | "compareAtPrice" | "cost" | "currency" | "updatedAt", ExtArgs["result"]["productPrice"]>;
export type ProductPriceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductPriceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductPriceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductPricePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductPrice";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        price: runtime.Decimal;
        compareAtPrice: runtime.Decimal | null;
        cost: runtime.Decimal | null;
        currency: string;
        updatedAt: Date;
    }, ExtArgs["result"]["productPrice"]>;
    composites: {};
};
export type ProductPriceGetPayload<S extends boolean | null | undefined | ProductPriceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPricePayload, S>;
export type ProductPriceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductPriceCountAggregateInputType | true;
};
export interface ProductPriceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductPrice'];
        meta: {
            name: 'ProductPrice';
        };
    };
    findUnique<T extends ProductPriceFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductPriceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductPriceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductPriceFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductPriceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductPriceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductPriceFindManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductPriceCreateArgs>(args: Prisma.SelectSubset<T, ProductPriceCreateArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductPriceCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductPriceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductPriceDeleteArgs>(args: Prisma.SelectSubset<T, ProductPriceDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductPriceUpdateArgs>(args: Prisma.SelectSubset<T, ProductPriceUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductPriceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductPriceUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductPriceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductPriceUpsertArgs>(args: Prisma.SelectSubset<T, ProductPriceUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ProductPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductPriceCountArgs>(args?: Prisma.Subset<T, ProductPriceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductPriceCountAggregateOutputType> : number>;
    aggregate<T extends ProductPriceAggregateArgs>(args: Prisma.Subset<T, ProductPriceAggregateArgs>): Prisma.PrismaPromise<GetProductPriceAggregateType<T>>;
    groupBy<T extends ProductPriceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductPriceGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductPriceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductPriceFieldRefs;
}
export interface Prisma__ProductPriceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductPriceFieldRefs {
    readonly id: Prisma.FieldRef<"ProductPrice", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductPrice", 'String'>;
    readonly price: Prisma.FieldRef<"ProductPrice", 'Decimal'>;
    readonly compareAtPrice: Prisma.FieldRef<"ProductPrice", 'Decimal'>;
    readonly cost: Prisma.FieldRef<"ProductPrice", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"ProductPrice", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"ProductPrice", 'DateTime'>;
}
export type ProductPriceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceWhereInput;
    orderBy?: Prisma.ProductPriceOrderByWithRelationInput | Prisma.ProductPriceOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceScalarFieldEnum | Prisma.ProductPriceScalarFieldEnum[];
};
export type ProductPriceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceWhereInput;
    orderBy?: Prisma.ProductPriceOrderByWithRelationInput | Prisma.ProductPriceOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceScalarFieldEnum | Prisma.ProductPriceScalarFieldEnum[];
};
export type ProductPriceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where?: Prisma.ProductPriceWhereInput;
    orderBy?: Prisma.ProductPriceOrderByWithRelationInput | Prisma.ProductPriceOrderByWithRelationInput[];
    cursor?: Prisma.ProductPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPriceScalarFieldEnum | Prisma.ProductPriceScalarFieldEnum[];
};
export type ProductPriceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceCreateInput, Prisma.ProductPriceUncheckedCreateInput>;
};
export type ProductPriceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductPriceCreateManyInput | Prisma.ProductPriceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductPriceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    data: Prisma.ProductPriceCreateManyInput | Prisma.ProductPriceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductPriceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductPriceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceUpdateInput, Prisma.ProductPriceUncheckedUpdateInput>;
    where: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductPriceUpdateManyMutationInput, Prisma.ProductPriceUncheckedUpdateManyInput>;
    where?: Prisma.ProductPriceWhereInput;
    limit?: number;
};
export type ProductPriceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductPriceUpdateManyMutationInput, Prisma.ProductPriceUncheckedUpdateManyInput>;
    where?: Prisma.ProductPriceWhereInput;
    limit?: number;
    include?: Prisma.ProductPriceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductPriceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where: Prisma.ProductPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductPriceCreateInput, Prisma.ProductPriceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductPriceUpdateInput, Prisma.ProductPriceUncheckedUpdateInput>;
};
export type ProductPriceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
    where: Prisma.ProductPriceWhereUniqueInput;
};
export type ProductPriceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPriceWhereInput;
    limit?: number;
};
export type ProductPriceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductPriceSelect<ExtArgs> | null;
    omit?: Prisma.ProductPriceOmit<ExtArgs> | null;
    include?: Prisma.ProductPriceInclude<ExtArgs> | null;
};
export {};
