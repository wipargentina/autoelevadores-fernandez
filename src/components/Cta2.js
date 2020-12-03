import React from "react";
import { Link as Scroll } from "react-scroll";

const Cta2 = (props) => (
  <div className="cta">
    <div className="container">
      <h3 className="mb-3">¿Interesado en conocer mas sobre nuestros servicios?</h3>
      <h5 className="mb-4">Dejanos tus datos y nos comunicamos con vos para asesorarte</h5>
      <Scroll
        to="form"
        spy={true}
        smooth={true}
        offset={-70}
        duration={599}
        className="btn btn-lg btn-primary text-white"
        >
        Contactanos
      </Scroll>
    </div>
  </div>
);

export default Cta2;
