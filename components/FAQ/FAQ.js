import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const FAQ = () => {
  return (
    <>
      <Accordion sx={{ fontFamily: `'DK Hand', sans-serif` }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                What is the total supply of Cheebiez?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            10,000
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                What is the Mint Price?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            0.1Ξ per Cheebiez for both the Cheeblist and Public Sales
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                How and when can I mint a Cheebiez?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            Minting will take place on our website. Mint date is June 8th.
            Minting will have the following two phases:
            <br />
            Cheeblist Sale: June 8th - Morning (PDT):
            <br />
            <ul>
              <li>Supply = # of Cheeblist x 5 (will not exceed 9,800)</li>
              <li>1 Cheeblist = 1 Cheeblist Sale transaction</li>
              <li>Maximum 5 Cheebiez per transaction</li>
            </ul>
            <br />
            Public Sale: June 8th - Afternoon (PDT):
            <br />
            <ul>
              <li>Supply: any supply remaining after the Cheeblist Sale</li>
              <li>Maximum 20 Cheebiez per transaction, unlimited per wallet</li>
            </ul>
            <br />
            200 Cheebiez are allocated for the project treasury and team.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                What is the Cheeblist and how do I get on it?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            The Cheeblist is the whitelist for Cheebiez. Each Cheeblist spot is
            allocated one transaction of up to three Cheebiez mints during the
            Cheeblist Sale.
            <br />
            You can grab a spot on the Cheeblist through various giveaways that
            will be hosted on our Twitter or through one of our special events!
            Our team may also give out handpicked cheeblist spots to outstanding
            members of the community who have proven to be extremely helpful,
            have created amazing fan art, or have stood out or impressed us for
            one reason or another. Grinding on discord will not get you on the
            Cheeblist!
            <br />
            WARNING: Cheeblisters will only have access to one successful
            transaction during the Cheeblist Sale, please ensure you are
            satisfied with your choice of minting 1, 2, 3, 4 or 5 Cheebiez in
            your one transaction. After completing your one successful
            transaction you will not be able to mint again until the Public
            Sale.
            <br />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                Will the Cheeblist be overallocated?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            No. If you have earned a spot on the Cheeblist you won&apos;t need
            to worry about missing out on your chance to mint. However, please
            take note of the minting schedule and ensure that you are available
            during the Cheeblist minting period to mint your Cheebiez before the
            Public Sale goes live.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
                What are the royalties on secondary sales?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
          7.5% + Marketplace fees
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" sx={{ fontSize: `2rem` }}>
              Is there a Roadmap?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} sx={{ fontSize: `1.5rem` }}>
            Cheebiez is a community and art oriented project. We have definite
            plans but we want to keep our roadmap flexible to allow for
            community involvement and growth. We have many events planned but
            we&apos;re always keeping our eyes and ears open to scope out new ideas!
            Minting a Cheebie is your chance to inspire us and see what we have
            in store.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
