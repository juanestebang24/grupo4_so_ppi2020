import React, { Fragment, useState } from "react";
import {} from "react-bootstrap";
import "../paginas/style/register.scss";
import {} from "react-router-dom";

const Register = () => {
  const [datos, setDatos] = useState({
    nombre_comp: "",
    Documento: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      datos.nombre_comp +
        " " +
        datos.Documento +
        " " +
        datos.email +
        " " +
        datos.password
    );
  };

  return (
    <Fragment>
      <form className="formulario" onSubmit={enviarDatos}>
        <h1>Registrate</h1>

        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-user icon" />
            <input
              type="text"
              placeholder="Nombre Completo"
              name="nombre_comp"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-envelope icon" />
            <input
              type="text"
              placeholder="Documento"
              name="Documento"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-envelope icon" />
            <input
              type="text"
              placeholder="Correo Electronico"
              name="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-key icon" />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleInputChange}
            />
          </div>

          <input type="submit" defaultValue="Registrate" className="button" />
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
