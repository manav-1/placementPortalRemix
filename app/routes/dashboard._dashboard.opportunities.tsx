import { useRouteError } from "@remix-run/react";
import Opportunities from "~/components/dashboard/opportunity";
import { ErrorPage } from "~/components/error";
import { OpportunityLoader } from "~/components/dashboard/loaders/opportunities";

export default function DashboardOpportunities() {
  return <Opportunities />;
}

export const loader = OpportunityLoader;

export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}
