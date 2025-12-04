import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 digits"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
