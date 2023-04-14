import type { V2_MetaFunction } from "@remix-run/node";
import AppliedOpportunities from "~/components/dashboard/applied-opportunities";

export default function AddOpportunity() {
  return <AppliedOpportunities />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Application Tracker",
    viewport: "width=device-width,initial-scale=1",
  },
];
