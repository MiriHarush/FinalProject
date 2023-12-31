import React from 'react';
import { Paper, Typography } from '@mui/material';

const SpaceModel = ({ name, manager, onClick }) => {
  return (
    <Paper
      onClick={onClick}
      elevation={3}
      style={{ cursor: 'pointer', padding: '20px', margin: '20px', backgroundColor: '#f0f0f0' }}
    >
      <Typography variant="h5">Name: {name}</Typography>
      <Typography variant="body1">Manager: {manager}</Typography>
    </Paper>
  );
};

export default SpaceModel;
