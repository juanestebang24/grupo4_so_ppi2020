import { Nav, Navbar } from "react-bootstrap";

import React, { Component } from "react";

export default class main extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Nav className="Titulo" href="/">
            LS
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/paginas/Home">Home</Nav.Link>
              <Nav.Link href="/paginas/Login">Login</Nav.Link>
              <Nav.Link href="/paginas/Register">Register</Nav.Link>
              <Nav.Link href="/Menu">Señas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
