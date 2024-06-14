import React from "react";
import logo from "../images/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <Navbar className="bg-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-top " alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="/" className="text-white my-1 my-md-0 pe-md-5">
                Home
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-white my-1 my-md-0 pe-md-5"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-white my-1  my-md-0 pe-md-5"
              >
                Contact Us
              </Nav.Link>
              <Nav.Link href="/form" className=" position-relative me-md-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="white"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Nav.Link>
              <Nav.Link
                href="step/form"
                style={{ backgroundColor: "#FCCF11" }}
                className="text-center  rounded-3 border-0 text-black mb-3 mb-md-0"
              >
                Order Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
