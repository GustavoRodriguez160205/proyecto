import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const AdminLoginModal = ({ show, handleClose }) => {
  const { login, adminLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === "elclubfc@gmail.com" && password === "123456") {
      const adminUser = {
        name: "Administrador",
        email: "elclubfc@gmail.com",
        rol: "administrador",
      };
      login(adminUser);
      adminLogin();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login de administrador exitoso",
        showConfirmButton: false,
        timer: 1500,
      });
      handleClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Credenciales incorrectas o no tienes permisos de administrador",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesión como Administrador</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleAdminLogin}>
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
            Iniciar Sesión
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminLoginModal;
