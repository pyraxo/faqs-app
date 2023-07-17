import "./style.css";
import React from "react";
import { Stack } from "@mui/material";

import Header from "components/Header";
import useStarred from "hooks/useStarred";
import StallCard from "components/StallCard";

export default function Starred() {
  const [toggleStars, isStarred, stars] = useStarred();
  return (
    <>
      <Header title={"Favourited Stalls"} />
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="100vw"
        mt={2}
        spacing={3}
        pb={10}
      >
        {stars.map((id) => (
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
}
