"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./service/orders.service");
const orders_controller_1 = require("./controller/orders.controller");
const prisma_module_1 = require("../../prisma/prisma.module");
const images_module_1 = require("../images/images.module");
const mail_module_1 = require("../mail/mail.module");
const order_claims_service_1 = require("./service/order-claims.service");
const order_logistics_service_1 = require("./service/order-logistics.service");
const order_refund_service_1 = require("./service/order-refund.service");
const order_payment_confirmation_service_1 = require("./service/order-payment-confirmation.service");
const order_payment_expiry_service_1 = require("./service/order-payment-expiry.service");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, images_module_1.ImagesModule, mail_module_1.MailModule],
        controllers: [orders_controller_1.OrdersController],
        providers: [
            orders_service_1.OrdersService,
            order_claims_service_1.OrderClaimsService,
            order_logistics_service_1.OrderLogisticsService,
            order_refund_service_1.OrderRefundService,
            order_payment_confirmation_service_1.OrderPaymentConfirmationService,
            order_payment_expiry_service_1.OrderPaymentExpiryService,
        ],
        exports: [orders_service_1.OrdersService],
    })
], OrdersModule);
//# sourceMappingURL=orders.module.js.map