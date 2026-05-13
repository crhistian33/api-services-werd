import { ProductsService } from '../service/products.service';
import { ProductPriceService } from '../service/product-price.service';
import { ProductSpecsService } from '../service/product-specs.service';
import { CreateProductDto, UpdateProductDto, QueryProductDto, BulkDeleteProductDto, BulkSoftDeleteProductDto, BulkRestoreProductDto } from '../dto';
import { SetPriceDto } from '../dto/price-product.dto';
import { SetSpecsDto, SetFeaturesDto } from '../dto/specs-product.dto';
import { BulkChangeStatusProductDto } from '../dto/bulk-change-status.dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class ProductsController {
    private readonly productsService;
    private readonly priceService;
    private readonly specsService;
    constructor(productsService: ProductsService, priceService: ProductPriceService, specsService: ProductSpecsService);
    findAllPublic(query: QueryProductDto): Promise<{
        data: ({
            category: {
                id: string;
                name: string;
                slug: string;
            };
            price: {
                id: string;
                updatedAt: Date;
                productId: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                cost: import("@prisma/client-runtime-utils").Decimal | null;
                currency: string;
            } | null;
            brand: {
                id: string;
                name: string;
                slug: string;
            } | null;
            createdBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            updatedBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            deletedBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            specs: {
                id: string;
                sortOrder: number;
                productId: string;
                specKey: string;
                specValue: string;
            }[];
            features: {
                id: string;
                sortOrder: number;
                productId: string;
                feature: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
            sku: string;
            shortDescription: string | null;
            categoryId: string;
            brandId: string | null;
            status: import("../../../../generated/prisma/enums").ProductStatus;
            isFeatured: boolean;
            stock: number;
            weight: import("@prisma/client-runtime-utils").Decimal | null;
            metaTitle: string | null;
            metaDescription: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    findBySlugPublic(slug: string): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    changeStatus(dto: BulkChangeStatusProductDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeleteProductDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestoreProductDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    removeMany(dto: BulkDeleteProductDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryProductDto): Promise<{
        data: ({
            category: {
                id: string;
                name: string;
                slug: string;
            };
            price: {
                id: string;
                updatedAt: Date;
                productId: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
                cost: import("@prisma/client-runtime-utils").Decimal | null;
                currency: string;
            } | null;
            brand: {
                id: string;
                name: string;
                slug: string;
            } | null;
            createdBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            updatedBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            deletedBy: {
                id: string;
                name: string;
                email: string;
            } | null;
            specs: {
                id: string;
                sortOrder: number;
                productId: string;
                specKey: string;
                specValue: string;
            }[];
            features: {
                id: string;
                sortOrder: number;
                productId: string;
                feature: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
            sku: string;
            shortDescription: string | null;
            categoryId: string;
            brandId: string | null;
            status: import("../../../../generated/prisma/enums").ProductStatus;
            isFeatured: boolean;
            stock: number;
            weight: import("@prisma/client-runtime-utils").Decimal | null;
            metaTitle: string | null;
            metaDescription: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    create(dto: CreateProductDto, admin: AdminJwtPayload): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    findOne(id: string): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    update(id: string, dto: UpdateProductDto, admin: AdminJwtPayload): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    getPrice(id: string): Promise<{
        id: string;
        updatedAt: Date;
        productId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
    }>;
    setPrice(id: string, dto: SetPriceDto): Promise<{
        id: string;
        updatedAt: Date;
        productId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        currency: string;
    }>;
    getPriceHistory(id: string): Promise<{
        id: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        cost: import("@prisma/client-runtime-utils").Decimal | null;
        marginPct: import("@prisma/client-runtime-utils").Decimal | null;
        reason: string | null;
        effectiveFrom: Date;
        changedBy: {
            id: string;
            name: string;
        } | null;
    }[]>;
    setSpecs(id: string, dto: SetSpecsDto): Promise<void>;
    setFeatures(id: string, dto: SetFeaturesDto): Promise<void>;
    softDelete(id: string, admin: AdminJwtPayload): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
    restore(id: string, admin: AdminJwtPayload): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
    remove(id: string): Promise<{
        category: {
            id: string;
            name: string;
            slug: string;
        };
        price: {
            id: string;
            updatedAt: Date;
            productId: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            compareAtPrice: import("@prisma/client-runtime-utils").Decimal | null;
            cost: import("@prisma/client-runtime-utils").Decimal | null;
            currency: string;
        } | null;
        brand: {
            id: string;
            name: string;
            slug: string;
        } | null;
        createdBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        updatedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        deletedBy: {
            id: string;
            name: string;
            email: string;
        } | null;
        specs: {
            id: string;
            sortOrder: number;
            productId: string;
            specKey: string;
            specValue: string;
        }[];
        features: {
            id: string;
            sortOrder: number;
            productId: string;
            feature: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        sku: string;
        shortDescription: string | null;
        categoryId: string;
        brandId: string | null;
        status: import("../../../../generated/prisma/enums").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
}
