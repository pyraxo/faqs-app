import "./style.css";
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import Image from "../../assets/stall-layout.png";
import Image1 from "../../assets/queue-full.png";
import Image2 from "../../assets/queue-empty.png";
import Image3 from "../../assets/stall-info-icon.png";
import Image4 from "../../assets/refresh-icon.png";

export const HomeUserGuide = ({ open, handleClose }) => {
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        sx: {
          width: "83%",
          height: "50%",
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
      <DialogContent sx={{ bgcolor: "#B1D490" }}>asdf</DialogContent>
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

const Home = () => {
  const data = [
    {
      stallName: "Chicken Rice",
      queueLength: "12",
      waitTime: "10",
    },
    {
      stallName: "Indian",
      queueLength: "-",
      waitTime: "-",
    },
    {
      stallName: "TaiWanese",
      queueLength: "7",
      waitTime: "10",
    },
    {
      stallName: "Healthy Soup",
      queueLength: "4",
      waitTime: "3",
    },
    {
      stallName: "Japanese & Korean",
      queueLength: "3",
      waitTime: "5",
    },
    {
      stallName: "Mixed Rice",
      queueLength: "2",
      waitTime: "0",
    },
    {
      stallName: "Drinks & Snacks",
      queueLength: "1",
      waitTime: "0",
    },
    {
      stallName: "Noodles",
      queueLength: "20",
      waitTime: "35",
    },
    {
      stallName: "Muslim",
      queueLength: "7",
      waitTime: "15",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          bgcolor: "#E7E7E7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={Image1}
          alt="queue-full"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "270px",
            zIndex: 1,
          }}
        />
        <img
          src={Image2}
          alt="queue-empty"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "220px",
            zIndex: 1,
          }}
        />
        <img
          src={Image2}
          alt="queue-empty"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "170px",
            zIndex: 1,
          }}
        />
        <img
          src={Image3}
          alt="stall-info-icon"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "180px",
            right: "217px",
            zIndex: 1,
          }}
        />
        <img
          src={Image3}
          alt="stall-info-icon"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "180px",
            right: "121px",
            zIndex: 1,
          }}
        />
        <img
          src={Image3}
          alt="stall-info-icon"
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "110px",
            right: "48px",
            zIndex: 1,
          }}
        />
        <img
          src={Image4}
          alt="refresh-icon"
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "200px",
            right: "20px",
          }}
        />

        <Box
          sx={{
            width: "230px",
            height: "90px",
            position: "absolute",
            top: "55px",
            right: "120px",
            bgcolor: "#F8F8F8",
            borderRadius: "16px",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ my: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              Canteen Traffic
            </Typography>
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography
              variant="body1"
              component="div"
              sx={{ ml: 2, textAlign: "center" }}
            >
              Not crowded
            </Typography>
          </Box>
        </Box>
        <img
          src={Image}
          alt="imported"
          style={{ marginTop: "30px", width: "320px", height: "170px" }}
        />
        <IconButton
          color="inherit"
          aria-label="info about this layout"
          onClick={handleClickOpen}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: "#86BD55",
          }}
        >
          <InfoIcon />
        </IconButton>
      </Box>
      <HomeUserGuide open={open} handleClose={handleClose} />
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Stall</TableCell>
              <TableCell align="right">No. of People</TableCell>
              <TableCell align="right">Waiting Time&nbsp;(min)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.stallName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.stallName}
                </TableCell>
                <TableCell align="right">{row.queueLength}</TableCell>
                <TableCell align="right">{row.waitTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div className="queueTable" style={{ height: "20%", overflow: "scroll" }}>
        <TableComponent data={data} />
      </div> */}
    </>
  );
};

export default Home;
