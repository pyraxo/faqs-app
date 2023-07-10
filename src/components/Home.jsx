import "./Home.css";
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "./Navbar";

const Home = () => {
  const [userData] = useLocalStorage("userData", {});

  return (
    <>
      <div className="home">
        <h1 className="welcome">Welcome back, {userData.username}!</h1>
        {/* <Navbar username={userData.username} /> */}
      </div>
    </>
  );
};

export default Home;
