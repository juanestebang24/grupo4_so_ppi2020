import React from "react";
import { img } from "react-bootstrap";
import "../paginas/style/estilos2.scss";
import comidas from "../paginas/imge/comidas.jpg";
const Comidas = (_) => {
  return (
    <div>
      <img src={comidas} alt="" />
    </div>
  );
};

export default Comidas;