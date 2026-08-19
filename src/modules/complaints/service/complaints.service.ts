import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateComplaintDto } from '../dto/create-complaint.dto';
import { ListComplaintsQueryDto } from '../dto/list-complaints-query.dto';
import { ResolveComplaintDto } from '../dto/resolve-complaint.dto';
import { RejectComplaintDto } from '../dto/reject-complaint.dto';
import {
  Prisma,
  ComplaintStatus,
  ImageEntityType,
} from 'generated/prisma/client';
import { ImageStorageService } from '../../images/services/image-storage.service';
import { MailService } from '../../mail/service/mail.service';
import { extname } from 'path';

@Injectable()
export class ComplaintsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageStorage: ImageStorageService,
    private readonly mailService: MailService,
  ) {}

  async findComplaintById(id: string) {
    const record = await this.prisma.complaint.findFirst({
      where: { id },
      include: {
        managedBy: { select: { id: true, name: true, email: true } },
        resolvedBy: { select: { id: true, name: true, email: true } },
      },
    });

    if (!record) {
      throw new NotFoundException(`Reclamo con id "${id}" no encontrado`);
    }

    return record;
  }

  async findAll(query: ListComplaintsQueryDto) {
    const { page = 1, limit = 20, status, type, search } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.ComplaintWhereInput = {
      ...(status && { status }),
      ...(type && { complaintType: type }),
      ...(search && {
        OR: [
          { ticketNumber: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } },
          { customerName: { contains: search, mode: 'insensitive' } },
          { documentNumber: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.complaint.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          managedBy: { select: { name: true } },
        },
      }),
      this.prisma.complaint.count({ where }),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async create(dto: CreateComplaintDto) {
    // 1. Validación de regla de negocio legal (Menor de edad)
    if (dto.isMinor && !dto.parentName) {
      throw new BadRequestException(
        'El nombre del apoderado es obligatorio para menores de edad.',
      );
    }

    try {
      // 2. Inserción directa. No calculamos el correlativo aquí, delegamos a Postgres.
      const newComplaint = await this.prisma.complaint.create({
        data: {
          complaintType: dto.complaintType,
          customerName: dto.customerName,
          documentType: dto.documentType,
          documentNumber: dto.documentNumber,
          address: dto.address,
          email: dto.email,
          phone: dto.phone,
          isMinor: dto.isMinor,
          parentName: dto.isMinor ? dto.parentName : null,
          claimedAmount: dto.claimedAmount,
          productName: dto.productName,
          description: dto.description,
          ...(dto.orderId && { orderId: dto.orderId }),
          ...(dto.orderNumber && { orderNumber: dto.orderNumber }),
        },
        select: {
          id: true,
          ticketNumber: true,
          customerName: true,
          email: true,
          createdAt: true,
        },
      });

      return this.findComplaintById(newComplaint.id);
    } catch (error) {
      console.error('[Complaints] Error al registrar reclamo:', error);
      throw new InternalServerErrorException(
        'No se pudo procesar la hoja de reclamación en este momento.',
      );
    }
  }

  async markInReview(id: string, adminId: string) {
    const complaint = await this.findComplaintById(id);

    if (complaint.status !== ComplaintStatus.OPEN) {
      // Si ya está en revisión, resuelto o cerrado, no hacemos nada (idempotente)
      return complaint;
    }

    return this.prisma.complaint.update({
      where: { id },
      data: {
        status: ComplaintStatus.IN_REVIEW,
        managedById: adminId,
      },
      include: {
        managedBy: { select: { id: true, name: true, email: true } },
        resolvedBy: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async resolve(id: string, dto: ResolveComplaintDto, adminId: string) {
    const complaint = await this.findComplaintById(id);

    if (
      complaint.status !== ComplaintStatus.OPEN &&
      complaint.status !== ComplaintStatus.IN_REVIEW
    ) {
      throw new BadRequestException(
        'El reclamo ya fue resuelto o cerrado y no se puede volver a responder.',
      );
    }

    const finalFileKeys: string[] = [];
    const mailAttachments: {
      name: string;
      content: string;
      contentType: string;
    }[] = [];

    // Procesar adjuntos si existen
    if (dto.attachmentTempKeys && dto.attachmentTempKeys.length > 0) {
      for (const tempImgId of dto.attachmentTempKeys) {
        // Buscar el registro temporal de imagen
        const tempRecord = await this.prisma.image.findUnique({
          where: { id: tempImgId },
        });

        if (
          tempRecord &&
          !tempRecord.isConfirmed &&
          tempRecord.entityType === ImageEntityType.COMPLAINT
        ) {
          const meta = (tempRecord.metadata as { mimeType?: string }) || {};
          const mimeType = meta.mimeType || 'application/octet-stream';

          try {
            // Movemos el archivo de temp/ a files/complaint/admin_response/
            const { finalKey } = await this.imageStorage.moveRawFileToFinal(
              tempRecord.tempPath!,
              'complaint',
              'admin_response',
              mimeType,
            );
            finalFileKeys.push(finalKey);

            // Descargamos el buffer para adjuntarlo al correo
            const buffer = await this.imageStorage.downloadFileBuffer(finalKey);
            const fileName = `adjunto_${finalFileKeys.length}${extname(finalKey)}`;

            mailAttachments.push({
              name: fileName,
              content: buffer.toString('base64'),
              contentType: mimeType,
            });

            // Eliminamos el registro temporal de DB (la key final vivirá en Complaint.responseFileKeys)
            await this.prisma.image.delete({ where: { id: tempImgId } });
          } catch (e) {
            console.error(`Error procesando adjunto ${tempImgId}: `, e);
            // Si hay error en un adjunto, decidimos continuar sin él, o podríamos fallar.
            // Continuaremos logueando el error.
          }
        }
      }
    }

    const subject = `RE: Libro de reclamaciones - ${complaint.ticketNumber}`;

    // 1. Enviar el correo primero (si falla, no guardamos como resuelto y pueden reintentar)
    await this.mailService.sendComplaintResponse(
      complaint.email,
      {
        customerName: complaint.customerName,
        ticketNumber: complaint.ticketNumber,
        complaintTypeLabel:
          complaint.complaintType === 'CLAIM' ? 'Reclamo' : 'Queja',
        description: complaint.description,
        responseContent: dto.responseContent,
        resolvedAt: new Date().toLocaleDateString('es-PE'),
        hasAttachments: mailAttachments.length > 0,
        attachmentCount: mailAttachments.length,
        attachmentNames: mailAttachments.map((a) => a.name),
      },
      mailAttachments,
    );

    // 2. Si el correo se envió con éxito, actualizamos la base de datos
    return this.prisma.complaint.update({
      where: { id },
      data: {
        status: ComplaintStatus.RESOLVED,
        adminResponse: dto.responseContent,
        responseSubject: subject,
        responseFileKeys: finalFileKeys,
        resolvedById: adminId,
        resolvedAt: new Date(),
      },
      include: {
        managedBy: { select: { id: true, name: true, email: true } },
        resolvedBy: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async reject(id: string, dto: RejectComplaintDto, adminId: string) {
    const complaint = await this.findComplaintById(id);

    if (
      complaint.status !== ComplaintStatus.OPEN &&
      complaint.status !== ComplaintStatus.IN_REVIEW
    ) {
      throw new BadRequestException(
        'Solo se pueden rechazar reclamos en estado OPEN o IN_REVIEW.',
      );
    }

    // 1. Notificar al cliente por email antes de persistir el cambio
    await this.mailService.sendComplaintRejected(complaint.email, {
      customerName: complaint.customerName,
      ticketNumber: complaint.ticketNumber,
      complaintTypeLabel:
        complaint.complaintType === 'CLAIM' ? 'Reclamo' : 'Queja',
      description: complaint.description,
      rejectionReason: dto.rejectionReason,
      rejectedAt: new Date().toLocaleDateString('es-PE'),
    });

    // 2. Si el email se envió, persistimos el rechazo
    return this.prisma.complaint.update({
      where: { id },
      data: {
        status: ComplaintStatus.REJECTED,
        adminResponse: dto.rejectionReason,
        resolvedById: adminId,
        resolvedAt: new Date(),
      },
      include: {
        managedBy: { select: { id: true, name: true, email: true } },
        resolvedBy: { select: { id: true, name: true, email: true } },
      },
    });
  }

  async close(id: string) {
    const complaint = await this.findComplaintById(id);

    const closableStatuses: ComplaintStatus[] = [
      ComplaintStatus.RESOLVED,
      ComplaintStatus.REJECTED,
    ];

    if (!closableStatuses.includes(complaint.status)) {
      throw new BadRequestException(
        'Solo se pueden cerrar reclamos en estado RESOLVED o REJECTED.',
      );
    }

    return this.prisma.complaint.update({
      where: { id },
      data: {
        status: ComplaintStatus.CLOSED,
      },
      include: {
        managedBy: { select: { id: true, name: true, email: true } },
        resolvedBy: { select: { id: true, name: true, email: true } },
      },
    });
  }
}
