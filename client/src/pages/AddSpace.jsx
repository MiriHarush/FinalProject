import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const AddSpace = ({ onAddSpace, onConfirmAdd, open, anchorEl }) => {
  const handleConfirmAdd = () => {
    
    handleClose();
    onConfirmAdd(); // Notify the parent component about the confirmation
  };

  const handleClose = () => {
    onAddSpace();
  };

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box p={2} sx={{ width: '400px', textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Add New Space
        </Typography>
        <TextField
          label="Space Name"
          variant="outlined"
          defaultValue={user.name}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: <PersonIcon sx={{ color: '#FF4081' }} />,
          }}
        />
        <TextField
          label="Space Manager Email"
          variant="outlined"
          defaultValue={user.email}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: <MailOutlineIcon sx={{ color: '#FF4081' }} />,
          }}
        />
        <Button
          variant="contained"
          onClick={handleConfirmAdd}
          sx={{ backgroundColor: '#4CAF50', color: '#fff', marginTop: '20px', width: '100%' }}
        >
          Confirm Add
        </Button>
      </Box>
    </Popover>
  );
};

export default AddSpace;


