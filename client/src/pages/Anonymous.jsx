// Anonymous.jsx
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Anonymous = () => {
  const handleLogout = () => {
    // פונקציה שתטפל בהתנתקות
    console.log("Logout functionality"); // לשנות כדי להתנתק בפועל
    window.location.reload(); // טעינה מחדש של הדף
  };

  const handleLogin = () => {
    // פונקציה שתטפל בהתחברות
    console.log("Redirect to login page"); // לשנות כדי להפנות לעמוד ההתחברות
    window.location.href = '/login'; // הפנייה לדף ההתחברות
  };

  const handleExploreSpaces = () => {
    // פונקציה שתטפל בצפייה במרחבים
    console.log("Redirect to explore spaces page"); // לשנות כדי להפנות לעמוד צפייה במרחבים
    window.location.href = '/explore-spaces'; // הפנייה לדף צפייה במרחבים
  };

  const handleCreateSpace = () => {
    // פונקציה שתטפל ביצירת מרחב חדש
    console.log("Redirect to create space page"); // לשנות כדי להפנות לעמוד יצירת מרחב
    window.location.href = '/create-space'; // הפנייה לדף יצירת מרחב
  };

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome, Guest!
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        As a guest, you have limited access. To enjoy more features, consider signing up.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/* פעולת היציאה */}
        <Button variant="contained" color="primary" onClick={handleLogout} style={{ marginBottom: '10px' }}>
          Logout
        </Button>

        {/* פעולת ההתחברות */}
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginBottom: '10px' }}>
          Login
        </Button>

        {/* פעולת הצפייה במרחבים */}
        <Button variant="contained" color="primary" onClick={handleExploreSpaces} style={{ marginBottom: '10px' }}>
          Explore Spaces
        </Button>

        {/* פעולת יצירת מרחב */}
        <Button variant="contained" color="primary" onClick={handleCreateSpace}>
          Create Space
        </Button>
      </Box>
    </Container>
  );
};

export default Anonymous;
