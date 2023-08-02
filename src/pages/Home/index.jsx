import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stallsData from "assets/stalls.json";
import "./style.css";

import ChickenRiceImage from "assets/chicken-rice.png"
import IndianImage from "assets/indian.png"
import TaiWaneseImage from "assets/taiwanese.png"
import HealthySoupImage from "assets/healthy-soup.png"
import MixedRiceImage from "assets/mixed-rice.png"
import DrinksImage from "assets/drinks.png"
import BanMianImage from "assets/banmian.png"

const getImageByStall = (stallName) => {
  switch (stallName) {
    case "Chicken Rice":
      return ChickenRiceImage;
    case "Indian":
      return IndianImage;
    case "TaiWanese":
      return TaiWaneseImage;
    case "Healthy Soup":
      return HealthySoupImage;
    case "Mixed Rice":
      return MixedRiceImage;
    case "Drinks & Snacks":
      return DrinksImage;
    case "Ban Mian":
      return BanMianImage;
  }
};

const Home = () => {
  return (
    <div>
      <div className="green-block"></div>
      <div className="white-block">
        <div className="cards-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {stallsData.map((stall, index) => (
            <Card key={index} className="card">
              <CardMedia
                component="img"
                height="80px"
                image={getImageByStall(stall.name)}
                alt={stall.name}
                paddingBottom="5px"
              />
              <CardContent sx={{ padding: 0, paddingBottom: 0 }}>
                <Typography variant="h6" component="div" padding="5px" paddingBottom="0" sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {stall.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" padding="5px" sx={{ textAlign: "center" }}>
                  This is the first card
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
