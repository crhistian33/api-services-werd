export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ApiPaginatedResponse<T> {
  success: boolean;
  message?: string;
  data: T[];
  meta: object;
  facets?: unknown;
}

export type AnyApiResponse<T> = ApiResponse<T> | ApiPaginatedResponse<T>;
