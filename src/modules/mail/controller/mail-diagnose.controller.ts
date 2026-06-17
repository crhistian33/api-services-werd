// src/modules/mail/controller/mail-diagnose.controller.ts
//
// ⚠️ TEMPORAL — borrar este archivo (y su registro en MailModule) una vez resuelto el problema.
// Sirve para diagnosticar si Railway bloquea el puerto SMTP saliente o si el problema
// es de credenciales/configuración.

import { Controller, Get } from '@nestjs/common';
import { Public } from '../../../common/decorators/public.decorator';
import { ConfigService } from '@nestjs/config';
import * as net from 'net';
import * as nodemailer from 'nodemailer';

interface TcpTestResult {
  success: boolean;
  timeMs?: number;
  error?: string;
}

interface SmtpTestResult {
  success?: boolean;
  skipped?: boolean;
  error?: string;
  reason?: string;
}

interface DiagnoseResult {
  env: {
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASSWORD: string;
  };
  tcpTest: TcpTestResult;
  smtpTest: SmtpTestResult;
}

@Controller('mail-diagnose')
export class MailDiagnoseController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  @Public()
  async diagnose(): Promise<DiagnoseResult> {
    const host = this.config.get<string>('MAIL_HOST', 'smtp-relay.brevo.com');
    const port = this.config.get<number>('MAIL_PORT', 587);
    const user = this.config.get<string>('MAIL_USER');
    const pass = this.config.get<string>('MAIL_PASSWORD');

    const tcpTest = await this.testTcpConnection(host, port);

    const smtpTest: SmtpTestResult = tcpTest.success
      ? await this.testSmtpVerify(host, port, user, pass)
      : { skipped: true, reason: 'TCP falló, no se intenta SMTP' };

    return {
      env: {
        MAIL_HOST: host,
        MAIL_PORT: port,
        MAIL_USER: user ? `${user.slice(0, 4)}***` : 'NO DEFINIDO',
        MAIL_PASSWORD: pass
          ? 'DEFINIDO (' + pass.length + ' chars)'
          : 'NO DEFINIDO',
      },
      tcpTest,
      smtpTest,
    };
  }

  private testTcpConnection(
    host: string,
    port: number,
  ): Promise<{ success: boolean; timeMs?: number; error?: string }> {
    return new Promise((resolve) => {
      const start = Date.now();
      const socket = new net.Socket();

      // Timeout corto a propósito (8s) para no esperar el timeout largo de nodemailer
      socket.setTimeout(8000);

      socket.once('connect', () => {
        const timeMs = Date.now() - start;
        socket.destroy();
        resolve({ success: true, timeMs });
      });

      socket.once('timeout', () => {
        socket.destroy();
        resolve({
          success: false,
          timeMs: Date.now() - start,
          error:
            'TCP timeout: el socket nunca conectó. Probable bloqueo de red/firewall saliente en este puerto.',
        });
      });

      socket.once('error', (err) => {
        socket.destroy();
        resolve({
          success: false,
          timeMs: Date.now() - start,
          error: `TCP error: ${err.message}`,
        });
      });

      socket.connect(port, host);
    });
  }

  private async testSmtpVerify(
    host: string,
    port: number,
    user?: string,
    pass?: string,
  ): Promise<{ success: boolean; error?: string }> {
    if (!user || !pass) {
      return {
        success: false,
        error: 'MAIL_USER o MAIL_PASSWORD no definidos',
      };
    }

    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
      });

      await transporter.verify();
      return { success: true };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error desconocido';
      return { success: false, error: message };
    }
  }
}
