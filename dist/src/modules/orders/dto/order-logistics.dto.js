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
exports.UpdateLogisticsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("../../../../generated/prisma/client");
class UpdateLogisticsDto {
    deliveryType;
    courierName;
    trackingNumber;
    actualShippingCost;
    internalTransportCost;
    tempImageIds;
}
exports.UpdateLogisticsDto = UpdateLogisticsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.DeliveryType,
        description: 'COURIER: requiere courierName, trackingNumber y foto de guía (tempImageIds). ' +
            'LOCAL_MOTORIZED: no requiere tracking. Registrar internalTransportCost para el costo del motorizado.',
    }),
    (0, class_validator_1.IsEnum)(client_1.DeliveryType),
    __metadata("design:type", String)
], UpdateLogisticsDto.prototype, "deliveryType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Olva Courier' }),
    (0, class_validator_1.ValidateIf)((o) => o.deliveryType === 'COURIER'),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogisticsDto.prototype, "courierName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'TRK-982347234' }),
    (0, class_validator_1.ValidateIf)((o) => o.deliveryType === 'COURIER'),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateLogisticsDto.prototype, "trackingNumber", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Gasto real pagado al courier. Puede diferir del shippingAmount que pagó el cliente. ' +
            'La diferencia (estimado - real) es el margen de envío.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateLogisticsDto.prototype, "actualShippingCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Costo del motorizado local o primera milla (traslado almacén → punto de courier). ' +
            'Relevante principalmente en LOCAL_MOTORIZED pero puede aplicar en COURIER también.',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], UpdateLogisticsDto.prototype, "internalTransportCost", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'IDs de imágenes subidas previamente como TEMP. ' +
            'COURIER: foto de la guía de remisión (obligatoria para el guard de despacho). ' +
            'LOCAL_MOTORIZED: foto del empaque (packing_process, opcional).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', { each: true }),
    __metadata("design:type", Array)
], UpdateLogisticsDto.prototype, "tempImageIds", void 0);
//# sourceMappingURL=order-logistics.dto.js.map