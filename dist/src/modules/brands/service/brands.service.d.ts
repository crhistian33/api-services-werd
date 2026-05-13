import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SluggableService } from '../../../common/services/sluggable.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { CreateBrandDto, UpdateBrandDto, QueryBrandDto } from '../dto';
type BrandEntity = Prisma.BrandGetPayload<{
    select: {
        id: true;
        name: true;
        slug: true;
        description: true;
        isActive: true;
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
        createdAt: true;
        updatedAt: true;
        deletedAt: true;
    };
}>;
export declare class BrandsService extends SluggableService<BrandEntity, CreateBrandDto, UpdateBrandDto, Prisma.BrandWhereInput, Prisma.BrandOrderByWithRelationInput> {
    private readonly imageRecord;
    protected useSoftDelete: boolean;
    constructor(prisma: PrismaService, imageRecord: ImageRecordService);
    findAllBrands(query: QueryBrandDto): Promise<{
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
    findBrandById(id: string): Promise<{
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
    findBrandBySlug(slug: string): Promise<{
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
    createBrand(dto: CreateBrandDto, adminId: string): Promise<{
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
    updateBrand(id: string, dto: UpdateBrandDto, adminId: string): Promise<{
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
    removeBrand(id: string): Promise<{
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
    removeManyBrands(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    softDeleteBrand(id: string, adminId: string): Promise<{
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
    softDeleteManyBrands(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restoreBrand(id: string, adminId: string): Promise<{
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
    restoreManyBrands(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
}
export {};
