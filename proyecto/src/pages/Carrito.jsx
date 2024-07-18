import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../styles/Carrito.css' 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





function Carrito() {
  // Definir el estado para los productos del carrito
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camiseta Titular AFA 2024', imagen: 'src/image/afa1.JPG', precio: 120650 },
    { id: 2, nombre: 'Remera woman', imagen: 'src/image/remera3.JPG', precio: 29600 },
    { id: 3, nombre: 'Pelota Puma', imagen: 'src/image/pelota2.JPG', precio: 67600 }
  ]);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <Container>
        <Card style={{ marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%'}}>
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
        <Button variant="success" className="button-margin">Finalizar Compra</Button></Link>
        <Link to="/productos">
        <Button variant="outline-info" className="button-margin">Seguir comprando</Button></Link>
      </div>
    </div>
  );
}

export default Carrito;
