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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const swagger_1 = require("@nestjs/swagger");
const image_storage_service_1 = require("../services/image-storage.service");
const image_record_service_1 = require("../services/image-record.service");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const image_upload_guard_1 = require("../guards/image-upload.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const image_config_1 = require("../config/image-config");
const client_1 = require("../../../../generated/prisma/client");
let ImagesController = class ImagesController {
    storage;
    records;
    constructor(storage, records) {
        this.storage = storage;
        this.records = records;
    }
    async uploadTemp(file, entityType, imageRole) {
        if (!file)
            throw new common_1.BadRequestException('No se recibió ningún archivo');
        const entityKey = entityType.toLowerCase();
        const config = image_config_1.IMAGE_CONFIGS[entityKey];
        if (!config) {
            throw new common_1.BadRequestException(`Entidad "${entityType}" no soporta imágenes`);
        }
        const roleConfig = config.roles.find((r) => r.role === imageRole);
        if (!roleConfig) {
            throw new common_1.BadRequestException(`Rol "${imageRole}" no válido para entidad "${entityType}"`);
        }
        const saved = await this.storage.saveTempImage(file, entityKey, imageRole);
        const record = await this.records.createTempRecord({
            entityType: config.entityType,
            entityId: 'pending',
            imageRole,
            tempPath: saved.tempPath,
            url: saved.url,
            metadata: saved.metadata,
        });
        return {
            imageId: record.id,
            tempUrl: saved.url,
            metadata: saved.metadata,
        };
    }
    async deleteImage(id, req) {
        const image = await this.records.findById(id);
        if (!image) {
            throw new common_1.NotFoundException(`Imagen con ID "${id}" no encontrada`);
        }
        const currentUser = req.user;
        if (currentUser.userType === 'admin') {
            await this.records.deleteImage(id);
            return { success: true };
        }
        if (currentUser.userType === 'customer') {
            if (image.isConfirmed) {
                throw new common_1.ForbiddenException('No puedes eliminar una imagen que ya fue confirmada en un pedido');
            }
            if (image.entityType !== 'ORDER_CLAIM') {
                throw new common_1.ForbiddenException('No tienes permiso para eliminar esta imagen');
            }
            await this.records.deleteImage(id);
            return { success: true };
        }
        throw new common_1.ForbiddenException('Tipo de usuario no autorizado');
    }
    async deleteConfirmedImage(id) {
        await this.records.deleteImage(id);
        return { success: true };
    }
};
exports.ImagesController = ImagesController;
__decorate([
    (0, common_1.Post)('upload/temp'),
    (0, common_1.UseGuards)(image_upload_guard_1.ImageUploadGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Imagen cargada temporalmente'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.memoryStorage)() })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({
        summary: 'Sube una imagen temporal (Admin o Cliente)',
        description: 'Admin: puede subir imágenes para cualquier entidad y rol.\n' +
            'Cliente: solo puede subir imágenes para ORDER_CLAIM con rol customer_evidence.',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'entityType',
        enum: client_1.ImageEntityType,
        example: 'ORDER_CLAIM',
    }),
    (0, swagger_1.ApiQuery)({ name: 'imageRole', example: 'customer_evidence' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: { file: { type: 'string', format: 'binary' } },
        },
    }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('entityType')),
    __param(2, (0, common_1.Query)('imageRole')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadTemp", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(image_upload_guard_1.ImageUploadGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Imagen eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Elimina una imagen temporal por ID',
        description: 'Admin: puede eliminar cualquier imagen.\n' +
            'Cliente: solo puede eliminar sus propias imágenes temporales (isConfirmed=false).',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteImage", null);
__decorate([
    (0, common_1.Delete)(':id/confirmed'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Imagen confirmada eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Elimina una imagen confirmada (Solo Admin)',
        description: 'Elimina una imagen que ya está asociada a una entidad.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteConfirmedImage", null);
exports.ImagesController = ImagesController = __decorate([
    (0, swagger_1.ApiTags)('Images'),
    (0, common_1.Controller)('images'),
    __metadata("design:paramtypes", [image_storage_service_1.ImageStorageService,
        image_record_service_1.ImageRecordService])
], ImagesController);
//# sourceMappingURL=images.controller.js.map