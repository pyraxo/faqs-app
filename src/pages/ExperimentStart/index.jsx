import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "assets/logo-white.png";
import useLocalStorage from "hooks/useLocalStorage";

export default function LandingPage() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useLocalStorage("startTime", -1);

  const handleButtonClick = () => {
    // Navigate to the EndingPage when the button is clicked
    navigate("/experiment/1");
  };
  return (
    <Container className="experiment-start-container">
      <Stack
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          style={{ color: "#ffffff", fontSize: 30, paddingTop: "20vh" }}
        >
          welcome to
        </Typography>
        <img src={Logo} className="logo-start" alt="Logo" />
        <Typography style={{ color: "#ffffff", fontSize: 30 }}>
          web experiment
        </Typography>
        <Container sx={{ height: "40vh", width: "100vw", paddingTop: "5vh" }}>
          <Typography style={{ color: "#ffffff", fontSize: 16 }}>
            Free to interact with our app as you see fit!
          </Typography>
        </Container>

        <Box style={{}}>
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
    </Container>
  );
}
