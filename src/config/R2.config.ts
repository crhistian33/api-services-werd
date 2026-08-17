import { registerAs } from '@nestjs/config';

// Registra bajo la key 'r2', igual patrón que jwt.config.ts (jwt.admin / jwt.customer)
export default registerAs('r2', () => ({
  accountId: process.env.R2_ACCOUNT_ID,
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  bucketName: process.env.R2_BUCKET_NAME,
  // https://pub-xxxx.r2.dev  (dev)  o  https://cdn.tudominio.com  (producción, dominio propio conectado al bucket)
  publicUrl: process.env.R2_PUBLIC_URL,
}));

/**
 * Registrar en el ConfigModule raíz (app.module.ts), junto a tus otros configs:
 *
 *   ConfigModule.forRoot({
 *     isGlobal: true,
 *     load: [jwtConfig, r2Config, ...],
 *   })
 *
 * Variables en .env:
 *   R2_ACCOUNT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   R2_ACCESS_KEY_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   R2_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *   R2_BUCKET_NAME=ecommerce-images
 *   R2_PUBLIC_URL=https://pub-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev
 */
