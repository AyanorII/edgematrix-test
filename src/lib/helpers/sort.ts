import type { SortOrder } from "@/lib/interfaces";

export const sort = (a: number, b: number, order: SortOrder = "cres") => {
  if (order === "cres") {
    return a - b;
  }
  return b - a;
};
