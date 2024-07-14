import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavbarMenu from "../components/NavbarMenu";

import Footer from "../components/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/error" element={<Error404 />} />
        <Route path="/error1" element={<Error404 />} />
        <Route path="/error2" element={<Error404 />} />
        <Route path="/error3" element={<Error404 />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
