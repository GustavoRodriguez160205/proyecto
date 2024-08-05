import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logosinfondo from "../image/logosinfondo.png";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";
import AdminLoginModal from "./AdminLoginModal";
import { AuthContext } from "../context/AuthContext";
import "../styles/navfoothome.css";

const NavbarMenu = () => {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const { user, logout, isAdminLoggedIn } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginShow = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const handleAdminLoginShow = () => setShowAdminLoginModal(true);
  const handleAdminLoginClose = () => setShowAdminLoginModal(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div>
      <Navbar
        className="navbar-shadow"
        style={{ background: "#f5f3f3" }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={logosinfondo}
              width="100"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
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
                to="/nosotros"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Nosotros
              </NavLink>
              <NavLink
                className="nav-link me-2"
                to="/contacto"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contacto
              </NavLink>

              {user && (
                <>
                  <NavLink
                    className="nav-link"
                    to="/productos"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Productos
                  </NavLink>

                  <NavLink
                    className="nav-link"
                    to="/canchas"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Canchas
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/canchas1"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Aquiler de Canchas
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/camiseta"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Camisetas
                  </NavLink>
                  <NavLink
                    className="nav-link "
                    to="/carrito"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Carrito
                  </NavLink>

                  
                  {user && (
                    <>
                      

                     
                     
                     
                    </>
                  )}

                </>
              )}

              {isAdminLoggedIn && (
                <NavLink
                  className="nav-link"
                  to="/administrador"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  ADMINISTRADOR
                </NavLink>
              )}
            </Nav>
            {isAdminLoggedIn ? (
              <>
                <Navbar.Text className="me-2">
                  HOLA !, ADMINISTRADOR
                </Navbar.Text>
                <Button
                  className="button"
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : user ? (
              <>
                <Navbar.Text className="me-2">
                  Hola, CRACK del Futbol Mundial {user.name}
                </Navbar.Text>
                <Button
                  className="button"
                  variant="secondary"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="button"
                  style={{ background: " #72A1E5" }}
                  variant="light me-4"
                  onClick={handleShow}
                >
                  Registrarse
                </Button>
                <Button
                  className="button"
                  style={{ background: " #72A1E5" }}
                  variant="light me-4"
                  onClick={handleLoginShow}
                >
                  Iniciar Sesión
                </Button>
                <Button
                  className="button"
                  variant="dark"
                  onClick={handleAdminLoginShow}
                >
                  Admin
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegistrationModal show={showModal} handleClose={handleClose} />
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
      <AdminLoginModal
        show={showAdminLoginModal}
        handleClose={handleAdminLoginClose}
      />
    </div>
  );
};

export default NavbarMenu;
