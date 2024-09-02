import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
import deposito from "../image/deposito.png";

function Contacto() {
  const [nombreApellido, setNombreApellido] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleNombreChange = (e) => {
    const nombreRegex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios
    if (!nombreRegex.test(e.target.value)) {
      Swal.fire({
        icon: "error",
        title: "Nombre inválido",
        text: "El nombre solo debe contener letras y espacios.",
      });
    } else {
      setNombreApellido(e.target.value);
    }
  };
  const handleMensajeChange = (e) => {
    const maxLength = 100;
    if (e.target.value.length > maxLength) {
      Swal.fire({
        icon: "error",
        title: "Mensaje demasiado largo",
        text: `El mensaje no puede exceder los ${maxLength} caracteres.`,
      });
    } else {
      setMensaje(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      text: "Tu mensaje ha sido enviado con éxito.",
    });
  };

  return (
    <div className="container text-dark">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-6 mt-4">
          <h2>¡Escribinos!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombreApellido">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="nombreApellido"
                minLength="5"
                maxLength="50"
                value={nombreApellido}
                onChange={handleNombreChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                pattern="[0-9]+"
                title="Ingrese solo números"
                minLength="7"
                maxLength="10"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motivoConsulta">Motivo de la consulta</label>
              <select className="form-control" id="motivoConsulta" required>
                <option value="turnos">Turnos</option>
                <option value="compras">Compras</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="4"
                maxLength="100"
                value={mensaje}
                onChange={handleMensajeChange}
                required
              ></textarea>
            </div>
            <br />
            <button
              style={{ background: "#72A1E5" }}
              variant="light me-2"
              type="submit"
              className="btn btn- link"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="col-md-6 mt-4">
          {" "}
          {/* Agregamos mt-4 para dar margen superior */}
          <Card>
            <Card.Img src={deposito} />
          </Card>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Servicio al cliente</h2>
          <p>
            ¿Tenés preguntas o sugerencias? Escribinos y te responderemos cuanto
            antes. Tenemos un tiempo de respuesta máximo de 24hs.
          </p>
          <p>
            Podés llamarnos al (0381) 5168-6056 o mandarnos un e-mail a:
            elclubfcsomosfutboleros@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
