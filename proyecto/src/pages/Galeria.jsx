import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css"; // Importación de estilos de Bootstrap
import "../styles/Galeria.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Cancha from "../image/Cancha.webp";
import cancha1 from "../image/cancha1.jpeg";
import cancha2 from "../image/cancha2.jpeg";
import cancha3 from "../image/cancha3.jpeg";
import cancha4 from "../image/cancha4.jpeg";
import cancha5 from "../image/cancha5.jpeg";
import cancha7 from "../image/cancha7.jpeg";
import cancha8 from "../image/cancha8.jpeg";
import cancha9 from "../image/cancha9.jpeg";
import cancha10 from "../image/cancha10.jpeg";
import cancha11 from "../image/cancha11.jpeg";
import cancha12 from "../image/cancha12.jpeg";

import Figure from "react-bootstrap/Figure";
import { FaStar, FaRegStar } from "react-icons/fa";

function Galeria() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <Card.Img variant="top" src={cancha1} />
          <Carousel.Caption>
            <h3>F5 y F7- Cancha LA SAN JUAN</h3>
            <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={cancha2} />
          <Carousel.Caption>
            <h3>F5 y F7- Cancha LA CANTERA</h3>
            <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src={cancha3} />
          <Carousel.Caption>
            <h3>F7 y F11- Cancha EL COMPLEJO</h3>
            <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha la peron"
                src={Cancha}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LA PERON</Card.Title>
                <Card.Text>Fútbol 5</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha balcarce"
                src={cancha4}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA BALCARCE</Card.Title>
                <Card.Text> Fútbol 5</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha la frontera"
                src={cancha5}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LA FRONTERA</Card.Title>
                <Card.Text>Fútbol 5</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha la masia"
                src={cancha7}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LA MASIA</Card.Title>
                <Card.Text>Fútbol 7</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha zona norte"
                src={cancha8}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA ZONA NORTE</Card.Title>
                <Card.Text>Fútbol 7</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha la caldera"
                src={cancha9}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LA CALDERA</Card.Title>
                <Card.Text>Fútbol 7</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha las rosas"
                src={cancha10}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LAS ROSAS</Card.Title>
                <Card.Text>Fútbol 11</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha byg"
                src={cancha11}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA BYG</Card.Title>
                <Card.Text>Fútbol 11</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaRegStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="custom-card h-100" style={{ width: "100%" }}>
              <Figure.Image
                className="custom-image"
                alt="cancha ls cañas"
                src={cancha12}
                style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title>CANCHA LAS CAÑAS</Card.Title>
                <Card.Text>Fútbol 11</Card.Text>
                <div>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Galeria;
