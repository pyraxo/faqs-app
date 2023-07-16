import "./style.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "components/Header";

import stallInfos from "assets/stalls.json";

const StallInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header title={stallInfos[id].name} />
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
              <h3></h3>
              <p></p>
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
