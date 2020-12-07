import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import whatsAppBrand from "../assets/statics/whatsapp-brands.svg";


// import isologoAgrovialFernandez from "../assets/statics/isologo-agrovial-fernandez.png";

const Tanks =  (props) => (
  <>
  <Navbar/>
  <div className="tanks">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>¡Muchas gracias por completar el formulario!</h2>
          <h4 className="mt-4">Tu información ya ha sido asignada a nuestros representantes.<br/>
          En breve nos contactaremos contigo.</h4>
          <h5 className="mt-5">Si lo prefieres, escríbenos por Whatsapp:</h5>
          <a className="btn btn-success" id="btn_whatsapp" href="https://wa.me/543584392334" rel="noopener noreferrer" target="_blank">
            <img src={whatsAppBrand} alt="botón contacto WhatsApp"></img> +54 358 123 456
          </a>

          <h5 className="mt-5">¿Interesado en conocer algo más sobre nosotros?<br/></h5>
          <div className="social mt-4">
            <a className="mx-2" href="https://www.instagram.com/agrovialfernandez/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="rrss_icon"
                icon={faInstagram}
                size="2x"
              />
              <p className="mt-1">Visitanos en Instagram</p>
            </a>
          </div>          
        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;