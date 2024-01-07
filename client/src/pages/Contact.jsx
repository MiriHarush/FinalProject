import React from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(174, 124, 61)',
    },
  },
});

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <ThemeProvider theme={theme}>
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
        Contact Us
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
              style={{ background: 'rgb(174, 124, 61)' }}
              >
              שלח
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
                </ThemeProvider>
  );
};

export default Contact;
