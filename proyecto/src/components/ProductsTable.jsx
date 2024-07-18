import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import AddEditProductModal from "./AddEditProductModal";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product._id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <>
      <Button variant="primary" onClick={handleAddProduct}>
        Agregar Nuevo Producto
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.precio}</td>
              <td>{product.descripcion}</td>
              <td>{product.stock}</td>
              <td>{product.estado}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditProduct(product)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddEditProductModal
        show={showModal}
        onHide={() => setShowModal(false)}
        product={editingProduct}
        onSave={(product) => {
          if (editingProduct) {
            const updatedProducts = products.map((p) =>
              p._id === product._id ? product : p
            );
            setProducts(updatedProducts);
          } else {
            setProducts([...products, product]);
          }
          setShowModal(false);
        }}
      />
    </>
  );
}

export default ProductsTable;
