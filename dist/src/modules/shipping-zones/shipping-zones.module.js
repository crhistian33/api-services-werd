"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingZonesModule = void 0;
const common_1 = require("@nestjs/common");
const shipping_zones_service_1 = require("./service/shipping-zones.service");
const shipping_zones_controller_1 = require("./controller/shipping-zones.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let ShippingZonesModule = class ShippingZonesModule {
};
exports.ShippingZonesModule = ShippingZonesModule;
exports.ShippingZonesModule = ShippingZonesModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService, shipping_zones_service_1.ShippingZonesService],
        controllers: [shipping_zones_controller_1.ShippingZonesController],
        exports: [shipping_zones_service_1.ShippingZonesService],
    })
], ShippingZonesModule);
//# sourceMappingURL=shipping-zones.module.js.map