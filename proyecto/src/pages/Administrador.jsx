import React from "react";
import { Container, Nav, Navbar, Tab, Tabs } from "react-bootstrap";
import UsersTable from "../components/UsersTable";
import ProductsTable from "../components/ProductsTable";
import FieldsTable from "../components/FieldsTable";
import ReservationsTable from "../components/ReservationsTable";

import "bootstrap/dist/css/bootstrap.min.css";

function Administrador() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ADMINISTRACION</Navbar.Brand>
      </Navbar>
      <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
        <Tab eventKey="users" title="Usuarios">
          <UsersTable />
        </Tab>
        <Tab eventKey="products" title="Productos">
          <ProductsTable />
        </Tab>
        <Tab eventKey="fields" title="Canchas">
          <FieldsTable />
        </Tab>
        <Tab eventKey="reservations" title="Reservas">
          <ReservationsTable />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Administrador;
