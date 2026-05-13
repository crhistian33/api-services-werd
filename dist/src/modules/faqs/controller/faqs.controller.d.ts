import { FaqsService } from '../service/faqs.service';
import { BulkChangeStatusFaqDto, BulkDeleteFaqDto, BulkReorderFaqsDto, CreateFaqDto, QueryFaqDto, UpdateFaqDto } from '../dto';
import type { AdminJwtPayload } from 'src/common/interfaces/jwt-payload.interface';
export declare class FaqsController {
    private readonly faqsService;
    constructor(faqsService: FaqsService);
    changeStatus(dto: BulkChangeStatusFaqDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    reorder(dto: BulkReorderFaqsDto, admin: AdminJwtPayload): Promise<({
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
    removeMany(dto: BulkDeleteFaqDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAllFaqs(query: QueryFaqDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
    }>>;
    create(dto: CreateFaqDto, admin: AdminJwtPayload): Promise<{
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
    update(id: string, dto: UpdateFaqDto, admin: AdminJwtPayload): Promise<{
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
}
