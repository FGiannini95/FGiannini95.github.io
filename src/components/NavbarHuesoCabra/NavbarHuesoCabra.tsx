import { useState } from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavbarHuesoCabra = () => {

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  }

  return (
    <Navbar bg="body-tertiary" expand="sm" className='navPpl d-flex justify-content-center' expanded={expanded} >
      {/* <Navbar.Brand href="/">Home</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="navbarNav" className="mx-auto m-3" onClick={()=> setExpanded(!expanded)}/> 
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav className="mr-auto d-flex align-items-center" onSelect={handleSelect}>
          <Nav.Link as={Link} to="/" className="active" onClick={()=> setExpanded(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/projects" onClick={()=> setExpanded(false)}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/profile" onClick={()=> setExpanded(false)}>Practice</Nav.Link>
          <Nav.Link as={Link} to="/shop" onClick={()=> setExpanded(false)}>Shop</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={()=> setExpanded(false)}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={()=> setExpanded(false)}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
