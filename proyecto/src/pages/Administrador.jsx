import React from "react";
import { Container, Nav, Navbar, Tab, Tabs } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { TablaUsuarios } from "../components/TablaUsuarios";
import { TablaProductos } from "../components/TablaProductos";
import { TablaCanchas } from "../components/TablaCanchas";
import { TablaReservas } from "../components/TablaReservas";
import "../styles/administrador.css";

function Administrador() {
  return (
    <Container className="admin">
      <hr />
      <Navbar>
        <Navbar.Brand href="#home">
          <h1>ADMINISTRACION</h1>
        </Navbar.Brand>
      </Navbar>
      <hr />
      <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
        <Tab eventKey="users" title="Usuarios">
          <TablaUsuarios />
        </Tab>
        <Tab eventKey="products" title="Productos">
          <TablaProductos />
        </Tab>
        <Tab eventKey="fields" title="Canchas">
          <TablaCanchas />
        </Tab>
        <Tab eventKey="reservations" title="Reservas">
          <TablaReservas />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Administrador;
