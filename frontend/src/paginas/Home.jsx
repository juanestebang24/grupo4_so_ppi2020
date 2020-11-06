import { img } from "react-bootstrap";
import {} from "animate.css";
import {} from "we-theme-default";
import {} from "magnific-popup";
import {} from "aos";
import {} from "ionicons";
import {} from "bootstrap-datepicker";
import {} from "flaticon";

import React from "react";
import "../paginas/style/estilos1.scss";
const Home = () => {
  return (
    <>
      <div>
        <div className="block-31" style={{ position: "relative" }}>
          <div className="owl-carousel loop-block-31 ">
            <div
              className="block-30 item"
              style={{ backgroundImage: 'url("images/sordos.png")' }}
              data-stellar-background-ratio="0.5"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h2 className="heading">
                      Ayuda a las personas que lo necesitan.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon">
                    <span className="flaticon-first-aid-kit" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">
                      Como Puedes ayudar a las personas
                    </h3>
                    <p>Ayudandole a pasar las calles, guiarlos.</p>
                    <p>
                      <a href="/"> </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon">
                    <span className="flaticon-donate" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Hacer donación</h3>
                    <p>
                      Si tiene alguna dificultad economica ya que la sociedad
                      los rechazan.
                    </p>
                    <p>
                      <a href="/"> </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon">
                    <span className="flaticon-people" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">Necesitamos de ti </h3>
                    <p>Apoyalos son iguales, no los rechazes.</p>
                    <p>
                      <a href="/"> </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .site-section */}
        <div
          className="featured-donate overlay-color"
          style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-lg-2 mb-3 mb-lg-0">
                <img src="images/manos.png" alt="" />
              </div>
              <div className="col-lg-4 pr-lg-5">
                <span className="featured-text mb-3 d-block">
                  Nuestro proyecto
                </span>
                <h2>¿Qué queremos hacer nosotros ? </h2>
                <p className="mb-3">
                  Desarrollar un sistema didáctico de comunicación que enseñe y
                  evalué el lenguaje de señas para una persona sordo muda y una
                  persona que no lo es.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* .featured-donate */}
        <div className="site-section fund-raisers">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <h2> </h2>
              </div>
            </div>
          </div>
        </div>
        {/* .section */}
        <div className="site-section fund-raisers">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h3>Integrantes</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-5">
                <div className="person-donate text-center bg-light pt-4">
                  <img src="images/3.png" alt="" />
                  <div className="donate-info">
                    <h2>Santiago Jarramillo</h2>
                    <span className="time d-block mb-3" />
                    <div className="donate-amount d-flex">
                      <div className="label" />
                      <div className="amount" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-5">
                <div className="person-donate text-center bg-light pt-4">
                  <img src="images/2.png" alt="" />

                  <div className="donate-info">
                    <h2>Juan Esteban </h2>
                    <span className="time d-block mb-3" />
                    <div className="donate-amount d-flex">
                      <div className="label" />
                      <div className="amount" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-5">
                <div className="person-donate text-center bg-light pt-4">
                  <img src="images/0.png" alt="" />
                  <div className="donate-info">
                    <h2>Jaider Alejandro</h2>
                    <span className="time d-block mb-3" />
                    <div className="donate-amount d-flex">
                      <div className="label" />
                      <div className="amount" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-5">
                <div className="person-donate text-center bg-light pt-4">
                  <img src="images/4.jpg" alt="" />

                  <div className="donate-info">
                    <h2>Juan Esteban Londoño </h2>
                    <span className="time d-block mb-3" />
                    <div className="donate-amount d-flex">
                      <div className="label" />
                      <div className="amount" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* .section */}
        <div className="container">
          <div className="row"></div>
        </div>
        {/* .featured-donate */}
        {/* .section */}
        <footer className="footer">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6 col-lg-4">
                <h3 className="heading-section"> </h3>
                <p className="mb-5" />
                <p>
                  <a href="/" className="btn btn-primary px-4 py-3">
                    {" "}
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="block-23">
                  <h3 className="heading-section">Contacto Informacion</h3>
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">Medellín,Antioquia,Colombia</span>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon icon-phone" />
                        <span className="text">+57 3024511121</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="icon icon-envelope" />
                        <span className="text">
                          Informacion @venzorin26@gmail.com
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                <p></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
