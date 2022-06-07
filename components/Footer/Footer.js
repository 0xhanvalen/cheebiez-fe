import { Box, Image } from "@chakra-ui/react";
import Link from 'next/link';
import styles from "./Footer.module.scss";

export const Footer = (props) => {
  return (
    <Box className={styles.footerContainer}>
      <Image
        src="/images/Cheebz_Website_Logo.png"
        alt="CHEEBIEZ"
        className={styles.footerLogo}
      />
      <Box className={styles.socialRow}>
        <Box onClick={props?.scrollToFaq}>
          FAQ
        </Box>
        <Link href="/tos">
          <a>Terms of Service</a>
        </Link>
        <Link href="https://discord.gg/cheebiez">
          <a>
            <Image
              src="/images/Social_Discord.png"
              alt=""
              className={styles.socialButton}
            />
          </a>
        </Link>
        <Link href="https://twitter.com/CheebieVerse">
          <a>
            <Image
              src="/images/Social_Twitter.png"
              alt=""
              className={styles.socialButton}
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
};
