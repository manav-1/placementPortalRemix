import { type LoaderFunction, redirect } from "@remix-run/node";
import Signup from "~/components/auth/register";
import { RegisterAction } from "~/utils/auth/actions";
import { getUser } from "~/utils/auth/auth.server";

export default function Index() {
  return <Signup />;
}

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/dashboard/opportunities") : null;
};

export const action = RegisterAction;
