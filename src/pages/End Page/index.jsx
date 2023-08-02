import React from 'react';
import Typography from '@mui/material/Typography';
import Logo from "assets/faqs-logo-white.png";
import "./style.css";

const LandingPage = () => {
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div className="container">
      <img src={Logo} style={imageStyle} alt="Logo" />
      <Typography style={{ color: '#ffffff', fontSize: 30, textAlign: 'center' }}>
        thanks for joining
      </Typography>
      <Typography style={{ color: '#ffffff', fontSize: 30, textAlign: 'center' }}>
      our web experiment!
      </Typography>
    </div>
  );
};

export default LandingPage;
