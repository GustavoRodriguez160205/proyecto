import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Productos.css';
import { Link } from 'react-router-dom';

function Productos() {

  return (
    <div>
      <Container className="mt-4">
        <Image src="src/image/banner-productos.png" fluid className="centered-image" />
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Card style={{ width: '18rem', marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%' }}>
            <Card.Img variant="top" src="src/image/afa2.JPG" />
            <Card.Body className="text-center">
              <Card.Title>Camiseta Alternativa AFA 2024</Card.Title>
              <Card.Text>
                CORTE REGULAR, CUELLO REDONDO, MATERIALES RECICLADOS, TEJIDO SUAVE CON TECNOLOGÍA DE ABSORCIÓN AEROREADY
              </Card.Text>
              <strong><p>$107.650</p></strong>
              <Button href="./error404" variant="primary">Ver más</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%' }}>
            <Card.Img variant="top" src="src/image/afa1.JPG" />
            <Card.Body className="text-center">
              <Card.Title>Camiseta Titular AFA 2024</Card.Title>
              <Card.Text>
                CORTE REGULAR, CUELLO REDONDO, MATERIALES RECICLADOS, TEJIDO SUAVE CON TECNOLOGÍA DE ABSORCIÓN AEROREADY
              </Card.Text>
              <strong><p>$120.650</p></strong>
              <Link to="/Camiseta">
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%' }}>
            <Card.Img variant="top" src="src/image/afa3.JPG" />
            <Card.Body className="text-center">
              <Card.Title>Camiseta Arquero AFA 2024</Card.Title>
              <Card.Text>
                CORTE REGULAR, CUELLO REDONDO, MATERIALES RECICLADOS, TEJIDO SUAVE CON TECNOLOGÍA DE ABSORCIÓN AEROREADY
              </Card.Text>
              <strong><p>$83.720</p></strong>
              <Button href="/error404" variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Container>
        <Image src="src/image/banner-marcas.png" fluid className="centered-image" />
      </Container>

      <Container>
        <Row className="justify-content-center">
          {[
            { alt: "Pelota Adidas", src: "src/image/pelota.JPG", title: "Pelota Adidas", price: "$99.600" },
            { alt: "Pelota de futbol", src: "src/image/pelota1.JPG", title: "Pelota Nassau", price: "$78.350" },
            { alt: "Pelota Puma", src: "src/image/pelota2.JPG", title: "Pelota Puma", price: "$67.600" },
            { alt: "Pelota Goalty", src: "src/image/pelota3.JPG", title: "Pelota Goalty", price: "$25.350" },
            { alt: "Remera woman", src: "src/image/remera.JPG", title: "Remera woman", price: "$24.600" },
            { alt: "Remera woman", src: "src/image/remera1.JPG", title: "Remera woman", price: "$15.200" },
            { alt: "Remera woman", src: "src/image/remera2.JPG", title: "Remera woman", price: "$12.300" },
            { alt: "Remera woman", src: "src/image/remera3.JPG", title: "Remera woman", price: "$29.600" },
          ].map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="custom-card h-100">
                <Figure.Image className="custom-image" alt={item.alt} src={item.src} />
                <Card.Body className="text-center">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button href="/error404" variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Productos;

