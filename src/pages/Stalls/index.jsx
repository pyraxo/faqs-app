import "./style.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Header from "components/Header";
import StallCard from "components/StallCard";

const Stalls = () => {
  return (
    <>
      <Header title={"Stalls"} />
      {/* <div className="stalls"></div> */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100vw"
        mt={2}
      >
        <StallCard stallName={"Chicken Rice"}></StallCard>
      </Box>
    </>
  );
};

export default Stalls;
