import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon style={{ color: value === 0 ? '#86BD55' : 'inherit' }} />} />
        <BottomNavigationAction icon={<MenuBookIcon style={{ color: value === 1 ? '#86BD55' : 'inherit' }} />} />
        <BottomNavigationAction icon={<StarIcon style={{ color: value === 2 ? '#86BD55' : 'inherit' }} />} />
      </BottomNavigation>
    </Box>
  );
}
