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
exports.ImageRecordService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const prisma_service_1 = require("../../../prisma/prisma.service");
const image_storage_service_1 = require("./image-storage.service");
let ImageRecordService = class ImageRecordService {
    prisma;
    storage;
    constructor(prisma, storage) {
        this.prisma = prisma;
        this.storage = storage;
    }
    async createTempRecord(input) {
        return this.prisma.image.create({
            data: {
                entityType: input.entityType,
                entityId: input.entityId,
                imageRole: input.imageRole,
                tempPath: input.tempPath,
                url: input.url,
                metadata: (input.metadata ?? {}),
                isConfirmed: false,
            },
        });
    }
    async findById(imageId) {
        return this.prisma.image.findUnique({
            where: { id: imageId },
        });
    }
    async findTempRecord(imageId, entityType, imageRole) {
        const record = await this.prisma.image.findUnique({
            where: { id: imageId },
        });
        if (!record) {
            throw new common_1.NotFoundException(`Imagen temporal con id "${imageId}" no encontrada`);
        }
        if (record.entityType !== entityType || record.imageRole !== imageRole) {
            throw new common_1.BadRequestException(`La imagen "${imageId}" no corresponde a entityType "${entityType}" y role "${imageRole}"`);
        }
        return record;
    }
    async moveToFinal(tempRecord, entityType, entityId, imageRole, order = 0) {
        const filename = tempRecord.url.split('/').pop();
        const tempPath = (0, path_1.join)(process.cwd(), 'uploads', 'temp', filename);
        const meta = tempRecord.metadata;
        const mimeType = meta?.mimeType ?? 'image/jpeg';
        const { finalPath, url: finalUrl, variants, } = await this.storage.moveTempToFinal(tempPath, entityType, imageRole, mimeType);
        return {
            tempRecordId: tempRecord.id,
            entityType,
            entityId,
            imageRole,
            finalPath,
            finalUrl,
            variants,
            existingMeta: tempRecord.metadata ?? {},
            order,
        };
    }
    async confirmInDb(moved, client) {
        const isSingletonRole = moved.imageRole !== 'gallery';
        if (isSingletonRole) {
            await this.deleteRoleImages(moved.entityType, moved.entityId, moved.imageRole, client);
        }
        await client.image.update({
            where: { id: moved.tempRecordId },
            data: {
                entityId: moved.entityId,
                tempPath: null,
                finalPath: moved.finalPath,
                url: moved.finalUrl,
                isConfirmed: true,
                order: moved.order,
                metadata: { ...moved.existingMeta, variants: moved.variants },
            },
        });
    }
    async deleteFiles(paths) {
        await Promise.all(paths.map((p) => this.storage.deleteFile(p).catch(() => null)));
    }
    async getEntityImages(entityType, entityId, client) {
        const db = client ?? this.prisma;
        const images = await db.image.findMany({
            where: { entityType, entityId, isConfirmed: true },
            orderBy: [{ imageRole: 'asc' }, { order: 'asc' }],
            select: {
                id: true,
                entityId: true,
                imageRole: true,
                url: true,
                altText: true,
                order: true,
                metadata: true,
            },
        });
        return images.map((img) => this.mapImageToDto(img));
    }
    async attachImagesToEntity(entity, entityType, client) {
        const images = await this.getEntityImages(entityType, entity.id, client);
        return { ...entity, images };
    }
    async attachImagesToMany(entities, entityType) {
        if (entities.length === 0)
            return [];
        const ids = entities.map((e) => e.id);
        const allImages = await this.prisma.image.findMany({
            where: { entityType, entityId: { in: ids }, isConfirmed: true },
            orderBy: [{ imageRole: 'asc' }, { order: 'asc' }],
            select: {
                id: true,
                entityId: true,
                imageRole: true,
                url: true,
                altText: true,
                order: true,
                metadata: true,
            },
        });
        const imagesByEntity = new Map();
        for (const img of allImages) {
            const list = imagesByEntity.get(img.entityId) ?? [];
            list.push(this.mapImageToDto(img));
            imagesByEntity.set(img.entityId, list);
        }
        return entities.map((e) => ({
            ...e,
            images: imagesByEntity.get(e.id) ?? [],
        }));
    }
    async deleteEntityImages(entityType, entityId, client) {
        const db = client ?? this.prisma;
        const images = await db.image.findMany({
            where: { entityType, entityId },
        });
        await Promise.all(images.map((img) => {
            const meta = img.metadata;
            if (meta?.variants) {
                return Promise.all(Object.values(meta.variants).map((variantUrl) => this.storage
                    .deleteFile((0, path_1.join)(process.cwd(), variantUrl))
                    .catch(() => null)));
            }
            const path = img.finalPath ?? img.tempPath;
            return path
                ? this.storage.deleteFile(path).catch(() => null)
                : Promise.resolve();
        }));
        await db.image.deleteMany({ where: { entityType, entityId } });
    }
    async deleteImage(imageId, client) {
        const db = client ?? this.prisma;
        const image = await db.image.findUnique({ where: { id: imageId } });
        if (!image) {
            throw new common_1.NotFoundException(`Imagen con id "${imageId}" no encontrada`);
        }
        const meta = image.metadata;
        if (meta?.variants) {
            await Promise.all(Object.values(meta.variants).map((variantUrl) => this.storage
                .deleteFile((0, path_1.join)(process.cwd(), variantUrl))
                .catch(() => null)));
        }
        else {
            const path = image.finalPath ?? image.tempPath;
            if (path)
                await this.storage.deleteFile(path).catch(() => null);
        }
        await db.image.delete({ where: { id: imageId } });
    }
    async deleteImageById(imageId, client) {
        const db = client ?? this.prisma;
        const image = await db.image.findUnique({ where: { id: imageId } });
        if (!image)
            return;
        const meta = image.metadata;
        if (meta?.variants) {
            await Promise.all(Object.values(meta.variants).map((variantUrl) => this.storage
                .deleteFile((0, path_1.join)(process.cwd(), variantUrl))
                .catch(() => null)));
        }
        else {
            const path = image.finalPath ?? image.tempPath;
            if (path)
                await this.storage.deleteFile(path).catch(() => null);
        }
        await db.image.delete({ where: { id: imageId } });
    }
    async cleanOrphanTempFiles(olderThanMinutes = 120) {
        const { readdir, stat } = await import('fs/promises');
        const tempDir = (0, path_1.join)(process.cwd(), 'uploads', 'temp');
        const threshold = Date.now() - olderThanMinutes * 60 * 1000;
        let cleaned = 0;
        try {
            const files = await readdir(tempDir);
            await Promise.all(files.map(async (file) => {
                const filePath = (0, path_1.join)(tempDir, file);
                const fileStat = await stat(filePath);
                if (fileStat.mtimeMs < threshold) {
                    await this.storage.deleteFile(filePath).catch(() => null);
                    cleaned++;
                }
            }));
        }
        catch {
        }
        return cleaned;
    }
    async fixIncompleteImages(olderThanMinutes = 5) {
        const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);
        const incomplete = await this.prisma.image.findMany({
            where: {
                isConfirmed: true,
                finalPath: null,
                tempPath: { not: null },
                updatedAt: { lt: threshold },
            },
        });
        let fixed = 0;
        for (const img of incomplete) {
            try {
                const filename = img.url.split('/').pop();
                const tempPath = (0, path_1.join)(process.cwd(), 'uploads', 'temp', filename);
                const meta = img.metadata;
                const mimeType = meta?.mimeType ?? 'image/jpeg';
                const { finalPath, url: finalUrl, variants, } = await this.storage.moveTempToFinal(tempPath, img.entityType, img.imageRole, mimeType);
                const existingMeta = img.metadata ?? {};
                await this.prisma.image.update({
                    where: { id: img.id },
                    data: {
                        tempPath: null,
                        finalPath,
                        url: finalUrl,
                        metadata: { ...existingMeta, variants },
                    },
                });
                fixed++;
            }
            catch {
                await this.prisma.image
                    .delete({ where: { id: img.id } })
                    .catch(() => null);
            }
        }
        return fixed;
    }
    async cleanOrphanTempRecords(olderThanMinutes = 1440) {
        const threshold = new Date(Date.now() - olderThanMinutes * 60 * 1000);
        const orphans = await this.prisma.image.findMany({
            where: { isConfirmed: false, createdAt: { lt: threshold } },
        });
        await Promise.all(orphans.map((img) => {
            const path = img.tempPath ?? img.finalPath;
            return path
                ? this.storage.deleteFile(path).catch(() => null)
                : Promise.resolve();
        }));
        const result = await this.prisma.image.deleteMany({
            where: { isConfirmed: false, createdAt: { lt: threshold } },
        });
        return result.count;
    }
    async deleteRoleImages(entityType, entityId, imageRole, client) {
        const db = client ?? this.prisma;
        const existing = await db.image.findMany({
            where: { entityType, entityId, imageRole, isConfirmed: true },
        });
        await Promise.all(existing.map((img) => {
            const meta = img.metadata;
            if (meta?.variants) {
                return Promise.all(Object.values(meta.variants).map((variantUrl) => this.storage
                    .deleteFile((0, path_1.join)(process.cwd(), variantUrl))
                    .catch(() => null)));
            }
            const path = img.finalPath ?? img.tempPath;
            return path
                ? this.storage.deleteFile(path).catch(() => null)
                : Promise.resolve();
        }));
        await db.image.deleteMany({
            where: { entityType, entityId, imageRole },
        });
    }
    mapImageToDto(img) {
        const meta = img.metadata;
        return {
            id: img.id,
            entityId: img.entityId,
            imageRole: img.imageRole,
            url: img.url,
            altText: img.altText,
            order: img.order,
            variants: meta?.variants ?? {},
            isSvg: meta?.format === 'svg',
        };
    }
    async getEntitiesImages(entityType, entityIds) {
        const images = await this.prisma.image.findMany({
            where: {
                entityType,
                entityId: { in: entityIds },
                isConfirmed: true,
            },
            orderBy: [{ imageRole: 'asc' }, { order: 'asc' }],
            select: {
                id: true,
                entityId: true,
                imageRole: true,
                url: true,
                altText: true,
                order: true,
                metadata: true,
            },
        });
        return images.map((img) => this.mapImageToDto(img));
    }
};
exports.ImageRecordService = ImageRecordService;
exports.ImageRecordService = ImageRecordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_storage_service_1.ImageStorageService])
], ImageRecordService);
//# sourceMappingURL=image-record.service.js.map