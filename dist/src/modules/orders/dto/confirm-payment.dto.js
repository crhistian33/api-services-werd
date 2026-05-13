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
exports.ConfirmManualPaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class ConfirmManualPaymentDto {
    operationNumber;
    paidAmount;
    adminNotes;
}
exports.ConfirmManualPaymentDto = ConfirmManualPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'YAP-2025042200123',
        description: 'Número de operación / código de transacción proporcionado por el cliente. ' +
            'Para YAPE/PLIN: el código de 6 u 8 dígitos. Para transferencia: el número de operación del banco.',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmManualPaymentDto.prototype, "operationNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 299.99,
        description: 'Monto que el cliente efectivamente pagó. ' +
            'Debe coincidir con el total del pedido. Se registra para auditoría financiera.',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ConfirmManualPaymentDto.prototype, "paidAmount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Pago recibido vía YAPE. Captura validada.',
        description: 'Notas internas del admin (no visibles al cliente).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmManualPaymentDto.prototype, "adminNotes", void 0);
//# sourceMappingURL=confirm-payment.dto.js.map