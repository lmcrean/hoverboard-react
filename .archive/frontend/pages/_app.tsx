// This file is meant to be the main entry point for the application. It is the first file that is run when the app starts. It is also the file that is responsible for rendering the rest of the application. In this file, we are importing the CustomNavbar component and rendering it before the Component that is passed in as a prop. This is the correct way to render a Navbar component in Next.js 13+.

import '../app/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/Navbar/Navbar'; 
import HeroLanding from '../components/mainpage/HeroLanding/HeroLanding';
import '../app/base.css'
import '../app/variables.css'

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;