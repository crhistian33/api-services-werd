import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SiteConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$SiteConfigPayload>;
export type AggregateSiteConfig = {
    _count: SiteConfigCountAggregateOutputType | null;
    _avg: SiteConfigAvgAggregateOutputType | null;
    _sum: SiteConfigSumAggregateOutputType | null;
    _min: SiteConfigMinAggregateOutputType | null;
    _max: SiteConfigMaxAggregateOutputType | null;
};
export type SiteConfigAvgAggregateOutputType = {
    taxRate: runtime.Decimal | null;
};
export type SiteConfigSumAggregateOutputType = {
    taxRate: runtime.Decimal | null;
};
export type SiteConfigMinAggregateOutputType = {
    id: string | null;
    storeName: string | null;
    storeEmail: string | null;
    supportEmail: string | null;
    phonePrimary: string | null;
    phoneSecondary: string | null;
    whatsappNumber: string | null;
    address: string | null;
    currency: string | null;
    taxRate: runtime.Decimal | null;
    metaTitle: string | null;
    metaDescription: string | null;
    googleAnalyticsId: string | null;
    facebookPixelId: string | null;
    updatedAt: Date | null;
};
export type SiteConfigMaxAggregateOutputType = {
    id: string | null;
    storeName: string | null;
    storeEmail: string | null;
    supportEmail: string | null;
    phonePrimary: string | null;
    phoneSecondary: string | null;
    whatsappNumber: string | null;
    address: string | null;
    currency: string | null;
    taxRate: runtime.Decimal | null;
    metaTitle: string | null;
    metaDescription: string | null;
    googleAnalyticsId: string | null;
    facebookPixelId: string | null;
    updatedAt: Date | null;
};
export type SiteConfigCountAggregateOutputType = {
    id: number;
    storeName: number;
    storeEmail: number;
    supportEmail: number;
    phonePrimary: number;
    phoneSecondary: number;
    whatsappNumber: number;
    address: number;
    currency: number;
    taxRate: number;
    metaTitle: number;
    metaDescription: number;
    googleAnalyticsId: number;
    facebookPixelId: number;
    updatedAt: number;
    _all: number;
};
export type SiteConfigAvgAggregateInputType = {
    taxRate?: true;
};
export type SiteConfigSumAggregateInputType = {
    taxRate?: true;
};
export type SiteConfigMinAggregateInputType = {
    id?: true;
    storeName?: true;
    storeEmail?: true;
    supportEmail?: true;
    phonePrimary?: true;
    phoneSecondary?: true;
    whatsappNumber?: true;
    address?: true;
    currency?: true;
    taxRate?: true;
    metaTitle?: true;
    metaDescription?: true;
    googleAnalyticsId?: true;
    facebookPixelId?: true;
    updatedAt?: true;
};
export type SiteConfigMaxAggregateInputType = {
    id?: true;
    storeName?: true;
    storeEmail?: true;
    supportEmail?: true;
    phonePrimary?: true;
    phoneSecondary?: true;
    whatsappNumber?: true;
    address?: true;
    currency?: true;
    taxRate?: true;
    metaTitle?: true;
    metaDescription?: true;
    googleAnalyticsId?: true;
    facebookPixelId?: true;
    updatedAt?: true;
};
export type SiteConfigCountAggregateInputType = {
    id?: true;
    storeName?: true;
    storeEmail?: true;
    supportEmail?: true;
    phonePrimary?: true;
    phoneSecondary?: true;
    whatsappNumber?: true;
    address?: true;
    currency?: true;
    taxRate?: true;
    metaTitle?: true;
    metaDescription?: true;
    googleAnalyticsId?: true;
    facebookPixelId?: true;
    updatedAt?: true;
    _all?: true;
};
export type SiteConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteConfigWhereInput;
    orderBy?: Prisma.SiteConfigOrderByWithRelationInput | Prisma.SiteConfigOrderByWithRelationInput[];
    cursor?: Prisma.SiteConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SiteConfigCountAggregateInputType;
    _avg?: SiteConfigAvgAggregateInputType;
    _sum?: SiteConfigSumAggregateInputType;
    _min?: SiteConfigMinAggregateInputType;
    _max?: SiteConfigMaxAggregateInputType;
};
export type GetSiteConfigAggregateType<T extends SiteConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateSiteConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSiteConfig[P]> : Prisma.GetScalarType<T[P], AggregateSiteConfig[P]>;
};
export type SiteConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteConfigWhereInput;
    orderBy?: Prisma.SiteConfigOrderByWithAggregationInput | Prisma.SiteConfigOrderByWithAggregationInput[];
    by: Prisma.SiteConfigScalarFieldEnum[] | Prisma.SiteConfigScalarFieldEnum;
    having?: Prisma.SiteConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SiteConfigCountAggregateInputType | true;
    _avg?: SiteConfigAvgAggregateInputType;
    _sum?: SiteConfigSumAggregateInputType;
    _min?: SiteConfigMinAggregateInputType;
    _max?: SiteConfigMaxAggregateInputType;
};
export type SiteConfigGroupByOutputType = {
    id: string;
    storeName: string;
    storeEmail: string;
    supportEmail: string | null;
    phonePrimary: string | null;
    phoneSecondary: string | null;
    whatsappNumber: string | null;
    address: string | null;
    currency: string;
    taxRate: runtime.Decimal;
    metaTitle: string | null;
    metaDescription: string | null;
    googleAnalyticsId: string | null;
    facebookPixelId: string | null;
    updatedAt: Date;
    _count: SiteConfigCountAggregateOutputType | null;
    _avg: SiteConfigAvgAggregateOutputType | null;
    _sum: SiteConfigSumAggregateOutputType | null;
    _min: SiteConfigMinAggregateOutputType | null;
    _max: SiteConfigMaxAggregateOutputType | null;
};
type GetSiteConfigGroupByPayload<T extends SiteConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SiteConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SiteConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SiteConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SiteConfigGroupByOutputType[P]>;
}>>;
export type SiteConfigWhereInput = {
    AND?: Prisma.SiteConfigWhereInput | Prisma.SiteConfigWhereInput[];
    OR?: Prisma.SiteConfigWhereInput[];
    NOT?: Prisma.SiteConfigWhereInput | Prisma.SiteConfigWhereInput[];
    id?: Prisma.StringFilter<"SiteConfig"> | string;
    storeName?: Prisma.StringFilter<"SiteConfig"> | string;
    storeEmail?: Prisma.StringFilter<"SiteConfig"> | string;
    supportEmail?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    phonePrimary?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    phoneSecondary?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    whatsappNumber?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    address?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    currency?: Prisma.StringFilter<"SiteConfig"> | string;
    taxRate?: Prisma.DecimalFilter<"SiteConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    googleAnalyticsId?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    facebookPixelId?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"SiteConfig"> | Date | string;
    socialLinks?: Prisma.SocialLinkListRelationFilter;
};
export type SiteConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeEmail?: Prisma.SortOrder;
    supportEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    phonePrimary?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneSecondary?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsappNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleAnalyticsId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facebookPixelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    socialLinks?: Prisma.SocialLinkOrderByRelationAggregateInput;
};
export type SiteConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SiteConfigWhereInput | Prisma.SiteConfigWhereInput[];
    OR?: Prisma.SiteConfigWhereInput[];
    NOT?: Prisma.SiteConfigWhereInput | Prisma.SiteConfigWhereInput[];
    storeName?: Prisma.StringFilter<"SiteConfig"> | string;
    storeEmail?: Prisma.StringFilter<"SiteConfig"> | string;
    supportEmail?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    phonePrimary?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    phoneSecondary?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    whatsappNumber?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    address?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    currency?: Prisma.StringFilter<"SiteConfig"> | string;
    taxRate?: Prisma.DecimalFilter<"SiteConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    metaDescription?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    googleAnalyticsId?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    facebookPixelId?: Prisma.StringNullableFilter<"SiteConfig"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"SiteConfig"> | Date | string;
    socialLinks?: Prisma.SocialLinkListRelationFilter;
}, "id">;
export type SiteConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeEmail?: Prisma.SortOrder;
    supportEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    phonePrimary?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneSecondary?: Prisma.SortOrderInput | Prisma.SortOrder;
    whatsappNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrderInput | Prisma.SortOrder;
    metaDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleAnalyticsId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facebookPixelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SiteConfigCountOrderByAggregateInput;
    _avg?: Prisma.SiteConfigAvgOrderByAggregateInput;
    _max?: Prisma.SiteConfigMaxOrderByAggregateInput;
    _min?: Prisma.SiteConfigMinOrderByAggregateInput;
    _sum?: Prisma.SiteConfigSumOrderByAggregateInput;
};
export type SiteConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.SiteConfigScalarWhereWithAggregatesInput | Prisma.SiteConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.SiteConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SiteConfigScalarWhereWithAggregatesInput | Prisma.SiteConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SiteConfig"> | string;
    storeName?: Prisma.StringWithAggregatesFilter<"SiteConfig"> | string;
    storeEmail?: Prisma.StringWithAggregatesFilter<"SiteConfig"> | string;
    supportEmail?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    phonePrimary?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    phoneSecondary?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    whatsappNumber?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    currency?: Prisma.StringWithAggregatesFilter<"SiteConfig"> | string;
    taxRate?: Prisma.DecimalWithAggregatesFilter<"SiteConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    metaDescription?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    googleAnalyticsId?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    facebookPixelId?: Prisma.StringNullableWithAggregatesFilter<"SiteConfig"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SiteConfig"> | Date | string;
};
export type SiteConfigCreateInput = {
    id?: string;
    storeName: string;
    storeEmail: string;
    supportEmail?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
    whatsappNumber?: string | null;
    address?: string | null;
    currency?: string;
    taxRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    googleAnalyticsId?: string | null;
    facebookPixelId?: string | null;
    updatedAt?: Date | string;
    socialLinks?: Prisma.SocialLinkCreateNestedManyWithoutSiteConfigInput;
};
export type SiteConfigUncheckedCreateInput = {
    id?: string;
    storeName: string;
    storeEmail: string;
    supportEmail?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
    whatsappNumber?: string | null;
    address?: string | null;
    currency?: string;
    taxRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    googleAnalyticsId?: string | null;
    facebookPixelId?: string | null;
    updatedAt?: Date | string;
    socialLinks?: Prisma.SocialLinkUncheckedCreateNestedManyWithoutSiteConfigInput;
};
export type SiteConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    socialLinks?: Prisma.SocialLinkUpdateManyWithoutSiteConfigNestedInput;
};
export type SiteConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    socialLinks?: Prisma.SocialLinkUncheckedUpdateManyWithoutSiteConfigNestedInput;
};
export type SiteConfigCreateManyInput = {
    id?: string;
    storeName: string;
    storeEmail: string;
    supportEmail?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
    whatsappNumber?: string | null;
    address?: string | null;
    currency?: string;
    taxRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    googleAnalyticsId?: string | null;
    facebookPixelId?: string | null;
    updatedAt?: Date | string;
};
export type SiteConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SiteConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SiteConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeEmail?: Prisma.SortOrder;
    supportEmail?: Prisma.SortOrder;
    phonePrimary?: Prisma.SortOrder;
    phoneSecondary?: Prisma.SortOrder;
    whatsappNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    googleAnalyticsId?: Prisma.SortOrder;
    facebookPixelId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SiteConfigAvgOrderByAggregateInput = {
    taxRate?: Prisma.SortOrder;
};
export type SiteConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeEmail?: Prisma.SortOrder;
    supportEmail?: Prisma.SortOrder;
    phonePrimary?: Prisma.SortOrder;
    phoneSecondary?: Prisma.SortOrder;
    whatsappNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    googleAnalyticsId?: Prisma.SortOrder;
    facebookPixelId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SiteConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeEmail?: Prisma.SortOrder;
    supportEmail?: Prisma.SortOrder;
    phonePrimary?: Prisma.SortOrder;
    phoneSecondary?: Prisma.SortOrder;
    whatsappNumber?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    taxRate?: Prisma.SortOrder;
    metaTitle?: Prisma.SortOrder;
    metaDescription?: Prisma.SortOrder;
    googleAnalyticsId?: Prisma.SortOrder;
    facebookPixelId?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SiteConfigSumOrderByAggregateInput = {
    taxRate?: Prisma.SortOrder;
};
export type SiteConfigScalarRelationFilter = {
    is?: Prisma.SiteConfigWhereInput;
    isNot?: Prisma.SiteConfigWhereInput;
};
export type SiteConfigCreateNestedOneWithoutSocialLinksInput = {
    create?: Prisma.XOR<Prisma.SiteConfigCreateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedCreateWithoutSocialLinksInput>;
    connectOrCreate?: Prisma.SiteConfigCreateOrConnectWithoutSocialLinksInput;
    connect?: Prisma.SiteConfigWhereUniqueInput;
};
export type SiteConfigUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: Prisma.XOR<Prisma.SiteConfigCreateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedCreateWithoutSocialLinksInput>;
    connectOrCreate?: Prisma.SiteConfigCreateOrConnectWithoutSocialLinksInput;
    upsert?: Prisma.SiteConfigUpsertWithoutSocialLinksInput;
    connect?: Prisma.SiteConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SiteConfigUpdateToOneWithWhereWithoutSocialLinksInput, Prisma.SiteConfigUpdateWithoutSocialLinksInput>, Prisma.SiteConfigUncheckedUpdateWithoutSocialLinksInput>;
};
export type SiteConfigCreateWithoutSocialLinksInput = {
    id?: string;
    storeName: string;
    storeEmail: string;
    supportEmail?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
    whatsappNumber?: string | null;
    address?: string | null;
    currency?: string;
    taxRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    googleAnalyticsId?: string | null;
    facebookPixelId?: string | null;
    updatedAt?: Date | string;
};
export type SiteConfigUncheckedCreateWithoutSocialLinksInput = {
    id?: string;
    storeName: string;
    storeEmail: string;
    supportEmail?: string | null;
    phonePrimary?: string | null;
    phoneSecondary?: string | null;
    whatsappNumber?: string | null;
    address?: string | null;
    currency?: string;
    taxRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    googleAnalyticsId?: string | null;
    facebookPixelId?: string | null;
    updatedAt?: Date | string;
};
export type SiteConfigCreateOrConnectWithoutSocialLinksInput = {
    where: Prisma.SiteConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.SiteConfigCreateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedCreateWithoutSocialLinksInput>;
};
export type SiteConfigUpsertWithoutSocialLinksInput = {
    update: Prisma.XOR<Prisma.SiteConfigUpdateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedUpdateWithoutSocialLinksInput>;
    create: Prisma.XOR<Prisma.SiteConfigCreateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedCreateWithoutSocialLinksInput>;
    where?: Prisma.SiteConfigWhereInput;
};
export type SiteConfigUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: Prisma.SiteConfigWhereInput;
    data: Prisma.XOR<Prisma.SiteConfigUpdateWithoutSocialLinksInput, Prisma.SiteConfigUncheckedUpdateWithoutSocialLinksInput>;
};
export type SiteConfigUpdateWithoutSocialLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SiteConfigUncheckedUpdateWithoutSocialLinksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    supportEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phonePrimary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneSecondary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    whatsappNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    taxRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metaTitle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metaDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleAnalyticsId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facebookPixelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SiteConfigCountOutputType = {
    socialLinks: number;
};
export type SiteConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    socialLinks?: boolean | SiteConfigCountOutputTypeCountSocialLinksArgs;
};
export type SiteConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type SiteConfigCountOutputTypeCountSocialLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SocialLinkWhereInput;
};
export type SiteConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeName?: boolean;
    storeEmail?: boolean;
    supportEmail?: boolean;
    phonePrimary?: boolean;
    phoneSecondary?: boolean;
    whatsappNumber?: boolean;
    address?: boolean;
    currency?: boolean;
    taxRate?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    googleAnalyticsId?: boolean;
    facebookPixelId?: boolean;
    updatedAt?: boolean;
    socialLinks?: boolean | Prisma.SiteConfig$socialLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.SiteConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["siteConfig"]>;
