import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logosinfondo from "../image/logosinfondo.png";
import carrito from "../image/carrito.png";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";

const NavbarMenu = () => {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginShow = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  return (
    <div>
      <Navbar style={{ background: " #f5f3f3 " }} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logosinfondo}
              width="100"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            {""}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                to="/productos"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Productos
              </NavLink>

              <NavLink
                className="nav-link"
                to="/canchas"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Canchas
              </NavLink>

              <NavLink
                className="nav-link"
                to="/nosotros"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Nosotros
              </NavLink>

              <NavLink
                className="nav-link"
                to="/administrador"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                ADMINISTRADOR
              </NavLink>
            </Nav>
            {/* <Button style={{ background: " #72A1E5" }} variant="light me-4">
              <NavLink
                className="nav-link "
                to="/registro"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Registrarse
              </NavLink>
            </Button> */}
            <Button variant="primary me-2" onClick={handleShow}>
              Registrarse
            </Button>
            {/* <Button style={{ background: " #72A1E5" }} variant="light me-4">
              <NavLink
                className="nav-link "
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Loguearse
              </NavLink>
            </Button> */}
            <Button variant="primary" onClick={handleLoginShow}>
              Logearse
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegistrationModal show={showModal} handleClose={handleClose} />

      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
    </div>
  );
};

export default NavbarMenu;
