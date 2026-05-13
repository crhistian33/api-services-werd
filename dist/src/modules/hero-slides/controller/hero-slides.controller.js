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
exports.HeroSlidesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const hero_slides_service_1 = require("../service/hero-slides.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const roles_decorator_1 = require("../../../modules/auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../../modules/auth/constants/admin-role.constant");
const current_user_decorator_1 = require("../../../modules/auth/decorators/current-user.decorator");
let HeroSlidesController = class HeroSlidesController {
    heroSlidesService;
    constructor(heroSlidesService) {
        this.heroSlidesService = heroSlidesService;
    }
    findAllPublic(query) {
        return this.heroSlidesService.findAllPublic(query);
    }
    changeStatus(dto, admin) {
        return this.heroSlidesService.changeStatusMany(dto.ids, dto.status, admin.sub);
    }
    softDeleteMany(dto, admin) {
        return this.heroSlidesService.softDeleteManyHeroSlides(dto.ids, admin.sub);
    }
    restoreMany(dto, admin) {
        return this.heroSlidesService.restoreManyHeroSlides(dto.ids, admin.sub);
    }
    reorder(dto, admin) {
        return this.heroSlidesService.reorder(dto, admin.sub);
    }
    removeMany(dto) {
        return this.heroSlidesService.removeManyHeroSlides(dto.ids);
    }
    findAll(query) {
        return this.heroSlidesService.findAllHeroSlides(query);
    }
    create(dto, admin) {
        return this.heroSlidesService.createHeroSlide(dto, admin.sub);
    }
    findOne(id) {
        return this.heroSlidesService.findHeroSlideById(id);
    }
    update(id, dto, admin) {
        return this.heroSlidesService.updateHeroSlide(id, dto, admin.sub);
    }
    softDelete(id, admin) {
        return this.heroSlidesService.softDeleteHeroSlide(id, admin.sub);
    }
    restore(id, admin) {
        return this.heroSlidesService.restoreHeroSlide(id, admin.sub);
    }
    remove(id) {
        return this.heroSlidesService.removeHeroSlide(id);
    }
};
exports.HeroSlidesController = HeroSlidesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public'),
    (0, response_message_decorator_1.ResponseMessage)('Slides obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listado público de slides con paginación y filtros',
    }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lista paginada de slides' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryHeroSlideDto]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "findAllPublic", null);
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples slides' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkChangeStatusHeroSlideDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slides enviados a la papelera'),
    (0, swagger_1.ApiOperation)({ summary: 'Desactivación masiva de slides' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkSoftDeleteHeroSlideDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Patch)('bulk/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slides restaurados correctamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restauración masiva de slides' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkRestoreHeroSlideDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "restoreMany", null);
__decorate([
    (0, common_1.Patch)('bulk/reorder'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Orden de slides actualizado'),
    (0, swagger_1.ApiOperation)({ summary: 'Reordenar slides' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkReorderHeroSlidesDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "reorder", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Slides eliminados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples slides' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkDeleteHeroSlideDto]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slides obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar slides con paginación y filtros' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lista paginada de slides' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryHeroSlideDto]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slide creado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear slide' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Slide creado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateHeroSlideDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slide obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener slide por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del slide' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slide actualizado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar slide' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del slide' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateHeroSlideDto, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slide enviado a la papelera'),
    (0, swagger_1.ApiOperation)({ summary: 'Desactivar slide (Soft Delete)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Slide restaurado correctamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar slide desde la papelera' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Slide eliminado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar slide' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del slide' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeroSlidesController.prototype, "remove", null);
exports.HeroSlidesController = HeroSlidesController = __decorate([
    (0, swagger_1.ApiTags)('HeroSlides'),
    (0, common_1.Controller)('hero-slides'),
    __metadata("design:paramtypes", [hero_slides_service_1.HeroSlidesService])
], HeroSlidesController);
//# sourceMappingURL=hero-slides.controller.js.map