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
exports.UpdateSiteConfigDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const create_social_link_dto_1 = require("./create-social-link.dto");
const class_transformer_1 = require("class-transformer");
class UpdateSiteConfigDto {
    storeName;
    storeEmail;
    supportEmail;
    phonePrimary;
    phoneSecondary;
    whatsappNumber;
    address;
    metaTitle;
    metaDescription;
    currency;
    taxRate;
    googleAnalyticsId;
    facebookPixelId;
    tempLogoHeaderId;
    tempLogoFooterId;
    socialLinks;
}
exports.UpdateSiteConfigDto = UpdateSiteConfigDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Werd' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "storeName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'contacto@werd.pe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "storeEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'soporte@werd.pe' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "supportEmail", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+51 999 999 999' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "phonePrimary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '+51 888 888 888' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "phoneSecondary", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '51999999999',
        description: 'Número de WhatsApp sin + ni espacios — formato internacional',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "whatsappNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Av. Principal 123, Lima' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Werd — Los mejores productos' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "metaTitle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Encuentra los mejores productos...' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "metaDescription", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'PEN' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(3),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 18 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateSiteConfigDto.prototype, "taxRate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'G-XXXXXXXXXX' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "googleAnalyticsId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'XXXXXXXXXXXXXXXXXX' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "facebookPixelId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'uuid-temporal-logo-header',
        description: 'Id temporal del logo del header',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "tempLogoHeaderId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'uuid-temporal-logo-footer',
        description: 'Id temporal del logo del footer',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateSiteConfigDto.prototype, "tempLogoFooterId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: [create_social_link_dto_1.CreateSocialLinkDto] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_social_link_dto_1.CreateSocialLinkDto),
    __metadata("design:type", Array)
], UpdateSiteConfigDto.prototype, "socialLinks", void 0);
//# sourceMappingURL=update-site-config.dto.js.map