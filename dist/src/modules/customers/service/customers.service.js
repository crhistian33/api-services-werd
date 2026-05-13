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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const base_service_1 = require("../../../common/services/base.service");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mail_service_1 = require("../../mail/service/mail.service");
const CUSTOMER_INCLUDE = {
    addresses: true,
    _count: {
        select: { orders: true },
    },
};
const TRASH_INCLUDE = {
    deletedBy: { select: { id: true, name: true, email: true } },
};
let CustomersService = class CustomersService extends base_service_1.BaseService {
    mailService;
    useSoftDelete = true;
    nameField = 'email';
    constructor(prisma, mailService) {
        super(prisma, 'customer');
        this.mailService = mailService;
    }
    async findAllCustomers(query) {
        const { search, isActive, isVerified, page, limit, onlyTrash } = query;
        return this.findAll({
            where: {
                ...(isActive !== undefined && { isActive }),
                ...(isVerified !== undefined && {
                    emailVerifiedAt: isVerified ? { not: null } : null,
                }),
                ...(search && {
                    OR: [
                        { firstName: { contains: search, mode: 'insensitive' } },
                        { lastName: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } },
                        { phone: { contains: search, mode: 'insensitive' } },
                    ],
                }),
            },
            orderBy: { createdAt: 'desc' },
            include: onlyTrash ? TRASH_INCLUDE : CUSTOMER_INCLUDE,
            pagination: { page, limit },
            onlyTrash,
        });
    }
    async findCustomerById(id) {
        return this.findOne(id, CUSTOMER_INCLUDE);
    }
    async softDeleteCustomer(id, adminId) {
        return this.softDelete(id, adminId);
    }
    async softDeleteManyCustomers(ids, adminId) {
        return this.softDeleteMany(ids, adminId);
    }
    async restoreCustomer(id, adminId) {
        return this.restore(id, adminId);
    }
    async restoreCustomers(ids, adminId) {
        return this.restoreMany(ids, adminId);
    }
    async register(dto) {
        const exists = await this.prisma.customer.findUnique({
            where: { email: dto.email },
        });
        if (exists)
            throw new common_1.ConflictException('El correo electrónico ya se encuentra registrado');
        const passwordHash = await bcrypt.hash(dto.password, 12);
        return this.prisma.$transaction(async (tx) => {
            const customer = await tx.customer.create({
                data: {
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email,
                    phone: dto.phone,
                    passwordHash,
                },
            });
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 15);
            await tx.customerVerificationCode.create({
                data: {
                    code,
                    email: customer.email,
                    expiresAt,
                    customerId: customer.id,
                },
            });
            await this.mailService.sendVerificationEmail(customer.email, code);
            return customer;
        });
    }
    async verifyEmail(email, code) {
        const verification = await this.prisma.customerVerificationCode.findFirst({
            where: { email, code, expiresAt: { gt: new Date() } },
        });
        if (!verification)
            throw new common_1.BadRequestException('Código inválido o expirado');
        return this.prisma.$transaction(async (tx) => {
            await tx.customer.update({
                where: { id: verification.customerId },
                data: { emailVerifiedAt: new Date() },
            });
            await tx.customerVerificationCode.delete({
                where: { id: verification.id },
            });
            return { message: 'Email verificado con éxito' };
        });
    }
    async updatePassword(id, dto) {
        const customer = await this.prisma.customer.findUnique({ where: { id } });
        if (!customer?.passwordHash) {
            throw new common_1.UnauthorizedException('Esta cuenta utiliza autenticación externa (Google)');
        }
        const isMatch = await bcrypt.compare(dto.currentPassword, customer.passwordHash);
        if (!isMatch)
            throw new common_1.BadRequestException('La contraseña actual es incorrecta');
        const newPasswordHash = await bcrypt.hash(dto.newPassword, 12);
        return this.prisma.customer.update({
            where: { id },
            data: { passwordHash: newPasswordHash },
        });
    }
    async resetPassword(dto) {
        const verification = await this.prisma.customerVerificationCode.findFirst({
            where: {
                email: dto.email,
                code: dto.code,
                expiresAt: { gt: new Date() },
            },
        });
        if (!verification)
            throw new common_1.BadRequestException('Código de recuperación inválido');
        const passwordHash = await bcrypt.hash(dto.newPassword, 12);
        return this.prisma.$transaction(async (tx) => {
            await tx.customer.update({
                where: { id: verification.customerId },
                data: { passwordHash },
            });
            await tx.customerVerificationCode.delete({
                where: { id: verification.id },
            });
            return { message: 'Contraseña restablecida correctamente' };
        });
    }
    async forgotPassword(dto) {
        const customer = await this.prisma.customer.findUnique({
            where: { email: dto.email },
        });
        if (!customer) {
            return {
                message: 'Si el correo está registrado, se enviará un código de verificación.',
            };
        }
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 15);
        await this.prisma.customerVerificationCode.create({
            data: {
                code,
                email: customer.email,
                expiresAt,
                customerId: customer.id,
            },
        });
        await this.mailService.sendPasswordResetEmail(customer.email, code);
        return {
            message: 'Si el correo está registrado, se enviará un código de verificación.',
        };
    }
    async getMyAddresses(customerId) {
        return this.prisma.customerAddress.findMany({
            where: { customerId },
            include: {
                department: { select: { id: true, name: true } },
                province: { select: { id: true, name: true } },
                district: { select: { id: true, name: true } },
            },
            orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
        });
    }
    async createAddress(customerId, dto) {
        return this.prisma.$transaction(async (tx) => {
            if (dto.isDefault) {
                await tx.customerAddress.updateMany({
                    where: { customerId, isDefault: true },
                    data: { isDefault: false },
                });
            }
            return tx.customerAddress.create({
                data: {
                    customerId,
                    alias: dto.alias,
                    recipientName: dto.recipientName,
                    phone: dto.phone,
                    addressLine: dto.addressLine,
                    reference: dto.reference,
                    latitude: dto.latitude,
                    longitude: dto.longitude,
                    isDefault: dto.isDefault ?? false,
                    departmentId: dto.departmentId,
                    provinceId: dto.provinceId,
                    districtId: dto.districtId,
                },
                include: {
                    department: { select: { id: true, name: true } },
                    province: { select: { id: true, name: true } },
                    district: { select: { id: true, name: true } },
                },
            });
        });
    }
    async updateAddress(customerId, addressId, dto) {
        const address = await this.prisma.customerAddress.findFirst({
            where: { id: addressId, customerId },
        });
        if (!address)
            throw new common_1.NotFoundException('Dirección no encontrada');
        return this.prisma.$transaction(async (tx) => {
            if (dto.isDefault) {
                await tx.customerAddress.updateMany({
                    where: { customerId, isDefault: true, id: { not: addressId } },
                    data: { isDefault: false },
                });
            }
            const { departmentId, provinceId, districtId, ...rest } = dto;
            return tx.customerAddress.update({
                where: { id: addressId },
                data: {
                    ...rest,
                    ...(departmentId && {
                        department: { connect: { id: departmentId } },
                    }),
                    ...(provinceId && { province: { connect: { id: provinceId } } }),
                    ...(districtId && { district: { connect: { id: districtId } } }),
                },
                include: {
                    department: { select: { id: true, name: true } },
                    province: { select: { id: true, name: true } },
                    district: { select: { id: true, name: true } },
                },
            });
        });
    }
    async deleteAddress(customerId, addressId) {
        const address = await this.prisma.customerAddress.findFirst({
            where: { id: addressId, customerId },
        });
        if (!address)
            throw new common_1.NotFoundException('Dirección no encontrada');
        await this.prisma.customerAddress.delete({ where: { id: addressId } });
        return { message: 'Dirección eliminada correctamente' };
    }
    async setDefaultAddress(customerId, addressId) {
        const address = await this.prisma.customerAddress.findFirst({
            where: { id: addressId, customerId },
        });
        if (!address)
            throw new common_1.NotFoundException('Dirección no encontrada');
        return this.prisma.$transaction(async (tx) => {
            await tx.customerAddress.updateMany({
                where: { customerId, isDefault: true },
                data: { isDefault: false },
            });
            return tx.customerAddress.update({
                where: { id: addressId },
                data: { isDefault: true },
            });
        });
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService])
], CustomersService);
//# sourceMappingURL=customers.service.js.map