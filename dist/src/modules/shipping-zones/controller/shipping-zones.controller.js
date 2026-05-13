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
exports.ShippingZonesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shipping_zones_service_1 = require("../service/shipping-zones.service");
const dto_1 = require("../dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let ShippingZonesController = class ShippingZonesController {
    shippingZonesService;
    constructor(shippingZonesService) {
        this.shippingZonesService = shippingZonesService;
    }
    findByUbigeo(departmentId, provinceId, districtId) {
        return this.shippingZonesService.findZoneByUbigeo(departmentId, provinceId, districtId);
    }
    getDepartments() {
        return this.shippingZonesService.getDepartments();
    }
    getProvinces(departmentId) {
        return this.shippingZonesService.getProvincesByDepartment(departmentId);
    }
    getDistricts(provinceId) {
        return this.shippingZonesService.getDistrictsByProvince(provinceId);
    }
    changeStatus(dto, admin) {
        return this.shippingZonesService.changeStatusMany(dto.ids, dto.status, admin.sub);
    }
    softDeleteMany(dto, admin) {
        return this.shippingZonesService.softDeleteManyZones(dto.ids, admin.sub);
    }
    restoreMany(dto, admin) {
        return this.shippingZonesService.restoreManyZones(dto.ids, admin.sub);
    }
    removeMany(dto) {
        return this.shippingZonesService.removeManyZones(dto.ids);
    }
    findAll(query) {
        return this.shippingZonesService.findAllZones(query);
    }
    create(dto, admin) {
        return this.shippingZonesService.createZone(dto, admin.sub);
    }
    findOne(id) {
        return this.shippingZonesService.findZoneById(id);
    }
    update(id, dto, admin) {
        return this.shippingZonesService.updateZone(id, dto, admin.sub);
    }
    softDelete(id, admin) {
        return this.shippingZonesService.softDeleteZone(id, admin.sub);
    }
    restore(id, admin) {
        return this.shippingZonesService.restoreZone(id, admin.sub);
    }
    remove(id) {
        return this.shippingZonesService.removeZone(id);
    }
    findRates(zoneId) {
        return this.shippingZonesService.findRatesByZone(zoneId);
    }
};
exports.ShippingZonesController = ShippingZonesController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public/ubigeo'),
    (0, response_message_decorator_1.ResponseMessage)('Zona de envío encontrada'),
    (0, swagger_1.ApiOperation)({
        summary: 'Buscar zona de envío por ubigeo (para el checkout)',
    }),
    __param(0, (0, common_1.Query)('departmentId')),
    __param(1, (0, common_1.Query)('provinceId')),
    __param(2, (0, common_1.Query)('districtId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "findByUbigeo", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('ubigeo/departments'),
    (0, response_message_decorator_1.ResponseMessage)('Departamentos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listado de departamentos (ubigeo)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "getDepartments", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('ubigeo/departments/:departmentId/provinces'),
    (0, response_message_decorator_1.ResponseMessage)('Provincias obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Provincias de un departamento' }),
    (0, swagger_1.ApiParam)({ name: 'departmentId', example: '15' }),
    __param(0, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "getProvinces", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('ubigeo/provinces/:provinceId/districts'),
    (0, response_message_decorator_1.ResponseMessage)('Distritos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Distritos de una provincia' }),
    (0, swagger_1.ApiParam)({ name: 'provinceId', example: '1501' }),
    __param(0, (0, common_1.Param)('provinceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "getDistricts", null);
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples zonas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkChangeStatusShippingZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zonas eliminadas (soft) exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete múltiples zonas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkSoftDeleteShippingZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Patch)('bulk/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zonas restauradas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar múltiples zonas' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkRestoreShippingZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "restoreMany", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Zonas eliminadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples zonas permanentemente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkDeleteShippingZoneDto]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zonas de envío obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listado administrativo con filtros y paginación' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryShippingZoneDto]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zona de envío creada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear zona de envío' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Zona creada con sus áreas iniciales' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateShippingZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zona de envío obtenida exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener zona por ID con áreas y tarifas' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zona de envío actualizada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar zona de envío' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateShippingZoneDto, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zona eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete de zona' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Zona restaurada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar zona eliminada' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Zona de envío eliminada exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar zona permanentemente' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/rates'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.VIEWER, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Tarifas obtenidas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las tarifas de una zona' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID de la zona' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShippingZonesController.prototype, "findRates", null);
exports.ShippingZonesController = ShippingZonesController = __decorate([
    (0, swagger_1.ApiTags)('Shipping Zones'),
    (0, common_1.Controller)('shipping-zones'),
    __metadata("design:paramtypes", [shipping_zones_service_1.ShippingZonesService])
], ShippingZonesController);
//# sourceMappingURL=shipping-zones.controller.js.map