import { type ActionFunction } from "@remix-run/server-runtime";
import { LoginSchema, RegisterSchema } from "./types.server";
import { login, register } from "./auth.server";
import { UserRole } from "@prisma/client";

export const LoginAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  LoginSchema.parse({ email, password });
  const user = await login({
    email: email as string,
    password: password as string,
  });
  return user;
};

export const RegisterAction: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const name = form.get("name") as string;
  const mobile = form.get("mobile") as string;
  const role = UserRole.USER;

  const body = { email, password, name, mobile, role };

  RegisterSchema.parse(body);
  const user = await register(body);
  return user;
};
