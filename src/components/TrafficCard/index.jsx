import React from "react";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import Person from "@mui/icons-material/Person";
import PersonOutline from "@mui/icons-material/PersonOutline";

export default function TrafficCard() {
  return (
    <Box
      sx={{
        width: "230px",
        height: "90px",
        position: "absolute",
        top: "55px",
        right: "120px",
        bgcolor: "#F8F8F8",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Canteen Traffic
      </Typography>
      <Grid container>
        <Person
          style={{
            width: "30px",
            height: "30px",
            zIndex: 1,
          }}
        />
        <PersonOutline
          style={{
            width: "30px",
            height: "30px",
            zIndex: 1,
          }}
        />
        <PersonOutline
          style={{
            width: "30px",
            height: "30px",
            zIndex: 1,
          }}
        />
      </Grid>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Not crowded
      </Typography>
    </Box>
  );
}
