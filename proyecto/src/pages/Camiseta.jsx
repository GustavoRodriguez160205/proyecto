import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function Camiseta() {
  const [talle, setTalle] = useState(''); // Estado para almacenar el talle seleccionado
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleTalleChange = (event) => {
    setTalle(event.target.value); // Actualizar el estado del talle seleccionado
  };

  // Función para manejar la acción de compra
  const handleCompraClick = () => {
    if (talle) {
      // Redirige a la página del carrito
      navigate('/Carrito');
    } else {
      setShowModal(true); // Mostrar el modal si no se seleccionó un talle
    }
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container className="justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <Card className="product-card" style={{ width: '100%', marginTop: '2rem' }}>
              <Card.Img variant="top" src="src/image/afa1.JPG" />
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
            <Card className="product-card" style={{ width: '100%', marginTop: '2rem' }}>
              <Card.Body>
                <Card.Title>Camiseta AFA titular 2024</Card.Title>
                <Card.Text>
                  La piel celeste y blanca de los campeones del mundo Qatar 2024. Estampada con el dorsal de Lionel Andrés Messi (10).
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '30px', marginTop: '2rem' }}>
                      <strong>$120.650</strong>
                    </p>
                    
                    <Button onClick={handleCompraClick} className="btn btn-primary">
                      COMPRAR
                    </Button>
                  </div>
                  <br />
                  <p style={{ marginTop: '25px', marginBottom: '25px' }}>¡Medios de Pago disponibles!</p>
                  <div className="ui-pdp-payment-icon d-flex justify-content-center">
                    <div className="ui-pdp-payment-icon__container" style={{ margin: '10px' }}>
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                        className="ui-pdp-image ui-pdp-payment-icon"
                        alt="Visa"
                      />
                    </div>
                    <div className="ui-pdp-payment-icon__container" style={{ margin: '10px' }}>
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg"
                        className="ui-pdp-image ui-pdp-payment-icon"
                        alt="American Express"
                      />
                    </div>
                    <div className="ui-pdp-payment-icon__container" style={{ margin: '10px' }}>
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
                        className="ui-pdp-image ui-pdp-payment-icon"
                        alt="Naranja"
                      />
                    </div>
                    <div className="ui-pdp-payment-icon__container" style={{ margin: '10px' }}>
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                        className="ui-pdp-image ui-pdp-payment-icon"
                        alt="Mastercard"
                      />
                    </div>
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

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/atras.JPG" />
              <Card.Body className="text-center"></Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/zoom.JPG" />
              <Card.Body className="text-center"></Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Img variant="top" src="src/image/messi1.png" />
              <Card.Body className="text-center"></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="justify-content-center">
        <Row className="justify-content-center">
          <p style={{ width: '75%', marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <strong>¡RECOMENDACIONES!</strong>
          </p>

          <Card.Body className="text-center">
            <Card
              style={{
                width: '75%',
                marginBottom: '2rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Card.Text>
                @pedrolopez: "Buena relación precio calidad. Siempre Adidas es garantía de primera línea".
              </Card.Text>
            </Card>
          </Card.Body>

          <Card.Body className="text-center">
            <Card
              style={{
                width: '75%',
                marginBottom: '2rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Card.Text>
                @juansalazar: "Lo mejor de este producto es su tela para hacer deportes justamente. Lo peor es que se ensucia muy fácil".
              </Card.Text>
            </Card>
          </Card.Body>

          <Card.Body className="text-center">
            <Card style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Text>
                @lujanvillafañe: "Amo como evolucionan la tecnología de las camisetas pensando en las jugadoras y jugadores ¡Ready para jugar!".
              </Card.Text>
            </Card>
          </Card.Body>
        </Row>
      </Container>

      {/* Modal para seleccionar talle */}
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
