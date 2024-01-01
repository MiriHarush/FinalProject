import React from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        צור קשר
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="שם מלא" fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="כתובת אימייל" fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="הודעה" multiline rows={4} fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
            >
              שלח
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
