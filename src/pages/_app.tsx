import type {AppProps} from 'next/app';
import {ColorProvider} from '../context/ColorContext';
import {globalStyles} from '../styles/globalCss';

function MyApp({Component, pageProps}: AppProps) {
  globalStyles();
  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default MyApp;
