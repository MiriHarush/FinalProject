import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddSpace = ({ onAddSpace, onConfirmAdd, open, anchorEl }) => {
  const [nameSpace, setNameSpace] = useState('');

  const handleConfirmAdd = () => {
    handleClose();
    console.log("nameeee", nameSpace);
    onConfirmAdd({nameSpace}); 
  };

  const handleClose = () => {
    onAddSpace();
  };

 
  const handleSpaceNameChange = (event) => {
    setNameSpace(event.target.value);
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
          value={nameSpace}
          onChange={handleSpaceNameChange}
          fullWidth
          margin="normal"
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


