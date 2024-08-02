// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import Swal from "sweetalert2";

// const AdminLoginModal = ({ show, handleClose, handleAdminLogin }) => {
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = formData;

//     // Credenciales hardcodeadas
//     const adminCredentials = {
//       username: "admin",
//       password: "admin123",
//     };

//     if (
//       username === adminCredentials.username &&
//       password === adminCredentials.password
//     ) {
//       Swal.fire(
//         "Éxito",
//         "Inicio de sesión de administrador exitoso",
//         "success"
//       );
//       handleAdminLogin();
//       handleClose();
//     } else {
//       Swal.fire("Error", "Credenciales incorrectas", "error");
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Iniciar Sesión Administrador</Modal.Title>
//       </Modal.Header>
//       <Modal.Body style={{ background: "#f5f3f3" }}>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="username">
//             <Form.Label>Usuario</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="password">
//             <Form.Label>Contraseña</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//           <Button
//             style={{ background: " #72A1E5" }}
//             variant=" mt-2 mb-2"
//             type="submit"
//           >
//             Iniciar Sesión
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AdminLoginModal;

import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import testApi from "../api/testApi";

const AdminLoginModal = ({ show, handleClose }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await testApi.post("/auth/login", {
        email,
        password,
      });
      login(resp.data);
      if (resp.data.rol === "administrador") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login de administrador exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        handleClose();
        localStorage.setItem("token", resp.data.token);
      } else {
        Swal.fire({
          icon: "error",
          title: "Acceso denegado",
          text: "No tienes permisos de administrador",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops. . .",
        text: "Credenciales incorrectas",
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
