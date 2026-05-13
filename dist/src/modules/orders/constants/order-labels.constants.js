"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CANCELLATION_REASON_LABELS = exports.REFUND_METHOD_LABELS = exports.REFUND_STATUS_LABELS = exports.RETURNED_CONDITION_LABELS = exports.CLAIM_REASON_LABELS = exports.CLAIM_STATUS_LABELS = exports.CLAIM_TYPE_LABELS = exports.DELIVERY_TYPE_LABELS = exports.TRANSACTION_STATUS_LABELS = exports.PAYMENT_METHOD_TYPE_LABELS = exports.ORDER_STATUS_LABELS = void 0;
const client_1 = require("../../../../generated/prisma/client");
exports.ORDER_STATUS_LABELS = {
    pending_payment: 'Pendiente de pago',
    paid: 'Pagado',
    processing: 'En preparación',
    shipped: 'Enviado',
    delivered: 'Entregado',
    cancelled: 'Cancelado',
    refunded: 'Reembolsado',
};
exports.PAYMENT_METHOD_TYPE_LABELS = {
    card: 'Tarjeta',
    wallet: 'Billetera Digital',
    cash_code: 'PagoEfectivo / Código',
    cash_on_delivery: 'Pago Contraentrega',
    bank_transfer: 'Transferencia Bancaria',
};
exports.TRANSACTION_STATUS_LABELS = {
    pending: 'Pendiente',
    completed: 'Completado',
    failed: 'Fallido',
    refunded: 'Reembolsado',
};
exports.DELIVERY_TYPE_LABELS = {
    COURIER: 'Courier / Agencia',
    LOCAL_MOTORIZED: 'Motorizado Local',
};
exports.CLAIM_TYPE_LABELS = {
    CANCELLATION: 'Cancelación',
    REFUND: 'Devolución',
    REPLACEMENT: 'Reemplazo',
};
exports.CLAIM_STATUS_LABELS = {
    PENDING: 'Pendiente',
    APPROVED: 'Aprobado',
    REJECTED: 'Rechazado',
    RECEIVED: 'Recibido',
    COMPLETED: 'Completado',
    CANCELLED: 'Cancelado',
};
exports.CLAIM_REASON_LABELS = {
    CUSTOMER_DECISION: 'Decisión del cliente',
    STORE_ERROR: 'Error de la tienda',
    PRODUCT_FAULT: 'Falla de producto',
};
exports.RETURNED_CONDITION_LABELS = {
    [client_1.ReturnedProductCondition.RESELLABLE]: 'En buen estado (apto para reventa)',
    [client_1.ReturnedProductCondition.DAMAGED]: 'Dañado',
    [client_1.ReturnedProductCondition.DESTROYED]: 'Destruido / Perdido',
};
exports.REFUND_STATUS_LABELS = {
    PENDING: 'Pendiente',
    COMPLETED: 'Completado',
    FAILED: 'Fallido',
};
exports.REFUND_METHOD_LABELS = {
    CARD: 'Tarjeta',
    WALLET: 'Billetera Digital',
    STORE_CREDIT: 'Crédito en tienda',
    BANK_TRANSFER: 'Transferencia bancaria',
};
exports.CANCELLATION_REASON_LABELS = {
    customer_request: 'Solicitud del cliente',
    no_payment: 'Falta de pago',
    no_stock: 'Sin stock',
    fraud: 'Sospecha de fraude',
    wrong_address: 'Dirección incorrecta',
    damaged_in_warehouse: 'Dañado en almacén',
    other: 'Otro motivo',
};
//# sourceMappingURL=order-labels.constants.js.map