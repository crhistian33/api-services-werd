import { BaseService, PrismaDatabaseClient } from './base.service';
type WithSlugSource = {
    name: string;
} | {
    title: string;
};
export declare abstract class SluggableService<T extends {
    id: string;
}, CreateDto extends WithSlugSource, UpdateDto extends {
    name?: string;
    title?: string;
}, WhereInput = object, OrderByInput = object> extends BaseService<T, CreateDto, UpdateDto, WhereInput, OrderByInput> {
    private getSlugSource;
    protected generateSlug(name: string): string;
    generateUniqueSlug(name: string, excludeId?: string, client?: PrismaDatabaseClient): Promise<string>;
    assertSlugAvailable(slug: string, excludeId?: string, client?: PrismaDatabaseClient): Promise<void>;
    findBySlug(slug: string, include?: object, client?: PrismaDatabaseClient): Promise<T>;
    createWithSlug(dto: CreateDto, include?: object, client?: PrismaDatabaseClient): Promise<T>;
    updateWithSlug(id: string, dto: UpdateDto, include?: object, client?: PrismaDatabaseClient): Promise<T>;
}
export {};
