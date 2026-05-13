import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateCategoryDto, UpdateCategoryDto, QueryCategoryDto } from '../dto';
type CategoryEntity = Prisma.CategoryGetPayload<{
    include: {
        parent: {
            select: {
                id: true;
                name: true;
                slug: true;
            };
        };
        children: true;
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
export declare class CategoriesService extends SluggableService<CategoryEntity, CreateCategoryDto, UpdateCategoryDto, Prisma.CategoryWhereInput, Prisma.CategoryOrderByWithRelationInput> {
    private readonly imageRecord;
    protected useSoftDelete: boolean;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService);
    findAllCategories(query: QueryCategoryDto): Promise<{
        data: ({
            parent: {
                id: string;
                name: string;
                slug: string;
            } | null;
            children: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                parentId: string | null;
                isActive: boolean;
                sortOrder: number;
                createdById: string | null;
                updatedById: string | null;
                deletedById: string | null;
                deletedAt: Date | null;
            }[];
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
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    findCategoryById(id: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    findCategoryBySlug(slug: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    createCategory(dto: CreateCategoryDto, adminId: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    updateCategory(id: string, dto: UpdateCategoryDto, adminId: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    removeCategory(id: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>;
    removeManyCategories(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    getCategoryTree(): Promise<({
        children: ({
            children: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                parentId: string | null;
                isActive: boolean;
                sortOrder: number;
                createdById: string | null;
                updatedById: string | null;
                deletedById: string | null;
                deletedAt: Date | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    })[]>;
    softDeleteCategory(id: string, adminId: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>;
    softDeleteManyCategories(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restoreCategory(id: string, adminId: string): Promise<{
        parent: {
            id: string;
            name: string;
            slug: string;
        } | null;
        children: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            parentId: string | null;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
        }[];
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        parentId: string | null;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>;
    restoreManyCategories(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
}
export {};
