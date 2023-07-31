import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css';
import ChickenRice from "assets/chicken-rice.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

<<<<<<< Updated upstream
import {
  Typography,
  IconButton,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./style.css";
import HPB from "assets/hpb.png";
import StarIcon from "assets/star-icon.png";
import BackIcon from "assets/back-icon.png";
import MenuTab from "assets/menu-tab.png";
import CalculatorTab from "assets/calculator-tab.png";
import stallInfos from "assets/stalls.json";
import Header from "components/Header";
import StarButton from "components/StarButton";

const StallImage = ({ filepath, alt }) => {
  const [imageSrc, setImageSrc] = useState("");
  import(`assets/${filepath}`).then((module) => setImageSrc(module.default));
=======
const StallInfo = () => {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
export default function StallInfo() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const [status, , isClosed] = useStatus();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [items, setItems] = useState([
    { item: "Rice", unit_price: "$1.50", quantity: 0 },
    { item: "Meat", unit_price: "$1.00", quantity: 0 },
    { item: "Vegetable", unit_price: "$0.50", quantity: 0 },
  ]);

  const handlePlusClick = (itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.item === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleMinusClick = (itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.item === itemName && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const computeTotalPrice = () => {
    return items
      .map((item) => parseFloat(item.unit_price.slice(1)) * item.quantity)
      .reduce((a, b) => a + b, 0);
  };
  
  const userGuideContent = (
    <>
      <Typography variant="body1">
        <u>Explore Menus</u>
        <br />
        <img
          src={MenuTab}
          alt="imported"
        />
        <br/>
        Navigate to the 'Menu' tab to discover stall details and view their menu lists.
        <br/>
        <br/>

        <u>Meal Price Estimation</u>
        <br />
        <img
          src={CalculatorTab}
          alt="imported"
        />
        <br/>
        Visit the 'Calculator' tab to estimate the cost of your meal.
        <br/>
        <br/>

        <u>Mark as Favourite</u>
        <br />
        <img
          src={StarIcon}
          alt="imported"
        />
        <br/>
        Press the star button to add a stall to your favourites list.
        <br />
        <br />

        <u>Return to Stall List</u>
        <br />
        <img
          src={BackIcon}
          alt="imported"
        />
        <br/>
        To go back to the stall list, press the back button located on the top left.
      </Typography>
    </>
  );

  return (
    <>
      <Header
        userGuideContent={userGuideContent}
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/stalls"
              style={{ flex: "0 0 auto", textDecoration: "none" }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="back"
                style={{ flex: "0 0 auto", color: "#FFFFFF" }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" style={{ flex: 1 }}>
              {stallInfos[id].name}
            </Typography>
          </div>
        }
      />
      <div className="tab-container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "menu" ? "active" : ""}`}
            onClick={() => handleTabChange("menu")}
          >
            Menu
          </button>
          <button
            className={`tab-button ${
              activeTab === "calculator" ? "active" : ""
            }`}
            onClick={() => handleTabChange("calculator")}
          >
            Calculator
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "menu" && (
            <div className="menu-tab">
              <StallInfoContent
                stallId={id}
                queueLength={status[id].queueLength}
                waitTime={status[id].waitTime}
                isClosed={isClosed(id)}
              />
            </div>
          )}
          {activeTab === "calculator" && (
            <div className="calculator-tab">
              <p>
                <TableContainer
                  component={Paper}
                  style={{ backgroundColor: "#FBD870" }}
                >
                  <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            fontWeight: 800,
                            padding: "20px",
                            borderBottom: "1px solid black",
                          }}
                        >
                          Item
                        </TableCell>
                        <TableCell
                          style={{
                            fontWeight: 800,
                            borderBottom: "1px solid black",
                          }}
                        >
                          Unit Price
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            fontWeight: 800,
                            padding: "20px",
                            borderBottom: "1px solid black",
                          }}
                        >
                          Qty
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {items.map((row) => (
                        <TableRow key={row.item}>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              padding: "20px",
                              borderBottom: "1px solid black",
                            }}
                          >
                            {row.item}
                          </TableCell>
                          <TableCell
                            style={{ borderBottom: "1px solid black" }}
                          >
                            {row.unit_price}
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              padding: "20px",
                              borderBottom: "1px solid black",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <IconButton
                                onClick={() => handleMinusClick(row.item)}
                                size="small"
                                edge="end"
                                style={{ marginRight: "8px" }}
                              >
                                <RemoveIcon />
                              </IconButton>
                              {row.quantity}
                              <IconButton
                                onClick={() => handlePlusClick(row.item)}
                                size="small"
                                edge="end"
                                style={{ marginLeft: "8px" }}
                              >
                                <AddIcon />
                              </IconButton>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="total-price-container">
                  <Typography variant="h6">
                    Total Price: ${computeTotalPrice().toFixed(2)}
                  </Typography>
                </div>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
=======
export default StallInfo;
>>>>>>> Stashed changes
