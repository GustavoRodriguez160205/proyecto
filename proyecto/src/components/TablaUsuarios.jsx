import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const [showEditar, setShowEditar] = useState(false);
  const [usuarioEditar, setUsuarioEditar] = useState({});

  const getUsuarios = async () => {
    try {
      const resp = await testApi.get("/admin/usuarios");
      setListaUsuarios(resp.data.listaUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  const editarUsuario = (usuario) => {
    setUsuarioEditar(usuario);
    setShowEditar(true);
  };

  const handleChangeEditar = (e) => {
    const { name, value } = e.target;
    setUsuarioEditar({
      ...usuarioEditar,
      [name]: value,
    });
  };

  const handleEditarUsuario = async (e) => {
    e.preventDefault();
    const { nombre_usuario, edad, email, password, rol, estado, _id } =
      usuarioEditar;

    // Validaciones básicas
    if (!nombre_usuario || !edad || !email || !password || !rol) {
      Swal.fire("Error", "Todos los campos deben estar completos", "error");
      return;
    }
    if (edad < 18) {
      Swal.fire("Error", "La edad debe ser mayor o igual a 18", "error");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire("Error", "El email no es válido", "error");
      return;
    }

    try {
      await testApi.put("/admin/editarUsuario", {
        nombre_usuario,
        edad,
        email,
        password,
        rol,
        estado,
        _id,
      });
      Swal.fire("Éxito", "Usuario actualizado correctamente", "success");
      getUsuarios();
      setShowEditar(false);
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error",
        "POR SEGURIDAD TIENES QUE INGRESAR TODOS LOS CAMPOS PARA  PODER MODIFICAR",
        "error"
      );
    }
  };

  const eliminarUsuario = async (usuarioId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await testApi.delete(`/admin/eliminarUsuario/${usuarioId}`);
          Swal.fire("Eliminado", "El usuario ha sido eliminado", "success");
          getUsuarios();
        } catch (error) {
          console.log(error);
          Swal.fire("Error", "No se pudo eliminar el usuario", "error");
        }
      }
    });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario.nombre_usuario}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.email}</td>
              <td>
                <Button
                  variant="info"
                  className="me-2"
                  onClick={() => editarUsuario(usuario)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => eliminarUsuario(usuario._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para editar usuario */}
      <Modal show={showEditar} onHide={() => setShowEditar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditarUsuario}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombre_usuario"
                value={usuarioEditar.nombre_usuario || ""}
                onChange={handleChangeEditar}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="edad"
                value={usuarioEditar.edad || ""}
                onChange={handleChangeEditar}
                required
                min={18}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={usuarioEditar.email || ""}
                onChange={handleChangeEditar}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={usuarioEditar.password || ""}
                onChange={handleChangeEditar}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Select
                name="rol"
                value={usuarioEditar.rol || ""}
                onChange={handleChangeEditar}
                required
              >
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="usuario">Usuario</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                name="estado"
                value={usuarioEditar.estado || "true"}
                onChange={handleChangeEditar}
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
            <Button style={{ background: "#72A1E5" }} type="submit">
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
