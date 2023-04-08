// import React from "react";
import  "./c-header.css";
// import style from "./c-header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid flex-container">
        <div className="navbar-brand mb-0 h1 c-header">
          <span>Game of Thrones</span>
        </div>
        <div className=" c-header-widget">
          <FontAwesomeIcon icon={ faUser } /*size="xl"*/ />
        </div>
      </div>
    </nav>
  );
}

export default Header;
