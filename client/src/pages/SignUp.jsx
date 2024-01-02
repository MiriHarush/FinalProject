// // // import React, { useState } from 'react';
// // // import {
// // //   Container,
// // //   Typography,
// // //   TextField,
// // //   Button,
// // //   Grid,
// // //   Paper,
// // //   Select,
// // //   MenuItem,
// // //   InputLabel,
// // //   FormControl,
// // // } from '@mui/material';
// // // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // import EmailIcon from '@mui/icons-material/Email';
// // // import PhoneIcon from '@mui/icons-material/Phone';
// // // import SmsIcon from '@mui/icons-material/Sms';

// // // const theme = createTheme({
// // //   palette: {
// // //     primary: {
// // //       main: '#e91e63',
// // //     },
// // //   },
// // // });

// // // const SignUp = () => {
// // //   const [formData, setFormData] = useState({
// // //     name:'',
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     userName: '',
// // //     phone: '',
// // //     contact: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// // //   };

// // //   const handleSubmit = async (e) => {

// // //       e.preventDefault();
// // //       const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;

// // //       try {
// // //         const response = await fetch('http://localhost:3000/users/createUser', {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify(formDataWithoutConfirmPassword),
// // //         });

// // //         if (response.ok) {
// // //           console.log('Signup successful!');
// // //         } else {
// // //           console.error('Signup failed:', response.status, response.statusText);
// // //         }
// // //       } catch (error) {
// // //         console.error('An error occurred during signup:', error);
// // //       }


// // //   };

// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <Container component="main" maxWidth="xs">
// // //         <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //           <Typography variant="h4" align="center" gutterBottom style={{ color: '#e91e63' }}>
// // //             Sign Up
// // //           </Typography>
// // //           <form onSubmit={handleSubmit} style={{ width: '100%' }}>

// // //             <Grid container spacing={2}>
// // //             <Grid item xs={12}>
// // //                 <TextField
// // //                   label="Name"
// // //                   type="text"
// // //                   fullWidth
// // //                   required
// // //                   name="name"
// // //                   value={formData.name}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>
// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   label="Email"
// // //                   type="email"
// // //                   fullWidth
// // //                   required
// // //                   name="email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>
// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   label="Password"
// // //                   type="password"
// // //                   fullWidth
// // //                   required
// // //                   name="password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>

// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   label="Confirm Password"
// // //                   type="password"
// // //                   fullWidth
// // //                   required
// // //                   name="confirmPassword"
// // //                   value={formData.confirmPassword}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>

// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   label="userName"
// // //                   type="text"
// // //                   fullWidth
// // //                   required
// // //                   name="userName"
// // //                   value={formData.userName}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>

// // //               <Grid item xs={12}>
// // //                 <TextField
// // //                   label="phone"
// // //                   type="text"
// // //                   fullWidth
// // //                   required
// // //                   name="phone"
// // //                   value={formData.phone}
// // //                   onChange={handleChange}
// // //                 />
// // //               </Grid>


// // //               <Grid item xs={12}>
// // //                 <FormControl fullWidth required>
// // //                   <InputLabel>How would you like us to contact you?</InputLabel>
// // //                   <Select
// // //                     name="contact"
// // //                     value={formData.contact}
// // //                     onChange={handleChange}
// // //                     label="How would you like us to contact you?"
// // //                   >
// // //                     <MenuItem value="Email">
// // //                       <EmailIcon style={{ marginRight: '8px' }} />
// // //                       Email
// // //                     </MenuItem>
// // //                     <MenuItem value="Phone">
// // //                       <PhoneIcon style={{ marginRight: '8px' }} />
// // //                       Voice Call
// // //                     </MenuItem>
// // //                     <MenuItem value="SMS">
// // //                       <SmsIcon style={{ marginRight: '8px' }} />
// // //                       SMS
// // //                     </MenuItem>
// // //                   </Select>
// // //                 </FormControl>
// // //               </Grid>
// // //             </Grid>
// // //             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
// // //               Sign Up
// // //             </Button>
// // //           </form>
// // //         </Paper>
// // //       </Container>
// // //     </ThemeProvider>
// // //   );
// // // };

