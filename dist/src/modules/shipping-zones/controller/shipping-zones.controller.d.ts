import { ShippingZonesService } from '../service/shipping-zones.service';
import { CreateShippingZoneDto, UpdateShippingZoneDto, QueryShippingZoneDto, BulkDeleteShippingZoneDto, BulkSoftDeleteShippingZoneDto, BulkRestoreShippingZoneDto, BulkChangeStatusShippingZoneDto } from '../dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class ShippingZonesController {
    private readonly shippingZonesService;
    constructor(shippingZonesService: ShippingZonesService);
    findByUbigeo(departmentId: string, provinceId?: string, districtId?: string): Promise<({
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }) | null>;
    getDepartments(): Promise<{
        id: string;
        name: string;
    }[]>;
    getProvinces(departmentId: string): Promise<{
        id: string;
        name: string;
        departmentId: string;
    }[]>;
    getDistricts(provinceId: string): Promise<{
        id: string;
        name: string;
        provinceId: string;
    }[]>;
    changeStatus(dto: BulkChangeStatusShippingZoneDto, admin: AdminJwtPayload): Promise<{
        count: number;
    }>;
    softDeleteMany(dto: BulkSoftDeleteShippingZoneDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    restoreMany(dto: BulkRestoreShippingZoneDto, admin: AdminJwtPayload): Promise<import("../../../common/interfaces").BatchResult>;
    removeMany(dto: BulkDeleteShippingZoneDto): Promise<import("../../../common/interfaces").BatchResult>;
    findAll(query: QueryShippingZoneDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>>;
    create(dto: CreateShippingZoneDto, admin: AdminJwtPayload): Promise<{
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>;
    update(id: string, dto: UpdateShippingZoneDto, admin: AdminJwtPayload): Promise<{
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
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
        areas: ({
            department: {
                id: string;
                name: string;
            };
            province: {
                id: string;
                name: string;
                departmentId: string;
            } | null;
            district: {
                id: string;
                name: string;
                provinceId: string;
            } | null;
        } & {
            id: string;
            departmentId: string;
            provinceId: string | null;
            districtId: string | null;
            deliveryType: import("../../../../generated/prisma/enums").DeliveryType;
            zoneId: string;
        })[];
        rates: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            isActive: boolean;
            sortOrder: number;
            createdById: string | null;
            updatedById: string | null;
            price: import("@prisma/client-runtime-utils").Decimal;
            minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
            zoneId: string;
            freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
            estimatedMin: number | null;
            estimatedMax: number | null;
            estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        isActive: boolean;
        createdById: string | null;
        updatedById: string | null;
        deletedById: string | null;
        deletedAt: Date | null;
    }>;
    findRates(zoneId: string): Promise<({
        _count: {
            orders: number;
        };
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
        price: import("@prisma/client-runtime-utils").Decimal;
        minOrderAmount: import("@prisma/client-runtime-utils").Decimal;
        zoneId: string;
        freeShippingThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        estimatedMin: number | null;
        estimatedMax: number | null;
        estimatedUnit: import("../../../../generated/prisma/enums").DeliveryUnit;
    })[]>;
}
