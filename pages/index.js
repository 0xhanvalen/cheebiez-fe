import Head from 'next/head'
import {Box, Image} from '@chakra-ui/react';
import { RandomCheeb } from '../components/RandomCheeb';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheebiez</title>
      </Head>
      <Box sx={{width: `100vw`, minHeight: `100vh`, backgroundColor: `#FFE3E4`, backgroundImage: `/images/BG.png`}}>
        <Image sx={{display: [`none`, `block`], position: `absolute`, top: `50%`, left: `50%`, width: `100vw`, height: `100vh`, transform: `translate(-50%, -50%)`}} src="/images/Border.png" alt="The Cheebiez Themselves"/>
        <Image sx={{position: `absolute`, top: `50%`, left: `50%`, maxWidth: [`90%`, `33vw`], maxHeight: `33vh`, transform: `translate(-50%, -50%)`}} src="/images/Cheebs-logo.png" alt="Cheebiez"/>
        <Box sx={{display: [`block`, `none`], position: `absolute`, bottom: `0`, left: `50%`, transform: `translateX(-50%)`}}>
          <RandomCheeb />
        </Box>
      </Box>
    </>
  )
}
