import { z } from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterSchema = LoginSchema.extend({
  name: z.string(),
  mobile: z.string(),
  role: z.nativeEnum(UserRole),
});

export const PropertySchema = z.object({
  property: z.string(),
});

export const VerifySchema = z.object({
  token: z.string(),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type PropertyInput = z.infer<typeof PropertySchema>;
export type VerifyInput = z.infer<typeof VerifySchema>;
