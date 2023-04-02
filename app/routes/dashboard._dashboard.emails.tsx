import Editor from "~/components/dashboard/editor.client";
import { ClientOnly } from "remix-utils";
import { Title } from "@mantine/core";

export default function Emails() {
  return (
    <ClientOnly fallback={null}>
      {() => (
        <div className="App">
          <Title
            order={2}
            size="h1"
            mb="md"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            })}
            weight={900}
          >
            Email Template Editor
          </Title>
          <Editor />
        </div>
      )}
    </ClientOnly>
  );
}
