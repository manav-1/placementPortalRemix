import { redirect, type LoaderFunction } from '@remix-run/node';

export const ProjectLoader: LoaderFunction = async () =>
  redirect('/dashboard/profile');
