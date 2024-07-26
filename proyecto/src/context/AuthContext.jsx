import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setIsAdminLoggedIn(false);
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
