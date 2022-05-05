import styles from "./RednewsMarquee.module.scss";
import { Box, Image, Heading, Text, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const RedNewsMarquee = (props) => {
  const newsStories = [
    "Several awkward cheebiez went viral after being stuck on Mt. St.Helen's summit",
    "New 'Fairy War' Live Action Roleplay company to launch first event tomorrow",
    "Extremely odd wrought iron door recently discovered at Tribeca Nuclear still unopened",
    "Local man caught on video getting engaged in airport",
    "Cheebstranaut Chris Cheebfield recently turned 47 on the Cheebie Space Station",
    "Several awkward cheebiez went viral after being stuck on Mt. St.Helen's summit",
    "New 'Fairy War' Live Action Roleplay company to launch first event tomorrow",
    "Extremely odd wrought iron door recently discovered at Tribeca Nuclear still unopened",
    "Local man caught on video getting engaged in airport",
    "Cheebstranaut Chris Cheebfield recently turned 47 on the Cheebie Space Station",
  ];

  const newsStoryKeyframes = keyframes`
    0% { transform: translateX(0px);}
    100% { transform: translateX(-50%);}
    `;

  const newsStorynimation = `${newsStoryKeyframes} 40s linear infinite`;

  return (
    <Box className={styles.container}>
      <h3 className={styles.headline}>BREAKING</h3>
      <div className={styles.marqueeContainer}>
        <Box
          as={motion.div}
          animation={newsStorynimation}
          className={styles.marqueeContainerInner}
        >
          {newsStories.map((story, index) => {
            return (
              <>
                <p key={`stories-${index}`}>{story}</p>
                <p key={`pipe-${index}`}>|</p>
              </>
            );
          })}
        </Box>
      </div>
    </Box>
  );
};
