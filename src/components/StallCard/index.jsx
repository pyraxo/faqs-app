import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";

import stallInfos from "assets/stalls.json";


export default function StallCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Chicken Rice
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ksgbskhfshflsnfvl
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
