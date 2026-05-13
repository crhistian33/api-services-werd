import { LinkType, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateHeroSlideDto, UpdateHeroSlideDto, QueryHeroSlideDto } from '../dto';
import { BulkReorderHeroSlidesDto } from '../dto/bulk-hero-slide.dto';
type HeroSlideEntity = Prisma.HeroSlideGetPayload<{
    include: {
        linkProduct: {
            select: {
                id: true;
                name: true;
                slug: true;
            };
        };
        linkCategory: {
            select: {
                id: true;
                name: true;
                slug: true;
            };
        };
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
export declare class HeroSlidesService extends BaseService<HeroSlideEntity, CreateHeroSlideDto, UpdateHeroSlideDto, Prisma.HeroSlideWhereInput, Prisma.HeroSlideOrderByWithRelationInput> {
    private readonly imageRecord;
    protected useSoftDelete: boolean;
    protected nameField: string;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService);
    findAllHeroSlides(query: QueryHeroSlideDto): Promise<{
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
            linkType: LinkType;
            linkProductId: string | null;
            linkCategoryId: string | null;
            linkUrl: string | null;
            linkText: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
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
            linkType: LinkType;
            linkProductId: string | null;
            linkCategoryId: string | null;
            linkUrl: string | null;
            linkText: string | null;
        } & {
            images: import("../../images/services/image-record.service").ImageDto[];
        })[];
        meta: import("../../../common/interfaces").PaginationMeta;
    }>;
    findHeroSlideById(id: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    createHeroSlide(dto: CreateHeroSlideDto, adminId: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    updateHeroSlide(id: string, dto: UpdateHeroSlideDto, adminId: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    }>;
    removeHeroSlide(id: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    }>;
    removeManyHeroSlides(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    reorder(dto: BulkReorderHeroSlidesDto, adminId: string): Promise<({
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    } & {
        images: import("../../images/services/image-record.service").ImageDto[];
    })[]>;
    softDeleteHeroSlide(id: string, adminId: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    }>;
    softDeleteManyHeroSlides(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restoreHeroSlide(id: string, adminId: string): Promise<{
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
        linkType: LinkType;
        linkProductId: string | null;
        linkCategoryId: string | null;
        linkUrl: string | null;
        linkText: string | null;
    }>;
    restoreManyHeroSlides(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    private validateLinkData;
}
export {};
