// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
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
  
//   const { login } = useContext(UserContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     console.log('handle submit');
//     e.preventDefault();
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
//                 />
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
//           </form>
//         </Paper>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LogIn;


// // try {
// //   const response = await fetch('http://localhost:3000/users/login', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(formData),
// //   });

// //   if (!response.ok) {
// //     // Handle non-successful response (e.g., show an error message)
// //     console.error('Login failed:', response.statusText);
// //     return;
// //   }

// //   const data = await response.json();
// //   if (data) {
// //     console.log('Login successful',data);
// //   } else {
// //     console.log('Login failed:', data);
// //   }
// // } catch (error) {
// //   console.error('Error during login:', error.message);
// // }
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Paper, FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserContext } from '../context/users.context';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
});

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');

  const { login , loginError} = useContext(UserContext);
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom style={{ color: '#3f51b5' }}>
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
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
              Log In
            </Button>
            {/* {loginError && (
              <FormHelperText style={{ color: 'red', marginTop: 10 }}>{loginError}</FormHelperText>
            )} */}
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
