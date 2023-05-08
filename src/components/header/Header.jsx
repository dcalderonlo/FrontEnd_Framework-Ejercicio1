import "./c-header.css";
import logo from './img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid flex-container">
          <div className="navbar-brand mb-0 h1 c-header">
            <Link to='/home' className="logo">
              <img src={ logo } alt="Nombre y logo de la compañía"/>
              <span>three pics</span>
            </Link>
          </div>
          <Link to='/user' className="c-header-widget">
            <FontAwesomeIcon icon={ faUser } />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
