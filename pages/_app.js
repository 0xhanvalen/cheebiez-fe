import "../styles/globals.css";
import Head from 'next/head';
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";
import { ChakraProvider } from "@chakra-ui/react";

function Cheebiez({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <InjectedProviderFC>
        <Head>
          <link rel="icon" type="image/png" href="/images/Apple_Favicon.png"/>
        </Head>
      <Component {...pageProps} />
      </InjectedProviderFC>
    </ChakraProvider>
  );
}

export default Cheebiez;
