import {
  Injectable,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { BaseService } from '../../../common/services/base.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { PaginatedResult } from '../../../common/interfaces/pagination.interface';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  QueryCustomerDto,
  UpdateCustomerPasswordDto,
  ForgotPasswordResetDto,
  ForgotPasswordDto,
} from '../dto';
import { MailService } from '../../mail/service/mail.service';
import { Prisma } from 'generated/prisma/client';

// Definición de la entidad con sus relaciones para el tipado del BaseService
type CustomerEntity = Prisma.CustomerGetPayload<{
  include: {
    addresses: true;
    _count: { select: { orders: true } };
  };
}>;

// Configuración de campos a incluir en las respuestas de listado y detalle
const CUSTOMER_INCLUDE = {
  addresses: true,
  _count: {
    select: { orders: true },
  },
} as const;

const TRASH_INCLUDE = {
  deletedBy: { select: { id: true, name: true, email: true } },
} as const;

@Injectable()
export class CustomersService extends BaseService<
  CustomerEntity,
  CreateCustomerDto,
  UpdateCustomerDto,
  Prisma.CustomerWhereInput,
  Prisma.CustomerOrderByWithRelationInput
> {
  protected override useSoftDelete = true;
  protected override nameField = 'email';

  constructor(
    prisma: PrismaService,
    private readonly mailService: MailService,
  ) {
    super(prisma, 'customer');
  }

  // ═══════════════════════════════════════════════
  // CMS: findAllCustomers
  // ═══════════════════════════════════════════════

  async findAllCustomers(
    query: QueryCustomerDto,
  ): Promise<PaginatedResult<CustomerEntity>> {
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

  // ═══════════════════════════════════════════════
  // CMS: Operaciones de Item y Masivas
  // ═══════════════════════════════════════════════

  async findCustomerById(id: string) {
    return this.findOne(id, CUSTOMER_INCLUDE);
  }

  async softDeleteCustomer(id: string, adminId: string) {
    return this.softDelete(id, adminId);
  }

  async softDeleteManyCustomers(ids: string[], adminId: string) {
    return this.softDeleteMany(ids, adminId);
  }

  async restoreCustomer(id: string, adminId: string) {
    return this.restore(id, adminId);
  }

  async restoreCustomers(ids: string[], adminId: string) {
    return this.restoreMany(ids, adminId);
  }

  // ═══════════════════════════════════════════════
  // PUBLIC: Registro y Verificación
  // ═══════════════════════════════════════════════

  async register(dto: CreateCustomerDto) {
    const exists = await this.prisma.customer.findUnique({
      where: { email: dto.email },
    });
    if (exists)
      throw new ConflictException(
        'El correo electrónico ya se encuentra registrado',
      );

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

      // Generación de código de 6 dígitos
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

      // Emitir evento para envío de correo
      await this.mailService.sendVerificationEmail(customer.email, code);

      return customer;
    });
  }

  async verifyEmail(email: string, code: string) {
    const verification = await this.prisma.customerVerificationCode.findFirst({
      where: { email, code, expiresAt: { gt: new Date() } },
    });

    if (!verification)
      throw new BadRequestException('Código inválido o expirado');

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

  // ═══════════════════════════════════════════════
  // PUBLIC: Perfil y Seguridad
  // ═══════════════════════════════════════════════

  async updatePassword(id: string, dto: UpdateCustomerPasswordDto) {
    const customer = await this.prisma.customer.findUnique({ where: { id } });

    if (!customer?.passwordHash) {
      throw new UnauthorizedException(
        'Esta cuenta utiliza autenticación externa (Google)',
      );
    }

    const isMatch = await bcrypt.compare(
      dto.currentPassword,
      customer.passwordHash,
    );
    if (!isMatch)
      throw new BadRequestException('La contraseña actual es incorrecta');

    const newPasswordHash = await bcrypt.hash(dto.newPassword, 12);

    return this.prisma.customer.update({
      where: { id },
      data: { passwordHash: newPasswordHash },
    });
  }

  async resetPassword(dto: ForgotPasswordResetDto) {
    const verification = await this.prisma.customerVerificationCode.findFirst({
      where: {
        email: dto.email,
        code: dto.code,
        expiresAt: { gt: new Date() },
      },
    });

    if (!verification)
      throw new BadRequestException('Código de recuperación inválido');

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

  async forgotPassword(dto: ForgotPasswordDto) {
    const customer = await this.prisma.customer.findUnique({
      where: { email: dto.email },
    });

    if (!customer) {
      // Por seguridad, no revelamos si el correo existe o no
      return {
        message:
          'Si el correo está registrado, se enviará un código de verificación.',
      };
    }

    // Generación de código de 6 dígitos
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

    // Envío de correo de recuperación
    await this.mailService.sendPasswordResetEmail(customer.email, code);

    return {
      message:
        'Si el correo está registrado, se enviará un código de verificación.',
    };
  }
}
