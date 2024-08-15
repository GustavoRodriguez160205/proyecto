import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaProductos = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [show, setShow] = useState(false);
  const [nombre_producto, setNombre_producto] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");
  const [estado, setEstado] = useState("true");
  const [showEditar, setShowEditar] = useState(false);
  const [productoEditar, setProductoEditar] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEditar = () => setShowEditar(false);

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

  const validarCamposProducto = (
    nombre_producto,
    precio,
    descripcion,
    stock,
    imagen
  ) => {
    if (!nombre_producto || !precio || !descripcion || !stock || !imagen) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de guardar.",
      });
      return false;
    }

    if (isNaN(precio) || precio <= 0) {
      Swal.fire({
        icon: "error",
        title: "Precio inválido",
        text: "El precio debe ser un número mayor a 0.",
      });
      return false;
    }

    if (isNaN(stock) || stock < 0) {
      Swal.fire({
        icon: "error",
        title: "Stock inválido",
        text: "El stock debe ser un número mayor o igual a 0.",
      });
      return false;
    }

    return true;
  };

  const crearProductoBackend = async (
    nombre_producto,
    precio,
    descripcion,
    imagen,
    stock,
    estado
  ) => {
    try {
      await testApi.post("/admin/crearProducto", {
        nombre_producto,
        precio,
        descripcion,
        imagen,
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

    if (
      !validarCamposProducto(
        nombre_producto,
        precio,
        descripcion,
        stock,
        imagen
      )
    ) {
      return;
    }

    crearProductoBackend(
      nombre_producto,
      precio,
      descripcion,
      imagen,
      stock,
      estado
    );
    handleClose();
  };

  const eliminarProductoClick = async (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminarlo",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await testApi.delete(`/admin/eliminarProducto/${id}`);
          Swal.fire(
            "Eliminado",
            "El producto ha sido eliminado con éxito",
            "success"
          );
          getProductos();
        } catch (error) {
          console.log(error);
        }
      }
    });
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
    const { nombre_producto, precio, descripcion, imagen, stock, estado, _id } =
      producto;

    if (
      !validarCamposProducto(
        nombre_producto,
        precio,
        descripcion,
        stock,
        imagen
      )
    ) {
      return;
    }

    try {
      await testApi.put("/admin/editarProducto", {
        nombre_producto,
        precio,
        descripcion,
        imagen,
        stock,
        estado,
        _id,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto editado exitosamente",
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

    if (
      !validarCamposProducto(
        productoEditar.nombre_producto,
        productoEditar.precio,
        productoEditar.descripcion,
        productoEditar.stock,
        productoEditar.imagen
      )
    ) {
      return;
    }

    editarProductoBackend(productoEditar);
    handleCloseEditar();
  };

  return (
    <div>
      <br />
      <Button
        style={{ background: " #72A1E5" }}
        variant="mt-2 mb-2"
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
            <Form.Group className="mb-3" controlId="nombreProducto">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNombre_producto(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precioProducto">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setPrecio(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcionProducto">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagenProducto">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setImagen(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stockProducto">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setStock(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="estadoProducto">
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
              variant="mt-2 mb-2"
              type="submit"
              className="ms-2"
            >
              Guardar Producto
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaProductos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.nombre_producto}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.imagen}</td>
                <td>{producto.stock}</td>
                <td>
                  <button
                    onClick={() => editarProducto(producto)}
                    className="btn btn-warning"
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
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showEditar} onHide={handleCloseEditar}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#f5f3f3" }}>
          <Form onSubmit={handleEditarProducto}>
            <Form.Group className="mb-3" controlId="nombreProductoEditar">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={productoEditar.nombre_producto || ""}
                onChange={(e) =>
                  handleChangeEditar("nombre_producto", e.target.value)
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="precioProductoEditar">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={productoEditar.precio || ""}
                onChange={(e) => handleChangeEditar("precio", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcionProductoEditar">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={productoEditar.descripcion || ""}
                onChange={(e) =>
                  handleChangeEditar("descripcion", e.target.value)
                }
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagenProductoEditar">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                value={productoEditar.imagen || ""}
                onChange={(e) => handleChangeEditar("imagen", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stockProductoEditar">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={productoEditar.stock || ""}
                onChange={(e) => handleChangeEditar("stock", e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="estadoProductoEditar">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                value={productoEditar.estado}
                onChange={(e) => handleChangeEditar("estado", e.target.value)}
              >
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseEditar}>
              Cancelar
            </Button>
            <Button
              style={{ background: " #72A1E5" }}
              variant="mt-2 mb-2"
              type="submit"
              className="ms-2"
            >
              Guardar Cambios
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
