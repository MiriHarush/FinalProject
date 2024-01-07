// import React, { useContext, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   FormHelperText,
//   Link as MuiLink,
// } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { UserContext } from '../context/users.context';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//     },
//   },
// });

// const LogIn = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [emailError, setEmailError] = useState('');

//   const { login } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     // Clear email error when user types
//     setEmailError('');
//   };

//   const validateEmail = () => {
//     const emailRegex = /\.(com|net|org)$/;

//     if (!emailRegex.test(formData.email)) {
//       setEmailError('Invalid email format. Must end with .com, .net, or .org');
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate email before attempting login
//     if (!validateEmail()) {
//       // Set emailError to display the error message
//       return;
//     }

//     // Call login function if email is valid
//     await login(formData);

//     navigate('/userPersonalArea');
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h4" align="center" gutterBottom style={{ color: '#3f51b5' }}>
//             Log In
//           </Typography>
//           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Email"
//                   type="email"
//                   fullWidth
//                   required
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={Boolean(emailError)}
//                 />
//                 {emailError && <FormHelperText style={{ color: 'red' }}>{emailError}</FormHelperText>}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Password"
//                   type="password"
//                   fullWidth
//                   required
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
//               Log In
//             </Button>
//             <Typography variant="body2" style={{ marginTop: 10 }}>
//               Don't have an account?{' '}
//               <MuiLink component={Link} to="/signup" style={{ color: '#3f51b5' }}>
//                 Sign Up
//               </MuiLink>
//             </Typography>
//           </form>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LogIn;

import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormHelperText,
  Link as MuiLink,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from '../context/users.context';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(174, 124, 61)',
    },
  },
});

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear email error when user types
    setEmailError('');
  };

  const validateEmail = () => {
    const emailRegex = /\.(com|net|org)$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError('Invalid email format. Must end with .com, .net, or .org');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before attempting login
    if (!validateEmail()) {
      // Set emailError to display the error message
      return;
    }

    // Call login function if email is valid
    await login(formData);

    navigate('/userPersonalArea');
  };

  return (
    <Paper elevation={3} className="img" >
    {/* style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'url("https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', minHeight: '100vh' }} */}
     <ThemeProvider theme={theme}>
       <Container component="main" maxWidth="xs" className='container-login' >
         <Grid container spacing={2} justifyContent="center" alignItems="center">
           <Grid item xs={12}>
             <Typography variant="h4" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
               Log In
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
                     error={Boolean(emailError)}
                   />
                   {emailError && <FormHelperText style={{ color: 'red' }}>{emailError}</FormHelperText>}
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
               </Grid>
               <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' ,color: 'white' }}>
                Log In
              </Button>
            <Typography variant="body2" style={{ marginTop: 10 }}>
              <MuiLink component={Link} to="/forgot-password" style={{ color: 'rgb(174, 124, 61)' }}>
                Forgot your password?
              </MuiLink>
              <br />
              Don't have an account?{' '}
              <MuiLink component={Link} to="/signup" style={{ color: 'rgb(174, 124, 61)' }}>
                Sign Up
              </MuiLink>
            </Typography>
          </form>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  </Paper>
  );
};

export default LogIn;
