import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import Profile from "~/components/dashboard/profile";
import { ProfileLoader } from "~/components/dashboard/loaders/profile";
import { ProfileAction } from "~/utils/user/actions.server";

export default function AddOpportunity() {
  return <Profile />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Profile",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const loader: LoaderFunction = ProfileLoader;
export const action: ActionFunction = ProfileAction;
