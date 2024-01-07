
// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import "../css/NavBar.css"


// const NavBar = () => {
//   return (

//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/"> <img src="./img/logo_home.png" alt="logo" width={50} /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/about">About Us</Nav.Link>
//             <Nav.Link href="/comments"> Comments</Nav.Link>

//             <NavDropdown title="SignUp/logIn" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/login" className="dropdown-link">Log In</NavDropdown.Item>
//               <NavDropdown.Item href="/signup" className="dropdown-link">Sign Up</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4" className="dropdown-link">
//                 Log Out
//               </NavDropdown.Item>
//             </NavDropdown>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
   
//   );
// }

// //   return (
// //     <AppBar position="static" color="primary">
// //       <Toolbar className="toolbar">
// //         <Link to="/" className="navbar-link">
// //           <img src="./img/logo_home.png" alt="logo" width={50} />
// //         </Link>
// //         <div>
// //           <Link to="/" className="navbar-link">
// //             Home
// //           </Link>
// //           <Link to="/login" className="navbar-link">
// //             Log In
// //           </Link>
// //           <Link to="/signup" className="navbar-link">
// //             Sign Up
// //           </Link>
// //           <Link to="/contact" className="navbar-link">
// //             Contact
// //           </Link>
// //           <Link to="/about" className="navbar-link">
// //             About Us
// //           </Link>
// //           <Link to="/comments" className="navbar-link">
// //             Comments
// //           </Link>
// //         </div>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

//  export default NavBar;




import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src="./img/logo_homeb.png" alt="logo" width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/comments">Comments</Nav.Link>
            
            <NavDropdown title="SignUp/logIn" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login" className="dropdown-link">Log In</NavDropdown.Item>
              <NavDropdown.Item href="/signup" className="dropdown-link">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="dropdown-link">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
