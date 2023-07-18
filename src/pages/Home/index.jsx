import "./style.css";
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
import Person from "@mui/icons-material/Person";
import PersonOutline from "@mui/icons-material/PersonOutline";
import DoNotDisturb from "@mui/icons-material/DoNotDisturbOn";

import StallLayout from "assets/stall-layout.png";
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
          height: "70%",
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
        <img>
          {/* placeholder */}
        </img>
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
        <img>
          {/* placeholder */}
        </img>
        This indicator notifies users about potentially long queues at a particular stall.
        <img>
          {/* placeholder */}
        </img>
        <br/>
        This indicator notifies users about potentially closed stalls.
        <u>
        <br/>  
        <br/>
          Refresh Button
        </u>
        <img>
          {/* placeholder */}
        </img>
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

const Home = () => {
  const [open, setOpen] = useState(false);
  const [status, refreshStatus] = useStatus();
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
          bgcolor: "#86BD55",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Person
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "270px",
            zIndex: 1,
          }}
        />
        <PersonOutline
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "220px",
            zIndex: 1,
          }}
        />
        <PersonOutline
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "87px",
            right: "170px",
            zIndex: 1,
          }}
        />
        <Error
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "180px",
            right: "217px",
            zIndex: 1,
            color: "#fead3d",
          }}
        />
        <Error
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "180px",
            right: "121px",
            zIndex: 1,
            color: "#fead3d",
          }}
        />
        <DoNotDisturb
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "110px",
            right: "48px",
            zIndex: 1,
            color: "grey",
          }}
        />
        <IconButton
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "200px",
            right: "20px",
          }}
          onClick={refreshStatus}
        >
          <Refresh />
        </IconButton>

        <TrafficCard />
        <img
          src={StallLayout}
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
            color: "primary",
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
            {status.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
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
