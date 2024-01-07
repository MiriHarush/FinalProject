import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
const ReplyComment = ({  user, text }) => {
  return (
    <Paper elevation={3} style={{ padding: '15px', marginTop: '15px', marginLeft: '50px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            <strong>{user}</strong>: {text}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReplyComment;
