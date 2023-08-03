import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import "./style.css";
import stallsData from "assets/stalls.json";
import StallImage from "components/StallImage";
import Logo from "assets/logo-black.png";
import BottomNavBar from "components/ExperimentNavbar";

export default function HomeA() {
  const navigate = useNavigate();
  const handleClick = (stallId) =>
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);
  return (
    <>
      <Box className="verA-header">
        <Stack
          spacing={1}
          sx={{
            direction: "column",
          }}
        >
          <img
            src={Logo}
            style={{ width: "auto", height: "10vh" }}
            alt="logo"
          />
          <Typography sx={{ fontSize: "1.5vh", alignSelf: "center" }}>
            waiting times last updated: {"2m"} ago
          </Typography>
        </Stack>
      </Box>
      <Container className="cards-container">
        <Stack spacing={3}>
          {stallsData.map((stall, index) => (
            <Card
              key={index}
              className="stall-card"
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
                        {Math.floor(Math.random() * 10) + 5}
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
