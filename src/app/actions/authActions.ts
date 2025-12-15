"use server";

import prisma from "@/src/lib/schemas/prisma";
import {
  registerSchema,
  RegisterSchema,
} from "@/src/lib/schemas/registerSchema";
import { ActionResult } from "@/src/types";
import * as bcrypt from "bcrypt";
import { User } from "../generated/prisma/client";
import { LoginSchema } from "@/src/lib/schemas/loginSchema";
import { signIn, signOut } from "@/src/auth";
import { AuthError } from "next-auth";

//===================LogIn a User========================
export async function signInUser(
  data: LoginSchema
): Promise<ActionResult<string>> {
  try {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);

    return { status: "success", data: "Logged In" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { status: "error", error: "Invalid credentials" };

        default:
          return { status: "error", error: "Something went wrong" };
      }
    } else {
      return { status: "error", error: "Something went wrong" };
    }
  }
}

//===================Register a User========================
export async function signOutUser() {
  await signOut({ redirectTo: "/", redirect: true });
}

//===================Register a User========================
export async function registerUser(
  data: RegisterSchema
): Promise<ActionResult<User>> {
  try {
    const validate = registerSchema.safeParse(data);

    if (!validate.success) {
      return { status: "error", error: validate.error.message };
    }

    const { name, email, password } = validate.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return { status: "error", error: "User already exists" };
    }

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    });

    return { status: "success", data: createUser };
  } catch (error) {
    console.log(error);
    return { status: "error", error: "Something went wrong" };
  }
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}
