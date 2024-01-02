// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const NavBar = () => {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           My App
//         </Typography>
//         <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//           <Button color="inherit">Home</Button>
//         </Link>
//         <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
//           <Button color="inherit">Log In</Button>
//         </Link>
//         <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
//           <Button color="inherit">Sign Up</Button>
//         </Link>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;
// NavBar.jsx
// NavBar.jsx

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const NavBar = () => {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar className="toolbar">
//         <Typography variant="h6" component="div" className="logo">
//           My App
//         </Typography>
//         <div>
//           <a href="/" className="navbar-link">
//             Home
//           </a>
//           <a href="/login" className="navbar-link">
//             Log In
//           </a>
//           <a href="/signup" className="navbar-link">
//             Sign Up
//           </a>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

// NavBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" className="logo">
          My App
        </Typography>
        <div>
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/login" className="navbar-link">
            Log In
          </Link>
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/comments" className="navbar-link">
            Comments
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
