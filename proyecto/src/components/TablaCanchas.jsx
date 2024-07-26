import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import testApi from "../api/testApi";

export const TablaCanchas = () => {
  const [listaCanchas, setListaCanchas] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("");
  const [showEditar, setShowEditar] = useState("");
  const [canchaEditar, setCanchaEditar] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCanchas = async () => {
    try {
      const resp = await testApi.get("/admin/canchas");

      setListaCanchas(resp.data.listaCanchas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCanchas();
  }, []);

  const crearCanchaBackend = async (name, descripcion, estado) => {
    try {
      const resp = await testApi.post("/admin/crearCancha", {
        name,
        descripcion,
        estado,
      });
      getCanchas();
    } catch (error) {
      console.log(error);
    }
  };

  const handelCrearCancha = (e) => {
    e.preventDefault();
  };

  crearCanchaBackend(name, descripcion, estado);

  const eliminarCanchaClick = async (id) => {
    try {
      const resp = await testApi.delete(`/admin/eliminarCancha/${id}`);
      getCanchas();
    } catch (error) {
      console.log(error);
    }
  };

  const editarCancha = (cancha) => {
    setShowEditar(true);
    setProductoEditar(cancha);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setCanchaEditar({
      ...canchaEditar,
      [propiedad]: valor,
    });
  };
  const editarCanchaBackend = async (producto) => {
    const { name, descripcion, estado, _id } = cancha;
    try {
      const resp = await testApi.put("/admin/editarCancha", {
        name,
        descripcion,
        estado,
        _id,
      });
      getCanchas();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditarCancha = (e) => {
    e.preventDefault();
  };
  editarCanchaBackend(canchaEditar);

  return (
    <div>
      <Button
        style={{ background: " #72A1E5" }}
        variant=" mt-2 mb-2"
        onClick={handleShow}
      >
        + Agregar Cancha
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#f5f3f3" }}>
          <Form onSubmit={handelCrearCancha}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="boolean"
                onChange={(e) => setEstado(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              style={{ background: " #72A1E5" }}
              variant=" mt-2 mb-2"
              type="submit"
              className="ms-2"
              onClick={handleClose}
            >
              Guardar Cancha
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Cancha</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaCanchas.map((cancha) => {
            return (
              <tr>
                <td>{cancha._id}</td>
                <td>{cancha.name}</td>
                <td>{cancha.descripcion}</td>
                <td>{cancha.estado}</td>
                <td>
                  <button
                    onClick={() => editarCancha(cancha)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarCanchaClick(cancha._id)}
                    className="btn btn-denger ms-2"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal show={showEditar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cancha</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditarCancha}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre de la Cancha</Form.Label>
              <Form.Control
                type="text"
                value={canchaEditar.name}
                onChange={(e) => handleChangeEditar("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                value={canchaEditar.descripcion}
                onChange={(e) =>
                  handleChangeEditar("descripcion", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="number"
                value={canchaEditar.estado}
                onChange={(e) => handleChangeEditar("estado", e.target.value)}
              />
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
            >
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
