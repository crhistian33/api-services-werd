import { PaginationDto } from '../dto/pagination.dto';

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface BatchResult {
  count: number;
}

export interface FindAllParams<WhereInput, OrderByInput> {
  where?: WhereInput;
  orderBy?: OrderByInput | OrderByInput[];
  include?: object;
  select?: object;
  pagination?: PaginationDto;
  /**
   * When enabled, disables the built-in soft-delete filtering.
   * Useful for endpoints that must return deleted records (restore flows, audit endpoints, etc).
   */
  includeDeleted?: boolean;
}
