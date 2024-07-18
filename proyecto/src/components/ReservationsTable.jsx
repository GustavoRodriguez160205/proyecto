import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import AddEditReservationModal from "./AddEditReservationModal";

function ReservationsTable() {
  const [reservations, setReservations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);

  const handleAddReservation = () => {
    setEditingReservation(null);
    setShowModal(true);
  };

  const handleEditReservation = (reservation) => {
    setEditingReservation(reservation);
    setShowModal(true);
  };

  const handleDeleteReservation = (reservationId) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation._id !== reservationId
    );
    setReservations(updatedReservations);
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddReservation}>
        Agregar Nueva Reserva
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.cancha}</td>
              <td>{reservation.fecha}</td>
              <td>{reservation.hora}</td>
              <td>{reservation.usuario}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditReservation(reservation)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteReservation(reservation._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddEditReservationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        reservation={editingReservation}
        onSave={(reservation) => {
          if (editingReservation) {
            const updatedReservations = reservations.map((r) =>
              r._id === reservation._id ? reservation : r
            );
            setReservations(updatedReservations);
          } else {
            setReservations([...reservations, reservation]);
          }
          setShowModal(false);
        }}
      />
    </>
  );
}

export default ReservationsTable;
