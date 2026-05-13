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
exports.SetFeaturesDto = exports.SetSpecsDto = exports.FeatureItemDto = exports.SpecItemDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class SpecItemDto {
    specKey;
    specValue;
    sortOrder;
}
exports.SpecItemDto = SpecItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Procesador' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], SpecItemDto.prototype, "specKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Intel Core i7 12va generación' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], SpecItemDto.prototype, "specValue", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], SpecItemDto.prototype, "sortOrder", void 0);
class FeatureItemDto {
    feature;
    sortOrder;
}
exports.FeatureItemDto = FeatureItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pantalla Full HD antirreflejo' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], FeatureItemDto.prototype, "feature", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], FeatureItemDto.prototype, "sortOrder", void 0);
class SetSpecsDto {
    specs;
}
exports.SetSpecsDto = SetSpecsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [SpecItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SpecItemDto),
    __metadata("design:type", Array)
], SetSpecsDto.prototype, "specs", void 0);
class SetFeaturesDto {
    features;
}
exports.SetFeaturesDto = SetFeaturesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FeatureItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FeatureItemDto),
    __metadata("design:type", Array)
], SetFeaturesDto.prototype, "features", void 0);
//# sourceMappingURL=specs-product.dto.js.map