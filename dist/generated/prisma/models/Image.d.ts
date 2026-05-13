import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImageModel = runtime.Types.Result.DefaultSelection<Prisma.$ImagePayload>;
export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _avg: ImageAvgAggregateOutputType | null;
    _sum: ImageSumAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
};
export type ImageAvgAggregateOutputType = {
    order: number | null;
};
export type ImageSumAggregateOutputType = {
    order: number | null;
};
export type ImageMinAggregateOutputType = {
    id: string | null;
    entityType: $Enums.ImageEntityType | null;
    entityId: string | null;
    imageRole: string | null;
    tempPath: string | null;
    finalPath: string | null;
    url: string | null;
    order: number | null;
    altText: string | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ImageMaxAggregateOutputType = {
    id: string | null;
    entityType: $Enums.ImageEntityType | null;
    entityId: string | null;
    imageRole: string | null;
    tempPath: string | null;
    finalPath: string | null;
    url: string | null;
    order: number | null;
    altText: string | null;
    isConfirmed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ImageCountAggregateOutputType = {
    id: number;
    entityType: number;
    entityId: number;
    imageRole: number;
    tempPath: number;
    finalPath: number;
    url: number;
    order: number;
    altText: number;
    metadata: number;
    isConfirmed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ImageAvgAggregateInputType = {
    order?: true;
};
export type ImageSumAggregateInputType = {
    order?: true;
};
export type ImageMinAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageRole?: true;
    tempPath?: true;
    finalPath?: true;
    url?: true;
    order?: true;
    altText?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ImageMaxAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageRole?: true;
    tempPath?: true;
    finalPath?: true;
    url?: true;
    order?: true;
    altText?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ImageCountAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageRole?: true;
    tempPath?: true;
    finalPath?: true;
    url?: true;
    order?: true;
    altText?: true;
    metadata?: true;
    isConfirmed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImageCountAggregateInputType;
    _avg?: ImageAvgAggregateInputType;
    _sum?: ImageSumAggregateInputType;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
};
export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImage[P]> : Prisma.GetScalarType<T[P], AggregateImage[P]>;
};
export type ImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithAggregationInput | Prisma.ImageOrderByWithAggregationInput[];
    by: Prisma.ImageScalarFieldEnum[] | Prisma.ImageScalarFieldEnum;
    having?: Prisma.ImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImageCountAggregateInputType | true;
    _avg?: ImageAvgAggregateInputType;
    _sum?: ImageSumAggregateInputType;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
};
export type ImageGroupByOutputType = {
    id: string;
    entityType: $Enums.ImageEntityType;
    entityId: string;
    imageRole: string;
    tempPath: string | null;
    finalPath: string | null;
    url: string | null;
    order: number;
    altText: string | null;
    metadata: runtime.JsonValue;
    isConfirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ImageCountAggregateOutputType | null;
    _avg: ImageAvgAggregateOutputType | null;
    _sum: ImageSumAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
};
type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImageGroupByOutputType[P]>;
}>>;
export type ImageWhereInput = {
    AND?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    OR?: Prisma.ImageWhereInput[];
    NOT?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    id?: Prisma.StringFilter<"Image"> | string;
    entityType?: Prisma.EnumImageEntityTypeFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.StringFilter<"Image"> | string;
    imageRole?: Prisma.StringFilter<"Image"> | string;
    tempPath?: Prisma.StringNullableFilter<"Image"> | string | null;
    finalPath?: Prisma.StringNullableFilter<"Image"> | string | null;
    url?: Prisma.StringNullableFilter<"Image"> | string | null;
    order?: Prisma.IntFilter<"Image"> | number;
    altText?: Prisma.StringNullableFilter<"Image"> | string | null;
    metadata?: Prisma.JsonFilter<"Image">;
    isConfirmed?: Prisma.BoolFilter<"Image"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
};
export type ImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageRole?: Prisma.SortOrder;
    tempPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    OR?: Prisma.ImageWhereInput[];
    NOT?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    entityType?: Prisma.EnumImageEntityTypeFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.StringFilter<"Image"> | string;
    imageRole?: Prisma.StringFilter<"Image"> | string;
    tempPath?: Prisma.StringNullableFilter<"Image"> | string | null;
    finalPath?: Prisma.StringNullableFilter<"Image"> | string | null;
    url?: Prisma.StringNullableFilter<"Image"> | string | null;
    order?: Prisma.IntFilter<"Image"> | number;
    altText?: Prisma.StringNullableFilter<"Image"> | string | null;
    metadata?: Prisma.JsonFilter<"Image">;
    isConfirmed?: Prisma.BoolFilter<"Image"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
}, "id">;
export type ImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageRole?: Prisma.SortOrder;
    tempPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    altText?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ImageCountOrderByAggregateInput;
    _avg?: Prisma.ImageAvgOrderByAggregateInput;
    _max?: Prisma.ImageMaxOrderByAggregateInput;
    _min?: Prisma.ImageMinOrderByAggregateInput;
    _sum?: Prisma.ImageSumOrderByAggregateInput;
};
export type ImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImageScalarWhereWithAggregatesInput | Prisma.ImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImageScalarWhereWithAggregatesInput | Prisma.ImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Image"> | string;
    entityType?: Prisma.EnumImageEntityTypeWithAggregatesFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.StringWithAggregatesFilter<"Image"> | string;
    imageRole?: Prisma.StringWithAggregatesFilter<"Image"> | string;
    tempPath?: Prisma.StringNullableWithAggregatesFilter<"Image"> | string | null;
    finalPath?: Prisma.StringNullableWithAggregatesFilter<"Image"> | string | null;
    url?: Prisma.StringNullableWithAggregatesFilter<"Image"> | string | null;
    order?: Prisma.IntWithAggregatesFilter<"Image"> | number;
    altText?: Prisma.StringNullableWithAggregatesFilter<"Image"> | string | null;
    metadata?: Prisma.JsonWithAggregatesFilter<"Image">;
    isConfirmed?: Prisma.BoolWithAggregatesFilter<"Image"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Image"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Image"> | Date | string;
};
export type ImageCreateInput = {
    id?: string;
    entityType: $Enums.ImageEntityType;
    entityId: string;
    imageRole: string;
    tempPath?: string | null;
    finalPath?: string | null;
    url?: string | null;
    order?: number;
    altText?: string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ImageUncheckedCreateInput = {
    id?: string;
    entityType: $Enums.ImageEntityType;
    entityId: string;
    imageRole: string;
    tempPath?: string | null;
    finalPath?: string | null;
    url?: string | null;
    order?: number;
    altText?: string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageRole?: Prisma.StringFieldUpdateOperationsInput | string;
    tempPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageRole?: Prisma.StringFieldUpdateOperationsInput | string;
    tempPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageCreateManyInput = {
    id?: string;
    entityType: $Enums.ImageEntityType;
    entityId: string;
    imageRole: string;
    tempPath?: string | null;
    finalPath?: string | null;
    url?: string | null;
    order?: number;
    altText?: string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageRole?: Prisma.StringFieldUpdateOperationsInput | string;
    tempPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    imageRole?: Prisma.StringFieldUpdateOperationsInput | string;
    tempPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    altText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isConfirmed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageRole?: Prisma.SortOrder;
    tempPath?: Prisma.SortOrder;
    finalPath?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ImageAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type ImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageRole?: Prisma.SortOrder;
    tempPath?: Prisma.SortOrder;
    finalPath?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageRole?: Prisma.SortOrder;
    tempPath?: Prisma.SortOrder;
    finalPath?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    altText?: Prisma.SortOrder;
    isConfirmed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ImageSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumImageEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageEntityType;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageRole?: boolean;
    tempPath?: boolean;
    finalPath?: boolean;
    url?: boolean;
    order?: boolean;
    altText?: boolean;
    metadata?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["image"]>;
export type ImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageRole?: boolean;
    tempPath?: boolean;
    finalPath?: boolean;
    url?: boolean;
    order?: boolean;
    altText?: boolean;
    metadata?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["image"]>;
export type ImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageRole?: boolean;
    tempPath?: boolean;
    finalPath?: boolean;
    url?: boolean;
    order?: boolean;
    altText?: boolean;
    metadata?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["image"]>;
export type ImageSelectScalar = {
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageRole?: boolean;
    tempPath?: boolean;
    finalPath?: boolean;
    url?: boolean;
    order?: boolean;
    altText?: boolean;
    metadata?: boolean;
    isConfirmed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entityType" | "entityId" | "imageRole" | "tempPath" | "finalPath" | "url" | "order" | "altText" | "metadata" | "isConfirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>;
export type $ImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Image";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        entityType: $Enums.ImageEntityType;
        entityId: string;
        imageRole: string;
        tempPath: string | null;
        finalPath: string | null;
        url: string | null;
        order: number;
        altText: string | null;
        metadata: runtime.JsonValue;
        isConfirmed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["image"]>;
    composites: {};
};
export type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImagePayload, S>;
export type ImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImageCountAggregateInputType | true;
};
export interface ImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Image'];
        meta: {
            name: 'Image';
        };
    };
    findUnique<T extends ImageFindUniqueArgs>(args: Prisma.SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImageFindFirstArgs>(args?: Prisma.SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImageFindManyArgs>(args?: Prisma.SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImageCreateArgs>(args: Prisma.SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImageCreateManyArgs>(args?: Prisma.SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImageDeleteArgs>(args: Prisma.SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImageUpdateArgs>(args: Prisma.SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImageUpdateManyArgs>(args: Prisma.SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImageUpsertArgs>(args: Prisma.SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImageCountArgs>(args?: Prisma.Subset<T, ImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImageCountAggregateOutputType> : number>;
    aggregate<T extends ImageAggregateArgs>(args: Prisma.Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>;
    groupBy<T extends ImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImageGroupByArgs['orderBy'];
    } : {
        orderBy?: ImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImageFieldRefs;
}
export interface Prisma__ImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImageFieldRefs {
    readonly id: Prisma.FieldRef<"Image", 'String'>;
    readonly entityType: Prisma.FieldRef<"Image", 'ImageEntityType'>;
    readonly entityId: Prisma.FieldRef<"Image", 'String'>;
    readonly imageRole: Prisma.FieldRef<"Image", 'String'>;
    readonly tempPath: Prisma.FieldRef<"Image", 'String'>;
    readonly finalPath: Prisma.FieldRef<"Image", 'String'>;
    readonly url: Prisma.FieldRef<"Image", 'String'>;
    readonly order: Prisma.FieldRef<"Image", 'Int'>;
    readonly altText: Prisma.FieldRef<"Image", 'String'>;
    readonly metadata: Prisma.FieldRef<"Image", 'Json'>;
    readonly isConfirmed: Prisma.FieldRef<"Image", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Image", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Image", 'DateTime'>;
}
export type ImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImageCreateInput, Prisma.ImageUncheckedCreateInput>;
};
export type ImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImageCreateManyInput | Prisma.ImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.ImageCreateManyInput | Prisma.ImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImageUpdateInput, Prisma.ImageUncheckedUpdateInput>;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImageUpdateManyMutationInput, Prisma.ImageUncheckedUpdateManyInput>;
    where?: Prisma.ImageWhereInput;
    limit?: number;
};
export type ImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImageUpdateManyMutationInput, Prisma.ImageUncheckedUpdateManyInput>;
    where?: Prisma.ImageWhereInput;
    limit?: number;
};
export type ImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImageCreateInput, Prisma.ImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImageUpdateInput, Prisma.ImageUncheckedUpdateInput>;
};
export type ImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    limit?: number;
};
export type ImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
};
export {};
