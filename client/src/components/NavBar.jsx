import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Log In</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign Up</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
