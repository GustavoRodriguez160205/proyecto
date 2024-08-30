import React from "react";
import "../styles/navfoothome.css";
import facebook from "../image/facebook.png";
import gitsinfondo from "../image/gitsinfondo.png";
import instagram from "../image/instagram.png";
import twiter from "../image/twiter.png";
import whatsapp from "../image/whatsapp.png";
import logosinfondo from "../image/logosinfondo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1 ">
              <img src={logosinfondo} className="mx-2" height="110" />

              <h3>
                <f3>El Club FC</f3>
              </h3>
              <h6>CANCHAS 5,7,11 - CAMPEONATOS - VESTUARIOS </h6>

              <div>
                <Link to="/*">
                  {" "}
                  <img src={facebook} className="mx-2" height="50" />
                </Link>
                <Link to="/*">
                  {" "}
                  <img src={instagram} className="mx-2" height="50" />
                </Link>
                <Link to="/*">
                  {" "}
                  <img src={twiter} className="mx-2" height="40" />
                </Link>

                <Link to="/*">
                  {" "}
                  <img src={whatsapp} className="mx-2" height="50" />
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Servicios</h5>
              <ul>
                <li className="nav-item">
                  <a className="">Asadores</a>
                </li>
                <li className="nav-item">
                  <a className="">Cantina</a>
                </li>
                <li className="nav-item">
                  <a className="">Salon Fiestas</a>
                </li>
                <li className="nav-item">
                  <a className="">Tienda Deportiva</a>
                </li>
                <li className="nav-item">
                  <a className="">Musica</a>
                </li>
                <li className="nav-item" style={{ color: "blue" }}>
                  <a className="" href="">
                    Volver al Inicio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>CONTACTANOS</h5>
              <p>+543813657600</p>
              <p>elclubfcsomosfutboleros@gmail.com</p>
              <p>Buenos Aires 1093</p>
              <p>Argentina - Tucuman.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Last-footer">
        <p>
          {" "}
          <p>&copy; 2024 El CLUB FC. Todos los derechos reservados.</p>
        </p>
      </div>
    </>
  );
};

export default Footer;
