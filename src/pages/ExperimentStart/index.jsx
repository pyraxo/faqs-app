import "./style.css";
import React, { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  IconButton,
  DialogContent,
} from "@mui/material";
import Close from "@mui/icons-material/Close";
import Logo from "assets/logo-white.png";
import useLocalStorage from "hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useLocalStorage("startTime", -1);
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [storedCode, setStoredCode] = useLocalStorage("userCode", "");

  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    storedCode
      ? navigate(`/experiment/${(parseInt(storedCode) % 2) + 1}`)
      : setOpen(true);
  };

  const handleExit = () => {
    setOpen(false);
    setCode("");
  };

  const handleSubmission = () => {
    handleExit();
    if (startTime === -1) {
      setStoredCode(code);
      setStartTime(Date.now());
      console.log(code);
    }
    setTimeout(
      () => navigate(`/experiment/${(parseInt(storedCode) % 2) + 1}`),
      100
    );
  };

  useEffect(() => {
    setIsValid(code.length === 6 && !isNaN(code));
  }, [code]);

  return (
    <Container className="experiment-start-container">
      <Stack
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "7vw",
              alignSelf: "center",
              fontWeight: 500,
            }}
          >
            welcome to
          </Typography>
          <img src={Logo} className="logo-start" alt="Logo" />
          <Typography
            style={{
              color: "#ffffff",
              fontSize: "7vw",
              alignSelf: "center",
              fontWeight: 500,
            }}
          >
            web experiment
          </Typography>
        </Box>

        <Container
          sx={{
            height: "55vh",
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={3}>
            <Typography style={{ color: "#ffffff" }} variant="body1">
              Thank you for participating in our experiment! Free to interact
              with our app as you see fit.
            </Typography>
            <Typography style={{ color: "#ffffff" }} variant="body1">
              Your task is to decide your lunch plans using FAQS. Navigate
              through the app to explore menus, press buttons, and make your
              decision.
            </Typography>
            <Typography style={{ color: "#ffffff" }} variant="body1">
              Once you're done, press the button <b>"I'm done deciding!"</b> at
              the bottom of the page to end the experiment.
            </Typography>
          </Stack>
        </Container>

        <Box style={{ paddingBottom: "10vh" }}>
          <Button
            onClick={handleButtonClick}
            style={{
              backgroundColor: "#ffffff",
              color: "#EE9418",
              borderRadius: "30px",
              fontSize: 20,
              fontWeight: "bold",
              width: "200px",
            }}
          >
            Start
          </Button>
        </Box>
      </Stack>
      <Dialog open={open} onClose={handleExit} autoComplete="off">
        <DialogTitle sx={{ m: 0 }}>
          Experiment Code
          {
            <IconButton
              aria-label="close"
              onClick={handleExit}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
          }
        </DialogTitle>
        <DialogContent>Contact the researcher for a valid code!</DialogContent>
        <TextField
          required
          autoFocus
          id="name"
          label="Code"
          variant="outlined"
          value={code}
          helperText={isValid || !code ? "" : "Invalid code"}
          sx={{ marginLeft: "1rem", marginRight: "1rem" }}
          onChange={(e) => setCode(e.target.value)}
          error={!isValid}
        />
        <DialogActions>
          <Button onClick={handleSubmission} disabled={!isValid}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
