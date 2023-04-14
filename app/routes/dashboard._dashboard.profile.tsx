import type { V2_MetaFunction } from "@remix-run/node";
import Profile from "~/components/dashboard/profile";

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
