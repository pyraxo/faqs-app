import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Sort from "@mui/icons-material/Sort";
import Refresh from "@mui/icons-material/Refresh";
import CircularProgress from "@mui/material/CircularProgress";

export default function UtilityIcons({ handleClickSort, setLastUpdated }) {
  const [isRefresh, setIsRefresh] = useState(false);
  const handleRefresh = () => {
    setTimeout(() => {
      setLastUpdated(Date.now());
      setIsRefresh(true);
    }, 100);
    setTimeout(
      () => setIsRefresh(false),
      (Math.floor(Math.random() * 3) + 1) * 1000
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <IconButton
        size="large"
        aria-label="sort"
        onClick={handleClickSort}
        id="sort-button"
        sx={{
          height: "1vh",
          ml: "2vw",
          alignSelf: "center",
        }}
      >
        <Sort />
      </IconButton>
      <IconButton
        size="large"
        aria-label="refresh"
        onClick={handleRefresh}
        color="inherit"
        id="sort-button"
        sx={{ height: "1vh", alignSelf: "center" }}
      >
        {isRefresh ? <CircularProgress size="2vh" /> : <Refresh />}
      </IconButton>
    </Box>
  );
}
