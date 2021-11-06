import React from "react";
// import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import Picture from "../assets/images/IMG_0021.JPG";
import "../fonts/stylesheet.css";

function About() {
  return (
    <>
      <Container fluid bg>
        <Row>
          <Col>
            <p>
              In 2018, there was a tragic laboratory accident in Denver, CO.
              There were only three survivors. Those survivors started making
              music that would go on to be described as "a slop bucket of grease
              slick sounds." That band is A Strange Happening.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>A Strange Happening is:</li>
            </ul>
            <ul>
              <li>- Jake Adamson - Vocals, Guitar, Keys</li>
              <li>- Elisha Coy - Bass, Vocals</li>
              <li>- Matt McNiff - Drums, Key</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
