import { UserRole } from "@prisma/client";
import { json, type LoaderFunction } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";

export const StreamsLoader: LoaderFunction = async ({ request }) => {
  await getUserPermissions(request, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const streams = await prisma.stream.findMany({});
  return json({ streams });
};
