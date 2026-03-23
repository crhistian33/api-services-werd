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
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { AdminAuthService } from '../services/admin-auth.service';
import { LoginDto } from '../dto/login.dto';
import { Public } from '../../../common/decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import { AdminRole } from '../constants/admin-role.constant';
import { CurrentAdmin } from '../../../common/decorators/current-admin.decorator';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';

@ApiTags('Auth')
@Controller('auth/admin')
export class AuthController {
  constructor(private readonly authService: AdminAuthService) {}

  // ═══════════════════════════════════════════════
  // LOGIN
  // ═══════════════════════════════════════════════

  @Public() // Permite el acceso sin token (Global Guard lo ignora)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login de administrador' })
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

  @Public() // El Refresh es público porque la validación se hace manual en el Service via Cookie
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Rotación de tokens (Refresh)' })
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
  @Roles(AdminRole.ADMIN, AdminRole.SUPER_ADMIN) // Define quién puede entrar
  @ApiBearerAuth('access-token') // Habilita el candado en Swagger
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Cerrar sesión actual (Revoca el refresh token)' })
  @ApiOkResponse({ description: 'Sesión terminada y cookie limpia' })
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.logout(req, res);
  }

  // ═══════════════════════════════════════════════
  // LOGOUT ALL
  // ═══════════════════════════════════════════════

  @Post('logout-all')
  @Roles(AdminRole.SUPER_ADMIN) // Solo tú puedes forzar el cierre de todas las sesiones
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Cerrar todas las sesiones activas de este administrador',
  })
  @ApiOkResponse({
    description: 'Todas las sesiones revocadas en la base de datos',
  })
  @ApiForbiddenResponse({
    description: 'Solo el Super Admin puede realizar esta acción',
  })
  async logoutAll(
    @CurrentAdmin() admin: AdminJwtPayload,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logoutAll(admin.sub, res);
  }
}
