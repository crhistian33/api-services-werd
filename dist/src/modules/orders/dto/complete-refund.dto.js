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
exports.CompleteRefundDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("../../../../generated/prisma/client");
class CompleteRefundDto {
    refundMethod;
    reason;
    gatewayRefundId;
    adminNotes;
    tempImageIds;
}
exports.CompleteRefundDto = CompleteRefundDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.RefundMethod,
        description: 'CARD: Extorno en tarjeta. ' +
            'WALLET: reembolso al método que pagó con billetera digital. ' +
            'STORE_CREDIT: crédito en la tienda (cupón). ' +
            'BANK_TRANSFER: transferencia bancaria manual.',
    }),
    (0, class_validator_1.IsEnum)(client_1.RefundMethod),
    __metadata("design:type", String)
], CompleteRefundDto.prototype, "refundMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Reembolso procesado. Nro. de transferencia: 0012345.',
        description: 'Notas internas del admin sobre el procesamiento del reembolso.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteRefundDto.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'CULQI-REF-20250422-001',
        description: 'ID de la transacción de reembolso generada por la pasarela de pago (si aplica).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteRefundDto.prototype, "gatewayRefundId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Reembolso procesado. Nro. de transferencia: 0012345.',
        description: 'Notas internas del admin sobre el procesamiento del reembolso.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CompleteRefundDto.prototype, "adminNotes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de imágenes de evidencia del reembolso',
        type: [String],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CompleteRefundDto.prototype, "tempImageIds", void 0);
//# sourceMappingURL=complete-refund.dto.js.map