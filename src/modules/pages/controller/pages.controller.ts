import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PagesService } from '../service/pages.service';
import { CreatePageDto, UpdatePageDto } from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message/response-message.decorator';
import {
  BulkDeletePageDto,
  BulkRestorePageDto,
  BulkSoftDeletePageDto,
} from '../dto/bulk-page.dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  // ── Rutas públicas ────────────────────────────────────────────────
  // Decorar con @Public() según el guard de autenticación del proyecto

  // GET /pages/public
  @ResponseMessage('Páginas obtenidas exitosamente')
  @Get('public')
  findAllPublic() {
    return this.pagesService.findAllPagesPublic();
  }

  // GET /pages/public/:slug
  @ResponseMessage('Página obtenida exitosamente')
  @Get('public/:slug')
  findBySlugPublic(@Param('slug') slug: string) {
    return this.pagesService.findPageBySlugPublic(slug);
  }

  // ── Rutas admin ───────────────────────────────────────────────────

  // GET /pages
  @ResponseMessage('Páginas obtenidas exitosamente')
  @Get()
  findAll() {
    return this.pagesService.findAllPages();
  }

  // GET /pages/slug/:slug — admin puede ver cualquier estado
  @ResponseMessage('Página obtenida exitosamente')
  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.pagesService.findPageBySlug(slug);
  }

  // GET /pages/:id
  @ResponseMessage('Página obtenida exitosamente')
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.findPageById(id);
  }

  // POST /pages
  @ResponseMessage('Página creada exitosamente')
  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.pagesService.createPage(dto);
  }

  // PATCH /pages/:id
  @ResponseMessage('Página actualizada exitosamente')
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdatePageDto) {
    return this.pagesService.updatePage(id, dto);
  }

  // PATCH /pages/:id/publish
  @ResponseMessage('Página publicada exitosamente')
  @Patch(':id/publish')
  publish(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.publishPage(id);
  }

  // PATCH /pages/:id/unpublish
  @ResponseMessage('Página despublicada exitosamente')
  @Patch(':id/unpublish')
  unpublish(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.unpublishPage(id);
  }

  // DELETE /pages/:id
  @ResponseMessage('Página eliminada exitosamente')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.removePage(id);
  }

  // DELETE /pages — body: { ids: string[] }
  @ResponseMessage('Páginas eliminadas exitosamente')
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  removeMany(@Body('ids') dto: BulkDeletePageDto) {
    return this.pagesService.removeManyPages(dto.ids);
  }

  // PATCH /pages/:id/restore
  @ResponseMessage('Página restaurada exitosamente')
  @Patch(':id/restore')
  restore(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.restorePage(id);
  }

  @Patch('restore')
  restoreMany(@Body('ids') dto: BulkRestorePageDto) {
    return this.pagesService.restoreManyPages(dto.ids);
  }

  // DELETE /pages/:id/soft
  @ResponseMessage('Página eliminada exitosamente')
  @Delete(':id/soft')
  @HttpCode(HttpStatus.NO_CONTENT)
  softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.pagesService.softDeletePage(id);
  }

  // DELETE /pages — body: { ids: string[] } — soft delete masivo
  @ResponseMessage('Páginas eliminadas exitosamente')
  @Delete('soft')
  @HttpCode(HttpStatus.NO_CONTENT)
  softDeleteMany(@Body('ids') dto: BulkSoftDeletePageDto) {
    return this.pagesService.softDeleteManyPages(dto.ids);
  }
}
