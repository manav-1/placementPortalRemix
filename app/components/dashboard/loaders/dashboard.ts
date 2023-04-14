import { type LoaderFunction } from "@remix-run/node";
import { getUser, requireUserId } from "~/utils/auth/auth.server";

export const dashboardLoader: LoaderFunction = async ({ request }) => {
  await requireUserId(request, "/");
  const user = await getUser(request);
  return user;
};
