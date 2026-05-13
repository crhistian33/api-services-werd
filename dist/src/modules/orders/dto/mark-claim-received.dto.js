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
exports.MarkClaimReceivedDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("../../../../generated/prisma/client");
class MarkClaimReceivedDto {
    productCondition;
    internalDamageNote;
    adminNote;
}
exports.MarkClaimReceivedDto = MarkClaimReceivedDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.ReturnedProductCondition,
        description: 'RESELLABLE: el producto llegó bien, vuelve al inventario. ' +
            'DAMAGED: producto con daños, no vuelve al stock (baja contable). ' +
            'DESTROYED: producto destruido o no se recibió (baja contable).',
    }),
    (0, class_validator_1.IsEnum)(client_1.ReturnedProductCondition),
    __metadata("design:type", String)
], MarkClaimReceivedDto.prototype, "productCondition", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Pantalla rota, embalaje dañado. No apto para reventa.',
        description: 'Descripción interna del estado del producto recibido.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkClaimReceivedDto.prototype, "internalDamageNote", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Nota visible al cliente sobre la recepción del producto.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MarkClaimReceivedDto.prototype, "adminNote", void 0);
//# sourceMappingURL=mark-claim-received.dto.js.map