import type { User } from "@/lib/interfaces";
import { capitalize } from "./capitalize";

export const getFullName = (user: User) => {
  return `${capitalize(user.name.first)} ${capitalize(user.name.last)}`;
};
