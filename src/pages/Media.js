import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";
import Picture00 from "../assets/images/band.jpg";
import Picture0 from "../assets/images/IMG_0027.jpg";
import Picture1 from "../assets/images/IMG_9022.jpg";
import Picture2 from "../assets/images/IMG_7246.jpg";
import Picture3 from "../assets/images/IMG_9018.jpg";
import Picture4 from "../assets/images/IMG_9019.jpg";
import Picture5 from "../assets/images/IMG_9039.jpg";
import Picture6 from "../assets/images/IMG_9020.jpg";
import Picture7 from "../assets/images/IMG_9023.jpg";
import Picture8 from "../assets/images/IMG_9034.jpg";
import Picture9 from "../assets/images/IMG_7457.jpg";
// import Picture10 from "../assets/images/IMG_7274.jpg";

import "../fonts/stylesheet.css";

function Media() {
  return (
    <>
      <Container fluid className="w-75 text-muted d-flex">
        <Row>
          <Col className="m-5">
            <Carousel fluid>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture00} alt="00" />
                <Carousel.Caption>
                  <p>Hold steady.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture0} alt="0" />
                <Carousel.Caption>
                  <p>Live at Skylark.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture1} alt="1" />
                <Carousel.Caption>
                  <p>Recording the spectre.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture2} alt="2" />
                <Carousel.Caption>
                  <p>Rehearsing the cover song.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture3} alt="3" />
                <Carousel.Caption>
                  <p>Laying down voices...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture4} alt="4" />
                <Carousel.Caption>
                  <p>Laying down more voices...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture5} alt="5" />
                <Carousel.Caption>
                  <p>Laying down even more voices...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture6} alt="6" />
                <Carousel.Caption>
                  <p>Mixing the noises.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture9} alt="10" />
                <Carousel.Caption>
                  <p>Matt playing the... guitar?</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture7} alt="7" />
                <Carousel.Caption>
                  <p>Wirey, werewolf and bass playing.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture8} alt="8" />
                <Carousel.Caption>
                  <p>Synths + whiskey.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Media;
