import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#86BD55" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#FFFFFF" }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
