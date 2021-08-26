export interface Filter {
  id?: number;
  title?: string;
  count?: string;
  active?: boolean;
}

export interface ActiveFilter {
  id: number | string;
  group: string;
}
