import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaCanchas = () => {
  const [listaCanchas, setListaCanchas] = useState([]);
  const [show, setShow] = useState(false);
  const [nombre_cancha, setNombre_cancha] = useState("");
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
      setListaCanchas(resp.data.listaCanchas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCanchas();
  }, []);

  const crearCanchaBackend = async (
    nombre_cancha,
    descripcion,
    imagen,
    cesped,
    tamanio,
    precio,
    estado
  ) => {
    try {
      await testApi.post("/admin/crearCancha", {
        nombre_cancha,
        descripcion,
        imagen,
        cesped,
        tamanio,
        precio,
        estado,
      });
      getCanchas();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cancha Creado Exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCrearCancha = (e) => {
    e.preventDefault();

    if (
      !nombre_cancha ||
      !descripcion ||
      !imagen ||
      !cesped ||
      !tamanio ||
      !precio
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }

    crearCanchaBackend(
      nombre_cancha,
      descripcion,
      imagen,
      cesped,
      tamanio,
      precio,
      estado
    );
    handleClose();
  };

  // const eliminarCanchaClick = async (id) => {
  //   try {
  //     await testApi.delete(`/admin/eliminarCancha/${id}`);
  //     getCanchas();
  //     Swal.fire({
  //       icon: "success",
  //       title: "Cancha eliminada",
  //       text: "La Cancha ha sido eliminada con éxito.",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "Hubo un problema al eliminar la Cancha.",
  //     });
  //   }
  // };

  const eliminarCanchaClick = async (id) => {
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
          await testApi.delete(`/admin/eliminarCancha/${id}`);
          getCanchas();
          Swal.fire({
            icon: "success",
            title: "Cancha eliminada",
            text: "La Cancha ha sido eliminada con éxito.",
          });
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al eliminar la Cancha.",
          });
        }
      }
    });
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
    const {
      nombre_cancha,
      descripcion,
      imagen,
      cesped,
      tamanio,
      precio,
      estado,
      _id,
    } = cancha;
    try {
      await testApi.put("/admin/editarCancha", {
        nombre_cancha,
        descripcion,
        imagen,
        cesped,
        tamanio,
        precio,
        estado,
        _id,
      });
      getCanchas();
      Swal.fire({
        icon: "success",
        title: "Cancha Actualizada",
        text: "La Cancha ha sido actualizada con éxito.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al actualizar la Cancha.",
      });
    }
  };

  const handleEditarCancha = (e) => {
    e.preventDefault();

    if (
      !canchaEditar.nombre_cancha ||
      !canchaEditar.descripcion ||
      !canchaEditar.imagen ||
      !canchaEditar.cesped ||
      !canchaEditar.tamanio ||
      !canchaEditar.precio
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Todos los campos son obligatorios.",
      });
      return;
    }

    editarCanchaBackend(canchaEditar);
    setShowEditar(false);
  };

  return (
    <div>
      <Button
        style={{ background: "#72A1E5" }}
        variant=" mt-2 mb-2"
        onClick={handleShow}
      >
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
                <Form.Control
                  type="text"
                  onChange={(e) => setNombre_cancha(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setImagen(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCesped">
                <Form.Label>Cesped</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCesped(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTamanio">
                <Form.Label>Cantidad Jugadores</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setTamanio(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPrecio(e.target.value)}
                />
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
              <Button
                style={{ background: "#72A1E5" }}
                variant=" mt-2 mb-2"
                type="submit"
                className="ms-2"
              >
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
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Cesped</th>
                <th>Cantidad Jugadores</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaCanchas.map((canchas) => {
                return (
                  <tr key={canchas._id}>
                    <td>{canchas.nombre_cancha}</td>
                    <td>{canchas.descripcion}</td>
                    <td>{canchas.imagen}</td>
                    <td>{canchas.cesped}</td>
                    <td>{canchas.tamanio}</td>
                    <td>{canchas.precio}</td>
                    <td>
                      <button
                        onClick={() => editarCancha(canchas)}
                        className="btn btn-warning"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => eliminarCanchaClick(canchas._id)}
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
                  value={canchaEditar.nombre_cancha || ""}
                  onChange={(e) =>
                    handleChangeEditar("nombre_cancha", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEditarDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.descripcion || ""}
                  onChange={(e) =>
                    handleChangeEditar("descripcion", e.target.value)
                  }
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
                <Form.Label>Cantidad Jugadores</Form.Label>
                <Form.Control
                  type="text"
                  value={canchaEditar.tamanio || ""}
                  onChange={(e) =>
                    handleChangeEditar("tamanio", e.target.value)
                  }
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
              <Button
                style={{ background: "#72A1E5" }}
                variant=" mt-2 mb-2"
                type="submit"
              >
                Guardar Cambios
              </Button>
              <Button variant="secondary" onClick={() => setShowEditar(false)}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </div>
  );
};
