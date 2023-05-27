import { redirect, type LoaderFunction } from '@remix-run/node';
import { getUser } from '~/utils/auth/auth.server';

export const dashboardLoader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) {
    return redirect('/login');
  }
  return user;
};