// // // export default SignUp;

// // import React, { useContext, useState } from 'react';
// // import {
// //   Container,
// //   Typography,
// //   TextField,
// //   Button,
// //   Grid,
// //   Paper,
// //   Select,
// //   MenuItem,
// //   InputLabel,
// //   FormControl,
// //   InputAdornment,
// //   IconButton,
// //   FormHelperText,
// // } from '@mui/material';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import EmailIcon from '@mui/icons-material/Email';
// // import PhoneIcon from '@mui/icons-material/Phone';
// // import SmsIcon from '@mui/icons-material/Sms';
// // import Visibility from '@mui/icons-material/Visibility';
// // import VisibilityOff from '@mui/icons-material/VisibilityOff';
// // import { UserContext } from '../context/users.context'
// // const theme = createTheme({
// //   palette: {
// //     primary: {
// //       main: '#e91e63',
// //     },
// //   },
// // });

// // const SignUp = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     userName: '',
// //     phone: '',
// //     contact: '',
// //   });

// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [passwordError, setPasswordError] = useState(false);
// //   const [nameError, setNameError] = useState(false);
// //   const [emailError, setEmailError] = useState(false);
// //   const { signup } = useContext(UserContext);
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     let updatedValue = value;

// //     // Add additional validation based on the field name
// //     if (name === 'name') {
// //       // Allow only letters and spaces
// //       updatedValue = updatedValue.replace(/[^A-Za-z\s]/g, '');
// //       setNameError(!/^[A-Za-z\s]+$/.test(updatedValue));
// //     } else if (name === 'phone') {
// //       // Allow only numbers
// //       updatedValue = updatedValue.replace(/[^0-9]/g, '');
// //     } else if (name === 'email') {
// //       // Email validation
// //       setEmailError(!/\S+@\S+\.\S+/.test(value) || !/(.com)|(.org)|(.net)$/.test(value));
// //     }

// //     setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));

// //     // Password validation
// //     if (name === 'password') {
// //       if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
// //         setPasswordError(true);
// //       } else {
// //         setPasswordError(false);
// //       }
// //     }
// //   };

// //   const handleShowPassword = () => {
// //     setShowPassword((prevShowPassword) => !prevShowPassword);
// //   };

// //   const handleShowConfirmPassword = () => {
// //     setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
// //     signup(formDataWithoutConfirmPassword);
// //     console.log('after signing');
// //     // try {
// //     //   const response = await fetch('http://localhost:3000/users/createUser', {
// //     //     method: 'POST',
// //     //     headers: {
// //     //       'Content-Type': 'application/json',
// //     //     },
// //     //     body: JSON.stringify(formDataWithoutConfirmPassword),
// //     //   });

// //     //   if (response.ok) {
// //     //     console.log('Signup successful!');
// //     //   } else {
// //     //     console.error('Signup failed:', response.status, response.statusText);
// //     //   }
// //     // } catch (error) {
// //     //   console.error('An error occurred during signup:', error);
// //     // }

// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Container component="main" maxWidth="xs">
// //         <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //           <Typography variant="h4" align="center" gutterBottom style={{ color: '#e91e63' }}>
// //             Sign Up
// //           </Typography>
// //           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Name"
// //                   type="text"
// //                   fullWidth
// //                   required
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   inputProps={{ pattern: '^[A-Za-z\s]+$', title: 'Only letters and spaces are allowed' }}
// //                 />
// //                 {nameError && (
// //                   <Typography variant="caption" color="error">
// //                     Name can contain only letters and spaces
// //                   </Typography>
// //                 )}
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Email"
// //                   type="email"
// //                   fullWidth
// //                   required
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   error={emailError}
// //                   helperText={emailError && 'Invalid email format or missing domain (.com, .org, .net)'}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Password"
// //                   type={showPassword ? 'text' : 'password'}
// //                   fullWidth
// //                   required
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   error={passwordError}
// //                   helperText={
// //                     passwordError &&
// //                     'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
// //                   }
// //                   InputProps={{
// //                     endAdornment: (
// //                       <InputAdornment position="end">
// //                         <IconButton onClick={handleShowPassword} edge="end">
// //                           {showPassword ? <Visibility /> : <VisibilityOff />}
// //                         </IconButton>
// //                       </InputAdornment>
// //                     ),
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Confirm Password"
// //                   type={showConfirmPassword ? 'text' : 'password'}
// //                   fullWidth
// //                   required
// //                   name="confirmPassword"
// //                   value={formData.confirmPassword}
// //                   onChange={handleChange}
// //                   error={passwordError}
// //                   helperText={passwordError && 'Password must match the above password'}
// //                   InputProps={{
// //                     endAdornment: (
// //                       <InputAdornment position="end">
// //                         <IconButton onClick={handleShowConfirmPassword} edge="end">
// //                           {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
// //                         </IconButton>
// //                       </InputAdornment>
// //                     ),
// //                   }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Username"
// //                   type="text"
// //                   fullWidth
// //                   required
// //                   name="userName"
// //                   value={formData.userName}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Phone"
// //                   type="tel"
// //                   fullWidth
// //                   required
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <FormControl fullWidth required>
// //                   <InputLabel>How would you like us to contact you?</InputLabel>
// //                   <Select
// //                     name="contact"
// //                     value={formData.contact}
// //                     onChange={handleChange}
// //                     label="How would you like us to contact you?"
// //                   >
// //                     <MenuItem value="Email">
// //                       <EmailIcon style={{ marginRight: '8px' }} />
// //                       Email
// //                     </MenuItem>
// //                     <MenuItem value="Phone">
// //                       <PhoneIcon style={{ marginRight: '8px' }} />
// //                       Voice Call
// //                     </MenuItem>
// //                     <MenuItem value="SMS">
// //                       <SmsIcon style={{ marginRight: '8px' }} />
// //                       SMS
// //                     </MenuItem>
// //                   </Select>
// //                 </FormControl>
// //               </Grid>
// //             </Grid>
// //             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
// //               Sign Up
// //             </Button>
// //           </form>
// //         </Paper>
// //       </Container>
// //     </ThemeProvider>
// //   );
// // };

// // export default SignUp;


// import React, { useContext, useState } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   InputAdornment,
//   IconButton,
//   FormHelperText,
// } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import SmsIcon from '@mui/icons-material/Sms';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { UserContext } from '../context/users.context';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#e91e63',
//     },
//   },
// });

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     userName: '',
//     phone: '',
//     contact: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [nameError, setNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const { signup } = useContext(UserContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let updatedValue = value;

//     // Add additional validation based on the field name
//     if (name === 'name') {
//       // Allow only letters and spaces
//       updatedValue = updatedValue.replace(/[^A-Za-z\s]/g, '');
//       setNameError(!/^[A-Za-z\s]+$/.test(updatedValue));
//     } else if (name === 'phone') {
//       // Allow only numbers
//       updatedValue = updatedValue.replace(/[^0-9]/g, '');
//     } else if (name === 'email') {
//       // Email validation
//       setEmailError(!/\S+@\S+\.\S+/.test(value) || !/(.com)|(.org)|(.net)$/.test(value));
//     }

//     setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));

//     // Password validation
//     if (name === 'password') {
//       if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
//         setPasswordError(true);
//       } else {
//         setPasswordError(false);
//       }
//     }
//   };

//   const handleShowPassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleShowConfirmPassword = () => {
//     setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
//     signup(formDataWithoutConfirmPassword);

