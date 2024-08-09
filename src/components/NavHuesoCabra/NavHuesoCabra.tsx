import React, { useState } from 'react';
import './NavHuesoCabra.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavHuesoCabra = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="sm" className="navbar p-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className='navbarLogo'>Huesocabra</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" className='navbarToggle' onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/tienda" onClick={() => setExpanded(false)}>Tienda</Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
