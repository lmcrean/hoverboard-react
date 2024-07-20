// components/Navbar/Navbar.tsx
'use client';

import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <img src="/assets/media/navbarlogo-smallest.png" alt="Hoverboard Company Logo" style={{ maxHeight: '57px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/features">About our Features</Nav.Link>
            <Nav.Link as={Link} href="/booktrial">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
