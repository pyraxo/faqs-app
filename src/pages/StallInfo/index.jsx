import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  /* Other imports */
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import StarOutline from "@mui/icons-material/StarOutline";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import HPB from "assets/hpb.png";
import stallInfos from "assets/stalls.json";
import Header from "components/Header";
import "./style.css";

const StallImage = ({ filepath, alt }) => {
  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${filepath}`).then((module) => setImageSrc(module.default));
  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{
        height: 120,
        width: 120,
        borderRadius: "100%",
      }}
    />
  );
};

const StallCard = ({ stallId }) => {
  const handleClick = () => {
    // Handle the click on the stall card (if needed)
  };

  const handleStarClick = (event) => {
    event.stopPropagation();
    // Handle the star icon click (if needed)
  };

  const { name, img, description } = stallInfos[stallId];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", width: "100%", paddingBottom: '24px', }}>
        <Typography variant="h6" component="div" style={{ flex: 1 }}>
          <b>{name}</b>
        </Typography>
        <IconButton aria-label="star" size="small" onClick={handleStarClick}>
          <StarOutline />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <StallImage filepath={img} alt={name} />
      </div>
      <div style={{ width: "100%" }}>
        <CardContent style={{ padding: '24px 0' }}>
          <Typography variant="body2" nowrap="true" align="left">
            {description}
          </Typography>
        </CardContent>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src={HPB}
          alt="HPB"
          style={{
            height: 50,
            width: 50,
          }}
        />
      </div>
    </div>
  );
};

const MenuTabContent = ({ stallId }) => {
  return <StallCard stallId={stallId} />;
};

const StallInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/stalls" style={{ flex: "0 0 auto", textDecoration: "none" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                style={{ flex: "0 0 auto", color: "#FFFFFF"}}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" style={{ flex: 1 }}>
              {stallInfos[id].name}
            </Typography>
          </div>
        }
      />
      <div className="tab-container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "menu" ? "active" : ""}`}
            onClick={() => handleTabChange("menu")}
          >
            Menu
          </button>
          <button
            className={`tab-button ${
              activeTab === "calculator" ? "active" : ""
            }`}
            onClick={() => handleTabChange("calculator")}
          >
            Calculator
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "menu" && (
            <div className="menu-tab">
              <MenuTabContent stallId={id} />
            </div>
          )}
          {activeTab === "calculator" && (
            <div className="calculator-tab">
              <h3>Calculator</h3>
              <p>
                Placeholder content for the calculator. Add your calculator
                component here.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StallInfo;
