import NextAuth from "next-auth";

// import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "./auth.config";
import prisma from "./lib/schemas/prisma";

// const prisma = new PrismaClient()

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
});
