import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
          <p className="mt-5">Te invitamos a que descargues ....:</p>
          <div className="row justify-content-center mt-2 mb-lg-5">
            <div className="col-12 col-md-6 col-lg-4">
              <a id="btn_tolva_20tn" href="/" alt="" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Descarga algo <strong>- aquí</strong></a>
            </div>
            
          </div>

          <h5 className="mt-4">¿Interesado en conocer algo mas sobre nosotros?<br/></h5>
          <p>Visitanos en nuestras redes sociales</p>
          <div className="social mt-4">
            <a className="mx-2" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
              />
            </a>
            <a className="mx-2" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
              />
            </a>
          </div>          
        </div>
      </div>
    </div>
  </div>
  </>
)

export default Tanks;