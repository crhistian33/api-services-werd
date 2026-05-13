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
exports.CreateShippingZoneDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_shipping_zone_area_dto_1 = require("./create-shipping-zone-area.dto");
const create_shipping_rate_dto_1 = require("./create-shipping-rate.dto");
class CreateShippingZoneDto {
    name;
    description;
    isActive;
    areas;
    rates;
}
exports.CreateShippingZoneDto = CreateShippingZoneDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lima Metropolitana' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateShippingZoneDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Cubre todos los distritos de Lima' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateShippingZoneDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: true, default: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateShippingZoneDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [create_shipping_zone_area_dto_1.CreateShippingZoneAreaDto],
        description: 'Áreas geográficas (ubigeo) que cubre la zona',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_shipping_zone_area_dto_1.CreateShippingZoneAreaDto),
    __metadata("design:type", Array)
], CreateShippingZoneDto.prototype, "areas", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [create_shipping_rate_dto_1.CreateShippingRateDto],
        description: 'Tarifas de envío para esta zona',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_shipping_rate_dto_1.CreateShippingRateDto),
    __metadata("design:type", Array)
], CreateShippingZoneDto.prototype, "rates", void 0);
//# sourceMappingURL=create-shipping-zone.dto.js.map