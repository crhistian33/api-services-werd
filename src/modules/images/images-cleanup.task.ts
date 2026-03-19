import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ImageRecordService } from './services/image-record.service';

@Injectable()
export class ImagesCleanupTask {
  private readonly logger = new Logger(ImagesCleanupTask.name);

  constructor(private readonly imageRecord: ImageRecordService) {}

  // ── Tarea 1: archivos temporales huérfanos ──────────────────────────────
  // Archivos en /uploads/temp/ sin confirmar después de 2 horas
  // Frecuencia: cada hora
  @Cron(CronExpression.EVERY_HOUR)
  async cleanOrphanTempFiles(): Promise<void> {
    try {
      this.logger.log('Iniciando limpieza de archivos temporales...');
      const cleaned = await this.imageRecord.cleanOrphanTempFiles(120);
      if (cleaned > 0) {
        this.logger.log(`Archivos temporales eliminados: ${cleaned}`);
      }
    } catch (error) {
      this.logger.error('Error en cleanOrphanTempFiles', error);
    }
  }

  // ── Tarea 2: imágenes confirmadas sin archivo final ─────────────────────
  // BD tiene isConfirmed:true pero finalPath es null
  // Frecuencia: cada 5 minutos
  @Cron(CronExpression.EVERY_5_MINUTES)
  async fixIncompleteImages(): Promise<void> {
    try {
      const fixed = await this.imageRecord.fixIncompleteImages(5);
      if (fixed > 0) {
        this.logger.warn(`Imágenes incompletas reparadas: ${fixed}`);
      }
    } catch (error) {
      this.logger.error('Error en fixIncompleteImages', error);
    }
  }

  // ── Tarea 3: registros temporales huérfanos en BD ───────────────────────
  // Registros isConfirmed:false con más de 24 horas
  // Frecuencia: cada día a las 3:00 AM
  @Cron('0 3 * * *')
  async cleanOrphanTempRecords(): Promise<void> {
    try {
      this.logger.log('Iniciando limpieza de registros temporales en BD...');
      const cleaned = await this.imageRecord.cleanOrphanTempRecords(1440);
      if (cleaned > 0) {
        this.logger.log(`Registros temporales eliminados: ${cleaned}`);
      }
    } catch (error) {
      this.logger.error('Error en cleanOrphanTempRecords', error);
    }
  }
}
