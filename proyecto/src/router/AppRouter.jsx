import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarMenu from "../components/NavbarMenu";

import Footer from "../components/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";
import Camiseta from "../pages/Camiseta";
import Administrador from "../pages/Administrador";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/camiseta" element={<Camiseta />} />
        {/* <Route path="/error" element={<Error404 />} />
        <Route path="/error1" element={<Error404 />} />
        <Route path="/error2" element={<Error404 />} />
        <Route path="/error3" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
