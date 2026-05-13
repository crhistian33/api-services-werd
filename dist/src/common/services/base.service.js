"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
class BaseService {
    prisma;
    modelName;
    useSoftDelete = false;
    nameField = 'name';
    constructor(prisma, modelName) {
        this.prisma = prisma;
        this.modelName = modelName;
    }
    getModel(client) {
        const db = client ?? this.prisma;
        const model = db[this.modelName];
        if (!model) {
            throw new Error(`Modelo Prisma no encontrado: ${this.modelName}`);
        }
        return model;
    }
    buildSkip(page, limit) {
        return (page - 1) * limit;
    }
    buildPaginationMeta(total, page, limit) {
        return {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        };
    }
    softDeleteFilter(includeDeleted = false, onlyTrash = false) {
        if (!this.useSoftDelete)
            return {};
        if (onlyTrash)
            return { deletedAt: { not: null } };
        if (includeDeleted)
            return {};
        return { deletedAt: null };
    }
    async assertExists(id, includeDeleted = false, client) {
        const record = await this.getModel(client).findFirst({
            where: { id, ...this.softDeleteFilter(includeDeleted) },
            select: { id: true },
        });
        if (!record) {
            throw new common_1.NotFoundException(`${this.modelName} con id "${id}" no encontrado`);
        }
    }
    async checkRelations(id, checks, label) {
        const countSelect = Object.fromEntries(checks.map((c) => [c.countKey, true]));
        const record = (await this.getModel().findUnique({
            where: { id },
            select: {
                id: true,
                [this.nameField]: true,
                _count: { select: countSelect },
            },
        }));
        if (!record) {
            throw new common_1.NotFoundException(`${this.modelName} con id "${id}" no encontrado`);
        }
        const conflicts = checks
            .filter((c) => record._count[c.countKey] > 0)
            .map((c) => ({
            reason: `Tiene ${record._count[c.countKey]} ${c.label}`,
        }));
        if (conflicts.length > 0) {
            const labelValue = (label ??
                record[this.nameField] ??
                id);
            throw new common_1.ConflictException({
                message: `No se puede eliminar "${labelValue}".`,
                details: conflicts,
            });
        }
    }
    async checkRelationsMany(ids, checks) {
        const countSelect = Object.fromEntries(checks.map((c) => [c.countKey, true]));
        const records = (await this.getModel().findMany({
            where: { id: { in: ids } },
            select: {
                id: true,
                [this.nameField]: true,
                _count: { select: countSelect },
            },
        }));
        const conflicts = records
            .filter((r) => checks.some((c) => r._count[c.countKey] > 0))
            .map((r) => ({
            id: r.id,
            name: r[this.nameField],
            reason: checks
                .filter((c) => r._count[c.countKey] > 0)
                .map((c) => `Tiene ${r._count[c.countKey]} ${c.label}`)
                .join(' y '),
        }));
        if (conflicts.length > 0) {
            throw new common_1.ConflictException({
                message: 'No se puede completar la operación. Algunos registros tienen restricciones.',
                details: conflicts,
            });
        }
    }
    async findAll(params = {}) {
        const { where, orderBy, include, select, pagination, includeDeleted = false, onlyTrash = false, } = params;
        const page = pagination?.page ?? 1;
        const limit = pagination?.limit ?? 20;
        let sfFilter = {};
        if (this.useSoftDelete) {
            if (onlyTrash) {
                sfFilter = { deletedAt: { not: null } };
            }
            else if (!includeDeleted) {
                sfFilter = { deletedAt: null };
            }
        }
        const mergedWhere = {
            ...sfFilter,
            ...where,
        };
        const [data, total] = await Promise.all([
            this.getModel().findMany({
                where: mergedWhere,
                orderBy,
                skip: this.buildSkip(page, limit),
                take: limit,
                include,
                select,
            }),
            this.getModel().count({ where: mergedWhere }),
        ]);
        return {
            data,
            meta: {
                ...this.buildPaginationMeta(total, page, limit),
            },
        };
    }
    async findOne(id, include, includeDeleted = false, client) {
        const record = (await this.getModel(client).findFirst({
            where: { id, ...this.softDeleteFilter(includeDeleted) },
            include,
        }));
        if (!record) {
            throw new common_1.NotFoundException(`${this.modelName} con id "${id}" no encontrado`);
        }
        return record;
    }
    async create(data, include, client) {
        return this.getModel(client).create({ data, include });
    }
    async update(id, data, include, client) {
        await this.assertExists(id, false, client);
        return this.getModel(client).update({
            where: { id },
            data,
            include,
        });
    }
    async remove(id, client) {
        await this.assertExists(id, true, client);
        return this.getModel(client).delete({ where: { id } });
    }
    async removeMany(ids, client) {
        return this.getModel(client).deleteMany({
            where: { id: { in: ids } },
        });
    }
    async softDelete(id, adminId, client) {
        await this.assertExists(id, false, client);
        return this.getModel(client).update({
            where: { id },
            data: { deletedAt: new Date(), deletedById: adminId },
        });
    }
    async softDeleteMany(ids, adminId, client) {
        return this.getModel(client).updateMany({
            where: { id: { in: ids } },
            data: { deletedAt: new Date(), deletedById: adminId },
        });
    }
    async restore(id, adminId, client) {
        await this.assertExists(id, true, client);
        return this.getModel(client).update({
            where: { id },
            data: {
                deletedAt: null,
                deletedById: null,
                updatedAt: new Date(),
                updatedById: adminId,
            },
        });
    }
    async restoreMany(ids, adminId, client) {
        return this.getModel(client).updateMany({
            where: { id: { in: ids } },
            data: {
                deletedAt: null,
                deletedById: null,
                updatedAt: new Date(),
                updatedById: adminId,
            },
        });
    }
    async assertNotDeleted(id, friendlyName) {
        const record = (await this.getModel().findUnique({
            where: { id },
            select: {
                id: true,
                deletedAt: true,
                [this.nameField]: true,
            },
        }));
        if (!record) {
            throw new common_1.NotFoundException(`${this.modelName} con id "${id}" no encontrado`);
        }
        if (!record.deletedAt) {
            const label = (friendlyName ??
                record[this.nameField] ??
                id);
            throw new common_1.BadRequestException(`"${label}" no está eliminado, no se puede restaurar`);
        }
    }
    async changeStatusMany(ids, status, adminId) {
        return this.getModel().updateMany({
            where: {
                id: { in: ids },
            },
            data: {
                isActive: status,
                updatedById: adminId,
            },
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map