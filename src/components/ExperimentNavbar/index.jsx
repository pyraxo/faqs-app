import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Info from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import "./style.css";

const BottomNavBar = ({ trackClick }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const handleButtonClick = () => {
    trackClick("end-button");
    setOpen(true);
  };

  const handleConfirmation = (proceed) => {
    setOpen(false);
    if (proceed) {
      navigate("/end");
    }
    trackClick("end-button-close");
  };

  const handleInfoClick = () => {
    trackClick("help-button");
    setHelpOpen(true);
  };

  const handleInfoClose = () => {
    trackClick("help-button-close");
    setHelpOpen(false);
  };

  return (
    <Container
      className="bottom-navbar-container"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <button className="end-button" onClick={handleButtonClick}>
        I'm done deciding!
      </button>
      <IconButton
        aria-label="close"
        sx={{
          position: "absolute",
          right: 16,
          top: 8,
          color: "#fff",
        }}
        onClick={handleInfoClick}
      >
        <Info />
      </IconButton>
      <Dialog open={open} onClose={() => handleConfirmation(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you have finished deciding?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleConfirmation(true)}
            color="error"
            autoFocus
          >
            Yes
          </Button>
          <Button onClick={() => handleConfirmation(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={helpOpen} onClose={handleInfoClose}>
        <DialogTitle>Instructions</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your task is to decide your lunch plans using FAQS. Navigate through
            the app to explore menus, press buttons, and make your decision.
          </Typography>
          <Typography gutterBottom>
            Once you're done, press the button <b>"I'm done deciding!"</b> at
            the bottom of the page to end the experiment.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BottomNavBar;
