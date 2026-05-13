import { BaseService } from '../../../common/services/base.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import { CreateCustomerDto, UpdateCustomerDto, QueryCustomerDto, UpdateCustomerPasswordDto, ForgotPasswordResetDto, ForgotPasswordDto } from '../dto';
import { MailService } from '../../mail/service/mail.service';
import { Prisma } from 'generated/prisma/client';
import { CreateCustomerAddressDto } from 'src/modules/customers/dto/create-customer-address.dto';
import { UpdateCustomerAddressDto } from 'src/modules/customers/dto/update-customer-address.dto';
type CustomerEntity = Prisma.CustomerGetPayload<{
    include: {
        addresses: true;
        _count: {
            select: {
                orders: true;
            };
        };
    };
}>;
export declare class CustomersService extends BaseService<CustomerEntity, CreateCustomerDto, UpdateCustomerDto, Prisma.CustomerWhereInput, Prisma.CustomerOrderByWithRelationInput> {
    private readonly mailService;
    protected useSoftDelete: boolean;
    protected nameField: string;
    constructor(prisma: PrismaService, mailService: MailService);
    findAllCustomers(query: QueryCustomerDto): Promise<PaginatedResult<CustomerEntity>>;
    findCustomerById(id: string): Promise<{
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
    softDeleteCustomer(id: string, adminId: string): Promise<{
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
    softDeleteManyCustomers(ids: string[], adminId: string): Promise<import("../../../common/interfaces/pagination.interface").BatchResult>;
    restoreCustomer(id: string, adminId: string): Promise<{
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
    restoreCustomers(ids: string[], adminId: string): Promise<import("../../../common/interfaces/pagination.interface").BatchResult>;
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
    verifyEmail(email: string, code: string): Promise<{
        message: string;
    }>;
    updatePassword(id: string, dto: UpdateCustomerPasswordDto): Promise<{
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
    resetPassword(dto: ForgotPasswordResetDto): Promise<{
        message: string;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    getMyAddresses(customerId: string): Promise<({
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
    createAddress(customerId: string, dto: CreateCustomerAddressDto): Promise<{
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
    updateAddress(customerId: string, addressId: string, dto: UpdateCustomerAddressDto): Promise<{
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
    deleteAddress(customerId: string, addressId: string): Promise<{
        message: string;
    }>;
    setDefaultAddress(customerId: string, addressId: string): Promise<{
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
}
export {};
