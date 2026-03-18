import {
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { BaseService } from './base.service';

export abstract class SluggableService<
  T,
  CreateDto extends { name: string },
  UpdateDto extends { name?: string },
  WhereInput = object,
  OrderByInput = object,
> extends BaseService<T, CreateDto, UpdateDto, WhereInput, OrderByInput> {
  // ═══════════════════════════════════════════════
  // generateSlug — convierte un nombre en slug URL-safe
  // ═══════════════════════════════════════════════
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

  // ═══════════════════════════════════════════════
  // generateUniqueSlug — genera slug y lo hace único
  // añadiendo sufijo numérico si ya existe.
  // ═══════════════════════════════════════════════
  async generateUniqueSlug(name: string, excludeId?: string): Promise<string> {
    const base = this.generateSlug(name);
    let slug = base;
    let counter = 1;

    while (true) {
      const existing = (await this.model.findUnique({
        where: { slug },
        select: { id: true },
      })) as { id: string } | null;

      if (!existing || existing.id === excludeId) break;

      slug = `${base}-${counter}`;
      counter++;
    }

    return slug;
  }

  // ═══════════════════════════════════════════════
  // assertSlugAvailable — lanza ConflictException si el slug ya está en uso
  // ═══════════════════════════════════════════════
  async assertSlugAvailable(slug: string, excludeId?: string): Promise<void> {
    const existing = (await this.model.findUnique({
      where: { slug },
      select: { id: true },
    })) as { id: string } | null;

    if (existing && existing.id !== excludeId) {
      throw new ConflictException(`El slug "${slug}" ya está en uso`);
    }
  }

  // ═══════════════════════════════════════════════
  // findBySlug
  // ═══════════════════════════════════════════════
  async findBySlug(slug: string, include?: object): Promise<T> {
    const record = (await this.model.findUnique({
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

  // ═══════════════════════════════════════════════
  // createWithSlug — genera slug desde name, lo hace único y crea el registro.
  // Los services solo necesitan llamar esto en lugar de manejar el slug manualmente.
  // ═══════════════════════════════════════════════
  async createWithSlug(dto: CreateDto, include?: object): Promise<T> {
    const slug = await this.generateUniqueSlug(dto.name);
    return this.create({ ...dto, slug } as CreateDto, include);
  }

  // ═══════════════════════════════════════════════
  // updateWithSlug — regenera slug si cambia el name, garantiza unicidad.
  // ═══════════════════════════════════════════════
  async updateWithSlug(
    id: string,
    dto: UpdateDto,
    include?: object,
  ): Promise<T> {
    let slug: string | undefined;

    if (dto.name) {
      slug = await this.generateUniqueSlug(dto.name, id);
    }

    return this.update(
      id,
      { ...dto, ...(slug && { slug }) } as UpdateDto,
      include,
    );
  }

  // ═══════════════════════════════════════════════
  // assertNotDeleted — lanza BadRequestException si el registro YA tiene deletedAt
  // ═══════════════════════════════════════════════
  async assertNotDeleted(id: string, friendlyName?: string): Promise<void> {
    const record = (await this.model.findUnique({
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
