export type SortBy = "name cres" | "name desc" | "bio cres" | "bio desc";

export type SortOrder = "cres" | "desc";

export interface SortByOption {
  value: SortBy;
  label: string;
};
