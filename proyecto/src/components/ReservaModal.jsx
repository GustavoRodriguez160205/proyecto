// ReservaModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReservaModal = ({ show, handleClose, cancha }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se maneja la lógica de reserva (enviar datos al backend, etc.)
    console.log(`Reservando la cancha ${cancha.nombre} para el ${date} a las ${time}`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reservar {cancha.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTime" className="mt-3">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Reservar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReservaModal;
