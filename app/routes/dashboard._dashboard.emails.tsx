import Editor from '~/components/dashboard/editor.client';
import { ClientOnly } from 'remix-utils';
import type { V2_MetaFunction } from '@remix-run/node';
import { EditorLoader } from '~/components/dashboard/loaders/editor';
import { ErrorPage } from '~/components/error';
import { useRouteError } from '@remix-run/react';

export default function Emails() {
  return <ClientOnly fallback={null}>{() => <Editor />}</ClientOnly>;
}

export const loader = EditorLoader;

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Email Editor',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export function ErrorBoundary() {
  const { status, statusText, data } = useRouteError() as any;
  return <ErrorPage statusCode={status} message={statusText} name={data} />;
}
