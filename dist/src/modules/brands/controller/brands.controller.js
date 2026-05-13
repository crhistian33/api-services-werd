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
exports.BrandsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const brands_service_1 = require("../service/brands.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let BrandsController = class BrandsController {
    brandsService;
    constructor(brandsService) {
        this.brandsService = brandsService;
    }
    changeStatus(dto, admin) {
        return this.brandsService.changeStatusMany(dto.ids, dto.status, admin.sub);
    }
    softDeleteMany(dto, admin) {
        return this.brandsService.softDeleteManyBrands(dto.ids, admin.sub);
    }
    restoreMany(dto, admin) {
        return this.brandsService.restoreManyBrands(dto.ids, admin.sub);
    }
    removeMany(dto) {
        return this.brandsService.removeManyBrands(dto.ids);
    }
    findAll(query) {
        return this.brandsService.findAllBrands(query);
    }
    create(dto, admin) {
        return this.brandsService.createBrand(dto, admin.sub);
    }
    findBySlug(slug) {
        return this.brandsService.findBrandBySlug(slug);
    }
    findOne(id) {
        return this.brandsService.findBrandById(id);
    }
    update(id, dto, admin) {
        return this.brandsService.updateBrand(id, dto, admin.sub);
    }
    softDelete(id, admin) {
        return this.brandsService.softDeleteBrand(id, admin.sub);
    }
    restore(id, admin) {
        return this.brandsService.restoreBrand(id, admin.sub);
    }
    remove(id) {
        return this.brandsService.removeBrand(id);
    }
};
exports.BrandsController = BrandsController;
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples categorías' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkChangeStatusBrandDto, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marcas eliminadas (soft) exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete múltiples marcas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkSoftDeleteBrandDto, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Patch)('bulk/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marcas restauradas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar múltiples marcas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkRestoreBrandDto, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "restoreMany", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Marcas eliminadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples marcas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkDeleteBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marcas obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar marcas con paginación y filtros' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lista paginada de marcas' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryBrandDto]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca creada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear marca' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Marca creada' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateBrandDto, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener marca por slug' }),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'lenovo' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener marca por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la marca' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar marca' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la marca' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateBrandDto, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete de marca' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la marca' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Marca restaurada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar marca eliminada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la marca' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Marca eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar marca' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la marca' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandsController.prototype, "remove", null);
exports.BrandsController = BrandsController = __decorate([
    (0, swagger_1.ApiTags)('Brands'),
    (0, common_1.Controller)('brands'),
    __metadata("design:paramtypes", [brands_service_1.BrandsService])
], BrandsController);
//# sourceMappingURL=brands.controller.js.map