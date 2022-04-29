import "../styles/globals.css";
import { NetworkConfig, WalletProvider } from '@raidguild/quiver'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';

const SUPPORTED_NETWORKS = {
  '0x1': {
    chainId: '0x1',
    name: 'Mainnet',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpc: `https://mainnet.infura.io/v3/${process.env.INFURA_PID}`,
  },
  '0x4': {
    chainId: '0x4',
    name: 'Rinkeby',
    symbol: 'ETH',
    explorer: 'https://rinkeby.etherscan.io',
    rpc: `https://rinkeby.infura.io/v3/${process.env.INFURA_PID}`,
  },
  '0x64': {
    chainId: '0x64',
    name: 'Gnosis',
    symbol: 'xDai',
    explorer: 'https://blockscout.com/xdai/mainnet/',
    rpc: 'https://rpc.xdaichain.com/',
  }
}

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: SUPPORTED_NETWORKS['0x1'].rpc,
        4: SUPPORTED_NETWORKS['0x4'].rpc,
        100: SUPPORTED_NETWORKS['0x64'].rpc,
      }
    }
  }
}

const web3modalOptions = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <WalletProvider 
      web3modalOptions={web3modalOptions}
      networks={SUPPORTED_NETWORKS}
      defaultChainID={"0x1"}
      handleModalEvents={(eventName, error) => {
        if (error) {
          console.error("Error: ", error.message);
        }
        console.log({eventName});
      }}
      >
        <Head>
          <link rel="icon" type="image/png" href="/images/CheebieApple.png"/>
        </Head>
      <Component {...pageProps} />
      </WalletProvider>
    </ChakraProvider>
  );
}

export default MyApp;
