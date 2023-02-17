export interface PageInfo {
  size: number;
  prev?: any;
  next?: any;
  pageNumber?: number;
}

export interface PaginationAlgoliaInput {
  size: number;
  number: number;
}

export interface PaginationFirestoreInput {
  size: number;
  before?: string;
  after?: string;
}

export interface Page<T> {
  data: T[];
  pageInfo: PageInfo
}

export const sortOrder = ['asc', 'desc'] as const;
export type SortOrder = typeof sortOrder[number];