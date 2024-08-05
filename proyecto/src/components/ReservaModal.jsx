import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import testApi from '../api/testApi';


const ReservaModal = ({ show, handleClose, cancha, refreshReservas }) => {
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



  
  const handleSubmit = async (e) =>{
     e.preventDefault();
    try {
      const resp =  await testApi.post ('/auth/reservarCancha',{
        id_cancha:'cancha',
        id_usuario:usuario,
        fecha:date,
        horaInicio:time,
        horaFin:time,
      });
      console.log(resp),
     
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Reservando la cancha ${cancha.name} para el dia ${date} a las ${time}`,
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
    } catch (error) {
      console.log(error)
    }
  }

  const isPastDate = date && new Date(date) < new Date(minDate);
  const isPastTime = time && date === minDate && time < minTime;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Reservar {cancha.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4} className="text-center">
            {cancha && (
              <>
                <img
                  src={cancha.imagen}
                  alt={cancha.name}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <h4 className="mt-3">{cancha.name}</h4>
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
