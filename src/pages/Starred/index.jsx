import React from "react";
import { Stack, Typography } from "@mui/material";

import Header from "components/Header";
import useStarred from "hooks/useStarred";
import StallCard from "components/StallCard";
import StarIcon from "assets/star-icon.png";

export default function Starred() {
  const [toggleStars, isStarred, stars] = useStarred();

  const userGuideContent = (
    <>
      <Typography variant="body1">
      <u>Mark as Favourite</u>
        <br />
        <img
          src={StarIcon}
          alt="imported"
        />
        <br/>
        Press the star button to add a stall to your favourites list.
        <br />
        <br />
      </Typography>
    </>
  );

  return (
    <>
      <Header title={"Favourited Stalls"} userGuideContent={userGuideContent} />
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
