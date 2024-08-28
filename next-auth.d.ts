import NextAuth, {type DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client"

export type ExtendedUSer = DefaultSession["user"] & {
    role: UserRole;
    isTwoFactorEnabled: Boolean
};

declare module "next-auth" {
    interface Session{
      user: ExtendedUSer;
    }
  }
  