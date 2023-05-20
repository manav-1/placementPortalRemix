import Editor from '~/components/dashboard/editor.client';
import { ClientOnly } from 'remix-utils';
import { Title } from '@mantine/core';
import type { V2_MetaFunction } from '@remix-run/node';

export default function Emails() {
  return (
    <ClientOnly fallback={null}>
      {() => (
        <div className="App">
          <Title order={2} size="h1" mb="md" weight={900}>
            Email Template Editor
          </Title>
          <Editor />
        </div>
      )}
    </ClientOnly>
  );
}

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Email Editor',
    viewport: 'width=device-width,initial-scale=1',
  },
];
