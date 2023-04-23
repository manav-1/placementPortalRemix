import { type LoaderFunction } from "@remix-run/node";
import { getUser, getUserPermissions } from "~/utils/auth/auth.server";

export const dashboardLoader: LoaderFunction = async ({ request }) => {
  await getUserPermissions(request);
  const user = await getUser(request);
  return user;
};
