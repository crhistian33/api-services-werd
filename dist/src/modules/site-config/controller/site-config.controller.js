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
exports.SiteConfigController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const site_config_service_1 = require("../service/site-config.service");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const dto_1 = require("../dto");
const roles_decorator_1 = require("../../../modules/auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../../modules/auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
let SiteConfigController = class SiteConfigController {
    siteConfigService;
    constructor(siteConfigService) {
        this.siteConfigService = siteConfigService;
    }
    getPublic() {
        return this.siteConfigService.getPublic();
    }
    get() {
        return this.siteConfigService.get();
    }
    update(dto) {
        return this.siteConfigService.update(dto);
    }
    createSocialLink(dto) {
        return this.siteConfigService.createSocialLink(dto);
    }
    reorderSocialLinks(dto) {
        return this.siteConfigService.reorderSocialLinks(dto.ids);
    }
    updateSocialLink(id, dto) {
        return this.siteConfigService.updateSocialLink(id, dto);
    }
    removeSocialLink(id) {
        return this.siteConfigService.removeSocialLink(id);
    }
};
exports.SiteConfigController = SiteConfigController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public'),
    (0, response_message_decorator_1.ResponseMessage)('Configuración obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener configuración pública (Astro)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Solo campos públicos — sin datos sensibles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "getPublic", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Configuración obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener configuración del sitio (admin)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Configuración completa con redes sociales' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "get", null);
__decorate([
    (0, common_1.Patch)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Configuración actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar configuración del sitio' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateSiteConfigDto]),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('social-links'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Red social creada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar red social' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSocialLinkDto]),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "createSocialLink", null);
__decorate([
    (0, common_1.Patch)('social-links/reorder'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Redes sociales reordenadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Reordenar redes sociales' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ReorderSocialLinksDto]),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "reorderSocialLinks", null);
__decorate([
    (0, common_1.Patch)('social-links/:id'),
    (0, response_message_decorator_1.ResponseMessage)('Red social actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar red social' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la red social' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateSocialLinkDto]),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "updateSocialLink", null);
__decorate([
    (0, common_1.Delete)('social-links/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Red social eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar red social' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la red social' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiteConfigController.prototype, "removeSocialLink", null);
exports.SiteConfigController = SiteConfigController = __decorate([
    (0, swagger_1.ApiTags)('Site Config'),
    (0, common_1.Controller)('site-config'),
    __metadata("design:paramtypes", [site_config_service_1.SiteConfigService])
], SiteConfigController);
//# sourceMappingURL=site-config.controller.js.map