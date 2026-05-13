import { PagesService } from '../service/pages.service';
import { BulkChangeStatusPageDto, CreatePageDto, UpdatePageDto } from '../dto';
import { BulkDeletePageDto, BulkRestorePageDto, BulkSoftDeletePageDto } from '../dto/bulk-page.dto';
import { QueryPageDto } from '../dto/query-page.dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class PagesController {
    private readonly pagesService;
    constructor(pagesService: PagesService);
    findAllPublic(query: QueryPageDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>>;
    findBySlugPublic(slug: string): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    changeStatusMany(dto: BulkChangeStatusPageDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeletePageDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestorePageDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    removeMany(dto: BulkDeletePageDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryPageDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>>;
    create(dto: CreatePageDto, admin: AdminJwtPayload): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    findBySlug(slug: string): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    findOne(id: string): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    update(id: string, dto: UpdatePageDto, admin: AdminJwtPayload): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    softDelete(id: string, admin: AdminJwtPayload): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    restore(id: string, admin: AdminJwtPayload): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    remove(id: string): Promise<{
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
        slug: string;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        status: import("../../../../generated/prisma/enums").PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
}
