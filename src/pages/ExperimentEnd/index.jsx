import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "assets/logo-white.png";
import "./style.css";
import useLocalStorage from "hooks/useLocalStorage";
import { fetchValue, saveValue } from "services/Firebase";
import { useCallback } from "react";

export default function EndingPage() {
  const navigate = useNavigate();
  const [startTime] = useLocalStorage("startTime", -1);
  const [endTime] = useLocalStorage("endTime", -1);
  const [userCode] = useLocalStorage("userCode", "");
  const [lunchPlace] = useLocalStorage("lunchPlace", "");
  const [secondAnswer] = useLocalStorage("secondAnswer", "");
  const [featuresUseful] = useLocalStorage("featuresUseful", "");
  const [seatUseful] = useLocalStorage("seatUseful", "");

  const uploadData = useCallback(async () => {
    if (!userCode) {
      return console.error("No user code found?!");
    }
    const dataPath = `${userCode}/data`;
    try {
      // const data = await fetchValue(dataPath);
      // if (data) return;
      await saveValue(dataPath, {
        lunchPlace,
        secondAnswer,
        featuresUseful,
        seatUseful,
        startTime,
        endTime,
        actions: window.dataLayer || [],
      });
    } catch (err) {
      console.error(err);
    }
  }, [
    lunchPlace,
    secondAnswer,
    featuresUseful,
    seatUseful,
    userCode,
    startTime,
    endTime,
  ]);

  useEffect(() => {
    if (endTime === -1) {
      navigate("/start", { replace: true });
    } else {
      uploadData();
    }
  }, [endTime, uploadData, navigate]);

  return (
    <div className="experiment-container">
      <Container>
        <Stack
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Logo} className="logo-end" alt="Logo" />
          <Typography variant="h5" className="subtitle">
            thank you for joining our
          </Typography>
          <Typography variant="h5" className="subtitle">
            web experiment!
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}
