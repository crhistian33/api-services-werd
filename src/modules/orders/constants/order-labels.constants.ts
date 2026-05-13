import {
  OrderStatus,
  PaymentMethodType,
  TransactionStatus,
  DeliveryType,
  ClaimType,
  ClaimStatus,
  ClaimReasonCategory,
  ReturnedProductCondition,
  RefundStatus,
  RefundMethod,
} from 'generated/prisma/client';

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending_payment: 'Pendiente de pago',
  paid: 'Pagado',
  processing: 'En preparación',
  shipped: 'Enviado',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
  refunded: 'Reembolsado',
};

export const PAYMENT_METHOD_TYPE_LABELS: Record<PaymentMethodType, string> = {
  card: 'Tarjeta',
  wallet: 'Billetera Digital',
  cash_code: 'PagoEfectivo / Código',
  cash_on_delivery: 'Pago Contraentrega',
  bank_transfer: 'Transferencia Bancaria',
};

export const TRANSACTION_STATUS_LABELS: Record<TransactionStatus, string> = {
  pending: 'Pendiente',
  completed: 'Completado',
  failed: 'Fallido',
  refunded: 'Reembolsado',
};

export const DELIVERY_TYPE_LABELS: Record<DeliveryType, string> = {
  COURIER: 'Courier / Agencia',
  LOCAL_MOTORIZED: 'Motorizado Local',
};

export const CLAIM_TYPE_LABELS: Record<ClaimType, string> = {
  CANCELLATION: 'Cancelación',
  REFUND: 'Devolución',
  REPLACEMENT: 'Reemplazo',
};

export const CLAIM_STATUS_LABELS: Record<ClaimStatus, string> = {
  PENDING: 'Pendiente',
  APPROVED: 'Aprobado',
  REJECTED: 'Rechazado',
  RECEIVED: 'Recibido',
  COMPLETED: 'Completado',
  CANCELLED: 'Cancelado',
};

export const CLAIM_REASON_LABELS: Record<ClaimReasonCategory, string> = {
  CUSTOMER_DECISION: 'Decisión del cliente',
  STORE_ERROR: 'Error de la tienda',
  PRODUCT_FAULT: 'Falla de producto',
};

export const RETURNED_CONDITION_LABELS: Record<
  ReturnedProductCondition,
  string
> = {
  [ReturnedProductCondition.RESELLABLE]: 'En buen estado (apto para reventa)',
  [ReturnedProductCondition.DAMAGED]: 'Dañado',
  [ReturnedProductCondition.DESTROYED]: 'Destruido / Perdido',
};

export const REFUND_STATUS_LABELS: Record<RefundStatus, string> = {
  PENDING: 'Pendiente',
  COMPLETED: 'Completado',
  FAILED: 'Fallido',
};

export const REFUND_METHOD_LABELS: Record<RefundMethod, string> = {
  CARD: 'Tarjeta',
  WALLET: 'Billetera Digital',
  STORE_CREDIT: 'Crédito en tienda',
  BANK_TRANSFER: 'Transferencia bancaria',
};

export const CANCELLATION_REASON_LABELS: Record<string, string> = {
  customer_request: 'Solicitud del cliente',
  no_payment: 'Falta de pago',
  no_stock: 'Sin stock',
  fraud: 'Sospecha de fraude',
  wrong_address: 'Dirección incorrecta',
  damaged_in_warehouse: 'Dañado en almacén',
  other: 'Otro motivo',
};
