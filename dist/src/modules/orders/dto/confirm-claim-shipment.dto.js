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
exports.ConfirmClaimShipmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ConfirmClaimShipmentDto {
    returnCourierName;
    returnTrackingNumber;
    returnShipmentNotes;
    returnShippingCost;
    tempImageIds;
    refundMethod;
    refundAccountDetails;
}
exports.ConfirmClaimShipmentDto = ConfirmClaimShipmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre de la empresa de envío (courier)',
        example: 'Olva Courier',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfirmClaimShipmentDto.prototype, "returnCourierName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de tracking del envío de retorno',
        example: 'TRK-982347234',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConfirmClaimShipmentDto.prototype, "returnTrackingNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Notas adicionales sobre el envío de retorno',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmClaimShipmentDto.prototype, "returnShipmentNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Costo del envío de retorno. Solo aplica si la tienda asume este gasto (product_fault o store_error)',
        example: 15.0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], ConfirmClaimShipmentDto.prototype, "returnShippingCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de imágenes temporales del comprobante de envío (voucher, foto del paquete)',
        type: [String],
        example: ['550e8400-e29b-41d4-a716-446655440000'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], ConfirmClaimShipmentDto.prototype, "tempImageIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Método preferido para recibir el reembolso (si aplica refund)',
        example: 'BANK_TRANSFER',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmClaimShipmentDto.prototype, "refundMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Número de cuenta o celular para el reembolso (si aplica)',
        example: '987654321',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmClaimShipmentDto.prototype, "refundAccountDetails", void 0);
//# sourceMappingURL=confirm-claim-shipment.dto.js.map