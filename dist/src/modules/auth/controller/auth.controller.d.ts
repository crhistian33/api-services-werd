import type { Response, Request } from 'express';
import { AdminAuthService } from '../services/admin-auth.service';
import { LoginDto } from '../dto/login.dto';
import type { AdminJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AdminAuthService);
    login(dto: LoginDto, res: Response): Promise<{
        accessToken: string;
        admin: {
            id: string;
            name: string;
            email: string;
            role: string;
        };
    }>;
    refresh(req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<{
        message: string;
    }>;
    logoutAll(admin: AdminJwtPayload, res: Response): Promise<{
        message: string;
    }>;
}
