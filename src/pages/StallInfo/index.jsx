import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./style.css";
import ChickenRice from "assets/chicken-rice.png";
import BottomNavBar from "components/ExperimentNavbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import data from "../../assets/stalls.json";

export default function StallInfo() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/experiment/1');
  };

  // Extracting Stall ID from URL
  const location = useLocation(); 
  const currentURL = "/stalls/";
  const stall_id = location.pathname.replace(currentURL, ""); // Extract the "number" from the URL
  const dynamicMenu = data[Number(stall_id)].menu
  

  return (
    <div>
      <div className="stall-info-header">
        {/* Back Icon */}
        <ArrowBackIosIcon
          className="back-icon"
          style={{ fontSize: 30, color: "#ffffff" }}
          onClick={handleButtonClick}
        />
        <div style={{ flexGrow: 1 }}></div>
        <Typography
          style={{
            textDecoration: "underline",
            color: "#ffffff",
            fontSize: 20,
          }}
          className="help-text"
        >
          help?
        </Typography>
      </div>
      <div className="green-block"></div>
      <div className="stall-info-container">
        <Card style= {{ marginBottom: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
          <CardMedia
            component="img"
            height="150px"
            width="370px"
            image={ChickenRice}
            alt="Chicken Rice"
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              Chicken Rice
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            width: "370px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            marginBottom: "20px",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Hainanese chicken rice specialty.
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            width: "370px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                textAlign: "center"
              }}
            >
              Menu
            </Typography>
            <div>
              {dynamicMenu ? (
                <div key={data[Number(stall_id)].name}>
                  <ul>
                    {dynamicMenu.map((item) => (
                      <li key={item.item}>
                        {item.item} - {item.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Typography variant="body2" color="textSecondary" key={data[Number(stall_id)].name}>
                  No menu available for {data[Number(stall_id)].name}.
                </Typography>
              )}
            </div>
          </CardContent>
        </Card>
        <BottomNavBar />
      </div>
    </div>
  );
}
