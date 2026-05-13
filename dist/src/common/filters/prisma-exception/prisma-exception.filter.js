"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrismaExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
let PrismaExceptionFilter = PrismaExceptionFilter_1 = class PrismaExceptionFilter {
    logger = new common_1.Logger(PrismaExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const { statusCode, message } = this.mapPrismaError(exception);
        this.logger.error(`Prisma [${exception.code}] ${request.method} ${request.url} — ${exception.message}`);
        response.status(statusCode).json({
            success: false,
            statusCode,
            error: common_1.HttpStatus[statusCode],
            message,
            path: request.url,
            timestamp: new Date().toISOString(),
        });
    }
    mapPrismaError(exception) {
        switch (exception.code) {
            case 'P2002': {
                const target = exception.meta?.target;
                const modelName = exception.meta?.modelName;
                const driverError = exception.meta?.driverAdapterError;
                let fields = [];
                if (Array.isArray(target) && target.length > 0) {
                    fields = target;
                }
                else if (typeof target === 'string' && target.trim() !== '') {
                    fields = this.extractFieldsFromIndexName(target, modelName);
                }
                else if (driverError?.cause?.originalMessage) {
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
                    statusCode: common_1.HttpStatus.CONFLICT,
                    message: `Ya existe un registro con ese valor en: ${fieldLabel}`,
                };
            }
            case 'P2003': {
                const field = exception.meta?.field_name;
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: field
                        ? `Referencia inválida en el campo: ${field}`
                        : 'Referencia inválida: el registro relacionado no existe',
                };
            }
            case 'P2025': {
                const model = exception.meta?.modelName;
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: model
                        ? `${model} no encontrado`
                        : 'El registro no fue encontrado',
                };
            }
            case 'P2011': {
                const field = exception.meta?.constraint;
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: field
                        ? `El campo "${field}" no puede ser nulo`
                        : 'Violación de constraint: valor nulo en campo requerido',
                };
            }
            case 'P2018':
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Registros relacionados requeridos no encontrados',
                };
            case 'P2020':
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: 'Valor fuera del rango permitido por la base de datos',
                };
            case 'P2021':
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error interno: tabla no encontrada (migraciones desincronizadas)',
                };
            case 'P2022':
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error interno: columna no encontrada (migraciones desincronizadas)',
                };
            default:
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error inesperado en la base de datos',
                };
        }
    }
    mapFieldNames(fields) {
        const labels = {
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
    extractFieldsFromIndexName(indexName, modelName) {
        const withoutKey = indexName.replace(/_key$/, '');
        if (modelName) {
            const tablePrefix = modelName
                .replace(/([A-Z])/g, (_, l, i) => i === 0 ? l : `_${l}`)
                .toLowerCase();
            if (withoutKey.startsWith(tablePrefix + '_')) {
                return withoutKey.slice(tablePrefix.length + 1).split('_');
            }
        }
        return withoutKey.split('_').slice(1);
    }
};
exports.PrismaExceptionFilter = PrismaExceptionFilter;
exports.PrismaExceptionFilter = PrismaExceptionFilter = PrismaExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrismaExceptionFilter);
//# sourceMappingURL=prisma-exception.filter.js.map