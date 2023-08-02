import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ title, userGuideContent }) {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#86BD55" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#FFFFFF" }}>
            {title}
          </Typography>
          <IconButton
            size="large"
            aria-label="info guide"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: {
            width: "80%",
            height: "70%",
            position: "fixed",
            top: "center",
            left: "center",
            borderRadius: "10px", // Rounded edges
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", color: "black", bgcolor: "#B1D490" }}>
          User Guide
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#B1D490" }}>{userGuideContent}</DialogContent>
      </Dialog>
    </Box>
  );
}
