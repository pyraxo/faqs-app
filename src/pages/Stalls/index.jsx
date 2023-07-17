import "./style.css";
import React from "react";
import Stack from "@mui/material/Stack";

import Header from "components/Header";
import StallCard from "components/StallCard";

import stalls from "assets/stalls.json";
import useStarred from "hooks/useStarred";

const Stalls = () => {
  const [toggleStars, isStarred] = useStarred();
  return (
    <>
      <Header title={"Stalls"} />
      {/* <div className="stalls"></div> */}
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100vw"
        mt={2}
        spacing={3}
        pb={10}
      >
        {stalls.map((_stall, id) => (
          <StallCard
            stallId={id}
            key={`stall-${id}`}
            toggleStars={toggleStars}
            isStarred={isStarred}
          />
        ))}
      </Stack>
    </>
  );
};

export default Stalls;
