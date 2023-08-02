import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Info from "@mui/icons-material/Info";
import Sort from "@mui/icons-material/Sort";

export default function Header({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleSort = (sortType) => {
  //   handleClose();
  //   // if (changeSort) changeSort(sortType);
  // };
  const handleMenu = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#86BD55" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#FFFFFF" }}
          >
            {title}
          </Typography>
          {
            <>
              <IconButton
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                size="large"
                aria-label="sort"
                onClick={handleClick}
                color="inherit"
                id="sort-button"
              >
                <Sort />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "sort-button",
                }}
              >
                <MenuItem onClick={handleClose}>Sort by name</MenuItem>
                <MenuItem onClick={handleClose}>Sort by queue</MenuItem>
                <MenuItem onClick={handleClose}>Sort by canteen order</MenuItem>
              </Menu>
            </>
          }
          <IconButton
            size="large"
            aria-label="info guide"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Info />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
