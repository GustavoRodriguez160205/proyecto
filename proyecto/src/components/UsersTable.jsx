import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import AddEditUserModal from "./AddEditUserModal";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddUser}>
        Agregar Nuevo Usuario
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.edad}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>{user.estado}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditUser(user)}>
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddEditUserModal
        show={showModal}
        onHide={() => setShowModal(false)}
        user={editingUser}
        onSave={(user) => {
          if (editingUser) {
            const updatedUsers = users.map((u) =>
              u._id === user._id ? user : u
            );
            setUsers(updatedUsers);
          } else {
            setUsers([...users, user]);
          }
          setShowModal(false);
        }}
      />
    </>
  );
}

export default UsersTable;
