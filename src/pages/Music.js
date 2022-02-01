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
      <Container fluid className="d-flex text-muted">
        <Row>
          <Col className="m-5">
            <h2 className="text-center">***Album out now on Bandcamp!!!***</h2>
            <iframe
              title="A Strange Happening - Album"
              style={{ padding: 5, border: 1, width: 350, height: 470 }}
              src="https://bandcamp.com/EmbeddedPlayer/album=911844722/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://astrangehappening.bandcamp.com/album/a-strange-happening">
                A Strange Happening by A Strange Happening
              </a>
            </iframe>
            <h2 className="text-center">
              Our First Single: The House in Cypress Canyon
            </h2>
            <iframe
              title="A Strange Happening - The House in Cypress Canyon Single"
              style={{ padding: 5, border: 1, width: 350, height: 442 }}
              src="https://bandcamp.com/EmbeddedPlayer/track=1951965015/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://astrangehappening.bandcamp.com/track/the-house-in-cypress-canyon-single-unmastered">
                The House in Cypress Canyon (single-unmastered) by A Strange
                Happening
              </a>
            </iframe>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
