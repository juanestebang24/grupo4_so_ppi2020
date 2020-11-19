import React, { Component } from "react";
import {} from "react-bootstrap";
import "../paginas/style/login.scss";
import { Link } from "react-router-dom";

export default class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.email);
  };

  
  render() {
    const { email, password } = this.state;
    return (
      <form className="formulario">
        <h1>Login</h1>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-envelope icon" />
            <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-key icon" />
            <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
          <input type="submit" defaultValue="Login" className="button" />
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link className="link" to="/paginas/register">
              Registrate{" "}
            </Link>
          </p>
        </div>
      </form>
      
    );
  }
}


