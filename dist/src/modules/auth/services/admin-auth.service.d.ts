import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class AdminAuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    private readonly adminCfg;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    login(email: string, password: string, res: Response): Promise<{
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
    logoutAll(adminId: string, res: Response): Promise<{
        message: string;
    }>;
    private generateTokenPair;
    private saveRefreshToken;
    private revokeAllSessions;
    private setRefreshCookie;
    private clearRefreshCookie;
}
