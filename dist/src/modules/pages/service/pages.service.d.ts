import { PageStatus, Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { CreatePageDto, UpdatePageDto } from '../dto';
import { QueryPageDto } from '../dto/query-page.dto';
type PageEntity = Prisma.PageGetPayload<{
    include: {
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
export declare class PagesService extends SluggableService<PageEntity, CreatePageDto, UpdatePageDto, Prisma.PageWhereInput, Prisma.PageOrderByWithRelationInput> {
    protected useSoftDelete: boolean;
    protected nameField: string;
    constructor(prisma: PrismaService);
    findAllPages(query: QueryPageDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>>;
    findAllPagesPublic(query: QueryPageDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>>;
    findPageById(id: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    findPageBySlug(slug: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    findPageBySlugPublic(slug: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    createPage(dto: CreatePageDto, adminId: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    updatePage(id: string, dto: UpdatePageDto, adminId: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    softDeletePage(id: string, adminId: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    softDeleteManyPages(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restorePage(id: string, adminId: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    restoreManyPages(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    removePage(id: string): Promise<{
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
        status: PageStatus;
        metaTitle: string | null;
        metaDescription: string | null;
        title: string;
        content: string | null;
    }>;
    removeManyPages(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    changeStatusManyPage(ids: string[], status: PageStatus, adminId: string): Promise<{
        count: number;
    }>;
}
export {};
