import { Prisma } from 'generated/prisma/client';
import { BaseService } from '../../../common/services/base.service';
import { BulkReorderFaqsDto, CreateFaqDto, QueryFaqDto, UpdateFaqDto } from '../dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
type FaqEntity = Prisma.FaqGetPayload<{
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
    };
}>;
export declare class FaqsService extends BaseService<FaqEntity, CreateFaqDto, UpdateFaqDto, Prisma.FaqWhereInput, Prisma.FaqOrderByWithRelationInput> {
    protected useSoftDelete: boolean;
    protected nameField: string;
    constructor(prisma: PrismaService);
    findAllFaqs(query: QueryFaqDto): Promise<PaginatedResult<FaqEntity>>;
    findFaqById(id: string): Promise<{
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
    } & {
        category: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        question: string;
        answer: string;
    }>;
    createFaq(dto: CreateFaqDto, adminId: string): Promise<{
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
    } & {
        category: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        question: string;
        answer: string;
    }>;
    updateFaq(id: string, dto: UpdateFaqDto, adminId: string): Promise<{
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
    } & {
        category: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        question: string;
        answer: string;
    }>;
    removeFaq(id: string): Promise<{
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
    } & {
        category: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        question: string;
        answer: string;
    }>;
    removeManyFaqs(ids: string[]): Promise<import("../../../common/interfaces/pagination.interface").BatchResult>;
    reorder(dto: BulkReorderFaqsDto, adminId: string): Promise<({
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
    } & {
        category: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        question: string;
        answer: string;
    })[]>;
}
export {};
