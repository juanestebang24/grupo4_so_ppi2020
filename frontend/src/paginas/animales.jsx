import React from "react";
import { img } from "react-bootstrap";
import "../paginas/style/estilos2.scss";
import animaless from "../paginas/imge/animaless.jpg";
const Animales = (_) => {
  return (
    <div>
      <img src={animaless} alt="" />
    </div>
  );
};

export default Animales;
