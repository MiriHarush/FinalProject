import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
  },
});

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    phone: '',
    howToContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
   
      e.preventDefault();
      const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
    
      try {
        const response = await fetch('http://localhost:3000/users/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataWithoutConfirmPassword),
        });
    
        if (response.ok) {
          console.log('Signup successful!');
        } else {
          console.error('Signup failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during signup:', error);
      }
    
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: '#e91e63' }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
           
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  required
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="userName"
                  type="text"
                  fullWidth
                  required
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="phone"
                  type="text"
                  fullWidth
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>


              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>How would you like us to contact you?</InputLabel>
                  <Select
                    name="howToContact"
                    value={formData.howToContact}
                    onChange={handleChange}
                    label="How would you like us to contact you?"
                  >
                    <MenuItem value="email">
                      <EmailIcon style={{ marginRight: '8px' }} />
                      Email
                    </MenuItem>
                    <MenuItem value="phone">
                      <PhoneIcon style={{ marginRight: '8px' }} />
                      Voice Call
                    </MenuItem>
                    <MenuItem value="sms">
                      <SmsIcon style={{ marginRight: '8px' }} />
                      SMS
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
