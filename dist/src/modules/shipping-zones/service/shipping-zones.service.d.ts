import { Prisma } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { BaseService } from '../../../common/services/base.service';
import { CreateShippingZoneDto, UpdateShippingZoneDto, QueryShippingZoneDto } from '../dto';
type ShippingZoneEntity = Prisma.ShippingZoneGetPayload<{
    include: {
        areas: {
            include: {
                department: true;
                province: true;
                district: true;
            };
        };
        rates: true;
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
export declare class ShippingZonesService extends BaseService<ShippingZoneEntity, CreateShippingZoneDto, UpdateShippingZoneDto, Prisma.ShippingZoneWhereInput, Prisma.ShippingZoneOrderByWithRelationInput> {
    protected useSoftDelete: boolean;
    constructor(prisma: PrismaService);
    findAllZones(query: QueryShippingZoneDto): Promise<import("../../../common/interfaces").PaginatedResult<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    findZoneById(id: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    findZoneByUbigeo(departmentId: string, provinceId?: string, districtId?: string): Promise<({
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    createZone(dto: CreateShippingZoneDto, adminId: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    updateZone(id: string, dto: UpdateShippingZoneDto, adminId: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    removeZone(id: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    removeManyZones(ids: string[]): Promise<import("../../../common/interfaces").BatchResult>;
    findRatesByZone(zoneId: string): Promise<({
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
        estimatedUnit: import("generated/prisma/client").DeliveryUnit;
    })[]>;
    softDeleteZone(id: string, adminId: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    softDeleteManyZones(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    restoreZone(id: string, adminId: string): Promise<{
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
            deliveryType: import("generated/prisma/client").DeliveryType;
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
            estimatedUnit: import("generated/prisma/client").DeliveryUnit;
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
    restoreManyZones(ids: string[], adminId: string): Promise<import("../../../common/interfaces").BatchResult>;
    getDepartments(): Promise<{
        id: string;
        name: string;
    }[]>;
    getProvincesByDepartment(departmentId: string): Promise<{
        id: string;
        name: string;
        departmentId: string;
    }[]>;
    getDistrictsByProvince(provinceId: string): Promise<{
        id: string;
        name: string;
        provinceId: string;
    }[]>;
}
export {};
