export type SortOrder = "cres" | "desc";

export const sort = (a, b, order: SortOrder = "cres") => {
  if (order === "cres") {
    return a - b;
  }
  return b - a;
}
