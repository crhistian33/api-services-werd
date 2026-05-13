import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { CreatePaymentMethodDto, UpdatePaymentMethodDto, QueryPaymentMethodDto } from '../dto';
import { BulkReorderPaymentMethodDto } from '../dto/bulk-payment-method.dto';
type PaymentMethodEntity = Prisma.PaymentMethodGetPayload<{
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
export declare class PaymentMethodsService extends BaseService<PaymentMethodEntity, CreatePaymentMethodDto, UpdatePaymentMethodDto, Prisma.PaymentMethodWhereInput, Prisma.PaymentMethodOrderByWithRelationInput> {
    protected nameField: string;
    constructor(prisma: PrismaService);
    findAllMethods(query: QueryPaymentMethodDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("generated/prisma/client").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>>;
    createMethod(dto: CreatePaymentMethodDto, adminId: string): Promise<{
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("generated/prisma/client").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>;
    updateMethod(id: string, dto: UpdatePaymentMethodDto, adminId: string): Promise<{
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("generated/prisma/client").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>;
    findAllPublic(): Promise<{
        id: string;
        name: string;
        sortOrder: number;
        code: string;
        type: import("generated/prisma/client").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }[]>;
    reorder(dto: BulkReorderPaymentMethodDto, adminId: string): Promise<({
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("generated/prisma/client").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    })[]>;
}
export {};
