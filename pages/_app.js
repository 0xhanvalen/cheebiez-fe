import "../styles/globals.css";
import Head from 'next/head';
import { InjectedProviderFC } from "../contexts/InjectedProviderContext";
import { EthersContextFC } from "../contexts/EthersContext";
import { ChakraProvider } from "@chakra-ui/react";

function Cheebiez({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <EthersContextFC>
        <Head>
          <link rel="icon" type="image/png" href="/images/Apple_Favicon.png"/>
        </Head>
      <Component {...pageProps} />
      </EthersContextFC>
    </ChakraProvider>
  );
}

export default Cheebiez;
