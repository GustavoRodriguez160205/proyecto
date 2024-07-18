import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function AddEditUserModal({ show, onHide, user, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    edad: "",
    email: "",
    password: "",
    rol: "usuario",
    estado: "activo",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        name: "",
        edad: "",
        email: "",
        password: "",
        rol: "usuario",
        estado: "activo",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onSave({
        ...formData,
        _id: user ? user._id : new Date().getTime().toString(),
      });
      Swal.fire("Exito", "Usuario guardado con éxito", "success");
    } else {
      Swal.fire("Error", "Por favor completa todos los campos", "error");
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? "Editar Usuario" : "Agregar Usuario"}</Modal.Title>
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
          <Form.Group controlId="formEdad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formRol">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
            >
              <option value="usuario">Usuario</option>
              <option value="administrador">Administrador</option>
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
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
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

export default AddEditUserModal;
