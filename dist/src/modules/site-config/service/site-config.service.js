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
exports.SiteConfigService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const prisma_service_1 = require("../../../prisma/prisma.service");
const image_record_service_1 = require("../../images/services/image-record.service");
const ENTITY_TYPE = client_1.ImageEntityType.SITE_CONFIG;
const ROLE_LOGO_HEADER = 'logo_header';
const ROLE_LOGO_FOOTER = 'logo_footer';
let SiteConfigService = class SiteConfigService {
    prisma;
    imageRecord;
    constructor(prisma, imageRecord) {
        this.prisma = prisma;
        this.imageRecord = imageRecord;
    }
    async onModuleInit() {
        const count = await this.prisma.siteConfig.count();
        if (count === 0) {
            await this.prisma.siteConfig.create({
                data: {
                    storeName: process.env.STORE_NAME ?? 'Mi Tienda',
                    storeEmail: process.env.STORE_EMAIL ?? 'contacto@mitienda.com',
                },
            });
        }
    }
    async getConfigId() {
        const config = await this.prisma.siteConfig.findFirst({
            select: { id: true },
        });
        if (!config) {
            throw new common_1.NotFoundException('Configuración del sitio no encontrada');
        }
        return config.id;
    }
    async get() {
        const config = await this.prisma.siteConfig.findFirst({
            include: {
                socialLinks: { orderBy: { sortOrder: 'asc' } },
            },
        });
        if (!config) {
            throw new common_1.NotFoundException('Configuración del sitio no encontrada');
        }
        return this.imageRecord.attachImagesToEntity(config, ENTITY_TYPE);
    }
    async getPublic() {
        const config = await this.prisma.siteConfig.findFirst({
            select: {
                id: true,
                storeName: true,
                metaTitle: true,
                metaDescription: true,
                googleAnalyticsId: true,
                facebookPixelId: true,
                phonePrimary: true,
                whatsappNumber: true,
                address: true,
                socialLinks: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' },
                    select: {
                        network: true,
                        name: true,
                        icon: true,
                        url: true,
                    },
                },
            },
        });
        if (!config) {
            throw new common_1.NotFoundException('Configuración del sitio no encontrada');
        }
        return this.imageRecord.attachImagesToEntity(config, ENTITY_TYPE);
    }
    async update(dto) {
        const { tempLogoHeaderId, tempLogoFooterId, socialLinks, ...configData } = dto;
        const id = await this.getConfigId();
        const [headerTempRecord, footerTempRecord] = await Promise.all([
            tempLogoHeaderId !== undefined
                ? this.imageRecord.findTempRecord(tempLogoHeaderId, ENTITY_TYPE, ROLE_LOGO_HEADER)
                : Promise.resolve(null),
            tempLogoFooterId !== undefined
                ? this.imageRecord.findTempRecord(tempLogoFooterId, ENTITY_TYPE, ROLE_LOGO_FOOTER)
                : Promise.resolve(null),
        ]);
        const movedList = [];
        try {
            if (headerTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(headerTempRecord, ENTITY_TYPE, id, ROLE_LOGO_HEADER);
                movedList.push(moved);
            }
            if (footerTempRecord !== null) {
                const moved = await this.imageRecord.moveToFinal(footerTempRecord, ENTITY_TYPE, id, ROLE_LOGO_FOOTER);
                movedList.push(moved);
            }
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.siteConfig.update({ where: { id }, data: configData });
                if (socialLinks !== undefined) {
                    await this.syncSocialLinks(id, socialLinks, tx);
                }
                await Promise.all(movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)));
            });
        }
        catch (error) {
            await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
            throw error;
        }
        return this.get();
    }
    async createSocialLink(dto) {
        const siteConfigId = await this.getConfigId();
        return this.prisma.socialLink.create({
            data: {
                siteConfigId,
                network: dto.network,
                name: dto.name,
                icon: dto.icon ?? null,
                url: dto.url,
                isActive: dto.isActive ?? true,
                sortOrder: dto.sortOrder ?? 0,
            },
        });
    }
    async updateSocialLink(id, dto) {
        await this.assertSocialLinkExists(id);
        return this.prisma.socialLink.update({ where: { id }, data: dto });
    }
    async removeSocialLink(id) {
        await this.assertSocialLinkExists(id);
        return this.prisma.socialLink.delete({ where: { id } });
    }
    async reorderSocialLinks(ids) {
        await this.prisma.$transaction(ids.map((id, index) => this.prisma.socialLink.update({
            where: { id },
            data: { sortOrder: index },
        })));
        return this.get();
    }
    async syncSocialLinks(siteConfigId, items, client) {
        const db = client ?? this.prisma;
        const incomingIds = items
            .filter((i) => i.id !== undefined)
            .map((i) => i.id);
        await db.socialLink.deleteMany({
            where: {
                siteConfigId,
                ...(incomingIds.length > 0 && { id: { notIn: incomingIds } }),
            },
        });
        if (items.length === 0)
            return;
        await Promise.all(items.map((item, index) => item.id !== undefined
            ? db.socialLink.update({
                where: { id: item.id },
                data: {
                    network: item.network,
                    name: item.name,
                    icon: item.icon ?? null,
                    url: item.url,
                    isActive: item.isActive ?? true,
                    sortOrder: index,
                },
            })
            : db.socialLink.create({
                data: {
                    siteConfigId,
                    network: item.network,
                    name: item.name,
                    icon: item.icon ?? null,
                    url: item.url,
                    isActive: item.isActive ?? true,
                    sortOrder: index,
                },
            })));
    }
    async assertSocialLinkExists(id) {
        const link = await this.prisma.socialLink.findUnique({ where: { id } });
        if (!link) {
            throw new common_1.NotFoundException(`Red social con id "${id}" no encontrada`);
        }
        return link;
    }
};
exports.SiteConfigService = SiteConfigService;
exports.SiteConfigService = SiteConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        image_record_service_1.ImageRecordService])
], SiteConfigService);
//# sourceMappingURL=site-config.service.js.map