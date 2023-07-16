import './style.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from '../../assets/stall-layout.png';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Image1 from '../../assets/queue-full.png';
import Image2 from '../../assets/queue-empty.png';
import Image3 from '../../assets/stall-info-icon.png';
import Image4 from '../../assets/refresh-icon.png';

export const TableComponent = ({ data }) => {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.values(row).map((cell, cellIndex) => (
            <td 
              key={cellIndex}
              style={{ border: 'none', padding: '10px' }}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Sample data for table
  const data = [
    {
      column1: '',
      column2: 'No. of people',
      column3: 'Waiting Time (min)'
    },
    {
      column1: 'Chicken Rice',
      column2: '12',
      column3: '10'
    },
    {
      column1: 'Indian',
      column2: '-',
      column3: '-'
    },
    {
      column1: 'TaiWanese',
      column2: '7',
      column3: '10'
    },
    {
      column1: 'Healthy Soup',
      column2: '4',
      column3: '3'
    },
    {
      column1: 'Japanese & Korean',
      column2: '3',
      column3: '5'
    },
    {
      column1: 'Mixed Rice',
      column2: '2',
      column3: '0'
    },
    {
      column1: 'Drinks & Snacks',
      column2: '1',
      column3: '0'
    },
    {
      column1: 'Noodles',
      column2: '20',
      column3: '35'
    },
    {
      column1: 'Muslim',
      column2: '7',
      column3: '15'
    },
  ];

  // Return the Home component
  return (
    <>
      <Box sx={{ 
        width: '100%',
        height: '250px',
        bgcolor: '#E7E7E7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        
        <img 
          src={Image1} 
          alt="queue-full" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '87px',
            right: '270px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image2} 
          alt="queue-empty" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '87px',
            right: '220px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image2} 
          alt="queue-empty" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '87px',
            right: '170px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image3} 
          alt="stall-info-icon" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '180px',
            right: '217px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image3} 
          alt="stall-info-icon" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '180px',
            right: '121px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image3} 
          alt="stall-info-icon" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '110px',
            right: '48px',
            zIndex: 1
          }} 
        />
        <img 
          src={Image4} 
          alt="refresh-icon" 
          style={{ 
            width: '30px', 
            height: '30px', 
            position: 'absolute',
            top: '300px',
            right: '20px',
          }} 
        />

        <Box 
          sx={{ 
            width: '230px',
            height: '90px',
            position: 'absolute', 
            top: '55px',
            right: '120px',
            bgcolor: '#F8F8F8',
            borderRadius: '16px',
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ my: 1 }}>
            <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                Canteen Traffic
            </Typography>
          </Box>
          <Box sx={{ my: 1 }}>
            <Typography variant='body1' component='div' sx={{ ml: 2, textAlign: 'center' }}>
                Not crowded
            </Typography>
          </Box>
        </Box>
        <img src={Image} alt="imported" style={{marginTop: '30px', width: '320px', height: '170px'}}/>
        <IconButton 
          color="inherit" 
          aria-label="info about this layout"
          onClick={handleClickOpen}
          sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            color: '#86BD55',
          }}
        >
          <div>
            <InfoIcon />
          </div>
        </IconButton>
      </Box>
      <Dialog 
        onClose={handleClose} 
        open={open} 
        PaperProps={{ 
          sx: { 
            width: '83%', 
            height: '50%', 
            position: 'fixed', 
            top: 0, 
            right: 0 
          } 
        }}
      >
          <DialogTitle sx={{ fontWeight: 'bold', color: 'black', bgcolor: '#B1D490' }} >User Guide</DialogTitle>
          <DialogContent sx={{ bgcolor: '#B1D490' }}>
            asdf
          </DialogContent>
      </Dialog>
      <div className="home">  
      </div>
      <TableComponent data={data} />
    </>
  );
};

// Default export Home component
export default Home;