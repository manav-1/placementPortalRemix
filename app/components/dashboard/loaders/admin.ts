import type { Opportunity } from "@prisma/client";
import { UserRole } from "@prisma/client";
import { json, type LoaderFunction } from "@remix-run/node";
import { DateTime } from "luxon";
import { prisma } from "prisma/prisma.server";
import { getUserPermissions } from "~/utils/auth/auth.server";

export const AdminLoader: LoaderFunction = async ({ request }) => {
  await getUserPermissions(request, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const opportunities = await prisma.opportunity.findMany({});

  const users = await prisma.user.findMany({});

  return json({
    opportunities: opportunities.map((opportunity: Opportunity) => ({
      value: opportunity.id,
      group: opportunity.company,
      label: `${opportunity.name} - ${DateTime.fromJSDate(
        new Date(opportunity.createdAt)
      ).toLocaleString(DateTime.DATE_MED)}`,
    })),
    users,
  });
};

export const AdminOpportunityLoader: LoaderFunction = async ({
  request,
  params,
}) => {
  await getUserPermissions(request, [
    UserRole.SUPER_ADMIN,
    UserRole.ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const currentURL = new URL(request.url);
  const selectedOpportunities = currentURL.searchParams
    .get("selectedOpportunities")
    ?.split(",");
  if (!selectedOpportunities || selectedOpportunities.length === 0)
    throw new Response("No Opportunities", {
      status: 418,
      statusText: "No opportunities selected",
    });

  const opportunities = await prisma.opportunityUserLink.findMany({
    where: {
      opportunityId: { in: selectedOpportunities },
    },
    include: {
      user: {
        include: {
          userProfile: {
            include: {
              links: true,
              stream: true,
              projects: true,
            },
          },
        },
      },
      opportunity: true,
    },
  });

  return json({
    opportunities,
  });
};
