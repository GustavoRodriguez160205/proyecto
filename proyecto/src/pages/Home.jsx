import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../styles/home.css'; // Asegúrate de importar tu archivo CSS

// Importación de imágenes
import imagen6 from "../image/imagen6.png";
import imagen7 from "../image/imagen7.jpg";
import imagen8 from "../image/imagen8.jpg";
import imagen9 from "../image/imagen9.jpg";
import cancha14 from "../image/cancha14.jpeg";
import pasion1 from "../image/pasion1.png";
import video11 from "../image/video11.gif";
import video12 from "../image/video12.gif";
import video13 from "../image/video13.webp";
import video15 from "../image/video15.gif";
import portada1 from "../image/portada1.jpg";
import portada2 from "../image/portada2.jpg";
import portada3 from "../image/portada3.jpg";
import portada4 from "../image/portada4.jpg";
import portada5 from "../image/portada5.jpg";
import portada6 from "../image/portada6.jpeg";
import asadores1 from "../image/asadores1.jpg";
import asado4 from "../image/asado4.jpg";
import estacionamiento from "../image/estacionamiento.jpg";
import estacionamiento2 from "../image/estacionamiento2.webp";
import vestuario from "../image/vestuario.webp";
import valores from "../image/valores.avif";
import Cancha from "../image/Cancha.webp";
import ecommerce from "../image/ecommerce.jpg";
import asadores from "../image/asadores.jpg";
import musica from "../image/musica.avif";
import portadafemenino from "../image/portadafemenino.jpg";

const Home = () => {
  return (
    <div className="carousel-container" style={{ margin: '0 auto', padding: '20px' }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={portada6} alt="Portada 6" />
          <Carousel.Caption>
            <h3>DESCUBRÍ LAS MEJORES CANCHAS DE ARGENTINA</h3>
            <p>Fútbol 5, 7 y 11.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portada4} alt="Portada 4" />
          <Carousel.Caption>
            <h3>VENÍ A ENTRENAR CON TU EQUIPO</h3>
            <p>Fútbol 5, 7 y 11.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={estacionamiento} alt="Estacionamiento" />
          <Carousel.Caption>
            <h3>SEGURIDAD Y ESTACIONAMIENTO PRIVADO</h3>
            <p>24hs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen9} alt="Imagen 9" />
          <Carousel.Caption>
            <h3>MOMENTOS PARA TODA LA VIDA CON AMIGOS</h3>
            <p>Fútbol 5, 7 y 11.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portadafemenino} alt="Portada Femenino" />
          <Carousel.Caption>
            <h3>MOMENTOS PARA TODA LA VIDA CON AMIGOS</h3>
            <p>Fútbol 5, 7 y 11.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="tarjetas">
        <div className="container py-5">
          <h1 id="titulo">¿QUIÉNES SOMOS?</h1>
          <hr />
          <p> Somos un grupo de amigos muy futboleros que hace 10 años decidimos reunir en un mismo lugar <strong>la pasión por el fútbol, los amigos y la familia</strong>. Si estás cansado de no conseguir turnos, mandar mensajes y que no te respondan, estás en el lugar correcto, estás a un clic de reservar tu cancha favorita.
          </p>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div className="col">
              <div className="card">
                <img
                  src={estacionamiento2}
                  className="card-img-top card-img-custom"
                  alt="Estacionamiento"
                />
                <div className="card-body">
                  <h5 className="card-title">ESTACIONAMIENTO</h5>
                  <p className="card-text">
                    Todas las canchas disponibles cuentan con estacionamiento privado, para de este modo hacer una experiencia más amena y cómoda.
                  </p>
                </div>
                <div className="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={vestuario}
                  className="card-img-top card-img-custom"
                  alt="Vestuario"
                />
                <div className="card-body">
                  <h5 className="card-title">VESTUARIOS</h5>
                  <p className="card-text">
                    Contamos con vestuarios profesionales con vestidores individuales, ducha con agua caliente, sanitarios y todo lo necesario.
                  </p>
                </div>
                <div className="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={valores}
                  className="card-img-top card-img-custom"
                  alt="Valores"
                />
                <div className="card-body">
                  <h5 className="card-title">VALORES</h5>
                  <p className="card-text">
                    Promovemos el respeto entre todos los miembros de esta comunidad. Entendiendo, brindamos espacios de disfrute entre amigos y familia.
                  </p>
                </div>
                <div className="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-2">
        <h1 id="titulo3">NUESTROS SERVICIOS</h1>
        <hr />
        <p>
          Te ofrecemos los mejores servicios para pasarla genial con amigos. Además, tenemos ESCUELA DE FÚTBOL INFANTIL - FEMENINO - MIXTOS Y CAMPEONATOS COMPETITIVOS.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5 justify-content-center">
          <div className="col d-flex justify-content-center">
            <div className="card h-100">
              <img
                src={cancha14}
                className="card-img-top img-fluid"
                alt="Cancha"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">CANCHAS</h5>
                <p className="card-text flex-grow-1">
                  Encontrarás canchas techadas, al aire libre, de futbol 5 - 7 - 11, con iluminación, sintéticas y de césped natural.
                </p>
                <div className="d-flex justify-content-around mt-auto">
                  <Button style={{ background: "#72A1E5" }} variant="light me-2">
                    <NavLink
                      className="nav-link"
                      to="/canchas"
                    >
                      IR a Canchas + Turnos
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card h-100">
              <img
                src={ecommerce}
                className="card-img-top img-fluid"
                alt="Ecommerce"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">ECOMMERCE</h5>
                <p className="card-text flex-grow-1">
                  Contamos con una tienda deportiva de camisetas, pantalones, pelotas y todo lo que necesites.
                </p>
                <div className="d-flex justify-content-around mt-auto">
                  <Button style={{ background: "#72A1E5" }} variant="light me-2">
                    <NavLink
                      className="nav-link"
                      to="/productos"
                    >
                      IR a Tienda + Ecommerce
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="card h-100">
              <img
                src={asado4}
                className="card-img-top img-fluid"
                alt="Asadores"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">ASADORES</h5>
                <p className="card-text flex-grow-1">
                  En los predios predios podrás disfrutar de asadores al aire libre para que puedas compartir de un buen asado con amigos.
                </p>
                <div className="d-flex justify-content-around mt-auto">
                  <Button style={{ background: "#72A1E5" }} variant="light me-2">
                    <NavLink
                      className="nav-link"
                      to="/error404"
                    >
                      IR a Asadores + Reservas
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="publicidad">
        <div className="container py-5">
          <h1 id="titulo2">VIDEOS VIRALES</h1>
          <hr />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
          <div className="col">
            <div className="card">
              <img
                src={video11}
                className="card-img-top"
                alt="Video 11"
                height="400px"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={video12}
                className="card-img-top"
                alt="Video 12"
                height="400px"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={video13}
                className="card-img-top"
                alt="Video 13"
                height="400px"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={video15}
                className="card-img-top"
                alt="Video 15"
                height="400px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
