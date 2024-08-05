import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [estado, setEstado] = useState("true");
  const [showEditar, setShowEditar] = useState("false");
  const [productoEditar, setProductoEditar] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEditar = () => setShowEditar(false);

  const getProductos = async () => {
    try {
      const resp = await testApi.get("/admin/Productos");
      console.log(resp);
      setListaProductos(resp.data.listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  const crearProductoBackend = async ( name,precio,  descripcion,stock, estado) => {
    try {
      const resp = await testApi.post("/admin/crearProducto", {
        name,
        precio,
        descripcion,
        stock,
        estado,
      });
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Producto Creado Exitosamente",
             showConfirmButton: false,
             timer: 1500,
           });
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const handelCrearProducto = (e) => {
    e.preventDefault();
    //validar

    crearProductoBackend(name, precio, descripcion, stock, estado);
  };

  const eliminarProductoClick = async (id) => {
    try {
      const resp = await testApi.delete(`/admin/eliminarProducto/${id}`);

      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const editarProducto = (producto) => {
    setProductoEditar(producto);
    setShowEditar(true);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setProductoEditar({
      ...productoEditar,
      [propiedad]: valor,
    });
  };


  const editarProductoBackend = async (producto) => {
    const { _id,name, precio, descripcion, stock, estado } = producto;
    try {
      const resp = await testApi.put("/admin/editarProducto", {
        name,
        precio,
        descripcion,
        _id,
        stock,
        estado,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Editado Exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };


  const handleEditarProducto = (e) => {
    e.preventDefault();
    editarProductoBackend(productoEditar);
    handleCloseEditar();
  };

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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Estado</Form.Label>
              <Form.Select onChange={(e) => setEstado(e.target.value)}>
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </Form.Select>
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
            <th>Stock</th>
            <th>Estado</th>
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
                <td>{producto.stock}</td>
                <td>{producto.estado}</td>
                <td>
                  <button
                    onClick={() => editarProducto(producto)}
                    className="btn btn-warning "
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarProductoClick(producto._id)}
                    className="btn btn-danger ms-2"
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
              controlId="editarPrecio prdocuto"
            >
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={productoEditar.precio}
                onChange={(e) => handleChangeEditar("precio", parseFloat(e.target.value))}
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={productoEditar.stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                value={productoEditar.estado}
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
