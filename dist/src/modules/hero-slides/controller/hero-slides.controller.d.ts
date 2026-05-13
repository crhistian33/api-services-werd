import { HeroSlidesService } from '../service/hero-slides.service';
import { CreateHeroSlideDto, UpdateHeroSlideDto, QueryHeroSlideDto, BulkChangeStatusHeroSlideDto, BulkDeleteHeroSlideDto, BulkReorderHeroSlidesDto, BulkRestoreHeroSlideDto, BulkSoftDeleteHeroSlideDto } from '../dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class HeroSlidesController {
    private readonly heroSlidesService;
    constructor(heroSlidesService: HeroSlidesService);
    findAllPublic(query: QueryHeroSlideDto): Promise<{
        data: ({
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
            linkProduct: {
                id: string;
                name: string;
                slug: string;
            } | null;
            linkCategory: {
                id: string;
                name: string;
                slug: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
            startsAt: Date | null;
            endsAt: Date | null;
            title: string | null;
            subtitle: string | null;
            linkType: import("../../../../generated/prisma/enums").LinkType;
            linkProductId: string | null;
            linkCategoryId: string | null;
            linkUrl: string | null;
            linkText: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    changeStatus(dto: BulkChangeStatusHeroSlideDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeleteHeroSlideDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestoreHeroSlideDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    reorder(dto: BulkReorderHeroSlidesDto, admin: AdminJwtPayload): Promise<({
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    })[]>;
    removeMany(dto: BulkDeleteHeroSlideDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryHeroSlideDto): Promise<{
        data: ({
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
            linkProduct: {
                id: string;
                name: string;
                slug: string;
            } | null;
            linkCategory: {
                id: string;
                name: string;
                slug: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            deletedById: string | null;
            deletedAt: Date | null;
            startsAt: Date | null;
            endsAt: Date | null;
            title: string | null;
            subtitle: string | null;
            linkType: import("../../../../generated/prisma/enums").LinkType;
            linkProductId: string | null;
            linkCategoryId: string | null;
            linkUrl: string | null;
            linkText: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    create(dto: CreateHeroSlideDto, admin: AdminJwtPayload): Promise<{
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    update(id: string, dto: UpdateHeroSlideDto, admin: AdminJwtPayload): Promise<{
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
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
        linkProduct: {
            id: string;
            name: string;
            slug: string;
        } | null;
        linkCategory: {
            id: string;
            name: string;
            slug: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        startsAt: Date | null;
        endsAt: Date | null;
        title: string | null;
        subtitle: string | null;
        linkType: import("../../../../generated/prisma/enums").LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    }>;
}
