"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceScalarFieldEnum = exports.DepartmentScalarFieldEnum = exports.ClaimSequenceScalarFieldEnum = exports.OrderSequenceScalarFieldEnum = exports.RefundItemScalarFieldEnum = exports.RefundScalarFieldEnum = exports.OrderClaimItemScalarFieldEnum = exports.OrderClaimScalarFieldEnum = exports.OrderPaymentReminderScalarFieldEnum = exports.OrderLogisticsScalarFieldEnum = exports.OrderPaymentTransactionScalarFieldEnum = exports.PaymentMethodScalarFieldEnum = exports.OrderAddressScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.CartItemScalarFieldEnum = exports.CartScalarFieldEnum = exports.CustomerAddressScalarFieldEnum = exports.CustomerVerificationCodeScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.CouponUsageScalarFieldEnum = exports.CouponScalarFieldEnum = exports.PromotionScalarFieldEnum = exports.ProductFeatureScalarFieldEnum = exports.ProductSpecScalarFieldEnum = exports.ProductPriceHistoryScalarFieldEnum = exports.ProductPriceScalarFieldEnum = exports.ProductScalarFieldEnum = exports.BrandScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.ImageScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.SocialLinkScalarFieldEnum = exports.SiteConfigScalarFieldEnum = exports.OrderStatusHistoryScalarFieldEnum = exports.FaqScalarFieldEnum = exports.HeroSlideScalarFieldEnum = exports.ComplaintScalarFieldEnum = exports.PageScalarFieldEnum = exports.ProductReviewScalarFieldEnum = exports.CustomerRefreshTokenScalarFieldEnum = exports.AdminRefreshTokenScalarFieldEnum = exports.AdminUserScalarFieldEnum = exports.AdminRolePermissionScalarFieldEnum = exports.AdminPermissionScalarFieldEnum = exports.AdminRoleScalarFieldEnum = exports.ShippingRateScalarFieldEnum = exports.ShippingZoneAreaScalarFieldEnum = exports.ShippingZoneScalarFieldEnum = exports.DistrictScalarFieldEnum = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Image: 'Image',
    Category: 'Category',
    Brand: 'Brand',
    Product: 'Product',
    ProductPrice: 'ProductPrice',
    ProductPriceHistory: 'ProductPriceHistory',
    ProductSpec: 'ProductSpec',
    ProductFeature: 'ProductFeature',
    Promotion: 'Promotion',
    Coupon: 'Coupon',
    CouponUsage: 'CouponUsage',
    Customer: 'Customer',
    CustomerVerificationCode: 'CustomerVerificationCode',
    CustomerAddress: 'CustomerAddress',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderAddress: 'OrderAddress',
    PaymentMethod: 'PaymentMethod',
    OrderPaymentTransaction: 'OrderPaymentTransaction',
    OrderLogistics: 'OrderLogistics',
    OrderPaymentReminder: 'OrderPaymentReminder',
    OrderClaim: 'OrderClaim',
    OrderClaimItem: 'OrderClaimItem',
    Refund: 'Refund',
    RefundItem: 'RefundItem',
    OrderSequence: 'OrderSequence',
    ClaimSequence: 'ClaimSequence',
    Department: 'Department',
    Province: 'Province',
    District: 'District',
    ShippingZone: 'ShippingZone',
    ShippingZoneArea: 'ShippingZoneArea',
    ShippingRate: 'ShippingRate',
    AdminRole: 'AdminRole',
    AdminPermission: 'AdminPermission',
    AdminRolePermission: 'AdminRolePermission',
    AdminUser: 'AdminUser',
    AdminRefreshToken: 'AdminRefreshToken',
    CustomerRefreshToken: 'CustomerRefreshToken',
    ProductReview: 'ProductReview',
    Page: 'Page',
    Complaint: 'Complaint',
    HeroSlide: 'HeroSlide',
    Faq: 'Faq',
    OrderStatusHistory: 'OrderStatusHistory',
    SiteConfig: 'SiteConfig',
    SocialLink: 'SocialLink'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ImageScalarFieldEnum = {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    imageRole: 'imageRole',
    tempPath: 'tempPath',
    finalPath: 'finalPath',
    url: 'url',
    order: 'order',
    altText: 'altText',
    metadata: 'metadata',
    isConfirmed: 'isConfirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    parentId: 'parentId',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.BrandScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    sku: 'sku',
    shortDescription: 'shortDescription',
    description: 'description',
    categoryId: 'categoryId',
    brandId: 'brandId',
    status: 'status',
    isFeatured: 'isFeatured',
    stock: 'stock',
    weight: 'weight',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ProductPriceScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    price: 'price',
    compareAtPrice: 'compareAtPrice',
    cost: 'cost',
    currency: 'currency',
    updatedAt: 'updatedAt'
};
exports.ProductPriceHistoryScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    price: 'price',
    cost: 'cost',
    marginPct: 'marginPct',
    changedById: 'changedById',
    reason: 'reason',
    effectiveFrom: 'effectiveFrom',
    createdAt: 'createdAt'
};
exports.ProductSpecScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    specKey: 'specKey',
    specValue: 'specValue',
    sortOrder: 'sortOrder'
};
exports.ProductFeatureScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    feature: 'feature',
    sortOrder: 'sortOrder'
};
exports.PromotionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    discountType: 'discountType',
    discountValue: 'discountValue',
    appliesTo: 'appliesTo',
    targetIds: 'targetIds',
    minOrderAmount: 'minOrderAmount',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CouponScalarFieldEnum = {
    id: 'id',
    code: 'code',
    discountType: 'discountType',
    discountValue: 'discountValue',
    minOrderAmount: 'minOrderAmount',
    maxDiscountAmount: 'maxDiscountAmount',
    usageLimit: 'usageLimit',
    usageLimitPerUser: 'usageLimitPerUser',
    timesUsed: 'timesUsed',
    appliesTo: 'appliesTo',
    targetIds: 'targetIds',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CouponUsageScalarFieldEnum = {
    id: 'id',
    couponId: 'couponId',
    orderId: 'orderId',
    customerId: 'customerId',
    guestEmail: 'guestEmail',
    discountApplied: 'discountApplied',
    usedAt: 'usedAt'
};
exports.CustomerScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    googleId: 'googleId',
    emailVerifiedAt: 'emailVerifiedAt',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CustomerVerificationCodeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    email: 'email',
    expiresAt: 'expiresAt',
    customerId: 'customerId',
    createdAt: 'createdAt'
};
exports.CustomerAddressScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    alias: 'alias',
    recipientName: 'recipientName',
    phone: 'phone',
    departmentId: 'departmentId',
    provinceId: 'provinceId',
    districtId: 'districtId',
    addressLine: 'addressLine',
    reference: 'reference',
    latitude: 'latitude',
    longitude: 'longitude',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartScalarFieldEnum = {
    id: 'id',
    token: 'token',
    customerId: 'customerId',
    status: 'status',
    orderId: 'orderId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    priceUpdatedAt: 'priceUpdatedAt',
    addedAt: 'addedAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    orderNumber: 'orderNumber',
    customerId: 'customerId',
    guestEmail: 'guestEmail',
    guestName: 'guestName',
    guestPhone: 'guestPhone',
    status: 'status',
    subtotal: 'subtotal',
    discountAmount: 'discountAmount',
    shippingAmount: 'shippingAmount',
    taxAmount: 'taxAmount',
    total: 'total',
    couponId: 'couponId',
    couponDiscount: 'couponDiscount',
    paymentMethodId: 'paymentMethodId',
    shippingRateId: 'shippingRateId',
    claimAsReplacementId: 'claimAsReplacementId',
    notes: 'notes',
    adminNotes: 'adminNotes',
    ipAddress: 'ipAddress',
    placedAt: 'placedAt',
    paidAt: 'paidAt',
    shippedAt: 'shippedAt',
    deliveredAt: 'deliveredAt',
    cancelledAt: 'cancelledAt',
    refundedAt: 'refundedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentExpiresAt: 'paymentExpiresAt',
    paymentReminderSentAt: 'paymentReminderSentAt',
    paymentConfirmedById: 'paymentConfirmedById',
    paymentConfirmedAt: 'paymentConfirmedAt',
    parentOrderId: 'parentOrderId'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    productName: 'productName',
    productSku: 'productSku',
    productImageUrl: 'productImageUrl',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    unitCost: 'unitCost',
    discountAmount: 'discountAmount',
    lineTotal: 'lineTotal',
    promotionId: 'promotionId'
};
exports.OrderAddressScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    recipientName: 'recipientName',
    phone: 'phone',
    departmentId: 'departmentId',
    provinceId: 'provinceId',
    districtId: 'districtId',
    alias: 'alias',
    addressLine: 'addressLine',
    reference: 'reference',
    sourceAddressId: 'sourceAddressId',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PaymentMethodScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    config: 'config',
    instructions: 'instructions',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderPaymentTransactionScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    paymentMethodId: 'paymentMethodId',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    gatewayTransactionId: 'gatewayTransactionId',
    cipCode: 'cipCode',
    cipExpiresAt: 'cipExpiresAt',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    operationNumber: 'operationNumber',
    confirmedById: 'confirmedById',
    paidAmount: 'paidAmount'
};
exports.OrderLogisticsScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    deliveryType: 'deliveryType',
    estimatedShipping: 'estimatedShipping',
    actualShippingCost: 'actualShippingCost',
    internalTransportCost: 'internalTransportCost',
    trackingNumber: 'trackingNumber',
    courierName: 'courierName',
    dispatchedAt: 'dispatchedAt',
    deliveredAt: 'deliveredAt',
    dispatchedById: 'dispatchedById',
    deliveredById: 'deliveredById',
    deliveryEvidenceNote: 'deliveryEvidenceNote',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderPaymentReminderScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    sentAt: 'sentAt',
    type: 'type'
};
exports.OrderClaimScalarFieldEnum = {
    id: 'id',
    claimNumber: 'claimNumber',
    orderId: 'orderId',
    customerId: 'customerId',
    type: 'type',
    reasonCategory: 'reasonCategory',
    status: 'status',
    description: 'description',
    adminNotes: 'adminNotes',
    customerVoucherAmount: 'customerVoucherAmount',
    replacementOrderId: 'replacementOrderId',
    returnCourierName: 'returnCourierName',
    returnTrackingNumber: 'returnTrackingNumber',
    returnShipmentNotes: 'returnShipmentNotes',
    returnShipmentConfirmedAt: 'returnShipmentConfirmedAt',
    receivedProductCondition: 'receivedProductCondition',
    internalDamageNote: 'internalDamageNote',
    receivedAdminNote: 'receivedAdminNote',
    refundMethod: 'refundMethod',
    refundAccountDetails: 'refundAccountDetails',
    reviewedById: 'reviewedById',
    reviewNote: 'reviewNote',
    internalNote: 'internalNote',
    createdAt: 'createdAt',
    reviewedAt: 'reviewedAt',
    receivedAt: 'receivedAt',
    completedAt: 'completedAt',
    updatedAt: 'updatedAt'
};
exports.OrderClaimItemScalarFieldEnum = {
    id: 'id',
    claimId: 'claimId',
    orderItemId: 'orderItemId',
    quantity: 'quantity',
    reason: 'reason'
};
exports.RefundScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    claimId: 'claimId',
    amount: 'amount',
    status: 'status',
    method: 'method',
    reason: 'reason',
    processedById: 'processedById',
    createdById: 'createdById',
    gatewayRefundId: 'gatewayRefundId',
    adminNotes: 'adminNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefundItemScalarFieldEnum = {
    id: 'id',
    refundId: 'refundId',
    orderItemId: 'orderItemId',
    quantity: 'quantity',
    amount: 'amount',
    restockQuantity: 'restockQuantity'
};
exports.OrderSequenceScalarFieldEnum = {
    id: 'id',
    lastSeq: 'lastSeq'
};
exports.ClaimSequenceScalarFieldEnum = {
    id: 'id',
    lastSeq: 'lastSeq'
};
exports.DepartmentScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.ProvinceScalarFieldEnum = {
    id: 'id',
    name: 'name',
    departmentId: 'departmentId'
};
exports.DistrictScalarFieldEnum = {
    id: 'id',
    name: 'name',
    provinceId: 'provinceId'
};
exports.ShippingZoneScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ShippingZoneAreaScalarFieldEnum = {
    id: 'id',
    zoneId: 'zoneId',
    departmentId: 'departmentId',
    provinceId: 'provinceId',
    districtId: 'districtId',
    deliveryType: 'deliveryType'
};
exports.ShippingRateScalarFieldEnum = {
    id: 'id',
    zoneId: 'zoneId',
    name: 'name',
    price: 'price',
    minOrderAmount: 'minOrderAmount',
    freeShippingThreshold: 'freeShippingThreshold',
    estimatedMin: 'estimatedMin',
    estimatedMax: 'estimatedMax',
    estimatedUnit: 'estimatedUnit',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AdminRoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
};
exports.AdminPermissionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    module: 'module'
};
exports.AdminRolePermissionScalarFieldEnum = {
    roleId: 'roleId',
    permissionId: 'permissionId'
};
exports.AdminUserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    roleId: 'roleId',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.AdminRefreshTokenScalarFieldEnum = {
    id: 'id',
    adminUserId: 'adminUserId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
exports.CustomerRefreshTokenScalarFieldEnum = {
    id: 'id',
    customerId: 'customerId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
exports.ProductReviewScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    customerId: 'customerId',
    orderId: 'orderId',
    rating: 'rating',
    title: 'title',
    comment: 'comment',
    isApproved: 'isApproved',
    reviewedById: 'reviewedById',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt'
};
exports.PageScalarFieldEnum = {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    status: 'status',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ComplaintScalarFieldEnum = {
    id: 'id',
    ticketNumber: 'ticketNumber',
    customerName: 'customerName',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    email: 'email',
    phone: 'phone',
    orderId: 'orderId',
    orderNumber: 'orderNumber',
    complaintType: 'complaintType',
    description: 'description',
    status: 'status',
    adminResponse: 'adminResponse',
    managedById: 'managedById',
    resolvedById: 'resolvedById',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt'
};
exports.HeroSlideScalarFieldEnum = {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    linkType: 'linkType',
    linkProductId: 'linkProductId',
    linkCategoryId: 'linkCategoryId',
    linkUrl: 'linkUrl',
    linkText: 'linkText',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.FaqScalarFieldEnum = {
    id: 'id',
    question: 'question',
    answer: 'answer',
    category: 'category',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdById: 'createdById',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderStatusHistoryScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    changedById: 'changedById',
    comment: 'comment',
    createdAt: 'createdAt'
};
exports.SiteConfigScalarFieldEnum = {
    id: 'id',
    storeName: 'storeName',
    storeEmail: 'storeEmail',
    supportEmail: 'supportEmail',
    phonePrimary: 'phonePrimary',
    phoneSecondary: 'phoneSecondary',
    whatsappNumber: 'whatsappNumber',
    address: 'address',
    currency: 'currency',
    taxRate: 'taxRate',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    googleAnalyticsId: 'googleAnalyticsId',
    facebookPixelId: 'facebookPixelId',
    updatedAt: 'updatedAt'
};
exports.SocialLinkScalarFieldEnum = {
    id: 'id',
    siteConfigId: 'siteConfigId',
    network: 'network',
    name: 'name',
    icon: 'icon',
    url: 'url',
    sortOrder: 'sortOrder',
    isActive: 'isActive'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map