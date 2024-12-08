import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas, Badge } from 'react-bootstrap';
import '../Styles/Navbar.css';

function NavigationBar() {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState(0); // State to track cart items

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar 
      expand="md" 
      className="navbar" 
      sticky="top"
    >
      <Container fluid>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src="src/assets/logo.svg" 
            alt="Little Lemon Restaurant" 
            className="logo" 
          />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleShow}
        />

        {/* Navigation Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navbar-nav">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/menu" className="nav-link">
                <i className="fas fa-utensils"></i> Menu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                <i className="fas fa-phone"></i> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>


        {/* Book a Table Button */}
        <Link 
          to="/BookTable" 
          className="btn btn-primary"
        >
          Book a Table
        </Link>

        {/* Mobile Offcanvas Menu */}
        <Offcanvas 
          show={show} 
          onHide={handleClose} 
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" onClick={handleClose}>
                <i className="fas fa-utensils"></i> Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleClose}>
                <i className="fas fa-phone"></i> Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;