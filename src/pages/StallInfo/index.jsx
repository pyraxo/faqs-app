import "./style.css";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTracking } from "react-tracking";

import BottomNavBar from "components/ExperimentNavbar";
import data from "../../assets/stalls.json";
import { isDashboardEnabled } from "components/VersionCheck";

export default function StallInfo() {
  const { Track, trackEvent } = useTracking({ page: "StallsInfo" });
  const navigate = useNavigate();
  const { id } = useParams();
  const { description, menu, name, img, queue } = data[parseInt(id)];

  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${img}`).then((module) => setImageSrc(module.default));

  const handleButtonClick = () => {
    navigate(`/experiment/${isDashboardEnabled ? 2 : 1}`);
  };

  const trackClick = (name) =>
    trackEvent({
      action: "click",
      name,
      timestamp: Date.now(),
      stallId: id,
    });

  return (
    <Track>
      <ArrowBackIosIcon
        className="back-icon"
        sx={{ fontSize: 30, color: "#ffffff" }}
        onClick={handleButtonClick}
      />
      <Box className="green-block" />
      <Container className="stall-info-container">
        <Card
          sx={{
            width: "80vw",
            height: "40dvh",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            marginBottom: "2dvh",
            // display: "flex",
            // flexDirection: "column",
            // alignContent: "center",
            // justifyContent: "center",
          }}
          onClick={() => trackClick("stall-card")}
        >
          <CardMedia
            component="img"
            image={imageSrc}
            alt={name}
            className="card-image"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              width: "100%",
              height: "10dvh",
            }}
          >
            <Typography
              sx={{
                fontSize: "2dvh",
                fontWeight: "700",
              }}
            >
              {name}
            </Typography>
            <Typography sx={{ fontSize: "2dvh" }}>
              <b>{queue}</b> mins
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "80vw",
            height: "10dvh",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            marginBottom: "2dvh",
          }}
          onClick={() => trackClick("stall-description")}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5dvh", textAlign: "center" }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
        <Card
          style={{
            width: "80vw",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            height: menu ? "26dvh" : "10dvh",
          }}
          onClick={() => trackClick("stall-menu")}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Menu
            </Typography>
            {menu ? (
              <TableContainer
                component="div"
                sx={{ width: "80vw", height: "20dvh" }}
              >
                <Table sx={{ width: "80vw" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Items</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {menu &&
                      menu.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.item}
                          </TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="body2" color="textSecondary" key={name}>
                No menu available for {name} stall.
              </Typography>
            )}
          </CardContent>
        </Card>
        <BottomNavBar trackClick={trackClick} />
      </Container>
    </Track>
  );
}
