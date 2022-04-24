import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Image } from "@chakra-ui/react";
import { useWallet, useENS } from "@raidguild/quiver";
import { SpinningGlobe } from "../components/SpinningGlobe/SpinningGlobe";
import styles from "../styles/Home.module.scss";
import { formatAddress } from "../utils/methods";

export default function Home() {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();
    useEffect(() => {
      
      console.log(address);
    }, [address])
    const {ens, avatar, loading} = useENS({address});
  const isMinting = false;
  return (
    <>
      <Head>
        <title>COMING SOON | Cheebiez</title>
      </Head>
      <Box sx={{ backgroundColor: `#2595e3` }}>
        <Box
          sx={{
            background: `rgb(32,74,166)`,
            background: `linear-gradient(180deg, rgba(32,74,166,1) 0%, rgba(32,74,166,0) 100%)`,
            minHeight: `100vh`,
            position: `relative`,
          }}
        >
          <SpinningGlobe />
          <Box className={styles.nav}>
            {!isConnected && (
              <Image
                src="/images/connect.png"
                alt=""
                className={styles.connectButton}
                onClick={() => connectWallet()}
              />
            )}
            {address && (
              <Box className={styles.userAddress} onClick={() => disconnect()}>
                {ens || formatAddress(address)}
              </Box>
            )}
            <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
              <Image
                src="/images/Social_Discord.png"
                alt=""
                className={styles.socialButton}
              />
              <Image
                src="/images/Social_Instagram.png"
                alt=""
                className={styles.socialButton}
              />
              <Image
                src="/images/Social_Twitter.png"
                alt=""
                className={styles.socialButton}
              />
              {isMinting && (
                <Image
                  src="/images/MINT.png"
                  alt=""
                  className={styles.mintButton}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
