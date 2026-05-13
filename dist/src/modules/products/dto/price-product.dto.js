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
exports.SetPriceDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SetPriceDto {
    price;
    compareAtPrice;
    cost;
    changedById;
    reason;
}
exports.SetPriceDto = SetPriceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 299.99 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SetPriceDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 349.99,
        description: 'Precio tachado — debe ser mayor al precio actual',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SetPriceDto.prototype, "compareAtPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 150.0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SetPriceDto.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'uuid-del-admin',
        description: 'ID del admin que realiza el cambio (para historial)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], SetPriceDto.prototype, "changedById", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ajuste por temporada de verano',
        description: 'Motivo del cambio de precio',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SetPriceDto.prototype, "reason", void 0);
//# sourceMappingURL=price-product.dto.js.map