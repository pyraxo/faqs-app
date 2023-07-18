import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ my: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
        >
          Canteen Traffic
        </Typography>
      </Box>
      <Box sx={{ my: 1 }}>
        <Typography
          variant="body1"
          component="div"
          sx={{ ml: 2, textAlign: "center" }}
        >
          Not crowded
        </Typography>
      </Box>
    </Box>
  );
}
