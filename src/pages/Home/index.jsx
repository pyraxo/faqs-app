import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ChickenRice from "assets/chicken-rice.png";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div className="green-block"></div>
      <div className="cards-container">
        <Card className="card">
          <CardMedia
            component="img"
            height="80px"
            image={ChickenRice}
            alt="Chicken Rice"
            paddingBottom="5px"
          />
          <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
            <Typography variant="h6" component="div" padding="5px" paddingBottom="0" sx={{ fontWeight: "bold", textAlign: "center" }}>
              Card 1
            </Typography>
            <Typography variant="body2" color="text.secondary" padding="5px" sx={{ textAlign: "center" }}>
              This is the first card
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardMedia
            component="img"
            height="80px"
            image={ChickenRice}
            alt="Chicken Rice"
          />
          <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
            <Typography variant="h6" component="div" padding="5px" paddingBottom="0" sx={{ fontWeight: "bold", textAlign: "center" }}>
              Card 2
            </Typography>
            <Typography variant="body2" color="text.secondary" padding="5px" sx={{ textAlign: "center" }}>
              This is the second card
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
