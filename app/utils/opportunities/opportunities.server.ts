import { prisma } from "prisma/prisma.server";

export const applyForOpportunity = async (
  userId: string,
  opportunityId: string
) => {
  const opportunity = await prisma.opportunity.findFirst({
    where: {
      id: opportunityId,
    },
  });
  if (!opportunity) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "No opportunity found for this id",
    });
  }
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Response("Not Found", {
      status: 404,
      statusText: "No user found for this id",
    });
  }
  const application = await prisma.opportunityUserLink.create({
    data: {
      opportunityId,
      userId,
    },
  });
  return application;
};
