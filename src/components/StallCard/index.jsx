import Star from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Unstable_Grid2 as Grid,
  IconButton,
  Typography,
} from "@mui/material";

export default function StallCard({ stallName }) {
  return (
    <Card sx={{ display: "flex", width: "90%" }}>
      <Grid width="100%" container>
        <Grid xs={10} sx={{ display: "flex", justifyContent: "center" }}>
          <CardContent>
            <Typography>{stallName}</Typography>
          </CardContent>
        </Grid>
        <Grid xs={2} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton aria-label="star">
            <Star></Star>
          </IconButton>
        </Grid>
        <Grid xs={10}>
          <Box></Box>
        </Grid>
        <Grid xs={2}>
          <IconButton aria-label="star">
            <Star></Star>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
    // <Card sx={{ display: "flex", width: "90%" }}>
    //   <Box>
    //     <CardContent>{stallName}</CardContent>
    //     <Box>
    //       <CardMedia></CardMedia>
    //       <Box>
    //         <Box></Box>
    //         <Box></Box>
    //       </Box>
    //     </Box>
    //   </Box>
    //   <Box></Box>
    // </Card>
  );
}
