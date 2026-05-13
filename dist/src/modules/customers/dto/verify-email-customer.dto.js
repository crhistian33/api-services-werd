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
exports.VerifyEmailCustomerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class VerifyEmailCustomerDto {
    email;
    code;
}
exports.VerifyEmailCustomerDto = VerifyEmailCustomerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'cliente@example.com',
        description: 'Correo electrónico del cliente a verificar',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El formato del correo es inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo es obligatorio' }),
    __metadata("design:type", String)
], VerifyEmailCustomerDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
        description: 'Código de verificación de 6 dígitos enviado por correo',
    }),
    (0, class_validator_1.IsString)({ message: 'El código debe ser una cadena de texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código es obligatorio' }),
    (0, class_validator_1.Length)(6, 6, { message: 'El código debe tener exactamente 6 dígitos' }),
    __metadata("design:type", String)
], VerifyEmailCustomerDto.prototype, "code", void 0);
//# sourceMappingURL=verify-email-customer.dto.js.map