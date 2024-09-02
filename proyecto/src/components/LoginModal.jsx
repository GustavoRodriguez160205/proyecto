import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
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

      const token = resp.data.token;
      localStorage.setItem("token", token);

      const decodedToken = jwtDecode(token);
      const userData = {
        nombre_usuario: decodedToken.nombre_usuario,
        id_usuario: decodedToken.id_usuario,
        rol: decodedToken.rol,
      };
      // console.log("Datos del usuario decodificados:", userData);

      login(userData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Usuario logueado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });

      handleClose();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "El usuario no existe",
        });
      } else if (error.response && error.response.status === 500) {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Contactarse con un administrador",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Error de conexión. Por favor, intenta de nuevo más tarde.",
        });
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "elclubfc@gmail.com" && password === "123456") {
      const adminUser = {
        name: "Administrador",
        email: "elclubfc@gmail.com",
        rol: "administrador",
      };
      login(adminUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login de Administrador Exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
    } else {
      loginBackend(email, password);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleLogin}>
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
          <br />
          <Button
            style={{ background: "#72A1E5" }}
            variant="mt-2 mb-2"
            type="submit"
          >
            Iniciar Sesión
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
