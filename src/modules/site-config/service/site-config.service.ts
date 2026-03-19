import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { ImageEntityType } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { PrismaDatabaseClient } from '../../../common/services/base.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import {
  UpdateSiteConfigDto,
  CreateSocialLinkDto,
  UpdateSocialLinkDto,
} from '../dto';

const ENTITY_TYPE = ImageEntityType.SITE_CONFIG;
const ROLE_LOGO_HEADER = 'logo_header';
const ROLE_LOGO_FOOTER = 'logo_footer';

@Injectable()
export class SiteConfigService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly imageRecord: ImageRecordService,
  ) {}

  // ═══════════════════════════════════════════════
  // onModuleInit — garantiza que siempre existe
  // un registro de SiteConfig al arrancar el servidor.
  // Si no existe lo crea con valores por defecto.
  // ═══════════════════════════════════════════════
  async onModuleInit(): Promise<void> {
    const count = await this.prisma.siteConfig.count();
    if (count === 0) {
      await this.prisma.siteConfig.create({
        data: {
          storeName: 'Mi Tienda',
          storeEmail: 'contacto@mitienda.com',
        },
      });
    }
  }

  // ═══════════════════════════════════════════════
  // getConfigId — helper privado reutilizable
  // Obtiene el id del único registro de SiteConfig
  // ═══════════════════════════════════════════════
  private async getConfigId(): Promise<string> {
    const config = await this.prisma.siteConfig.findFirst({
      select: { id: true },
    });

    if (!config) {
      throw new NotFoundException('Configuración del sitio no encontrada');
    }

    return config.id;
  }

  // ═══════════════════════════════════════════════
  // get — configuración completa para el admin
  // Incluye todas las redes sociales y logos
  // ═══════════════════════════════════════════════
  async get() {
    const config = await this.prisma.siteConfig.findFirst({
      include: {
        socialLinks: { orderBy: { sortOrder: 'asc' } },
      },
    });

    if (!config) {
      throw new NotFoundException('Configuración del sitio no encontrada');
    }

    return this.imageRecord.attachImagesToEntity(config, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // getPublic — solo campos públicos para Astro
  // Sin datos sensibles: emails internos, taxRate
  // Incluye id para que attachImagesToEntity funcione
  // ═══════════════════════════════════════════════
  async getPublic() {
    const config = await this.prisma.siteConfig.findFirst({
      select: {
        id: true,
        storeName: true,
        metaTitle: true,
        metaDescription: true,
        googleAnalyticsId: true,
        facebookPixelId: true,
        phonePrimary: true,
        whatsappNumber: true,
        address: true,
        socialLinks: {
          where: { isActive: true },
          orderBy: { sortOrder: 'asc' },
          select: {
            network: true,
            name: true,
            icon: true,
            url: true,
          },
        },
      },
    });

    if (!config) {
      throw new NotFoundException('Configuración del sitio no encontrada');
    }

    return this.imageRecord.attachImagesToEntity(config, ENTITY_TYPE);
  }

  // ═══════════════════════════════════════════════
  // update — actualiza config base, redes sociales
  // e imágenes.
  //
  // Estrategia:
  //   - Config base + redes sociales → $transaction (BD pura)
  //   - Logos → fuera de transaction (operaciones de disco)
  //   - Si BD falla → rollback, logos siguen en /temp/
  //   - Si logo falla → config guardada, informa al usuario
  //     qué logo falló para que reintente solo ese
  // ═══════════════════════════════════════════════
  async update(dto: UpdateSiteConfigDto) {
    const { tempLogoHeaderId, tempLogoFooterId, socialLinks, ...configData } =
      dto;

    const id = await this.getConfigId();

    // ── Fase 1: BD en transacción ────────────────────────────────────────────
    await this.prisma.$transaction(async (tx) => {
      await tx.siteConfig.update({
        where: { id },
        data: configData,
      });

      if (socialLinks !== undefined) {
        await this.syncSocialLinks(id, socialLinks, tx);
      }
    });

    // ── Fase 2: logos fuera de la transacción ────────────────────────────────
    // Cada logo tiene su propio try/catch para informar exactamente
    // cuál falló sin cancelar el guardado de la configuración
    const errors: string[] = [];

    if (tempLogoHeaderId !== undefined) {
      try {
        await this.imageRecord.syncTempImageById(
          tempLogoHeaderId,
          ENTITY_TYPE,
          id,
          ROLE_LOGO_HEADER,
        );
      } catch {
        errors.push('logo header');
      }
    }

    if (tempLogoFooterId !== undefined) {
      try {
        await this.imageRecord.syncTempImageById(
          tempLogoFooterId,
          ENTITY_TYPE,
          id,
          ROLE_LOGO_FOOTER,
        );
      } catch {
        errors.push('logo footer');
      }
    }

    if (errors.length > 0) {
      throw new InternalServerErrorException(
        `Configuración guardada. Error al subir: ${errors.join(', ')}. Reintenta.`,
      );
    }

    return this.get();
  }

  // ═══════════════════════════════════════════════
  // createSocialLink — agrega una red social
  // Para el endpoint dedicado POST /social-links
  // ═══════════════════════════════════════════════
  async createSocialLink(dto: CreateSocialLinkDto) {
    const siteConfigId = await this.getConfigId();

    return this.prisma.socialLink.create({
      data: {
        siteConfigId,
        network: dto.network,
        name: dto.name,
        icon: dto.icon ?? null,
        url: dto.url,
        isActive: dto.isActive ?? true,
        sortOrder: dto.sortOrder ?? 0,
      },
    });
  }

  // ═══════════════════════════════════════════════
  // updateSocialLink
  // ═══════════════════════════════════════════════
  async updateSocialLink(id: string, dto: UpdateSocialLinkDto) {
    await this.assertSocialLinkExists(id);

    return this.prisma.socialLink.update({
      where: { id },
      data: dto,
    });
  }

  // ═══════════════════════════════════════════════
  // removeSocialLink
  // ═══════════════════════════════════════════════
  async removeSocialLink(id: string) {
    await this.assertSocialLinkExists(id);

    return this.prisma.socialLink.delete({ where: { id } });
  }

  // ═══════════════════════════════════════════════
  // reorderSocialLinks — recibe IDs en nuevo orden
  // y actualiza sortOrder de cada uno
  // ═══════════════════════════════════════════════
  async reorderSocialLinks(ids: string[]) {
    await this.prisma.$transaction(
      ids.map((id, index) =>
        this.prisma.socialLink.update({
          where: { id },
          data: { sortOrder: index },
        }),
      ),
    );

    return this.get();
  }

  // ── Helpers privados ─────────────────────────────────────────────────────

  // Sincroniza el estado completo de redes sociales:
  // elimina las que no vienen, upsert de las que sí.
  // Corre dentro de la transacción del método update.
  private async syncSocialLinks(
    siteConfigId: string,
    items: CreateSocialLinkDto[],
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = client ?? this.prisma;
    const incomingIds = items
      .filter((i) => i.id !== undefined)
      .map((i) => i.id as string);

    // Elimina las que ya no están en la lista
    await db.socialLink.deleteMany({
      where: {
        siteConfigId,
        ...(incomingIds.length > 0 && {
          id: { notIn: incomingIds },
        }),
      },
    });

    if (items.length === 0) return;

    // Upsert de cada item respetando el orden del array
    await Promise.all(
      items.map((item, index) =>
        item.id !== undefined
          ? db.socialLink.update({
              where: { id: item.id },
              data: {
                network: item.network,
                name: item.name,
                icon: item.icon ?? null,
                url: item.url,
                isActive: item.isActive ?? true,
                sortOrder: index,
              },
            })
          : db.socialLink.create({
              data: {
                siteConfigId,
                network: item.network,
                name: item.name,
                icon: item.icon ?? null,
                url: item.url,
                isActive: item.isActive ?? true,
                sortOrder: index,
              },
            }),
      ),
    );
  }

  private async assertSocialLinkExists(id: string) {
    const link = await this.prisma.socialLink.findUnique({
      where: { id },
    });

    if (!link) {
      throw new NotFoundException(`Red social con id "${id}" no encontrada`);
    }

    return link;
  }
}
