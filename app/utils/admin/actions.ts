import { type ActionFunction } from "@remix-run/node";
import { getUserPermissions } from "../auth/auth.server";
import { AddOpportunitySchema, ContactSchema } from "./types";
import { createContact, createOpportunity } from "./admin.server";
import type { OpportunityType } from "@prisma/client";
import { UserRole } from "@prisma/client";

export const ContactAction: ActionFunction = async ({ request }) => {
  try {
    const { id } = await getUserPermissions(request, [
      UserRole.SUPER_ADMIN,
      UserRole.ADMIN,
      UserRole.SUB_ADMIN,
    ]);
    const form = await request.formData();

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const mobile = form.get("mobile") as string;
    const position = form.get("position") as string;
    const company = form.get("company") as string;
    const contactData = {
      name,
      email,
      mobile,
      position,
      company,
      addedById: id,
    };

    ContactSchema.parse(contactData);
    const contact = await createContact(contactData);
    return contact;
    // return { contact };
  } catch (e: any) {
    if (e.code === "P2002")
      throw new Response("Contact already exists", {
        status: 409,
      });
    throw new Response("Something went wrong", {
      status: 500,
    });
  }
};

export const AddOpportunityAction: ActionFunction = async ({ request }) => {
  const { id } = await getUserPermissions(request, [
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.SUB_ADMIN,
  ]);
  const form = await request.formData();

  const name = form.get("name") as string;
  const company = form.get("company") as string;
  const description = form.get("description") as string;
  const url = form.get("url") as string;
  const companyImage = form.get("companyImage") as string;
  const linkedin = form.get("linkedin") as string;
  const jobDesc = form.get("jobDesc") as string;
  const deadline = form.get("deadline") as string;
  const type = form.get("type") as OpportunityType;
  const isActive = form.get("isActive") as string;
  const streams = form.get("streams") as string;

  console.log(deadline);

  const opportunityData: any = {
    name,
    company,
    description,
    url,
    companyImage,
    linkedin,
    jobDesc,
    deadline: new Date(deadline),
    type,
    isActive: isActive === "true",
    streams: streams.split(",").map((s) => String(s)),
  };

  console.log(opportunityData);

  AddOpportunitySchema.parse(opportunityData);
  const opportunity = await createOpportunity(opportunityData, id);
  return opportunity;
};
