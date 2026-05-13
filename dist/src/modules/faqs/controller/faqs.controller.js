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
exports.FaqsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const faqs_service_1 = require("../service/faqs.service");
const dto_1 = require("../dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let FaqsController = class FaqsController {
    faqsService;
    constructor(faqsService) {
        this.faqsService = faqsService;
    }
    changeStatus(dto, admin) {
        return this.faqsService.changeStatusMany(dto.ids, dto.status, admin.sub);
    }
    reorder(dto, admin) {
        return this.faqsService.reorder(dto, admin.sub);
    }
    removeMany(dto) {
        return this.faqsService.removeManyFaqs(dto.ids);
    }
    findAllFaqs(query) {
        return this.faqsService.findAllFaqs(query);
    }
    create(dto, admin) {
        return this.faqsService.createFaq(dto, admin.sub);
    }
    findOne(id) {
        return this.faqsService.findFaqById(id);
    }
    update(id, dto, admin) {
        return this.faqsService.updateFaq(id, dto, admin.sub);
    }
    remove(id) {
        return this.faqsService.removeFaq(id);
    }
};
exports.FaqsController = FaqsController;
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples categorías' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkChangeStatusFaqDto, Object]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/reorder'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Orden de preguntas frecuentes actualizado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Reordenar preguntas frecuentes' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkReorderFaqsDto, Object]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "reorder", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Preguntas frecuentes eliminadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples preguntas frecuentes por IDs' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkDeleteFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Preguntas frecuentes obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listado administrativo con filtros y paginación' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "findAllFaqs", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Página creada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva página' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateFaqDto, Object]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pregunta frecuente obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener pregunta frecuente por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pregunta frecuente actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar pregunta frecuente por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateFaqDto, Object]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Pregunta frecuente eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar pregunta frecuente por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "remove", null);
exports.FaqsController = FaqsController = __decorate([
    (0, swagger_1.ApiTags)('Faqs'),
    (0, common_1.Controller)('faqs'),
    __metadata("design:paramtypes", [faqs_service_1.FaqsService])
], FaqsController);
//# sourceMappingURL=faqs.controller.js.map