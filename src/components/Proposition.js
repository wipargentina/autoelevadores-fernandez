import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// import isologo from "../assets/statics/isologo-agrovial-fernandez.png";

const Proposition = (props) => (
    <section id="proposition">
        <div className="container">
            <div className="row justify-content-center">
                
                <h3 className="col-12 mt-4 mb-5 text-center">Nuestro diferencial:</h3>
                <div className="col-12 col-sm-10 col-lg-8">
                    <ul>
                        <li><FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                        <span>Somos <strong>concesionario oficial Ascanelli</strong> en nuestra región, en toda su línea de <strong>tolvas autodescargables y sembradoras</strong>. Herramientas de soporte para un óptimo rinde y orientadas a una siembra de precisión</span>
                        </li>
                        <li><FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                        <span>Encontrá tu <strong>Taurus Agrovial</strong>, maquinaria vial y soporte de carga <strong>para tu industria o producción agroganadera</strong>. minicargadores, palas cargadoras frontales, retroexcavadoras y manipuladores telescópicos</span>
                        </li>
                        <li><FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                        <span>La <strong>solución logística</strong> de nuestra compañía es <strong>elegida por los líderes</strong> del sector agrovial porque honramos cada compromiso y además disponemos de una flota propia y semis XL, exclusivos y siempre a tiempo</span>
                        </li>
                        <li><FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                        <span>Nuestro <strong>taller local y móvil</strong> brinda reconocidas soluciones a toda nuestra línea de productos y nos posiciona como <strong>líderes en postventa</strong>. Enfocamos nuestras respuestas al tiempo operativo de tu maquinaria</span>
                        </li>
                    </ul>
                </div>

                <div className="col-12 col-sm-10 col-lg-8">
                    
                </div>

                <div className="col-12 col-sm-10 col-lg-8">
                    
                </div>
                
                <div className="col-12 col-sm-10 col-lg-8">
                    
                </div>
                <div className="col-12 col-sm-10 col-lg-8">
                    
                </div>
        
            </div>
        </div>
    </section>
);

export default Proposition;
