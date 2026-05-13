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
exports.UpdateHeroSlideDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hero_slide_dto_1 = require("./create-hero-slide.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateHeroSlideDto extends (0, mapped_types_1.PartialType)(create_hero_slide_dto_1.CreateHeroSlideDto) {
    removedDesktopImageId;
    removedMobileImageId;
}
exports.UpdateHeroSlideDto = UpdateHeroSlideDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del registro Image Desktop a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
        example: 'uuid-del-image-record',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateHeroSlideDto.prototype, "removedDesktopImageId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID del registro Image Mobile a eliminar. Se envía cuando el usuario borra la imagen actual sin subir una nueva.',
        example: 'uuid-del-image-record',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], UpdateHeroSlideDto.prototype, "removedMobileImageId", void 0);
//# sourceMappingURL=update-hero-slide.dto.js.map