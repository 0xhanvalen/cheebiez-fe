import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Image } from "@chakra-ui/react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RandomCheeb } from "../components/RandomCheeb";
import { useRouter } from "next/router";

export default function Home() {
  const [vw, setVW] = useState(1920);
  const [vh, setVH] = useState(1080);

  const router = useRouter();

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };

  useEffect(() => {
    setVW(window?.innerWidth);
    setVH(window?.innerHeight);
  }, []);

  const { x, y } = useMousePosition();

  return (
    <>
      <Head>
        <title>COMING SOON | Cheebiez</title>
      </Head>
      <Box
        sx={{
          width: `100vw`,
          minHeight: `100vh`,
          backgroundImage: `/images/Cheebz_Website_Background.png`,
          overflow: `hidden`,
        }}
      >
        <Image
          src="/images/Cheebz_Website_Stars1.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
            transform: `translateX(${(x - vw / 2) / 100}px) translateY(${
              (y - vh / 2) / 100
            }px)`,
          }}
        />
        <Image
          src="/images/Cheebz_Website_TwinklingStars.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
            transform: `translateX(${(x - vw / 2) / 80}px) translateY(${
              (y - vh / 2) / 80
            }px)`,
          }}
        />
        <Image
          src="/images/Cheebz_Website_Cheebiez.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
            transform: `translateX(${(x - vw / 2) / 60}px) translateY(${
              (y - vh / 2) / 60
            }px)`,
          }}
        />
        <Image
          src="/images/Cheebz_Website_globe.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
            transform: `scale(1.05) rotate(${
              x * ((2 * 360) / vw)
            }deg) translateX(${(x - vw / 2) / 55}px) translateY(${
              (y - vh / 2) / 55
            }px)`,
          }}
        />
        <Image
          src="/images/Cheebz_Website_Logo.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
            left: `0`,
            transform: `translateX(${-(x - vw / 2) / 30}px) translateY(${
              -(y - vh / 2) / 30
            }px)`,
          }}
        />
        <Image
          src="/images/Cheebz_Website_ComingSoon.png"
          sx={{
            display: [`none`, `block`],
            width: `100vw`,
            height: `100vh`,
            position: `absolute`,
            overflow: `hidden`,
          }}
        />
        <Box
          sx={{
            position: `absolute`,
            bottom: `0`,
            right: `0`,
            color: `pink`,
            fontSize: `2.5rem`,
            display: `flex`,
            gap: `1em`,
            padding: `1ex 1em`,
          }}
        >
          <Box _hover={{ cursor: `pointer` }}>
            <FaDiscord
              onClick={() => router.push("https://discord.gg/cheebiez")}
            />
          </Box>
          <Box _hover={{ cursor: `pointer` }}>
            <FaTwitter
              onClick={() => router.push("https://twitter.com/CheebieVerse")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: [`flex`, `none`],
            flexDirection: `column`,
            alignItems: `center`,
            width: `100vw`,
            height: `100vh`,
            justifyContent: `space-between`,
          }}
        >
          <Box
            sx={{
              display: `grid`,
              placeItems: `center`,
              width: `100vw`,
              height: `50vh`,
              color: `white`,
            }}
          >
            <Image
              src="/images/Cheebz_Website_Cheebiez.png"
              sx={{ width: `100vw`, position: `absolute`, overflow: `hidden` }}
            />
            <Image
              src="/images/Cheebz_Website_globe.png"
              sx={{ width: `100vw`, position: `absolute`, overflow: `hidden` }}
            />
            <Image
              src="/images/Cheebz_Website_Logo.png"
              sx={{ width: `100vw`, position: `absolute`, overflow: `hidden` }}
            />
          </Box>
          <Box>
            <RandomCheeb />
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{position: `absolute`, backgroundColor: `white`, color: `black`, padding: `1ex 1em`, border: `3px solid black`, left: `0`, top: `0`}}>{x}, {y}</Box> */}
    </>
  );
}
