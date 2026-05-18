type User = {
  username: string;
  password: string;
};

export const USER_LIST: User[] = JSON.parse(import.meta.env.VITE_ACCOUNTS || "[]");
export const ACCESS_PIN: string = import.meta.env.VITE_ACCESS_PIN || "";
