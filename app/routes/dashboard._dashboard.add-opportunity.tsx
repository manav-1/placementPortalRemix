import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from '@remix-run/node';
import { useRouteError } from '@remix-run/react';
import AddOpp from '~/components/dashboard/add-opportunity';
import { StreamsLoader } from '~/components/dashboard/loaders/add-opportunity';
import { ErrorPage } from '~/components/error';
import { AddOpportunityAction } from '~/utils/admin/actions.server';

export default function AddOpportunity() {
  return <AddOpp />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Add Opportunity',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const loader: LoaderFunction = StreamsLoader;

export const action: ActionFunction = AddOpportunityAction;

export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}
