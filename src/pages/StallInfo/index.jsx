import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
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
            {/* {data.map((stall) => {
              // Check if the stall has a menu
              if (stall.menu) {
                return (
                  <div key={stall.name}>
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
                      {stall.name} Menu
                    </Typography>
                    <ul>
                      {stall.menu.map((item) => (
                        <li key={item.item}>
                          {item.item} - {item.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                // If the stall does not have a menu
                return (
                  <Typography variant="body2" color="text.secondary" key={stall.name}>
                    No menu available for {stall.name}.
                  </Typography>
                );
              }
            })} */}
          </CardContent>
        </Card>
        <BottomNavBar />
      </div>
    </div>
  );
}
