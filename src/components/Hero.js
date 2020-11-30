import React from "react";

import Form from './Form.js';

import isologoAgrovialFernandez from "../assets/statics/isologo-agrovial-fernandez.png";

const Hero = (props) => (
  <div className="hero">
    <div className="darken"></div>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-7 text-center bajada">
            <h1 className="pb-3 pb-sm-4 pb-md-5">¡Comprá hoy tu autoelevador!</h1>
            <img id="logo_empresa" className="pb-2" src={isologoAgrovialFernandez} alt="logotipo Agrovial Fernandez"></img>
            <h5 className="pb-5 es_marca">Nuestro nombre es marca</h5>
            <h3 className="pb-2">Materiales y equipos agroindustriales en movimiento</h3>
          </div>
          <div className="col-md-6 col-lg-4 form"><Form /></div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;