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
exports.ForgotPasswordDto = exports.ForgotPasswordResetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ForgotPasswordResetDto {
    email;
    code;
    newPassword;
}
exports.ForgotPasswordResetDto = ForgotPasswordResetDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'cliente@ejemplo.com',
        description: 'Correo electrónico del cliente que solicitó la recuperación',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El formato del correo es inválido' }),
    __metadata("design:type", String)
], ForgotPasswordResetDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
        description: 'Código de 6 dígitos enviado al correo del cliente',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código de verificación es obligatorio' }),
    __metadata("design:type", String)
], ForgotPasswordResetDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NuevaClave2026!',
        description: 'Debe contener al menos 8 caracteres, una mayúscula y un número o carácter especial',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, {
        message: 'La nueva contraseña debe tener al menos 8 caracteres',
    }),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La nueva contraseña es demasiado débil: debe incluir mayúsculas y números o caracteres especiales',
    }),
    __metadata("design:type", String)
], ForgotPasswordResetDto.prototype, "newPassword", void 0);
class ForgotPasswordDto {
    email;
}
exports.ForgotPasswordDto = ForgotPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'cliente@ejemplo.com',
        description: 'Correo electrónico del cliente para recuperación',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El formato del correo es inválido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo es obligatorio' }),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);
//# sourceMappingURL=forgot-password-customer.dto.js.map