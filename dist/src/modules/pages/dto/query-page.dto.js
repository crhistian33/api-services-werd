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
exports.QueryPageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../../generated/prisma/enums");
const pagination_dto_1 = require("../../../common/dto/pagination.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class QueryPageDto extends pagination_dto_1.PaginationDto {
    status;
    onlyTrash;
}
exports.QueryPageDto = QueryPageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: enums_1.PageStatus.published,
        enum: Object.values(enums_1.PageStatus),
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(enums_1.PageStatus),
    __metadata("design:type", String)
], QueryPageDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: true,
        description: 'Filtrar solo páginas eliminadas (soft-deleted)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === '' || value === undefined || value === null)
            return undefined;
        if (value === 'true' || value === true)
            return true;
        if (value === 'false' || value === false)
            return false;
        return undefined;
    }),
    __metadata("design:type", Boolean)
], QueryPageDto.prototype, "onlyTrash", void 0);
//# sourceMappingURL=query-page.dto.js.map