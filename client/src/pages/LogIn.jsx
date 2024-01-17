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
// // import Button from '@mui/material-next/Button';

// import  "../css/LogIn.css"

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: 'rgb(174, 124, 61)',
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

//     if (!validateEmail()) {
//       return;
//     }

//     await login(formData);
//     navigate('/userPersonalArea');
//   };



//   return (
//   //   <Paper elevation={3} className="img" >
//   //    <ThemeProvider theme={theme}>
//   //      <Container component="main" maxWidth="xs" className='container-login' >
//   //        <Grid container spacing={2} justifyContent="center" alignItems="center">
//   //          <Grid item xs={12}>
//   //            <Typography variant="h4" align="center" gutterBottom  style={{ color: 'rgb(174, 124, 61)' }}>
//   //              Log In
//   //            </Typography>
//   //            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//   //              <Grid container spacing={2}>
//   //                <Grid item xs={12}>
//   //                  <TextField
//   //                    label="Email"
//   //                    type="email"
//   //                    fullWidth
//   //                    required
//   //                    name="email"
//   //                    value={formData.email}
//   //                    onChange={handleChange}
//   //                    error={Boolean(emailError)}
//   //                  />
//   //                  {emailError && <FormHelperText style={{ color: 'red' }}>{emailError}</FormHelperText>}
//   //                </Grid>
//   //                <Grid item xs={12}>
//   //                  <TextField
//   //                    label="Password"
//   //                    type="password"
//   //                    fullWidth
//   //                    required
//   //                    name="password"
//   //                    value={formData.password}
//   //                    onChange={handleChange}
//   //                  />
//   //                </Grid>
//   //              </Grid>
//   //              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' ,color: 'white' }}>
//   //               Log In
//   //             </Typography>
//   //             <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//   //               <Grid container spacing={2}>
//   //                 <Grid item xs={12}>
//   //                   <TextField
//   //                     label="Email"
//   //                     type="email"
//   //                     fullWidth
//   //                     required
//   //                     name="email"
//   //                     value={formData.email}
//   //                     onChange={handleChange}
//   //                     error={Boolean(emailError)}
//   //                   />
//   //                   {emailError && <FormHelperText style={{ color: 'red' }}>{emailError}</FormHelperText>}
//   //                 </Grid>
//   //                 <Grid item xs={12}>
//   //                   <TextField
//   //                     label="Password"
//   //                     type="password"
//   //                     fullWidth
//   //                     required
//   //                     name="password"
//   //                     value={formData.password}
//   //                     onChange={handleChange}
//   //                   />
//   //                 </Grid>
//   //               </Grid>
//   //               <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px', color: 'white' }}>
//   //                 Log In
//   //               </Button>
//   //               <Typography variant="body2" style={{ marginTop: 10 }}>
//   //                 <MuiLink component={Link} to="/forgot-password" style={{ color: 'rgb(174, 124, 61)' }}>
//   //                   Forgot your password?
//   //                 </MuiLink>
//   //                 <br />
//   //                 Don't have an account?{' '}
//   //                 <MuiLink component={Link} to="/signup" style={{ color: 'rgb(174, 124, 61)' }}>
//   //                   Sign Up
//   //                 </MuiLink>
//   //               </Typography>
//   //             </form>
//   //           </Grid>
//   //         </Grid>
//   //       </Container>
//   //     </ThemeProvider>
//   //   </Paper>
//   // );
//   <Paper elevation={3} className="img" >
//   <ThemeProvider theme={theme}>
//     <Container component="main" maxWidth="xs" className='container-login' >
//       <Grid container spacing={2} justifyContent="center" alignItems="center">
//         <Grid item xs={12}>
//           {/* <Typography variant="h4" align="center" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}> */}
//           <Typography variant="h4" align="center" gutterBottom  style={{ color: 'rgb(174, 124, 61)' }}>
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
//             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' ,color: 'white' }}>
//              Log In
//            </Button>
//          <Typography variant="body2" style={{ marginTop: 10 }}>
//            <MuiLink component={Link} to="/forgot-password" style={{ color: 'rgb(174, 124, 61)' }}>
//              Forgot your password?
//            </MuiLink>
//            <br />
//            Don't have an account?{' '}
//            <MuiLink component={Link} to="/signup" style={{ color: 'rgb(174, 124, 61)' }}>
//              Sign Up
//            </MuiLink>
//          </Typography>
//        </form>
//        </Grid>
//      </Grid>
//    </Container>
//  </ThemeProvider>
// </Paper>
// );
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
import '../css/LogIn.css';

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
  const [labelError, setLabelError] = useState(false); // <-- תיקון של שם המשתנה

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setEmailError('');
    setLabelError(false); // <-- תיקון של שם המשתנה
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

    if (!validateEmail()) {
      return;
    }

    const loggedUser = await login(formData);
    if (loggedUser.success === 'false') {
      setFormData({
        email: '',
        password: '',
      });
      setLabelError(true);
    } else {
      navigate('/userPersonalArea');
    }
  };

  return (
    <Paper elevation={3} className="img">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="container-login">
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
                {labelError && (
                  <Typography variant="h4" style={{ marginTop: 10 }}>
                    The email or password is incorrect
                  </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px', color: 'white' }}>
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
