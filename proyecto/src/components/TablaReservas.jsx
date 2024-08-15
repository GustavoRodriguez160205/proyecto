import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import testApi from "../api/testApi";

export const TablaReservas = () => {
  const [listaReservas, setListaReservas] = useState([]);
  const [showEditar, setShowEditar] = useState(false);
  const [reservaEditar, setReservaEditar] = useState({
    nombre_cancha: "",
    nombre_usuario: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
  });

  const getReservas = async () => {
    try {
      const resp = await testApi.get("/auth/reservas");
      setListaReservas(resp.data.listaReservas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservas();
  }, []);

  const handleEditarReserva = (reserva) => {
    setReservaEditar(reserva);
    setShowEditar(true);
  };

  const handleChangeEditar = (propiedad, valor) => {
    setReservaEditar({
      ...reservaEditar,
      [propiedad]: valor,
    });
  };

  const validarHoras = (hora) => {
    const horaNumerica = parseInt(hora, 10);
    return !isNaN(horaNumerica) && horaNumerica >= 0 && horaNumerica <= 24;
  };

  const editarReservaBackend = async (reserva) => {
    const { nombre_cancha, nombre_usuario, fecha, horaInicio, horaFin, _id } =
      reserva;

    if (!validarHoras(horaInicio) || !validarHoras(horaFin)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las horas deben ser números entre 0 y 24.",
      });
      return;
    }

    if (horaInicio >= horaFin) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La hora de inicio debe ser menor que la hora de fin.",
      });
      return;
    }

    try {
      await testApi.put("/auth/editarReserva", {
        nombre_cancha,
        nombre_usuario,
        fecha,
        horaInicio,
        horaFin,
        _id,
      });
      getReservas();
      Swal.fire({
        icon: "success",
        title: "Reserva actualizada",
        text: "La reserva ha sido actualizada con éxito.",
      });
      setShowEditar(false);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al actualizar la reserva.",
      });
    }
  };

  const handleEditarReservaSubmit = (e) => {
    e.preventDefault();
    editarReservaBackend(reservaEditar);
  };

  const eliminarReservaClick = async (id) => {
    try {
      await testApi.delete(`/auth/eliminarReserva/${id}`);
      getReservas();
      Swal.fire({
        icon: "success",
        title: "Reserva eliminada",
        text: "La reserva ha sido eliminada con éxito.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al eliminar la reserva.",
      });
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre Cancha</th>
            <th>Nombre Usuario</th>
            <th>Fecha</th>
            <th>Hora Inicio</th>
            <th>Hora Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaReservas.map((reserva) => (
            <tr key={reserva._id}>
              <td>{reserva.nombre_cancha}</td>
              <td>{reserva.nombre_usuario}</td>
              <td>{reserva.fecha}</td>
              <td>{reserva.horaInicio}</td>
              <td>{reserva.horaFin}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditarReserva(reserva)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => eliminarReservaClick(reserva._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para editar la reserva */}
      <Modal show={showEditar} onHide={() => setShowEditar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Reserva</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEditarReservaSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formEditarNombreCancha">
              <Form.Label>Nombre Cancha</Form.Label>
              <Form.Control
                type="text"
                value={reservaEditar.nombre_cancha || ""}
                onChange={(e) =>
                  handleChangeEditar("nombre_cancha", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditarNombreUsuario">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control
                type="text"
                value={reservaEditar.nombre_usuario || ""}
                onChange={(e) =>
                  handleChangeEditar("nombre_usuario", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditarFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={reservaEditar.fecha || ""}
                onChange={(e) => handleChangeEditar("fecha", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditarHoraInicio">
              <Form.Label>Hora Inicio</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="24"
                value={reservaEditar.horaInicio || ""}
                onChange={(e) =>
                  handleChangeEditar("horaInicio", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEditarHoraFin">
              <Form.Label>Hora Fin</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="24"
                value={reservaEditar.horaFin || ""}
                onChange={(e) => handleChangeEditar("horaFin", e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditar(false)}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
