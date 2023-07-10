import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const IconNavBar = ({ active, username, toggleWelcome }) => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  return (
    <>
      <div className="image-container">
        <button
          className={`image-button ${active === "portfolio" ? "active" : ""}`}
          onClick={() => {}}
        >
          <img src={""} alt="" className="image" />
        </button>

        <button
          className={`image-button ${activeButton === "home" ? "active" : ""}`}
          onClick={() => {}}
        >
          <img src={""} alt="" className="image" />
        </button>

        <button
          className={`image-button ${activeButton === "rooms" ? "active" : ""}`}
          onClick={() => {}}
        >
          <img src={""} alt="" className="image" />
        </button>
      </div>
    </>
  );
};
export default IconNavBar;
