import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import AddEditFieldModal from "./AddEditFieldModal";

function FieldsTable() {
  const [fields, setFields] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingField, setEditingField] = useState(null);

  const handleAddField = () => {
    setEditingField(null);
    setShowModal(true);
  };

  const handleEditField = (field) => {
    setEditingField(field);
    setShowModal(true);
  };

  const handleDeleteField = (fieldId) => {
    const updatedFields = fields.filter((field) => field._id !== fieldId);
    setFields(updatedFields);
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddField}>
        Agregar Nueva Cancha
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field._id}>
              <td>{field.name}</td>
              <td>{field.descripcion}</td>
              <td>{field.tipo}</td>
              <td>{field.estado}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditField(field)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteField(field._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddEditFieldModal
        show={showModal}
        onHide={() => setShowModal(false)}
        field={editingField}
        onSave={(field) => {
          if (editingField) {
            const updatedFields = fields.map((f) =>
              f._id === field._id ? field : f
            );
            setFields(updatedFields);
          } else {
            setFields([...fields, field]);
          }
          setShowModal(false);
        }}
      />
    </>
  );
}

export default FieldsTable;
