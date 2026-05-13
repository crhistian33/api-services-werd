import { CategoriesService } from '../service/categories.service';
import { CreateCategoryDto, UpdateCategoryDto, QueryCategoryDto, BulkDeleteCategoryDto, BulkSoftDeleteCategoryDto, BulkRestoreCategoryDto, BulkChangeStatusCategoryDto } from '../dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
    findBySlug(slug: string): Promise<{
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
    changeStatus(dto: BulkChangeStatusCategoryDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeleteCategoryDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestoreCategoryDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    removeMany(dto: BulkDeleteCategoryDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryCategoryDto): Promise<{
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
    create(dto: CreateCategoryDto, admin: AdminJwtPayload): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, dto: UpdateCategoryDto, admin: AdminJwtPayload): Promise<{
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
    softDelete(id: string, admin: AdminJwtPayload): Promise<{
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
    restore(id: string, admin: AdminJwtPayload): Promise<{
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
    remove(id: string): Promise<{
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
}
