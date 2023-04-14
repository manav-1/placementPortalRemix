import { prisma } from "prisma/prisma.server";
import type { ContactType } from "./types.server";

export const createContact = async (contactData: ContactType) => {
  return prisma.hRContact.create({ data: contactData });
};
