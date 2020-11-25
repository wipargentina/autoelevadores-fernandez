import React from "react";

import iconoDisponibilidad from "../assets/statics/icono_disponibilidad.svg";

const Benefits = (props) => (
  <div className="benefits">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2>Equipos nuevos y usados garantizados</h2>
        </div>
        <div className="col-8">
          <p> Si de autoelevadores se trata, nuestra propuesta abarca  desde equipos nuevos, a usados garantizados, asegurándote  máxima prestación a un precio óptimo</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
            </div>
            <div className="benefits-item-title">Inmejorable servicio técnico posventa</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
            </div>
            <div className="benefits-item-title">Modelos estandard y para terrenos irregulares</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
            </div>
            <div className="benefits-item-title">Equipos a explosión y eléctricos.</div>
          </div>
        </div>






        
      </div>
    </div>
  </div>
);

export default Benefits;
