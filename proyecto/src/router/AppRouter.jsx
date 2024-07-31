import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavbarMenu from "../components/NavbarMenu";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";
import Camiseta from "../pages/Camiseta";
import Contacto from "../pages/Contacto";
import Galeria from "../pages/Galeria";
import Nosotros from "../pages/Nosotros";

import Administrador from "../pages/Administrador";
import RegistrationModal from "../components/RegistrationModal";
import LoginModal from "../components/LoginModal";
import { AuthContext } from "../context/AuthContext";
import { PaginaCancha } from "../pages/PaginaCancha";

export const AppRouter = () => {
  const { user, isAdminLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RegistrationModal />} />
        <Route path="/login" element={<LoginModal />} />
        <Route
          path="/productos"
          element={user ? <Productos /> : <Navigate to="/login" />}
        />
        <Route
          path="/canchas"
          element={user ? <Productos /> : <Navigate to="/login" />}
        />
        <Route
          path="/camiseta"
          element={user ? <Camiseta /> : <Navigate to="/login" />}
        />
        <Route
          path="/carrito"
          element={user ? <Carrito /> : <Navigate to="/login" />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/administrador"
          element={isAdminLoggedIn ? <Administrador /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/canchas" element={<PaginaCancha />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
