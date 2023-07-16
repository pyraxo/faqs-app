import "./style.css";
import React from "react";
import { useParams } from "react-router-dom";

import Header from "components/Header";

import stallInfos from "assets/stalls.json";

const StallInfo = () => {
  const { id } = useParams();
  return (
    <>
      <Header title={stallInfos[id].name} />
    </>
  );
};

export default StallInfo;
