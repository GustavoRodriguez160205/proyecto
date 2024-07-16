import React from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../styles/Carrito.css' 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function Carrito() {
  return (
    <div>
      
      <Container>
      <Card style={{ marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%'}}>
              <Image src="src/image/carrito.png" fluid />
              </Card>
       </Container>

      


    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Nombre del producto</th>
          <th>Imagen descriptiva</th>
          <th>Precios</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Button variant="outline-danger">x</Button>{' '}</td>
          <td>Camiseta Titular AFA 2024</td>
          <td><img src="src/image/afa1.JPG" className="product-img" alt="" /></td>
          <td>$120.650</td>
        </tr>
        <tr>
          <td><Button variant="outline-danger">x</Button></td>
          <td>Remera woman</td>
          <td><img src="src/image/remera3.JPG" className="product-img" alt="" /></td>
          <td>$29.600</td>
        </tr>
        <tr>
          <td><Button variant="outline-danger">x</Button>{' '}</td>
          <td>Pelota Puma</td>
          <td> <img src="src/image/pelota2.JPG" className="product-img" alt="" />
            
          </td>
          <td>$67.600</td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>$217.850</th>
        </tr>

      </tbody>
    </Table>


    <div className="button-container">
        <Button variant="success" className="button-margin">Finalizar Compra</Button>
        <Button variant="outline-info" className="button-margin">Seguir comprando</Button>
      </div>
     
    </div>
  );
}


export default Carrito; 
