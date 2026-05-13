import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class CustomerAuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    private readonly customerCfg;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    login(email: string, password: string, res: Response): Promise<{
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
    logoutAll(customerId: string, res: Response): Promise<{
        message: string;
    }>;
    private generateTokenPair;
    private saveRefreshToken;
    private revokeAllSessions;
    private setRefreshCookie;
    private clearRefreshCookie;
}
