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
exports.UpdateCustomerPasswordDto = exports.UpdateCustomerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_customer_dto_1 = require("./create-customer.dto");
const class_validator_1 = require("class-validator");
class UpdateCustomerDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_customer_dto_1.CreateCustomerDto, ['password'])) {
    isActive;
}
exports.UpdateCustomerDto = UpdateCustomerDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateCustomerDto.prototype, "isActive", void 0);
class UpdateCustomerPasswordDto {
    currentPassword;
    newPassword;
}
exports.UpdateCustomerPasswordDto = UpdateCustomerPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Contraseña actual del cliente' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCustomerPasswordDto.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nueva contraseña' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La nueva contraseña es demasiado débil',
    }),
    __metadata("design:type", String)
], UpdateCustomerPasswordDto.prototype, "newPassword", void 0);
//# sourceMappingURL=update-customer.dto.js.map