export declare const ImageEntityType: {
    readonly PRODUCT: "PRODUCT";
    readonly CATEGORY: "CATEGORY";
    readonly BRAND: "BRAND";
    readonly SITE_CONFIG: "SITE_CONFIG";
    readonly USER: "USER";
    readonly HERO_SLIDE: "HERO_SLIDE";
    readonly ORDER_LOGISTICS: "ORDER_LOGISTICS";
    readonly ORDER_CLAIM: "ORDER_CLAIM";
    readonly ORDER_DELIVERY: "ORDER_DELIVERY";
    readonly ORDER_REFUND: "ORDER_REFUND";
    readonly ORDER_ITEM_RETURN: "ORDER_ITEM_RETURN";
};
export type ImageEntityType = (typeof ImageEntityType)[keyof typeof ImageEntityType];
export declare const ProductStatus: {
    readonly draft: "draft";
    readonly active: "active";
    readonly inactive: "inactive";
    readonly out_of_stock: "out_of_stock";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const CartStatus: {
    readonly active: "active";
    readonly checkout_in_progress: "checkout_in_progress";
    readonly completed: "completed";
    readonly abandoned: "abandoned";
};
export type CartStatus = (typeof CartStatus)[keyof typeof CartStatus];
export declare const OrderStatus: {
    readonly pending_payment: "pending_payment";
    readonly paid: "paid";
    readonly processing: "processing";
    readonly shipped: "shipped";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
    readonly refunded: "refunded";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const DiscountType: {
    readonly percentage: "percentage";
    readonly fixed_amount: "fixed_amount";
    readonly free_shipping: "free_shipping";
};
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];
export declare const PromotionTarget: {
    readonly product: "product";
    readonly category: "category";
    readonly global: "global";
};
export type PromotionTarget = (typeof PromotionTarget)[keyof typeof PromotionTarget];
export declare const PaymentMethodType: {
    readonly card: "card";
    readonly wallet: "wallet";
    readonly cash_code: "cash_code";
    readonly cash_on_delivery: "cash_on_delivery";
    readonly bank_transfer: "bank_transfer";
};
export type PaymentMethodType = (typeof PaymentMethodType)[keyof typeof PaymentMethodType];
export declare const TransactionStatus: {
    readonly pending: "pending";
    readonly completed: "completed";
    readonly failed: "failed";
    readonly refunded: "refunded";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const LinkType: {
    readonly product: "product";
    readonly category: "category";
    readonly external: "external";
    readonly none: "none";
};
export type LinkType = (typeof LinkType)[keyof typeof LinkType];
export declare const PageStatus: {
    readonly draft: "draft";
    readonly published: "published";
};
export type PageStatus = (typeof PageStatus)[keyof typeof PageStatus];
export declare const ComplaintType: {
    readonly reclamo: "reclamo";
    readonly queja: "queja";
};
export type ComplaintType = (typeof ComplaintType)[keyof typeof ComplaintType];
export declare const ComplaintStatus: {
    readonly open: "open";
    readonly in_review: "in_review";
    readonly resolved: "resolved";
    readonly closed: "closed";
};
export type ComplaintStatus = (typeof ComplaintStatus)[keyof typeof ComplaintStatus];
export declare const AdminPermissionModule: {
    readonly products: "products";
    readonly categories: "categories";
    readonly brands: "brands";
    readonly orders: "orders";
    readonly customers: "customers";
    readonly promotions: "promotions";
    readonly coupons: "coupons";
    readonly shipping: "shipping";
    readonly payments: "payments";
    readonly media: "media";
    readonly pages: "pages";
    readonly site_config: "site_config";
    readonly reports: "reports";
    readonly admin_users: "admin_users";
};
export type AdminPermissionModule = (typeof AdminPermissionModule)[keyof typeof AdminPermissionModule];
export declare const DeliveryUnit: {
    readonly minutes: "minutes";
    readonly hours: "hours";
    readonly days: "days";
};
export type DeliveryUnit = (typeof DeliveryUnit)[keyof typeof DeliveryUnit];
export declare const DeliveryType: {
    readonly COURIER: "COURIER";
    readonly LOCAL_MOTORIZED: "LOCAL_MOTORIZED";
};
export type DeliveryType = (typeof DeliveryType)[keyof typeof DeliveryType];
export declare const ClaimType: {
    readonly CANCELLATION: "CANCELLATION";
    readonly REFUND: "REFUND";
    readonly REPLACEMENT: "REPLACEMENT";
};
export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType];
export declare const ClaimReasonCategory: {
    readonly CUSTOMER_DECISION: "CUSTOMER_DECISION";
    readonly STORE_ERROR: "STORE_ERROR";
    readonly PRODUCT_FAULT: "PRODUCT_FAULT";
};
export type ClaimReasonCategory = (typeof ClaimReasonCategory)[keyof typeof ClaimReasonCategory];
export declare const ClaimStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly RECEIVED: "RECEIVED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type ClaimStatus = (typeof ClaimStatus)[keyof typeof ClaimStatus];
export declare const RefundStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus];
export declare const RefundMethod: {
    readonly CARD: "CARD";
    readonly WALLET: "WALLET";
    readonly STORE_CREDIT: "STORE_CREDIT";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
};
export type RefundMethod = (typeof RefundMethod)[keyof typeof RefundMethod];
export declare const ReturnedProductCondition: {
    readonly RESELLABLE: "RESELLABLE";
    readonly DAMAGED: "DAMAGED";
    readonly DESTROYED: "DESTROYED";
};
export type ReturnedProductCondition = (typeof ReturnedProductCondition)[keyof typeof ReturnedProductCondition];
export declare const PaymentReminderType: {
    readonly FIRST_REMINDER: "FIRST_REMINDER";
    readonly FINAL_REMINDER: "FINAL_REMINDER";
};
export type PaymentReminderType = (typeof PaymentReminderType)[keyof typeof PaymentReminderType];
