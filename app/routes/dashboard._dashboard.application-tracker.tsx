import type { V2_MetaFunction } from '@remix-run/node';
import { useRouteError } from '@remix-run/react';
import AppliedOpportunities from '~/components/dashboard/applied-opportunities';
import { AppliedOpportunityLoader } from '~/components/dashboard/loaders/applied-opportunities';
import { ErrorPage } from '~/components/error';

export default function AddOpportunity() {
  return <AppliedOpportunities />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Application Tracker',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const loader = AppliedOpportunityLoader;
export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}
