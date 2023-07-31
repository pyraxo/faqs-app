import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ChickenRice from "assets/chicken-rice.png";
import "./style.css";
<<<<<<< Updated upstream
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Refresh from "@mui/icons-material/Refresh";
import Error from "@mui/icons-material/Error";
import DoNotDisturb from "@mui/icons-material/DoNotDisturbOn";

import StallLayout from "assets/stall-layout.png";
import CanteenTraffic from "assets/canteen-traffic.png";
import Warning from "assets/info-icon.png";
import Closed from "assets/minus-icon.png";
import RefreshQueue from "assets/refresh-icon.png";
import useStatus from "hooks/useStatus";
import TrafficCard from "components/TrafficCard";

export const HomeUserGuide = ({ open, handleClose }) => {
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: {
          width: "83%",
          height: "87%",
          position: "fixed",
          top: 0,
          right: 0,
        },
      }}
    >
      <DialogTitle
        sx={{ fontWeight: "bold", color: "black", bgcolor: "#B1D490" }}
      >
        User Guide
      </DialogTitle>
      <DialogContent
        sx={{
          bgcolor: "#B1D490"
          }}
      >
        <u>
          Canteen Traffic
        </u>
        <img
          src={CanteenTraffic}
          alt="imported"
          style={{
            width: "243px",
            height: "86.4px"
          }}
        />
        <br/>
        This feature allows you to assess the current crowd level in the canteen.
        <ul>
          <li>
            Very Crowded
          </li>
          <li>
            Normal
          </li>
          <li>
            Not Crowded
          </li>
        </ul>
        <u>
          Queue Advisory
        </u>
        <br/>
        <img
          src={Warning}
          alt="imported"
        />
        <br/>
        This indicator notifies users about potentially long queues at a particular stall.
        <br/>
        <img
          src={Closed}
          alt="imported"
        />
        <br/>
        This indicator notifies users about potentially closed stalls.
        <u>
        <br/>  
        <br/>
          Refresh Button
        </u>
        <br/>
        <img
          src={RefreshQueue}
          alt="imported"
        />
        <br/>
        To get the latest stall queue information, simply click the refresh button.
      </DialogContent>
    </Dialog>
  );
};

export const TableComponent = ({ data }) => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(row).map((cell, cellIndex) => (
            <td key={cellIndex} style={{ border: "none", padding: "10px" }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
=======
>>>>>>> Stashed changes

const Home = () => {
  return (
    <div className="container">
      <div className="green-block"></div>
      <div className="cards-container">
        <Card className="card">
          <CardMedia
            component="img"
            height="80px"
            image={ChickenRice}
            alt="Chicken Rice"
            paddingBottom="5px"
          />
          <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
            <Typography variant="h6" component="div" padding="5px" paddingBottom="0" sx={{ fontWeight: "bold", textAlign: "center" }}>
              Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary" padding="5px" sx={{ textAlign: "center" }}>
              This is the first card
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            component="img"
            height="80px"
            image={ChickenRice}
            alt="Chicken Rice"
          />
          <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
            <Typography variant="h6" component="div" padding="5px" paddingBottom="0" sx={{ fontWeight: "bold", textAlign: "center" }}>
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary" padding="5px" sx={{ textAlign: "center" }}>
              This is the second card
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
