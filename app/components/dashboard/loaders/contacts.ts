import { json, type LoaderFunction } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";

export const contactsLoader: LoaderFunction = async ({ request }) => {
  const user = await getUserPermissions(request, ["ADMIN", "SUB_ADMIN"]);
  const data = await prisma.hRContact.findMany({});
  return json({ ...user, data });
};
