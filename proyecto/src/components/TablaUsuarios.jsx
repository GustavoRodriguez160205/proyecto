import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import testApi from "../api/testApi";

export const TablaUsuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const resp = await testApi.get("/admin/usuarios");
      console.log(resp);
      setListaUsuarios(resp.data.listaUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Usuario</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaUsuarios.map((usuario) => {
            return (
              <tr>
                <td>{usuario._id}</td>
                <td>{usuario.name}</td>
                <td>{usuario.edad}</td>
                <td>{usuario.email}</td>
                <td>
                  <Button variant="info" type="submit">
                    Suspender
                  </Button>
                  {/* <button>suspender</button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
