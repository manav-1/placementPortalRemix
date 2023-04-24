import { prisma } from "prisma/prisma.server";
import type { AddOpportunityType, ContactType } from "./types";
import { json } from "@remix-run/node";

export const createContact = async (contactData: ContactType) => {
  const contact = await prisma.hRContact.create({ data: contactData });
  return contact;
};

export const createOpportunity = async (
  opportunityData: AddOpportunityType,
  addedById: string
) => {
  const opportunityD = { ...opportunityData, streams: undefined };
  const opportunity = await prisma.opportunity.create({
    data: {
      ...opportunityD,
      addedBy: {
        connect: {
          id: addedById,
        },
      },
    },
  });

  const streams = await prisma.opportunityStreamLink.createMany({
    data: opportunityData.streams.map((stream) => ({
      streamId: stream,
      opportunityId: opportunity.id,
    })),
  });
  return json({
    opportunity,
    streams,
  });
};
