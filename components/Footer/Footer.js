import {Box, Image} from '@chakra-ui/react';
import styles from './Footer.module.scss';


export const Footer = (props) => {

    return (
        <Box className={styles.footerContainer}>
            <Image src="/images/Cheebz_Website_Logo.png" alt="CHEEBIEZ" className={styles.footerLogo} />
            <Box className={styles.socialRow}>
                <Image src="/images/Social_Twitter.png" alt="Twitter" />
                <Image src="/images/Social_Instagram.png" alt="Instagram" />
                <Image src="/images/Social_Discord.png" alt="Discord" />
            </Box>
        </Box>
    )
}