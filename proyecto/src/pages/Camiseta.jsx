import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import AfaImage from "../image/afa1.JPG";
import '../styles/Camiseta.css';

function Camiseta() {
  const [talle, setTalle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleTalleChange = (event) => {
    setTalle(event.target.value);
  };

  const handleCompraClick = () => {
    if (talle) {
      const producto = {
        id: new Date().getTime(),
        nombre: 'Camiseta AFA titular 2024',
        imagen: AfaImage,
        precio: 120650,
        talle: talle,
      };
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      navigate('/Carrito');
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container className="justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <Card className="product-card text-center" style={{ width: '100%', marginTop: '2rem' }}>
              <Card.Img variant="top" src={AfaImage} className="centered-image" />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <Card className="product-card" style={{ width: '100%', marginTop: '2rem' }}>
              <Card.Body>
                <Card.Title>Camiseta AFA titular 2024</Card.Title>
                <Card.Text>
                  La piel celeste y blanca de los campeones del mundo Qatar 2024. Estampada con el dorsal de Lionel Andrés Messi (10).
                  <div className="text-center">
                    <p className="price-text">
                      <strong>$120.650</strong>
                    </p>
                    <Button onClick={handleCompraClick} className="btn btn-primary">
                      COMPRAR
                    </Button>
                  </div>
                  <br />
                  <p className="payment-methods">¡Medios de Pago disponibles!</p>
                  <div className="payment-icons d-flex justify-content-center">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa" />
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg" alt="American Express" />
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" alt="Naranja" />
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="Mastercard" />
                  </div>
                  <br />
                  <p>Talles</p>
                  <Form.Select value={talle} onChange={handleTalleChange}>
                    <option value="">Seleccionar Talle</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </Form.Select>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="image-gallery">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/atras.JPG" />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/zoom.JPG" />
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/messi1.png" />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="recommendations">
        <Row className="justify-content-center">
          <p className="recommendations-title">
            <strong>¡RECOMENDACIONES!</strong>
          </p>

          <Card className="recommendation-card">
  <Card.Body>
    <div className="d-flex align-items-center">
      <img src="src/image/comentario1.jpg" alt="Avatar" className="recommendation-avatar" />
      <div>
        <Card.Text>
          @pedrolopez: "Buena relación precio calidad. Siempre Adidas es garantía de primera línea".
        </Card.Text>
         </div>
    </div>
  </Card.Body>
</Card>


<Card className="recommendation-card">
  <Card.Body>
    <div className="d-flex align-items-center">
      <img src="src/image/comentario2.jpg" alt="Avatar" className="recommendation-avatar" />
      <div>
        <Card.Text>
        @juansalazar: "Lo mejor de este producto es su tela para hacer deportes justamente. Lo peor es que se ensucia muy fácil".
        </Card.Text>
         </div>
    </div>
  </Card.Body>
</Card>
               
<Card className="recommendation-card">
  <Card.Body>
    <div className="d-flex align-items-center">
      <img src="src/image/comentario3.jpg" alt="Avatar" className="recommendation-avatar" />
      <div>
        <Card.Text>
        @lujanvillafañe: "Amo como evolucionan la tecnología de las camisetas pensando en las jugadoras y jugadores ¡Ready para jugar!".
        </Card.Text>
         </div>
    </div>
  </Card.Body>
</Card>
          

        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>¡Atención!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor selecciona un talle antes de comprar.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Camiseta;
