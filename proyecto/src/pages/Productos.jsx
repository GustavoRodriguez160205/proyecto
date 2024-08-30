import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import testApi from "../api/testApi";
import { AuthContext } from "../context/AuthContext";
import "../styles/Productos.css";
import bannerproductos from "../image/bannerproductos.png";
import bannermarcas from "../image/bannermarcas.png";
function Productos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [listaProductos, setListaProductos] = useState([]);
  const { addToCart } = useContext(AuthContext);

  const getProductos = async () => {
    try {
      const resp = await testApi.get("/admin/Productos");
      setListaProductos(resp.data.listaProductos);
      console.log(resp.data.listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Container className="mt-4">
        <Image src={bannerproductos} fluid className="centered-image" />
      </Container>

      <Container>
        <div className="col">
          <h4 className="m-4">Filtro de productos</h4>
          <form className="d-flex flex-column flex-md-row justify-content-center align-content-end  bg-dark py-4 bordeForm">
            <div className="mb-3 filtroForm">
              <label
                className="form-label text-light"
                htmlFor="nombre_producto"
              >
                Productos
              </label>
              <input
                placeholder="Nombre del producto"
                id="nombre_producto"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className="row">
          {listaProductos
            .filter((producto) => {
              if (searchTerm === "") {
                return producto;
              } else if (
                producto.nombre_producto
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return producto;
              }
              return null;
            })
            .map((producto) => (
              <Card
                style={{
                  width: "15rem",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  marginLeft: "10%",
                }}
                key={producto._id}
              >
                <Card.Img
                  src={producto.imagen}
                  alt={producto.nombre_producto}
                />
                <Card.Body className="text-center">
                  <Card.Title>{producto.nombre_producto}</Card.Title>
                  <Card.Title>${producto.precio}</Card.Title>
                  <Card.Title>{producto.descripcion}</Card.Title>
                  <Button
                    style={{ background: " #72A1E5" }}
                    variant="mt-2 mb-2"
                    onClick={() => addToCart(producto)}
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </Container>

      <Container>
        <Image src={bannermarcas} fluid className="centered-image" />
      </Container>
    </div>
  );
}

export default Productos;
