import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../styles/Carrito.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Carrito() {
  const [productos, setProductos] = useState([]);

  // Cargar los productos desde el Local Storage cuando el componente se monta
  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setProductos(carrito);
  }, []);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
  };

  return (
    <div>
      <Container>
        <Card style={{ marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%' }}>
          <Card.Img variant="top" src="src/image/carrito.png" fluid />
        </Card>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre del producto</th>
            <th>Imagen descriptiva</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td><Button variant="outline-danger" onClick={() => eliminarProducto(producto.id)}>x</Button></td>
              <td>{producto.nombre}</td>
              <td><img src={producto.imagen} className="product-img" alt="" /></td>
              <td>${producto.precio}</td>
            </tr>
          ))}
          <tr>
            <th></th>
            <th></th>
            <th>Total:</th>
            <th>${productos.reduce((total, producto) => total + producto.precio, 0)}</th>
          </tr>
        </tbody>
      </Table>

      <div className="button-container">
        <Link to="DEBES LOGUEARTE">
          <Button variant="success" className="button-margin">Finalizar Compra</Button>
        </Link>
        <Link to="/productos">
          <Button variant="outline-info" className="button-margin">Seguir comprando</Button>
        </Link>
      </div>
    </div>
  );
}

export default Carrito;
