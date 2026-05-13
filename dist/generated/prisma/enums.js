"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReminderType = exports.ReturnedProductCondition = exports.RefundMethod = exports.RefundStatus = exports.ClaimStatus = exports.ClaimReasonCategory = exports.ClaimType = exports.DeliveryType = exports.DeliveryUnit = exports.AdminPermissionModule = exports.ComplaintStatus = exports.ComplaintType = exports.PageStatus = exports.LinkType = exports.TransactionStatus = exports.PaymentMethodType = exports.PromotionTarget = exports.DiscountType = exports.OrderStatus = exports.CartStatus = exports.ProductStatus = exports.ImageEntityType = void 0;
exports.ImageEntityType = {
    PRODUCT: 'PRODUCT',
    CATEGORY: 'CATEGORY',
    BRAND: 'BRAND',
    SITE_CONFIG: 'SITE_CONFIG',
    USER: 'USER',
    HERO_SLIDE: 'HERO_SLIDE',
    ORDER_LOGISTICS: 'ORDER_LOGISTICS',
    ORDER_CLAIM: 'ORDER_CLAIM',
    ORDER_DELIVERY: 'ORDER_DELIVERY',
    ORDER_REFUND: 'ORDER_REFUND',
    ORDER_ITEM_RETURN: 'ORDER_ITEM_RETURN'
};
exports.ProductStatus = {
    draft: 'draft',
    active: 'active',
    inactive: 'inactive',
    out_of_stock: 'out_of_stock'
};
exports.CartStatus = {
    active: 'active',
    checkout_in_progress: 'checkout_in_progress',
    completed: 'completed',
    abandoned: 'abandoned'
};
exports.OrderStatus = {
    pending_payment: 'pending_payment',
    paid: 'paid',
    processing: 'processing',
    shipped: 'shipped',
    delivered: 'delivered',
    cancelled: 'cancelled',
    refunded: 'refunded'
};
exports.DiscountType = {
    percentage: 'percentage',
    fixed_amount: 'fixed_amount',
    free_shipping: 'free_shipping'
};
exports.PromotionTarget = {
    product: 'product',
    category: 'category',
    global: 'global'
};
exports.PaymentMethodType = {
    card: 'card',
    wallet: 'wallet',
    cash_code: 'cash_code',
    cash_on_delivery: 'cash_on_delivery',
    bank_transfer: 'bank_transfer'
};
exports.TransactionStatus = {
    pending: 'pending',
    completed: 'completed',
    failed: 'failed',
    refunded: 'refunded'
};
exports.LinkType = {
    product: 'product',
    category: 'category',
    external: 'external',
    none: 'none'
};
exports.PageStatus = {
    draft: 'draft',
    published: 'published'
};
exports.ComplaintType = {
    reclamo: 'reclamo',
    queja: 'queja'
};
exports.ComplaintStatus = {
    open: 'open',
    in_review: 'in_review',
    resolved: 'resolved',
    closed: 'closed'
};
exports.AdminPermissionModule = {
    products: 'products',
    categories: 'categories',
    brands: 'brands',
    orders: 'orders',
    customers: 'customers',
    promotions: 'promotions',
    coupons: 'coupons',
    shipping: 'shipping',
    payments: 'payments',
    media: 'media',
    pages: 'pages',
    site_config: 'site_config',
    reports: 'reports',
    admin_users: 'admin_users'
};
exports.DeliveryUnit = {
    minutes: 'minutes',
    hours: 'hours',
    days: 'days'
};
exports.DeliveryType = {
    COURIER: 'COURIER',
    LOCAL_MOTORIZED: 'LOCAL_MOTORIZED'
};
exports.ClaimType = {
    CANCELLATION: 'CANCELLATION',
    REFUND: 'REFUND',
    REPLACEMENT: 'REPLACEMENT'
};
exports.ClaimReasonCategory = {
    CUSTOMER_DECISION: 'CUSTOMER_DECISION',
    STORE_ERROR: 'STORE_ERROR',
    PRODUCT_FAULT: 'PRODUCT_FAULT'
};
exports.ClaimStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    RECEIVED: 'RECEIVED',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
exports.RefundStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};
exports.RefundMethod = {
    CARD: 'CARD',
    WALLET: 'WALLET',
    STORE_CREDIT: 'STORE_CREDIT',
    BANK_TRANSFER: 'BANK_TRANSFER'
};
exports.ReturnedProductCondition = {
    RESELLABLE: 'RESELLABLE',
    DAMAGED: 'DAMAGED',
    DESTROYED: 'DESTROYED'
};
exports.PaymentReminderType = {
    FIRST_REMINDER: 'FIRST_REMINDER',
    FINAL_REMINDER: 'FINAL_REMINDER'
};
//# sourceMappingURL=enums.js.map