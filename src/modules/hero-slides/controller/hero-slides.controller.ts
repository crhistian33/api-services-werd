import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { HeroSlidesService } from '../service/hero-slides.service';
import {
  CreateHeroSlideDto,
  UpdateHeroSlideDto,
  QueryHeroSlideDto,
} from '../dto';
import { ResponseMessage } from '../../../common/decorators/response-message/response-message.decorator';

@ApiTags('HeroSlides')
@Controller('hero-slides')
export class HeroSlidesController {
  constructor(private readonly heroSlidesService: HeroSlidesService) {}

  @Get()
  @ResponseMessage('Hero slides obtenidos exitosamente')
  @ApiOperation({ summary: 'Listar hero slides con paginación y filtros' })
  @ApiOkResponse({ description: 'Lista paginada de hero slides' })
  findAll(@Query() query: QueryHeroSlideDto) {
    return this.heroSlidesService.findAllHeroSlides(query);
  }

  @Get(':id')
  @ResponseMessage('Hero slide obtenido exitosamente')
  @ApiOperation({ summary: 'Obtener hero slide por ID' })
  @ApiParam({ name: 'id', description: 'UUID del hero slide' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.heroSlidesService.findHeroSlideById(id);
  }

  @Post()
  @ResponseMessage('Hero slide creado exitosamente')
  @ApiOperation({ summary: 'Crear hero slide' })
  @ApiCreatedResponse({ description: 'Hero slide creado' })
  create(@Body() dto: CreateHeroSlideDto) {
    return this.heroSlidesService.createHeroSlide(dto);
  }

  @Patch(':id')
  @ResponseMessage('Hero slide actualizado exitosamente')
  @ApiOperation({ summary: 'Actualizar hero slide' })
  @ApiParam({ name: 'id', description: 'UUID del hero slide' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateHeroSlideDto,
  ) {
    return this.heroSlidesService.updateHeroSlide(id, dto);
  }

  @Delete('bulk')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Hero slides eliminados exitosamente')
  @ApiOperation({ summary: 'Eliminar múltiples hero slides' })
  removeMany(@Body() dto: { ids: string[] }) {
    return this.heroSlidesService.removeManyHeroSlides(dto.ids);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ResponseMessage('Hero slide eliminado exitosamente')
  @ApiOperation({ summary: 'Eliminar hero slide' })
  @ApiParam({ name: 'id', description: 'UUID del hero slide' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.heroSlidesService.removeHeroSlide(id);
  }
}
