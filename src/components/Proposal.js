import React from "react";

import isologo from "../assets/statics/isologo-agrovial-fernandez.png";

const Proposal = (props) => (
    <section id="proposal">
        <div className="container text-center">
            <div className="row justify-content-center">
                
                <h3 className="col-12 mt-4 mb-4">Explorá nuestra propuesta / oferta</h3>
                <h5 className="col-12">Concesionario Oficial Ascanelli</h5>
                <div className="col-12 ">
                    <img className="isologo" src={isologo} alt="Isologotipo"></img>
                </div>
                <p>Somos concesionario oficial  Ascanelli en nuestra región, su linea de tolvas autodescargables y sembradoras orientadas a una siembra de precisión y herramientas de soporte diseñadas para un óptimo rinde.</p>

                <h5 className="col-12">Concesionario oficial Taurus Agrovial</h5>
                <div className="col-12 ">
                    <img className="isologo" src={isologo} alt="Isologotipo"></img>
                </div>
                <p>Conoce  la linea  agrovial Taurus. Como concesionario oficial desde el centro del pais, disponemos productos lideres orientados a la obra, mantenimiento vial y maquinaria de carga para tu industria o produccion agroganadera, minicargadores, palas Cargadoras frontales y manipuladores telecopicos.</p>

                <h5 className="col-12">Servicio post venta para maquinaria pesada</h5>
                <p>Nuestro taller local y móvil brinda reconocidas soluciones a toda nuestra línea de productos y nos posiciona como lideres en postventa. Enfocamos nuestra soluciones a optimizar el tiempo operativo en campo, monitorear de manera permanente y proactiva los puntos críticos de tu maquinaria evitando futuros improvistos y perdida de productividad.</p>
                
            </div>
        </div>
    </section>
);

export default Proposal;
