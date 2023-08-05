import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useTracking } from "react-tracking";

import "./style.css";
import Logo from "assets/logo-black.png";
import BottomNavBar from "components/ExperimentNavbar";
import useLocalStorage from "hooks/useLocalStorage";
import LastUpdated from "components/LastUpdated";
import UtilityIcons from "components/UtilityIcons";
import CardContainer from "components/CardContainer";
import VersionCheck from "components/VersionCheck";

export default function HomeA() {
  const { Track, trackEvent } = useTracking(
    { page: "HomeA" },
    {
      dispatch: (data) => {
        console.log("tracking data", data);
      },
    }
  );

  const [startTime] = useLocalStorage("startTime");
  const [sortType, setSortType] = useState("canteen");
  const [lastUpdated, setLastUpdated] = useLocalStorage(
    "lastUpdated",
    Date.now()
  );

  const trackClick = (name, options = {}) => {
    console.log(options);
    trackEvent({
      action: "click",
      name,
      timestamp: Date.now() - startTime,
      ...options,
    });
  };

  return (
    <Track>
      <VersionCheck />
      <Box className="verA-header">
        <Stack
          spacing={1}
          sx={{
            direction: "column",
          }}
        >
          <img
            src={Logo}
            style={{ width: "auto", height: "10vh" }}
            alt="logo"
          />
          <LastUpdated lastUpdated={lastUpdated} />
          <UtilityIcons
            trackClick={trackClick}
            setSortType={setSortType}
            setLastUpdated={setLastUpdated}
          />
        </Stack>
      </Box>

      <CardContainer
        containerType="cards-container-A"
        cardType="stall-card-A"
        sortType={sortType}
        trackClick={trackClick}
      />
      <BottomNavBar trackClick={trackClick} />
    </Track>
  );
}
