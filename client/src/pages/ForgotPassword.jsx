// import React, { useContext, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   Paper,
//   IconButton,
//   createTheme,
//   ThemeProvider,
//   Grid,
//   TextField,
//   InputAdornment,
//   Button,
//   Link as MuiLink,
//   FormHelperText,
// } from '@mui/material';
// import { ArrowBack as ArrowBackIcon, Email as EmailIcon } from '@mui/icons-material';
// import ResetPassword from './ResetPassword';
// import { UserContext } from '../context/users.context';

// const theme = createTheme();

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [resetPassword, setResetPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState('');

//   const { forgotPassword } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const validateEmail = () => {
//     const emailRegex = /\.(com|net|org)$/;

//     if (!emailRegex.test(email)) {
//       setEmailError('Invalid email format. Must end with .com, .net, or .org');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await forgotPassword(email);
//       console.log(response,'res');
//       if (response.success) {
//         setSuccessMessage(response.message);
//         setResetPassword(true);
//       } else {
//         setErrorMessage(response.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPasswordSubmit = async (e) => {
//     e.preventDefault();

//     if (!validatePassword()) {
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await resetPasswordFunction(email, newPassword);

//       if (response.success) {
//         setSuccessMessage(response.message);
//       } else {
//         setErrorMessage(response.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBackToLogin = () => {
//     setResetPassword(false);
//     setEmail('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setPasswordError('');
//     setSuccessMessage('');
//     setErrorMessage('');
//     setLoading(false);
//     navigate('/login');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <IconButton component={Link} to="/login" style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
//             <ArrowBackIcon />
//           </IconButton>
//           <Typography variant="h5" align="center" gutterBottom style={{ color: '#3f51b5' }}>
//             Forgot Password
//           </Typography>
//           {successMessage ? (
//             <Typography variant="body1" style={{ color: 'green', marginBottom: 20, textAlign: 'center' }}>
//               {successMessage}
//             </Typography>
//           ) : resetPassword ? (
//             <ResetPassword
//               email={email}
//               handleBackToLogin={handleBackToLogin}
//               handleResetPasswordSubmit={handleResetPasswordSubmit}
//               loading={loading}
//               setPasswordError={setPasswordError}
//             />
//           ) : (
//             <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Email"
//                     type="email"
//                     fullWidth
//                     required
//                     value={email}
//                     onChange={handleChange}
//                     error={Boolean(emailError)}
//                     helperText={emailError}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <EmailIcon style={{ color: '#3f51b5' }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 style={{ marginTop: 20 }}
//                 disabled={loading}
//               >
//                 {loading ? 'Sending...' : 'Reset Password'}
//               </Button>
//               <FormHelperText style={{ marginTop: 10 }}>
//                 Remember your password?{' '}
//                 <MuiLink onClick={handleBackToLogin} style={{ color: '#3f51b5', cursor: 'pointer' }}>
//                   Log In
//                 </MuiLink>
//               </FormHelperText>
//             </form>
//           )}
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default ForgotPassword;
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
  Button,
  Link as MuiLink,
  FormHelperText,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon, Email as EmailIcon } from '@mui/icons-material';
import ResetPassword from './ResetPassword';
import { UserContext } from '../context/users.context';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

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

  const handleSuccessMessageClick = () => {
    setSuccessMessage('');
    setResetPassword(true);
  };

  const handleBackToLogin = () => {
    setResetPassword(false);
    setEmail('');
    setLoading(false);

    if (successMessage) {
      handleSuccessMessageClick();
    } else {
      navigate('/login');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IconButton component={Link} to="/login" style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#3f51b5' }}>
          Forgot Password
        </Typography>
        {successMessage && !resetPassword && (
          <Typography variant="body1" style={{ color: 'green', marginBottom: 20, textAlign: 'center' }}>
            {successMessage}{' '}
            <MuiLink onClick={handleSuccessMessageClick} style={{ color: '#3f51b5', cursor: 'pointer' }}>
              Click here
            </MuiLink>{' '}
            to reset your password.
          </Typography>
        )}
        {resetPassword && (
          <ResetPassword
            email={email}
            handleBackToLogin={handleBackToLogin}
            // Pass other necessary props for ResetPassword component
          />
        )}
        {!successMessage && !resetPassword && (
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
              <MuiLink onClick={handleBackToLogin} style={{ color: '#3f51b5', cursor: 'pointer' }}>
                Log In
              </MuiLink>
            </FormHelperText>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
