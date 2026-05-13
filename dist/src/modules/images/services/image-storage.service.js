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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStorageService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const uuid_1 = require("uuid");
const sharp_1 = __importDefault(require("sharp"));
const image_config_1 = require("../config/image-config");
const image_variants_config_1 = require("../config/image-variants.config");
let ImageStorageService = class ImageStorageService {
    uploadsRoot = (0, path_1.join)(process.cwd(), 'uploads');
    tempDir = (0, path_1.join)(this.uploadsRoot, 'temp');
    imagesDir = (0, path_1.join)(this.uploadsRoot, 'images');
    constructor() {
        this.ensureDirSync(this.tempDir);
        this.ensureDirSync(this.imagesDir);
    }
    ensureDirSync(dir) {
        if (!(0, fs_1.existsSync)(dir)) {
            (0, fs_1.mkdirSync)(dir, { recursive: true });
        }
    }
    validateFile(file, roleConfig) {
        if (!roleConfig.allowedMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`Tipo de archivo no permitido. Permitidos: ${roleConfig.allowedMimeTypes.join(', ')}`);
        }
        if (file.size > roleConfig.maxSizeBytes) {
            const maxMb = (roleConfig.maxSizeBytes / 1024 / 1024).toFixed(1);
            throw new common_1.BadRequestException(`El archivo supera el tamaño máximo permitido de ${maxMb} MB`);
        }
    }
    getRoleConfig(entityKey, imageRole) {
        const config = image_config_1.IMAGE_CONFIGS[entityKey];
        if (!config) {
            throw new common_1.BadRequestException(`Entidad "${entityKey}" no soporta imágenes`);
        }
        const roleConfig = config.roles.find((r) => r.role === imageRole);
        if (!roleConfig) {
            throw new common_1.BadRequestException(`El rol "${imageRole}" no es válido para "${entityKey}". Roles válidos: ${config.roles.map((r) => r.role).join(', ')}`);
        }
        return roleConfig;
    }
    async saveTempImage(file, entityKey, imageRole) {
        const roleConfig = this.getRoleConfig(entityKey, imageRole);
        this.validateFile(file, roleConfig);
        const ext = (0, path_1.extname)(file.originalname).toLowerCase() || '.jpg';
        const filename = `${(0, uuid_1.v4)()}${ext}`;
        const tempPath = (0, path_1.join)(this.tempDir, filename);
        let metadata;
        try {
            if (file.mimetype === 'image/svg+xml') {
                await (0, promises_1.writeFile)(tempPath, file.buffer);
                metadata = {
                    width: 0,
                    height: 0,
                    size: file.size,
                    format: 'svg',
                    mimeType: file.mimetype,
                };
            }
            else {
                const sharpMeta = await (0, sharp_1.default)(file.buffer).toFile(tempPath);
                metadata = {
                    width: sharpMeta.width,
                    height: sharpMeta.height,
                    size: sharpMeta.size,
                    format: sharpMeta.format,
                    mimeType: file.mimetype,
                };
            }
        }
        catch {
            throw new common_1.InternalServerErrorException('Error al procesar la imagen');
        }
        const url = `/uploads/temp/${filename}`;
        return { tempPath, url, metadata };
    }
    async deleteFile(filePath) {
        try {
            await (0, promises_1.access)(filePath);
            await (0, promises_1.unlink)(filePath);
        }
        catch {
        }
    }
    async moveTempToFinal(tempPath, entityType, imageRole, mimeType, options = {}) {
        const entityKey = entityType.toLowerCase();
        const variantKey = this.resolveVariantKey(entityKey, imageRole);
        const formatConfig = image_variants_config_1.FORMAT_CONFIGS[variantKey] ?? {
            quality: 85,
            skipVariantsIfSvg: false,
        };
        const isSvg = mimeType === 'image/svg+xml';
        if (isSvg && formatConfig.skipVariantsIfSvg) {
            const moved = await this.moveSvgToFinal(tempPath, entityKey);
            if (!options.keepTemp) {
                await this.deleteFile(tempPath);
            }
            return moved;
        }
        const variants = await this.generateVariants(tempPath, entityKey, variantKey);
        if (!options.keepTemp) {
            await (0, promises_1.unlink)(tempPath).catch(() => null);
        }
        return {
            finalPath: variants.original.fullPath,
            url: variants.original.url,
            variants: Object.fromEntries(Object.entries(variants).map(([name, data]) => [name, data.url])),
            isSvg: false,
        };
    }
    resolveVariantKey(entityKey, imageRole) {
        const compoundKey = `${entityKey}_${imageRole}`;
        if (image_variants_config_1.VARIANT_CONFIGS[compoundKey])
            return compoundKey;
        if (image_variants_config_1.VARIANT_CONFIGS[entityKey])
            return entityKey;
        return entityKey;
    }
    async generateVariants(sourcePath, entityKey, variantKey) {
        const variantSizes = image_variants_config_1.VARIANT_CONFIGS[variantKey] ?? { original: null };
        const cropConfig = image_variants_config_1.CROP_CONFIGS[variantKey] ?? { fit: 'inside' };
        const formatConfig = image_variants_config_1.FORMAT_CONFIGS[variantKey] ?? {
            quality: 85,
            skipVariantsIfSvg: false,
        };
        const uuid = (0, uuid_1.v4)();
        const results = {};
        for (const [name, size] of Object.entries(variantSizes)) {
            const variantName = name;
            const quality = image_variants_config_1.VARIANT_QUALITY[variantName] ?? formatConfig.quality;
            const relativePath = `images/${entityKey}/${variantName}/${uuid}.webp`;
            const fullPath = (0, path_1.join)(this.uploadsRoot, relativePath);
            await (0, promises_1.mkdir)((0, path_1.dirname)(fullPath), { recursive: true });
            try {
                const pipeline = (0, sharp_1.default)(sourcePath);
                if (size !== null) {
                    pipeline.resize(size, size, {
                        fit: cropConfig.fit,
                        position: cropConfig.position ?? 'centre',
                        background: cropConfig.background ?? '#ffffff',
                        withoutEnlargement: true,
                    });
                }
                await pipeline.webp({ quality }).toFile(fullPath);
            }
            catch {
                throw new common_1.InternalServerErrorException(`Error generando variante "${variantName}" para ${entityKey}`);
            }
            const url = `/uploads/${relativePath}`;
            results[variantName] = { fullPath, url };
        }
        return results;
    }
    async moveSvgToFinal(tempPath, entityKey) {
        const uuid = (0, uuid_1.v4)();
        const relativePath = `images/${entityKey}/original/${uuid}.svg`;
        const fullPath = (0, path_1.join)(this.uploadsRoot, relativePath);
        await (0, promises_1.mkdir)((0, path_1.dirname)(fullPath), { recursive: true });
        try {
            await this.moveFile(tempPath, fullPath);
        }
        catch {
            throw new common_1.InternalServerErrorException('Error al mover el SVG al directorio final');
        }
        const url = `/uploads/${relativePath}`;
        return {
            finalPath: fullPath,
            url,
            variants: { original: url },
            isSvg: true,
        };
    }
    async moveFile(src, dest) {
        try {
            await (0, promises_1.rename)(src, dest);
        }
        catch (err) {
            if (err.code === 'EXDEV') {
                await (0, promises_1.copyFile)(src, dest);
                await (0, promises_1.unlink)(src).catch(() => null);
            }
            else {
                throw err;
            }
        }
    }
};
exports.ImageStorageService = ImageStorageService;
exports.ImageStorageService = ImageStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImageStorageService);
//# sourceMappingURL=image-storage.service.js.map