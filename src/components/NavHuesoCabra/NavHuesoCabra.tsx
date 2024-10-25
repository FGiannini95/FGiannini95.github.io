import { useState } from 'react';
import './NavHuesoCabra.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const NavHuesoCabra = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="sm" className="navbar sticky-top p-2">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbarLogo">
          <h3 style={{ margin: 0, fontSize: 'inherit' }}>HUESOCABRA</h3>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNav"
          className="navbarToggle"
          onClick={() => setExpanded(!expanded)}
        >
          <FiMenu size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)} className="navbarLogo">
              <h3 style={{ margin: 0, fontSize: 'inherit' }}>CONTACTO</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
