import React from "react";

import Form from './Form.js';

import isologoAgrovialFernandez from "../assets/statics/isologo-agrovial-fernandez.png";

const Hero = (props) => (
  <div className="hero">
    <div className="darken"></div>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-7 text-center">
            <h1>Comprá hoy tu autoelevador</h1>
            <h3>con el respaldo y  la garantía de la empresa líder en venta y servicio técnico de nuestra región</h3>
            <h5>Logo Autoelevadores Fernandez?? </h5>
              <img id="logo_empresa" src={isologoAgrovialFernandez} alt="logotipo de Autoelevadores Fernandez"></img>
            <h4>Te brindamos la solución ideal para la gestión de la logística de tu empresa</h4>
            <h4>(alguna llamada a la acción)</h4>
          </div>
          <div className="col-md-4"><Form /></div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;