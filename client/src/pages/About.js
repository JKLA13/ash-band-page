import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Picture from "../assets/images/IMG_0021.JPG";
import "../fonts/stylesheet.css";

function About() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h2 className="align-content-center">Album Coming Soon</h2>
            <Image src={Picture} className="me-3 img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
