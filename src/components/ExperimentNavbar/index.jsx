import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const BottomNavBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the EndingPage when the button is clicked
    navigate('/end');
  };

  return (
    <div className="bottom-navbar-container" style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <button className="end-button" onClick={handleButtonClick}>
        I'm done deciding!
      </button>
    </div>
  );
};

export default BottomNavBar;
