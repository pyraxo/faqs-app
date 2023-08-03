import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "assets/logo-white.png";
import "./style.css";

export default function EndingPage() {
  return (
    <div className="container">
      <Container>
        <Stack
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Logo} className="logo-end" alt="Logo" />
          <Typography variant="h5" className="subtitle">
            thanks for joining our
          </Typography>
          <Typography variant="h5" className="subtitle">
            web experiment
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}
