import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import styles from "./PrivateCheeblist.module.scss";
import { supabase } from "../../utils/supabaseClient";

export const PrivateCheeblist = () => {
  const [twitterHandle, setTwitterHandle] = useState("");
  const [discordHandle, setDiscordHandle] = useState("");
  const [password, setPassword] = useState("");
  const [siteError, setError] = useState();
  const [siteSuccess, setSuccess] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleForm = async () => {
    if (
      twitterHandle?.length <= 0 ||
      discordHandle?.length <= 0 ||
      password?.length <= 0
    ) {
      setError("Please provide all details");
      return null;
    }
    console.log({ twitterHandle });
    console.log({ discordHandle });
    console.log({ password });
    const { data, error } = await supabase.from("PrivateCheeblist").insert([
      {
        discord: `${discordHandle}`,
        twitter: `${twitterHandle}`,
        password: `${password}`,
      },
    ]);
    setError(() => {
      return error ? error : null;
    });
    setIsFormSubmitted(() => {
        if (data[0]) {
            return true;
        }
    });
  };

  return (
    <Box className={styles.cheeblistWrapper}>
      <h2>Private Cheeblist</h2>
      <p>
        cheeblist will be given out via discord roles for those who fill out
        this form correctly
      </p>
      <p className={styles.ps}>
        p.s. join our <a href="https://discord.gg/cheebiez">discord</a> and
        follow our <a href="https://twitter.com/CheebieVerse">twitter</a>
      </p>
      {!isFormSubmitted && (
        <Box sx={{display: isFormSubmitted ? `none` : `block`}}>
          <FormControl>
            <FormLabel htmlFor="Discord">Discord</FormLabel>
            <Input
              id="Discord"
              placeholder="Discord Handle (with #)"
              value={discordHandle}
              onChange={(d) => setDiscordHandle(d.target.value)}
            />
            <FormLabel htmlFor="Twitter">Twitter</FormLabel>
            <Input
              id="Twitter"
              placeholder="Twitter Handle (with @)"
              value={twitterHandle}
              onChange={(d) => setTwitterHandle(d.target.value)}
            />
            <FormLabel htmlFor="Password">Password</FormLabel>
            <Input
              id="Password"
              placeholder="Password"
              value={password}
              onChange={(d) => setPassword(d.target.value)}
            />
            <br />
            <Button onClick={() => handleForm()}>Get Cheeblist</Button>
          </FormControl>
        </Box>
      )}
      {isFormSubmitted && <p>Thanks!</p>}
      {siteError && <p className={styles.error}>{siteError} 🔫</p>}
    </Box>
  );
};
