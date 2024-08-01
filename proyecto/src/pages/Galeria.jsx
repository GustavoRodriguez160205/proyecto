import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de estilos de Bootstrap
import '../styles/Galeria.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { FaStar, FaRegStar } from 'react-icons/fa';


function Galeria() {
  return (
    <div className="carousel-container">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          
          <Card.Img variant="top" src="src/image/cancha1.jpeg" />
          <Carousel.Caption>
          <h3>F5 y F7- Cancha LA SAN JUAN</h3>
          <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src="src/image/cancha2.jpeg" />
          <Carousel.Caption>
          <h3>F5 y F7- Cancha LA CANTERA</h3>
          <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Img variant="top" src="src/image/cancha3.jpeg" />
          <Carousel.Caption>
          <h3>F7 y F11- Cancha EL COMPLEJO</h3>
          <p>Canchas de cesped sintetico. Estacionamiento privado.</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      
      <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
          <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Pelota Adidas"
              src="src/image/cancha.webp"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Pelota de futbol"
              src="src/image/cancha4.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Pelota Puma"
              src="src/image/cancha5.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Pelota Goalty"
              src="src/image/cancha7.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Remera woman"
              src="src/image/cancha8.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Remera woman"
              src="src/image/cancha9.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Remera woman"
              src="src/image/cancha10.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Remera woman"
              src="src/image/cancha11.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
  <Card className="custom-card h-100" style={{ width: '100%' }}>
            <Figure.Image
              className="custom-image"
              alt="Remera woman"
              src="src/image/cancha12.jpeg"
              style={{ height: '100%', maxWidth:"100%", objectFit: 'cover'}}
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

