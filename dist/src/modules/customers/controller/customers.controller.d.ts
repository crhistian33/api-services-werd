import { CustomersService } from '../service/customers.service';
import { CreateCustomerDto, UpdateCustomerDto, QueryCustomerDto, UpdateCustomerPasswordDto, ForgotPasswordResetDto, BulkSoftDeleteCustomerDto, VerifyEmailCustomerDto, ForgotPasswordDto, CreateCustomerAddressDto, UpdateCustomerAddressDto } from '../dto';
import type { AdminJwtPayload, AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    register(dto: CreateCustomerDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    verifyEmail(dto: VerifyEmailCustomerDto): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ForgotPasswordResetDto): Promise<{
        message: string;
    }>;
    getProfile(user: AuthAccessPayload): Promise<{
        _count: {
            orders: number;
        };
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            isDefault: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    updateMyPassword(user: AuthAccessPayload, dto: UpdateCustomerPasswordDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    getMyAddresses(user: AuthAccessPayload): Promise<({
        department: {
            id: string;
            name: string;
        };
        province: {
            id: string;
            name: string;
        };
        district: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        phone: string | null;
        alias: string | null;
        recipientName: string;
        departmentId: string;
        provinceId: string;
        districtId: string;
        addressLine: string;
        reference: string | null;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        isDefault: boolean;
    })[]>;
    createAddress(user: AuthAccessPayload, dto: CreateCustomerAddressDto): Promise<{
        department: {
            id: string;
            name: string;
        };
        province: {
            id: string;
            name: string;
        };
        district: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        phone: string | null;
        alias: string | null;
        recipientName: string;
        departmentId: string;
        provinceId: string;
        districtId: string;
        addressLine: string;
        reference: string | null;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        isDefault: boolean;
    }>;
    updateAddress(user: AuthAccessPayload, addressId: string, dto: UpdateCustomerAddressDto): Promise<{
        department: {
            id: string;
            name: string;
        };
        province: {
            id: string;
            name: string;
        };
        district: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        phone: string | null;
        alias: string | null;
        recipientName: string;
        departmentId: string;
        provinceId: string;
        districtId: string;
        addressLine: string;
        reference: string | null;
        latitude: import("@prisma/client-runtime-utils").Decimal | null;
        longitude: import("@prisma/client-runtime-utils").Decimal | null;
        isDefault: boolean;
    }>;
    softDeleteMany(dto: BulkSoftDeleteCustomerDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryCustomerDto): Promise<import("../../../common/interfaces").PaginatedResult<{
        _count: {
            orders: number;
        };
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            isDefault: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>>;
    findOne(id: string): Promise<{
        _count: {
            orders: number;
        };
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            isDefault: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    update(id: string, dto: UpdateCustomerDto): Promise<{
        _count: {
            orders: number;
        };
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            isDefault: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
    remove(id: string): Promise<{
        _count: {
            orders: number;
        };
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            phone: string | null;
            alias: string | null;
            recipientName: string;
            departmentId: string;
            provinceId: string;
            districtId: string;
            addressLine: string;
            reference: string | null;
            latitude: import("@prisma/client-runtime-utils").Decimal | null;
            longitude: import("@prisma/client-runtime-utils").Decimal | null;
            isDefault: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string | null;
        googleId: string | null;
        emailVerifiedAt: Date | null;
        lastLoginAt: Date | null;
    }>;
}
