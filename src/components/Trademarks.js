import React from "react";

import isologoAscanelli from "../assets/statics/ascanelli.png";
import isologoTaurus from "../assets/statics/taurus-maquinas.png";

const Trademarks = (props) => (
  <div id="trademarks">
    <div className="container text-center">
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4">
                <img className="img-fluid" id="logo_ascanelli" src={isologoAscanelli} alt="Isologotipo Ascanelli"></img>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <img className="img-fluid" id="logo_taurus" src={isologoTaurus} alt="Isologotipo Taurus Máquinas"></img>
            </div>
            
        </div>
    </div>
  </div>
);

export default Trademarks;
