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
