"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesModule = void 0;
const common_1 = require("@nestjs/common");
const image_storage_service_1 = require("./services/image-storage.service");
const image_record_service_1 = require("./services/image-record.service");
const images_controller_1 = require("./controller/images.controller");
const images_cleanup_task_1 = require("./images-cleanup.task");
const image_upload_guard_1 = require("./guards/image-upload.guard");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let ImagesModule = class ImagesModule {
};
exports.ImagesModule = ImagesModule;
exports.ImagesModule = ImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            jwt_1.JwtModule.register({}),
        ],
        controllers: [images_controller_1.ImagesController],
        providers: [
            image_storage_service_1.ImageStorageService,
            image_record_service_1.ImageRecordService,
            images_cleanup_task_1.ImagesCleanupTask,
            image_upload_guard_1.ImageUploadGuard,
        ],
        exports: [image_storage_service_1.ImageStorageService, image_record_service_1.ImageRecordService],
    })
], ImagesModule);
//# sourceMappingURL=images.module.js.map