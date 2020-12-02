import React from "react";

import isologos from "../assets/statics/isologo-agrovial-fernandez.png";

// import iconoDisponibilidad from "../assets/statics/icono_disponibilidad.svg";

const AboutUs = (props) => (
    <section id="about_us">
        <div className="container text-center">
            <div className="row justify-content-center">
                <h2 className="col-12 ">Somos Agrovial Fernandez</h2>
                <div className="col-12 mt-4">
                    <img className="isologo" src={isologos} alt="Isologotipo AgroVial Fernandez"></img>
                </div>
                <h5 className="col-12 mt-2 es_marca">Nuestro nombre es marca</h5>
                <h4 className="col-12 col-md-10 col-lg-8 mt-4">Venta y servicios de maquinaria Agro-Industrial de gran porte y máximo rendimiento</h4>
            </div>

            {/* <div className="row justify-content-center mt-5 categories">

                <div className="col-sm-6 col-md-3">
                    <div className="categories-item">
                        <div className="categories-item-icon">
                        <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
                        </div>
                        <div className="categories-item-title">Concesionario oficial Taurus Agrovial</div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="categories-item">
                        <div className="categories-item-icon">
                        <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
                        </div>
                        <div className="categories-item-title">Concesionario oficial Ascanelli</div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="categories-item">
                        <div className="categories-item-icon">
                        <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
                        </div>
                        <div className="categories-item-title">Solución logística integral</div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="categories-item">
                        <div className="categories-item-icon">
                        <img className="img-fluid" src={iconoDisponibilidad} alt="ícono "/>
                        </div>
                        <div className="categories-item-title">Servicio post venta para maquinaria pesada</div>
                    </div>
                </div> 

            </div> */}


        </div>
    </section>
);

export default AboutUs;
