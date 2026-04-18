// src/modules/auth/controller/customer-auth.controller.ts

import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import type { Response, Request } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBearerAuth,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CustomerAuthService } from '../services/customer-auth.service';
import { LoginDto } from '../dto/login.dto';
import { Public } from '../../../common/decorators/public.decorator';
import { CurrentUser } from '../decorators/current-user.decorator';
import type { CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Customer Auth')
@Controller('auth/customer')
export class CustomerAuthController {
  constructor(private readonly authService: CustomerAuthService) {}

  // ═══════════════════════════════════════════════
  // LOGIN
  // ═══════════════════════════════════════════════

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login de cliente' })
  @ApiOkResponse({
    description: 'Inicio de sesión exitoso, devuelve accessToken y cookie',
  })
  @ApiUnauthorizedResponse({ description: 'Credenciales inválidas' })
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(dto.email, dto.password, res);
  }

  // ═══════════════════════════════════════════════
  // REFRESH TOKEN
  // ═══════════════════════════════════════════════

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Rotación de tokens de cliente (Refresh)' })
  @ApiOkResponse({ description: 'Devuelve un nuevo accessToken' })
  @ApiUnauthorizedResponse({
    description: 'Refresh token inválido o no proporcionado',
  })
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refresh(req, res);
  }

  // ═══════════════════════════════════════════════
  // LOGOUT
  // ═══════════════════════════════════════════════

  @Post('logout')
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cerrar sesión de cliente' })
  @ApiOkResponse({ description: 'Sesión terminada y cookie limpia' })
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.logout(req, res);
  }

  // ═══════════════════════════════════════════════
  // LOGOUT ALL
  // ═══════════════════════════════════════════════

  @Post('logout-all')
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Cerrar todas las sesiones activas de este cliente',
  })
  @ApiOkResponse({
    description: 'Todas las sesiones revocadas en la base de datos',
  })
  async logoutAll(
    @CurrentUser() customer: CustomerJwtPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logoutAll(customer.sub, res);
  }
}
