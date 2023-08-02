import "./style.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "assets/logo-white.png";

const LandingPage = () => {
  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="landing-container">
      <Typography style={{ color: "#ffffff", fontSize: 30 }}>
        welcome to
      </Typography>
      <img src={Logo} style={imageStyle} alt="Logo" />
      <Typography style={{ color: "#ffffff", fontSize: 30 }}>
        web experiment!
      </Typography>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "10%",
        }}
      >
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "#EE9418",
            borderRadius: "30px",
            fontSize: 20,
            fontWeight: "bold",
            width: "200px",
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
