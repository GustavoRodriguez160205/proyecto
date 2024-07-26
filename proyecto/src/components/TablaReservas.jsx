import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import testApi from "../api/testApi";

export const TablaReservas = () => {
  const [listaReservas, setListaReservas] = useState([]);

  const getReservas = async () => {
    try {
      const resp = await testApi.get("/admin/reservas");
      console.log(resp);
      setListaReservas(resp.data.listaReservas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReservas();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Cancha</th>
            <th>Id Usuario</th>
            <th>Fechas</th>
            <th>Hora Inicio</th>
            <th>Hora Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaReservas.map((reserva) => {
            return (
              <tr>
                <td>{reserva.id_cancha}</td>
                <td>{reserva.id_usuario}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.horaInicio}</td>
                <td>{reserva.horaFin}</td>
                <td>
                  <Button type="submit">Suspender</Button>
                  {/* <button>suspender</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
