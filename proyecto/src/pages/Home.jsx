import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imagen6 from "../image/imagen6.png";
import imagen7 from "../image/imagen7.jpg";
import imagen8 from "../image/imagen8.jpg";
import pasion from "../image/pasion.png";
import video11 from "../image/video11.gif";
import video12 from "../image/video12.gif";
import video13 from "../image/video13.webp";
import video15 from "../image/video15.gif";
import portada1 from "../image/portada1.jpg";
import portada2 from "../image/portada2.jpg";
import portada3 from "../image/portada3.jpg";
import portada4 from "../image/portada4.jpg";
import portada5 from "../image/portada5.jpg";
import asadores1 from "../image/asadores1.jpg";
import asados3 from "../image/asados3.jfif";
import estacionamiento from "../image/estacionamiento.webp";
import vestuario from "../image/vestuario.webp";
import valores from "../image/valores.avif";
import Cancha from "../image/Cancha.webp";
import ecommerce from "../image/ecommerce.jpg";
import asadores from "../image/asadores.jpg";
import musica from "../image/musica.avif";
import portadafemenino from "../image/portadafemenino.jpg";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="carousel-container" style={{ margin: '0 auto', padding: '20px' }}>
      <Carousel data-bs-theme="dark">
      
        <Carousel.Item>
          <img className="d-block w-100" src={portada2} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portada3} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portada4} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portada5} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen7} alt="..." />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={portadafemenino} alt="..." />
        </Carousel.Item>
  
      </Carousel>
      <section class="tarjetas">
        <div class="container py-5">
          <h1 id="titulo">NUETRAS INSTALACIONES - ¿QUIÉNES SOMOS?</h1>
          <hr />
          <p>
            Somos un grupo de amigos muy futboleros que hace 10 años decidimos reunir en un mismo lugar <strong>la pasión por el fútbol, los amigos y la familia</strong>. Lo demás, es historia.
          </p>
          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div class="col">
              <div class="card">
                <img
                  src={estacionamiento}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">ESTACIONAMIENTO</h5>
                  <p class="card-text">
                    Queremos ser el centro de referencia por excelencia con un
                    estacionamiento seguro y de gran capacidad. para lograrlo
                    apostamos a la cconstruccion de un gran predio con
                    vigilancia privada.
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={vestuario}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">VESTUARIOS</h5>
                  <p class="card-text">
                    Lo mas importante que destacamos es la intimidad de cada
                    equipo, por eso contamos con vestuarios de alta calidad
                    brindadndo todo lo necesario, duchas, sanitarios, cambiador
                    separados, etc
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={valores}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">VALORES</h5>
                  <p class="card-text">
                    COMPROMISO para que la pases genial. ETICA apego a los
                    codigos deportivos. HONESTIDAD reconocimiento de nuestra
                    actitud. RESPETO considerar el trato amable y tolerante como
                    primera opcion
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container py-2">
          <h1 id="titulo3">NUESTROS SERVICIOS</h1>
          <hr />
          <p>
            Te ofrecemos los mejores servicios, para pasarla genial con amigos .
            . . Ademas tenemos ESCUELA DE FUTBOL INFANTIL - FEMENINO - MIXTOS Y
            CAMPEONATOS COMPETITIVOS.
          </p>
          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div class="col">
              <div class="card">
                <img
                  src={Cancha}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">CANCHAS</h5>
                  <p class="card-text">
                    Encontraras canchas techadas, al aire libre, 5 - 7 - 11, con
                    iluminacion, sinteticas - cesped, proteccion y primeros
                    auxilios.
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5">
                  <Button
                    style={{ background: " #72A1E5" }}
                    variant="light me-2"
                  >
                    <NavLink
                      className="nav-link "
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      IR a Canchas + Turnos
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={ecommerce}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">ECOMMERCE</h5>
                  <p class="card-text">
                    Contamos con una Tienda deportiva, camiseta, pantalones,
                    pelotas, bebidas y todo lo que necesites para el equipo y
                    espectadores.
                  </p>
                </div>

                <div class="d-flex justify-content-around mb-5">
                  <Button
                    style={{ background: " #72A1E5" }}
                    variant="light me-2"
                  >
                    <NavLink
                      className="nav-link "
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      IR a Tienda + Ecommerce
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={asados3}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">ASADORES</h5>
                  <p class="card-text">
                    Para que disfrutes y desmuestres tus habilidades, no tan
                    solo en lo futbolistico sino tambien preparando un rico
                    asado para los amigos, compañeros y los familiares mas
                    queridos.
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={musica}
                  class="card-img-top"
                  alt="..."
                  height="400px"
                />
                <div class="card-body">
                  <h5 class="card-title">MUSICA</h5>
                  <p class="card-text">
                    Pasarla genial escuchando la mejor musica ! ! , esperando tu
                    turno, en el entre tiempo, en el asado luego del partido o
                    como espectador viendo a tus amigos/as divertirse y pasarla
                    genial.
                  </p>
                </div>
                <div class="d-flex justify-content-around mb-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="publicidad">
        <div className="container py-5">
          <h1 id="titulo2">VIDEOS - MOMENTOS - GOLES</h1>
          <hr />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
          <div className="col">
            <div className="card">
              <img
                src={video11}
                class="card-img-top"
                alt="..."
                height="400px"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={video12}
                class="card-img-top"
                alt="..."
                height="400px"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={video13}
                class="card-img-top"
                alt="..."
                height="400px"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={video15}
                class="card-img-top"
                alt="..."
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
