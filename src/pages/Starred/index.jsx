import "./style.css";
import React from "react";
import { Stack } from "@mui/material";
import Header from "components/Header";
import useLocalStorage from "hooks/useLocalStorage";

export default function Starred() {
  const [stars, setStars] = useLocalStorage("starred", []);
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
      ></Stack>
    </>
  );
}
