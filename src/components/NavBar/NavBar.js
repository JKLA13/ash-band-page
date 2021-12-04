import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Picture from "../../assets/images/IMG_0026.PNG";
import "../../fonts/stylesheet.css";

function NavBar() {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Image src={Picture} className="me-1 img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home" to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#About" to="/About">
                About
              </Nav.Link>
              <Nav.Link href="#Music" to="/Music">
                Music
              </Nav.Link>
              <Nav.Link href="#Media" to="/Media">
                Media
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
