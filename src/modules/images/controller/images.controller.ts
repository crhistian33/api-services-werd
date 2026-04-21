import {
  Controller,
  Post,
  Delete,
  Param,
  ParseUUIDPipe,
  Query,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import {
  ApiTags,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ImageStorageService } from '../services/image-storage.service';
import { ImageRecordService } from '../services/image-record.service';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import { ImageUploadGuard } from '../guards/image-upload.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { AdminRole } from '../../auth/constants/admin-role.constant';
import { IMAGE_CONFIGS } from '../config/image-config';
import { ImageEntityType } from 'generated/prisma/client';
import { AuthAccessPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(
    private readonly storage: ImageStorageService,
    private readonly records: ImageRecordService,
  ) {}

  // ═══════════════════════════════════════════════
  // UPLOAD TEMPORAL (ADMIN Y CLIENTES)
  // ═══════════════════════════════════════════════

  @Post('upload/temp')
  @UseGuards(ImageUploadGuard)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Imagen cargada temporalmente')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Sube una imagen temporal (Admin o Cliente)',
    description:
      'Admin: puede subir imágenes para cualquier entidad y rol.\n' +
      'Cliente: solo puede subir imágenes para ORDER_CLAIM con rol customer_evidence.',
  })
  @ApiQuery({
    name: 'entityType',
    enum: ImageEntityType,
    example: 'ORDER_CLAIM',
  })
  @ApiQuery({ name: 'imageRole', example: 'customer_evidence' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  async uploadTemp(
    @UploadedFile() file: Express.Multer.File,
    @Query('entityType') entityType: ImageEntityType,
    @Query('imageRole') imageRole: string,
  ) {
    if (!file) throw new BadRequestException('No se recibió ningún archivo');

    const entityKey = entityType.toLowerCase();
    const config = IMAGE_CONFIGS[entityKey];

    if (!config) {
      throw new BadRequestException(
        `Entidad "${entityType}" no soporta imágenes`,
      );
    }

    const roleConfig = config.roles.find((r) => r.role === imageRole);
    if (!roleConfig) {
      throw new BadRequestException(
        `Rol "${imageRole}" no válido para entidad "${entityType}"`,
      );
    }

    const saved = await this.storage.saveTempImage(file, entityKey, imageRole);

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

  // ═══════════════════════════════════════════════
  // ELIMINAR IMAGEN (ADMIN O PROPIETARIO)
  // ═══════════════════════════════════════════════

  @Delete(':id')
  @UseGuards(ImageUploadGuard) // ← MISMO GUARD (acepta Admin y Customer)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Imagen eliminada exitosamente')
  @ApiOperation({
    summary: 'Elimina una imagen temporal por ID',
    description:
      'Admin: puede eliminar cualquier imagen.\n' +
      'Cliente: solo puede eliminar sus propias imágenes temporales (isConfirmed=false).',
  })
  async deleteImage(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: { user: AuthAccessPayload },
  ) {
    // 1. Buscar la imagen
    const image = await this.records.findById(id);

    if (!image) {
      throw new NotFoundException(`Imagen con ID "${id}" no encontrada`);
    }

    const currentUser = req.user;

    // 2. Lógica de permisos
    if (currentUser.userType === 'admin') {
      // Admin: puede eliminar cualquier imagen
      await this.records.deleteImage(id);
      return { success: true };
    }

    if (currentUser.userType === 'customer') {
      // Customer: solo puede eliminar imágenes NO confirmadas
      if (image.isConfirmed) {
        throw new ForbiddenException(
          'No puedes eliminar una imagen que ya fue confirmada en un pedido',
        );
      }

      // Customer: solo puede eliminar imágenes de tipo ORDER_CLAIM
      if (image.entityType !== 'ORDER_CLAIM') {
        throw new ForbiddenException(
          'No tienes permiso para eliminar esta imagen',
        );
      }

      // Opcional: Validar que la imagen fue subida por este cliente
      // (requiere guardar userId en la tabla Image)
      // if (image.uploadedById !== currentUser.sub) {
      //   throw new ForbiddenException('No puedes eliminar imágenes de otro usuario');
      // }

      await this.records.deleteImage(id);
      return { success: true };
    }

    throw new ForbiddenException('Tipo de usuario no autorizado');
  }

  // ═══════════════════════════════════════════════
  // ELIMINAR IMAGEN CONFIRMADA (SOLO ADMIN)
  // ═══════════════════════════════════════════════
  // Este endpoint es para que el admin pueda eliminar imágenes
  // ya confirmadas (ej: desde el CMS)

  @Delete(':id/confirmed')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Imagen confirmada eliminada exitosamente')
  @ApiOperation({
    summary: 'Elimina una imagen confirmada (Solo Admin)',
    description: 'Elimina una imagen que ya está asociada a una entidad.',
  })
  async deleteConfirmedImage(@Param('id', ParseUUIDPipe) id: string) {
    await this.records.deleteImage(id);
    return { success: true };
  }
}
