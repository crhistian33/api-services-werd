"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteConfigModule = void 0;
const common_1 = require("@nestjs/common");
const site_config_service_1 = require("./service/site-config.service");
const site_config_controller_1 = require("./controller/site-config.controller");
const images_module_1 = require("../images/images.module");
let SiteConfigModule = class SiteConfigModule {
};
exports.SiteConfigModule = SiteConfigModule;
exports.SiteConfigModule = SiteConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [images_module_1.ImagesModule],
        providers: [site_config_service_1.SiteConfigService],
        controllers: [site_config_controller_1.SiteConfigController],
        exports: [site_config_service_1.SiteConfigService],
    })
], SiteConfigModule);
//# sourceMappingURL=site-config.module.js.map