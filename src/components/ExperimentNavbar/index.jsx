import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import Info from "@mui/icons-material/Info";
import "./style.css";

import Survey from "components/Survey";

const BottomNavBar = ({ trackClick }) => {
  const [open, setOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [survey, setSurvey] = useState(false);

  const handleButtonClick = () => {
    trackClick("end-button");
    setOpen(true);
  };

  const handleConfirmation = (proceed) => {
    setOpen(false);
    if (proceed) {
      trackClick("survey-open");
      setSurvey(true);
    } else {
      trackClick("end-button-close");
    }
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
      <Dialog open={helpOpen} onClose={handleInfoClose}>
        <DialogTitle>Instructions</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your task is to decide your lunch plans using FAQS. Navigate through
            the app to explore menus, press buttons, and make your decision.
          </Typography>
          <Typography gutterBottom>
            Once you're done, press the button <b>"I'm done deciding!"</b> at
            the bottom of the page.
          </Typography>
          <Typography gutterBottom>
            There will be a short survey before the experiment ends.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={() => handleConfirmation(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you have finished deciding?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleConfirmation(false)}
            color="primary"
            autoFocus
          >
            No
          </Button>
          <Button onClick={() => handleConfirmation(true)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Survey
        trackClick={trackClick}
        surveyOpen={survey}
        completeSurvey={() => setSurvey(false)}
      />
    </Container>
  );
};

export default BottomNavBar;
