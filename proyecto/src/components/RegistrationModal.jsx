// import React, { useState, useContext } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import Swal from "sweetalert2";
// // import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import testApi from "../api/testApi";

// export const RegistrationModal = ({ show, handleClose }) => {
//   const [name, setName] = useState("");
//   const [edad, setEdad] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const registroBackend = async (name, edad, email, password) => {
//     try {
//       const resp = await testApi.post("/auth/registro", {
//         name,
//         edad,
//         email,
//         password,
//       });
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Usuario registrado con éxito",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       if (error.response.status === 400) {
//         Swal.fire({
//           icon: "error",
//           title: "Ooops. . .",
//           text: "El usuario ya existe",
//         });
//       } else if (error.response.status === 500) {
//         Swal.fire({
//           icon: "error",
//           title: "Ooops. . .",
//           text: "Contactarse con un Administrador",
//         });
//       }
//     }
//   };
//   const handleRegistro = (e) => {
//     e.preventDefault();

//     //validaciones
//     registroBackend(name, edad, email, password);
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Registro de Usuario</Modal.Title>
//       </Modal.Header>
//       <Modal.Body style={{ background: "#f5f3f3" }}>
//         <Form onSubmit={handleRegistro}>
//           <Form.Group controlId="name">
//             <Form.Label>Nombre</Form.Label>
//             <Form.Control
//               type="text"
//               // name="name"
//               // value={formData.name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="edad">
//             <Form.Label>Edad</Form.Label>
//             <Form.Control
//               type="number"
//               // name="edad"
//               // value={formData.edad}
//               onChange={(e) => setEdad(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="text"
//               // name="email"
//               // value={formData.email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="password">
//             <Form.Label>Contraseña</Form.Label>
//             <Form.Control
//               type="password"
//               // name="password"
//               // value={formData.password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Button
//             style={{ background: " #72A1E5" }}
//             variant=" mt-2 mb-2"
//             type="submit"
//           >
//             Registrar
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default RegistrationModal;
import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import testApi from "../api/testApi";

export const RegistrationModal = ({ show, handleClose }) => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registroBackend = async (name, edad, email, password) => {
    try {
      const resp = await testApi.post("/auth/registro", {
        name,
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
    registroBackend(name, edad, email, password);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro de Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#f5f3f3" }}>
        <Form onSubmit={handleRegistro}>
          <Form.Group controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
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