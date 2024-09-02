import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";
import { AuthContext } from "../context/AuthContext";

const ReservaModal = ({ show, handleClose, cancha }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [minDate, setMinDate] = useState("");
  const [minHour, setMinHour] = useState(0);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localISOTime = new Date(now.getTime() - offset * 60 * 1000)
      .toISOString()
      .slice(0, 16);

    setMinDate(localISOTime.slice(0, 10));
    setMinHour(now.getHours());
  }, [show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id_usuario) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo identificar al usuario. Por favor, intenta iniciar sesión nuevamente.",
      });
      return;
    }

    if (endTime <= startTime || startTime < 0 || endTime > 24) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La hora de fin debe ser mayor que la hora de inicio, y ambas deben estar entre 0 y 24.",
      });
      return;
    }

    try {
      const resp = await testApi.post("/auth/reservarCancha", {
        id_cancha: cancha._id,
        id_usuario: user.id_usuario,
        fecha: date,
        horaInicio: parseInt(startTime, 10),
        horaFin: parseInt(endTime, 10),
      });

      // console.log(resp);

      Swal.fire({
        position: "center",
        icon: "success",
        title: `Reservando la cancha ${cancha.nombre_cancha} para el día ${date} desde las ${startTime}:00 hasta las ${endTime}:00`,
        showConfirmButton: false,
        timer: 3000,
      });

      handleClose();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Turno Reservado",
        text: "Este turno no esta disponible... Ingresa Otro",
      });
    }
  };

  const isPastDate = date && new Date(date) < new Date(minDate);
  const isPastStartTime = startTime && date === minDate && startTime < minHour;

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
                  className="img-fluid rounded"
                />
                <h4>{cancha.name}</h4>
                <p>{cancha.descripcion}</p>
                <p>Precio: ${cancha.precio}</p>
              </>
            )}
          </Col>
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="date">
                <Form.Label>Fecha de reserva</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  min={minDate}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="startTime">
                <Form.Label>Hora de inicio</Form.Label>
                <Form.Control
                  type="number"
                  value={startTime}
                  min={isPastDate ? "0" : String(minHour)}
                  max="24"
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  disabled={isPastDate}
                />
              </Form.Group>
              <Form.Group controlId="endTime">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control
                  type="number"
                  value={endTime}
                  min={parseInt(startTime) + 1 || "1"}
                  max="24"
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  disabled={isPastDate || !startTime}
                />
              </Form.Group>
              <br />

              <Button
                type="submit"
                variant="primary"
                disabled={!date || !startTime || !endTime || isPastStartTime}
              >
                Reservar
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ReservaModal;
