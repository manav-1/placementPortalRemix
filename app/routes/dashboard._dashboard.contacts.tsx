import type { V2_MetaFunction } from "@remix-run/node";
import Contacts from "~/components/dashboard/contacts";
import { contactsLoader } from "~/components/dashboard/loaders/contacts";
import { ContactAction } from "~/utils/admin/actions";

export default function DashboardContacts() {
  return <Contacts />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Contacts",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader = contactsLoader;
export const action = ContactAction;
