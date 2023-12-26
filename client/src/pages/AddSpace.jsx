import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const AddSpace = ({ onAddSpace, onConfirmAdd, open }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleConfirmAdd = () => {
    handleClose();
    onConfirmAdd(); // Notify the parent component about the confirmation
  };

  const handleClose = () => {
    // setAnchorEl(null);
    onAddSpace();
  };

  // const open = Boolean(anchorEl);

  const handleAddCourse = () => {
    handleClose();
  };

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div>
      {/* <Fab color="primary" aria-label="add" onClick={handleToggle} style={{ margin: '20px' }}>
        <AddIcon />
      </Fab> */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={2}>
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
              startAdornment: (
                <PersonIcon sx={{ color: '#FF4081' }} />
              ),
            }}
          />
          <TextField
            label="Space Manager Email"
            variant="outlined"
            defaultValue={user.email}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <MailOutlineIcon sx={{ color: '#FF4081' }} />
              ),
            }}
          />
          {/* <Button
            variant="contained"
            onClick={handleAddCourse}
            sx={{ backgroundColor: '#FF4081', color: '#fff', marginTop: '20px', width: '100%' }}
          >
            Add Course
          </Button> */}
          <Button
            variant="contained"
            onClick={handleConfirmAdd}
            sx={{ backgroundColor: '#4CAF50', color: '#fff', marginTop: '20px', width: '100%' }}
          >
            Confirm Add
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default AddSpace;

