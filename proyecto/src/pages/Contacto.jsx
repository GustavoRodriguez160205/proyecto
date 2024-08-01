import React from 'react';
import { Card } from 'react-bootstrap'; 

function Contacto() {
  return (
    <div className="container text-dark">
      <div className="row">
        <div className="col-md-6 mt-4"> 
          <h2>¡Escribinos!</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nombreApellido">Nombre y Apellido</label>
              <input
                type="text"
                className="form-control"
                id="nombreApellido"
                minLength="5"
                maxLength="50"
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
                <option value="soporte">Soporte técnico</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="4" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>

        <div className="col-md-6 mt-4"> {/* Agregamos mt-4 para dar margen superior */}
          
          <Card>
            <Card.Img src="src/image/deposito.png" />
          </Card>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h2>Servicio al cliente</h2>
          <p>¿Tenés preguntas o sugerencias? Escribinos y te responderemos cuanto antes. Tenemos un tiempo de respuesta máximo de 24hs.</p>
          <p>
            Podés llamarnos al (0381) 5168-6056 o mandarnos un e-mail a:
            atencion_cliente@digital_school.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

