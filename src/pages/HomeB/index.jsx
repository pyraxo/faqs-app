import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Box,
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  Menu,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Sort from "@mui/icons-material/Sort";
import Refresh from "@mui/icons-material/Refresh";

import "./style.css";
import stallsData from "assets/stalls.json";
import StallImage from "components/StallImage";
import Availability from "assets/availability.png";
import BottomNavBar from "components/ExperimentNavbar";

export default function HomeA() {
  const navigate = useNavigate();
  const handleClick = (stallId) =>
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setTimeout(() => setAnchorEl(null), 100);
  };
  const handleClickSort = (event) => {
    const target = event.currentTarget;
    setTimeout(() => setAnchorEl(target), 100);
  };

  const [times, setTimes] = useState([]);
  useEffect(
    () => setTimes(stallsData.map(() => Math.floor(Math.random() * 10) + 5)),
    []
  );
  return (
    <>
      <Box className="verB-header">
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "sort-button",
          }}
        >
          <MenuItem onClick={handleClose}>Sort by name</MenuItem>
          <MenuItem onClick={handleClose}>Sort by queue</MenuItem>
          <MenuItem onClick={handleClose}>Sort by canteen order</MenuItem>
        </Menu>
        <Stack
          spacing={1}
          sx={{
            direction: "column",
            backgroundColor: "#86bd55",
          }}
        >
          <img
            src={Availability}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "auto",
              height: "30vh",
              alignContent: "center",
              justifyContent: "left",
            }}
            alt="Availability"
          />
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5vh", alignSelf: "center" }}>
              waiting times last updated: {"2m"} ago
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
                mt: "1vh",
              }}
            >
              <IconButton
                size="large"
                aria-label="sort"
                onClick={handleClickSort}
                id="sort-button"
                sx={{ height: "1vh" }}
              >
                <Sort />
              </IconButton>
              <IconButton
                size="large"
                aria-label="refresh"
                onClick={() => {}}
                color="inherit"
                id="sort-button"
                sx={{ height: "1vh" }}
              >
                <Refresh />
              </IconButton>
            </Box>
          </Box> */}
        </Stack>
      </Box>

      <Container className="cards-container-B">
        <Stack spacing={3}>
          {stallsData.map((stall, index) => (
            <Card
              key={index}
              className="stall-card-B"
              sx={{ borderRadius: "10px" }}
            >
              <CardActionArea
                component="div"
                sx={{ height: "100%" }}
                onClick={() => handleClick(index)}
              >
                <Grid sx={{ height: "100%" }} container spacing={0}>
                  <Grid xs={3}>
                    <StallImage
                      stall={stall}
                      filepath={stall.img}
                      style={{ height: "10vh" }}
                    />
                  </Grid>
                  <Grid xs={6} sx={{ height: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "80vw",
                        height: "100%",
                        alignContent: "center",
                        justifyContent: "left",
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <Typography
                          component="div"
                          sx={{
                            fontWeight: "700",
                            fontSize: "2vh",
                          }}
                        >
                          {stall.name}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Grid>
                  <Grid xs={3} sx={{ height: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "right",
                        height: "100%",
                        mr: "1vw",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center",
                          justifyContent: "center",
                          width: "50%",
                          fontWeight: "800",
                        }}
                      >
                        {times[index]}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center",
                          justifyContent: "center",
                          width: "50%",
                        }}
                      >
                        min
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Container>
      <BottomNavBar />
    </>
  );
}
