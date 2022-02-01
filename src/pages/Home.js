import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Picture from "../assets/images/IMG_0021.JPG";
import "../fonts/stylesheet.css";

function Home() {
  return (
    <>
      <Container fluid className="d-flex text-muted">
        <Row>
          <Col className="m-5">
            <a
              href="https://astrangehappening.bandcamp.com/album/a-strange-happening"
              target="blank"
            >
              <h2 className="text-center">
                *** Album out now on Bandcamp!! ***
              </h2>
            </a>
            <Image src={Picture} className="me-3 img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
