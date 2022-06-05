import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";
import { SpinningGlobe } from "../components/SpinningGlobe/SpinningGlobe";
import { RedNewsMarquee } from "../components/RedNewsMarquee/RedNewsMarquee";
import { Footer } from "../components/Footer/Footer";
import { useEthersContext } from "../contexts/EthersContext";
import { formatAddress } from "../utils/methods";
import { CheebiezContract } from "../utils/contract";
import styles from "../styles/Home.module.scss";
import { ethers } from "ethers";

export default function Home() {
  const {
    isUpdating,
    connectApp,
    disconnectApp,
    provider,
    signer,
    address,
    web3Modal,
    ens,
  } = useEthersContext();
  const [contract, setContract] = useState(null);
  const [price, setPrice] = useState(null);
  const [mintAmount, setMintAmount] = useState(1);
  const [isCheeblist, setIsCheeblist] = useState(false);
  const [cheeblistProof, setCheebListProof] = useState(null);
  const [isCheeblistRedeemed, setIsCheeblistRedeemed] = useState(false);
  const [cheeblistAmount, setCheeblistAmount] = useState(1);

  const isMinting = true;
  const [isMintingModalOpen, setIsMintingModalOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      if (provider && signer) {
        const tempContract = await CheebiezContract(provider, signer);
        setContract(tempContract);
      }
    }
    getData();
  }, [provider, signer]);

  async function getCheeblist(addressToCheck) {
    const stringedAddress = JSON.stringify({ address: addressToCheck });
    const req = {
      method: "POST",
      body: stringedAddress,
    };
    const res = await fetch("/api/merkle", req);
    const jsonres = await res.json();
    console.log(jsonres);
    setIsCheeblist(jsonres?.isCheeblist);
    setCheebListProof(jsonres?.cheeblist?.hexProof);
  }

  useEffect(() => {
    if (address) {
      getCheeblist(address);
    }
  }, [address]);

  useEffect(() => {
    const getRedemptionValue = async () => {
      if (contract?.read && address && isCheeblist) {
        const redemptionVal = await contract?.read?.cheebListClaim(address);
        setIsCheeblistRedeemed(redemptionVal);
      }
    };
    getRedemptionValue();
  }, [isCheeblist, contract, address]);

  useEffect(() => {
    async function getPrice() {
      if (contract?.read) {
        const tempPrice = await contract?.read?.getPrice();
        const otherPrice = ethers.utils.formatUnits(tempPrice);
        setPrice(otherPrice);
      }
    }
    getPrice();
  }, [contract]);

  const getCheeb = async (amount) => {
    const transaction = contract?.write?.getCheeb(address, amount, {
      value: ethers.utils.parseUnits(price) * amount,
    });
    const something = await signer.sendTransaction(transaction);
    const receipt = transaction.wait();
    console.log(receipt);
  };

  const incrementCheebz = () => {
    setMintAmount((v) => {
      if (v + 1 > 20) {
        return v;
      } else {
        return v + 1;
      }
    });
  };

  const decrementCheebz = () => {
    setMintAmount((v) => {
      if (v - 1 < 1) {
        return v;
      } else {
        return v - 1;
      }
    });
  };

  const incrementCheeblist = () => {
    setCheeblistAmount((v) => {
      if (v + 1 > 3) {
        return v;
      } else {
        return v + 1;
      }
    });
  };

  const decrementCheeblist = () => {
    setCheeblistAmount((v) => {
      if (v - 1 < 1) {
        return v;
      } else {
        return v - 1;
      }
    });
  };

  const redeemCheeblist = async (amount) => {
    console.log(amount);
    console.log(cheeblistProof);
    const transaction = contract?.write?.cheebListMint(amount, cheeblistProof, {
      value: ethers.utils.parseUnits(price) * amount,
    });
    const something = await signer.sendTransaction(transaction);
    const receipt = transaction.wait();
    console.log(receipt);
  };

  const cleanPrice = (priceAsString) => {
    let tempPrice = `${priceAsString}`;
    return tempPrice.substring(0, 5);
  };

  const mintGardenRef = useRef(null);

  const scrollToMintArea = () => {
    mintGardenRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>COMING SOON | Cheebiez</title>
      </Head>
      <Box sx={{ backgroundColor: `#2595e3` }}>
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
            {!provider && (
              <Image
                src="/images/connect.png"
                alt=""
                className={styles.connectButton}
                onClick={() => connectApp()}
              />
            )}
            {address && (
              <Box
                className={styles.userAddress}
                onClick={() => disconnectApp()}
              >
                {(isUpdating && "Loading Address") || formatAddress(address)}
              </Box>
            )}
            <Box sx={{ display: `flex`, alignItems: `center`, gap: `1rem` }}>
              <Link href="https://discord.gg/cheebiez">
                <a target="_blank" rel="nofollow">
                  <Image
                    src="/images/Social_Discord.png"
                    alt=""
                    className={styles.socialButton}
                  />
                </a>
              </Link>
              <Link href="https://twitter.com/CheebieVerse">
                <a target="_blank" rel="nofollow">
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
                  onClick={() => scrollToMintArea()}
                />
              )}
            </Box>
          </Box>
          <RedNewsMarquee />
        </Box>
        <br />
        <br />
        <Box
          name="enter the cheebieverse"
          sx={{
            width: `100vw`,
          }}
        >
          <Box className={styles.enterCheebieverseGrid}>
            <Box>
              <h2 className={styles.cheebieverseHeadline}>
                ENTER THE CHEEBIEVERSE
              </h2>
              <p className={styles.cheebieverseContent}>
                Cheebiez live in a parallel universe that&apos;s just like our
                own except cuter, smaller, and more fun! They have
                infrastructure and governments to topple just like us and do so
                with much chaos and mischief.
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
        {/* Core Features */}
        <Box>
          <Image
            src="/images/Core_Features.png"
            alt="Core Features"
            sx={{
              position: `absolute`,
              left: `50%`,
              transform: `translatex(-50%)`,
              maxWidth: `60vw`
            }}
          />
        </Box>
        <Box sx={{height: `25vh`}}></Box>
        <br />
        {/* Great At Any Size - Image Right */}
        <Box
          name="all sizes"
          sx={{
            width: `100vw`,
          }}
        >
          <Box className={styles.enterCheebieverseGrid}>
            <Box>
              <h2 className={styles.cheebieverseHeadline}>Great at Any Size</h2>
              <p className={styles.cheebieverseContent}>
                Cheebiez are designed to look great whether big or small.
                Whether they&apos;re on desktop or mobile, they serve as a great
                profile picture and stand out on any feed!
              </p>
            </Box>
            <Box sx={{justifySelf: `start`, alignSelf: `start`, width: `80%`}}>
              <Image
                src="/images/CheebieApple.png"
                alt="A cheebie apple"
                className={styles.cheebieApple}
              />
            </Box>
          </Box>
        </Box>
        <br />
        {/* Diversity - Image Left */}
        <Box
          name="what are cheebiez"
          sx={{
            width: `100vw`,
          }}
        >
          <Box className={styles.whatAreCheebiezGrid}>
            <Box sx={{justifySelf: `end`, alignSelf: `center`, width: `80%`}}>
              <Image
                src="/images/Say_Cheeb.png"
                alt="CheebU Freshman Photo Class of 2022"
                className={styles.cheebieAugustus}
              />
            </Box>
            <Box className={styles.whatAreCheebiezContentContainer} sx={{justifySelf: `start`}}>
              <h2 className={styles.whatAreCheebiezHeadline}>Diversity</h2>
              <p className={styles.whatAreCheebiezContent}>
                They boast a diverse range of skin tones, hair styles, and
                backgrounds! There are countless traits with each trait having
                its own variations. Every trait is also gender-neutral, allowing
                you to decide for yourself how your Cheebie identifies!
              </p>
            </Box>
          </Box>
        </Box>
        <br />
        {/* RP Fun - Image Right */}
        <Box
          name="enter the cheebieverse"
          sx={{
            width: `100vw`,
          }}
        >
          <Box className={styles.enterCheebieverseGrid}>
            <Box>
              <h2 className={styles.cheebieverseHeadline}>Role-play Fun!</h2>
              <p className={styles.cheebieverseContent}>
                Cheebiez was inspired by our favorite online games! We are a
                community first project and want to provide an environment for
                you to make new friends and memories within the NFT space :)
              </p>
            </Box>
            <Box>
              <Image
                src="/images/Cheebie_Role-Play_Asset.png"
                alt="Cheebiez RPing"
                className={styles.cheebieApple}
              />
            </Box>
          </Box>
        </Box>
        <br />
        <br />
        <br />
        <Box
          name="what are cheebiez"
          sx={{
            width: `100vw`,
          }}
        >
          <Box className={styles.whatAreCheebiezGrid}>
            <Box>
              <Image
                src="/images/CheebieAugustus.png"
                alt="A cheebie augusts ceaser"
                className={styles.cheebieAugustus}
              />
            </Box>
            <Box className={styles.whatAreCheebiezContentContainer}>
              <h2 className={styles.whatAreCheebiezHeadline}>
                WHAT ARE CHEEBIEZ?
              </h2>
              <p className={styles.whatAreCheebiezContent}>
                Cheebiez are small creatures that mirror humans in many ways.
                Much like us, Cheebiez have a rich history filled with its own
                leaders and cultures! Though they speak in an unknown tongue,
                their bold personalities make up for it more than enough.
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
        <Box name="team" sx={{ height: "fit-content" }}>
          <Box className={styles.teamContainerGrid}>
            <Box className={styles.projectLeadContainer}>
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
                name="st4rgard3n "
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
            className={styles.breakingNewsButton}
          />
          <Image
            src="/images/ReporterBee.png"
            alt="Newzy Bee"
            className={styles.newzyBeeDesktop}
          />
          <Image
            src="/images/news_desk.png"
            alt="Newzy Bee's Desk"
            className={styles.newzyBeeDesktopDesk}
          />
          <Image
            src="/images/NewzyBeeMobile.png"
            alt="Newzy Bee's Desk"
            className={styles.newzyBeeMobile}
          />
          <Box className={styles.roadmapInnerGrid}>
            <Box className={styles.roadmapItems}>
              <Image src="/images/questionMarkBubble.png" alt="?" />
              <Box className={styles.roadmapSmallItems}>
                <Image src="/images/questionMarkBubbleSmall.png" alt="?" />
                <Image src="/images/questionMarkBubbleSmall.png" alt="?" />
                <Image src="/images/questionMarkBubbleSmall.png" alt="?" />
              </Box>
            </Box>
            <Box className={styles.roadMapContent}>
              <h3>ROADMAP</h3>
              <p>
                Cheebiez are notoriously impulsive and aren&apos;t exactly the
                best planners– but their mischief always means fun!
              </p>
              <h4>What could happen next?</h4>
              <br />
            </Box>
          </Box>
        </Box>
        <Box name="faq" className={styles.faqContainer}></Box>
        <Box
          name="mint-garden"
          className={styles.mintGarden}
          ref={mintGardenRef}
        >
          <div className={styles.mintGardenConnect}>
            {!provider && (
              <Image
                src="/images/connect.png"
                alt=""
                className={styles.connectButton}
                onClick={() => connectApp()}
              />
            )}
            {address && (
              <Box
                className={styles.userAddress}
                onClick={() => disconnectApp()}
              >
                {(isUpdating && "Loading Address") || formatAddress(address)}
              </Box>
            )}
          </div>
          {!isMintingModalOpen && address && (
            <div
              className={styles.mintGardenOpenModal}
              onClick={() => setIsMintingModalOpen(true)}
            >
              MINT
            </div>
          )}
          {!isMintingModalOpen && !address && (
            <div
              className={styles.mintGardenOpenModal}
              onClick={() => connectApp()}
            >
              Connect
            </div>
          )}
          {isMintingModalOpen && (
            <>
              <div
                className={styles.mintGardenModalBG}
                onClick={() => {
                  setIsMintingModalOpen(false);
                }}
              ></div>
              <div className={styles.mintGardenModal}>
                <h2>Mint Cheebiez</h2>
                <h3>
                  Ξ{cleanPrice(price * mintAmount)} <br />
                </h3>
                <div className={styles.selectMintAmountRow}>
                  <div
                    className={styles.decrementCheebz}
                    onClick={() => decrementCheebz()}
                  >
                    -
                  </div>
                  <div
                    className={styles.getCheebButton}
                    onClick={() => getCheeb(mintAmount)}
                  >
                    Mint {mintAmount} Cheeb{mintAmount > 1 ? "iez" : "ie"}
                  </div>
                  <div
                    className={styles.incrementCheebz}
                    onClick={() => incrementCheebz()}
                  >
                    +
                  </div>
                </div>
                {isCheeblist && !isCheeblistRedeemed && (
                  <>
                    <br />
                    <h3>
                      Ξ{cleanPrice(price * cheeblistAmount)} <br />
                    </h3>
                    <div className={styles.selectMintAmountRow}>
                      <div
                        className={styles.decrementCheebz}
                        onClick={() => decrementCheeblist()}
                      >
                        -
                      </div>
                      <div
                        className={styles.getCheebButton}
                        onClick={() => redeemCheeblist(cheeblistAmount)}
                      >
                        Redeem {cheeblistAmount} Cheeb
                        {cheeblistAmount > 1 ? "iez" : "ie"}
                      </div>
                      <div
                        className={styles.incrementCheebz}
                        onClick={() => incrementCheeblist()}
                      >
                        +
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
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
