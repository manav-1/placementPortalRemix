// app/routes/logout.ts
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { logout } from '~/utils/auth/auth.server';

export const action: ActionFunction = async ({ request }) => logout(request);
export const loader: LoaderFunction = async ({ request }) => logout(request);
