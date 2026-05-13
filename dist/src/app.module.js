"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const categories_module_1 = require("./modules/categories/categories.module");
const brands_module_1 = require("./modules/brands/brands.module");
const images_module_1 = require("./modules/images/images.module");
const products_module_1 = require("./modules/products/products.module");
const site_config_module_1 = require("./modules/site-config/site-config.module");
const hero_slides_module_1 = require("./modules/hero-slides/hero-slides.module");
const schedule_1 = require("@nestjs/schedule");
const pages_module_1 = require("./modules/pages/pages.module");
const auth_module_1 = require("./modules/auth/auth.module");
const jwt_config_1 = require("./config/jwt.config");
const faqs_module_1 = require("./modules/faqs/faqs.module");
const payment_methods_module_1 = require("./modules/payment-methods/payment-methods.module");
const shipping_zones_module_1 = require("./modules/shipping-zones/shipping-zones.module");
const roles_module_1 = require("./modules/roles/roles.module");
const customers_module_1 = require("./modules/customers/customers.module");
const mail_module_1 = require("./modules/mail/mail.module");
const orders_module_1 = require("./modules/orders/orders.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
                load: [jwt_config_1.jwtConfig],
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.cwd(), 'uploads'),
                serveRoot: '/uploads',
            }),
            prisma_module_1.PrismaModule,
            images_module_1.ImagesModule,
            categories_module_1.CategoriesModule,
            brands_module_1.BrandsModule,
            products_module_1.ProductsModule,
            site_config_module_1.SiteConfigModule,
            hero_slides_module_1.HeroSlidesModule,
            pages_module_1.PagesModule,
            auth_module_1.AuthModule,
            faqs_module_1.FaqsModule,
            payment_methods_module_1.PaymentMethodsModule,
            shipping_zones_module_1.ShippingZonesModule,
            roles_module_1.RolesModule,
            customers_module_1.CustomersModule,
            mail_module_1.MailModule,
            orders_module_1.OrdersModule,
            dashboard_module_1.DashboardModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map