import type { V2_MetaFunction } from "@remix-run/node";
import AddOpp from "~/components/dashboard/add-opportunity";

export default function AddOpportunity() {
  return <AddOpp />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Add Opportunity",
    viewport: "width=device-width,initial-scale=1",
  },
];
