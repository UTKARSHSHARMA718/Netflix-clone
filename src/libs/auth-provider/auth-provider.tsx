"use client";

import { SessionProvider } from "next-auth/react";

interface INextAuthProvider {
  children: React.ReactNode;
}

const NextAuthProvider = ({ children }: INextAuthProvider) => {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;