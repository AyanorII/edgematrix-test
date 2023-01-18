import data from "@/assets/users.json";
import type { User } from "@/interfaces";

export const getUserById = (id: string): User | null => {
  const user = data.find((u) => u.id === id);

  if (user) {
    return user as User;
  }

  return null;
};
