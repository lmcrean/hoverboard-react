// components/Navbar/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // usePathname is the correct hook for Next.js 13+
import styles from './Navbar.module.css';

const CustomNavbar = () => {
  const pathname = usePathname(); // This hook should work directly
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    setCurrentRoute(pathname || '');
  }, [pathname]);


  return (
    <Navbar expand="lg" bg="light" variant="light" className={`${styles.navbar} custom-navbar`}>
      <Container className={`${styles.customContainer} custom-container`}>
        <Navbar.Brand as={Link} href="/">
          <img
            src="/assets/media/navbarlogo-smallest.png"
            alt="Hoverboard Company Logo"
            style={{ maxHeight: '50px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} href="/" className={currentRoute === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} href="/features" className={currentRoute === '/features' ? 'active' : ''}>About our Features</Nav.Link>
            <Nav.Link as={Link} href="/booktrial" className={currentRoute === '/booktrial' ? 'active' : ''}>Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
