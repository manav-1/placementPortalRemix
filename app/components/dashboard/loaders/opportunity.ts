import { json, type LoaderFunction } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";

export const OpportunityIdLoader: LoaderFunction = async ({
  request,
  params,
}) => {
  const user = await getUserPermissions(request);
  const { opportunityId } = params;
  const userProfile = await prisma.userProfile.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (!userProfile)
    throw new Response("Not Found", {
      status: 404,
      statusText:
        "No profile found for this user, Please visit profile section to update profile and see opportunitites",
    });

  if (!userProfile?.streamId)
    throw new Response("Not Found", {
      status: 404,
      statusText:
        "No stream found for this user, Please visit profile section to update profile and see opportunitites",
    });

  console.log(userProfile.streamId);
  console.log(opportunityId);

  const opportunity = await prisma.opportunity.findFirst({
    where: {
      id: opportunityId,
      opportunityStreamLink: {
        some: {
          streamId: userProfile.streamId,
        },
      },
    },
  });

  console.log({
    opportunity,
    userProfile,
  });

  return json({
    opportunity,
    userProfile,
  });
};
