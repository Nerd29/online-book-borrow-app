import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL:  "https://online-book-borrow-app-git-main-turja1.vercel.app",
});

export const { signIn, signUp, useSession } = authClient;