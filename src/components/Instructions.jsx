import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Instructions() {
  return (
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
          Thank you for participating in our experiment! Free to interact with
          our app as you see fit.
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          Your task is to decide your lunch plans using FAQS. Navigate through
          the app to explore menus, press buttons, and make your decision.
          <b> Please complete this in one sitting!</b>
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="body1">
          Once you're done, press the button <b>"I'm done deciding!"</b> at the
          bottom of the page to end the experiment.
        </Typography>
      </Stack>
    </Container>
  );
}
