import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { ProductPriceService } from './product-price.service';
import { ProductSpecsService } from './product-specs.service';
import { CreateProductDto, UpdateProductDto, QueryProductDto } from '../dto';
type ProductEntity = Prisma.ProductGetPayload<{
    include: {
        category: {
            select: {
                id: true;
                name: true;
                slug: true;
            };
        };
        brand: {
            select: {
                id: true;
                name: true;
                slug: true;
            };
        };
        price: true;
        specs: true;
        features: true;
        createdBy: {
            select: {
                id: true;
                name: true;
                email: true;
            };
        };
        updatedBy: {
            select: {
                id: true;
                name: true;
                email: true;
            };
        };
        deletedBy: {
            select: {
                id: true;
                name: true;
                email: true;
            };
        };
    };
}>;
export declare class ProductsService extends SluggableService<ProductEntity, CreateProductDto, UpdateProductDto, Prisma.ProductWhereInput, Prisma.ProductOrderByWithRelationInput> {
    private readonly imageRecord;
    private readonly priceService;
    private readonly specsService;
    protected useSoftDelete: boolean;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService, priceService: ProductPriceService, specsService: ProductSpecsService);
    findAllProducts(query: QueryProductDto): Promise<{
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
            status: import("generated/prisma/client").ProductStatus;
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
    findAllProductsPublic(query: QueryProductDto): Promise<{
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
            status: import("generated/prisma/client").ProductStatus;
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
    findProductById(id: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    findProductBySlug(slug: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    createProduct(dto: CreateProductDto, adminId: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    updateProduct(id: string, dto: UpdateProductDto, adminId: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    changeStatusManyPro(ids: string[], status: string, adminId: string): Promise<{
        count: number;
    }>;
    removeProduct(id: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
    removeManyProducts(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    softDeleteProduct(id: string, adminId: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
    softDeleteManyProducts(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restoreProduct(id: string, adminId: string): Promise<{
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
        status: import("generated/prisma/client").ProductStatus;
        isFeatured: boolean;
        stock: number;
        weight: import("@prisma/client-runtime-utils").Decimal | null;
        metaTitle: string | null;
        metaDescription: string | null;
    }>;
    restoreManyProducts(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
}
export {};
