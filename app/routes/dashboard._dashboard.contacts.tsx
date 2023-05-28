import type { V2_MetaFunction } from '@remix-run/node';
import { useRouteError } from '@remix-run/react';
import Contacts from '~/components/dashboard/contacts';
import { contactsLoader } from '~/components/dashboard/loaders/contacts';
import { ErrorPage } from '~/components/error';
import { ContactAction } from '~/utils/admin/actions.server';

export default function DashboardContacts() {
  return <Contacts />;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Contacts',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const loader = contactsLoader;
export const action = ContactAction;

export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}