export type SiteConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeName?: boolean;
    storeEmail?: boolean;
    supportEmail?: boolean;
    phonePrimary?: boolean;
    phoneSecondary?: boolean;
    whatsappNumber?: boolean;
    address?: boolean;
    currency?: boolean;
    taxRate?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    googleAnalyticsId?: boolean;
    facebookPixelId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["siteConfig"]>;
export type SiteConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    storeName?: boolean;
    storeEmail?: boolean;
    supportEmail?: boolean;
    phonePrimary?: boolean;
    phoneSecondary?: boolean;
    whatsappNumber?: boolean;
    address?: boolean;
    currency?: boolean;
    taxRate?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    googleAnalyticsId?: boolean;
    facebookPixelId?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["siteConfig"]>;
export type SiteConfigSelectScalar = {
    id?: boolean;
    storeName?: boolean;
    storeEmail?: boolean;
    supportEmail?: boolean;
    phonePrimary?: boolean;
    phoneSecondary?: boolean;
    whatsappNumber?: boolean;
    address?: boolean;
    currency?: boolean;
    taxRate?: boolean;
    metaTitle?: boolean;
    metaDescription?: boolean;
    googleAnalyticsId?: boolean;
    facebookPixelId?: boolean;
    updatedAt?: boolean;
};
export type SiteConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "storeName" | "storeEmail" | "supportEmail" | "phonePrimary" | "phoneSecondary" | "whatsappNumber" | "address" | "currency" | "taxRate" | "metaTitle" | "metaDescription" | "googleAnalyticsId" | "facebookPixelId" | "updatedAt", ExtArgs["result"]["siteConfig"]>;
export type SiteConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    socialLinks?: boolean | Prisma.SiteConfig$socialLinksArgs<ExtArgs>;
    _count?: boolean | Prisma.SiteConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SiteConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SiteConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SiteConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SiteConfig";
    objects: {
        socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        storeName: string;
        storeEmail: string;
        supportEmail: string | null;
        phonePrimary: string | null;
        phoneSecondary: string | null;
        whatsappNumber: string | null;
        address: string | null;
        currency: string;
        taxRate: runtime.Decimal;
        metaTitle: string | null;
        metaDescription: string | null;
        googleAnalyticsId: string | null;
        facebookPixelId: string | null;
        updatedAt: Date;
    }, ExtArgs["result"]["siteConfig"]>;
    composites: {};
};
export type SiteConfigGetPayload<S extends boolean | null | undefined | SiteConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload, S>;
export type SiteConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SiteConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SiteConfigCountAggregateInputType | true;
};
export interface SiteConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SiteConfig'];
        meta: {
            name: 'SiteConfig';
        };
    };
    findUnique<T extends SiteConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, SiteConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SiteConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SiteConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SiteConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, SiteConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SiteConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SiteConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SiteConfigFindManyArgs>(args?: Prisma.SelectSubset<T, SiteConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SiteConfigCreateArgs>(args: Prisma.SelectSubset<T, SiteConfigCreateArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SiteConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, SiteConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SiteConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SiteConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SiteConfigDeleteArgs>(args: Prisma.SelectSubset<T, SiteConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SiteConfigUpdateArgs>(args: Prisma.SelectSubset<T, SiteConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SiteConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, SiteConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SiteConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, SiteConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SiteConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SiteConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SiteConfigUpsertArgs>(args: Prisma.SelectSubset<T, SiteConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__SiteConfigClient<runtime.Types.Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SiteConfigCountArgs>(args?: Prisma.Subset<T, SiteConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SiteConfigCountAggregateOutputType> : number>;
    aggregate<T extends SiteConfigAggregateArgs>(args: Prisma.Subset<T, SiteConfigAggregateArgs>): Prisma.PrismaPromise<GetSiteConfigAggregateType<T>>;
    groupBy<T extends SiteConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SiteConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: SiteConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SiteConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SiteConfigFieldRefs;
}
export interface Prisma__SiteConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    socialLinks<T extends Prisma.SiteConfig$socialLinksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SiteConfig$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SiteConfigFieldRefs {
    readonly id: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly storeName: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly storeEmail: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly supportEmail: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly phonePrimary: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly phoneSecondary: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly whatsappNumber: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly address: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly currency: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly taxRate: Prisma.FieldRef<"SiteConfig", 'Decimal'>;
    readonly metaTitle: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly metaDescription: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly googleAnalyticsId: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly facebookPixelId: Prisma.FieldRef<"SiteConfig", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"SiteConfig", 'DateTime'>;
}
export type SiteConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where: Prisma.SiteConfigWhereUniqueInput;
};
export type SiteConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where: Prisma.SiteConfigWhereUniqueInput;
};
export type SiteConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where?: Prisma.SiteConfigWhereInput;
    orderBy?: Prisma.SiteConfigOrderByWithRelationInput | Prisma.SiteConfigOrderByWithRelationInput[];
    cursor?: Prisma.SiteConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteConfigScalarFieldEnum | Prisma.SiteConfigScalarFieldEnum[];
};
export type SiteConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where?: Prisma.SiteConfigWhereInput;
    orderBy?: Prisma.SiteConfigOrderByWithRelationInput | Prisma.SiteConfigOrderByWithRelationInput[];
    cursor?: Prisma.SiteConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteConfigScalarFieldEnum | Prisma.SiteConfigScalarFieldEnum[];
};
export type SiteConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where?: Prisma.SiteConfigWhereInput;
    orderBy?: Prisma.SiteConfigOrderByWithRelationInput | Prisma.SiteConfigOrderByWithRelationInput[];
    cursor?: Prisma.SiteConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SiteConfigScalarFieldEnum | Prisma.SiteConfigScalarFieldEnum[];
};
export type SiteConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SiteConfigCreateInput, Prisma.SiteConfigUncheckedCreateInput>;
};
export type SiteConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SiteConfigCreateManyInput | Prisma.SiteConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SiteConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    data: Prisma.SiteConfigCreateManyInput | Prisma.SiteConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SiteConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SiteConfigUpdateInput, Prisma.SiteConfigUncheckedUpdateInput>;
    where: Prisma.SiteConfigWhereUniqueInput;
};
export type SiteConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SiteConfigUpdateManyMutationInput, Prisma.SiteConfigUncheckedUpdateManyInput>;
    where?: Prisma.SiteConfigWhereInput;
    limit?: number;
};
export type SiteConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SiteConfigUpdateManyMutationInput, Prisma.SiteConfigUncheckedUpdateManyInput>;
    where?: Prisma.SiteConfigWhereInput;
    limit?: number;
};
export type SiteConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where: Prisma.SiteConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.SiteConfigCreateInput, Prisma.SiteConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SiteConfigUpdateInput, Prisma.SiteConfigUncheckedUpdateInput>;
};
export type SiteConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
    where: Prisma.SiteConfigWhereUniqueInput;
};
export type SiteConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SiteConfigWhereInput;
    limit?: number;
};
export type SiteConfig$socialLinksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SocialLinkSelect<ExtArgs> | null;
    omit?: Prisma.SocialLinkOmit<ExtArgs> | null;
    include?: Prisma.SocialLinkInclude<ExtArgs> | null;
    where?: Prisma.SocialLinkWhereInput;
    orderBy?: Prisma.SocialLinkOrderByWithRelationInput | Prisma.SocialLinkOrderByWithRelationInput[];
    cursor?: Prisma.SocialLinkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SocialLinkScalarFieldEnum | Prisma.SocialLinkScalarFieldEnum[];
};
export type SiteConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SiteConfigSelect<ExtArgs> | null;
    omit?: Prisma.SiteConfigOmit<ExtArgs> | null;
    include?: Prisma.SiteConfigInclude<ExtArgs> | null;
};
export {};
