import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
} from '@nestjs/swagger';
import { SiteConfigService } from '../service/site-config.service';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import {
  CreateSocialLinkDto,
  ReorderSocialLinksDto,
  UpdateSiteConfigDto,
  UpdateSocialLinkDto,
} from '../dto';

@ApiTags('Site Config')
@Controller('site-config')
export class SiteConfigController {
  constructor(private readonly siteConfigService: SiteConfigService) {}

  // ── SiteConfig ────────────────────────────────

  @Get()
  @ResponseMessage('Configuración obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener configuración del sitio (admin)' })
  @ApiOkResponse({ description: 'Configuración completa con redes sociales' })
  get() {
    return this.siteConfigService.get();
  }

  @Get('public')
  @ResponseMessage('Configuración obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener configuración pública (Astro)' })
  @ApiOkResponse({ description: 'Solo campos públicos — sin datos sensibles' })
  getPublic() {
    return this.siteConfigService.getPublic();
  }

  @Patch()
  @ResponseMessage('Configuración actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar configuración del sitio' })
  update(@Body() dto: UpdateSiteConfigDto) {
    return this.siteConfigService.update(dto);
  }

  // ── Social links ──────────────────────────────

  @Post('social-links')
  @ResponseMessage('Red social creada exitosamente')
  @ApiOperation({ summary: 'Agregar red social' })
  createSocialLink(@Body() dto: CreateSocialLinkDto) {
    return this.siteConfigService.createSocialLink(dto);
  }

  @Patch('social-links/reorder')
  @ResponseMessage('Redes sociales reordenadas exitosamente')
  @ApiOperation({ summary: 'Reordenar redes sociales' })
  reorderSocialLinks(@Body() dto: ReorderSocialLinksDto) {
    return this.siteConfigService.reorderSocialLinks(dto.ids);
  }

  @Patch('social-links/:id')
  @ResponseMessage('Red social actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar red social' })
  @ApiParam({ name: 'id', description: 'UUID de la red social' })
  updateSocialLink(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSocialLinkDto,
  ) {
    return this.siteConfigService.updateSocialLink(id, dto);
  }

  @Delete('social-links/:id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Red social eliminada exitosamente')
  @ApiOperation({ summary: 'Eliminar red social' })
  @ApiParam({ name: 'id', description: 'UUID de la red social' })
  removeSocialLink(@Param('id', ParseUUIDPipe) id: string) {
    return this.siteConfigService.removeSocialLink(id);
  }
}
