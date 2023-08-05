import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useTracking } from "react-tracking";

import "./style.css";
import Availability from "assets/availability.png";
import BottomNavBar from "components/ExperimentNavbar";
import UtilityIcons from "components/UtilityIcons";
import useLocalStorage from "hooks/useLocalStorage";
import LastUpdated from "components/LastUpdated";
import CardContainer from "components/CardContainer";
import VersionCheck from "components/VersionCheck";

export default function HomeB() {
  const { Track, trackEvent } = useTracking(
    { page: "HomeB" },
    { dispatch: (data) => console.log(data) }
  );

  const [startTime] = useLocalStorage("startTime");
  const [sortType, setSortType] = useState("canteen");
  const [lastUpdated, setLastUpdated] = useLocalStorage(
    "lastUpdated",
    Date.now()
  );
  const trackClick = (name, options = {}) =>
    trackEvent({
      action: "click",
      name,
      timestamp: Date.now() - startTime,
      ...options,
    });

  return (
    <Track>
      <VersionCheck />
      <Box className="verB-header">
        <Stack
          spacing={1}
          sx={{
            direction: "column",
            backgroundColor: "#86bd55",
          }}
        >
          <img
            src={Availability}
            style={{
              display: "flex",
              flexDirection: "row",
              objectFit: "contain",
              alignContent: "center",
              justifyContent: "left",
              position: "inherit",
              height: "30vh",
              width: "100vw",
            }}
            alt="Availability"
            onClick={() => trackClick("availability")}
          />
        </Stack>
      </Box>
      <Box className="verB-utility-bar">
        <LastUpdated lastUpdated={lastUpdated} />
        <UtilityIcons
          trackClick={trackClick}
          setSortType={setSortType}
          setLastUpdated={setLastUpdated}
        />
      </Box>
      <CardContainer
        containerType="cards-container-B"
        cardType="stall-card-B"
        sortType={sortType}
        trackClick={trackClick}
      />
      <BottomNavBar trackClick={trackClick} />
    </Track>
  );
}
