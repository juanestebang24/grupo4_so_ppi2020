import React from "react";
import { img } from "react-bootstrap";
import "../paginas/style/estilos2.scss";
import saludos from "../paginas/imge/saludos.png";
const Saludos = (_) => {
  return (
    <div>
      <img src={saludos} alt="" />
    </div>
  );
};

export default Saludos;
