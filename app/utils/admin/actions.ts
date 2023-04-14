import { type ActionFunction } from "@remix-run/node";
import { getUserPermissions } from "../auth/auth.server";
import { ContactSchema } from "./types.server";
import { createContact } from "./admin.server";

export const ContactAction: ActionFunction = async ({ request }) => {
  const { id } = await getUserPermissions(request, ["ADMIN", "SUB_ADMIN"]);
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

  console.log(contactData);

  ContactSchema.parse(contactData);
  const contact = await createContact(contactData);
  return contact;
};
