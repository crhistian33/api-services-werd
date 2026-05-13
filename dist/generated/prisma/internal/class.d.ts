import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get image(): Prisma.ImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get brand(): Prisma.BrandDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productPrice(): Prisma.ProductPriceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productPriceHistory(): Prisma.ProductPriceHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productSpec(): Prisma.ProductSpecDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productFeature(): Prisma.ProductFeatureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promotion(): Prisma.PromotionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get couponUsage(): Prisma.CouponUsageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerVerificationCode(): Prisma.CustomerVerificationCodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerAddress(): Prisma.CustomerAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cart(): Prisma.CartDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cartItem(): Prisma.CartItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderAddress(): Prisma.OrderAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderPaymentTransaction(): Prisma.OrderPaymentTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderLogistics(): Prisma.OrderLogisticsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderPaymentReminder(): Prisma.OrderPaymentReminderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderClaim(): Prisma.OrderClaimDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderClaimItem(): Prisma.OrderClaimItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refund(): Prisma.RefundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refundItem(): Prisma.RefundItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderSequence(): Prisma.OrderSequenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get claimSequence(): Prisma.ClaimSequenceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get department(): Prisma.DepartmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get province(): Prisma.ProvinceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get district(): Prisma.DistrictDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shippingZone(): Prisma.ShippingZoneDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shippingZoneArea(): Prisma.ShippingZoneAreaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get shippingRate(): Prisma.ShippingRateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminRole(): Prisma.AdminRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminPermission(): Prisma.AdminPermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminRolePermission(): Prisma.AdminRolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminUser(): Prisma.AdminUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get adminRefreshToken(): Prisma.AdminRefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customerRefreshToken(): Prisma.CustomerRefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get productReview(): Prisma.ProductReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get page(): Prisma.PageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get complaint(): Prisma.ComplaintDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get heroSlide(): Prisma.HeroSlideDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get faq(): Prisma.FaqDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orderStatusHistory(): Prisma.OrderStatusHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get siteConfig(): Prisma.SiteConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
