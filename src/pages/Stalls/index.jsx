import "./style.css";
import React from "react";
import { Stack, Typography } from "@mui/material";

import Header from "components/Header";
import StallCard from "components/StallCard";

import stalls from "assets/stalls.json";
import StarIcon from "assets/star-icon.png";
import useStarred from "hooks/useStarred";
import useStatus from "hooks/useStatus";

const userGuideContent = (
  <>
    <Typography variant="body1">
      <u>View Stall Details</u>
      <br />
      Tap on any stall to access its detailed information.
      <br />
      <br />
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

const Stalls = () => {
  const [toggleStars, isStarred] = useStarred();
  const [, , isClosed] = useStatus();
  return (
    <>
      <Header title={"Stalls"} userGuideContent={userGuideContent} />
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
            isClosed={isClosed(id)}
          />
        ))}
      </Stack>
    </>
  );
};

export default Stalls;
