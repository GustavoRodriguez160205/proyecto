import React, { useState } from 'react'
import '../styles/cancha.css'
import canchaBanner from '../image/cancha10.webp'
import dataCancha from '../hooks/canchaData'
import { Button, Card, Col, Container, Figure, Row } from 'react-bootstrap'
import ReservaModal from '../components/ReservaModal'


export const PaginaCancha = () => {
   
  const [searchTerm,setSearchTerm] = useState('')
  const [selectedCancha, setSelectedCancha] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (cancha) => {
    setSelectedCancha(cancha);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCancha(null);
    setShowModal(false);
  }
  
  return (
    <div>
    <article className='container-fluid d-flex align-items-center bannerCancha'>
        <img
            className='d-block w-100 h-100 imagenBanner'
            src={canchaBanner} 
            alt="banner cancha"
         />
         <h1 className='tituloBanner'>Nuestras canchas</h1>
    </article>

    <div>
      <Container>
        <Row>
        <Col>
        <h1 className='d-flex justify-content-center m-5 estiloTitulo'>Futbol 5</h1>
        <hr  className='lineaEstilo'/>
        <div className='parrafoContainer'>
         <p className='parrafoEstilo'>Disfruta del mejor fútbol con nuestras canchas de Fútbol 5
         ¡Bienvenido a nuestro centro de alquiler de canchas para disputar encuentros rapidos pero intensos.</p>
        </div>
        </Col>
        <Col>
        <h1 className='d-flex justify-content-center m-5 estiloTitulo'>Futbol 7</h1>
        <hr className='lineaEstilo'/>
        <div className='parrafoContainer'>
        <p className='parrafoEstilo'>Vive la emoción del fútbol con nuestras canchas de Fútbol 7
        En nuestro centro de alquiler de canchas, te ofrecemos el espacio perfecto para disfrutar</p>
        </div>
        </Col>
       </Row>
      </Container>
      </div>

      <article className='container-md'>
        <section className='container-md my-4'>
          <div className='col'>
            <h3>filtrar canchas por: </h3>
            <form className='d-flex flex-column flex-md-row justify-content-center align-content-center gap-2 bg-light py-4 bordeForm'>
          <div className='mb-3 filtroForm'>
            <label className='form-label' for='name'>nombre de la cancha</label>
            <input placeholder='nombre de la cancha' name='name'  type="text" id='name' className='form-control' onChange={(e) => {
              setSearchTerm (e.target.value);
            }} />
          </div>
          <div className='mb-3 filtroForm'>
            <label className='form-label' for='name'>Tipo de pasto</label>
            <input placeholder='Tipo de pasto' name='name'  type="text" id='name' className='form-control' onChange={(e) => {
              setSearchTerm (e.target.value);
            }} />
          </div>
         
        </form>
          <div>
            {
               dataCancha.filter((item) => {
                if(searchTerm === ''){
                  return item;
                }else if(item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                   || item.tipo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                  return item;
                }{
                  
                }
              })
              .map((item) => (
                <article className='container-md'>
                  <section className='row'>
                    <div className='col-12'>
                      <article className='container-md p-0 my-4 canchaCardContenedor'>
                        <div className='bg-dark text-white card'>
                          <img className='car-img canchaCardImagen' src={item.imagen} alt={item.nombre} />
                          <div className='overlay cardImagenOverlay'>
                            <div className='subtitle cardTitulo h2 parrafoEstilo'>{item.nombre}</div>
                              <h3 className='canchaTexto parrafoEstilo'>Descripcion: {item.descripcion}</h3>
                              <h4 className='parrafoEstilo'>Tamaño: {item.tamaño}</h4>
                              <h5>Tipo: {item.tipo}</h5>
                              <h6>precio {item.precio}</h6>
                              <button className='my-2 botonCard btn btn-primary' onClick={() => handleShowModal(item)}>
                                <div className='estilosBoton'>
                                  <span></span>
                                  <span className='text'>Reservar</span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </button>
                            </div>
                        </div>
                      </article>
                    </div>
                  </section>
                </article>
                   )) 
            }
          </div>
          </div>
        </section>
      </article>
      {selectedCancha && (
        <ReservaModal
          show={showModal}
          handleClose={handleCloseModal}
          cancha={selectedCancha}
        />
      )}


      
      
    </div>
    
  )
}
