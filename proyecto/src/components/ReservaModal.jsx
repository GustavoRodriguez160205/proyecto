// ReservaModal.jsx
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ReservaModal = ({ show, handleClose, cancha }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [minDate, setMinDate] = useState('');
  const [minTime, setMinTime] = useState('');


  useEffect(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localISOTime = new Date(now.getTime() - offset * 60 * 1000).toISOString().slice(0, 16);

    setMinDate(localISOTime.slice(0, 10));
    setMinTime(localISOTime.slice(11, 16));
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se maneja la lógica de reserva (enviar datos al backend, etc.)
    console.log(`Reservando la cancha ${cancha.nombre} para el ${date} a las ${time}`);
    handleClose();
  };
  const isPastDate = date && new Date(date) < new Date(minDate);
  const isPastTime = time && date === minDate && time < minTime;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Reservar {cancha.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4} className="text-center">
            {cancha && (
              <>
                <img
                  src={cancha.imagen}
                  alt={cancha.nombre}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <h4 className="mt-3">{cancha.nombre}</h4>
              </>
            )}
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  min={minDate}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formTime" className="mt-3">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={time}
                  min={date === minDate ? minTime : undefined}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  disabled={isPastDate}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="mt-3" disabled={isPastDate || isPastTime}>
                  Reservar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <h5>Precio: {cancha.precio}</h5>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReservaModal;
