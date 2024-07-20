import '@/app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/Navbar/Navbar.module.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;