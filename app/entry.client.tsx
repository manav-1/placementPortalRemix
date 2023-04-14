import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { ClientProvider } from "@mantine/remix";
import { SnackBarContextProvider } from "./components/landing/snackbar";

hydrate(
  <ClientProvider>
    <SnackBarContextProvider>
      <RemixBrowser />
    </SnackBarContextProvider>
  </ClientProvider>,
  document
);
