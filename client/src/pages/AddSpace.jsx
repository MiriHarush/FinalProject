import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';


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
        <Typography variant="h6" gutterBottom sx={{ marginRight: '10px', color: 'rgb(174, 124, 61)' }}>
          Add New Space
        </Typography>
        <TextField
          label="Space Name"
          variant="outlined"
          value={nameSpace}
          onChange={handleSpaceNameChange}
          fullWidth
          margin="normal"
          sx={{
            marginBottom: '20px',
            width: '300px',
            borderRadius: '4px',
            '&:focus': {
              borderColor: 'rgb(174, 124, 61)',
            },
            '& label.Mui-focused': {
              color: 'rgb(174, 124, 61)',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
              '&:hover fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(174, 124, 61)',
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleConfirmAdd}
          // sx={{ backgroundColor: 'rgb(174, 124, 61)', color: 'white', marginTop: '20px', width: '100%' }}
          sx={{
            backgroundColor: 'rgb(174, 124, 61)',
            color: 'white',
            marginTop: '20px',
            width: '100%',
            '&:hover': {
              backgroundColor: 'new-color-for-hover',
              color: 'new-text-color-for-hover',
            },
          }}
        >
          Confirm Add
        </Button>
      </Box>
    </Popover>
  );
};

export default AddSpace;


