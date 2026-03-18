import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from 'generated/prisma/client';

/**
 * PrismaExceptionFilter — maneja todos los errores conocidos de Prisma.
 *
 * Se registra globalmente en main.ts:
 *   app.useGlobalFilters(new PrismaExceptionFilter());
 *
 * Cubre los errores más comunes de un e-commerce:
 * - P2002: unique constraint (slug, email, sku duplicados)
 * - P2003: foreign key inválida (categoryId, brandId inexistentes)
 * - P2025: record not found en update/delete
 * - P2011: null constraint violation
 * - P2020: value out of range
 * - P2021/P2022: errores de migración desincronizada
 */
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { statusCode, message } = this.mapPrismaError(exception);

    this.logger.error(
      `Prisma [${exception.code}] ${request.method} ${request.url} — ${exception.message}`,
    );

    response.status(statusCode).json({
      success: false,
      statusCode,
      error: HttpStatus[statusCode],
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }

  private mapPrismaError(exception: Prisma.PrismaClientKnownRequestError): {
    statusCode: number;
    message: string;
  } {
    switch (exception.code) {
      // ── P2002: Unique constraint violation ─────────────────
      // Ej: slug, email, sku duplicados
      // meta.target contiene los campos involucrados: ['slug'], ['email'], etc.
      case 'P2002': {
        const target = exception.meta?.target;
        const modelName = exception.meta?.modelName as string | undefined;
        const driverError = exception.meta?.driverAdapterError as
          | {
              cause?: { originalMessage?: string };
            }
          | undefined;

        let fields: string[] = [];

        if (Array.isArray(target) && target.length > 0) {
          // Prisma clásico / MySQL: ['slug']
          fields = target as string[];
        } else if (typeof target === 'string' && target.trim() !== '') {
          // Prisma antiguo PostgreSQL: "Brand_name_key"
          fields = this.extractFieldsFromIndexName(target, modelName);
        } else if (driverError?.cause?.originalMessage) {
          // Prisma 7 + driver adapter: extrae el índice del mensaje del driver
          // Ej: "llave duplicada viola restricción de unicidad «brands_name_key»"
          // Ej: "duplicate key value violates unique constraint \"brands_name_key\""
          const msg = driverError.cause.originalMessage;
          const match = msg.match(/[«""]([^»""]+)[»""]/);
          if (match) {
            fields = this.extractFieldsFromIndexName(match[1], modelName);
          }
        }

        const fieldLabel = fields.length
          ? this.mapFieldNames(fields)
          : 'campo desconocido';

        return {
          statusCode: HttpStatus.CONFLICT,
          message: `Ya existe un registro con ese valor en: ${fieldLabel}`,
        };
      }

      // ── P2003: Foreign key constraint violation ─────────────
      // Ej: categoryId o brandId que no existen en su tabla
      // meta.field_name contiene el campo: 'products_categoryId_fkey'
      case 'P2003': {
        const field = exception.meta?.field_name as string | undefined;
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: field
            ? `Referencia inválida en el campo: ${field}`
            : 'Referencia inválida: el registro relacionado no existe',
        };
      }

      // ── P2025: Record not found ─────────────────────────────
      // Prisma lanza esto en update/delete cuando el where no matchea.
      // findUnique retorna null (no lanza), por eso BaseService maneja
      // ese caso manualmente con NotFoundException.
      // meta.cause contiene: "Record to update not found."
      // meta.modelName disponible en Prisma 5+
      case 'P2025': {
        const model = exception.meta?.modelName as string | undefined;
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: model
            ? `${model} no encontrado`
            : 'El registro no fue encontrado',
        };
      }

      // ── P2011: Null constraint violation ────────────────────
      case 'P2011': {
        const field = exception.meta?.constraint as string | undefined;
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: field
            ? `El campo "${field}" no puede ser nulo`
            : 'Violación de constraint: valor nulo en campo requerido',
        };
      }

      // ── P2018: Required connected records not found ─────────
      case 'P2018':
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Registros relacionados requeridos no encontrados',
        };

      // ── P2020: Value out of range ───────────────────────────
      case 'P2020':
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Valor fuera del rango permitido por la base de datos',
        };

      // ── P2021: Table not found ──────────────────────────────
      // Solo ocurre si las migraciones están desincronizadas
      case 'P2021':
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message:
            'Error interno: tabla no encontrada (migraciones desincronizadas)',
        };

      // ── P2022: Column not found ─────────────────────────────
      case 'P2022':
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message:
            'Error interno: columna no encontrada (migraciones desincronizadas)',
        };

      // ── Fallback ────────────────────────────────────────────
      default:
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Error inesperado en la base de datos',
        };
    }
  }

  /**
   * Convierte nombres de campos técnicos a etiquetas legibles.
   * ['slug'] → 'slug'
   * ['email'] → 'email'
   * campos desconocidos se muestran tal cual.
   */
  private mapFieldNames(fields: string[]): string {
    const labels: Record<string, string> = {
      slug: 'slug',
      email: 'email',
      sku: 'SKU',
      code: 'código',
      name: 'nombre',
      orderNumber: 'número de orden',
      ticketNumber: 'número de ticket',
    };

    return fields.map((f) => labels[f] ?? f).join(', ');
  }

  private extractFieldsFromIndexName(
    indexName: string,
    modelName?: string,
  ): string[] {
    const withoutKey = indexName.replace(/_key$/, '');

    if (modelName) {
      const tablePrefix = modelName
        .replace(/([A-Z])/g, (_, l: string, i: number) =>
          i === 0 ? l : `_${l}`,
        )
        .toLowerCase();

      if (withoutKey.startsWith(tablePrefix + '_')) {
        return withoutKey.slice(tablePrefix.length + 1).split('_');
      }
    }

    return withoutKey.split('_').slice(1);
  }
}
