import React from "react";

import isologos from "../assets/statics/isologo-agrovial-fernandez.png";

const AboutUs = (props) => (
    <section id="about_us">
        <div className="container text-center">
            <div className="row justify-content-center">
                <h2 className="col-12 mb-2">Somos Agrovial Fernandez</h2>
                <div className="col-12 mt-2">
                    <img className="isologo" src={isologos} alt="Isologotipo Semtraco"></img>
                </div>
                <h3 className="col-12 mb-2">Nuestro nombre es marca</h3>
                <h4 className="col-12">Venta y servicios de maquinaria Agro-Industrial de gran porte y máximo rendimiento</h4>
                
                <p>La solucion logistica de nuestra compañía ya tiene nombre propio y es optada por los líderes del sector porque:</p>

                <ul className="col-12 col-lg-6 mt-4 text-left pl-4">
                    <li>Disponemos de equipos exclusivos para el sector Agrovial</li>
                    <li>Pensamos en la seguridad de tu equipo</li>
                    <li>Honramos cada compromiso</li>
                    <li>Somos eficientes ¡Siempre a tiempo!</li>
                </ul>
                
            </div>
        </div>
    </section>
);

export default AboutUs;
