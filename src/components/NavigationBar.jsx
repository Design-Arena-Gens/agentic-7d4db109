import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          <span className="text-primary">VirtuFit</span> Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/virtual-fitting">
              Virtual Fitting
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button as={Link} to="/virtual-fitting" variant="primary">
            Try It Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
