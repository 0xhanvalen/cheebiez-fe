import { Box, Image, keyframes } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import styles from "./SpinningGlobe.module.scss";

export const SpinningGlobe = () => {
  const globeSpinKeyframes = keyframes`
   0% { transform: rotate(0deg);}
   100% { transform: rotate(-360deg);}
   `;

  const globeSpinAnimation = `${globeSpinKeyframes} 20s linear infinite`;

  const lineArtSpinKeyframes = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
  `;

  const cheebiezSpin = keyframes`
  0% { transform: rotate(0deg);}
  50% { transform: translateX(-15px) rotate(180deg);}
  100% { transform: rotate(360deg);}
  `;

  const lineArtSpinAnimation = `${lineArtSpinKeyframes} 60s linear infinite`;
  const cloudsSpinAnimation = `${lineArtSpinKeyframes} 80s linear infinite`;
  const CheebiezAnimation = `${cheebiezSpin} 15s linear infinite`;

  return (
    <>
      <Box className={styles.container} draggable="false">
        <Image
          as={motion.img}
          animation={cloudsSpinAnimation}
          className={styles.clouds}
          src="/images/GlobeAssets/Clouds-01.png"
          alt=""
          draggable="false"
        />
        <Image
          as={motion.img}
          animation={lineArtSpinAnimation}
          className={styles.buildings}
          src="/images/GlobeAssets/Buildings-01.png"
          alt=""
          draggable="false"
        />
        <Image
          className={styles.atmosphere}
          src="/images/GlobeAssets/Atmospheric_Perspective-01.png"
          alt=""
          draggable="false"
        />
        <Image
          as={motion.img}
          animation={CheebiezAnimation}
          className={styles.cheebiez}
          src="/images/GlobeAssets/Cheebiez-01.png"
          alt=""
          draggable="false"
        />
        <Image
          as={motion.img}
          animation={globeSpinAnimation}
          className={styles.globe}
          src="/images/GlobeAssets/Globe-01.png"
          alt=""
          draggable="false"
        />
        <Image
          className={styles.highlight}
          src="/images/GlobeAssets/Highlight-01.png"
          alt=""
          draggable="false"
        />
        <Image
          className={styles.shadow}
          src="/images/GlobeAssets/Shadow-01.png"
          alt=""
          draggable="false"
        />
        <Image
          className={styles.globe}
          src="/images/GlobeAssets/Lineart-01.png"
          alt=""
          draggable="false"
        />
        <Image
          className={styles.siteLogo}
          src="/images/GlobeAssets/Logo-01.png"
          alt=""
          draggable="false"
        />
      </Box>
    </>
  );
};
