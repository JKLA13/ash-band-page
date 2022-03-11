import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Picture from "../assets/images/band.jpg";
import "../fonts/stylesheet.css";

function About() {
  return (
    <>
      <Container fluid className="text-muted text-center w-75">
        <Row>
          <Col className="m-2">
            <p>
              In 2018, there was a tragic laboratory accident in Denver, CO.
              There were only three survivors. Those survivors started making
              music that would go on to be described as "a possessed, slop
              bucket of grease slick sounds." That band is A Strange Happening.{" "}
            </p>
            <Image src={Picture} className="me-8 center w-75 img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col className="me-2">
            <ul>
              <li>A Strange Happening is:</li>
            </ul>
            <ul>
              <li>- Jake Adamson - Vocals, Guitar, Keys</li>
              <li>- Elisha Coy - Bass, Vocals</li>
              <li>- Matt McNiff - Drums, Keys</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
