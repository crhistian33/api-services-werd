import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaymentMethodType } from 'generated/prisma/client';

interface PaymentMethodConfig {
  publicKey?: string;
  privateKey?: string;
  [key: string]: unknown;
}

interface CulqiChargeResponse {
  id: string;
  user_message?: string;
  merchant_message?: string;
  [key: string]: unknown;
}

@Injectable()
export class CulqiService {
  private readonly CULQI_API_URL = 'https://api.culqi.com/v2';

  constructor(private readonly prisma: PrismaService) {}

  async createCharge(orderId: string, token: string, email: string) {
    // 1. Obtener la orden y el método de pago
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        paymentMethod: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Orden no encontrada');
    }

    if (order.paymentMethod.type !== PaymentMethodType.card) {
      throw new BadRequestException(
        'El método de pago de la orden no es de tipo Tarjeta',
      );
    }

    // 2. Obtener la llave privada desde config
    const config = (order.paymentMethod.config as PaymentMethodConfig) || {};
    const privateKey = config.privateKey;

    if (!privateKey) {
      throw new BadRequestException(
        'La llave privada de Culqi no está configurada en el método de pago',
      );
    }

    // 3. Preparar los datos para Culqi
    // Culqi requiere el monto en céntimos (integer)
    const amountInCents = Math.round(Number(order.total) * 100);

    const body = {
      amount: amountInCents,
      currency_code: 'PEN', // Podría venir de la orden si fuera multi-moneda
      email: email,
      source_id: token,
    };

    // 4. Llamar a la API de Culqi
    try {
      const resp = await fetch(`${this.CULQI_API_URL}/charges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${privateKey}`,
        },
        body: JSON.stringify(body),
      });

      const data = (await resp.json()) as CulqiChargeResponse;

      if (!resp.ok) {
        console.error('[CulqiService] Error de Culqi:', data);
        throw new BadRequestException(
          data.user_message ||
            data.merchant_message ||
            'Error al procesar el pago con Culqi',
        );
      }

      return data;
    } catch (error) {
      if (error instanceof BadRequestException) throw error;

      console.error('[CulqiService] Error de conexión:', error);
      throw new BadRequestException(
        'Error de comunicación con la pasarela de pagos',
      );
    }
  }
}
