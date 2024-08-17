import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const PagoModal = ({ show, handleClose, clearCart }) => {
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleConfirmarCompra = () => {
    if (!email || !direccion) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos",
      });
      return;
    }

    // Simulación del procesamiento de pago
    Swal.fire({
      icon: "success",
      title: "Compra realizada",
      text: "¡Gracias por tu compra! Te enviaremos el pedido pronto.",
    }).then(() => {
      // Aquí puedes limpiar el carrito después de la compra
      clearCart();
      handleClose();
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Procesar Pago</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Dirección de Envío</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirmarCompra}>
          Confirmar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PagoModal;
