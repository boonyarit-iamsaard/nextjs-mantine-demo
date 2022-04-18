import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { theme } from '../styles/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
