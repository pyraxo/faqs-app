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

import "./style.css";
import stallsData from "assets/stalls.json";
import StallImage from "components/StallImage";
import Availability from "assets/availability.png";
import BottomNavBar from "components/ExperimentNavbar";
import UtilityIcons from "components/UtilityIcons";
import useLocalStorage from "hooks/useLocalStorage";
import LastUpdated from "components/LastUpdated";

export default function HomeB() {
  const navigate = useNavigate();
  const handleClick = (stallId) =>
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);

  const [anchorEl, setAnchorEl] = useState(null);
  const [sortType, setSortType] = useState("canteen");
  const [lastUpdated, setLastUpdated] = useLocalStorage(
    "lastUpdated",
    Date.now()
  );
  const handleClose = (option) => {
    setTimeout(() => {
      setAnchorEl(null);
      setSortType(option);
    }, 100);
  };
  const handleClickSort = (event) => {
    const target = event.currentTarget;
    setTimeout(() => setAnchorEl(target), 100);
  };

  const sortWrapper = (data) => {
    switch (sortType) {
      case "name": {
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      }
      case "queue": {
        return [...data].sort((a, b) => a.queue - b.queue);
      }
      case "canteen":
      default: {
        return data;
      }
    }
  };

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
          <MenuItem onClick={() => handleClose("name")}>Sort by name</MenuItem>
          <MenuItem onClick={() => handleClose("queue")}>
            Sort by queue
          </MenuItem>
          <MenuItem onClick={() => handleClose("canteen")}>
            Sort by canteen order
          </MenuItem>
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
              objectFit: "contain",
              alignContent: "center",
              justifyContent: "left",
              position: "inherit",
              height: "30vh",
              width: "100vw",
            }}
            alt="Availability"
          />
        </Stack>
      </Box>
      <Box className="verB-utility-bar">
        <LastUpdated lastUpdated={lastUpdated} />
        <UtilityIcons
          handleClickSort={handleClickSort}
          setLastUpdated={setLastUpdated}
        />
      </Box>
      <Container className="cards-container-B">
        <Stack
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {sortWrapper(stallsData).map((stall, index) => (
            <Card
              key={index}
              className="stall-card-B"
              sx={{ borderRadius: "10px", alignSelf: "center" }}
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
                            component="div"
                            sx={{
                              fontWeight: "700",
                              fontSize: "2vh",
                            }}
                          >
                            {stall.name}
                          </Typography>
                        </Box>
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
                        {stall.queue}
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
