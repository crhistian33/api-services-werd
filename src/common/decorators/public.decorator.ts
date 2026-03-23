import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

// Marca una ruta como pública — el JwtAuthGuard la omite
// Uso: @Public() en el método o la clase del controller
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
