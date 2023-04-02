import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { ClientProvider } from "@mantine/remix";
import { startTransition } from "react";

startTransition(() => {
  hydrateRoot(
    document,
    <ClientProvider>
      <RemixBrowser />
    </ClientProvider>
  );
});
