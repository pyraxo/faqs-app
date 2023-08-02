import React from 'react';
import "./style.css";

const BottomNavBar = () => {
  const handleButtonClick = () => {
  };

  return (
    <div className="bottom-navbar-container">
      <button className="end-button" onClick={handleButtonClick}>
        END
      </button>
    </div>
  );
};

export default BottomNavBar;
