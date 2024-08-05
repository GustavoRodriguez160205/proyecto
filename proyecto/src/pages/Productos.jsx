import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Productos.css';
import { Link } from 'react-router-dom';
import testApi from '../api/testApi';
import { CardImg } from 'react-bootstrap';

function Productos() {

  const [searchTerm,setSearchTerm] = useState('');
  const [listaProductos, setListaProductos] = useState([])

  const getProductos = async () => {
    try {
      const resp = await testApi.get("/admin/Productos");
      console.log(resp);
      setListaProductos(resp.data.listaProductos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <Image src="src/image/banner-productos.png" fluid className="centered-image" />
      </Container>



      <Container>
        <Col>
        <div className='col'>
              <h4 className='m-4'>Filtro de productos</h4>
             <form className='d-flex flex-column flex-md-row justify-content-center align-content-end  bg-dark py-4 bordeForm'>
                <div className='mb-3 filtroForm'>
                  <label className='form-label text-light' for='name'>Productos</label>
                   <input placeholder='Nombre del producto' name='name'  type="text" id='name' className='form-control' onChange={(e) => {
                 setSearchTerm (e.target.value);
                   }} />
                 </div>
              </form>
            </div>
            <div className='row'>
            {
               listaProductos.filter((productos) => {
                if(searchTerm === ''){
                  return productos
                }else if(productos.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return productos;
                }{
                  
                }
              })
              .map((productos) => {
                return (
                  <Card style={{ width: '18rem', marginTop: "2rem", marginBottom: "2rem", marginLeft: '5%' }}>
                    <CardImg src='src/image/afa1.JPG'></CardImg>
                    <Card.Body className="text-center">
                 <Card.Title>{productos.name}</Card.Title>
                 <Card.Title>{productos.precio}</Card.Title>
                 <Card.Title>{productos.descripcion}</Card.Title>
                 <Link to="/Camiseta">
                <Button variant="primary">Ver más</Button>
              </Link>
               </Card.Body>
                </Card>
                )
              })

            }
            </div>
        </Col>
      </Container>

     

      <Container>
        <Image src="src/image/banner-marcas.png" fluid className="centered-image" />
      </Container>

      
    </div>
  );
}

export default Productos;

