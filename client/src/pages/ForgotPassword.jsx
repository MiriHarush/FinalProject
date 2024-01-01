import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
  FormHelperText,
  Link as MuiLink,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Email as EmailIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { UserContext } from '../context/users.context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
});

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = useContext(UserContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const validateEmail = () => {
    const emailRegex = /\.(com|net|org)$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format. Must end with .com, .net, or .org');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before submitting
    if (!validateEmail()) {
      return;
    }

    // Simulate a loading state while handling the forgot password logic
    setLoading(true);

    const msg = forgotPassword(email);
    console.log(msg);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IconButton component={Link} to="/login" style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" align="center" gutterBottom style={{ color: '#3f51b5' }}>
            Forgot Password
          </Typography>
          {successMessage ? (
            <Typography variant="body1" style={{ color: 'green', marginBottom: 20, textAlign: 'center' }}>
              {successMessage}
            </Typography>
          ) : (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={handleChange}
                    error={Boolean(emailError)}
                    helperText={emailError}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon style={{ color: '#3f51b5' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 20 }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Reset Password'}
              </Button>
              <FormHelperText style={{ marginTop: 10 }}>
                Remember your password?{' '}
                <MuiLink component={Link} to="/login" style={{ color: '#3f51b5' }}>
                  Log In
                </MuiLink>
              </FormHelperText>
            </form>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPassword;
