import { Navbar, Nav, Container } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="dark" expand="lg">
    <Container className="text-light">
      <Navbar.Brand className="text-light" href="#home">
        Compito 2
      </Navbar.Brand>

      <Nav className="me-auto text-light">
        <Nav.Link className="text-light" href="#">
          Home
        </Nav.Link>
        <Nav.Link className="text-light" href="#">
          Link
        </Nav.Link>
        <Nav.Link className="text-light" href="#">
          Browse
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
