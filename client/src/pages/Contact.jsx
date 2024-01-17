import React, { useContext, useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { ContactContext } from '../context/contact.context';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(174, 124, 61)',
    },
  },
});

const Contact = () => {
  const { addContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    email: '',
    contentMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(formData);
    setFormData({ email: '',
    contentMessage: '',})
  };

  return (
    // <ThemeProvider theme={theme}>
    //   <Container style={{ paddingTop: '50px' }}>
    //     <Typography variant="h2" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
    //       Contact Us
    //     </Typography>

    //     <form onSubmit={handleSubmit}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12} sm={6}>
    //           <TextField
    //             label="כתובת אימייל"
    //             fullWidth
    //             variant="outlined"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             required
    //           />
    //         </Grid>
    //         <TextField
    //           label="הודעה"
    //           multiline
    //           rows={4}
    //           fullWidth
    //           variant="outlined"
    //           name="contentMessage"
    //           value={formData.contentMessage}
    //           onChange={handleChange}
    //           required
    //         />

    //         <Grid item xs={12}>
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             color="primary"
    //             style={{ background: 'rgb(174, 124, 61)' }}
    //           >
    //             שלח
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </Container>
    // 
    <>
    <ThemeProvider theme={theme}>
      <Container style={{ paddingTop: '50px' }}>
        <Typography variant="h2" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
          Contact Us
        </Typography>
        {/* 
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <TextField
              label="כתובת אימייל"
              fullWidth
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="הודעה"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              name="contentMessage"
              value={formData.contentMessage}
              onChange={handleChange}
              required
              style={{ marginBottom: '20px' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ background: 'rgb(174, 124, 61)' }}
            >
              שלח
            </Button>
          </Grid> */}
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginBottom: '20px' }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              name="contentMessage"
              value={formData.contentMessage}
              onChange={handleChange}
              required
              style={{ marginBottom: '20px' }}
            />

            <Grid container spacing={1} justifyContent="center" alignItems="center">

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ background: 'rgb(174, 124, 61)' }}
                onClick={handleSubmit}
              >
                send
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="../img/logob.png"   // קישור לתמונה
              alt="Contact Us"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    <Footer/>
    </>
  );
};

export default Contact;
