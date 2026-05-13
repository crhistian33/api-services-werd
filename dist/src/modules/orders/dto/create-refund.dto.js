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
exports.CreateRefundDto = exports.RefundItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class RefundItemDto {
    orderItemId;
    quantity;
}
exports.RefundItemDto = RefundItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UUID del OrderItem a devolver' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], RefundItemDto.prototype, "orderItemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de unidades a devolver', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], RefundItemDto.prototype, "quantity", void 0);
class CreateRefundDto {
    reason;
    items;
}
exports.CreateRefundDto = CreateRefundDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Motivo de la devolución',
        example: 'Producto llegó defectuoso',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRefundDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [RefundItemDto],
        description: 'Ítems a devolver. Puede ser un subconjunto del pedido (devolución parcial). ' +
            'Si cubre el 100% de todos los ítems, el pedido pasa a estado "refunded".',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RefundItemDto),
    __metadata("design:type", Array)
], CreateRefundDto.prototype, "items", void 0);
//# sourceMappingURL=create-refund.dto.js.map