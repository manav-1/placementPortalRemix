import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import Login from '~/components/auth/login';
import { LoginAction } from '~/utils/auth/actions.server';
import { getUser } from '~/utils/auth/auth.server';

export default function Index() {
  return <Login />;
}

export const loader: LoaderFunction = async ({ request }) =>
  // If there's already a user in the session, redirect to the home page
  (await getUser(request)) ? redirect('/dashboard/opportunities') : null;
export const action = LoginAction;

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: ' Login | Workhub',
    viewport: 'width=device-width,initial-scale=1',
  },
];
