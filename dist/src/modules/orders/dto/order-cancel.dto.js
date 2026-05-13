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
exports.CancelOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CancelOrderDto {
    reason;
    reasonDetail;
    adminNotes;
}
exports.CancelOrderDto = CancelOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'customer_request',
            'no_payment',
            'no_stock',
            'fraud',
            'wrong_address',
            'damaged_in_warehouse',
            'other',
        ],
        description: 'Motivo de cancelación',
        example: 'customer_request',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Detalle adicional del motivo',
        example: 'El cliente llamó para cancelar porque encontró mejor precio',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "reasonDetail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Notas internas del admin',
        example: 'Cliente VIP, ofrecer descuento en próxima compra',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CancelOrderDto.prototype, "adminNotes", void 0);
//# sourceMappingURL=order-cancel.dto.js.map