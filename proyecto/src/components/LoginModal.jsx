import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
<<<<<<< HEAD
<<<<<<< Updated upstream
// import axios from "axios";
=======
import axios from "axios";
>>>>>>> Stashed changes
=======
import axios from "axios";
>>>>>>> 45de1c55af7c9c7992ca3f4807a273d985ad418c
import { AuthContext } from "../context/AuthContext";
import testApi from "../api/testApi";

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const loginBackend = async (email, password) => {
    try {
      const resp = await testApi.post("/auth/login", {
        email,
        password,
      });
      const userData = resp.data;
      login(userData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario Logueado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Ooops. . .",
          text: "El Usuario no existe",
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
  const handleLogin = (e) => {
    e.preventDefault();

    //validaciones
    loginBackend(email, password);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inicias Sesion</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              // name="email"
              // value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              // name="password"
              // value={formData.password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            style={{ background: " #72A1E5" }}
            variant=" mt-2 mb-2"
            type="submit"
          >
            Inicias Sesion
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default LoginModal;
