import '@fontsource/ubuntu';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApplicationProvider } from '../context/application';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider>
      <div className="max-w-md mx-auto ">
        <NextNprogress />
        <Component {...pageProps} />
      </div>
    </ApplicationProvider>
  );
}

export default MyApp;
