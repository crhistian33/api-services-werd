"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_exception_filter_1 = require("./common/filters/prisma-exception/prisma-exception.filter");
const http_exception_filter_1 = require("./common/filters/http-exception/http-exception.filter");
const response_interceptor_1 = require("./common/interceptors/response/response.interceptor");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cookie_parser_1.default)());
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalFilters(new prisma_exception_filter_1.PrismaExceptionFilter(), new http_exception_filter_1.HttpExceptionFilter());
    const reflector = app.get(core_1.Reflector);
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor(reflector));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('WERD API')
        .setDescription('The WERD API description')
        .setVersion('1.0')
        .addTag('werd')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'access-token')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, documentFactory, {
        swaggerOptions: {
            docExpansion: 'none',
            filter: true,
            showRequestDuration: true,
            persistAuthorization: true,
        },
    });
    await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
    console.log(`🚀 API:    http://localhost:${process.env.PORT ?? 3000}/api/v1`);
    console.log(`📚 Swagger: http://localhost:${process.env.PORT ?? 3000}/api/docs`);
}
void bootstrap();
//# sourceMappingURL=main.js.map