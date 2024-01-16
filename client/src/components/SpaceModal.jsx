import React from 'react';
import { Paper, Typography } from '@mui/material';
import '../css/Space.css';


const SpaceModel = ({ nameSpace, ownerSpace, onClick }) => {
  return (
    <Paper
      className='space'
      onClick={onClick}
      elevation={3}
      style={{ cursor: 'pointer', padding: '10px', margin: '10px' }}
    >
      <Typography variant="h5" className='textCenter'>{nameSpace}</Typography>
    </Paper>
  );
};

export default SpaceModel;
