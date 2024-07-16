import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


function Camiseta() {
  return (
    <div>
            
     
      <Container className="mt-4">
        
        <Row className="justify-content-center">
        <Col>
        <Card className="text-justify" style={{ width: '30%' }}>
              <Card.Img variant="top" src="src/image/afa1.JPG" />
              <Card.Body className="text-center">
                </Card.Body>
            </Card>
          </Col>

          <Container>
            
        <Card className="text-justify" style={{ width: '50%' }}>
          <Card.Body>
            <Card.Title>Camiseta AFA titular 2024</Card.Title>
            <Card.Text>
             La piel celeste y blanca de los campeones del mundo Qatar 2024. Estampada con el dorsal de Lionel Andrés Messi (10). 
            </Card.Text>
            <br />
            <p><strong>$120.650</strong></p>
            <br />
           
          </Card.Body>
        </Card>
      </Container>

      

          {/* Aquí puedes agregar más tarjetas de productos según sea necesario */}

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/atras.JPG" />
              <Card.Body className="text-center">
              
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              
              <Card.Body className="text-center">
              <Card.Title>Camiseta AFA titular 2024</Card.Title>
            <Card.Text>
             La piel celeste y blanca de los campeones del mundo Qatar 2024. Estampada con el dorsal de Lionel Andrés Messi (10). 
            </Card.Text>
            <br />
            <p><strong>$120.650</strong></p>
            <Button variant="primary" href="url-de-compra">COMPRAR</Button>

              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/zoom.JPG" />
              <Card.Body className="text-center">
               
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/messi.JPG" />
              <Card.Body className="text-center">
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      

    </div>
  );
}

export default Camiseta;
