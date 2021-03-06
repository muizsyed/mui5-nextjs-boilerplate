import Head from 'next/head';
import App from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import '../styles/globals.css';
import theme from '../styles/theme';
import Header from "@components/Header";
import Footer from '@components/Footer';

import getConfig from 'next/config';

const clientSideEmotionCache = createEmotionCache();
const { serverRuntimeConfig } = getConfig();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, appProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Mui5/NextJS Boilerplate</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        { !pageProps?.statusCode && <Header /> }
        <Component {...pageProps} />
        { !pageProps?.statusCode && <Footer {...appProps} /> }
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const initialProps = await App.getInitialProps(appContext);
  return { 
    ...initialProps,
    appProps: {
      version: serverRuntimeConfig.version,
      gitCommitHash: serverRuntimeConfig.gitCommitHash
    }
  }
}

export default MyApp;