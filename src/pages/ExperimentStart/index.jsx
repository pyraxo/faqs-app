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
import Instructions from "components/Instructions";

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
  };

  useEffect(() => {
    setIsValid(code.length === 6 && !isNaN(code));
  }, [code]);

  useEffect(() => {
    if (storedCode) {
      navigate(`/experiment/${(parseInt(storedCode) % 2) + 1}`, {
        replace: true,
      });
    }
  }, [storedCode, navigate]);

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

        <Instructions />

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
