import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";
import { json, Response, type LoaderFunction } from "@remix-run/node";
import type { Prisma } from "@prisma/client";

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

  const currentURL = new URL(request.url);
  const page = Number(currentURL.searchParams.get("page") || "1");
  const search = currentURL.searchParams.get("search") || "";
  const perPage = 15;
  const offset = (page - 1) * perPage;

  const whereCondition: Prisma.OpportunityWhereInput = {
    AND: [
      {
        opportunityStreamLink: {
          some: {
            streamId: userProfile.streamId,
          },
        },
      },
      {
        OR: [
          { company: { contains: search, mode: "insensitive" } },
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      },
    ],
  };

  const totalPages = await prisma.opportunityUserLink.count({
    where: { opportunity: whereCondition },
  });

  const appliedOpportunities = await prisma.opportunityUserLink.findMany({
    skip: offset,
    take: perPage,
    orderBy: { createdAt: "desc" },
    where: {
      userId,
      opportunity: whereCondition,
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
    pagination: {
      page,
      perPage,
      totalPages,
    },
  });
};
