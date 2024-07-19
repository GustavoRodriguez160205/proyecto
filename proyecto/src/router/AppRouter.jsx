import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarMenu from "../components/NavbarMenu";

import Footer from "../components/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";
import Camiseta from "../pages/Camiseta";
import Contacto from "../pages/Contacto";
import Galeria from "../pages/Galeria";

import Administrador from "../pages/Administrador";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/camiseta" element={<Camiseta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/error404" element={<Error />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/galeria" element={<Galeria />} />
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
