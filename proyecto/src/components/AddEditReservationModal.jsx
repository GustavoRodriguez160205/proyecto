import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function AddEditReservationModal({ show, onHide, reservation, onSave }) {
  const [formData, setFormData] = useState({
    cancha: "",
    fecha: "",
    hora: "",
    usuario: "",
  });

  useEffect(() => {
    if (reservation) {
      setFormData(reservation);
    } else {
      setFormData({
        cancha: "",
        fecha: "",
        hora: "",
        usuario: "",
      });
    }
  }, [reservation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.cancha &&
      formData.fecha &&
      formData.hora &&
      formData.usuario
    ) {
      onSave({
        ...formData,
        _id: reservation ? reservation._id : new Date().getTime().toString(),
      });
      Swal.fire("Exito", "Reserva guardada con éxito", "success");
    } else {
      Swal.fire("Error", "Por favor completa todos los campos", "error");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {reservation ? "Editar Reserva" : "Agregar Reserva"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCancha">
            <Form.Label>Cancha</Form.Label>
            <Form.Control
              type="text"
              name="cancha"
              value={formData.cancha}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formUsuario">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddEditReservationModal;
