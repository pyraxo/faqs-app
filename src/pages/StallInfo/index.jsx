import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Typography,
  IconButton,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import HPB from "assets/hpb.png";
import stallInfos from "assets/stalls.json";
import Header from "components/Header";
import "./style.css";
import useStatus from "hooks/useStatus";
import StarButton from "components/StarButton";
import useStarred from "hooks/useStarred";
// import useCalculator from "hooks/useCalculator";

function createData(item, unit_price, quantity) {
  return { item, unit_price, quantity };
}

const rows = [
  createData('Meat', '$1.00', 6.0),
  createData('Vegetable', '$0.50', 9.0),
  createData('Extra rice/noodles', '$0.50', 16.0),
];

const StallImage = ({ filepath, alt }) => {
  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${filepath}`).then((module) => setImageSrc(module.default));
  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{
        height: 70,
        width: 70,
        borderRadius: "100%",
      }}
    />
  );
};

const StallCard = ({ stallId, queueLength, waitTime }) => {
  const [toggleStars, isStarred] = useStarred();
  const handleStarClick = (event) => {
    event.stopPropagation();
    setTimeout(() => toggleStars(stallId), 100);
  };

  const { name, img, description } = stallInfos[stallId];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingBottom: "12px",
        }}
      >
        <Typography variant="h6" component="div" style={{ flex: 1 }}>
          <b>{name}</b>
        </Typography>
        <StarButton
          handleClick={handleStarClick}
          isStarred={() => isStarred(stallId)}
        />
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "12px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70px",
            paddingRight: "12px",
          }}
        >
          <StallImage
            filepath={img}
            alt={name}
            style={{
              height: 70,
              width: 70,
              borderRadius: "100%",
              alignItems: "center",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <CardContent style={{ padding: 0 }}>
            <Typography variant="body2" nowrap="true" align="left">
              {description}
            </Typography>
          </CardContent>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 12,
        }}
      >
        <img
          src={HPB}
          alt="HPB"
          style={{
            height: 50,
            width: 50,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 12,
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">No. of Queue</TableCell>
                <TableCell align="center">Est. Waiting Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">{queueLength}</TableCell>
                <TableCell align="center">{waitTime} minutes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const StallInfo = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const [status] = useStatus();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/stalls"
              style={{ flex: "0 0 auto", textDecoration: "none" }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                style={{ flex: "0 0 auto", color: "#FFFFFF" }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" style={{ flex: 1 }}>
              {stallInfos[id].name}
            </Typography>
          </div>
        }
      />
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
              <StallCard
                stallId={id}
                queueLength={status[id].queueLength}
                waitTime={status[id].waitTime}
              />
            </div>
          )}
          {activeTab === "calculator" && (
            <div className="calculator-tab">
              <p>
                <TableContainer component={Paper} style={{ backgroundColor: '#FBD870' }}>
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ fontWeight: 800, padding: '20px', borderBottom: '1px solid black' }}>Item</TableCell>
                        <TableCell style={{ fontWeight: 800, borderBottom: '1px solid black' }}>Unit Price</TableCell>
                        <TableCell style={{ fontWeight: 800, padding: '20px', borderBottom: '1px solid black' }}>Qty</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.item}
                        >
                          <TableCell component="th" scope="row" style={{ padding: '20px', borderBottom: '1px solid black' }}>
                            {row.item}
                          </TableCell>
                          <TableCell style={{ borderBottom: '1px solid black' }}>{row.unit_price}</TableCell>
                          <TableCell align="center" style={{ padding: '20px', borderBottom: '1px solid black' }}>{row.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StallInfo;