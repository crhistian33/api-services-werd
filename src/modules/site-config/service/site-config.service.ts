// src/modules/site-config/site-config.service.ts

import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ImageRecordService } from '../../images/services/image-record.service';
import { ImageEntityType } from 'generated/prisma/client';
import { UpdateSiteConfigDto } from '../dto/update-site-config.dto';
import { CreateSocialLinkDto } from '../dto/create-social-link.dto';
import { UpdateSocialLinkDto } from '../dto/update-social-link.dto';

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
  // un registro de SiteConfig al arrancar el servidor
  // ═══════════════════════════════════════════════
  async onModuleInit() {
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
  // getPublic — campos públicos para Astro
  // sin datos sensibles (emails internos, taxRate)
  // ═══════════════════════════════════════════════
  async getPublic() {
    const config = await this.prisma.siteConfig.findFirst({
      select: {
        id: true, // requerido por attachImagesToEntity
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
  // update — actualiza configuración base,
  // redes sociales e imágenes de forma independiente
  // ═══════════════════════════════════════════════
  async update(dto: UpdateSiteConfigDto) {
    const { tempLogoHeaderId, tempLogoFooterId, socialLinks, ...configData } =
      dto;

    const id = await this.getConfigId();

    // 1. Actualiza datos escalares en BD
    await this.prisma.siteConfig.update({
      where: { id },
      data: configData,
    });

    // 2. Operaciones secundarias independientes
    //    Cada una con su propio try/catch para
    //    informar exactamente qué falló sin perder
    //    los cambios que sí se guardaron
    const errors: string[] = [];

    if (socialLinks !== undefined) {
      try {
        await this.syncSocialLinks(id, socialLinks);
      } catch {
        errors.push('redes sociales');
      }
    }

    if (tempLogoHeaderId != null) {
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

    if (tempLogoFooterId != null) {
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
        `Configuración guardada pero falló: ${errors.join(', ')}. Intenta nuevamente.`,
      );
    }

    return this.get();
  }

  // ═══════════════════════════════════════════════
  // syncSocialLinks — sincroniza el estado completo
  // de redes sociales en una sola operación:
  // elimina las que no vienen, upsert de las que sí
  // ═══════════════════════════════════════════════
  private async syncSocialLinks(
    siteConfigId: string,
    items: CreateSocialLinkDto[],
  ): Promise<void> {
    const incomingIds = items.filter((i) => i.id).map((i) => i.id!);

    // Elimina las que ya no están en la lista
    await this.prisma.socialLink.deleteMany({
      where: {
        siteConfigId,
        ...(incomingIds.length > 0 && {
          id: { notIn: incomingIds },
        }),
      },
    });

    // Upsert de cada item respetando el orden del array
    if (items.length > 0) {
      await this.prisma.$transaction(
        items.map((item, index) =>
          item.id
            ? this.prisma.socialLink.update({
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
            : this.prisma.socialLink.create({
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
  }

  // ═══════════════════════════════════════════════
  // createSocialLink — agrega una red social
  // (para uso directo desde el controller si se
  // prefiere un endpoint dedicado)
  // ═══════════════════════════════════════════════
  async createSocialLink(dto: CreateSocialLinkDto) {
    const id = await this.getConfigId();

    return this.prisma.socialLink.create({
      data: {
        siteConfigId: id,
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

    return this.prisma.socialLink.delete({
      where: { id },
    });
  }

  // ═══════════════════════════════════════════════
  // reorderSocialLinks — recibe array de IDs en el
  // nuevo orden y actualiza sortOrder de cada uno
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

  // ═══════════════════════════════════════════════
  // assertSocialLinkExists — helper privado
  // ═══════════════════════════════════════════════
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
