import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";
import { useWallet, useENS } from "@raidguild/quiver";
import { formatAddress } from "../utils/methods";
import { SpinningGlobe } from "../components/SpinningGlobe/SpinningGlobe";
import { RedNewsMarquee } from "../components/RedNewsMarquee/RedNewsMarquee";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { connectWallet, isConnecting, isConnected, disconnect, address } =
    useWallet();
  useEffect(() => {
    console.log(address);
  }, [address]);
  const { ens, avatar, loading: loadingENS } = useENS({ address });
  const isMinting = false;

  return (
    <>
      <Head>
        <title>COMING SOON | Cheebiez</title>
      </Head>
      <Box sx={{ backgroundColor: `#2595e3`, }}>
        <Box
          name="hero"
          sx={{
            background: `rgb(32,74,166)`,
            background: `linear-gradient(180deg, rgba(32,74,166,1) 0%, rgba(32,74,166,0) 100%)`,
            position: `relative`,
          }}
          className={styles.heroContainer}
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
                {(loadingENS && "Loading ENS") || ens || formatAddress(address)}
              </Box>
            )}
            <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
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
              {isMinting && (
                <Image
                  src="/images/MINT.png"
                  alt=""
                  className={styles.mintButton}
                />
              )}
            </Box>
          </Box>
          <Image
            src="/images/Cheebz_Website_Logo.png"
            alt="CHEEBIEZ"
            className={styles.siteLogo}
          />
          <RedNewsMarquee />
        </Box>
        <Box
          name="enter the cheebieverse"
          sx={{
            height: `100vh`,
            width: `100vw`,
          }}
        >
          <Box className={styles.enterCheebieverseGrid}>
            <Box>
              <h2 className={styles.cheebieverseHeadline}>
                ENTER THE CHEEBIEVERSE
              </h2>
              <p className={styles.cheebieverseContent}>
                Cheebiez live in an alternate blockchain universe that mirrors
                our own except cuter, smaller, and more mischievous. Despite the
                chaos of their world, Cheebiez always know how to have a good
                time. Partying and gaming are their two most popular activities,
                and they take having fun very seriously.
              </p>
            </Box>
            <Box>
              <Image
                src="/images/CheebieApple.png"
                alt="A cheebie apple"
                className={styles.cheebieApple}
              />
            </Box>
          </Box>
        </Box>
        <br />
        <Image
          src="/images/CLOUD1.png"
          alt=""
          sx={{
            position: `absolute`,
            right: `0`,
            transform: `translateY(-25%)`,
          }}
          className={styles.cloudOne}
        />
        <br />
        <Box
          name="what are cheebiez"
          sx={{
            height: `100vh`,
            width: `100vw`,
          }}
        >
          <Box className={styles.enterCheebieverseGrid}>
            <Box>
              <Image
                src="/images/CheebieAugustus.png"
                alt="A cheebie augusts ceaser"
                className={styles.cheebieAugustus}
              />
            </Box>
            <Box>
              <h2 className={styles.whatAreCheebiezHeadline}>
                WHAT ARE CHEEBIEZ?
              </h2>
              <p className={styles.whatAreCheebiezContent}>
                Perhaps the better question is, what aren&apos;t Cheebiez?
                <br /> They&apos;re everything and anything you can imagine.
                Their world is full of fun surprises, and a variety of species
                and characters. They have a common belief that life is meant to
                be lived to the fullest, at all times. Once reaching adulthood,
                Cheebiez no longer age, and if they can avoid any accidents can
                technically live forever.
              </p>
            </Box>
          </Box>
        </Box>
        <br />
        <Image
          src="/images/Cloud2.png"
          alt=""
          sx={{
            position: `absolute`,
            left: `0`,
            transform: `translateY(-25%)`,
          }}
          className={styles.cloudTwo}
        />
        <Image
          src="/images/Cloud3.png"
          alt=""
          sx={{
            position: `absolute`,
            right: `0`,
            transform: `translateY(-25%)`,
          }}
          className={styles.cloudThree}
        />
        <br />
        <br />
        <br />
        <br />
        <Box
          name="team"
          sx={{
            height: `100vh`,
            width: `100vw`,
          }}
        >
          <Box className={styles.teamContainerGrid}>
            <Box
              sx={{
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                gap: `.5rem`,
              }}
            >
              <h2 className={styles.teamHeadline}>Who&apos;s The Team?</h2>
              <br />
              <h3 className={styles.projectLeadHeadline}>Jisu</h3>
              <Image
                src="/images/TeamIcons/Jisu.png"
                alt="JISU!!!!"
                className={styles.projectLeadIcon}
              />
              <h4 className={styles.projectLeadRole}>creator</h4>
            </Box>
            <Box className={styles.teamGrid}>
              <TeamMember
                name="Dinfo"
                role="founder"
                src="/images/TeamIcons/Dinfo.png"
              />
              <TeamMember
                name="Pooky"
                role="biz Ops"
                src="/images/TeamIcons/Pooky.png"
              />
              <TeamMember
                name="Ofu"
                role="community"
                src="/images/TeamIcons/Ofu.png"
              />
              <TeamMember
                name="han valen"
                role="developer"
                src="/images/TeamIcons/Han.png"
              />
              <TeamMember
                name="degeneroach"
                role="pm"
                src="/images/TeamIcons/Degeneroach.png"
              />
              <TeamMember
                name="wongstongs"
                role="marketing"
                src="/images/TeamIcons/Wongs.png"
              />
              <TeamMember
                name="photonic"
                role="community lead"
                src="/images/TeamIcons/Photonic.png"
              />
              <TeamMember
                name="kyle"
                role="smart contracts"
                src="/images/TeamIcons/Kyle.png"
              />
              <TeamMember
                name="tarolg"
                role="da whale"
                src="/images/TeamIcons/Tarolg.png"
              />
            </Box>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <Box name="roadmap" className={styles.roadmapContainer}>
          <Image
            src="/images/breaking_news_button.png"
            alt="Breaking News"
            sx={{
              position: `absolute`,
              width: `600px`,
              transform: `translateY(-50%)`,
            }}
          />
          <Image
            src="/images/ReporterBee.png"
            alt="Newzy Bee"
            sx={{
              position: `absolute`,
              width: `500px`,
              bottom: `0`,
              right: `0`,
              transform: `translateY(-15%)`,
            }}
          />
          <Image
            src="/images/news_desk.png"
            alt="Newzy Bee's Desk"
            sx={{
              position: `absolute`,
              width: `800px`,
              bottom: `0`,
              right: `0`,
            }}
          />
          <Image
            src="/images/news_desk.png"
            alt="Newzy Bee's Desk"
            sx={{
              position: `absolute`,
              width: `800px`,
              bottom: `0`,
              right: `0`,
            }}
          />
          <Box className={styles.roadmapInnerGrid}>
            <Box className={styles.roadmapItems}>
              <Image
                src="/images/questionMarkBubble.png"
                alt="?"
                sx={{ maxWidth: `300px` }}
              />
              <Box className={styles.roadmapSmallItems}>
                <Image
                  src="/images/questionMarkBubbleSmall.png"
                  alt="?"
                  sx={{ maxWidth: `100px` }}
                />
                <Image
                  src="/images/questionMarkBubbleSmall.png"
                  alt="?"
                  sx={{ maxWidth: `100px` }}
                />
                <Image
                  src="/images/questionMarkBubbleSmall.png"
                  alt="?"
                  sx={{ maxWidth: `100px` }}
                />
              </Box>
            </Box>
            <Box className={styles.roadMapContent}>
              <h3>ROADMAP</h3>
              <p>
                Cheebiez are notoriously impuslive and aren't exactly the best
                planners - but their mischief always means fun!
              </p>
              <h4>What could happen next?</h4>
              <br />
            </Box>
          </Box>
        </Box>
        <Box name="mint-garden" className={styles.mintGarden}>
          <Image
            src="/images/MintSun.png"
            alt="The Sun"
            className={styles.mintSun}
          />
          <Image
            src="/images/clouds.png"
            alt="Clouds"
            className={styles.mintClouds}
          />
          <Image
            src="/images/FooterBush.png"
            alt="An applie bush"
            className={styles.mintBush}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

const TeamMember = (props) => {
  return (
    <Box className={styles.teamMemberCard}>
      <h2 className={styles.teamMemberName}>{props?.name}</h2>
      <Image
        src={props?.src}
        alt={`${props?.name}!!!!`}
        className={styles?.teamMemberImage}
      />
      <h3 className={styles.teamMemberRole}>{props?.role}</h3>
    </Box>
  );
};
