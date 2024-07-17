import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [currentTable, setCurrentTable] = useState("");
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [fields, setFields] = useState([]);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Cargar datos desde el local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const storedFields = JSON.parse(localStorage.getItem("fields")) || [];
    const storedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];
    setUsers(storedUsers);
    setProducts(storedProducts);
    setFields(storedFields);
    setAssignments(storedAssignments);
  }, []);

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleShowModal = (type, table, data = {}) => {
    setModalType(type);
    setCurrentTable(table);
    setFormData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let updatedData;
    const newData = { ...formData };
    if (modalType === "new") {
      newData.codigo = uuidv4(); // Generar un nuevo código
    }

    if (currentTable === "users") {
      updatedData =
        modalType === "new"
          ? [...users, newData]
          : users.map((user) =>
              user.codigo === formData.codigo ? newData : user
            );
      setUsers(updatedData);
      saveToLocalStorage("users", updatedData);
    } else if (currentTable === "products") {
      updatedData =
        modalType === "new"
          ? [...products, newData]
          : products.map((product) =>
              product.codigo === formData.codigo ? newData : product
            );
      setProducts(updatedData);
      saveToLocalStorage("products", updatedData);
    } else if (currentTable === "fields") {
      updatedData =
        modalType === "new"
          ? [...fields, newData]
          : fields.map((field) =>
              field.codigo === formData.codigo ? newData : field
            );
      setFields(updatedData);
      saveToLocalStorage("fields", updatedData);
    } else if (currentTable === "assignments") {
      updatedData =
        modalType === "new"
          ? [...assignments, newData]
          : assignments.map((assignment) =>
              assignment.codigo === formData.codigo ? newData : assignment
            );
      setAssignments(updatedData);
      saveToLocalStorage("assignments", updatedData);
    }
    handleCloseModal();
  };

  const handleDelete = (codigo, table) => {
    let updatedData;
    if (table === "users") {
      updatedData = users.filter((user) => user.codigo !== codigo);
      setUsers(updatedData);
      saveToLocalStorage("users", updatedData);
    } else if (table === "products") {
      updatedData = products.filter((product) => product.codigo !== codigo);
      setProducts(updatedData);
      saveToLocalStorage("products", updatedData);
    } else if (table === "fields") {
      updatedData = fields.filter((field) => field.codigo !== codigo);
      setFields(updatedData);
      saveToLocalStorage("fields", updatedData);
    } else if (table === "assignments") {
      updatedData = assignments.filter(
        (assignment) => assignment.codigo !== codigo
      );
      setAssignments(updatedData);
      saveToLocalStorage("assignments", updatedData);
    }
  };

  const renderTable = (data, table) => (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            <td>
              <Button
                variant="warning"
                onClick={() => handleShowModal("edit", table, item)}
              >
                Editar
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => handleDelete(item.codigo, table)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className="container">
      <h1>Administracion</h1>
      <Button variant="primary" onClick={() => handleShowModal("new", "users")}>
        Nuevo Usuario
      </Button>
      {users.length > 0 && renderTable(users, "users")}

      <Button
        variant="primary"
        onClick={() => handleShowModal("new", "products")}
      >
        Nuevo Producto
      </Button>
      {products.length > 0 && renderTable(products, "products")}

      <Button
        variant="primary"
        onClick={() => handleShowModal("new", "fields")}
      >
        Nueva Cancha
      </Button>
      {fields.length > 0 && renderTable(fields, "fields")}

      <Button
        variant="primary"
        onClick={() => handleShowModal("new", "assignments")}
      >
        Nuevo Turno Asignado
      </Button>
      {assignments.length > 0 && renderTable(assignments, "assignments")}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "new" ? "Nuevo" : "Editar"}{" "}
            {currentTable === "users"
              ? "Usuario"
              : currentTable === "products"
              ? "Producto"
              : currentTable === "fields"
              ? "Cancha"
              : "Turno Asignado"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {currentTable === "users" && (
              <>
                {/* Código es generado automáticamente, por lo que no se muestra en el formulario */}
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    value={formData.nombre || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    name="telefono"
                    onChange={handleChange}
                    value={formData.telefono || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    onChange={handleChange}
                    value={formData.correo || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="contraseña"
                    onChange={handleChange}
                    value={formData.contraseña || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rol</Form.Label>
                  <Form.Control
                    as="select"
                    name="roll"
                    onChange={handleChange}
                    value={formData.roll || ""}
                  >
                    <option value="usuario">Usuario</option>
                    <option value="admin">Admin</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    as="select"
                    name="estado"
                    onChange={handleChange}
                    value={formData.estado || ""}
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </Form.Control>
                </Form.Group>
              </>
            )}
            {currentTable === "products" && (
              <>
                {/* Código es generado automáticamente, por lo que no se muestra en el formulario */}
                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    name="descripcion"
                    onChange={handleChange}
                    value={formData.descripcion || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    name="precio"
                    onChange={handleChange}
                    value={formData.precio || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    name="stock"
                    onChange={handleChange}
                    value={formData.stock || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    as="select"
                    name="estado"
                    onChange={handleChange}
                    value={formData.estado || ""}
                  >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                  </Form.Control>
                </Form.Group>
              </>
            )}
            {currentTable === "fields" && (
              <>
                {/* Código es generado automáticamente, por lo que no se muestra en el formulario */}
                <Form.Group>
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    as="select"
                    name="tipo"
                    onChange={handleChange}
                    value={formData.tipo || ""}
                  >
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="11">11</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estilo</Form.Label>
                  <Form.Control
                    as="select"
                    name="estilo"
                    onChange={handleChange}
                    value={formData.estilo || ""}
                  >
                    <option value="sintético">Sintético</option>
                    <option value="césped">Césped</option>
                    <option value="techada">Techada</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    as="select"
                    name="estado"
                    onChange={handleChange}
                    value={formData.estado || ""}
                  >
                    <option value="reservada">Reservada</option>
                    <option value="no">No</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Horarios</Form.Label>
                  <Form.Control
                    type="text"
                    name="horarios"
                    onChange={handleChange}
                    value={formData.horarios || ""}
                  />
                </Form.Group>
              </>
            )}
            {currentTable === "assignments" && (
              <>
                {/* Código es generado automáticamente, por lo que no se muestra en el formulario */}
                <Form.Group>
                  <Form.Label>Código de Cancha</Form.Label>
                  <Form.Control
                    type="text"
                    name="codigoCancha"
                    onChange={handleChange}
                    value={formData.codigoCancha || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombreUsuario"
                    onChange={handleChange}
                    value={formData.nombreUsuario || ""}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Tipo de Cancha</Form.Label>
                  <Form.Control
                    as="select"
                    name="tipoCancha"
                    onChange={handleChange}
                    value={formData.tipoCancha || ""}
                  >
                    <option value="5">5</option>
                    <option value="7">7</option>
                    <option value="11">11</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Estilo de Cancha</Form.Label>
                  <Form.Control
                    as="select"
                    name="estiloCancha"
                    onChange={handleChange}
                    value={formData.estiloCancha || ""}
                  >
                    <option value="sintético">Sintético</option>
                    <option value="césped">Césped</option>
                    <option value="techada">Techada</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Horarios</Form.Label>
                  <Form.Control
                    type="text"
                    name="horarios"
                    onChange={handleChange}
                    value={formData.horarios || ""}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {modalType === "new" ? "Crear" : "Guardar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
