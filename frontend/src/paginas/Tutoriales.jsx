import React from "react";
import ReactPlayer from "react-player";

const Tutoriales = (_) => {
  return (
    <div>
      <ReactPlayer controls url="https://www.youtube.com/watch?v=JMraBJsA9oI" />
      <br />
      <ReactPlayer controls url="https://www.youtube.com/watch?v=EOcVvy1mcYI" />
      <br />
      <ReactPlayer controls url="https://www.youtube.com/watch?v=dhwL6UaKExM" />
    </div>
  );
};

export default Tutoriales;
