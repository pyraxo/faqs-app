import "./style.css";
import React from "react";
import Header from "components/Header";

const Starred = () => {
  return (
    <>
      <Header title={"Favourited Stalls"} />
      <div className="starred"></div>
    </>
  );
};

export default Starred;
