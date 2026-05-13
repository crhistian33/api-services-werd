"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingZonesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const base_service_1 = require("../../../common/services/base.service");
const LIST_INCLUDE = {
    _count: { select: { areas: true, rates: true } },
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const DETAIL_INCLUDE = {
    areas: {
        orderBy: { departmentId: 'asc' },
        include: {
            department: { select: { id: true, name: true } },
            province: { select: { id: true, name: true } },
            district: { select: { id: true, name: true } },
        },
    },
    rates: {
        orderBy: { price: 'asc' },
        include: {
            _count: {
                select: { orders: true },
            },
            createdBy: { select: { id: true, name: true, email: true } },
            updatedBy: { select: { id: true, name: true, email: true } },
        },
    },
    createdBy: { select: { id: true, name: true, email: true } },
    updatedBy: { select: { id: true, name: true, email: true } },
};
const RELATION_CHECKS = [
    { countKey: 'orders', label: 'pedido(s) asociado(s)' },
];
let ShippingZonesService = class ShippingZonesService extends base_service_1.BaseService {
    useSoftDelete = true;
    constructor(prisma) {
        super(prisma, 'shippingZone');
    }
    async findAllZones(query) {
        const { search, isActive, page, limit, onlyTrash } = query;
        return this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(search !== undefined && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { description: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: [{ name: 'asc' }, { createdAt: 'desc' }],
            include: LIST_INCLUDE,
            pagination: { page, limit },
            onlyTrash,
        });
    }
    async findZoneById(id) {
        return this.findOne(id, DETAIL_INCLUDE);
    }
    async findZoneByUbigeo(departmentId, provinceId, districtId) {
        const area = await this.prisma.shippingZoneArea.findFirst({
            where: {
                departmentId,
                ...(districtId
                    ? { provinceId, districtId }
                    : provinceId
                        ? { provinceId, districtId: null }
                        : { provinceId: null, districtId: null }),
                zone: { isActive: true, rates: { some: { isActive: true } } },
            },
            include: {
                zone: {
                    include: {
                        rates: {
                            where: { isActive: true },
                            orderBy: { price: 'asc' },
                        },
                    },
                },
            },
            orderBy: {
                districtId: 'desc',
            },
        });
        return area?.zone ?? null;
    }
    async createZone(dto, adminId) {
        const { areas, rates, ...zoneData } = dto;
        const zone = await this.prisma.$transaction(async (tx) => {
            const created = await this.create({
                ...zoneData,
                createdById: adminId,
                updatedById: adminId,
            }, undefined, tx);
            await Promise.all([
                areas?.length
                    ? tx.shippingZoneArea.createMany({
                        data: areas.map((a) => ({ ...a, zoneId: created.id })),
                    })
                    : Promise.resolve(),
                rates?.length
                    ? tx.shippingRate.createMany({
                        data: rates.map((r) => ({
                            ...r,
                            zoneId: created.id,
                            createdById: adminId,
                            updatedById: adminId,
                        })),
                    })
                    : Promise.resolve(),
            ]);
            return created;
        });
        return this.findZoneById(zone.id);
    }
    async updateZone(id, dto, adminId) {
        const { areas, rates, ...zoneData } = dto;
        await this.assertExists(id);
        await this.prisma.$transaction(async (tx) => {
            await this.update(id, { ...zoneData, updatedById: adminId }, undefined, tx);
            if (areas) {
                await tx.shippingZoneArea.deleteMany({ where: { zoneId: id } });
                if (areas.length > 0) {
                    await tx.shippingZoneArea.createMany({
                        data: areas.map((a) => ({ ...a, zoneId: id })),
                    });
                }
            }
            if (rates) {
                await tx.shippingRate.deleteMany({ where: { zoneId: id } });
                if (rates.length > 0) {
                    await tx.shippingRate.createMany({
                        data: rates.map((r) => ({
                            ...r,
                            zoneId: id,
                            updatedById: adminId,
                            createdById: adminId,
                        })),
                    });
                }
            }
        });
        return this.findZoneById(id);
    }
    async removeZone(id) {
        await this.checkRelations(id, RELATION_CHECKS);
        return this.remove(id);
    }
    async removeManyZones(ids) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        return this.removeMany(ids);
    }
    async findRatesByZone(zoneId) {
        await this.assertExists(zoneId);
        return this.prisma.shippingRate.findMany({
            where: { zoneId },
            orderBy: { price: 'asc' },
            include: {
                createdBy: { select: { id: true, name: true, email: true } },
                updatedBy: { select: { id: true, name: true, email: true } },
                _count: { select: { orders: true } },
            },
        });
    }
    async softDeleteZone(id, adminId) {
        await this.checkRelations(id, RELATION_CHECKS);
        return this.softDelete(id, adminId);
    }
    async softDeleteManyZones(ids, adminId) {
        await this.checkRelationsMany(ids, RELATION_CHECKS);
        return this.softDeleteMany(ids, adminId);
    }
    async restoreZone(id, adminId) {
        await this.assertNotDeleted(id);
        return this.restore(id, adminId);
    }
    async restoreManyZones(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
    async getDepartments() {
        return this.prisma.department.findMany({
            orderBy: { name: 'asc' },
            select: { id: true, name: true },
        });
    }
    async getProvincesByDepartment(departmentId) {
        return this.prisma.province.findMany({
            where: { departmentId },
            orderBy: { name: 'asc' },
            select: { id: true, name: true, departmentId: true },
        });
    }
    async getDistrictsByProvince(provinceId) {
        return this.prisma.district.findMany({
            where: { provinceId },
            orderBy: { name: 'asc' },
            select: { id: true, name: true, provinceId: true },
        });
    }
};
exports.ShippingZonesService = ShippingZonesService;
exports.ShippingZonesService = ShippingZonesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShippingZonesService);
//# sourceMappingURL=shipping-zones.service.js.map