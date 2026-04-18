import { Module } from '@nestjs/common';
import { AdminAuthService } from './services/admin-auth.service';
import { CustomerAuthService } from './services/customer-auth.service';
import { AuthController } from './controller/auth.controller';
import { CustomerAuthController } from './controller/customer-auth.controller';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { TokenConfig } from '../../config/jwt.config';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const adminConfig = config.get<TokenConfig>('jwt.admin')!;

        // Creamos el objeto de opciones con un tipado flexible pero seguro
        const jwtOptions: Record<string, any> = {
          secret: adminConfig.accessSecret,
          signOptions: {
            expiresIn: adminConfig.accessExpiresIn,
          },
        };

        return jwtOptions as JwtModuleOptions;
      },
    }),
  ],
  controllers: [AuthController, CustomerAuthController],
  providers: [
    AdminAuthService,
    CustomerAuthService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AuthModule {}
