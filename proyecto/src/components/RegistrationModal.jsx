import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import testApi from "../api/testApi";

export const RegistrationModal = ({ show, handleClose }) => {
  const { login } = useContext(AuthContext);
  const [nombre_usuario, setNombre_usuario] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registroBackend = async (nombre_usuario, edad, email, password) => {
    try {
      const resp = await testApi.post("/auth/registro", {
        nombre_usuario,
        edad,
        email,
        password,
      });

      const userData = resp.data;
      login(userData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario registrado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Ooops. . .",
          text: "El usuario ya existe",
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "Ooops. . .",
          text: "Contactarse con un Administrador",
        });
      }
    }
  };

  const handleRegistro = (e) => {
    e.preventDefault();

    // if (parseInt(edad, 10) < 18) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Edad insuficiente",
    //     text: "Debes tener al menos 18 años para registrarte.",
    //   });
    //   return;
    // }
    const edadInt = parseInt(edad, 10);
    const nombreRegex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios

    if (!nombreRegex.test(nombre_usuario)) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "El nombre solo debe contener letras y espacios.",
      });
      return;
    }

    if (edadInt < 18 || edadInt > 80) {
      Swal.fire({
        icon: "error",
        title: "Edad inválida",
        text: "La edad debe estar entre 18 y 80 años.",
      });
      return;
    }

    registroBackend(nombre_usuario, edad, email, password);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleRegistro}>
          <Form.Group controlId="nombre_usuario">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setNombre_usuario(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="edad">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setEdad(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
