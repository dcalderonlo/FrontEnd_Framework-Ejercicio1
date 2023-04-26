// import React from "react";
import "./c-header.css";
import logo from './img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = ({toSection}) => {
  
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid flex-container">
          <div className="navbar-brand mb-0 h1 c-header">
            <a href={() => false} className="logo" onClick={toSection('home')}>
              <img src={ logo } alt="Nombre y logo de la compañía"/>
              <span>three pics</span>
            </a>
          </div>
          <div className="c-header-widget" onClick={toSection('user')}>
            <FontAwesomeIcon icon={ faUser } />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
