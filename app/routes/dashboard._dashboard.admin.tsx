import type { V2_MetaFunction } from '@remix-run/node';
import Admin from '~/components/dashboard/admin';
import { AdminLoader } from '~/components/dashboard/loaders/admin';

export default function DashboardAddUsers() {
  return <Admin />;
}

export const loader = AdminLoader;

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Admin Dashboard',
    viewport: 'width=device-width,initial-scale=1',
  },
];
