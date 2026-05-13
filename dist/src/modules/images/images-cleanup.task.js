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
var ImagesCleanupTask_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesCleanupTask = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const image_record_service_1 = require("./services/image-record.service");
let ImagesCleanupTask = ImagesCleanupTask_1 = class ImagesCleanupTask {
    imageRecord;
    logger = new common_1.Logger(ImagesCleanupTask_1.name);
    constructor(imageRecord) {
        this.imageRecord = imageRecord;
    }
    async cleanOrphanTempFiles() {
        try {
            this.logger.log('Iniciando limpieza de archivos temporales...');
            const cleaned = await this.imageRecord.cleanOrphanTempFiles(120);
            if (cleaned > 0) {
                this.logger.log(`Archivos temporales eliminados: ${cleaned}`);
            }
        }
        catch (error) {
            this.logger.error('Error en cleanOrphanTempFiles', error);
        }
    }
    async fixIncompleteImages() {
        try {
            const fixed = await this.imageRecord.fixIncompleteImages(5);
            if (fixed > 0) {
                this.logger.warn(`Imágenes incompletas reparadas: ${fixed}`);
            }
        }
        catch (error) {
            this.logger.error('Error en fixIncompleteImages', error);
        }
    }
    async cleanOrphanTempRecords() {
        try {
            this.logger.log('Iniciando limpieza de registros temporales en BD...');
            const cleaned = await this.imageRecord.cleanOrphanTempRecords(1440);
            if (cleaned > 0) {
                this.logger.log(`Registros temporales eliminados: ${cleaned}`);
            }
        }
        catch (error) {
            this.logger.error('Error en cleanOrphanTempRecords', error);
        }
    }
};
exports.ImagesCleanupTask = ImagesCleanupTask;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesCleanupTask.prototype, "cleanOrphanTempFiles", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesCleanupTask.prototype, "fixIncompleteImages", null);
__decorate([
    (0, schedule_1.Cron)('0 3 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesCleanupTask.prototype, "cleanOrphanTempRecords", null);
exports.ImagesCleanupTask = ImagesCleanupTask = ImagesCleanupTask_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [image_record_service_1.ImageRecordService])
], ImagesCleanupTask);
//# sourceMappingURL=images-cleanup.task.js.map