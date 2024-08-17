//cambios para que se pueda agregar  mas productos
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Verificar si el usuario ya está logueado a través de localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAdminLoggedIn(storedUser.email === "elclubfc@gmail.com");
    }

    // Cargar carrito desde localStorage
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      setCartItems(storedCart);
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
    clearCart(); // Limpiar el carrito al cerrar sesión
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item._id === product._id);
      if (itemExists) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (_id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAdminLoggedIn,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalCartPrice,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
