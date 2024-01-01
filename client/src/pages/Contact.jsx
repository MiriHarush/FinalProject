import React from 'react';
import { Button, TextField, Container, Typography, Grid } from '@mui/material';
import styled from '@emotion/styled';

import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledContainer = styled(Container)({
  paddingTop: '50px',
});

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const SocialButton = styled(Button)({
  margin: '0 8px',
});

const Contact = () => {
  return (
    <StyledContainer>
      <Typography variant="h2" align="center" gutterBottom>
        צור קשר
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label="שם מלא" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="כתובת אימייל" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="הודעה" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <StyledButton
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            שלח
          </StyledButton>
        </Grid>
      </Grid>

      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px' }}>
        או צרו קשר באמצעות רשתות חברתיות
      </Typography>

      <Grid container justifyContent="center">
        <SocialButton
          variant="contained"
          color="primary"
          startIcon={<FacebookIcon />}
        >
          פייסבוק
        </SocialButton>
        <SocialButton
          variant="contained"
          color="secondary"
          startIcon={<EmailIcon />}
        >
          אימייל
        </SocialButton>
        <SocialButton
          variant="contained"
          color="default"
          startIcon={<PhoneIcon />}
        >
          טלפון
        </SocialButton>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;
