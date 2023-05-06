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

  return json({
    opportunities: opportunities.map((opportunity: Opportunity) => ({
      value: opportunity.id,
      label: `${opportunity.name} - ${
        opportunity.company
      } - ${DateTime.fromJSDate(new Date(opportunity.createdAt)).toLocaleString(
        DateTime.DATE_MED
      )}`,
    })),
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
  const { opportunityId } = params;
  const opportunities = await prisma.opportunityUserLink.findMany({
    where: {
      opportunityId: opportunityId,
    },
    include: {
      user: {
        include: {
          userProfile: true,
        },
      },
      opportunity: true,
    },
  });

  return json({
    opportunities,
  });
};
