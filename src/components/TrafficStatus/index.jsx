import React from "react";
import { Box } from "@mui/material";

import Error from "@mui/icons-material/Error";
import DoNotDisturb from "@mui/icons-material/DoNotDisturbOn";

import StallLayout from "assets/stall-layout.png";
import TrafficCard from "components/TrafficCard";

export default function TrafficStatus() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        bgcolor: "#86BD55",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Error
        style={{
          width: "30px",
          height: "30px",
          position: "absolute",
          top: "180px",
          right: "217px",
          zIndex: 1,
          color: "#fead3d",
        }}
      />
      <Error
        style={{
          width: "30px",
          height: "30px",
          position: "absolute",
          top: "180px",
          right: "121px",
          zIndex: 1,
          color: "#fead3d",
        }}
      />
      <DoNotDisturb
        style={{
          width: "30px",
          height: "30px",
          position: "absolute",
          top: "110px",
          right: "48px",
          zIndex: 1,
          color: "grey",
        }}
      />
      <TrafficCard />
      <img
        src={StallLayout}
        alt="imported"
        style={{ marginTop: "30px", width: "320px", height: "170px" }}
      />
    </Box>
  );
}
