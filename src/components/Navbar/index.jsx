import * as React from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Star, Home, MenuBook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
