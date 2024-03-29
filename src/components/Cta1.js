import React from "react";
import { Link as Scroll } from "react-scroll";

const Cta1 = (props) => (
  <div className="cta">
    <div className="container">
      <h3 className="mb-4">¿Necesitás más información?</h3>
      <Scroll
        to="form"
        spy={true}
        smooth={true}
        offset={-70}
        duration={599}
        className="btn btn-lg btn-primary text-white"
        >
        Dejanos tus datos
      </Scroll>
    </div>
  </div>
);

export default Cta1;
