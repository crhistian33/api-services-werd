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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDto = exports.CreateOrderItemDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const order_address_dto_1 = require("./order-address.dto");
class CreateOrderItemDto {
    productId;
    quantity;
    promotionId;
}
exports.CreateOrderItemDto = CreateOrderItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del producto' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderItemDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad del producto' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateOrderItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID de la promoción aplicada a este ítem',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderItemDto.prototype, "promotionId", void 0);
class CreateOrderDto {
    customerId;
    guestEmail;
    guestName;
    guestPhone;
    shippingAddressId;
    shippingAddress;
    saveAddressToProfile;
    shippingRateId;
    paymentMethodId;
    couponId;
    items;
    notes;
    ipAddress;
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'UUID del cliente registrado' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Email del guest (requerido si no hay customerId)',
    }),
    (0, class_validator_1.ValidateIf)((o) => !o.customerId),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "guestEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre del guest' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "guestName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Teléfono del guest' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "guestPhone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'UUID de una CustomerAddress guardada del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "shippingAddressId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: order_address_dto_1.OrderAddressDto,
        description: 'Dirección de envío inline (guest o dirección nueva del cliente)',
    }),
    (0, class_validator_1.ValidateIf)((o) => !o.shippingAddressId),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => order_address_dto_1.OrderAddressDto),
    __metadata("design:type", order_address_dto_1.OrderAddressDto)
], CreateOrderDto.prototype, "shippingAddress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Solo aplica cuando se envía shippingAddress inline y el usuario es cliente registrado. ' +
            'Si true, guarda también la dirección en CustomerAddress para usos futuros.',
        default: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateOrderDto.prototype, "saveAddressToProfile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID de la ShippingRate seleccionada en el checkout',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "shippingRateId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UUID del método de pago' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "paymentMethodId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'UUID del cupón a aplicar' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "couponId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreateOrderItemDto], description: 'Ítems del pedido' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CreateOrderItemDto),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notas del cliente' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIP)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "ipAddress", void 0);
//# sourceMappingURL=create-order.dto.js.map