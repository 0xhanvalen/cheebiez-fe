import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Image } from "@chakra-ui/react";
import { SpinningGlobe } from "../components/SpinningGlobe/SpinningGlobe";

export default function Home() {
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
          }}
        >
          <SpinningGlobe />
        </Box>
      </Box>
    </>
  );
}
