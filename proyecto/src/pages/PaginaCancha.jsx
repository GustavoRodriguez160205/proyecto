import React, { useEffect, useState } from "react";
import "../styles/cancha.css";
import canchaBanner from "../image/cancha10.webp";
import { Button, Card, Col, Container, Figure, Row } from "react-bootstrap";
import ReservaModal from "../components/ReservaModal";
import testApi from "../api/testApi";

export const PaginaCancha = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCancha, setSelectedCancha] = useState(null);
  const [listacanchas, setListaCanchas] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getCanchas = async () => {
    try {
      const resp = await testApi.get("/admin/canchas");
      console.log(resp.data.listaCanchas);
      setListaCanchas(resp.data.listaCanchas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCanchas();
  }, []);

  const handleShowModal = (cancha) => {
    setSelectedCancha(cancha);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCancha(null);
    setShowModal(false);
  };

  return (
    <div>
      <article className="container-fluid d-flex align-items-center bannerCancha">
        <img
          className="d-block w-100 h-100 imagenBanner"
          src={canchaBanner}
          alt="banner cancha"
        />
        <h1 className="tituloBanner">Nuestras canchas</h1>
      </article>

      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="d-flex justify-content-center m-5 estiloTitulo">
                Futbol 5
              </h1>
              <hr className="lineaEstilo" />
              <div className="parrafoContainer"></div>
            </Col>
            <Col>
              <h1 className="d-flex justify-content-center m-5 estiloTitulo">
                Futbol 7
              </h1>
              <hr className="lineaEstilo" />
            </Col>
            <Col>
              <h1 className="d-flex justify-content-center m-5 estiloTitulo">
                Futbol 11
              </h1>
              <hr className="lineaEstilo" />
              <div className="parrafoContainer"></div>
            </Col>
          </Row>
        </Container>
      </div>

      <article className="container-md">
        <section className="container-md my-4">
          <div className="col">
            <h3>Filtrar canchas por: </h3>
            <form className="d-flex flex-column flex-md-row justify-content-center align-content-center gap-2 bg-light py-4 bordeForm">
              <div className="mb-3 filtroForm">
                <label className="form-label" htmlFor="name">
                  Nombre de la cancha
                </label>
                <input
                  placeholder="Nombre de la cancha"
                  name="name"
                  type="text"
                  id="name"
                  className="form-control"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="mb-3 filtroForm">
                <label className="form-label" htmlFor="tipo">
                  Tipo de pasto
                </label>
                <input
                  placeholder="Tipo de pasto"
                  name="tipo"
                  type="text"
                  id="tipo"
                  className="form-control"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
            <div>
              {listacanchas
                .filter((canchas) => {
                  if (searchTerm === "") {
                    return canchas;
                  } else if (
                    canchas.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    canchas.cesped
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return canchas;
                  } else {
                    return null;
                  }
                })
                .map((canchas) => (
                  <article key={canchas._id} className="container-md">
                    {" "}
                    {/* Agregada key única */}
                    <section className="row">
                      <div className="col-12">
                        <article className="container-md p-0 my-4 canchaCardContenedor">
                          <div className="bg-dark text-white card">
                            <img
                              className="car-img canchaCardImagen"
                              src={canchas.imagen}
                              alt={canchas.name}
                            />
                            <div className="overlay cardImagenOverlay">
                              <div className="subtitle cardTitulo h2 parrafoEstilo">
                                {canchas.nombre_cancha}
                              </div>
                              <h3 className="canchaTexto parrafoEstilo">
                                Descripción: {canchas.descripcion}
                              </h3>
                              <h4 className="parrafoEstilo">
                                Tamaño: {canchas.tamanio}
                              </h4>
                              <h5>Tipo: {canchas.cesped}</h5>
                              <h6>Precio: $ {canchas.precio}</h6>
                              <button
                                className="my-2 botonCard btn btn-primary"
                                onClick={() => handleShowModal(canchas)}
                              >
                                <div className="estilosBoton">
                                  <p>Reservar</p>
                                </div>
                              </button>
                            </div>
                          </div>
                        </article>
                      </div>
                    </section>
                  </article>
                ))}
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
  );
};
