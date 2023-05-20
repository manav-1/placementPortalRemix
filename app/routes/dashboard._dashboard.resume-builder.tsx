import type { V2_MetaFunction } from '@remix-run/node';

export default function DashboardProfile() {
  return <h1 style={{ textAlign: 'center' }}>Coming Soon</h1>;
}

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Resume Builder',
    viewport: 'width=device-width,initial-scale=1',
  },
];
