import React from "react";
import Navbar from "react-bootstrap/Nav";
// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../fonts/stylesheet.css";

const Footer = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="https://github.com/JKLA13">
          Designed by Jacob Adamson
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Copywrite 2022</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
