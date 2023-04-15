import { json, type LoaderFunction } from "@remix-run/server-runtime";
import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";

export const ProfileLoader: LoaderFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);
  const userProfile = await prisma.userProfile.findUnique({
    where: { userId },
  });

  const streams = await prisma.stream.findMany({});
  return json({ userProfile, streams });
};
