import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import StarOutline from "@mui/icons-material/StarOutline";

import HPB from "assets/hpb.png";
// TODO: Replace
import StallImage from "assets/chicken-rice.png";
import stallInfos from "assets/stalls.json";

export default function StallCard({ stallId }) {
  const navigate = useNavigate();
  const handleClick = () =>
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);
  const handleStarClick = (event) => {
    event.stopPropagation();
  };
  return (
    <Card sx={{ display: "flex", width: "90%" }}>
      <CardActionArea onClick={handleClick}>
        <Grid width="100%" container>
          <Grid
            xs={10}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "50px",
            }}
          >
            <CardContent>
              <Typography variant="h6" marginTop={1} component="div">
                <b>{stallInfos[stallId].name}</b>
              </Typography>
            </CardContent>
          </Grid>
          <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
            <CardActions>
              <IconButton
                aria-label="star"
                size="small"
                onClick={handleStarClick}
              >
                <StarOutline />
              </IconButton>
            </CardActions>
          </Grid>
          <Grid
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 70,
                width: 70,
                borderRadius: "100%",
              }}
              image={StallImage}
            ></CardMedia>
          </Grid>
          <Grid xs={7}>
            <CardContent>
              <Typography variant="body2" nowrap="true" allign="left">
                {"Hainanese chicken rice specialty."}
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: 50, width: 50 }}
              image={HPB}
            ></CardMedia>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
