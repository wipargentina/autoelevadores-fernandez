import React from 'react';

import logoWip from '../assets/statics/wip-white.svg';

const Footer =  (props) => (
  <footer>
    <div className="container">
      <a href="https://wipargentina.com/?utm_source=web&utm_medium=link&utm_campaign=autoelevadores_fernandez" target="_blank" rel="noopener noreferrer"><img src={logoWip} alt="wip" className="wip" /></a>
    </div>
  </footer>
)

export default Footer;