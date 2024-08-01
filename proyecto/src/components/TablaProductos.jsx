import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import testApi from "../api/testApi";

export const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [showEditar, setShowEditar] = useState("");
  const [productoEditar, setProductoEditar] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProductos = async () => {
    try {
      const resp = await testApi.get("/admin/Productos");

      setListaProductos(resp.data.listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  const crearProductoBackend = async (name, precio, descripcion) => {
    try {
      const resp = await testApi.post("/admin/crearProducto", {
        name,
        precio,
        descripcion,
      });
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const handelCrearProducto = (e) => {
    e.preventDefault();
  };

  crearProductoBackend(name, precio, descripcion);

  const eliminarProductoClick = async (id) => {
    try {
      const resp = await testApi.delete(`/admin/eliminar/${id}`);
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const editarProducto = (producto) => {
    setShowEditar(false);
    setProductoEditar(producto);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setProductoEditar({
      ...productoEditar,
      [propiedad]: valor,
    });
  };
  const editarProductoBackend = async (producto) => {
    const { name, precio, descripcion, _id } = producto;
    try {
      const resp = await testApi.put("/admin/editarProducto", {
        name,
        precio,
        descripcion,
        _id,
      });
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditarProducto = (e) => {
    e.preventDefault();
  };
  editarProductoBackend(productoEditar);
  // crearProductoBackend(name, precio, descripcion);

  return (
    <div>
      <Button
        style={{ background: " #72A1E5" }}
        variant=" mt-2 mb-2"
        onClick={handleShow}
      >
        + Agregar Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#f5f3f3" }}>
          <Form onSubmit={handelCrearProducto}>
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
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setPrecio(e.target.value)}
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
              Guardar Producto
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto) => {
            return (
              <tr>
                <td>{producto._id}</td>
                <td>{producto.name}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>
                  <button
                    onClick={() => editarProducto(producto)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarProductoClick(producto._id)}
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
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditarProducto}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                value={productoEditar.name}
                onChange={(e) => handleChangeEditar("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={productoEditar.precio}
                onChange={(e) => handleChangeEditar("precio", e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                value={productoEditar.descripcion}
                onChange={(e) =>
                  handleChangeEditar("descripcion", e.target.value)
                }
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
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
