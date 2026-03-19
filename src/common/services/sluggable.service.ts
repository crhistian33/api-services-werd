import {
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { BaseService, PrismaDatabaseClient } from './base.service';

export abstract class SluggableService<
  T extends { id: string },
  CreateDto extends { name: string },
  UpdateDto extends { name?: string },
  WhereInput = object,
  OrderByInput = object,
> extends BaseService<T, CreateDto, UpdateDto, WhereInput, OrderByInput> {
  // ── Genera slug URL-safe desde un nombre ────────────────────────────────────
  protected generateSlug(name: string): string {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  // ── Genera slug único añadiendo sufijo numérico si ya existe ────────────────
  async generateUniqueSlug(
    name: string,
    excludeId?: string,
    client?: PrismaDatabaseClient,
  ): Promise<string> {
    const base = this.generateSlug(name);
    let slug = base;
    let counter = 1;

    while (true) {
      const existing = (await this.getModel(client).findUnique({
        where: { slug },
        select: { id: true },
      })) as { id: string } | null;

      if (!existing || existing.id === excludeId) break;

      slug = `${base}-${counter}`;
      counter++;
    }

    return slug;
  }

  // ── Lanza ConflictException si el slug ya está en uso ──────────────────────
  async assertSlugAvailable(
    slug: string,
    excludeId?: string,
    client?: PrismaDatabaseClient,
  ): Promise<void> {
    const existing = (await this.getModel(client).findUnique({
      where: { slug },
      select: { id: true },
    })) as { id: string } | null;

    if (existing && existing.id !== excludeId) {
      throw new ConflictException(`El slug "${slug}" ya está en uso`);
    }
  }

  // ── findBySlug ──────────────────────────────────────────────────────────────
  async findBySlug(
    slug: string,
    include?: object,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    const record = (await this.getModel(client).findUnique({
      where: { slug },
      include,
    })) as T | null;

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con slug "${slug}" no encontrado`,
      );
    }

    return record;
  }

  // ── createWithSlug ──────────────────────────────────────────────────────────
  async createWithSlug(
    dto: CreateDto,
    include?: object,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    const slug = await this.generateUniqueSlug(dto.name, undefined, client);
    return this.create({ ...dto, slug } as CreateDto, include, client);
  }

  // ── updateWithSlug ──────────────────────────────────────────────────────────
  async updateWithSlug(
    id: string,
    dto: UpdateDto,
    include?: object,
    client?: PrismaDatabaseClient,
  ): Promise<T> {
    const slug = dto.name
      ? await this.generateUniqueSlug(dto.name, id, client)
      : undefined;

    return this.update(
      id,
      { ...dto, ...(slug !== undefined && { slug }) } as UpdateDto,
      include,
      client,
    );
  }

  // ── assertNotDeleted — lanza error si el registro NO está eliminado ─────────
  async assertNotDeleted(id: string, friendlyName?: string): Promise<void> {
    const record = (await this.getModel().findUnique({
      where: { id },
      select: { id: true, deletedAt: true, name: true },
    })) as { id: string; name?: string; deletedAt: Date | null } | null;

    if (!record) {
      throw new NotFoundException(
        `${this.modelName} con id "${id}" no encontrado`,
      );
    }

    if (!record.deletedAt) {
      const label = friendlyName ?? record.name ?? id;
      throw new BadRequestException(
        `"${label}" no está eliminado, no se puede restaurar`,
      );
    }
  }
}
