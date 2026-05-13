import { BrandsService } from '../service/brands.service';
import { CreateBrandDto, UpdateBrandDto, QueryBrandDto, BulkDeleteBrandDto, BulkSoftDeleteBrandDto, BulkRestoreBrandDto, BulkChangeStatusBrandDto } from '../dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    changeStatus(dto: BulkChangeStatusBrandDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeleteBrandDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestoreBrandDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    removeMany(dto: BulkDeleteBrandDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryBrandDto): Promise<{
        data: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            isActive: boolean;
            deletedAt: Date | null;
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
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    create(dto: CreateBrandDto, admin: AdminJwtPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    findBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    update(id: string, dto: UpdateBrandDto, admin: AdminJwtPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    softDelete(id: string, admin: AdminJwtPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
    }>;
    restore(id: string, admin: AdminJwtPayload): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        description: string | null;
        isActive: boolean;
        deletedAt: Date | null;
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
    }>;
}
