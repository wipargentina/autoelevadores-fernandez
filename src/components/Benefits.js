import React from "react";

import iconoTerrenosIrregulares from "../assets/statics/icono_terrenos_irregulares.svg";
import iconoCombustionElectricos from "../assets/statics/icono_combustion_electricos.svg";
import iconoServicioPostventa from "../assets/statics/icono_servicio_posventa.svg";

const Benefits = (props) => (
  <div className="benefits">
    <div className="autoelevador d-block d-md-none"></div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 mt-4">
          <h2>Equipos nuevos y usados garantizados</h2>
        </div>
        <div className="col-md-8 col-lg-6 mt-3">
          <p> Si de autoelevadores se trata, nuestra propuesta abarca  desde equipos nuevos, a usados garantizados, asegurándote  máxima prestación a un precio óptimo</p>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 col-lg-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoTerrenosIrregulares} alt="ícono standard y para terrenos irregulares "/>
            </div>
            <div className="benefits-item-title">Modelos standard y para terrenos irregulares</div>
          </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoCombustionElectricos} alt="ícono equipos a combustión y eléctricos "/>
            </div>
            <div className="benefits-item-title">Equipos a combustión y eléctricos.</div>
          </div>
        </div>

        <div className="col-md-4 col-lg-4">
          <div className="benefits-item">
            <div className="benefits-item-icon">
              <img className="img-fluid" src={iconoServicioPostventa} alt="ícono servicio técnico posventa"/>
            </div>
            <div className="benefits-item-title">Inmejorable servicio técnico posventa</div>
          </div>
        </div>        
      </div>
    </div>
  </div>
);

export default Benefits;
