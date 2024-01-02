// ResetPasswordForm.jsx

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
  Link as MuiLink,
} from '@mui/material';
import { Email as EmailIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const ResetPassword = ({ email, handleBackToLogin, handleResetPasswordSubmit, loading, setPasswordError }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError('');
  };

  const validatePassword = () => {
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    }

    return true;
  };

  return (
    <form onSubmit={handleResetPasswordSubmit} style={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            required
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 20 }}
        disabled={loading || !validatePassword()}
      >
        {loading ? 'Submitting...' : 'Finish'}
      </Button>
      <FormHelperText style={{ marginTop: 10 }}>
        Remember your password?{' '}
        <MuiLink onClick={handleBackToLogin} style={{ color: '#3f51b5', cursor: 'pointer' }}>
          Log In
        </MuiLink>
      </FormHelperText>
    </form>
  );
};

export default ResetPassword;
