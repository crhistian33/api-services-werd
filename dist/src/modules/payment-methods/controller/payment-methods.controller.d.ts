import { PaymentMethodsService } from '../service/payment-methods.service';
import { CreatePaymentMethodDto, UpdatePaymentMethodDto, QueryPaymentMethodDto } from '../dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
import { BulkDeletePaymentMethodDto, BulkReorderPaymentMethodDto, BulkChangeStatusPaymentMethodDto } from '../dto';
export declare class PaymentMethodsController {
    private readonly service;
    constructor(service: PaymentMethodsService);
    findAllPublic(): Promise<{
        id: string;
        name: string;
        sortOrder: number;
        code: string;
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }[]>;
    changeStatus(dto: BulkChangeStatusPaymentMethodDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    reorder(dto: BulkReorderPaymentMethodDto, admin: AdminJwtPayload): Promise<({
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
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    })[]>;
    removeMany(dto: BulkDeletePaymentMethodDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryPaymentMethodDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>>;
    create(dto: CreatePaymentMethodDto, admin: AdminJwtPayload): Promise<{
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
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>;
    update(id: string, dto: UpdatePaymentMethodDto, admin: AdminJwtPayload): Promise<{
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
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        isActive: boolean;
        sortOrder: number;
        createdById: string | null;
        updatedById: string | null;
        code: string;
        type: import("../../../../generated/prisma/enums").PaymentMethodType;
        config: import("@prisma/client/runtime/client").JsonValue;
        instructions: string | null;
    }>;
}
