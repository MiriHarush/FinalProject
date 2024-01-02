// // ResetPasswordForm.jsx

// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Grid,
//   Typography,
//   InputAdornment,
//   IconButton,
//   FormHelperText,
//   Link as MuiLink,
// } from '@mui/material';
// import { Email as EmailIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

// const ResetPassword = ({ email, handleBackToLogin, handleResetPasswordSubmit, loading, setPasswordError }) => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setPasswordError('');
//   };

//   const validatePassword = () => {
//     if (newPassword.length < 8) {
//       setPasswordError('Password must be at least 8 characters long');
//       return false;
//     }

//     if (newPassword !== confirmPassword) {
//       setPasswordError('Passwords do not match');
//       return false;
//     }

//     return true;
//   };

//   return (
//     <form onSubmit={handleResetPasswordSubmit} style={{ width: '100%' }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             label="New Password"
//             type="password"
//             fullWidth
//             required
//             value={newPassword}
//             onChange={handleNewPasswordChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             label="Confirm Password"
//             type="password"
//             fullWidth
//             required
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//           />
//         </Grid>
//       </Grid>
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         fullWidth
//         style={{ marginTop: 20 }}
//         disabled={loading || !validatePassword()}
//       >
//         {loading ? 'Submitting...' : 'Finish'}
//       </Button>
//       <FormHelperText style={{ marginTop: 10 }}>
//         Remember your password?{' '}
//         <MuiLink onClick={handleBackToLogin} style={{ color: '#3f51b5', cursor: 'pointer' }}>
//           Log In
//         </MuiLink>
//       </FormHelperText>
//     </form>
//   );
// };

// export default ResetPassword;

import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';
import { UserContext } from '../context/users.context';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useContext(UserContext);
  const { token } = useParams();

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password and confirm password
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (!isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword({ token, password });

      if (response.success) {
        // Password reset successful, handle as needed
        console.log('Password reset successful');
      } else {
        // Handle password reset failure
        console.error('Password reset failed:', response.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#3f51b5' }}>
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="New Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm New Password"
                type="password"
                fullWidth
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={Boolean(confirmPasswordError)}
                helperText={confirmPasswordError}
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
            {loading ? 'Resetting Password...' : 'Reset Password'}
          </Button>
          <FormHelperText style={{ marginTop: 10 }}>
            Remember your password? Log in <a href="/login">here</a>.
          </FormHelperText>
        </form>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