//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h4" align="center" gutterBottom style={{ color: '#e91e63' }}>
//             Sign Up
//           </Typography>
//           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <Grid container spacing={2}>
//             <Grid item xs={12}>
//                 <TextField
//                   label="Name"
//                   type="text"
//                   fullWidth
//                   required
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   inputProps={{ pattern: '^[A-Za-z\s]+$', title: 'Only letters and spaces are allowed' }}
//                 />
//                 {nameError && (
//                   <Typography variant="caption" color="error">
//                     Name can contain only letters and spaces
//                   </Typography>
//                 )}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Email"
//                   type="email"
//                   fullWidth
//                   required
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={emailError}
//                   helperText={emailError && 'Invalid email format or missing domain (.com, .org, .net)'}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Password"
//                   type={showPassword ? 'text' : 'password'}
//                   fullWidth
//                   required
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   error={passwordError}
//                   helperText={
//                     passwordError &&
//                     'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
//                   }
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={handleShowPassword} edge="end">
//                           {showPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Confirm Password"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   fullWidth
//                   required
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   error={passwordError}
//                   helperText={passwordError && 'Password must match the above password'}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={handleShowConfirmPassword} edge="end">
//                           {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Username"
//                   type="text"
//                   fullWidth
//                   required
//                   name="userName"
//                   value={formData.userName}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Phone"
//                   type="tel"
//                   fullWidth
//                   required
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth required>
//                   <InputLabel>How would you like us to contact you?</InputLabel>
//                   <Select
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleChange}
//                     label="How would you like us to contact you?"
//                   >
//                     <MenuItem value="Email">
//                       <EmailIcon style={{ marginRight: '8px' }} />
//                       Email
//                     </MenuItem>
//                     <MenuItem value="Phone">
//                       <PhoneIcon style={{ marginRight: '8px' }} />
//                       Voice Call
//                     </MenuItem>
//                     <MenuItem value="SMS">
//                       <SmsIcon style={{ marginRight: '8px' }} />
//                       SMS
//                     </MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//             </Grid>
//             <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '20px 0' }}>
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default SignUp;

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../context/users.context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
  },
});

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    phone: '',
    contact: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { signup, isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Add additional validation based on the field name
    if (name === 'name') {
      // Allow only letters and spaces
      updatedValue = updatedValue.replace(/[^A-Za-z\s]/g, '');
      setNameError(!/^[A-Za-z\s]+$/.test(updatedValue));
    } else if (name === 'phone') {
      // Allow only numbers
      updatedValue = updatedValue.replace(/[^0-9]/g, '');
    } else if (name === 'email') {
      // Email validation
      setEmailError(!/\S+@\S+\.\S+/.test(value) || !/(.com)|(.org)|(.net)$/.test(value));
    }

    setFormData((prevData) => ({ ...prevData, [name]: updatedValue }));

    // Password validation
    if (name === 'password') {
      if (value.length < 8 || !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
    signup(formDataWithoutConfirmPassword);
  };

  // Redirect to login page if user is already authenticated
  if (isAuthenticated) {
    navigate('/login');
    return null; // You can also render a loading spinner or any other UI while redirecting
  }

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
                  label="Name"
                  type="text"
                  fullWidth
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  inputProps={{ pattern: '^[A-Za-z\s]+$', title: 'Only letters and spaces are allowed' }}
                />
                {nameError && (
                  <Typography variant="caption" color="error">
                    Name can contain only letters and spaces
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={emailError}
                  helperText={emailError && 'Invalid email format or missing domain (.com, .org, .net)'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={passwordError}
                  helperText={
                    passwordError &&
                    'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  fullWidth
                  required
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={passwordError}
                  helperText={passwordError && 'Password must match the above password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowConfirmPassword} edge="end">
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Username"
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
                  label="Phone"
                  type="tel"
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
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    label="How would you like us to contact you?"
                  >
                    <MenuItem value="Email">
                      <EmailIcon style={{ marginRight: '8px' }} />
                      Email
                    </MenuItem>
                    <MenuItem value="Phone">
                      <PhoneIcon style={{ marginRight: '8px' }} />
                      Voice Call
                    </MenuItem>
                    <MenuItem value="SMS">
                      <SmsIcon style={{ marginRight: '8px' }} />
                      SMS
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '20px 0' }}>
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary">
            Already have an account? <Link to="/login">Login here</Link>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
