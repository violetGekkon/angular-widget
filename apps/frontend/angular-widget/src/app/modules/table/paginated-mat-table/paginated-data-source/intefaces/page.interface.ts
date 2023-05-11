import { Observable } from 'rxjs';

export interface PageRequest<T> {
  page: number;
  size: number;
}

export interface Page<T> {
  rows: T[];
  total: number;
  size: number;
  number: number;
}

export type PaginatedEndpoint<T, Q> = (
  pageable: PageRequest<T>,
  query: Q
) => Observable<Page<T>>;
