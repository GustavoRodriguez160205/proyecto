import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logosinfondo from "../image/logosinfondo.png";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/navfoothome.css";

const NavbarMenu = () => {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  const { user, logout, isAdminLoggedIn, cartItems } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginShow = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  // Calcular el total de productos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar
        className="navbar-shadow"
        style={{ background: "#f5f3f3" }}
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logosinfondo}
              width="100"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            SOMOS FUTBOLEROS
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {!isAdminLoggedIn && (
                <>
                  <NavLink
                    className="nav-link"
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
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
                    to="/nosotros"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Nosotros
                  </NavLink>
                  <NavLink
                    className="nav-link me-2"
                    to="/contacto"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
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
                        Tienda + Ecommerce
                        {/* Productos */}
                      </NavLink>

                      <NavLink
                        className="nav-link"
                        to="/canchas1"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Canchas + Turnos
                        {/* Alquiler de Canchas */}
                      </NavLink>
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
                  Hola, {user.nombre_usuario || user.email}
                </Navbar.Text>
                <NavLink
                  className="nav-link me-4"
                  to="/carrito"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <FaShoppingCart size={30} /> {/* Icono del carrito */}
                  {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span> // Cantidad de productos
                  )}
                </NavLink>
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
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RegistrationModal show={showModal} handleClose={handleClose} />
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} />
    </div>
  );
};

export default NavbarMenu;
