import React from "react";
import logo from "../images/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
    <Navbar className="bg-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block align-top " alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="/" className="text-white pe-md-5">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white pe-md-5">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header