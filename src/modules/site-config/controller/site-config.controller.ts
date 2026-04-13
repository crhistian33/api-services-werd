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
  ApiBearerAuth,
} from '@nestjs/swagger';
import { SiteConfigService } from '../service/site-config.service';
import { ResponseMessage } from '../../../common/decorators/response-message.decorator';
import {
  CreateSocialLinkDto,
  ReorderSocialLinksDto,
  UpdateSiteConfigDto,
  UpdateSocialLinkDto,
} from '../dto';
import { Roles } from '../../../modules/auth/decorators/roles.decorator';
import { AdminRole } from '../../../modules/auth/constants/admin-role.constant';
import { Public } from '../../../common/decorators/public.decorator';

@ApiTags('Site Config')
@Controller('site-config')
export class SiteConfigController {
  constructor(private readonly siteConfigService: SiteConfigService) {}

  // ── SiteConfig ────────────────────────────────

  @Public()
  @Get('public')
  @ResponseMessage('Configuración obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener configuración pública (Astro)' })
  @ApiOkResponse({ description: 'Solo campos públicos — sin datos sensibles' })
  getPublic() {
    return this.siteConfigService.getPublic();
  }

  @Get()
  @Roles(
    AdminRole.ADMIN,
    AdminRole.SUPER_ADMIN,
    AdminRole.EDITOR,
    AdminRole.VIEWER,
  )
  @ApiBearerAuth('access-token')
  @ResponseMessage('Configuración obtenida exitosamente')
  @ApiOperation({ summary: 'Obtener configuración del sitio (admin)' })
  @ApiOkResponse({ description: 'Configuración completa con redes sociales' })
  get() {
    return this.siteConfigService.get();
  }

  @Patch()
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Configuración actualizada exitosamente')
  @ApiOperation({ summary: 'Actualizar configuración del sitio' })
  update(@Body() dto: UpdateSiteConfigDto) {
    console.log('DTO', dto);
    return this.siteConfigService.update(dto);
  }

  // ── Social links ──────────────────────────────

  @Post('social-links')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Red social creada exitosamente')
  @ApiOperation({ summary: 'Agregar red social' })
  createSocialLink(@Body() dto: CreateSocialLinkDto) {
    return this.siteConfigService.createSocialLink(dto);
  }

  @Patch('social-links/reorder')
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN, AdminRole.EDITOR)
  @ApiBearerAuth('access-token')
  @ResponseMessage('Redes sociales reordenadas exitosamente')
  @ApiOperation({ summary: 'Reordenar redes sociales' })
  reorderSocialLinks(@Body() dto: ReorderSocialLinksDto) {
    console.log('DTO', dto);
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
