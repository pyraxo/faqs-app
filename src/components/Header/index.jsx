import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Info from "@mui/icons-material/Info";

export default function Header({ title }) {
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
          <>
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
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
