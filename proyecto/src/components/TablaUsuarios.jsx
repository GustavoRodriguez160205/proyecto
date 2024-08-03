import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [estado, setEstado] = useState("true");
  const [rol, setRol] = useState("");

  const [showEditar, setShowEditar] = useState("");
  const [usuarioEditar, setUsuarioEditar] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUsuarios = async () => {
    try {
      const resp = await testApi.get("/admin/usuarios");
      console.log(resp);
      setListaUsuarios(resp.data.listaUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);
  const editarUsuario = (usuario) => {
    setShowEditar(true);
    setUsuarioEditar(usuario);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setUsuarioEditar({
      ...usuarioEditar,
      [propiedad]: valor,
    });
  };
  const editarUsuarioBackend = async (usuario) => {
    const { name, edad, email, password, rol, estado, _id } = usuario;
    try {
      const resp = await testApi.put("/admin/editarUsuario", {
        name,
        edad,
        email,
        password,
        rol,
        estado,
        _id,
      });
      getUsuarios();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditarUsuario = (e) => {
    e.preventDefault();
    //validar
    editarUsuarioBackend(usuarioEditar);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Usuario</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((usuario) => {
            return (
              <tr>
                <td>{usuario._id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.edad}</td>
                <td>{usuario.email}</td>
                <td>
                  <button
                    onClick={() => editarUsuario(usuario)}
                    className="btn btn-info "
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={showEditar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditarUsuario}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre Del Usuario</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditar.name}
                onChange={(e) => handleChangeEditar("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                value={usuarioEditar.edad}
                onChange={(e) => handleChangeEditar("edad", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditar.email}
                onChange={(e) => handleChangeEditar("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditar.password}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Rol</Form.Label>
              <Form.Control
                type="text"
                value={usuarioEditar.rol}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                value={usuarioEditar.estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditar(false)}>
              Cerrar
            </Button>
            <Button
              style={{ background: " #72A1E5" }}
              variant=" mt-2 mb-2"
              type="submit"
              onClick={() => setShowEditar(false)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
