import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Sort from "@mui/icons-material/Sort";
import Refresh from "@mui/icons-material/Refresh";

export default function UtilityIcons({
  trackClick,
  setLastUpdated,
  setSortType,
}) {
  const [isRefresh, setIsRefresh] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleRefresh = () => {
    trackClick("refresh");
    setTimeout(() => {
      setLastUpdated(Date.now());
      setIsRefresh(true);
    }, 100);
    setTimeout(
      () => setIsRefresh(false),
      (Math.floor(Math.random() * 3) + 1) * 1000
    );
  };
  const handleClose = (option) => {
    if (option) trackClick("sort-menu-option", { choice: option });
    setTimeout(() => {
      setAnchorEl(null);
      setSortType(option);
    }, 100);
  };
  const handleClickSort = (event) => {
    trackClick("sort-menu-open");
    const target = event.currentTarget;
    setTimeout(() => setAnchorEl(target), 100);
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
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => handleClose()}
        MenuListProps={{
          "aria-labelledby": "sort-button",
        }}
      >
        <MenuItem onClick={() => handleClose("name")}>Sort by name</MenuItem>
        <MenuItem onClick={() => handleClose("queue")}>Sort by queue</MenuItem>
        <MenuItem onClick={() => handleClose("canteen")}>
          Sort by canteen order
        </MenuItem>
      </Menu>
      <IconButton
        size="large"
        aria-label="sort"
        onClick={handleClickSort}
        id="sort-button"
        sx={{
          height: "1dvh",
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
        sx={{ height: "1dvh", alignSelf: "center" }}
      >
        {isRefresh ? <CircularProgress size="2dvh" /> : <Refresh />}
      </IconButton>
    </Box>
  );
}
