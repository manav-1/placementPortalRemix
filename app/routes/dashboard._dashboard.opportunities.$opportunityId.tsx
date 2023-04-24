import { useRouteError } from "@remix-run/react";
import { ErrorPage } from "~/components/error";
import type { V2_MetaFunction } from "@remix-run/node";
import { ApplyForOpportunity } from "~/utils/opportunities/actions.server";
import { OpportunityIdLoader } from "~/components/dashboard/loaders/opportunity";

export const loader = OpportunityIdLoader;
export const action = ApplyForOpportunity;

export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Opportunities",
    viewport: "width=device-width,initial-scale=1",
  },
];
