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
import { grey } from "@mui/material/colors";
import DoNotDisturb from "@mui/icons-material/DoNotDisturb";

import HPB from "assets/hpb.png";
import stallInfos from "assets/stalls.json";
import StarButton from "components/StarButton";

export const StallImage = ({ filepath, alt }) => {
  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${filepath}`).then((module) => setImageSrc(module.default));
  return (
    <CardMedia
      component="img"
      sx={{
        height: 70,
        width: 70,
        borderRadius: "100%",
      }}
      image={imageSrc}
      alt={alt}
    />
  );
};

export default function StallCard({
  stallId,
  toggleStars,
  isStarred,
  isClosed,
}) {
  const navigate = useNavigate();

  const handleClick = () =>
    setTimeout(() => navigate(`/stalls/${stallId}`), 200);
  const handleStarClick = (event) => {
    event.stopPropagation();
    setTimeout(() => toggleStars(stallId), 100);
  };
  const { name, img, description } = stallInfos[stallId];
  console.log(isClosed);

  return (
    <Card
      sx={{
        display: "flex",
        width: "90%",
        backgroundColor: isClosed ? grey[300] : "white",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Grid width="100%" container>
          <Grid
            xs={10}
            sx={{ display: "flex", alignItems: "center", height: "50px" }}
          >
            <CardContent>
              <Typography variant="h6" marginTop={1} component="div">
                <b>{name}</b>
              </Typography>
            </CardContent>
          </Grid>
          <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
            <CardActions>
              <StarButton
                handleClick={handleStarClick}
                isStarred={() => isStarred(stallId)}
              />
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
            {isClosed ? (
              <>
                <StallImage filepath={img} alt={name} />
                <DoNotDisturb
                  sx={{
                    color: grey[800],
                    height: 80,
                    width: 80,
                    position: "absolute",
                  }}
                />
              </>
            ) : (
              <StallImage filepath={img} alt={name} />
            )}
          </Grid>
          <Grid xs={7}>
            <CardContent>
              <Typography
                variant="body2"
                nowrap="true"
                align="justify"
                mt="-15px"
              >
                {description}
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
            />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
