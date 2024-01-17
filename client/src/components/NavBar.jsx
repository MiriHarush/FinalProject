import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../css/NavBar.css";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/users.context';

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(UserContext);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src="./img/logo_homeb.png" alt="logo" width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/contact") }}>Contact</Nav.Link>
            <Nav.Link  onClick={() => { navigate("/about") }}>About Us</Nav.Link>
            <Nav.Link onClick={() => { navigate("/comments") }}>Comments</Nav.Link>

            {currentUser && (
              <NavDropdown title="LogOut" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4" onClick={() => {
                  logout();
                  navigate('/')
                }} className="dropdown-link">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {currentUser == null && (
              <NavDropdown title="SignUp/logIn" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => { navigate("/login") }} className="dropdown-link">Log In</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate("/signup") }} className="dropdown-link">Sign Up</NavDropdown.Item>
              </NavDropdown>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
