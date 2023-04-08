import { type LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth/auth.server";

export const dashboardLoader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request, "/");
  return userId;
};
