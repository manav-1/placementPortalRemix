import { redirect, type ActionFunction } from "@remix-run/node";
import { getUserPermissions } from "../auth/auth.server";
import { applyForOpportunity } from "./opportunities.server";

export const ApplyForOpportunity: ActionFunction = async ({
  request,
  params,
}) => {
  try {
    const { id: userId } = await getUserPermissions(request);
    const { opportunityId } = params;
    if (!userId || !opportunityId)
      throw new Response("Bad Request", {
        status: 400,
        statusText: "Bad Request",
      });
    await applyForOpportunity(userId, opportunityId);
    return redirect("/dashboard/opportunities");
  } catch (e) {
    throw new Response("Something went Wrong", {
      status: 500,
      statusText:
        "Please try again later or check if you have already applied for this opportunity",
    });
  }
};
