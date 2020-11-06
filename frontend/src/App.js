import React from "react";
import {} from "react-bootstrap";
import Home from "./paginas/Home";
import Register from "./paginas/Register";

import Login from "./paginas/Login";
import Navbar from "./componentes/Navbar";
import Menu from "./Menu";
import Dias from "./paginas/Dias";
import Deportes from "./paginas/deportes";
import Comidas from "./paginas/comidas";
import Alfabeto from "./paginas/alfabeto";
import Meses from "./paginas/Meses";
import Animales from "./paginas/animales";
import Colores from "./paginas/Colores";
import  Saludos from "./paginas/saludos";
import  palabras from "./paginas/palabras";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/paginas/register" component={Register} />
        <Route exact path="/paginas/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/paginas/dias" component={Dias} />
        <Route exact path="/paginas/deportes" component={Deportes} />
        <Route exact path="/paginas/comidas" component={Comidas} />
        <Route exact path="/paginas/alfabeto" component={Alfabeto} />
        <Route exact path="/paginas/Meses" component={Meses} />
        <Route exact path="/paginas/animales" component={Animales} />
        <Route exact path="/paginas/Colores" component={Colores} />
        <Route exact path="/paginas/saludos" component={Saludos} />
        <Route exact path="/paginas/palabras" component={palabras} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
