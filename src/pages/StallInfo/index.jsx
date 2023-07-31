import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css';
import ChickenRice from "assets/chicken-rice.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const StallInfo() {
  return (
    <div>
      <div className="stall-info-header">
        {/* Back Icon */}
        <ArrowBackIosIcon style={{ fontSize: 30, color: '#ffffff' }} />
        <div style={{ flexGrow: 1 }}></div>
        <Typography
          style={{
            textDecoration: 'underline',
            color: '#ffffff',
            fontSize: 20,
          }}
          className='justify-center'
        >
          help?
        </Typography>
      </div>
      <div className="green-block"></div>
      <div className="stall-info-container">
        <Card style={{ width: '370px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', height: '300px', marginBottom: '20px', zIndex: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200px"
              image={ChickenRice}
              alt="Chicken Rice"
            />
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
                Chicken Rice
              </Typography>
              <Typography variant="body2" color="text.secondary">
                12 mins
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ width: '370px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', marginBottom: '20px' }}>
          <CardActionArea>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Hainanese chicken rice specialty.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={{ width: '370px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
          <CardActionArea>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                Menu
              </Typography>
              {/* Add the menu content here */}
              <Typography variant="body2" color="text.secondary">
                - Item 1 <br />
                - Item 2 <br />
                - Item 3 <br />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default StallInfo;
