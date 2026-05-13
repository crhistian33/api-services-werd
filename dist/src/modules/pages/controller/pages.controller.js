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
exports.PagesController = void 0;
const common_1 = require("@nestjs/common");
const pages_service_1 = require("../service/pages.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const bulk_page_dto_1 = require("../dto/bulk-page.dto");
const query_page_dto_1 = require("../dto/query-page.dto");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("../../../modules/auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../../modules/auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let PagesController = class PagesController {
    pagesService;
    constructor(pagesService) {
        this.pagesService = pagesService;
    }
    findAllPublic(query) {
        return this.pagesService.findAllPagesPublic(query);
    }
    findBySlugPublic(slug) {
        return this.pagesService.findPageBySlugPublic(slug);
    }
    changeStatusMany(dto, admin) {
        return this.pagesService.changeStatusManyPage(dto.ids, dto.status, admin.sub);
    }
    softDeleteMany(dto, admin) {
        return this.pagesService.softDeleteManyPages(dto.ids, admin.sub);
    }
    restoreMany(dto, admin) {
        return this.pagesService.restoreManyPages(dto.ids, admin.sub);
    }
    removeMany(dto) {
        return this.pagesService.removeManyPages(dto.ids);
    }
    findAll(query) {
        return this.pagesService.findAllPages(query);
    }
    create(dto, admin) {
        return this.pagesService.createPage(dto, admin.sub);
    }
    findBySlug(slug) {
        return this.pagesService.findPageBySlug(slug);
    }
    findOne(id) {
        return this.pagesService.findPageById(id);
    }
    update(id, dto, admin) {
        return this.pagesService.updatePage(id, dto, admin.sub);
    }
    softDelete(id, admin) {
        return this.pagesService.softDeletePage(id, admin.sub);
    }
    restore(id, admin) {
        return this.pagesService.restorePage(id, admin.sub);
    }
    remove(id) {
        return this.pagesService.removePage(id);
    }
};
exports.PagesController = PagesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public'),
    (0, response_message_decorator_1.ResponseMessage)('Páginas obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar páginas con paginación y filtros' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lista paginada de páginas' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_page_dto_1.QueryPageDto]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "findAllPublic", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public/:slug'),
    (0, response_message_decorator_1.ResponseMessage)('Página obtenida exitosamente'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "findBySlugPublic", null);
__decorate([
    (0, common_1.Patch)('bulk/status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples páginas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkChangeStatusPageDto, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "changeStatusMany", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Páginas enviadas a la papelera'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete masivo' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_page_dto_1.BulkSoftDeletePageDto, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Patch)('bulk/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Páginas restauradas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar masivo' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_page_dto_1.BulkRestorePageDto, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "restoreMany", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Páginas eliminadas permanentemente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminación física masiva (IRREVERSIBLE)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_page_dto_1.BulkDeletePageDto]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Páginas obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listado administrativo con filtros y paginación' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_page_dto_1.QueryPageDto]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página creada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear página' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Página creada' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePageDto, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener página por slug (admin)' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener página por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar página' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdatePageDto, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página enviada a la papelera'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete página' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página restaurada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar página' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Página eliminada permanentemente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminación física (IRREVERSIBLE)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PagesController.prototype, "remove", null);
exports.PagesController = PagesController = __decorate([
    (0, swagger_1.ApiTags)('Pages'),
    (0, common_1.Controller)('pages'),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PagesController);
//# sourceMappingURL=pages.controller.js.map