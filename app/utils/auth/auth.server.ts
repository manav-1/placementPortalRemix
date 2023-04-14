import { prisma } from "prisma/prisma.server";
import * as bcryptjs from "bcryptjs";
import { createCookieSessionStorage, redirect } from "@remix-run/node";
import type { LoginInput, PropertyInput, RegisterInput } from "./types.server";
import type { Prisma, User, UserRole } from "@prisma/client";
import { createJWTSignedToken, verifyToken } from "../helper/helper.server";
import createErrors from "http-errors";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "workhub-session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function register(user: RegisterInput) {
  const { email, password } = user;
  const existingUserClause = { email };
  const existingUser = await prisma.user.count({
    where: existingUserClause,
  });
  if (existingUser) {
    return createErrors[403]("User Already Exists");
  }
  try {
    user.password = await bcryptjs.hash(password, 10);
    const createdUser = await prisma.user.create({
      data: user,
      select: {
        password: false,
        id: true,
      },
    });
    return createUserSession(createdUser.id, "/dashboard");
  } catch (error) {
    throw createErrors[500]("Server Exception");
  }
}

export async function login({ email, password }: LoginInput) {
  const userClause: Prisma.UserWhereUniqueInput = { email };
  const user = await prisma.user.findUnique({ where: userClause });
  if (!user) {
    throw await createErrors[404]("User not found");
  }
  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    throw await createErrors[401]("Password is invalid");
  }
  return createUserSession(user.id, "/dashboard");
}

export async function getProperty({ property }: PropertyInput) {
  const session = await storage.getSession();
  const userId = session.get("userId");
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { [property]: true, password: false },
  });
  if (!user) {
    throw createErrors[404]("User not found");
  }
  if (!user[property]) {
    throw createErrors[404]("Property not found");
  }
  return user[property];
}

export async function verify(token: string) {
  let verified = false;
  try {
    const { id } = verifyToken(token) as User;
    await prisma.user.update({
      where: { id },
      data: { isEmailVerified: true },
    });
    verified = true;
  } catch (error) {
    verified = false;
  }
  return { verified };
}

export async function sendVerificationEmail(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw createErrors[404]("User not found");

  try {
    const token = createJWTSignedToken(user);
    console.log(token);
    return { sent: true };
  } catch (error) {
    console.log(error);
    return { sent: false };
  }
}

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch {
    throw logout(request);
  }
}

export async function getUserPermissions(
  request: Request,
  roles: UserRole[] = ["ADMIN", "SUB_ADMIN", "SUPER_ADMIN", "USER"]
) {
  const user = await getUser(request);
  if (!user) {
    throw logout(request);
  }
  if (!roles.includes(user.role)) {
    throw createErrors[403]("Unauthorized");
  }
  return user;
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function logout(request: Request) {
  const session = await getUserSession(request);

  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
