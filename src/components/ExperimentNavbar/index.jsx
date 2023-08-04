import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./style.css";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleConfirmation = (proceed) => {
    setOpen(false);
    if (proceed) {
      navigate('/end');
    }
  };

  return (
    <div className="bottom-navbar-container" style={{ position: 'fixed', bottom: 0, left: 0 }}>
      <button className="end-button" onClick={handleButtonClick}>
        I'm done deciding!
      </button>
      <Dialog open={open} onClose={() => handleConfirmation(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you have finished deciding?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmation(true)} color="error" autoFocus>
            Yes
          </Button>
          <Button onClick={() => handleConfirmation(false)} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BottomNavBar;
