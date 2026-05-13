export interface PrismaModelDelegate {
    findMany(args?: any): Promise<any[]>;
    count(args?: any): Promise<number>;
    findUnique(args?: any): Promise<unknown>;
    findFirst(args?: any): Promise<unknown>;
    create(args?: any): Promise<unknown>;
    createMany(args?: any): Promise<{
        count: number;
    }>;
    update(args?: any): Promise<unknown>;
    updateMany(args?: any): Promise<{
        count: number;
    }>;
    delete(args?: any): Promise<unknown>;
    deleteMany(args?: any): Promise<{
        count: number;
    }>;
}
