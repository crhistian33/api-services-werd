import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendVerificationEmail(email: string, code: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Verifica tu cuenta - Werd',
        template: './verification',
        context: {
          code,
        },
      });
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw new InternalServerErrorException(
        'Error al enviar el correo de verificación',
      );
    }
  }

  async sendPasswordResetEmail(email: string, code: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Recuperación de contraseña - Werd',
        template: './reset-password',
        context: {
          code,
        },
      });
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw new InternalServerErrorException(
        'Error al enviar el correo de recuperación',
      );
    }
  }
}
