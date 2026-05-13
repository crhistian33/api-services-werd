export interface DashboardKpis {
  totalOrders: number;
  effectiveOrders: number;
  pendingOrders: number;
  cancelledOrders: number;
  refundedOrders: number;
  grossSales: number;
  netSales: number;
  totalRefunded: number;
  pendingPayment: number;
  averageTicket: number;
  totalCustomers: number;
  activeProducts: number;
  pendingReviews: number;
  pendingClaims: number;
}

export interface RecentOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  total: number;
  status: string;
  placedAt: string;
}

export interface OrdersByStatus {
  status: string;
  count: number;
}

export interface TopProduct {
  productId: string;
  productName: string;
  totalSold: number;
}

export interface RevenueByDay {
  date: string;
  amount: number;
}

export interface RefundsVsSalesByDay {
  date: string;
  sales: number;
  refunds: number;
}

export interface RecentClaim {
  id: string;
  claimNumber: string;
  type: string;
  customerName: string;
  status: string;
  createdAt: string;
}

export interface DashboardResponse {
  kpis: DashboardKpis;
  recentOrders: RecentOrder[];
  ordersByStatus: OrdersByStatus[];
  topProducts: TopProduct[];
  revenueByDay: RevenueByDay[];
  refundsVsSales: RefundsVsSalesByDay[];
  recentClaims: RecentClaim[];
}
