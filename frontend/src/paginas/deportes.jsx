import React from "react";
import { img } from "react-bootstrap";
import "../paginas/style/estilos2.scss";
import deporte from "../paginas/imge/deporte.jpg";
const Deportes = (_) => {
  return (
    <div>
      <img src={deporte} alt="" />
    </div>
  );
};

export default Deportes;
