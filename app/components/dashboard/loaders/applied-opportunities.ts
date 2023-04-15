import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";
import { json, Response, type LoaderFunction } from "@remix-run/node";

export const AppliedOpportunityLoader: LoaderFunction = async ({ request }) => {
  const { id: userId } = await getUserPermissions(request);
  const userProfile = await prisma.userProfile.findUnique({
    where: {
      userId,
    },
    select: {
      streamId: true,
    },
  });

  if (!userProfile) {
    throw new Response("Not Found", {
      status: 404,
      statusText:
        "No profile found for this user, Please visit profile section to update profile and see opportunitites",
    });
  }

  if (!userProfile?.streamId)
    throw new Response("Not Found", {
      status: 404,
      statusText:
        "No stream found for this user, Please visit profile section to update profile and see opportunitites",
    });
  const appliedOpportunities = await prisma.opportunityUserLink.findMany({
    where: {
      userId,
    },
    include: {
      opportunity: true,
      user: {
        include: {
          userProfile: true,
        },
      },
    },
  });
  if (appliedOpportunities.length === 0) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "You have not applied to any opportunities yet",
    });
  }
  return json({
    appliedOpportunities,
  });
};
