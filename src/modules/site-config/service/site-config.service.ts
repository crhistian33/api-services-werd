import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { ImageEntityType } from 'generated/prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { PrismaDatabaseClient } from '../../../common/services/base.service';
import {
  ImageRecordService,
  MovedImageData,
} from '../../images/services/image-record.service';
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
  // onModuleInit
  // ═══════════════════════════════════════════════

  async onModuleInit(): Promise<void> {
    const count = await this.prisma.siteConfig.count();
    if (count === 0) {
      await this.prisma.siteConfig.create({
        data: {
          storeName: process.env.STORE_NAME ?? 'Mi Tienda',
          storeEmail: process.env.STORE_EMAIL ?? 'contacto@mitienda.com',
        },
      });
    }
  }

  // ═══════════════════════════════════════════════
  // getConfigId
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

  async getConfig(onlyActiveSocialLinks = false) {
    const config = await this.prisma.siteConfig.findFirst({
      include: {
        socialLinks: {
          where: onlyActiveSocialLinks ? { isActive: true } : undefined,
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
    if (!config) {
      throw new NotFoundException('Configuración del sitio no encontrada');
    }
    return this.imageRecord.attachImagesToEntity(config, ENTITY_TYPE);
  }

  async get() {
    return this.getConfig(false);
  }

  async getPublic() {
    return this.getConfig(true);
  }

  // ═══════════════════════════════════════════════
  // update
  //
  // Paso 1 — findTempRecord x 2: valida logos (solo lectura)
  //          Si cualquiera falla: error, BD intacta, front mantiene el form
  // Paso 2 — moveToFinal x 2: mueve archivos al disco
  //          Si cualquiera falla: deleteFiles revierte los ya movidos,
  //          BD intacta
  // Paso 3 — $transaction: update config + social links + confirmInDb x 2
  //          Si falla: deleteFiles revierte el disco, BD sin cambios
  // ═══════════════════════════════════════════════

  async update(dto: UpdateSiteConfigDto) {
    const { tempLogoHeaderId, tempLogoFooterId, socialLinks, ...configData } =
      dto;

    const id = await this.getConfigId();

    // Paso 1: valida todos los logos antes de tocar la BD
    const [headerTempRecord, footerTempRecord] = await Promise.all([
      tempLogoHeaderId !== undefined
        ? this.imageRecord.findTempRecord(
            tempLogoHeaderId,
            ENTITY_TYPE,
            ROLE_LOGO_HEADER,
          )
        : Promise.resolve(null),
      tempLogoFooterId !== undefined
        ? this.imageRecord.findTempRecord(
            tempLogoFooterId,
            ENTITY_TYPE,
            ROLE_LOGO_FOOTER,
          )
        : Promise.resolve(null),
    ]);

    // Paso 2: mueve archivos al disco (sin tocar BD)
    const movedList: MovedImageData[] = [];

    try {
      if (headerTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          headerTempRecord,
          ENTITY_TYPE,
          id,
          ROLE_LOGO_HEADER,
        );
        movedList.push(moved);
      }

      if (footerTempRecord !== null) {
        const moved = await this.imageRecord.moveToFinal(
          footerTempRecord,
          ENTITY_TYPE,
          id,
          ROLE_LOGO_FOOTER,
        );
        movedList.push(moved);
      }
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    // Paso 3: BD atómica — update config + social links + confirma logos
    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.siteConfig.update({ where: { id }, data: configData });

        if (socialLinks !== undefined) {
          await this.syncSocialLinks(id, socialLinks, tx);
        }

        await Promise.all(
          movedList.map((moved) => this.imageRecord.confirmInDb(moved, tx)),
        );
      });
    } catch (error) {
      await this.imageRecord.deleteFiles(movedList.map((m) => m.finalPath));
      throw error;
    }

    return this.get();
  }

  // ═══════════════════════════════════════════════
  // createSocialLink
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
    return this.prisma.socialLink.update({ where: { id }, data: dto });
  }

  // ═══════════════════════════════════════════════
  // removeSocialLink
  // ═══════════════════════════════════════════════

  async removeSocialLink(id: string) {
    await this.assertSocialLinkExists(id);
    return this.prisma.socialLink.delete({ where: { id } });
  }

  // ═══════════════════════════════════════════════
  // reorderSocialLinks
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

  // ── Helpers privados ──────────────────────────────────────────────

  private async syncSocialLinks(
    siteConfigId: string,
    items: CreateSocialLinkDto[],
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const db = client ?? this.prisma;

    const incomingIds = items
      .filter((i) => i.id !== undefined)
      .map((i) => i.id as string);

    await db.socialLink.deleteMany({
      where: {
        siteConfigId,
        ...(incomingIds.length > 0 && { id: { notIn: incomingIds } }),
      },
    });

    if (items.length === 0) return;

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
    const link = await this.prisma.socialLink.findUnique({ where: { id } });
    if (!link) {
      throw new NotFoundException(`Red social con id "${id}" no encontrada`);
    }
    return link;
  }
}
