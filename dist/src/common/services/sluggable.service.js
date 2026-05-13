"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SluggableService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("./base.service");
class SluggableService extends base_service_1.BaseService {
    getSlugSource(dto) {
        const slugSource = dto[this.nameField];
        if (this.nameField in dto && slugSource) {
            return slugSource;
        }
        if ('name' in dto && dto.name)
            return dto.name;
        if ('title' in dto && dto.title)
            return dto.title;
        throw new common_1.BadRequestException(`El DTO debe tener un campo "${this.nameField}" para generar el slug`);
    }
    generateSlug(name) {
        return name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    }
    async generateUniqueSlug(name, excludeId, client) {
        const base = this.generateSlug(name);
        let slug = base;
        let counter = 1;
        while (true) {
            const existing = (await this.getModel(client).findUnique({
                where: { slug },
                select: { id: true },
            }));
            if (!existing || existing.id === excludeId)
                break;
            slug = `${base}-${counter}`;
            counter++;
        }
        return slug;
    }
    async assertSlugAvailable(slug, excludeId, client) {
        const existing = (await this.getModel(client).findUnique({
            where: { slug },
            select: { id: true },
        }));
        if (existing && existing.id !== excludeId) {
            throw new common_1.ConflictException(`El slug "${slug}" ya está en uso`);
        }
    }
    async findBySlug(slug, include, client) {
        const record = (await this.getModel(client).findUnique({
            where: { slug },
            include,
        }));
        if (!record) {
            throw new common_1.NotFoundException(`${this.modelName} con slug "${slug}" no encontrado`);
        }
        return record;
    }
    async createWithSlug(dto, include, client) {
        const slug = await this.generateUniqueSlug(this.getSlugSource(dto), undefined, client);
        return this.create({ ...dto, slug }, include, client);
    }
    async updateWithSlug(id, dto, include, client) {
        const slugSource = this.nameField in dto &&
            dto[this.nameField]
            ? dto[this.nameField]
            : 'name' in dto && dto.name
                ? dto.name
                : 'title' in dto && dto.title
                    ? dto.title
                    : undefined;
        const slug = slugSource
            ? await this.generateUniqueSlug(slugSource, id, client)
            : undefined;
        return this.update(id, { ...dto, ...(slug !== undefined && { slug }) }, include, client);
    }
}
exports.SluggableService = SluggableService;
//# sourceMappingURL=sluggable.service.js.map