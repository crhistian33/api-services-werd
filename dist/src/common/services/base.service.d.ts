import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaModelDelegate } from '../interfaces/prisma-delegate.interface';
import { PaginatedResult, BatchResult, FindAllParams } from '../interfaces/pagination.interface';
import { RelationCheck } from '../interfaces/relation-check.interface';
export type PrismaTransactionClient = Omit<PrismaClient, '$on' | '$connect' | '$disconnect' | '$use' | '$extends'>;
export type PrismaDatabaseClient = PrismaService | PrismaClient | PrismaTransactionClient;
export declare abstract class BaseService<T extends {
    id: string;
}, CreateDto, UpdateDto, WhereInput = object, OrderByInput = object> {
    protected readonly prisma: PrismaService;
    protected readonly modelName: string;
    protected useSoftDelete: boolean;
    protected nameField: string;
    constructor(prisma: PrismaService, modelName: string);
    protected getModel(client?: PrismaDatabaseClient): PrismaModelDelegate;
    protected buildSkip(page: number, limit: number): number;
    protected buildPaginationMeta(total: number, page: number, limit: number): PaginatedResult<T>['meta'];
    protected softDeleteFilter(includeDeleted?: boolean, onlyTrash?: boolean): object;
    assertExists(id: string, includeDeleted?: boolean, client?: PrismaDatabaseClient): Promise<void>;
    checkRelations(id: string, checks: RelationCheck[], label?: string): Promise<void>;
    checkRelationsMany(ids: string[], checks: RelationCheck[]): Promise<void>;
    findAll(params?: FindAllParams<WhereInput, OrderByInput>): Promise<PaginatedResult<T>>;
    findOne(id: string, include?: object, includeDeleted?: boolean, client?: PrismaDatabaseClient): Promise<T>;
    create(data: CreateDto, include?: object, client?: PrismaDatabaseClient): Promise<T>;
    update(id: string, data: UpdateDto, include?: object, client?: PrismaDatabaseClient): Promise<T>;
    remove(id: string, client?: PrismaDatabaseClient): Promise<T>;
    removeMany(ids: string[], client?: PrismaDatabaseClient): Promise<BatchResult>;
    softDelete(id: string, adminId: string, client?: PrismaDatabaseClient): Promise<T>;
    softDeleteMany(ids: string[], adminId: string, client?: PrismaDatabaseClient): Promise<BatchResult>;
    restore(id: string, adminId: string, client?: PrismaDatabaseClient): Promise<T>;
    restoreMany(ids: string[], adminId: string, client?: PrismaDatabaseClient): Promise<BatchResult>;
    assertNotDeleted(id: string, friendlyName?: string): Promise<void>;
    changeStatusMany(ids: string[], status: boolean, adminId: string): Promise<{
        count: number;
    }>;
}
