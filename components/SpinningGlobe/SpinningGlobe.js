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
          src="/Images/GlobeAssets/GlobeLineArt.png"
          alt=""
          draggable="false"
        />
        <Image
          as={motion.img}
          animation={globeSpinAnimation}
          className={styles.globe}
          src="/Images/GlobeAssets/Globe.png"
          alt=""
        />
        <Image
          className={styles.highlight}
          src="/Images/GlobeAssets/Highlight.png"
          alt=""
        />
        <Image
          className={styles.shadow}
          src="/Images/GlobeAssets/Shadow.png"
          alt=""
        />
        <Image
          as={motion.img}
          animation={globeSpinAnimation}
          className={styles.globe}
          src="/Images/GlobeAssets/GlobeOutline.png"
          alt=""
        />
      </Box>
    </>
  );
};
