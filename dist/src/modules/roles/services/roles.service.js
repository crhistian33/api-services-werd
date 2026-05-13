"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const base_service_1 = require("../../../common/services/base.service");
const bcrypt = __importStar(require("bcrypt"));
let RolesService = class RolesService extends base_service_1.BaseService {
    prisma;
    useSoftDelete = false;
    constructor(prisma) {
        super(prisma, 'adminRole');
        this.prisma = prisma;
    }
    async onModuleInit() {
        await this.seedRoles();
    }
    async seedRoles() {
        const rolesToSeed = [
            { name: 'super_admin', description: 'Super Administrador' },
            { name: 'admin', description: 'Administrador' },
            { name: 'editor', description: 'Editor' },
            { name: 'viewer', description: 'Visor' },
        ];
        for (const role of rolesToSeed) {
            await this.prisma.adminRole.upsert({
                where: { name: role.name },
                update: {},
                create: role,
            });
        }
        const userCount = await this.prisma.adminUser.count();
        if (userCount === 0) {
            const superAdminRole = await this.prisma.adminRole.findUnique({
                where: { name: 'super_admin' },
            });
            if (superAdminRole) {
                const rawPassword = process.env.USER_PASSWORD ?? 'Admin1234!';
                const hashedPassword = await bcrypt.hash(rawPassword, 10);
                await this.prisma.adminUser.create({
                    data: {
                        name: process.env.USER_NAME ?? 'Admin werd',
                        email: process.env.USER_EMAIL ?? 'admin@werd.com',
                        passwordHash: hashedPassword,
                        isActive: true,
                        roleId: superAdminRole.id,
                    },
                });
            }
        }
    }
    async findAllRoles(query) {
        const { search, page, limit } = query;
        const result = await this.findAll({
            where: {
                ...(search !== undefined && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { description: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: [{ name: 'asc' }, { createdAt: 'desc' }],
            pagination: { page, limit },
        });
        return result;
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolesService);
//# sourceMappingURL=roles.service.js.map