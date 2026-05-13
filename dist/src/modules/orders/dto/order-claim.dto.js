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
exports.QueryClaimDto = exports.ReviewClaimDto = exports.CreateOrderClaimDto = exports.ClaimItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("../../../../generated/prisma/client");
class ClaimItemDto {
    orderItemId;
    quantity;
}
exports.ClaimItemDto = ClaimItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UUID del OrderItem a reclamar' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ClaimItemDto.prototype, "orderItemId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad física a reclamar', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], ClaimItemDto.prototype, "quantity", void 0);
class CreateOrderClaimDto {
    type;
    reasonCategory;
    description;
    adminNotes;
    items;
    tempImageIds;
    internalNote;
    autoApprove;
    autoApproveNote;
    refundMethod;
    refundAccountDetails;
}
exports.CreateOrderClaimDto = CreateOrderClaimDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.ClaimType,
        description: 'CANCELLATION: solo antes del envío. REFUND / REPLACEMENT: solo después del envío.',
    }),
    (0, class_validator_1.IsEnum)(client_1.ClaimType),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.ClaimReasonCategory }),
    (0, class_validator_1.IsEnum)(client_1.ClaimReasonCategory),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "reasonCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción detallada del motivo del reclamo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Notas internas del admin' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "adminNotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ClaimItemDto],
        description: 'Ítems a reclamar (mínimo 1)',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ClaimItemDto),
    __metadata("design:type", Array)
], CreateOrderClaimDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de imágenes subidas previamente como TEMP (evidencia fotográfica del reclamo). ' +
            'Usar el endpoint de upload de imágenes para obtener estos IDs.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], CreateOrderClaimDto.prototype, "tempImageIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Notas internas del admin (no visibles al cliente)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "internalNote", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Si es true, el reclamo se aprueba automáticamente. Solo para uso desde CMS.',
        default: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateOrderClaimDto.prototype, "autoApprove", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nota de aprobación automática (visible al cliente)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "autoApproveNote", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Método de reembolso preferido' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "refundMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Datos para el reembolso' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateOrderClaimDto.prototype, "refundAccountDetails", void 0);
class ReviewClaimDto {
    action;
    reviewNote;
    internalNote;
}
exports.ReviewClaimDto = ReviewClaimDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['APPROVED', 'REJECTED'],
        description: 'APPROVED: para CANCELLATION se procesa inmediatamente. ' +
            'Para REFUND/REPLACEMENT pasa a espera de recepción física del producto. ' +
            'REJECTED: el motivo (reviewNote) es obligatorio y se envía al cliente.',
    }),
    (0, class_validator_1.IsEnum)(['APPROVED', 'REJECTED']),
    __metadata("design:type", String)
], ReviewClaimDto.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nota visible al cliente. Obligatoria si REJECTED.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReviewClaimDto.prototype, "reviewNote", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nota interna del equipo. No visible al cliente.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReviewClaimDto.prototype, "internalNote", void 0);
class QueryClaimDto {
    status;
    type;
    search;
    page = 1;
    limit = 10;
}
exports.QueryClaimDto = QueryClaimDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ enum: client_1.ClaimStatus, description: 'Filtrar por estado' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.ClaimStatus),
    __metadata("design:type", String)
], QueryClaimDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: client_1.ClaimType,
        description: 'Filtrar por tipo (CANCELLATION, REFUND, REPLACEMENT)',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.ClaimType),
    __metadata("design:type", String)
], QueryClaimDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Buscar por número de reclamo, nombre o email del cliente',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryClaimDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryClaimDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], QueryClaimDto.prototype, "limit", void 0);
//# sourceMappingURL=order-claim.dto.js.map