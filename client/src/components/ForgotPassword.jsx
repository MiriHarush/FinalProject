import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  IconButton,
  Grid,
  TextField,
  InputAdornment,
  Link as MuiLink,
  FormHelperText,
} from '@mui/material';
import Button from '@mui/material-next/Button';

import { ArrowBack as ArrowBackIcon, Email as EmailIcon } from '@mui/icons-material';
import ResetPassword from './ResetPassword';
import { UserContext } from '../context/users.context';
import '../css/lesson.css';
import { fontSize } from '@mui/system';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);

  const { forgotPassword } = useContext(UserContext);
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

    if (!validateEmail()) {
      return;
    }

    setLoading(true);

    try {
      const response = await forgotPassword(email);

      if (response.success) {
        setSuccessMessage(response.message);
        setConfirmationSent(true);
        setResetPassword(true);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToLogin = () => {
    setResetPassword(false);
    setEmail('');
    setConfirmationSent(false);
    setLoading(false);
    // navigate('/login');


    if (successMessage) {
      setSuccessMessage('');
      navigate('/login');
    }
  };

  return (
    <div component="main" maxWidth="m" className='centerContainer' style={{ padding: '10%'}}>
      <Paper elevation={3} style={{ padding: 50, display: 'flex', flexDirection: 'column', alignItems: 'center' ,background:'rgba(255, 255, 255, 0.56)'}}>
      {/* <Paper elevation={3} > */}
        <IconButton component={Link} to="/login" style={{ alignSelf: 'flex-start', marginBottom: 10, color:'rgb(174, 124, 61)' }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
          {resetPassword ? 'Password Reset Instructions' : 'Forgot Password'}
        </Typography>
        {resetPassword ? (
          <Typography variant="body1" style={{ color: 'rgb(174, 124, 61)', marginBottom: 20, textAlign: 'center' }}>
            {successMessage}
            <br />
            To confirm your password reset, check your email and follow the instructions.
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
                        <EmailIcon style={{ color: 'rgb(174, 124, 61)' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '&:focus': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                    '& label.Mui-focused': {
                      color: 'rgb(174, 124, 61)',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgb(174, 124, 61)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(174, 124, 61)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(174, 124, 61)',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              // color='rgb(174, 124, 61)'
              fullWidth
              style={{ display:'flex', justifyContent:'center'}}
              disabled={loading}
              className='courseButton'
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </Button>
            <FormHelperText style={{ marginTop: 10 , fontSize:20}}>
              Remember your password?{' '}
            <a style={{ color: 'rgb(174, 124, 61)', cursor: 'pointer' }} href="/login">Log In</a>

            </FormHelperText>
          </form>
        )}
      </Paper>
    </div>
  );
};

export default ForgotPassword;