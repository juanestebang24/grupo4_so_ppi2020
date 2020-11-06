import React from "react";
import { img } from "react-bootstrap";
import "../paginas/style/estilos2.scss";
import coloress from "../paginas/imge/coloress.jpg";
const Colores = (_) => {
  return (
    <div>
      <img src={coloress} alt="" />
    </div>
  );
};

export default Colores;
