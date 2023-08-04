import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Card from "@mui/material/Card";
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';

import "./style.css";
import BottomNavBar from "components/ExperimentNavbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import data from "../../assets/stalls.json";

export const UserGuide = ({ open, handleUserGuideClose }) => {
  return (
    <Dialog
      onClose={handleUserGuideClose}
      open={open}
      PaperProps={{
        sx: {
          width: "80%",
          minHeight: "60%",
          position: "fixed",
          top: 10,
          right: 0,
          borderRadius: "10px"
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", color: "black", bgcolor: "#B1D490", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        User Guide
        <CloseIcon onClick={handleUserGuideClose} style={{ cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#B1D490" }}>
        <u>Refresh Button</u>
        <br/>
        To get the latest stall queue information, simply click the refresh button.
        <br/>
        <br/>
        <u>Sort Button</u>
        <br/>
        Sort Stalls by stall name, stall queue, canteen order
        <br/>
        <br/>
        <u>Closed Stalls</u>
        <br/>
        Stall card will be greyed out when closed. This indicates that the stall is not currently in operation and is not accepting orders.
      </DialogContent>
    </Dialog>
  );
};

export default function StallInfo() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/experiment/1');
  };

  const [open, setOpen] = useState(false);

  const handleUserGuideOpen = () => {
    setOpen(true);
  };

  const handleUserGuideClose = () => {
    setOpen(false);
  };

  // Extracting Stall ID from URL
  const location = useLocation();
  const currentURL = "/stalls/";
  const stall_id = location.pathname.replace(currentURL, ""); // Extract the "number" from the URL
  const dynamicDescription = data[Number(stall_id)].description;
  const dynamicMenu = data[Number(stall_id)].menu;
  const dynamicName = data[Number(stall_id)].name;
  const dynamicImage = data[Number(stall_id)].img;
  const ImagePath = require(`../../assets/${dynamicImage}`);

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
          onClick={handleUserGuideOpen}
        >
          help?
        </Typography>
        <UserGuide open={open} handleUserGuideClose={handleUserGuideClose}/>
      </div>
      <div className="green-block">
      </div>
      <div className="stall-info-container">
        <Card style= {{ marginBottom: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
          <CardMedia
            component="img"
            style={{
              height: "250px",
              width: "370px",
              objectFit: "cover"
            }}
            width="370px"
            image={ImagePath}
            alt={dynamicName}
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
              <div>
                {dynamicName}
              </div>
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
            <div>
              {dynamicDescription}
            </div>
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
