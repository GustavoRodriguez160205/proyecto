import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function AddEditFieldModal({ show, onHide, field, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    descripcion: "",
    tipo: "5 jugadores",
    estado: "activa",
  });

  useEffect(() => {
    if (field) {
      setFormData(field);
    } else {
      setFormData({
        name: "",
        descripcion: "",
        tipo: "5 jugadores",
        estado: "activa",
      });
    }
  }, [field]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.descripcion) {
      onSave({
        ...formData,
        _id: field ? field._id : new Date().getTime().toString(),
      });
      Swal.fire("Exito", "Cancha guardada con éxito", "success");
    } else {
      Swal.fire("Error", "Por favor completa todos los campos", "error");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{field ? "Editar Cancha" : "Agregar Cancha"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="5 jugadores">5 jugadores</option>
              <option value="7 jugadores">7 jugadores</option>
              <option value="11 jugadores">11 jugadores</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="activa">Activa</option>
              <option value="inactiva">Inactiva</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddEditFieldModal;
