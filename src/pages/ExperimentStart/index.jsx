import "./style.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "assets/logo-white.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the EndingPage when the button is clicked
    navigate('/experiment/1');
  };
  return (
    <div className="experiment-container">
      <Container>
        <Stack
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            style={{ color: "#ffffff", fontSize: 30, marginTop: "30vh" }}
          >
            welcome to
          </Typography>
          <img src={Logo} className="logo-start" alt="Logo" />
          <Typography style={{ color: "#ffffff", fontSize: 30 }}>
            web experiment
          </Typography>
          <Box
            style={{
              marginTop: "40vh",
            }}
          >
            <Button onClick={handleButtonClick}
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
    </div>
  );
}
