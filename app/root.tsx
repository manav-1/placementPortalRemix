import type { V2_MetaFunction, LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { ColorScheme } from '@mantine/core';
import {
  MantineProvider,
  createEmotionCache,
  ColorSchemeProvider,
} from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { useContext } from 'react';
import { theme } from './theme';
import Snackbar, { SnackbarContext } from './components/landing/snackbar';

export const meta: V2_MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'Placement Portal',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap',
  },
];

createEmotionCache({ key: 'mantine' });

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const { isDisplayed } = useContext(SnackbarContext);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, ...theme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <html lang="en">
          <head>
            <StylesPlaceholder />
            <Meta />
            <Links />
          </head>
          <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            {isDisplayed && <Snackbar />}
          </body>
        </html>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
