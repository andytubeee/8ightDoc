import 'tailwindcss/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import '../styles/index.css';
import useWindowSize from '../utils/useWindowSize';
import Head from 'next/head';
import { useEffect } from 'react';
import MobileWarning from '../components/MobileWarning';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  const size = useWindowSize();
  if (size.width < 700) {
    return <MobileWarning />;
  }
  return (
    <>
      <Head>
        <title>8ightDoc</title>
        <link rel='icon' href='/favicon.ico' />
        // Material Icons Link
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        // Font Awesome Link
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
