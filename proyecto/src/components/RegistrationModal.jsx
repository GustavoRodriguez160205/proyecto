import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
// import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import testApi from "../api/testApi";

const RegistrationModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    edad: "",
    email: "",
    password: "",
    rol: "Usuario",
    estado: "activo",
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, edad, email, password, rol, estado } = formData;

    if (!name || !edad || !email || !password || !rol || !estado) {
      Swal.fire("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    if (parseInt(edad, 10) < 18) {
      Swal.fire("Error", "La edad debe ser mayor a 18 años", "error");
      return;
    }

    try {
      const response = await testApi.post("/auth/registro", formData);
      console.log(response);
      if (response.data.success) {
        Swal.fire("Éxito", "Usuario registrado con éxito", "success");
        login(response.data.user);
        handleClose();
        window.location.href = "/"; // Redirigir al home
      } else {
        Swal.fire("Error", response.data.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "No se pudo registrar el usuario", "error");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="edad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="rol">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              required
            >
              <option value="Usuario">Usuario</option>
              <option value="Admin">Admin</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="estado">
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
          <Button
            style={{ background: " #72A1E5" }}
            variant=" mt-2 mb-2"
            type="submit"
          >
            Registrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegistrationModal;
