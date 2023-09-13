import FooterComponent from '@/components/Footer';
import { StateContext } from '@/context/StateContext';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";

import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  return <StateContext>
    <Component {...pageProps} />
    <FooterComponent />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      crossOrigin="anonymous"
    />
  </StateContext>
}
