import { Button, Flex, Group, Select, TextInput, Title } from '@mantine/core';
import type { EmailTemplates } from '@prisma/client';
import { useLoaderData } from '@remix-run/react';
import { useContext, useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import Snackbar, { SnackbarContext } from '../landing/snackbar';

function App() {
  const [templateName, setTemplateName] = useState<string>('');
  const [templateLoadName, setTemplateLoadName] = useState<string | null>('');
  const [error, setError] = useState<string | null>(null);
  const [errorLoading, setErrorLoading] = useState<string | null>(null);

  const emailEditorRef = useRef<any>(null);
  const { emailTemplates } = useLoaderData();
  const { isDisplayed, displayMsg } = useContext(SnackbarContext);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml(
      async (data: { design: any; html: any }) => {
        if (!templateName) {
          setError('Enter template name first');
          return;
        }
        const { design, html } = data;
        const templateData = await fetch('/college/templates', {
          method: 'POST',
          body: JSON.stringify({
            design,
            html,
            templateName,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const template = await templateData.json();
        if (template.url) displayMsg('Template saved successfully');
      },
    );
  };

  const loadHtml = async (name: string = '') => {
    if (!name && !templateLoadName) {
      setErrorLoading('Select template name first');
      return;
    }
    const template = await fetch(`${templateLoadName || name}.json`).then(
      (res) => res.json(),
    );
    if (template) {
      emailEditorRef.current.editor.loadDesign(JSON.parse(template));
    }
  };

  return (
    <>
      <Title order={2} size="h1" mb="md" weight={900}>
        Email Template Editor
      </Title>
      <Flex justify="space-between" align="center">
        <Group>
          <TextInput
            placeholder="Enter Template Name"
            value={templateName}
            onChange={(event) => setTemplateName(event.target.value)}
            error={error}
          />
          <Button my="md" onClick={exportHtml}>
            Save Template
          </Button>
        </Group>
        <Group>
          <Select
            searchable
            data={emailTemplates.map((emailTemplate: EmailTemplates) => ({
              label: emailTemplate.name,
              value: emailTemplate.url,
            }))}
            error={errorLoading}
            placeholder="Select Template Name"
            value={templateLoadName}
            onChange={(value) => setTemplateLoadName(value)}
          />
          <Button my="md" onClick={() => loadHtml()}>
            Load Template
          </Button>
        </Group>
      </Flex>

      <EmailEditor
        appearance={{ panels: { tools: { dock: 'left' } } }}
        ref={emailEditorRef}
        minHeight="80vmin"
      />
      {isDisplayed && <Snackbar />}
    </>
  );
}

export default App;
