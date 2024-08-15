import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya está logueado a través de localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAdminLoggedIn(storedUser.email === "elclubfc@gmail.com");
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsAdminLoggedIn(userData.email === "elclubfc@gmail.com");
    localStorage.setItem("user", JSON.stringify(userData)); // Guardar usuario en localStorage
  };

  const logout = () => {
    setUser(null);
    setIsAdminLoggedIn(false);
    localStorage.removeItem("user"); // Eliminar usuario de localStorage
  };

  const adminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAdminLoggedIn, adminLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
