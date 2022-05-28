import type {AppProps} from 'next/app';
import {ThemeProvider} from 'next-themes';
import {globalStyles} from '../styles/globalCss';
import {dark} from '../stitches.config';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: 'light',
        dark: dark.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
