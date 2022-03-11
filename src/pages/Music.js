import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PictureB1 from "../assets/images/IMG_9038.jpg";
import PictureB2 from "../assets/images/band2.jpg";
import "../fonts/stylesheet.css";

function About() {
  return (
    <>
      <Container fluid className="text-muted text-center w-50 p-1">
        <Row>
          <Col className="m-5">
            <div className="text-center">
              <h2>***Album out now on Bandcamp!!!***</h2>

              <iframe
                title="A Strange Happening - Album"
                style={{ border: 1, width: "100%", height: "120px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=911844722/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://astrangehappening.bandcamp.com/album/a-strange-happening">
                  A Strange Happening by A Strange Happening
                </a>
              </iframe>
              <h3>Our First Single: The House in Cypress Canyon</h3>
              <iframe
                title="A Strange Happening - The House in Cypress Canyon Single"
                style={{ border: 1, width: "100%", height: "120px" }}
                src="https://bandcamp.com/EmbeddedPlayer/track=1951965015/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://astrangehappening.bandcamp.com/track/the-house-in-cypress-canyon-single">
                  The House in Cypress Canyon (single) by A Strange Happening
                </a>
              </iframe>
            </div>
          </Col>
        </Row>
        <h3>Don't time travel alone...</h3>
        <Image src={PictureB1} className="me-8 center w-75 img-fluid" />
        <h3>Don't time travel alone...</h3>
        <Image src={PictureB2} className="me-8 center w-75 img-fluid" />
        {/* <Row>
          <Col></Col>
        </Row> */}
      </Container>
    </>
  );
}

export default About;
