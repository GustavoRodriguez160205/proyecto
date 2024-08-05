import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import testApi from "../api/testApi";

export const TablaCanchas = () => {
  const [listaCanchas, setListaCanchas] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [imagen, setImagen] = useState("");
  const [cesped, setCesped] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("true");
  const [showEditar, setShowEditar] = useState(false);
  const [canchaEditar, setCanchaEditar] = useState({});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getCanchas = async () => {
    try {
      const resp = await testApi.get("/admin/canchas");
      console.log(resp.data.listaCanchas);
      setListaCanchas(resp.data.listaCanchas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCanchas();
  }, []);

  const crearCanchaBackend = async (name, descripcion, imagen, cesped, tamanio, precio, estado) => {
    try {
      const resp = await testApi.post("/admin/crearCancha", {
        name,
        descripcion,
        imagen,
        cesped,
        tamanio,
        precio,
        estado,
      });
      getCanchas();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCrearCancha = (e) => {
    e.preventDefault();
    crearCanchaBackend(name, descripcion, imagen, cesped, tamanio, precio, estado);
  };

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
    setCanchaEditar(cancha);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setCanchaEditar({
      ...canchaEditar,
      [propiedad]: valor,
    });
  };

  const editarCanchaBackend = async (cancha) => {
    const { name, descripcion, imagen, cesped, tamanio, precio, estado, _id } = cancha;
    try {
      const resp = await testApi.put("/admin/editarCancha", {
        name,
        descripcion,
        imagen,
        cesped,
        tamanio,
        precio,
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
    editarCanchaBackend(canchaEditar);
  };

  return (
    <div>
      <Button style={{ background: "#72A1E5" }} variant=" mt-2 mb-2" onClick={handleShow}>
        + Agregar Cancha
      </Button>
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Cancha</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#f5f3f3" }}>
            <Form onSubmit={handleCrearCancha}>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" onChange={(e) => setDescripcion(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" onChange={(e) => setImagen(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCesped">
                <Form.Label>Cesped</Form.Label>
                <Form.Control type="text" onChange={(e) => setCesped(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTamanio">
                <Form.Label>Tamaño</Form.Label>
                <Form.Control type="text" onChange={(e) => setTamanio(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" onChange={(e) => setPrecio(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEstado">
                <Form.Label>Estado</Form.Label>
                <Form.Select onChange={(e) => setEstado(e.target.value)}>
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </Form.Select>
              </Form.Group>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button style={{ background: "#72A1E5" }} variant=" mt-2 mb-2" type="submit" className="ms-2" onClick={handleClose}>
                Guardar Cancha
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>

      <Container>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id Cancha</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Cesped</th>
                <th>Tamaño</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaCanchas.map((canchas) => {
                return (
                  <tr key={canchas._id}>
                    <td>{canchas._id}</td>
                    <td>{canchas.name}</td>
                    <td>{canchas.descripcion}</td>
                    <td>{canchas.imagen}</td>
                    <td>{canchas.cesped}</td>
                    <td>{canchas.tamanio}</td>
                    <td>{canchas.precio}</td>
                    <td>{canchas.estado}</td>
                    <td>
                      <button onClick={() => editarCancha(canchas)} className="btn btn-warning">
                        Editar
                      </button>
                      <button onClick={() => eliminarCanchaClick(canchas._id)} className="btn btn-danger ms-2">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>

      <Container>
        <Modal show={showEditar}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Cancha</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleEditarCancha}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formEditarNombre">
                <Form.Label>Nombre de la Cancha</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.name || ""}
                  onChange={(e) => handleChangeEditar("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.descripcion || ""}
                  onChange={(e) => handleChangeEditar("descripcion", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.imagen || ""}
                  onChange={(e) => handleChangeEditar("imagen", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarCesped">
                <Form.Label>Cesped</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.cesped || ""}
                  onChange={(e) => handleChangeEditar("cesped", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarTamanio">
                <Form.Label>Tamaño</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.tamanio || ""}
                  onChange={(e) => handleChangeEditar("tamanio", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.precio || ""}
                  onChange={(e) => handleChangeEditar("precio", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarEstado">
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  value={canchaEditar.estado}
                  onChange={(e) => handleChangeEditar("estado", e.target.value)}
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
              <Button style={{ background: "#72A1E5" }} variant=" mt-2 mb-2" type="submit" onClick={() => setShowEditar(false)}>
                Guardar Cambios
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </div>
  );
};
