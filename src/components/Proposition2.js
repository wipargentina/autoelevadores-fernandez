import React from "react";

import imagenAscanelli from "../assets/statics/imagen-ascanelli.jpg";
import imagenTaurus from "../assets/statics/imagen-taurus.jpg";
import imagenLogistica from "../assets/statics/imagen-logistica.jpg";
import imagenMaquinariaPesada from "../assets/statics/imagen-maquinaria-pesada.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutUs2 = (props) => (
    <section id="proposition2">
        <div className="container text-center">
            
            <div className="row justify-content-center mt-5 categories">

                <h3 className="col-12 mt-4 mb-5 text-center">Nuestro diferencial:</h3>

                <div className="col-sm-11 col-md-6 col-lg-5">
                    <div className="categories_item">
                        <div className="categories_item_graph">
                            <FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                            
                            <div className="categories_item_image">
                                <img className="img-fluid" src={imagenAscanelli} alt="Ascanelli "/>
                            </div>
                        </div>
                        <div className="categories_item_text">
                            <h4>Concesionario oficial <br/>Ascanelli</h4>
                            <p>Somos <strong>concesionario oficial Ascanelli</strong> en nuestra región, en toda su línea de <strong>tolvas autodescargables y sembradoras</strong>. Herramientas de soporte para un óptimo rinde y orientadas a una siembra de precisión</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-11 col-md-6 col-lg-5">
                    <div className="categories_item">
                        <div className="categories_item_graph">
                            <FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                            
                            <div className="categories_item_image">
                                <img className="img-fluid" src={imagenTaurus} alt="ícono "/>
                            </div>
                        </div>
                        <div className="categories_item_text">
                            <h4>Concesionario oficial <br/>Taurus Agrovial</h4>
                            <p>Encontrá tu <strong>Taurus Agrovial</strong>, maquinaria vial y soporte de carga <strong>para tu industria o producción agroganadera</strong>. minicargadores, palas cargadoras frontales, retroexcavadoras y manipuladores telescópicos</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-11 col-md-6 col-lg-5">
                    <div className="categories_item">
                        <div className="categories_item_graph">
                            <FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                            
                            <div className="categories_item_image">
                                <img className="img-fluid" src={imagenLogistica} alt="ícono "/>
                            </div>
                        </div>
                        <div className="categories_item_text">
                            <h4>Solución logística <br/>integral</h4>
                            <p>La <strong>solución logística</strong> de nuestra compañía es <strong>elegida por los líderes</strong> del sector agrovial porque honramos cada compromiso y además disponemos de una flota propia y semis XL, exclusivos y siempre a tiempo</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-11 col-md-6 col-lg-5">
                    <div className="categories_item">
                        <div className="categories_item_graph">
                            <FontAwesomeIcon className="fa_icon" icon={faCheckCircle} size="1x" />
                            
                            <div className="categories_item_image">
                                <img className="img-fluid" src={imagenMaquinariaPesada} alt="ícono "/>
                            </div>
                        </div>
                        <div className="categories_item_text">
                            <h4>Servicio post venta para <br/>maquinaria pesada</h4>
                            <p>Nuestro <strong>taller local y móvil</strong> brinda reconocidas soluciones a toda nuestra línea de productos y nos posiciona como <strong>líderes en postventa</strong>. Enfocamos nuestras respuestas al tiempo operativo de tu maquinaria</p>
                        </div>
                    </div>
                </div>


                

            </div>


        </div>
    </section>
);

export default AboutUs2;
