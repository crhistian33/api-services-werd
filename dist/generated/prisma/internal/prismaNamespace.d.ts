import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Image: "Image";
    readonly Category: "Category";
    readonly Brand: "Brand";
    readonly Product: "Product";
    readonly ProductPrice: "ProductPrice";
    readonly ProductPriceHistory: "ProductPriceHistory";
    readonly ProductSpec: "ProductSpec";
    readonly ProductFeature: "ProductFeature";
    readonly Promotion: "Promotion";
    readonly Coupon: "Coupon";
    readonly CouponUsage: "CouponUsage";
    readonly Customer: "Customer";
    readonly CustomerVerificationCode: "CustomerVerificationCode";
    readonly CustomerAddress: "CustomerAddress";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly OrderAddress: "OrderAddress";
    readonly PaymentMethod: "PaymentMethod";
    readonly OrderPaymentTransaction: "OrderPaymentTransaction";
    readonly OrderLogistics: "OrderLogistics";
    readonly OrderPaymentReminder: "OrderPaymentReminder";
    readonly OrderClaim: "OrderClaim";
    readonly OrderClaimItem: "OrderClaimItem";
    readonly Refund: "Refund";
    readonly RefundItem: "RefundItem";
    readonly OrderSequence: "OrderSequence";
    readonly ClaimSequence: "ClaimSequence";
    readonly Department: "Department";
    readonly Province: "Province";
    readonly District: "District";
    readonly ShippingZone: "ShippingZone";
    readonly ShippingZoneArea: "ShippingZoneArea";
    readonly ShippingRate: "ShippingRate";
    readonly AdminRole: "AdminRole";
    readonly AdminPermission: "AdminPermission";
    readonly AdminRolePermission: "AdminRolePermission";
    readonly AdminUser: "AdminUser";
    readonly AdminRefreshToken: "AdminRefreshToken";
    readonly CustomerRefreshToken: "CustomerRefreshToken";
    readonly ProductReview: "ProductReview";
    readonly Page: "Page";
    readonly Complaint: "Complaint";
    readonly HeroSlide: "HeroSlide";
    readonly Faq: "Faq";
    readonly OrderStatusHistory: "OrderStatusHistory";
    readonly SiteConfig: "SiteConfig";
    readonly SocialLink: "SocialLink";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "image" | "category" | "brand" | "product" | "productPrice" | "productPriceHistory" | "productSpec" | "productFeature" | "promotion" | "coupon" | "couponUsage" | "customer" | "customerVerificationCode" | "customerAddress" | "cart" | "cartItem" | "order" | "orderItem" | "orderAddress" | "paymentMethod" | "orderPaymentTransaction" | "orderLogistics" | "orderPaymentReminder" | "orderClaim" | "orderClaimItem" | "refund" | "refundItem" | "orderSequence" | "claimSequence" | "department" | "province" | "district" | "shippingZone" | "shippingZoneArea" | "shippingRate" | "adminRole" | "adminPermission" | "adminRolePermission" | "adminUser" | "adminRefreshToken" | "customerRefreshToken" | "productReview" | "page" | "complaint" | "heroSlide" | "faq" | "orderStatusHistory" | "siteConfig" | "socialLink";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Image: {
            payload: Prisma.$ImagePayload<ExtArgs>;
            fields: Prisma.ImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                findFirst: {
                    args: Prisma.ImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                findMany: {
                    args: Prisma.ImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>[];
                };
                create: {
                    args: Prisma.ImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                createMany: {
                    args: Prisma.ImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>[];
                };
                delete: {
                    args: Prisma.ImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                update: {
                    args: Prisma.ImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>[];
                };
                upsert: {
                    args: Prisma.ImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                aggregate: {
                    args: Prisma.ImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImage>;
                };
                groupBy: {
                    args: Prisma.ImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImageCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        Brand: {
            payload: Prisma.$BrandPayload<ExtArgs>;
            fields: Prisma.BrandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findFirst: {
                    args: Prisma.BrandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findMany: {
                    args: Prisma.BrandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                create: {
                    args: Prisma.BrandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                createMany: {
                    args: Prisma.BrandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                delete: {
                    args: Prisma.BrandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                update: {
                    args: Prisma.BrandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                upsert: {
                    args: Prisma.BrandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                aggregate: {
                    args: Prisma.BrandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrand>;
                };
                groupBy: {
                    args: Prisma.BrandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductPrice: {
            payload: Prisma.$ProductPricePayload<ExtArgs>;
            fields: Prisma.ProductPriceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductPriceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductPriceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                findFirst: {
                    args: Prisma.ProductPriceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductPriceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                findMany: {
                    args: Prisma.ProductPriceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>[];
                };
                create: {
                    args: Prisma.ProductPriceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                createMany: {
                    args: Prisma.ProductPriceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductPriceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>[];
                };
                delete: {
                    args: Prisma.ProductPriceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                update: {
                    args: Prisma.ProductPriceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductPriceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductPriceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductPriceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>[];
                };
                upsert: {
                    args: Prisma.ProductPriceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPricePayload>;
                };
                aggregate: {
                    args: Prisma.ProductPriceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductPrice>;
                };
                groupBy: {
                    args: Prisma.ProductPriceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductPriceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductPriceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductPriceCountAggregateOutputType> | number;
                };
            };
        };
        ProductPriceHistory: {
            payload: Prisma.$ProductPriceHistoryPayload<ExtArgs>;
            fields: Prisma.ProductPriceHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductPriceHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductPriceHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.ProductPriceHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductPriceHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                findMany: {
                    args: Prisma.ProductPriceHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>[];
                };
                create: {
                    args: Prisma.ProductPriceHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                createMany: {
                    args: Prisma.ProductPriceHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductPriceHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>[];
                };
                delete: {
                    args: Prisma.ProductPriceHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                update: {
                    args: Prisma.ProductPriceHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductPriceHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductPriceHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductPriceHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.ProductPriceHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPriceHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.ProductPriceHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductPriceHistory>;
                };
                groupBy: {
                    args: Prisma.ProductPriceHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductPriceHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductPriceHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductPriceHistoryCountAggregateOutputType> | number;
                };
            };
        };
        ProductSpec: {
            payload: Prisma.$ProductSpecPayload<ExtArgs>;
            fields: Prisma.ProductSpecFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductSpecFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductSpecFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                findFirst: {
                    args: Prisma.ProductSpecFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductSpecFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                findMany: {
                    args: Prisma.ProductSpecFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>[];
                };
                create: {
                    args: Prisma.ProductSpecCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                createMany: {
                    args: Prisma.ProductSpecCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductSpecCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>[];
                };
                delete: {
                    args: Prisma.ProductSpecDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                update: {
                    args: Prisma.ProductSpecUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductSpecDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductSpecUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductSpecUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>[];
                };
                upsert: {
                    args: Prisma.ProductSpecUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductSpecPayload>;
                };
                aggregate: {
                    args: Prisma.ProductSpecAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductSpec>;
                };
                groupBy: {
                    args: Prisma.ProductSpecGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductSpecGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductSpecCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductSpecCountAggregateOutputType> | number;
                };
            };
        };
        ProductFeature: {
            payload: Prisma.$ProductFeaturePayload<ExtArgs>;
            fields: Prisma.ProductFeatureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFeatureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFeatureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                findFirst: {
                    args: Prisma.ProductFeatureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFeatureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                findMany: {
                    args: Prisma.ProductFeatureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>[];
                };
                create: {
                    args: Prisma.ProductFeatureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                createMany: {
                    args: Prisma.ProductFeatureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductFeatureCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>[];
                };
                delete: {
                    args: Prisma.ProductFeatureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                update: {
                    args: Prisma.ProductFeatureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductFeatureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductFeatureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductFeatureUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>[];
                };
                upsert: {
                    args: Prisma.ProductFeatureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductFeaturePayload>;
                };
                aggregate: {
                    args: Prisma.ProductFeatureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductFeature>;
                };
                groupBy: {
                    args: Prisma.ProductFeatureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductFeatureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductFeatureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductFeatureCountAggregateOutputType> | number;
                };
            };
        };
        Promotion: {
            payload: Prisma.$PromotionPayload<ExtArgs>;
            fields: Prisma.PromotionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PromotionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                findFirst: {
                    args: Prisma.PromotionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                findMany: {
                    args: Prisma.PromotionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>[];
                };
                create: {
                    args: Prisma.PromotionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                createMany: {
                    args: Prisma.PromotionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>[];
                };
                delete: {
                    args: Prisma.PromotionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                update: {
                    args: Prisma.PromotionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                deleteMany: {
                    args: Prisma.PromotionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PromotionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>[];
                };
                upsert: {
                    args: Prisma.PromotionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromotionPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotion>;
                };
                groupBy: {
                    args: Prisma.PromotionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PromotionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionCountAggregateOutputType> | number;
                };
            };
        };
        Coupon: {
            payload: Prisma.$CouponPayload<ExtArgs>;
            fields: Prisma.CouponFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findFirst: {
                    args: Prisma.CouponFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findMany: {
                    args: Prisma.CouponFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                create: {
                    args: Prisma.CouponCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                createMany: {
                    args: Prisma.CouponCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                delete: {
                    args: Prisma.CouponDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                update: {
                    args: Prisma.CouponUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                deleteMany: {
                    args: Prisma.CouponDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                upsert: {
                    args: Prisma.CouponUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                aggregate: {
                    args: Prisma.CouponAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupon>;
                };
                groupBy: {
                    args: Prisma.CouponGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponCountAggregateOutputType> | number;
                };
            };
        };
        CouponUsage: {
            payload: Prisma.$CouponUsagePayload<ExtArgs>;
            fields: Prisma.CouponUsageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponUsageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponUsageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findFirst: {
                    args: Prisma.CouponUsageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponUsageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findMany: {
                    args: Prisma.CouponUsageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                create: {
                    args: Prisma.CouponUsageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                createMany: {
                    args: Prisma.CouponUsageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CouponUsageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                delete: {
                    args: Prisma.CouponUsageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                update: {
                    args: Prisma.CouponUsageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                deleteMany: {
                    args: Prisma.CouponUsageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUsageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CouponUsageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                upsert: {
                    args: Prisma.CouponUsageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                aggregate: {
                    args: Prisma.CouponUsageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCouponUsage>;
                };
                groupBy: {
                    args: Prisma.CouponUsageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponUsageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        CustomerVerificationCode: {
            payload: Prisma.$CustomerVerificationCodePayload<ExtArgs>;
            fields: Prisma.CustomerVerificationCodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerVerificationCodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerVerificationCodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                findFirst: {
                    args: Prisma.CustomerVerificationCodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerVerificationCodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                findMany: {
                    args: Prisma.CustomerVerificationCodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>[];
                };
                create: {
                    args: Prisma.CustomerVerificationCodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                createMany: {
                    args: Prisma.CustomerVerificationCodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerVerificationCodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>[];
                };
                delete: {
                    args: Prisma.CustomerVerificationCodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                update: {
                    args: Prisma.CustomerVerificationCodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerVerificationCodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerVerificationCodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerVerificationCodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>[];
                };
                upsert: {
                    args: Prisma.CustomerVerificationCodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerVerificationCodePayload>;
                };
                aggregate: {
                    args: Prisma.CustomerVerificationCodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerVerificationCode>;
                };
                groupBy: {
                    args: Prisma.CustomerVerificationCodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerVerificationCodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerVerificationCodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerVerificationCodeCountAggregateOutputType> | number;
                };
            };
        };
        CustomerAddress: {
            payload: Prisma.$CustomerAddressPayload<ExtArgs>;
            fields: Prisma.CustomerAddressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerAddressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerAddressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerAddressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerAddressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                findMany: {
                    args: Prisma.CustomerAddressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                create: {
                    args: Prisma.CustomerAddressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                createMany: {
                    args: Prisma.CustomerAddressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerAddressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                delete: {
                    args: Prisma.CustomerAddressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                update: {
                    args: Prisma.CustomerAddressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerAddressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerAddressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerAddressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerAddressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerAddressPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerAddress>;
                };
                groupBy: {
                    args: Prisma.CustomerAddressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerAddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerAddressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerAddressCountAggregateOutputType> | number;
                };
            };
        };
        Cart: {
            payload: Prisma.$CartPayload<ExtArgs>;
            fields: Prisma.CartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findFirst: {
                    args: Prisma.CartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findMany: {
                    args: Prisma.CartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                create: {
                    args: Prisma.CartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                createMany: {
                    args: Prisma.CartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                delete: {
                    args: Prisma.CartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                update: {
                    args: Prisma.CartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                deleteMany: {
                    args: Prisma.CartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                upsert: {
                    args: Prisma.CartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                aggregate: {
                    args: Prisma.CartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart>;
                };
                groupBy: {
                    args: Prisma.CartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartCountAggregateOutputType> | number;
                };
            };
        };
        CartItem: {
            payload: Prisma.$CartItemPayload<ExtArgs>;
            fields: Prisma.CartItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findFirst: {
                    args: Prisma.CartItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                findMany: {
                    args: Prisma.CartItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                create: {
                    args: Prisma.CartItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                createMany: {
                    args: Prisma.CartItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                delete: {
                    args: Prisma.CartItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                update: {
                    args: Prisma.CartItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                deleteMany: {
                    args: Prisma.CartItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>[];
                };
                upsert: {
                    args: Prisma.CartItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartItemPayload>;
                };
                aggregate: {
                    args: Prisma.CartItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCartItem>;
                };
                groupBy: {
                    args: Prisma.CartItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartItemCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        OrderAddress: {
            payload: Prisma.$OrderAddressPayload<ExtArgs>;
            fields: Prisma.OrderAddressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderAddressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderAddressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                findFirst: {
                    args: Prisma.OrderAddressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderAddressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                findMany: {
                    args: Prisma.OrderAddressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>[];
                };
                create: {
                    args: Prisma.OrderAddressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                createMany: {
                    args: Prisma.OrderAddressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderAddressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>[];
                };
                delete: {
                    args: Prisma.OrderAddressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                update: {
                    args: Prisma.OrderAddressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderAddressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderAddressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderAddressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>[];
                };
                upsert: {
                    args: Prisma.OrderAddressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderAddressPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderAddress>;
                };
                groupBy: {
                    args: Prisma.OrderAddressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderAddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderAddressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderAddressCountAggregateOutputType> | number;
                };
            };
        };
        PaymentMethod: {
            payload: Prisma.$PaymentMethodPayload<ExtArgs>;
            fields: Prisma.PaymentMethodFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                findFirst: {
                    args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                findMany: {
                    args: Prisma.PaymentMethodFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[];
                };
                create: {
                    args: Prisma.PaymentMethodCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                createMany: {
                    args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[];
                };
                delete: {
                    args: Prisma.PaymentMethodDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                update: {
                    args: Prisma.PaymentMethodUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                deleteMany: {
                    args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[];
                };
                upsert: {
                    args: Prisma.PaymentMethodUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PaymentMethodPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentMethodAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePaymentMethod>;
                };
                groupBy: {
                    args: Prisma.PaymentMethodGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentMethodGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PaymentMethodCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentMethodCountAggregateOutputType> | number;
                };
            };
        };
        OrderPaymentTransaction: {
            payload: Prisma.$OrderPaymentTransactionPayload<ExtArgs>;
            fields: Prisma.OrderPaymentTransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderPaymentTransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderPaymentTransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                findFirst: {
                    args: Prisma.OrderPaymentTransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderPaymentTransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                findMany: {
                    args: Prisma.OrderPaymentTransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>[];
                };
                create: {
                    args: Prisma.OrderPaymentTransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                createMany: {
                    args: Prisma.OrderPaymentTransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderPaymentTransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>[];
                };
                delete: {
                    args: Prisma.OrderPaymentTransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                update: {
                    args: Prisma.OrderPaymentTransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderPaymentTransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderPaymentTransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderPaymentTransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>[];
                };
                upsert: {
                    args: Prisma.OrderPaymentTransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentTransactionPayload>;
                };
                aggregate: {
                    args: Prisma.OrderPaymentTransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderPaymentTransaction>;
                };
                groupBy: {
                    args: Prisma.OrderPaymentTransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderPaymentTransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderPaymentTransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderPaymentTransactionCountAggregateOutputType> | number;
                };
            };
        };
        OrderLogistics: {
            payload: Prisma.$OrderLogisticsPayload<ExtArgs>;
            fields: Prisma.OrderLogisticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderLogisticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderLogisticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                findFirst: {
                    args: Prisma.OrderLogisticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderLogisticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                findMany: {
                    args: Prisma.OrderLogisticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>[];
                };
                create: {
                    args: Prisma.OrderLogisticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                createMany: {
                    args: Prisma.OrderLogisticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderLogisticsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>[];
                };
                delete: {
                    args: Prisma.OrderLogisticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                update: {
                    args: Prisma.OrderLogisticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderLogisticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderLogisticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderLogisticsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>[];
                };
                upsert: {
                    args: Prisma.OrderLogisticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderLogisticsPayload>;
                };
                aggregate: {
                    args: Prisma.OrderLogisticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderLogistics>;
                };
                groupBy: {
                    args: Prisma.OrderLogisticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderLogisticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderLogisticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderLogisticsCountAggregateOutputType> | number;
                };
            };
        };
        OrderPaymentReminder: {
            payload: Prisma.$OrderPaymentReminderPayload<ExtArgs>;
            fields: Prisma.OrderPaymentReminderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderPaymentReminderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderPaymentReminderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderPaymentReminderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderPaymentReminderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                findMany: {
                    args: Prisma.OrderPaymentReminderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>[];
                };
                create: {
                    args: Prisma.OrderPaymentReminderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                createMany: {
                    args: Prisma.OrderPaymentReminderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderPaymentReminderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>[];
                };
                delete: {
                    args: Prisma.OrderPaymentReminderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                update: {
                    args: Prisma.OrderPaymentReminderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderPaymentReminderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderPaymentReminderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderPaymentReminderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderPaymentReminderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPaymentReminderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderPaymentReminderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderPaymentReminder>;
                };
                groupBy: {
                    args: Prisma.OrderPaymentReminderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderPaymentReminderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderPaymentReminderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderPaymentReminderCountAggregateOutputType> | number;
                };
            };
        };
        OrderClaim: {
            payload: Prisma.$OrderClaimPayload<ExtArgs>;
            fields: Prisma.OrderClaimFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderClaimFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderClaimFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                findFirst: {
                    args: Prisma.OrderClaimFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderClaimFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                findMany: {
                    args: Prisma.OrderClaimFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>[];
                };
                create: {
                    args: Prisma.OrderClaimCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                createMany: {
                    args: Prisma.OrderClaimCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderClaimCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>[];
                };
                delete: {
                    args: Prisma.OrderClaimDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                update: {
                    args: Prisma.OrderClaimUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderClaimDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderClaimUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderClaimUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>[];
                };
                upsert: {
                    args: Prisma.OrderClaimUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimPayload>;
                };
                aggregate: {
                    args: Prisma.OrderClaimAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderClaim>;
                };
                groupBy: {
                    args: Prisma.OrderClaimGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderClaimGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderClaimCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderClaimCountAggregateOutputType> | number;
                };
            };
        };
        OrderClaimItem: {
            payload: Prisma.$OrderClaimItemPayload<ExtArgs>;
            fields: Prisma.OrderClaimItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderClaimItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderClaimItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderClaimItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderClaimItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderClaimItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>[];
                };
                create: {
                    args: Prisma.OrderClaimItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderClaimItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderClaimItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderClaimItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                update: {
                    args: Prisma.OrderClaimItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderClaimItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderClaimItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderClaimItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderClaimItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderClaimItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderClaimItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderClaimItem>;
                };
                groupBy: {
                    args: Prisma.OrderClaimItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderClaimItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderClaimItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderClaimItemCountAggregateOutputType> | number;
                };
            };
        };
        Refund: {
            payload: Prisma.$RefundPayload<ExtArgs>;
            fields: Prisma.RefundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                findFirst: {
                    args: Prisma.RefundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                findMany: {
                    args: Prisma.RefundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                create: {
                    args: Prisma.RefundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                createMany: {
                    args: Prisma.RefundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                delete: {
                    args: Prisma.RefundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                update: {
                    args: Prisma.RefundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                deleteMany: {
                    args: Prisma.RefundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>[];
                };
                upsert: {
                    args: Prisma.RefundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundPayload>;
                };
                aggregate: {
                    args: Prisma.RefundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefund>;
                };
                groupBy: {
                    args: Prisma.RefundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundCountAggregateOutputType> | number;
                };
            };
        };
        RefundItem: {
            payload: Prisma.$RefundItemPayload<ExtArgs>;
            fields: Prisma.RefundItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefundItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefundItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                findFirst: {
                    args: Prisma.RefundItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefundItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                findMany: {
                    args: Prisma.RefundItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>[];
                };
                create: {
                    args: Prisma.RefundItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                createMany: {
                    args: Prisma.RefundItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefundItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>[];
                };
                delete: {
                    args: Prisma.RefundItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                update: {
                    args: Prisma.RefundItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                deleteMany: {
                    args: Prisma.RefundItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefundItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefundItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>[];
                };
                upsert: {
                    args: Prisma.RefundItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefundItemPayload>;
                };
                aggregate: {
                    args: Prisma.RefundItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefundItem>;
                };
                groupBy: {
                    args: Prisma.RefundItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefundItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefundItemCountAggregateOutputType> | number;
                };
            };
        };
        OrderSequence: {
            payload: Prisma.$OrderSequencePayload<ExtArgs>;
            fields: Prisma.OrderSequenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderSequenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderSequenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                findFirst: {
                    args: Prisma.OrderSequenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderSequenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                findMany: {
                    args: Prisma.OrderSequenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>[];
                };
                create: {
                    args: Prisma.OrderSequenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                createMany: {
                    args: Prisma.OrderSequenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderSequenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>[];
                };
                delete: {
                    args: Prisma.OrderSequenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                update: {
                    args: Prisma.OrderSequenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                deleteMany: {
                    args: Prisma.OrderSequenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderSequenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderSequenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>[];
                };
                upsert: {
                    args: Prisma.OrderSequenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderSequencePayload>;
                };
                aggregate: {
                    args: Prisma.OrderSequenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderSequence>;
                };
                groupBy: {
                    args: Prisma.OrderSequenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderSequenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderSequenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderSequenceCountAggregateOutputType> | number;
                };
            };
        };
        ClaimSequence: {
            payload: Prisma.$ClaimSequencePayload<ExtArgs>;
            fields: Prisma.ClaimSequenceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClaimSequenceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClaimSequenceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                findFirst: {
                    args: Prisma.ClaimSequenceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClaimSequenceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                findMany: {
                    args: Prisma.ClaimSequenceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>[];
                };
                create: {
                    args: Prisma.ClaimSequenceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                createMany: {
                    args: Prisma.ClaimSequenceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClaimSequenceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>[];
                };
                delete: {
                    args: Prisma.ClaimSequenceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                update: {
                    args: Prisma.ClaimSequenceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                deleteMany: {
                    args: Prisma.ClaimSequenceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClaimSequenceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClaimSequenceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>[];
                };
                upsert: {
                    args: Prisma.ClaimSequenceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClaimSequencePayload>;
                };
                aggregate: {
                    args: Prisma.ClaimSequenceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClaimSequence>;
                };
                groupBy: {
                    args: Prisma.ClaimSequenceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClaimSequenceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClaimSequenceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClaimSequenceCountAggregateOutputType> | number;
                };
            };
        };
        Department: {
            payload: Prisma.$DepartmentPayload<ExtArgs>;
            fields: Prisma.DepartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DepartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findFirst: {
                    args: Prisma.DepartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findMany: {
                    args: Prisma.DepartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                create: {
                    args: Prisma.DepartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                createMany: {
                    args: Prisma.DepartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                delete: {
                    args: Prisma.DepartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                update: {
                    args: Prisma.DepartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.DepartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DepartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                upsert: {
                    args: Prisma.DepartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                aggregate: {
                    args: Prisma.DepartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDepartment>;
                };
                groupBy: {
                    args: Prisma.DepartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DepartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentCountAggregateOutputType> | number;
                };
            };
        };
        Province: {
            payload: Prisma.$ProvincePayload<ExtArgs>;
            fields: Prisma.ProvinceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProvinceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                findFirst: {
                    args: Prisma.ProvinceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                findMany: {
                    args: Prisma.ProvinceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>[];
                };
                create: {
                    args: Prisma.ProvinceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                createMany: {
                    args: Prisma.ProvinceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>[];
                };
                delete: {
                    args: Prisma.ProvinceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                update: {
                    args: Prisma.ProvinceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                deleteMany: {
                    args: Prisma.ProvinceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProvinceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProvinceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>[];
                };
                upsert: {
                    args: Prisma.ProvinceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProvincePayload>;
                };
                aggregate: {
                    args: Prisma.ProvinceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProvince>;
                };
                groupBy: {
                    args: Prisma.ProvinceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvinceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProvinceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProvinceCountAggregateOutputType> | number;
                };
            };
        };
        District: {
            payload: Prisma.$DistrictPayload<ExtArgs>;
            fields: Prisma.DistrictFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DistrictFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                findFirst: {
                    args: Prisma.DistrictFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                findMany: {
                    args: Prisma.DistrictFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>[];
                };
                create: {
                    args: Prisma.DistrictCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                createMany: {
                    args: Prisma.DistrictCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>[];
                };
                delete: {
                    args: Prisma.DistrictDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                update: {
                    args: Prisma.DistrictUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                deleteMany: {
                    args: Prisma.DistrictDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DistrictUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DistrictUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>[];
                };
                upsert: {
                    args: Prisma.DistrictUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DistrictPayload>;
                };
                aggregate: {
                    args: Prisma.DistrictAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDistrict>;
                };
                groupBy: {
                    args: Prisma.DistrictGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DistrictGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DistrictCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DistrictCountAggregateOutputType> | number;
                };
            };
        };
        ShippingZone: {
            payload: Prisma.$ShippingZonePayload<ExtArgs>;
            fields: Prisma.ShippingZoneFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShippingZoneFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShippingZoneFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                findFirst: {
                    args: Prisma.ShippingZoneFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShippingZoneFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                findMany: {
                    args: Prisma.ShippingZoneFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>[];
                };
                create: {
                    args: Prisma.ShippingZoneCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                createMany: {
                    args: Prisma.ShippingZoneCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShippingZoneCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>[];
                };
                delete: {
                    args: Prisma.ShippingZoneDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                update: {
                    args: Prisma.ShippingZoneUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                deleteMany: {
                    args: Prisma.ShippingZoneDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShippingZoneUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShippingZoneUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>[];
                };
                upsert: {
                    args: Prisma.ShippingZoneUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZonePayload>;
                };
                aggregate: {
                    args: Prisma.ShippingZoneAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShippingZone>;
                };
                groupBy: {
                    args: Prisma.ShippingZoneGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingZoneGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShippingZoneCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingZoneCountAggregateOutputType> | number;
                };
            };
        };
        ShippingZoneArea: {
            payload: Prisma.$ShippingZoneAreaPayload<ExtArgs>;
            fields: Prisma.ShippingZoneAreaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShippingZoneAreaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShippingZoneAreaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                findFirst: {
                    args: Prisma.ShippingZoneAreaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShippingZoneAreaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                findMany: {
                    args: Prisma.ShippingZoneAreaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>[];
                };
                create: {
                    args: Prisma.ShippingZoneAreaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                createMany: {
                    args: Prisma.ShippingZoneAreaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShippingZoneAreaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>[];
                };
                delete: {
                    args: Prisma.ShippingZoneAreaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                update: {
                    args: Prisma.ShippingZoneAreaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                deleteMany: {
                    args: Prisma.ShippingZoneAreaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShippingZoneAreaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShippingZoneAreaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>[];
                };
                upsert: {
                    args: Prisma.ShippingZoneAreaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingZoneAreaPayload>;
                };
                aggregate: {
                    args: Prisma.ShippingZoneAreaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShippingZoneArea>;
                };
                groupBy: {
                    args: Prisma.ShippingZoneAreaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingZoneAreaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShippingZoneAreaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingZoneAreaCountAggregateOutputType> | number;
                };
            };
        };
        ShippingRate: {
            payload: Prisma.$ShippingRatePayload<ExtArgs>;
            fields: Prisma.ShippingRateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShippingRateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShippingRateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                findFirst: {
                    args: Prisma.ShippingRateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShippingRateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                findMany: {
                    args: Prisma.ShippingRateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>[];
                };
                create: {
                    args: Prisma.ShippingRateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                createMany: {
                    args: Prisma.ShippingRateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShippingRateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>[];
                };
                delete: {
                    args: Prisma.ShippingRateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                update: {
                    args: Prisma.ShippingRateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                deleteMany: {
                    args: Prisma.ShippingRateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShippingRateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShippingRateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>[];
                };
                upsert: {
                    args: Prisma.ShippingRateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShippingRatePayload>;
                };
                aggregate: {
                    args: Prisma.ShippingRateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShippingRate>;
                };
                groupBy: {
                    args: Prisma.ShippingRateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingRateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShippingRateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShippingRateCountAggregateOutputType> | number;
                };
            };
        };
        AdminRole: {
            payload: Prisma.$AdminRolePayload<ExtArgs>;
            fields: Prisma.AdminRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                findFirst: {
                    args: Prisma.AdminRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                findMany: {
                    args: Prisma.AdminRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>[];
                };
                create: {
                    args: Prisma.AdminRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                createMany: {
                    args: Prisma.AdminRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminRoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>[];
                };
                delete: {
                    args: Prisma.AdminRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                update: {
                    args: Prisma.AdminRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                deleteMany: {
                    args: Prisma.AdminRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminRoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>[];
                };
                upsert: {
                    args: Prisma.AdminRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePayload>;
                };
                aggregate: {
                    args: Prisma.AdminRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminRole>;
                };
                groupBy: {
                    args: Prisma.AdminRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRoleCountAggregateOutputType> | number;
                };
            };
        };
        AdminPermission: {
            payload: Prisma.$AdminPermissionPayload<ExtArgs>;
            fields: Prisma.AdminPermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminPermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminPermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                findFirst: {
                    args: Prisma.AdminPermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminPermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                findMany: {
                    args: Prisma.AdminPermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>[];
                };
                create: {
                    args: Prisma.AdminPermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                createMany: {
                    args: Prisma.AdminPermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminPermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>[];
                };
                delete: {
                    args: Prisma.AdminPermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                update: {
                    args: Prisma.AdminPermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminPermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminPermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminPermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>[];
                };
                upsert: {
                    args: Prisma.AdminPermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminPermissionPayload>;
                };
                aggregate: {
                    args: Prisma.AdminPermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminPermission>;
                };
                groupBy: {
                    args: Prisma.AdminPermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminPermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminPermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminPermissionCountAggregateOutputType> | number;
                };
            };
        };
        AdminRolePermission: {
            payload: Prisma.$AdminRolePermissionPayload<ExtArgs>;
            fields: Prisma.AdminRolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminRolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminRolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.AdminRolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminRolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.AdminRolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>[];
                };
                create: {
                    args: Prisma.AdminRolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.AdminRolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminRolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.AdminRolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                update: {
                    args: Prisma.AdminRolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminRolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminRolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminRolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.AdminRolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.AdminRolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminRolePermission>;
                };
                groupBy: {
                    args: Prisma.AdminRolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminRolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        AdminUser: {
            payload: Prisma.$AdminUserPayload<ExtArgs>;
            fields: Prisma.AdminUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findFirst: {
                    args: Prisma.AdminUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                findMany: {
                    args: Prisma.AdminUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                create: {
                    args: Prisma.AdminUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                createMany: {
                    args: Prisma.AdminUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                delete: {
                    args: Prisma.AdminUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                update: {
                    args: Prisma.AdminUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>[];
                };
                upsert: {
                    args: Prisma.AdminUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminUserPayload>;
                };
                aggregate: {
                    args: Prisma.AdminUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminUser>;
                };
                groupBy: {
                    args: Prisma.AdminUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminUserCountAggregateOutputType> | number;
                };
            };
        };
        AdminRefreshToken: {
            payload: Prisma.$AdminRefreshTokenPayload<ExtArgs>;
            fields: Prisma.AdminRefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminRefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminRefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.AdminRefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminRefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.AdminRefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.AdminRefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.AdminRefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminRefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.AdminRefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                update: {
                    args: Prisma.AdminRefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminRefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminRefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminRefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.AdminRefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminRefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.AdminRefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminRefreshToken>;
                };
                groupBy: {
                    args: Prisma.AdminRefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminRefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminRefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        CustomerRefreshToken: {
            payload: Prisma.$CustomerRefreshTokenPayload<ExtArgs>;
            fields: Prisma.CustomerRefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerRefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerRefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerRefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerRefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.CustomerRefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.CustomerRefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.CustomerRefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerRefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.CustomerRefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                update: {
                    args: Prisma.CustomerRefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerRefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerRefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerRefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerRefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerRefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerRefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomerRefreshToken>;
                };
                groupBy: {
                    args: Prisma.CustomerRefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerRefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerRefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerRefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        ProductReview: {
            payload: Prisma.$ProductReviewPayload<ExtArgs>;
            fields: Prisma.ProductReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ProductReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                findMany: {
                    args: Prisma.ProductReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                create: {
                    args: Prisma.ProductReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                createMany: {
                    args: Prisma.ProductReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                delete: {
                    args: Prisma.ProductReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                update: {
                    args: Prisma.ProductReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ProductReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ProductReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductReview>;
                };
                groupBy: {
                    args: Prisma.ProductReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductReviewCountAggregateOutputType> | number;
                };
            };
        };
        Page: {
            payload: Prisma.$PagePayload<ExtArgs>;
            fields: Prisma.PageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                findFirst: {
                    args: Prisma.PageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                findMany: {
                    args: Prisma.PageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>[];
                };
                create: {
                    args: Prisma.PageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                createMany: {
                    args: Prisma.PageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>[];
                };
                delete: {
                    args: Prisma.PageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                update: {
                    args: Prisma.PageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                deleteMany: {
                    args: Prisma.PageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>[];
                };
                upsert: {
                    args: Prisma.PageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagePayload>;
                };
                aggregate: {
                    args: Prisma.PageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePage>;
                };
                groupBy: {
                    args: Prisma.PageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PageCountAggregateOutputType> | number;
                };
            };
        };
        Complaint: {
            payload: Prisma.$ComplaintPayload<ExtArgs>;
            fields: Prisma.ComplaintFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComplaintFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComplaintFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                findFirst: {
                    args: Prisma.ComplaintFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComplaintFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                findMany: {
                    args: Prisma.ComplaintFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>[];
                };
                create: {
                    args: Prisma.ComplaintCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                createMany: {
                    args: Prisma.ComplaintCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComplaintCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>[];
                };
                delete: {
                    args: Prisma.ComplaintDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                update: {
                    args: Prisma.ComplaintUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                deleteMany: {
                    args: Prisma.ComplaintDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComplaintUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComplaintUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>[];
                };
                upsert: {
                    args: Prisma.ComplaintUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComplaintPayload>;
                };
                aggregate: {
                    args: Prisma.ComplaintAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComplaint>;
                };
                groupBy: {
                    args: Prisma.ComplaintGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplaintGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComplaintCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComplaintCountAggregateOutputType> | number;
                };
            };
        };
        HeroSlide: {
            payload: Prisma.$HeroSlidePayload<ExtArgs>;
            fields: Prisma.HeroSlideFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HeroSlideFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HeroSlideFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                findFirst: {
                    args: Prisma.HeroSlideFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HeroSlideFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                findMany: {
                    args: Prisma.HeroSlideFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>[];
                };
                create: {
                    args: Prisma.HeroSlideCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                createMany: {
                    args: Prisma.HeroSlideCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HeroSlideCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>[];
                };
                delete: {
                    args: Prisma.HeroSlideDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                update: {
                    args: Prisma.HeroSlideUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                deleteMany: {
                    args: Prisma.HeroSlideDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HeroSlideUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HeroSlideUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>[];
                };
                upsert: {
                    args: Prisma.HeroSlideUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HeroSlidePayload>;
                };
                aggregate: {
                    args: Prisma.HeroSlideAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHeroSlide>;
                };
                groupBy: {
                    args: Prisma.HeroSlideGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HeroSlideGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HeroSlideCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HeroSlideCountAggregateOutputType> | number;
                };
            };
        };
        Faq: {
            payload: Prisma.$FaqPayload<ExtArgs>;
            fields: Prisma.FaqFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FaqFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                findFirst: {
                    args: Prisma.FaqFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                findMany: {
                    args: Prisma.FaqFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>[];
                };
                create: {
                    args: Prisma.FaqCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                createMany: {
                    args: Prisma.FaqCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FaqCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>[];
                };
                delete: {
                    args: Prisma.FaqDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                update: {
                    args: Prisma.FaqUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                deleteMany: {
                    args: Prisma.FaqDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FaqUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FaqUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>[];
                };
                upsert: {
                    args: Prisma.FaqUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FaqPayload>;
                };
                aggregate: {
                    args: Prisma.FaqAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFaq>;
                };
                groupBy: {
                    args: Prisma.FaqGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FaqCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FaqCountAggregateOutputType> | number;
                };
            };
        };
        OrderStatusHistory: {
            payload: Prisma.$OrderStatusHistoryPayload<ExtArgs>;
            fields: Prisma.OrderStatusHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderStatusHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderStatusHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.OrderStatusHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderStatusHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                findMany: {
                    args: Prisma.OrderStatusHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[];
                };
                create: {
                    args: Prisma.OrderStatusHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                createMany: {
                    args: Prisma.OrderStatusHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderStatusHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[];
                };
                delete: {
                    args: Prisma.OrderStatusHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                update: {
                    args: Prisma.OrderStatusHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderStatusHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderStatusHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderStatusHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.OrderStatusHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderStatusHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.OrderStatusHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderStatusHistory>;
                };
                groupBy: {
                    args: Prisma.OrderStatusHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderStatusHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderStatusHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderStatusHistoryCountAggregateOutputType> | number;
                };
            };
        };
        SiteConfig: {
            payload: Prisma.$SiteConfigPayload<ExtArgs>;
            fields: Prisma.SiteConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SiteConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SiteConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                findFirst: {
                    args: Prisma.SiteConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SiteConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                findMany: {
                    args: Prisma.SiteConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>[];
                };
                create: {
                    args: Prisma.SiteConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                createMany: {
                    args: Prisma.SiteConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SiteConfigCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>[];
                };
                delete: {
                    args: Prisma.SiteConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                update: {
                    args: Prisma.SiteConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.SiteConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SiteConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SiteConfigUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>[];
                };
                upsert: {
                    args: Prisma.SiteConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SiteConfigPayload>;
                };
                aggregate: {
                    args: Prisma.SiteConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSiteConfig>;
                };
                groupBy: {
                    args: Prisma.SiteConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SiteConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SiteConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SiteConfigCountAggregateOutputType> | number;
                };
            };
        };
        SocialLink: {
            payload: Prisma.$SocialLinkPayload<ExtArgs>;
            fields: Prisma.SocialLinkFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                findFirst: {
                    args: Prisma.SocialLinkFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                findMany: {
                    args: Prisma.SocialLinkFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                create: {
                    args: Prisma.SocialLinkCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                createMany: {
                    args: Prisma.SocialLinkCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                delete: {
                    args: Prisma.SocialLinkDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                update: {
                    args: Prisma.SocialLinkUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                deleteMany: {
                    args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>[];
                };
                upsert: {
                    args: Prisma.SocialLinkUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SocialLinkPayload>;
                };
                aggregate: {
                    args: Prisma.SocialLinkAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSocialLink>;
                };
                groupBy: {
                    args: Prisma.SocialLinkGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialLinkGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SocialLinkCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SocialLinkCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ImageScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly imageRole: "imageRole";
    readonly tempPath: "tempPath";
    readonly finalPath: "finalPath";
    readonly url: "url";
    readonly order: "order";
    readonly altText: "altText";
    readonly metadata: "metadata";
    readonly isConfirmed: "isConfirmed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly parentId: "parentId";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const BrandScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly sku: "sku";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly categoryId: "categoryId";
    readonly brandId: "brandId";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly stock: "stock";
    readonly weight: "weight";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductPriceScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly price: "price";
    readonly compareAtPrice: "compareAtPrice";
    readonly cost: "cost";
    readonly currency: "currency";
    readonly updatedAt: "updatedAt";
};
export type ProductPriceScalarFieldEnum = (typeof ProductPriceScalarFieldEnum)[keyof typeof ProductPriceScalarFieldEnum];
export declare const ProductPriceHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly price: "price";
    readonly cost: "cost";
    readonly marginPct: "marginPct";
    readonly changedById: "changedById";
    readonly reason: "reason";
    readonly effectiveFrom: "effectiveFrom";
    readonly createdAt: "createdAt";
};
export type ProductPriceHistoryScalarFieldEnum = (typeof ProductPriceHistoryScalarFieldEnum)[keyof typeof ProductPriceHistoryScalarFieldEnum];
export declare const ProductSpecScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly specKey: "specKey";
    readonly specValue: "specValue";
    readonly sortOrder: "sortOrder";
};
export type ProductSpecScalarFieldEnum = (typeof ProductSpecScalarFieldEnum)[keyof typeof ProductSpecScalarFieldEnum];
export declare const ProductFeatureScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly feature: "feature";
    readonly sortOrder: "sortOrder";
};
export type ProductFeatureScalarFieldEnum = (typeof ProductFeatureScalarFieldEnum)[keyof typeof ProductFeatureScalarFieldEnum];
export declare const PromotionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly appliesTo: "appliesTo";
    readonly targetIds: "targetIds";
    readonly minOrderAmount: "minOrderAmount";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly minOrderAmount: "minOrderAmount";
    readonly maxDiscountAmount: "maxDiscountAmount";
    readonly usageLimit: "usageLimit";
    readonly usageLimitPerUser: "usageLimitPerUser";
    readonly timesUsed: "timesUsed";
    readonly appliesTo: "appliesTo";
    readonly targetIds: "targetIds";
    readonly startsAt: "startsAt";
    readonly expiresAt: "expiresAt";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const CouponUsageScalarFieldEnum: {
    readonly id: "id";
    readonly couponId: "couponId";
    readonly orderId: "orderId";
    readonly customerId: "customerId";
    readonly guestEmail: "guestEmail";
    readonly discountApplied: "discountApplied";
    readonly usedAt: "usedAt";
};
export type CouponUsageScalarFieldEnum = (typeof CouponUsageScalarFieldEnum)[keyof typeof CouponUsageScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly googleId: "googleId";
    readonly emailVerifiedAt: "emailVerifiedAt";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const CustomerVerificationCodeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly email: "email";
    readonly expiresAt: "expiresAt";
    readonly customerId: "customerId";
    readonly createdAt: "createdAt";
};
export type CustomerVerificationCodeScalarFieldEnum = (typeof CustomerVerificationCodeScalarFieldEnum)[keyof typeof CustomerVerificationCodeScalarFieldEnum];
export declare const CustomerAddressScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly alias: "alias";
    readonly recipientName: "recipientName";
    readonly phone: "phone";
    readonly departmentId: "departmentId";
    readonly provinceId: "provinceId";
    readonly districtId: "districtId";
    readonly addressLine: "addressLine";
    readonly reference: "reference";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isDefault: "isDefault";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CustomerAddressScalarFieldEnum = (typeof CustomerAddressScalarFieldEnum)[keyof typeof CustomerAddressScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly customerId: "customerId";
    readonly status: "status";
    readonly orderId: "orderId";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly priceUpdatedAt: "priceUpdatedAt";
    readonly addedAt: "addedAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly customerId: "customerId";
    readonly guestEmail: "guestEmail";
    readonly guestName: "guestName";
    readonly guestPhone: "guestPhone";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly discountAmount: "discountAmount";
    readonly shippingAmount: "shippingAmount";
    readonly taxAmount: "taxAmount";
    readonly total: "total";
    readonly couponId: "couponId";
    readonly couponDiscount: "couponDiscount";
    readonly paymentMethodId: "paymentMethodId";
    readonly shippingRateId: "shippingRateId";
    readonly claimAsReplacementId: "claimAsReplacementId";
    readonly notes: "notes";
    readonly adminNotes: "adminNotes";
    readonly ipAddress: "ipAddress";
    readonly placedAt: "placedAt";
    readonly paidAt: "paidAt";
    readonly shippedAt: "shippedAt";
    readonly deliveredAt: "deliveredAt";
    readonly cancelledAt: "cancelledAt";
    readonly refundedAt: "refundedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly paymentExpiresAt: "paymentExpiresAt";
    readonly paymentReminderSentAt: "paymentReminderSentAt";
    readonly paymentConfirmedById: "paymentConfirmedById";
    readonly paymentConfirmedAt: "paymentConfirmedAt";
    readonly parentOrderId: "parentOrderId";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly productSku: "productSku";
    readonly productImageUrl: "productImageUrl";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly unitCost: "unitCost";
    readonly discountAmount: "discountAmount";
    readonly lineTotal: "lineTotal";
    readonly promotionId: "promotionId";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const OrderAddressScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly recipientName: "recipientName";
    readonly phone: "phone";
    readonly departmentId: "departmentId";
    readonly provinceId: "provinceId";
    readonly districtId: "districtId";
    readonly alias: "alias";
    readonly addressLine: "addressLine";
    readonly reference: "reference";
    readonly sourceAddressId: "sourceAddressId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderAddressScalarFieldEnum = (typeof OrderAddressScalarFieldEnum)[keyof typeof OrderAddressScalarFieldEnum];
export declare const PaymentMethodScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly type: "type";
    readonly config: "config";
    readonly instructions: "instructions";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum];
export declare const OrderPaymentTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly paymentMethodId: "paymentMethodId";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly gatewayTransactionId: "gatewayTransactionId";
    readonly cipCode: "cipCode";
    readonly cipExpiresAt: "cipExpiresAt";
    readonly gatewayResponse: "gatewayResponse";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly operationNumber: "operationNumber";
    readonly confirmedById: "confirmedById";
    readonly paidAmount: "paidAmount";
};
export type OrderPaymentTransactionScalarFieldEnum = (typeof OrderPaymentTransactionScalarFieldEnum)[keyof typeof OrderPaymentTransactionScalarFieldEnum];
export declare const OrderLogisticsScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly deliveryType: "deliveryType";
    readonly estimatedShipping: "estimatedShipping";
    readonly actualShippingCost: "actualShippingCost";
    readonly internalTransportCost: "internalTransportCost";
    readonly trackingNumber: "trackingNumber";
    readonly courierName: "courierName";
    readonly dispatchedAt: "dispatchedAt";
    readonly deliveredAt: "deliveredAt";
    readonly dispatchedById: "dispatchedById";
    readonly deliveredById: "deliveredById";
    readonly deliveryEvidenceNote: "deliveryEvidenceNote";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderLogisticsScalarFieldEnum = (typeof OrderLogisticsScalarFieldEnum)[keyof typeof OrderLogisticsScalarFieldEnum];
export declare const OrderPaymentReminderScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly sentAt: "sentAt";
    readonly type: "type";
};
export type OrderPaymentReminderScalarFieldEnum = (typeof OrderPaymentReminderScalarFieldEnum)[keyof typeof OrderPaymentReminderScalarFieldEnum];
export declare const OrderClaimScalarFieldEnum: {
    readonly id: "id";
    readonly claimNumber: "claimNumber";
    readonly orderId: "orderId";
    readonly customerId: "customerId";
    readonly type: "type";
    readonly reasonCategory: "reasonCategory";
    readonly status: "status";
    readonly description: "description";
    readonly adminNotes: "adminNotes";
    readonly customerVoucherAmount: "customerVoucherAmount";
    readonly replacementOrderId: "replacementOrderId";
    readonly returnCourierName: "returnCourierName";
    readonly returnTrackingNumber: "returnTrackingNumber";
    readonly returnShipmentNotes: "returnShipmentNotes";
    readonly returnShipmentConfirmedAt: "returnShipmentConfirmedAt";
    readonly receivedProductCondition: "receivedProductCondition";
    readonly internalDamageNote: "internalDamageNote";
    readonly receivedAdminNote: "receivedAdminNote";
    readonly refundMethod: "refundMethod";
    readonly refundAccountDetails: "refundAccountDetails";
    readonly reviewedById: "reviewedById";
    readonly reviewNote: "reviewNote";
    readonly internalNote: "internalNote";
    readonly createdAt: "createdAt";
    readonly reviewedAt: "reviewedAt";
    readonly receivedAt: "receivedAt";
    readonly completedAt: "completedAt";
    readonly updatedAt: "updatedAt";
};
export type OrderClaimScalarFieldEnum = (typeof OrderClaimScalarFieldEnum)[keyof typeof OrderClaimScalarFieldEnum];
export declare const OrderClaimItemScalarFieldEnum: {
    readonly id: "id";
    readonly claimId: "claimId";
    readonly orderItemId: "orderItemId";
    readonly quantity: "quantity";
    readonly reason: "reason";
};
export type OrderClaimItemScalarFieldEnum = (typeof OrderClaimItemScalarFieldEnum)[keyof typeof OrderClaimItemScalarFieldEnum];
export declare const RefundScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly claimId: "claimId";
    readonly amount: "amount";
    readonly status: "status";
    readonly method: "method";
    readonly reason: "reason";
    readonly processedById: "processedById";
    readonly createdById: "createdById";
    readonly gatewayRefundId: "gatewayRefundId";
    readonly adminNotes: "adminNotes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum];
export declare const RefundItemScalarFieldEnum: {
    readonly id: "id";
    readonly refundId: "refundId";
    readonly orderItemId: "orderItemId";
    readonly quantity: "quantity";
    readonly amount: "amount";
    readonly restockQuantity: "restockQuantity";
};
export type RefundItemScalarFieldEnum = (typeof RefundItemScalarFieldEnum)[keyof typeof RefundItemScalarFieldEnum];
export declare const OrderSequenceScalarFieldEnum: {
    readonly id: "id";
    readonly lastSeq: "lastSeq";
};
export type OrderSequenceScalarFieldEnum = (typeof OrderSequenceScalarFieldEnum)[keyof typeof OrderSequenceScalarFieldEnum];
export declare const ClaimSequenceScalarFieldEnum: {
    readonly id: "id";
    readonly lastSeq: "lastSeq";
};
export type ClaimSequenceScalarFieldEnum = (typeof ClaimSequenceScalarFieldEnum)[keyof typeof ClaimSequenceScalarFieldEnum];
export declare const DepartmentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const ProvinceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly departmentId: "departmentId";
};
export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum];
export declare const DistrictScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly provinceId: "provinceId";
};
export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum];
export declare const ShippingZoneScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ShippingZoneScalarFieldEnum = (typeof ShippingZoneScalarFieldEnum)[keyof typeof ShippingZoneScalarFieldEnum];
export declare const ShippingZoneAreaScalarFieldEnum: {
    readonly id: "id";
    readonly zoneId: "zoneId";
    readonly departmentId: "departmentId";
    readonly provinceId: "provinceId";
    readonly districtId: "districtId";
    readonly deliveryType: "deliveryType";
};
export type ShippingZoneAreaScalarFieldEnum = (typeof ShippingZoneAreaScalarFieldEnum)[keyof typeof ShippingZoneAreaScalarFieldEnum];
export declare const ShippingRateScalarFieldEnum: {
    readonly id: "id";
    readonly zoneId: "zoneId";
    readonly name: "name";
    readonly price: "price";
    readonly minOrderAmount: "minOrderAmount";
    readonly freeShippingThreshold: "freeShippingThreshold";
    readonly estimatedMin: "estimatedMin";
    readonly estimatedMax: "estimatedMax";
    readonly estimatedUnit: "estimatedUnit";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShippingRateScalarFieldEnum = (typeof ShippingRateScalarFieldEnum)[keyof typeof ShippingRateScalarFieldEnum];
export declare const AdminRoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type AdminRoleScalarFieldEnum = (typeof AdminRoleScalarFieldEnum)[keyof typeof AdminRoleScalarFieldEnum];
export declare const AdminPermissionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly module: "module";
};
export type AdminPermissionScalarFieldEnum = (typeof AdminPermissionScalarFieldEnum)[keyof typeof AdminPermissionScalarFieldEnum];
export declare const AdminRolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type AdminRolePermissionScalarFieldEnum = (typeof AdminRolePermissionScalarFieldEnum)[keyof typeof AdminRolePermissionScalarFieldEnum];
export declare const AdminUserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly roleId: "roleId";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum];
export declare const AdminRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly adminUserId: "adminUserId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type AdminRefreshTokenScalarFieldEnum = (typeof AdminRefreshTokenScalarFieldEnum)[keyof typeof AdminRefreshTokenScalarFieldEnum];
export declare const CustomerRefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type CustomerRefreshTokenScalarFieldEnum = (typeof CustomerRefreshTokenScalarFieldEnum)[keyof typeof CustomerRefreshTokenScalarFieldEnum];
export declare const ProductReviewScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly customerId: "customerId";
    readonly orderId: "orderId";
    readonly rating: "rating";
    readonly title: "title";
    readonly comment: "comment";
    readonly isApproved: "isApproved";
    readonly reviewedById: "reviewedById";
    readonly reviewedAt: "reviewedAt";
    readonly createdAt: "createdAt";
};
export type ProductReviewScalarFieldEnum = (typeof ProductReviewScalarFieldEnum)[keyof typeof ProductReviewScalarFieldEnum];
export declare const PageScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly content: "content";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly status: "status";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum];
export declare const ComplaintScalarFieldEnum: {
    readonly id: "id";
    readonly ticketNumber: "ticketNumber";
    readonly customerName: "customerName";
    readonly documentType: "documentType";
    readonly documentNumber: "documentNumber";
    readonly email: "email";
    readonly phone: "phone";
    readonly orderId: "orderId";
    readonly orderNumber: "orderNumber";
    readonly complaintType: "complaintType";
    readonly description: "description";
    readonly status: "status";
    readonly adminResponse: "adminResponse";
    readonly managedById: "managedById";
    readonly resolvedById: "resolvedById";
    readonly createdAt: "createdAt";
    readonly resolvedAt: "resolvedAt";
};
export type ComplaintScalarFieldEnum = (typeof ComplaintScalarFieldEnum)[keyof typeof ComplaintScalarFieldEnum];
export declare const HeroSlideScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly subtitle: "subtitle";
    readonly linkType: "linkType";
    readonly linkProductId: "linkProductId";
    readonly linkCategoryId: "linkCategoryId";
    readonly linkUrl: "linkUrl";
    readonly linkText: "linkText";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly deletedById: "deletedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type HeroSlideScalarFieldEnum = (typeof HeroSlideScalarFieldEnum)[keyof typeof HeroSlideScalarFieldEnum];
export declare const FaqScalarFieldEnum: {
    readonly id: "id";
    readonly question: "question";
    readonly answer: "answer";
    readonly category: "category";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
    readonly createdById: "createdById";
    readonly updatedById: "updatedById";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum];
export declare const OrderStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly fromStatus: "fromStatus";
    readonly toStatus: "toStatus";
    readonly changedById: "changedById";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
};
export type OrderStatusHistoryScalarFieldEnum = (typeof OrderStatusHistoryScalarFieldEnum)[keyof typeof OrderStatusHistoryScalarFieldEnum];
export declare const SiteConfigScalarFieldEnum: {
    readonly id: "id";
    readonly storeName: "storeName";
    readonly storeEmail: "storeEmail";
    readonly supportEmail: "supportEmail";
    readonly phonePrimary: "phonePrimary";
    readonly phoneSecondary: "phoneSecondary";
    readonly whatsappNumber: "whatsappNumber";
    readonly address: "address";
    readonly currency: "currency";
    readonly taxRate: "taxRate";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly googleAnalyticsId: "googleAnalyticsId";
    readonly facebookPixelId: "facebookPixelId";
    readonly updatedAt: "updatedAt";
};
export type SiteConfigScalarFieldEnum = (typeof SiteConfigScalarFieldEnum)[keyof typeof SiteConfigScalarFieldEnum];
export declare const SocialLinkScalarFieldEnum: {
    readonly id: "id";
    readonly siteConfigId: "siteConfigId";
    readonly network: "network";
    readonly name: "name";
    readonly icon: "icon";
    readonly url: "url";
    readonly sortOrder: "sortOrder";
    readonly isActive: "isActive";
};
export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumImageEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageEntityType'>;
export type ListEnumImageEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageEntityType[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>;
export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>;
export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>;
export type EnumPromotionTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionTarget'>;
export type ListEnumPromotionTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionTarget[]'>;
export type EnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus'>;
export type ListEnumCartStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CartStatus[]'>;
export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>;
export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>;
export type EnumPaymentMethodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethodType'>;
export type ListEnumPaymentMethodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethodType[]'>;
export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>;
export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>;
export type EnumDeliveryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryType'>;
export type ListEnumDeliveryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryType[]'>;
export type EnumPaymentReminderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentReminderType'>;
export type ListEnumPaymentReminderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentReminderType[]'>;
export type EnumClaimTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimType'>;
export type ListEnumClaimTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimType[]'>;
export type EnumClaimReasonCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimReasonCategory'>;
export type ListEnumClaimReasonCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimReasonCategory[]'>;
export type EnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus'>;
export type ListEnumClaimStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClaimStatus[]'>;
export type EnumReturnedProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReturnedProductCondition'>;
export type ListEnumReturnedProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReturnedProductCondition[]'>;
export type EnumRefundMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundMethod'>;
export type ListEnumRefundMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundMethod[]'>;
export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>;
export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>;
export type EnumDeliveryUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryUnit'>;
export type ListEnumDeliveryUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryUnit[]'>;
export type EnumAdminPermissionModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminPermissionModule'>;
export type ListEnumAdminPermissionModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminPermissionModule[]'>;
export type EnumPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageStatus'>;
export type ListEnumPageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PageStatus[]'>;
export type EnumComplaintTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintType'>;
export type ListEnumComplaintTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintType[]'>;
export type EnumComplaintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintStatus'>;
export type ListEnumComplaintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintStatus[]'>;
export type EnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType'>;
export type ListEnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    image?: Prisma.ImageOmit;
    category?: Prisma.CategoryOmit;
    brand?: Prisma.BrandOmit;
    product?: Prisma.ProductOmit;
    productPrice?: Prisma.ProductPriceOmit;
    productPriceHistory?: Prisma.ProductPriceHistoryOmit;
    productSpec?: Prisma.ProductSpecOmit;
    productFeature?: Prisma.ProductFeatureOmit;
    promotion?: Prisma.PromotionOmit;
    coupon?: Prisma.CouponOmit;
    couponUsage?: Prisma.CouponUsageOmit;
    customer?: Prisma.CustomerOmit;
    customerVerificationCode?: Prisma.CustomerVerificationCodeOmit;
    customerAddress?: Prisma.CustomerAddressOmit;
    cart?: Prisma.CartOmit;
    cartItem?: Prisma.CartItemOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    orderAddress?: Prisma.OrderAddressOmit;
    paymentMethod?: Prisma.PaymentMethodOmit;
    orderPaymentTransaction?: Prisma.OrderPaymentTransactionOmit;
    orderLogistics?: Prisma.OrderLogisticsOmit;
    orderPaymentReminder?: Prisma.OrderPaymentReminderOmit;
    orderClaim?: Prisma.OrderClaimOmit;
    orderClaimItem?: Prisma.OrderClaimItemOmit;
    refund?: Prisma.RefundOmit;
    refundItem?: Prisma.RefundItemOmit;
    orderSequence?: Prisma.OrderSequenceOmit;
    claimSequence?: Prisma.ClaimSequenceOmit;
    department?: Prisma.DepartmentOmit;
    province?: Prisma.ProvinceOmit;
    district?: Prisma.DistrictOmit;
    shippingZone?: Prisma.ShippingZoneOmit;
    shippingZoneArea?: Prisma.ShippingZoneAreaOmit;
    shippingRate?: Prisma.ShippingRateOmit;
    adminRole?: Prisma.AdminRoleOmit;
    adminPermission?: Prisma.AdminPermissionOmit;
    adminRolePermission?: Prisma.AdminRolePermissionOmit;
    adminUser?: Prisma.AdminUserOmit;
    adminRefreshToken?: Prisma.AdminRefreshTokenOmit;
    customerRefreshToken?: Prisma.CustomerRefreshTokenOmit;
    productReview?: Prisma.ProductReviewOmit;
    page?: Prisma.PageOmit;
    complaint?: Prisma.ComplaintOmit;
    heroSlide?: Prisma.HeroSlideOmit;
    faq?: Prisma.FaqOmit;
    orderStatusHistory?: Prisma.OrderStatusHistoryOmit;
    siteConfig?: Prisma.SiteConfigOmit;
    socialLink?: Prisma.SocialLinkOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
