import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Home from "@mui/icons-material/Home";
import MenuBook from "@mui/icons-material/MenuBook";
import Star from "@mui/icons-material/Star";

const routes = ["/", "stalls", "starred"];

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(routes[newValue]);
        }}
      >
        <BottomNavigationAction
          icon={<Home style={{ color: value === 0 ? "#86BD55" : "inherit" }} />}
        />
        <BottomNavigationAction
          icon={
            <MenuBook style={{ color: value === 1 ? "#86BD55" : "inherit" }} />
          }
        />
        <BottomNavigationAction
          icon={<Star style={{ color: value === 2 ? "#86BD55" : "inherit" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
