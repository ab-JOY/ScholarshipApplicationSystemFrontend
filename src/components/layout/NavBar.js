import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#"><img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
            width="200"
            height="50"
            className="d-inline-block align-top"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" id="navi" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/#home" smooth>Home</Nav.Link>
            <Nav.Link as={Link} to="/#about" smooth>About</Nav.Link>
            <Nav.Link as={Link} to="/#programs" smooth>Programs</Nav.Link>
            <Link className="button-login btn btn-outline-primary" to="/login">Admin</Link>
          </Nav>
          <Form className="d-flex ms-3">
            <Button href="/register" variant="outline-success">Apply Now!</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
