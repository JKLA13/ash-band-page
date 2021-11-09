import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";
import Picture1 from "../assets/images/IMG_9022.jpg";
import Picture2 from "../assets/images/IMG_7246.jpg";
import Picture3 from "../assets/images/IMG_9018.jpg";
import Picture4 from "../assets/images/IMG_9019.jpg";
import Picture5 from "../assets/images/IMG_9039.jpg";
import Picture6 from "../assets/images/IMG_9020.jpg";
import Picture7 from "../assets/images/IMG_9023.jpg";
import Picture8 from "../assets/images/IMG_9034.jpg";
import "../fonts/stylesheet.css";

function Media() {
  return (
    <>
      <Container fluid className="bg-black text-muted">
        <Row>
          <Col className="m-5">
            <Carousel fluid>
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
                <img className="d-block w-100 photo" src={Picture7} alt="7" />
                <Carousel.Caption>
                  <p>Wirey, werewolf and bass playing.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 photo" src={Picture8} alt="8" />
                <Carousel.Caption>
                  <p>
                    Synths and whiskey experiment that turned into the tragic
                    lab accident.
                  </p>
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
