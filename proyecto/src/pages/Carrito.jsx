import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PagoModal from "../components/PagoModal";
import "../styles/Carrito.css";

function Carrito() {
  const { cartItems, removeFromCart, clearCart, totalCartPrice } =
    useContext(AuthContext);
  const [showPagoModal, setShowPagoModal] = useState(false);

  const handlePagoShow = () => setShowPagoModal(true);
  const handlePagoClose = () => setShowPagoModal(false);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">CARRITO DE COMPRAS</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Tu carrito está vacío.</h4>
          <Link to="/productos">
            <Button
              style={{ background: " #72A1E5" }}
              variant="mt-2 mb-2"
              className="mt-3"
            >
              Ver Productos
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Row className="mb-4">
            {cartItems.map((item) => (
              <Col md={2} key={item._id}>
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    src={item.imagen}
                    alt={item.nombre_producto}
                  />
                  <Card.Body>
                    <Card.Title>{item.nombre_producto}</Card.Title>
                    <Card.Text>
                      Precio: ${item.precio} <br />
                      Cantidad: {item.quantity} <br />
                      Subtotal: ${item.precio * item.quantity}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mb-4">
            <h4>Total: ${totalCartPrice}</h4>
            <Button variant="warning" className="me-2" onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Button variant="success" onClick={handlePagoShow}>
              Proceder al Pago
            </Button>
            <Link to="/productos">
              <Button variant="secondary" className="ms-2">
                Regresar a Tienda
              </Button>
            </Link>
          </div>
        </>
      )}
      <PagoModal
        show={showPagoModal}
        handleClose={handlePagoClose}
        clearCart={clearCart}
      />
    </Container>
  );
}

export default Carrito;
