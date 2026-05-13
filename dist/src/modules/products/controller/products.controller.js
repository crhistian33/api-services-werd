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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("../service/products.service");
const product_price_service_1 = require("../service/product-price.service");
const product_specs_service_1 = require("../service/product-specs.service");
const dto_1 = require("../dto");
const price_product_dto_1 = require("../dto/price-product.dto");
const specs_product_dto_1 = require("../dto/specs-product.dto");
const response_message_decorator_1 = require("../../../common/decorators/response-message.decorator");
const bulk_change_status_dto_1 = require("../dto/bulk-change-status.dto");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const admin_role_constant_1 = require("../../auth/constants/admin-role.constant");
const public_decorator_1 = require("../../../common/decorators/public.decorator");
const current_user_decorator_1 = require("../../auth/decorators/current-user.decorator");
let ProductsController = class ProductsController {
    productsService;
    priceService;
    specsService;
    constructor(productsService, priceService, specsService) {
        this.productsService = productsService;
        this.priceService = priceService;
        this.specsService = specsService;
    }
    findAllPublic(query) {
        return this.productsService.findAllProductsPublic(query);
    }
    findBySlugPublic(slug) {
        return this.productsService.findProductBySlug(slug);
    }
    async changeStatus(dto, admin) {
        return this.productsService.changeStatusManyPro(dto.ids, dto.status, admin.sub);
    }
    softDeleteMany(dto, admin) {
        return this.productsService.softDeleteManyProducts(dto.ids, admin.sub);
    }
    restoreMany(dto, admin) {
        return this.productsService.restoreManyProducts(dto.ids, admin.sub);
    }
    removeMany(dto) {
        return this.productsService.removeManyProducts(dto.ids);
    }
    findAll(query) {
        return this.productsService.findAllProducts(query);
    }
    create(dto, admin) {
        return this.productsService.createProduct(dto, admin.sub);
    }
    findOne(id) {
        return this.productsService.findProductById(id);
    }
    update(id, dto, admin) {
        return this.productsService.updateProduct(id, dto, admin.sub);
    }
    getPrice(id) {
        return this.priceService.getPrice(id);
    }
    setPrice(id, dto) {
        return this.priceService.setPrice(id, dto);
    }
    getPriceHistory(id) {
        return this.priceService.getPriceHistory(id);
    }
    setSpecs(id, dto) {
        return this.specsService.setSpecs(id, dto.specs);
    }
    setFeatures(id, dto) {
        return this.specsService.setFeatures(id, dto.features);
    }
    softDelete(id, admin) {
        return this.productsService.softDeleteProduct(id, admin.sub);
    }
    restore(id, admin) {
        return this.productsService.restoreProduct(id, admin.sub);
    }
    remove(id) {
        return this.productsService.removeProduct(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public'),
    (0, response_message_decorator_1.ResponseMessage)('Productos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listado público de productos (sitio Astro)' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista paginada — solo activos, incluye features',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAllPublic", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('public/:slug'),
    (0, response_message_decorator_1.ResponseMessage)('Producto obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener producto por slug' }),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'notebook-gamer-x' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findBySlugPublic", null);
__decorate([
    (0, common_1.Patch)('bulk-status'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Estados actualizados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar estado de múltiples productos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bulk_change_status_dto_1.BulkChangeStatusProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Patch)('bulk/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Productos eliminados (soft) exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete múltiples productos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkSoftDeleteProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "softDeleteMany", null);
__decorate([
    (0, common_1.Patch)('bulk/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Productos restaurados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar múltiples productos' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkRestoreProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "restoreMany", null);
__decorate([
    (0, common_1.Delete)('bulk'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Productos eliminados exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar múltiples productos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.BulkDeleteProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Productos obtenidos exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar productos con paginación y filtros' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Lista paginada de productos' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Producto creado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear producto' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Producto creado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Producto obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener producto por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Producto actualizado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id/price'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Precio obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener precio actual del producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getPrice", null);
__decorate([
    (0, common_1.Patch)(':id/price'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Precio actualizado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar precio del producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, price_product_dto_1.SetPriceDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "setPrice", null);
__decorate([
    (0, common_1.Get)(':id/price-history'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR, admin_role_constant_1.AdminRole.VIEWER),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Historial de precios obtenido exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Historial de cambios de precio' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getPriceHistory", null);
__decorate([
    (0, common_1.Patch)(':id/specs'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Especificaciones actualizadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Reemplazar especificaciones del producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, specs_product_dto_1.SetSpecsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "setSpecs", null);
__decorate([
    (0, common_1.Patch)(':id/features'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN, admin_role_constant_1.AdminRole.EDITOR),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Características actualizadas exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Reemplazar características del producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, specs_product_dto_1.SetFeaturesDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "setFeatures", null);
__decorate([
    (0, common_1.Patch)(':id/soft-delete'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Producto eliminado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete de producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "softDelete", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN, admin_role_constant_1.AdminRole.ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, response_message_decorator_1.ResponseMessage)('Producto restaurado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Restaurar producto eliminado' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "restore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(admin_role_constant_1.AdminRole.SUPER_ADMIN),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, response_message_decorator_1.ResponseMessage)('Producto eliminado exitosamente'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar producto' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID del producto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        product_price_service_1.ProductPriceService,
        product_specs_service_1.ProductSpecsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map