import Head from 'next/head';
import { AppProps } from 'next/app';
import { Container, MantineProvider } from '@mantine/core';

import AppHeader from '../components/AppHeader';
import { theme } from '../styles/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const links: { link: string; label: string }[] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Head>
        <title>Next.js with Mantine</title>
      </Head>
      <AppHeader links={links} />
      <Container>
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  );
}
