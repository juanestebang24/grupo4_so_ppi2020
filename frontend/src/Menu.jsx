import { form } from "react-bootstrap";

import React, { Component } from "react";

import "./menu.scss";
import { Link } from "react-router-dom";

export default class main extends Component {
  render() {
    return (
      <>
        <div className="contenedor">
          <header>
            <div className="logo">
              <h1>LESCO TRADUCTOR</h1>
            </div>
            <form action>
              <input
                type="text"
                className="barra-busqueda"
                id="barra-busqueda"
                placeholder="Buscar"
              />
            </form>
            <div className="categorias" id="categorias">
              <a href="/" className="activo">
                Todos
              </a>
              <a href="/">Dias</a>
              <a href="/">Deportes</a>
              <a href="/">Comidas</a>
              <a href="/">Alfabeto</a>
              <a href="/">Meses</a>
            </div>
          </header>
          <section className="grid" id="grid">
            <div
              className="item"
              data-categoria="dias"
              data-etiquetas="dias de la semana"
              data-descripcion="1.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/dias.jpg" alt="" />
                <Link to="/paginas/dias">Ir a los dias</Link>
              </div>
            </div>
            <div
              className="item"
              data-categoria="deportes"
              data-etiquetas="deportes Futbol,tennis,basquebol"
              data-descripcion="2.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/deportes.png" alt="" />
                <a href="/paginas/deportes">Ir a los Deportes</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="comidas"
              data-etiquetas="comida sopas,chatarra,ensaladas,jugos"
              data-descripcion="3.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Comida.jpg" alt="" />
                <a href="paginas/comidas">Ir a Comidas</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="alfabeto"
              data-etiquetas="alfabeto abecedario"
              data-descripcion="4.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Alfabeto.jpg" alt="" />
                <a href="paginas/alfabeto">Ir a alfabeto</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="meses"
              data-etiquetas="meses Enero,febrero,marzo"
              data-descripcion="5.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Meses.jpg" alt="" />
                <a href="paginas/Meses">Ir a Meses</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="animales"
              data-etiquetas="animales leon,osos"
              data-descripcion="6.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Animales.jpg" alt="" />
                <a href="paginas/animales">Ir a animales</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="colores"
              data-etiquetas="colores Verde, amarillo"
              data-descripcion="7.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Colores.jpg" alt="" />
                <a href="paginas/Colores">Ir a Colores</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="saludos"
              data-etiquetas="saludos Hola,Buenos"
              data-descripcion="8.- Lorem ipsum dolor sit amet consectetur."
            >
              <div className="item-contenido">
                <img src="img/Saludo.png" alt="" />
                <a href="paginas/saludos">Ir a Saludos</a>
              </div>
            </div>
            <div
              className="item"
              data-categoria="palabras"
              data-etiquetas="palabras de mayor uso"
              data-descripcion="9.- Lorem ipsum dolor sit amet consectetur.
				 	"
            >
              <div className="item-contenido">
                <img src="img/Palabras.png" alt="" />
                <a href="paginas/palabras">Ir a Palabras</a>
              </div>
            </div>
          </section>
          <section className="overlay" id="overlay">
            <div className="contenedor-img">
              <button id="btn-cerrar-popup">
                <i className="fas fa-times" />
              </button>
              <img src alt="" />
            </div>
            <p className="descripcion" />
          </section>
          <footer className="contenedor">
            <div className="creado-por">
              <p>LESCO TRADUCTOR</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
