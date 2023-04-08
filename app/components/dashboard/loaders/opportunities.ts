import { prisma } from "prisma/prisma.server";
import { getUser } from "~/utils/auth/auth.server";
import { json, Response, type LoaderFunction } from "@remix-run/node";

export const OpportunityLoader: LoaderFunction = async ({ request }) => {
  const { id: userId } = await getUser(request);
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

  return json({
    opportunities: await prisma.opportunity.findMany({
      where: {
        OpportunityStreamLink: {
          every: {
            streamId: userProfile.streamId,
          },
        },
      },
    }),
  });
};