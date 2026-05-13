import type { Response, Request } from 'express';
import { CustomerAuthService } from '../services/customer-auth.service';
import { LoginDto } from '../dto/login.dto';
import type { CustomerJwtPayload } from '../../../common/interfaces/jwt-payload.interface';
export declare class CustomerAuthController {
    private readonly authService;
    constructor(authService: CustomerAuthService);
    login(dto: LoginDto, res: Response): Promise<{
        accessToken: string;
        customer: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        };
    }>;
    refresh(req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<{
        message: string;
    }>;
    logoutAll(customer: CustomerJwtPayload, res: Response): Promise<{
        message: string;
    }>;
}
