import { Body, Controller, Post, Delete, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewsletterService } from '../service/newsletter.service';
import { SubscribeDto } from '../dto/subscribe.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';

@ApiTags('Newsletter')
@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly service: NewsletterService) {}

  @Post('subscribe')
  @Public()
  @HttpCode(200)
  @ResponseMessage('Suscripción exitosa')
  @ApiOperation({ summary: 'Suscribirse al newsletter' })
  subscribe(@Body() dto: SubscribeDto) {
    return this.service.subscribe(dto.email, dto.name);
  }

  @Delete('unsubscribe')
  @Public()
  @HttpCode(200)
  @ResponseMessage('Suscripción cancelada')
  @ApiOperation({ summary: 'Cancelar suscripción al newsletter' })
  unsubscribe(@Body() dto: SubscribeDto) {
    return this.service.unsubscribe(dto.email);
  }
}
