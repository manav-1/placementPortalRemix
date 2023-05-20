import type { LoaderFunction } from '@remix-run/node';
import { AdminOpportunityLoader } from '~/components/dashboard/loaders/admin';

export const loader: LoaderFunction = AdminOpportunityLoader;
