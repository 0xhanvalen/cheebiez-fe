import { Box, Image, keyframes } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import styles from "./SpinningGlobe.module.scss";

export const SpinningGlobe = () => {
  const globeSpinKeyframes = keyframes`
   0% { transform: rotate(0deg);}
   100% { transform: rotate(360deg);}
   `;

  const globeSpinAnimation = `${globeSpinKeyframes} 20s linear infinite`;

  const lineArtSpinKeyframes = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(-360deg);}
  `;

 const lineArtSpinAnimation = `${lineArtSpinKeyframes} 60s linear infinite`;

  return (
    <>
      <Box className={styles.container}>
        <Image
        as={motion.img}
        animation={lineArtSpinAnimation}
          className={styles.lineArt}
          src="/images/GlobeAssets/GlobeLineArt.png"
          alt=""
          draggable="false"
        />
        <Image
          as={motion.img}
          animation={globeSpinAnimation}
          className={styles.globe}
          src="/images/GlobeAssets/Globe.png"
          alt=""
        />
        <Image
          className={styles.highlight}
          src="/images/GlobeAssets/Highlight.png"
          alt=""
        />
        <Image
          className={styles.shadow}
          src="/images/GlobeAssets/Shadow.png"
          alt=""
        />
        <Image
          as={motion.img}
          animation={globeSpinAnimation}
          className={styles.globe}
          src="/images/GlobeAssets/GlobeOutline.png"
          alt=""
        />
      </Box>
    </>
  );
};
