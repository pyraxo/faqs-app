import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import stallsData from "assets/stalls.json";
import StallImage from "components/StallImage";

export default function CardContainer({
  containerType,
  cardType,
  sortType,
  trackClick,
}) {
  const navigate = useNavigate();
  const handleClick = (stallId) => {
    trackClick("stall-card", { stallId });
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);
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
    <Container className={containerType}>
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
            className={cardType}
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
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
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
                      alignItems: "center",
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
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40%",
                        fontWeight: "800",
                      }}
                    >
                      {stall.queue}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40%",
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
  );
}
