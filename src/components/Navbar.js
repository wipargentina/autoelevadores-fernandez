import React from 'react';
import classNames from 'classnames';

import isologoAgrovial from '../assets/statics/isologo-agrovial-fernandez.png';

const Navbar =  (props) => {
  const { isTanks } = props;

  const navbarClass = classNames('navbar navbar-expand-lg navbar-dark', {
    isTanks
  });
  
  return (
    <nav className={navbarClass}>
      <div className="container">
        <a href="/" className="navbar-brand ">
          <img src={isologoAgrovial} alt="Isologotipo Agrovial Fernandez"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;