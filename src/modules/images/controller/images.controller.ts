import {
  Controller,
  Post,
  Delete,
  Param,
  ParseUUIDPipe,
  Query,
  UploadedFile,
  UseInterceptors,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { ImageStorageService } from '../services/image-storage.service';
import { ImageRecordService } from '../services/image-record.service';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { IMAGE_CONFIGS } from '../config/image-config';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(
    private readonly storage: ImageStorageService,
    private readonly records: ImageRecordService,
  ) {}

  // POST /images/upload?entityKey=category&imageRole=main
  @Post('upload')
  @ResponseMessage('Imagen cargada temporalmente')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary:
      'Sube una imagen al directorio temporal y crea el registro en BD. ' +
      'Devuelve imageId para usar en el submit del formulario.',
  })
  @ApiQuery({ name: 'entityKey', example: 'category' })
  @ApiQuery({ name: 'imageRole', example: 'main' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  async uploadTemp(
    @UploadedFile() file: Express.Multer.File,
    @Query('entityKey') entityKey: string,
    @Query('imageRole') imageRole: string,
  ) {
    if (!file) throw new BadRequestException('No se recibió ningún archivo');

    const config = IMAGE_CONFIGS[entityKey];
    if (!config) {
      throw new BadRequestException(
        `Entidad "${entityKey}" no soporta imágenes`,
      );
    }

    const saved = await this.storage.saveTempImage(file, entityKey, imageRole);

    // Crea el registro en BD en estado temp para que el backend lo identifique por ID
    const record = await this.records.createTempRecord({
      entityType: config.entityType,
      entityId: 'pending',
      imageRole,
      tempPath: saved.tempPath,
      url: saved.url,
      metadata: saved.metadata,
    });

    return {
      imageId: record.id,
      tempUrl: saved.url,
      metadata: saved.metadata,
    };
  }

  // DELETE /images/:id  — cancela una imagen temp antes del submit
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Imagen eliminada exitosamente')
  @ApiOperation({
    summary: 'Elimina una imagen por ID (temp o confirmada)',
  })
  async deleteImage(@Param('id', ParseUUIDPipe) id: string) {
    await this.records.deleteImage(id);
  }
}
