import { ProductStatus } from 'generated/prisma/client';
import { SpecItemDto, FeatureItemDto } from './specs-product.dto';
export declare class CreateProductDto {
    name: string;
    sku: string;
    shortDescription?: string;
    description?: string;
    categoryId: string;
    brandId?: string;
    status?: ProductStatus;
    isFeatured?: boolean;
    stock?: number;
    weight?: number;
    metaTitle?: string;
    metaDescription?: string;
    tempMainImageId?: string;
    tempGalleryImageIds?: string[];
    price?: number;
    compareAtPrice?: number;
    cost?: number;
    specs?: SpecItemDto[];
    features?: FeatureItemDto[];
}
