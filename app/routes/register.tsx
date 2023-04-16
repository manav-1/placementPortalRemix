import {
  type LoaderFunction,
  redirect,
  type V2_MetaFunction,
} from "@remix-run/node";
import Signup from "~/components/auth/register";
import { RegisterAction } from "~/utils/auth/actions.server";
import { getUser } from "~/utils/auth/auth.server";

export default function Index() {
  return <Signup />;
}

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/dashboard/opportunities") : null;
};

export const action = RegisterAction;

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Register | Workhub",
    viewport: "width=device-width,initial-scale=1",
  },
];
